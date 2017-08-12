var chai = require('chai');
var assert = chai.assert;
var isPalindrome = require('../js/isPalindrome.js').isPalindrome;

describe('The function checks for a palindrome', function() {
    it('should return if input is a palindrome', function() {
        assert.equal(isPalindrome("ad!, da"), true);
    });
});