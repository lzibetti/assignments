const chai = require("chai");
const assert = chai.assert;
const parenth = require("../js/app.js")

const tests = {
    case1: "()))))",
    case2: "())(())(",
    case3: ")()()(",
    case4: "(((())))((",
    case5: ")()()()((",
    case6: "(()((()(())(",
    case7: "((()))",
    case8: "()()()()" 
}

describe(" balance parenthesis", ()=>{
    it("should return false", ()=>{
        assert.equal(parenth(tests.case1), false);
        assert.equal(parenth(tests.case2), false);
        assert.equal(parenth(tests.case3), false);
        assert.equal(parenth(tests.case4), false);
        assert.equal(parenth(tests.case5), false);
        assert.equal(parenth(tests.case6), false);
    });
    it("should return true", ()=>{
        assert.equal(parenth(tests.case7), true);
        assert.equal(parenth(tests.case8), true);
    });
});

