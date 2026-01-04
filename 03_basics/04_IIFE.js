// Immediately Invoked Function Expressions (IIFE)  

// function jaldi excecute krne ke liye use krte hai or global scope ke variables se problem hoti h kai bar to usko hatane ke liye ya usse bachne ke liye IIFE ka use krte hai


(function chai() {
    console.log("DB connected")
})(); //this ; is important when writing two IIFE one after another

( (name) => {
    console.log(`DB connected two ${name}`)
})("sparsh")



