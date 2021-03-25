import {sendUrl} from '../js/formHandler'
import "@babel/polyfill";
const request = require('supertest');
const express = require('express');

const app = express();

describe('Testing the url sendUrl ', ()=> {

    test ('testing if the function is defined', ()=> {
        expect(sendUrl).toBeDefined()
    })
})

// simulating senUrl

 app.post('/http://localhost:8082/add-url', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.json('https://www.npmjs.com/package/workbox-webpack-plugin');
 });

  describe('POST  /add-url', function(){
    it('should respond with a json 200 response setting Accept header', function(done) {
        request(app)
            .post('/http://localhost:8082/add-url', {
                json: true,
                body: 'https://www.npmjs.com/package/workbox-webpack-plugin'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

})