const myName = "Manish"
const myAge = 26

// console.log(myName + myAge + " is True"); //Slightly outdated, Use backticks ``, It uses string interpolation.

console.log(`My name is ${myName} and I am ${myAge} years old`);

const gameName = new String("BattlegroundsMobileIndia")

// console.log(gameName.length);
// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(23));
// console.log(gameName.lastIndexOf('a'));

const secondGameName = gameName.substring(0, 13)
// console.log(secondGameName);

const thirdGameName = gameName.slice(0, -10)
// console.log(thirdGameName);

const newStringOne = "     Centaur       "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimEnd());
// console.log(newStringOne.trimStart());

const url = "https://centaur-best-player.pubg%20bgmi.com"

console.log(url.replace('%20', '-'));
console.log(url.split('-'));
console.log(url.includes('pubg'));