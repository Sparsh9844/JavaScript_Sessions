const user = {
    user : "sparsh",
    price: 1000,

    welcomeMessage: function(){
        console.log(`welcome ${this.user} to your website`)
        console.log(this);
    }
}
// user.welcomeMessage();
// user.user = "john"
// user.welcomeMessage();


// function chai() {
//     const username = "Sparsh"
//     console.log(this.username);
// }

// chai(); // undefined

const chai = () => {
    const username = "Sparsh"
    console.log(this);
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5))

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(4,5))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4,5))

const addTwo = (num1, num2) => ({username: "sparsh"})
console.log(addTwo(4,5))


// const myArr = [1,2,3,4,5]

// myArr.forEach() not working


const numbers = [1, 2, 3, 4];

// forEach iterates over an array and executes a callback function for every element.

numbers.forEach(function (num) {
    console.log(num);
});

