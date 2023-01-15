/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d17f804femshbbdba9aee594df7p1bc429jsn8d42f2977efa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city)=>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => { 
        console.log(response)
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        // cloud_pct.innerHTML=response.cloud_pct
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
    })
	.catch(err => console.error(err));

    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        //getWeather(city.value) not working in this code
        let cname=document.getElementById("city").value
        console.log(cname)
        getWeather(cname)
        
    })
}
getWeather("Hyderabad")
*/

// 88888888888888888888888888888888888888888


console.log("hello world")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d17f804femshbbdba9aee594df7p1bc429jsn8d42f2977efa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
    .then(response => { 
        console.log(response)
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        // cloud_pct.innerHTML=response.cloud_pct
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
    })
	.catch(err => {console.error(err)

    });


    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        //getWeather(city.value) not working in this code
        let cname=document.getElementById("city").value
        console.log(cname)
        getWeather(cname)
        
    })
}

getWeather("hyderabad")

const popular_city = async (pcity)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+pcity, options)
	.then(response => response.json())
    .then(response => { console.log(response)
    let popular_weather = document.querySelectorAll(".city_val")
    console.log(popular_weather)
        popular_weather[0].innerHTML=response.cloud_pct
        popular_weather[1].innerHTML=response.feels_like
        popular_weather[2].innerHTML=response.humidity
        popular_weather[3].innerHTML=response.max_temp
        popular_weather[4].innerHTML=response.min_temp
        popular_weather[5].innerHTML=response.sunrise
        popular_weather[6].innerHTML=response.sunset
        popular_weather[7].innerHTML=response.temp
        popular_weather[8].innerHTML=response.wind_degrees
        popular_weather[9].innerHTML=response.wind_speed


    
    })
    .catch(err => {console.error(err)

    });


}

const main1 = async ()=>{

let d = await popular_city("Delhi")

let N = await popular_city("New York")

}

main1()