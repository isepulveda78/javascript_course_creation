//Javascript has some built in functions such as the alert function
//alert(data that goes in here is an argument)
//there are other functions as well and we will cover them as we progress in the course.
//Let's create our own function though

function greet(name, age) {
    //name is a parameter
    //inside of here, we have the body of the function
    alert('hello ' + name + '!' + ' I am ' + age + '.')
}
greet('Israel', '42');

function letsAdd(number){
    return 2 + number
}

let addNumber = letsAdd(98);

alert(addNumber)