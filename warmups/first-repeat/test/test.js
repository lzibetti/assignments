let chai = require("chai");
let assert = chai.assert;
let firstRepeat = require("../js/firstRepeat.js")

let tests = {
    firstNonRepeat: "abbc",
    nonRepeat: "aaaabbbcdef",
    allrepeated: "aaaaaaaaaa"
} 

describe("find first non repeat char", ()=>{
    it("should return first char in string if it is non repeated", ()=>{
        assert.equal(firstRepeat(tests.firstNonRepeat), "a") 
    });
    it("should return first non repeated char", ()=>{
        assert.equal(firstRepeat(tests.nonRepeat), "b")
    });
    it("should throw an error", ()=>{
        assert.throws(()=>{firstRepeat(tests.allRepeated)}, "String is all repeated")
    });
});