const camelCase = require("../js/camelCase");
const chai = require("chai");
const assert = chai.assert;

let tests = {
    spaces: "test example",
    hyphens: "test-example",
    undescores: "test_example",
    multiple: "testy_mctest test"
}


describe ("camel case exercise", () => {  
    it("should return camelCase string with no spaces", () => {
        assert.equal(camelCase(tests.spaces),"testExample")
    });
    it("should return camelCase string with no hyphens", () => {
        assert.equal(camelCase(tests.hyphens), "testExample")
    });
    it("should return camelCase string with no underscores", () => {
        assert.equal(camelCase(tests.undescores), "testExample")
    });
    it("should return camelCase string with (from multiples)", () => {
        assert.equal(camelCase(tests.multiple), "testyMctestTest")
    });    
  });
