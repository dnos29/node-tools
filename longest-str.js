// const str = "aabbbccccddcceeeee";
// const str = "aabbbccccddcceeeee       ";
// const str = "aabbbccccddcceeeee";
// const str = "aabbbccccddcceeeee";
// var str = "aabbbccccddcceeeee????????";
// var str = "aabbbccccddcceeeee}}}}}}}}}}";
var str = "aabbbccccddcceeeee\\\\\\\\\\\\\\";
const uniqueCharacter = Array.from(new Set(str.split("")));
const specialCharacters = ['?', '[', ']', '{', '}', '.', '\\'];
let matchesAllCharacters = [];
uniqueCharacter.forEach(character => {
  const match = matchesLengthOf(character);
  matchesAllCharacters = matchesAllCharacters.concat(matchesLengthOf(character));
})
const maxLen = matchesAllCharacters.map(m => m.len).reduce((preVal, nextVal) => {
  return Math.max(preVal, nextVal)
}, 0);
console.log(matchesAllCharacters.filter(m => m.len === maxLen));

function matchesLengthOf(character){
  let regexCharacter = character;
  if(specialCharacters.includes(character)){
    regexCharacter = `\\${character}`;
  }
  const regStr = `(${regexCharacter}){1,}`;
  const regex = new RegExp(regStr, 'g');
  const matches = [...str.matchAll(regex)];
  return matches.map(m => ({character: m[1], len: m[0].length}));
}
// special of Regex: ?, *