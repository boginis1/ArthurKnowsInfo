// MAKE SURE FILE PATHS ARE CORRECT:
require("dotenv").config({ path: "../.env" });
const apiKeys = require("../keys.js");
const db = require("../models");
const LocalNews = require("../models/localNews.js");

var request = require("request");

const bingCustomSearch = {
  customSearch: function(searched, personSearchId) {
    console.log('in a custom search!!!')
    return new Promise((resolve, reject) => {
      console.log("running");
      var subscriptionKey = apiKeys.bingCustomSearchAPIKey;
      var customConfigId = apiKeys.bingCustomSearchCustomConfigId;
      var searchTerm = searched;

      var options = {
        url:
          "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?" +
          "q=" +
          searchTerm +
          "&customconfig=" +
          customConfigId,
        headers: {
          "Ocp-Apim-Subscription-Key": subscriptionKey
        }
      };

      request(options, function(error, response, body) {
        console.log('in a request in custom search')
        var searchResponse = JSON.parse(body);
        let customSearchArray = [];

        if (searchResponse.webPages) {
          for (var i = 0; i < searchResponse.webPages.value.length; ++i) {
            let customSearchObj = {};
            var webPage = searchResponse.webPages.value[i];

            // Add to database:

            db.LocalNews.create({
              name: webPage.name,
              url: webPage.url,
              displayUrl: webPage.displayUrl,
              snippet: webPage.snippet,
              dateLastCrawled: webPage.dateLastCrawled
              // person: personSearchId
            })
              .then(dbResults => {
                console.log('in a request showing db results', dbResults);
                db.PersonSearch.findByIdAndUpdate(
                  personSearchId,
                  { $push: { localnews: dbResults._id } },
                  { new: true }
                )
                  .then(dbData => {
                    console.log('returning DB data!!!')
                    console.log(dbData);
                    return resolve(dbData);
                  })
                  .catch(function(err) {
                    // If an error occurs, send it back to the client
                    console.log(err);
                    return reject(err);
                  });
              })
              .catch(function(err) {
                // If an error occurs, send it back to the client
                console.log(err);
                return reject(err);
              });

            // Name:
            // console.log("name: " + webPage.name);
            customSearchObj.name = webPage.name;

            // URL:
            // console.log("url: " + webPage.url);
            customSearchObj.url = webPage.url;

            // Display Url:
            // console.log("displayUrl: " + webPage.displayUrl);
            customSearchObj.displayUrl = webPage.displayUrl;

            // Snippet:
            // console.log("snippet: " + webPage.snippet);
            customSearchObj.snippet = webPage.snippet;

            // dataLastCrawled:
            // console.log("dateLastCrawled: " + webPage.dateLastCrawled);
            customSearchObj.dateLastCrawled = webPage.dateLastCrawled;

            // console.log();

            customSearchArray.push(customSearchObj);
          }
          // Testing:
          console.log(customSearchArray);

          // Production:
          // return customSearchArray;
        } else {
          // Testing:
          console.log(false);

          // Production:
          // return false;
        }
      });
    })
  }
};

module.exports = bingCustomSearch;

// customSearch("State Farm");
