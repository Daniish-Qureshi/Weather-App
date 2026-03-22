# ⛅ Weather App

A clean and real-time Weather App built with pure HTML, CSS, and JavaScript. Search any city in the world and instantly get live temperature, humidity, wind speed, and a weather condition icon — powered by the **OpenWeatherMap API**. Deployed live on Vercel.

## 🌐 Live Demo

🔗 **[Click](https://weather-app-lilac-pi-19.vercel.app/)**

---

## ✨ Features

- 🔍 **City Search** — Type any city name and get real-time weather data
- 🌡️ **Temperature** — Current temperature displayed in °C
- 💧 **Humidity** — Current humidity percentage
- 💨 **Wind Speed** — Current wind speed in km/h
- 🖼️ **Dynamic Weather Icons** — Icon changes based on weather condition (Rain, Clear, Clouds, Drizzle, Mist, Snow, etc.)
- ❌ **Error Handling** — "Invalid city name" message shown for wrong inputs
- ⚡ **Instant Results** — Live data fetched via `fetch()` with no page reload
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
Weather-App/
│
├── assets/
│   ├── search.png       # Search button icon
│   ├── rain.png         # Rain weather icon
│   ├── humidity.png     # Humidity icon
│   ├── wind.png         # Wind speed icon
│   ├── clouds.png       # Cloudy weather icon
│   ├── clear.png        # Clear/Sunny weather icon
│   ├── drizzle.png      # Drizzle weather icon
│   ├── mist.png         # Mist/Fog weather icon
│   └── snow.png         # Snow weather icon
│
├── index.html           # Search bar, weather card, error message, details
├── style.css            # Card layout, weather display, responsive design
└── script.js            # OpenWeatherMap API fetch, DOM update, icon switch
```

---

## ⚙️ How It Works

```
User types a city name and clicks Search
                ↓
JS calls OpenWeatherMap API with the city name
                ↓
API returns JSON with temperature, humidity,
wind speed, and weather condition
                ↓
If city not found → show "Invalid city name" error
                ↓
If found → update temperature, city, humidity, wind
                ↓
Switch weather icon based on condition code
(Rain / Clear / Clouds / Drizzle / Mist / Snow)
                ↓
Weather card slides into view ✅
```

---

## 🧠 Core Logic

```javascript
const apiKey  = "YOUR_API_KEY";
const apiUrl  = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }

  const data = await response.json();

  document.querySelector(".city").innerHTML    = data.name;
  document.querySelector(".temp").innerHTML    = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML    = data.wind.speed + " km/h";

  // Dynamic icon switching
  const condition = data.weather[0].main;
  if      (condition === "Rain")    weatherIcon.src = "assets/rain.png";
  else if (condition === "Clear")   weatherIcon.src = "assets/clear.png";
  else if (condition === "Clouds")  weatherIcon.src = "assets/clouds.png";
  else if (condition === "Drizzle") weatherIcon.src = "assets/drizzle.png";
  else if (condition === "Mist")    weatherIcon.src = "assets/mist.png";
  else if (condition === "Snow")    weatherIcon.src = "assets/snow.png";
}
```

---

## 🌦️ Supported Weather Conditions & Icons

| Condition | Icon File | Trigger |
|-----------|-----------|---------|
| ☀️ Clear | `clear.png` | `Clear` |
| ☁️ Cloudy | `clouds.png` | `Clouds` |
| 🌧️ Rain | `rain.png` | `Rain` |
| 🌦️ Drizzle | `drizzle.png` | `Drizzle` |
| 🌫️ Mist / Fog | `mist.png` | `Mist` |
| 🌨️ Snow | `snow.png` | `Snow` |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Search input, weather card, details layout |
| **CSS3** | Card design, gradient background, responsive layout |
| **JavaScript (Vanilla)** | `fetch()`, `async/await`, DOM updates, icon switch |
| **OpenWeatherMap API** | Live weather data for any city worldwide |
| **Vercel** | Deployment & hosting |

---

## 🔑 OpenWeatherMap API Setup

This project uses the **OpenWeatherMap Current Weather API**:

```
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={apiKey}
```

To run locally with your own API key:

1. Go to [openweathermap.org](https://openweathermap.org/api) and create a free account
2. Get your free **API Key** from the dashboard
3. In `script.js`, replace the existing key:
   ```javascript
   const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
   ```

> 🆓 Free tier allows **60 calls/minute** — more than enough for development & demos!

---

## 💡 Key Concepts Demonstrated

- **REST API Integration** — Fetching live data from OpenWeatherMap using `fetch()`
- **Async / Await** — Clean async JavaScript without callback nesting
- **HTTP Status Handling** — Checking `response.status === 404` for invalid cities
- **Dynamic Icon Switching** — Changing UI images based on API response data
- **JSON Parsing** — Extracting `data.main.temp`, `data.main.humidity`, `data.wind.speed`
- **Error UI** — Showing/hiding error and weather panels conditionally

---

## 🚀 Getting Started

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Daniish-Qureshi/Weather-App.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd Weather-App
   ```

3. **Add your OpenWeatherMap API key** in `script.js`

4. **Open in browser**
   ```
   Open index.html directly in your browser
   — or use Live Server (VS Code extension)
   ```

---

## 📱 Responsive Design

| Screen | Behavior |
|--------|----------|
| **Mobile** | Full-width centered card, compact weather details |
| **Tablet** | Comfortable card width with padding |
| **Desktop** | Centered card with clean spacing and shadow |

---

## 👨‍💻 Author

**Danish Qureshi**  
BCA Final Year Student | Full Stack Developer  
📍 Dadri, Uttar Pradesh, India  
🔗 [GitHub — @Daniish-Qureshi](https://github.com/Daniish-Qureshi)  
🌐 [Portfolio](https://danish-qureshi-6ew5.vercel.app)

---

## 📄 License

This project is open source and free to use for **educational & portfolio purposes**.

---

⭐ If you found this useful, give it a **star** on GitHub!
