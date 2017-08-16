let chai = require("chai");
let assert = chai.assert;
let matchWords = require("../js/matchWords.js");

let tests = {
    noRepeats: "string with no repeats",
    allRepeats: "test test test test test",
    mix: "this is this an is an example test test"
}

describe("matching words test", ()=>{
    it("should return an empty array", ()=>{
        assert.deepEqual(matchWords(tests.noRepeats), []) 
    });
    it("should return an array with one item", ()=>{
        assert.deepEqual(matchWords(tests.allRepeats), ["test"])
    });
    it("should return an array with 4 items", ()=>{
//        assert.deepEqual(matchWords(tests.mix), ["this", "is", "an", "test"])
        assert.deepEqual(matchWords(tests.mix), ["test", "an", "is", "this"])
    });
});