const db = require("../models");
const bing = require("../Bing");
const LocalNews = require("../models/localNews.js");
const TwitterHelperClass = require('../routes/twitter-helper')
const nyTimesHelperClass = require('../routes/nyTimes-helper')

function parseNYTArticles(data) {
    var NYTData = data.response.docs;
    var NYTArticles = [];

    NYTData.forEach(function(article) {
        var { pub_date, snippet, web_url, headline } = article;
        var print_headline = headline.print_headline;
        NYTArticles.push({
            print_headline,
            pub_date,
            snippet,
            web_url
        })

    })

    return NYTArticles;

}

module.exports = {
  searchPerson: function(req, res) {
    console.log("@@@@@@@@@@", req.body);

    let company = emailHandler(req.body.company);
    const twitterHandle = req.body.twitterHandle;


    db.PersonSearch.findOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: company
    })
      .populate("localnews")
      .then(async dbResults => {
        const twitter = async () => new TwitterHelperClass(twitterHandle)
          .then(resp => {
            // console.log('in twitter helper response', resp)
            return resp
          })
        // console.log(dbResults)
        // let resultsArray = [];
        const nyTimes = async () => new nyTimesHelperClass(Reflect.get(req.body, 'company'))
          .then(resp => {
            console.log('in nytimes', resp)
            return parseNYTArticles(resp)
          })
        const bingResults = async () => {
          if (!dbResults == true && typeof dbResults == "object") {
            console.log("run the bing search and twitter!");
          //  try {
            const results = await bing.bingSearch.regularSearch(
              req.body.firstName,
              req.body.lastName,
              company
            );
            console.log('we are in bing search', results);
            // res.json(results)
            return results
            //}
            //catch (err) {
              //console.log('error when trying to search bing', err)
              // res.status(422).json(err)
            //}
          } else {
            // res.json(dbResults);
            return dbResults
          }
        }

        try {
          const results = await Promise.all([twitter(), nyTimes()])
          console.log('Results of twitter and bing', results);
          res.json({twitter: results[0], bing: results[1]});
        } catch (e) {
          console.error(e)
          res.status(422).json(e)
        }
        /*
        if (!dbResults == true && typeof dbResults == "object") {
          console.log("run the bing search and twitter!");
          try {
            const results = await Promise.all([bing.bingSearch.regularSearch(
              req.body.firstName,
              req.body.lastName,
              company
            )]);
            console.log('we are in bing search', results[0]);
            res.json(results)
          } catch (err) {
            console.log('error when trying to search bing', err)
            res.status(422).json(err)
          }
        } else {
          res.json(dbResults);
        */



          // resultsArray.push(dbResults);
          // bing.bingCustomSearch.customSearch(req.body.company)

          // return LocalNews.find({ person: dbResults._id }).populate("LocalNews")
          //                 .then(dbNews => {
          //                     // res.json(dbNews);
          //                     resultsArray.push(dbNews);

          //                     res.json(resultsArray);
          //                 })
      })
      .catch(err => res.status(422).json(err));
  }
};

function emailHandler(email) {
  if (email.includes("@")) {
    // As long as we have a RegEx email checker this will work
    const genericEmailsArray = [
      "gmail",
      "yahoo",
      "hotmail",
      "ymail",
      "msn",
      "icloud",
      "apple",
      "outlook",
      "aol",
      "cox",
      "yandex"
    ];
    let extractedCompanyWithDotCom = email.split("@");
    let extractedCompanyArray = extractedCompanyWithDotCom[1].split(".");
    let extractedCompany = extractedCompanyArray[0];
    if (genericEmailsArray.includes(extractedCompany)) {
      // In Test:
      // console.log('generic company');

      // In production
      return "godaddy";
    } else {
      // In Test:
      // console.log(extractedCompany);

      // In Production:
      return extractedCompany;
    }
  } else {
    return email;
  }
}

// function checkForCompany(req){
//     if(req.company){
//         // console.log("Theres a company");
//         db.PersonSearch
//         .findOne({firstName: req.firstName, lastName: req.lastName, company: req.company})
//         .then(dbResults =>{
//             console.log(dbResults)
//             if(dbResults == null){
//                 console.log("run the bing search!");
//                 bing.bingSearch(req.firstName, req.lastName);
//             }
//         })
//         .catch(err => res.status(422).json(err));
//     }
//     else{
//         console.log("No company here");
//         db.PersonSearch
//         .findOne({firstName: req.firstName, lastName: req.lastName})
//         .then(dbResults =>{
//             console.log(dbResults)
//             if(dbResults == null){
//                 console.log("run the bing search!");
//             }
//         })
//         .catch(err => res.status(422).json(err));
//     }
// }

// module.exports = {
//     searchPerson: function(req, res){
//         console.log(req.body);

//         res.json(req.body);
//     }
// }

// Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.PersonSearch
//       .find(req.query)
//       .sort({ date: -1 })
//       .then((dbModel) => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.PersonSearch
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.PersonSearch
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.PersonSearch
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
