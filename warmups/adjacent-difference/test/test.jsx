const chai = require("chai");
const assert = chai.assert;
const strDiff = require("../js/app.jsx");

const tests = {
    test1: ["this", "is", "an", "array"],
    test2: ["this", "array", "is", "a", "short"],
    test3: ["this", "short", "an", "array", "done"],
    test4: ["this", "short", "length", "array", "done"]
}

describe ("return 3 adjacent longest string combinations", () => {
    it ("should return an array", () => {
        assert.deepEqual(strDiff(tests.test1), ["is", "an", "array"]);
        assert.deepEqual(strDiff(tests.test2), ["this", "array", "is"]);
        assert.deepEqual(strDiff(tests.test3), ["short", "an", "array"]);     
        assert.deepEqual(strDiff(tests.test4), ["short", "length", "array"]);
    });
});