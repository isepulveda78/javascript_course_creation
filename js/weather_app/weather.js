class Weather {
    constructor(city, state){
        this.apikey = ''
        this.city = city
        this.state = state
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apikey}&query=${this.city},${this.state}`)
   
        const responseData = await response.json()

        return responseData
    }

    // Change weather location
    changeLocation(city, state){
        this.city = city
        this.state = state
    }
}