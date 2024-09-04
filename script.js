const cheackWather = () => {
    const city = document.getElementById('weatherInput').value.trim();
    const apiKey = "001bf266c76ab61010d127ae55b5a8ce"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {

        console.log(data);
        
        const weatherInfo = document.getElementById('weatherInfo');
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        weatherInfo.innerHTML = `
            <p class="mb-4 text-2xl font-semibold mt-5">City Name : ${city}</P>
            <p class="mb-4 text-xl font-semibold">Description : ${description}</p>
            <p class="mb-4 text-xl font-semibold">Temperature: ${temp}&#8451</P>
            <p class="mb-4 text-xl font-semibold">Humiditiy : ${humidity}%</P>
            <p class="mb-4 text-xl font-semibold">Wind Speed : ${windSpeed} m/s</P>
        `

    })
    .catch(error => {
        console.error('Opps!, Sorry', error);
        document.getElementById('weatherInfo').textContent = 'City Not Found'
    })
}