// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");
// var db = require("../models");
// var expect = chai.expect;

// // Setting up the chai http plugin
// chai.use(chaiHttp);

// var request;

// describe("GET /api/volunteer", function () {
//     // Before each test begins, create a new request server for testing
//     // & delete all volunteer from the db
//     beforeEach(function () {
//         request = chai.request(server);
//         return db.sequelize.sync({ force: true });
//     });

//     it("should find all volunteer", function (done) {
//         // Add some volunteer to the db to test with
//         db.Example.bulkCreate([
//             { text: "First Example", description: "First Description" },
//             { text: "Second Example", description: "Second Description" }
//         ]).then(function () {
//             // Request the route that returns all volunteer
//             request.get("/api/volunteer").end(function (err, res) {
//                 var responseStatus = res.status;
//                 var responseBody = res.body;

//                 // Run assertions on the response

//                 expect(err).to.be.null;

//                 expect(responseStatus).to.equal(200);

//                 expect(responseBody)
//                     .to.be.an("array")
//                     .that.has.lengthOf(2);

//                 expect(responseBody[0])
//                     .to.be.an("object")
//                     .that.includes({ text: "First Example", description: "First Description" });

//                 expect(responseBody[1])
//                     .to.be.an("object")
//                     .that.includes({ text: "Second Example", description: "Second Description" });

//                 // The `done` function is used to end any asynchronous tests
//                 done();
//             });
//         });
//     });

// });

// describe("POST /api/volunteer", function () {
//     // Before each test begins, create a new request server for testing
//     // & delete all volunteer from the db
//     beforeEach(function () {
//         request = chai.request(server);
//         return db.sequelize.sync({ force: true });
//     });

//     it("should save an example", function (done) {
//         // Create an object to send to the endpoint
//         var reqBody = {
//             text: "Example text",
//             description: "Example description"
//         };

//         // POST the request body to the server
//         request
//             .post("/api/volunteer")
//             .send(reqBody)
//             .end(function (err, res) {
//                 var responseStatus = res.status;
//                 var responseBody = res.body;

//                 // Run assertions on the response

//                 expect(err).to.be.null;

//                 expect(responseStatus).to.equal(200);

//                 expect(responseBody)
//                     .to.be.an("object")
//                     .that.includes(reqBody);

//                 // The `done` function is used to end any asynchronous tests
//                 done();
//             });
//     });
// });  
