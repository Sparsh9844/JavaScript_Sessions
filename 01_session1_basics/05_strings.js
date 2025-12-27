const name = "sparsh"
const repoCount = 4

// console.log(name + repoCount + "value") this is not a perfect way

console.log(`Hello mhy name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.indexOf('t'))

console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
// console.log(newStringOne.trim()); we use trim to remove the spaces


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));