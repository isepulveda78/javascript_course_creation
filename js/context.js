let person = {
    firstName: "Israel",
    lastName: "Sepulveda",
    carType() {
        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

person.carType()

function breathe(){
    console.log(this.firstName + " " + this.lastName + " just inhales and exhaled.")
}

breathe.call(person)