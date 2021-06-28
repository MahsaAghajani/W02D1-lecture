const assert = require("assert").strict
const numberOfVowels = require("../numberOfVowels")

describe("numberOfVowels with Mocha", () => {
    it("there is 2 vowels in pizza", () => {
        assert.equal(numberOfVowels("pizza"), 2)
    })
    
    it("there is 3 vowels in sashimi", () => {
        assert.equal(numberOfVowels("sashimi"), 3)
    })
    
})
