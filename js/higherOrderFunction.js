//Example of a function that accets a function as argument.

// document.addEventListener("click", ourAmazingFunction);

// function ourAmazingFunction(){
//     alert("Thank you for clicking.")
// }

//Create an example function that returns a function

// function createMultiplier(multiplier){
//     return function(x){
//         return x * multiplier
//     }
// }

// let doubleMe = createMultiplier(2)
// let tripleMe = createMultiplier(3)
// let quadrupleMe = createMultiplier(4)

// document.write(tripleMe(40))

//Foreach is a higher order function. Other higher function include map() and filter() which all arrays get access to

let myColors = ['red', 'orange', 'yellow']

myColors.forEach(saySomethingNice)

function saySomethingNice(color){
    document.write("The color " + color + " is a great color.<br>")
}