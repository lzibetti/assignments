let chai = require("chai");
let assert = chai.assert;
let primeFactor = require("../js/app.js");

let tests = {
    one: 1,
    isPrime: 11,
    nonPrime: 18
}

describe("count number of factors", ()=>{
    it("should return the number 1", ()=>{
        assert.equal(primeFactor(tests.one), 1)
    });
    it("should return a prime number", ()=>{
        assert.equal(primeFactor(tests.isPrime), 11)
    });
    it("should return non-prime", ()=>{
        assert.equal(primeFactor.nonPrime, 18)
    });
});