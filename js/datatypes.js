let age = 15 //number
let lastName = "Sepulveda" //String
let x = {firstname: "Israel", lastName: "Sepulveda"} //object
let noWay = false //boolean
let yesWay = true //boolean
let favoriteFruits = ["bananas", "blueberries", "apples"]
if(age === 15){
    console.log(yesWay)
}else{
    console.log(noWay)
}

if(age){ //this means if there's an age. Then it will be true
    console.log(yesWay)
}else{
    console.log(noWay)
}

if(x.firstname === "Max"){ //this means if there's an age. Then it will be true
    console.log(yesWay)
}else{
    console.log(noWay)
}

if(x.firstname === "Max"){ 
    console.log(yesWay)
}else{
    console.log(noWay)
}

if(favoriteFruits[1] === "blueberries"){ 
    console.log(yesWay)
}else{
    console.log(noWay)
}