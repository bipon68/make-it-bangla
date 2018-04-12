var str8 = require('../index');

describe('#str8.js', function() {
    
    describe("Testing firstHalf function", function () {
        it('test should return te', function() {
            expect(str8.firstHalf("test")).toEqual("te");
        }); 
        it('test shouldn not return 42', function() {
            expect(str8.firstHalf("test")).not.toEqual("42");
        }); 
    });

    describe("Testing secondHalf function", function () {
        it('test should return st', function() {
            expect(str8.secondHalf("test")).toEqual("st");
        }); 
        it('test shouldn not return 42', function() {
            expect(str8.firstHalf("test")).not.toEqual("42");
        }); 
    });
    
    describe("Testing prune function", function () {
        it('test should return es', function() {
            expect(str8.prune("test")).toEqual("es");
        }); 
        it('a', function() {
            expect(str8.prune("a")).toEqual("");
        }); 
    });
    
    describe("Testing capitelizeFirst function", function () {
        it('test should return Test', function() {
            expect(str8.capitalizeFirst("test")).toEqual("Test");
        }); 
    });
    
    describe("Testing isValidURL function", function () {
        it('valid url', function() {
            expect(str8.isValidURL("http://thodorisbais.com")).toBe(true);
        }); 
        it('invalid url', function() {
            expect(str8.isValidURL("toubou")).toBe(false);
        }); 
    });

    describe("Testing quichHash function", function () {
        it('valid hash', function() {
            expect(str8.quickHash('')).toEqual('');
            expect(str8.quickHash('test')).toBeDefined();
        });
    });
    
});

   
