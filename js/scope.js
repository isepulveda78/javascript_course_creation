//Global Scope
let myName = "Israel"

function amazingFunction(){
    let myName = "Israel Sepulveda"
    if(2 + 2 == 4){
        let myName ="Israel Jr."
        console.log("inside the if statement", myName)
    }
    console.log("inside our function", myName)
}

amazingFunction()

console.log("in the global scope", myName)