const chai = require("chai");
const assert = chai.assert;
const chckType = require();

let tests = {
    sameDataType: true,
    isNotSameType: false
}
describe("Check that the array are all the same type", ()=>{
    it("should return true if all are the same data type", ()=>{
        assert.deepEqual(chckType(tests.sameDataType), true)
    });
    it("should return false data types different", ()=>{
        assert.deepEqual(chckType(test.isNotSameType), false)
    });
});