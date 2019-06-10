var db = require("../models");
var axios = require("axios");
var moment = require('moment');
module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


// ------------ Categories API Routes ------------//  
  // Get random articles when category page is loaded
  app.get("/categories", function(req, res) {
    const currentDate = moment().format('YYYY-MM-DD');
    var queryURL = 'https://newsapi.org/v2/everything?' +
      'q=feminism' +
      '&from=' + currentDate +
      'sortBy=relevance&' +
      'language=en&' +
      'apiKey=7901a57d723f41f19a8842e99327ab2e';
    // axios call to get api based on the category
    axios.get(queryURL).then(function(result) {
      console.log(result);
      var resultData = result.data.articles;
      for (i = 0; i < resultData.length; i++) {
        resultData[i].publishedAt = moment(resultData[i].publishedAt).format("LL");
      }
      res.render("categories", {result: resultData})
    });
  });  

  // Get articles by specific category
    app.get("/api/categories/:category", function(req, res) {
      const category = req.params.category;
      const currentDate = moment().format('YYYY-MM-DD');
      var queryURL = 'https://newsapi.org/v2/everything?' +
        'q=' + category +
        '&from=' + currentDate +
        'sortBy=relevance&' +
        'language=en&' +
        'apiKey=7901a57d723f41f19a8842e99327ab2e';
      // axios call to get api based on the category
      axios.get(queryURL).then(function(result) {
        console.log(result);
        var resultData = result.data.articles;
        for (i = 0; i < resultData.length; i++) {
          resultData[i].publishedAt = moment(resultData[i].publishedAt).format("LL");
        }
        res.render("categories", {result: resultData})
      });
    });

// ------------ Index API Routes ------------//  
  
  // Get latest posts
  app.get("/", function(req, res) {
    const currentDate = moment().format('YYYY-MM-DD');
    var queryURL = 'https://newsapi.org/v2/everything?' +
      'q=female+leaders' +
      '&from=' + currentDate +
      'sortBy=relevance&' +
      'language=en&' +
      'apiKey=7901a57d723f41f19a8842e99327ab2e';
    // axios call to get api based on the category
    axios.get(queryURL).then(function(result) {
      console.log(result);
      var resultData = result.data.articles;
      for (i = 0; i < resultData.length; i++) {
        resultData[i].publishedAt = moment(resultData[i].publishedAt).format("LL");
      }
      res.render("index", {result: resultData})
    });
  });

    // Get articles by specific category
    app.get("/api/index/:category", function(req, res) {
      const category = req.params.category;
      const currentDate = moment().format('YYYY-MM-DD');
      var queryURL = 'https://newsapi.org/v2/everything?' +
        'q=' + category +
        '&from=' + currentDate +
        'sortBy=relevance&' +
        'language=en&' +
        'apiKey=7901a57d723f41f19a8842e99327ab2e';
      // axios call to get api based on the category
      axios.get(queryURL).then(function(result) {
        console.log(result);
        var resultData = result.data.articles;
        for (i = 0; i < resultData.length; i++) {
          resultData[i].publishedAt = moment(resultData[i].publishedAt).format("LL");
        }
        res.render("categories", {result: resultData})
      });
    });

};
