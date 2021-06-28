const numberOfVowels = require("./numberOfVowels")
const assert = require("assert").strict


try{
    console.log(assert.equal(numberOfVowels("pizza"), 1, "Check pizza has 2 vowels"))
}
catch(error)
{
    console.log(error.name, error.message)
    console.log("Actual is ", error.actual, " while expected is ", error.expected)
}

try{
    console.log(assert.equal(numberOfVowels("sashimi"), 3, "Check sashimi has 3 vowels"))
}
catch(error)
{
    console.log(error.name, error.message, error.actual)
}
