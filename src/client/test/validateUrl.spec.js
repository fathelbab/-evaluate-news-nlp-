import {validateUrl} from '../js/urlValidation'
import "@babel/polyfill";




describe('Testing the url validation function  ', ()=> {

    test ('testing if the function is defined', ()=> {
        expect(validateUrl).toBeDefined()
    })


    test ('Test case for invalid input, should return false', ()=> {
        expect(validateUrl('abcdep')).toBeFalsy()
    })


    test ('Test case for valid Input, should return true', ()=> {
        expect(validateUrl('https://www.npmjs.com/package/workbox-webpack-plugin')).toBeTruthy()
    })


})







   


