const chai = require("chai");
const assert = chai.assert;
const sCombos = require("../js/app.js");

const tests = {
    test1: ["a", ],
    test2: "ab",
    test3: "abc",    
    test4: "abcd"
}

describe ("should return substrings combinations", () => {
    it ("should return an array", () => {
        assert.includeMembers(sCombos(tests.test1), ["a"]);
        assert.includeMembers(sCombos(tests.test2), ["a", "b", "ab"]);
        assert.includeMembers(sCombos(tests.test3), ["a", "b", "c", "ab", "bc", "abc"]);     
        assert.includeMembers(sCombos(tests.test4), ["a", "b", "c", "ab", "bc", "abc", "abcd"]);
    });
});