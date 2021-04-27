const storage = new Storage()
//Get store location data 
const weatherLocation = storage.getLocationData()
const ui= new UI

//Init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state)

//Get weather on DOM load 
document.addEventListener('DOMContentLoaded', getWeather)


//Change Location Event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value 
    const state = document.getElementById('state').value

    //Change location

    weather.changeLocation(city, state)

    //set location data
    storage.setLocationData(city, state)

    //Get Weather again 
    getWeather()

    //Close Modal 
    $('#locModal').modal('hide')
})

function getWeather(){

weather.getWeather()
    .then(results => {
        ui.paint(results)
    })
    .catch(err => 
        console.log(err)
    )

}