var chai = require('chai');
var assert = chai.assert;

var isPalindrome = require('../js/checkPalindrome.js').isPalindrome;

describe('A function checking if a word is a palindrome', function () {
   it('should return true if it is a palindrome', function () {
       assert.equal(isPalindrome('startrats'), true);
   }) 
});