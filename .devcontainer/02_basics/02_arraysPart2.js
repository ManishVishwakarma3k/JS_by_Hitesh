const marvelHeroes = ["Ironman", "Thor", "Hulk", "Spiderman"]
const dcHeroes = ["Superman", "Batman", "Aquaman", "Flash"]

marvelHeroes.push(dcHeroes)
marvelHeroes.pop()

// console.log(marvelHeroes);
// console.log(marvelHeroes[4][3]);

const allHeroes = marvelHeroes.concat(dcHeroes)// Allows 2 arrays to merge
// console.log(allHeroes);

const allHeroesNew = [...marvelHeroes, ...dcHeroes] // Allows multiple arrays to merge and spreads the elements
// console.log(allHeroesNew);

const numberArray = [1, 2, 3, [4, 5, 6], 7, 8, [9 , 10, 11, [12, 13, 14], 15, 16]]
const convertedNumberArray = numberArray.flat(Infinity)
// console.log(convertedNumberArray); // Flatens array based level provided in brackets.

// console.log(numberArray);

console.log(Array.isArray(["Manish", "Vishwakarma"]));
console.log(Array.from("Ironman"));
console.log(Array.from({fName: "Manish"})); // If cannot convert to array returns empty parenthesis

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

