const {expect} = require("chai")
const numberOfVowels = require("../numberOfVowels")

describe("numberOfVowels with Chai", () => {
    it("there is 2 vowels in pizza", () => {
        
        expect(numberOfVowels("pizza")).to.equal(2);
    })
    
    it("there is 3 vowels in sashimi", () => {
        
        expect(numberOfVowels("sashimi")).to.equal(3);
    })
    
})