const marvelHeros = ["thor" , "Ironman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// marvelHeros.push(dc_heros)
// console.log(marvelHeros)

// const all_heros = marvelHeros.concat(dc_heros)
// console.log(all_heros)

// const all_new_heros = [...marvelHeros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat()  In JavaScript, flat() is an array method used to flatten nested arrays
// console.log(real_another_array)
//////////////////////////////////////////////////////////////////////
// let arr = [1, [2, 3], [4, 5]];

// let flatArr = [].concat(...arr);

// console.log(flatArr); // [1, 2, 3, 4, 5]

    // same as

// arr.flat();

//////////////////////////////////////////////////////////////////////

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



