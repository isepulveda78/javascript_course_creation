let pets = [
    {name: "Shaky", species: "cat", age: 100},
    {name: "Dick", species: "dog", age: 4 },
    {name: "Slick", species: "dog", age: 1}
]

// let ourTest = pets.map(nameOnly)

function nameOnly(x){
    return x.name
}

let dogs = pets.filter(onlyDogs)

function onlyDogs(x){
    return x.species == "dog"
}

function onlyBabies(x){
    return x.age < 3
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)

console.log(babyDogNames)