//require("dotenv").config();
//this is frontend only so dotevn is not used here so this is just a placeholder with the api key and url this will work :)
const APIKey = process.env.API_Key;
const APIUrl = process.env.API_Url;

const input_box = document.getElementById("name");
const input_button = document.getElementById("but");
const Icon = document.querySelector(".icon_weather");

function addloc(){
    //does when clicked on the button
    if(input_box.value === " "){
        alert("please enter a location")
    }
    else{
    Weatherinfo(input_box.value);
    }
    input_box.value = "";
}


async function Weatherinfo(place){
    //gets the info
    const response = await fetch(APIUrl + place + `&appid=${APIKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    //seeing/ printing the API info
    console.log(data);
    
    //getting the info from the api
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".feels_like").innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    //this is so the info only displays when requested
    document.querySelector(".invalid").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    weatherIconGet(Icon);
    }
}

//this should genarate the icons according the weather
function weatherIconGet(con){
    const WeatherCond = data.weather[0].main;

    if (WeatherCond === "Clouds") {
        con.classList.add("fas", "fa-cloud");
    } 

    else if (WeatherCond === "Clear") {
        con.classList.add("fas", "fa-sun");
    } 

    else if (WeatherCond === "Rain") {
        con.classList.add("fas", "fa-cloud-showers-heavy");
    }
     
    else if (WeatherCond === "Drizzle") {
        con.classList.add("fas", "fa-cloud-rain");
    }
}

input_button.addEventListener("click", addloc);