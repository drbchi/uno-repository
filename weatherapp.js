function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "3a5f91f8fd7f765f0386aeb682a7d35a"; 

    if (cityInput.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then(data => {
            document.querySelector(".city").textContent = data.name;
            document.querySelector(".temp").textContent = `${data.main.temp}°F`;
            document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr"
            document.querySelector(".Humidity").textContent =`${data.main.humidity} %`
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
