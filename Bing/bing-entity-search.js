// MAKE SURE FILE PATHS ARE CORRECT:
require("dotenv").config({ path: "../.env" });
const apiKeys = require("../keys.js");
("use strict");
const db = require("../models");
const bing = require("./bing-custom-search");

let https = require("https");

const bingEntitySearch = {
  searchEntity: function(entity, firstName, lastName) {
    return new Promise((resolve, reject) => {
      let subscriptionKey = apiKeys.bingEntitySearchAPIKey;

      let host = "api.cognitive.microsoft.com";
      let path = "/bing/v7.0/entities";

      let mkt = "en-US";
      let q = entity;

      let params = "?mkt=" + mkt + "&q=" + encodeURI(q);

      let response_handler = function(response) {
        let body = "";
        response.on("data", function(d) {
          body += d;
        });
        response.on("end", function() {
          let body_ = JSON.parse(body);
          let body__ = JSON.stringify(body_, null, "  ");
          // console.log(body__);
          return bingEntitySearch.handleResults(body_, firstName, lastName, entity);
        });
        response.on("error", function(e) {
          console.log("Error: " + e.message);
        });
      };

      let Search = function() {
        let request_params = {
          method: "GET",
          hostname: host,
          path: path + params,
          headers: {
            "Ocp-Apim-Subscription-Key": subscriptionKey
          }
        };

        let req = https.request(request_params, response_handler);
        req.end();
      };

      Search();
    })
  },

  handleResults: function(results, firstName, lastName, company) {
    return new Promise((resolve, reject) => {
      // Empty object to build our data object
      let entitySearchObj = {};

      // Visualize Incoming Results
      // console.log(results.places);
      // console.log(JSON.stringify(results, null, ' '));

      // handles if searchEntity doesn't give back useful data
      if (!results.entities) {
        // Checks if it at least gives us places which will give us the url
        if (results.places) {
          entitySearchObj.companyWebsiteUrl = results.places.value[0].url;
        } else {
          // Testing
          console.log(false);
          return resolve(false)

          // Production:
          // return false;
        }
      } else {
        // Display all data
        // console.log(results.entities);

        // Asign data points to the entitysearch results object
          entitySearchObj.companyWebsiteUrl =
          results.entities.value[0].url || undefined;
          entitySearchObj.companyDescription =
          results.entities.value[0].description || undefined;

        // Could possibly grab Wikipedia page if needed. Lives in contractualRules array
      }

      if(entitySearchObj.companyWebsiteUrl && entitySearchObj.companyDescription){
        console.log("lets store both!");
          db.Company.create({company: company,
            companyURL: entitySearchObj.companyWebsiteUrl,
            companyDescription: entitySearchObj.companyDescription})
            .then(dbBothResults =>{
              db.PersonSearch.findOneAndUpdate(
                {
                firstName: firstName,
                lastName: lastName,
                company: company
              },
              {
                $set: {
                  companyURL: dbBothResults.companyURL,
                  companyDescription: dbBothResults.companyDescription
                }
              })
              .then(dbPersonBothUpdate => {
                console.log("BINGO!!!!");
                console.log(dbPersonBothUpdate);

                return bing.customSearch(company, dbPersonBothUpdate._id);
              })
            })

      }
      else if(entitySearchObj.companyWebsiteUrl){
        console.log("only store one");

        db.Company.create({company: company,
          companyURL: entitySearchObj.companyWebsiteUrl
          })
          .then(dbBothResults =>{
            db.PersonSearch.findOneAndUpdate(
              {
              firstName: firstName,
              lastName: lastName,
              company: company
            },
            {
              $set: {
                companyURL: dbBothResults.companyURL
              }
            })
            .then(dbPersonBothUpdate => {
              console.log("BINGO!!!!");
              console.log(dbPersonBothUpdate);

              return bing.customSearch(company, dbPersonBothUpdate._id);


            })
          })
      }
      else{

        // I'm going out on a limb and presupposing that if the company doesn't have a website
        // or description come back from Bing entity search then they won't have any local news
        // articles show up on the custom search.
        console.log("store company name only");
        db.Company.create({company: company})
      }
    })
  }
};


module.exports = bingEntitySearch;
// bingEntitySearch.searchEntity("alda");
