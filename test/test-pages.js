// var expect  = require('chai').expect;
// var request = require('request');
// var mysql= require('mysql');

// it('Main page content', function(done) {
//     request('http://localhost:3000/main' , function(error, response, body) {
//         expect(response.body).to.equal('hello ');
//         done();
//     });
// });

//     it('Main page status', function(done) {
//     request('http://localhost:3000/main' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

//     it('About page content ', function(done) {
//     request('http://localhost:3000/login' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });

//     it('About page content ', function(done) {
//     request('http://localhost:3000/login' , function(error, response, body) {
//         expect(response.client._httpMessage.method).to.equal('GET');

//         done();
//     });
// });

//    describe('Access to DataBase', function(){
//    describe('#fail', function(){
//         it('should return -1 because wrong credentials', function(done){
//             var connect = mysql.createConnection({
//     			host: 'sql12.freesqldatabase.com',
//     			user:'sql12199746',
//     			password:'hbpfE6sY22',
//     			database:'sql12199746'
// });
//             connect.connect(done);
//         });
//     })
// });
