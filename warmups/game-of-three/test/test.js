const chai = require("chai");
const assert = chai.assert;
const threeGame = require("../js/app.js")

const tests = {
    test1: -1,
    test2: 0,
    test3: 1,
    test4: 2,
    test5: 3,
    test6: 9,
    test7: 99290,
    test8: 1206901093831
}

describe ("how many times number is processed before getting to 1", () => {
    it("should return invalid number", () => {
        assert.equal(threeGame(tests.test1), "invalid");
        assert.equal(threeGame(tests.test2), "invalid");
    })
    it("should return count", () => {
        assert.equal(threeGame(tests.test3), 0);
        assert.equal(threeGame(tests.test4), 1)
        assert.equal(threeGame(tests.test5), 1)
        assert.equal(threeGame(tests.test6), 2)
        assert.equal(threeGame(tests.test7), 11)
        assert.equal(threeGame(tests.test8), 25)
    })
})