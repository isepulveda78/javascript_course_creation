class UI {
    constructor(){
        this.location = document.getElementById('location')
        this.desc = document.getElementById('desc')
        this.string = document.getElementById('string')
        this.icon = document.getElementById('icon')
        this.details = document.getElementById('details')
        this.humidity = document.getElementById('humidity')
        this.uvIndex = document.getElementById('uv_index')
        this.feelsLike = document.getElementById('feelslike')
        this.wind = document.getElementById('wind')
    }

    paint(weather){
        this.location.textContent = weather.location.name
        this.desc.textContent = weather.current.weather_descriptions
        this.string.innerHTML = `${(weather.current.temperature * 9/5) + 32} <span>&deg;</span> F`
        this.icon.setAttribute('src', weather.current.weather_icons)
        this.uvIndex.textContent = `UV Index: ${weather.current.uv_index}`
        this.humidity.textContent = `Humidity: ${weather.current.humidity}`
        this.feelsLike.innerHTML = `Feels Like: ${(weather.current.feelslike * 9/5) +32} <span>&deg;</span> F`
        this.wind.textContent = `Wind: ${weather.current.wind_speed}`
    }
}