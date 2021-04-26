let firstForm = document.getElementById('formulario-contactanos')
let getName = document.getElementById('name')
let lastName = document.getElementById('lastname')
let number = document.getElementById('number')
let email = document.getElementById('email')
let gracias = document.getElementById('gracias')

firstForm.addEventListener("submit", (e) => {
    ourForm();
})

function ourForm(){
    getName.value = ''
    lastName.value = ''
    number.value = ''
    email.value = ''
    gracias.style.display = "block"
}

let secondForm = document.getElementById('formulario-contactanos-second')
let getSecondName = document.getElementById('name-second')
let secondLastName = document.getElementById('lastname-second')
let secondNumber = document.getElementById('number-second')
let secondEmail = document.getElementById('email-second')
let secondGracias = document.getElementById('gracias-second')

secondForm.addEventListener("submit", (e) => {
    ourSecondForm();
})


function ourSecondForm(){
    getSecondName.value = ''
    secondLastName.value = ''
    secondNumber.value = ''
    secondEmail.value = ''
    secondGracias.style.display = "block"
}


