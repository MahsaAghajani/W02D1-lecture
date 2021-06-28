const numberOfVowels = (str) => {
const vowels = 'aeiou'
let counter = 0;

for(const letter of str)
{
    if(vowels.includes(letter))
    {
        counter = counter + 1;
    }
}

return counter;
}

module.exports = numberOfVowels;


