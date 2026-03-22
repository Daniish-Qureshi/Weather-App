const apiKey = "3cb84763dd1296bc8f9d4d620db7c191";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const westherIcon = document.querySelector(".westher-icon");
       
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{
                var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


            if(data.weather[0].main == "Clouds"){
                westherIcon.src = "Assets/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                westherIcon.src = "Assets/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                westherIcon.src = "Assets/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                westherIcon.src = "Assets/drizzle.png"
            }
            else if(data.weather[0].main == "MIST"){
                westherIcon.src = "Assets/mist.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
 }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})