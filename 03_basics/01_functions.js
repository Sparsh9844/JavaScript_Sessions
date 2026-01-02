function sayMyName() {
    console.log("s");
    console.log("p");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNum(4, 5)

function addTwoNum(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNum(4, 5)
// console.log(result);
// console.log(typeof result);

function loginUserName(userName = "sam"){
    if(!userName) {
        console.log("please enter a valid userName:")
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserName("userName = sparsh"))


//////// spread operator also we call it rest operator //////////
function calculateCartPrice(val1, val2 , ...num){
    return num
}
// console.log(calculateCartPrice(20, 30, 40, 50));

const user = {
    userName: "sparsh",
    price: 300
} 

function handleObject(anyObject) {
    console.log(`userName is ${anyObject.userName} and the price is ${anyObject.price}`)
}
// console.log(handleObject(user));


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

