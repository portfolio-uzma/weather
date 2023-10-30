let weatherApi = {
    key: "6931e384b3dfb28e76020c5f1655c7cb",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?q="
};

let searchInput = document.getElementById("input-box");


// Event Listener
searchInput.addEventListener("keypress", function(event){

    if(event.key ==="Enter"){
        console.log(searchInput.value);
        getWeather(searchInput.value);
     }
   
});

// get weather

function getWeather(city){
    fetch(`${weatherApi.baseUrl}${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    })
    .then(showWeather)
    
    .then(function(){
        searchInput.value="";
    })
};

// show weather

function showWeather(weather){
console.log(weather);

let location= document.querySelector(".location");
location.innerHTML= `${weather.name}, ${weather.sys.country}`;

let temperature= document.querySelector(".temperature");
temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`

let minTemp = document.querySelector(".min-temp");
minTemp.innerHTML=`Min: ${Math.round(weather.main.temp_min)}&deg;C`;

let maxTemp = document.querySelector(".max-temp");
maxTemp.innerHTML=`Max: ${Math.round(weather.main.temp_max)}&deg;C`;

let weatherStatus = document.querySelector(".weather-status");
weatherStatus.innerHTML=`${weather.weather[0].main}`

let timeInfo = document.querySelector(".time-info");
let dateInfo = new Date();
timeInfo.innerHTML=dateManager(dateInfo);

if(weatherStatus.textContent == "Clear"){
    document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')";
} 

else if(weatherStatus.textContent == "Clouds"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')";
}

else if(weatherStatus.textContent == "Cyclone"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1952&q=80')";
}

else if(weatherStatus.textContent == "Sand"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80')";
}

else if(weatherStatus.textContent == "Flood"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1624979277535-4c3a05e0688e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')";
}

else if(weatherStatus.textContent == "Fog" || weatherStatus.textContent === "Haze" || weatherStatus.textContent === "Mist"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')";
}

else if(weatherStatus.textContent == "Rain" || weatherStatus.textContent === "Drizzle"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')";
}

else if(weatherStatus.textContent == "Snow"){
    document.body.style.backgroundImage="url('https://plus.unsplash.com/premium_photo-1669799891975-8f668765be09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')";
}

else if(weatherStatus.textContent == "Thunderstorm"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1600377927594-ceae8f8981a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')";
}

else if(weatherStatus.textContent == "Tornado"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')";
}

else if(weatherStatus.textContent == "Smoke"){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1626433888511-e4dda736068f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')";
}
}

function dateManager(value) {
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = value.getDate();
    let day = days[value.getDay()];
    let month = months[value.getMonth()];
    let year = value.getFullYear();

    return `${date} ${month} (${day}), ${year}`;
};


