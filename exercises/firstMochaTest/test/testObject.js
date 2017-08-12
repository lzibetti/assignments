var assert = chai.assert;

describe("Should have a successful user case", function() {
    it('should be first name', function() {
        var testUser = new User("Gary","Wight",15, "M");  

        assert.equal(testUser.firstname, "Gary", "First name is Gary");
    });
    it('get gender', function() {
        var testUser = new User("Gary","Wight",15, "F");  

        assert.notEqual(testUser.gender, "F");
    });
});

