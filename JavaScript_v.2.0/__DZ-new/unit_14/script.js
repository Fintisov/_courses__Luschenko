const cityList = document.querySelector("#cityList");

const weatherTitle = document.querySelector("#weatherTitle");
const weatherImg = document.querySelector("#weatherImg");
const maxTemp = document.querySelector("#maxTemp");
const minTemp = document.querySelector("#minTemp");
const normTemp = document.querySelector("#normTemp");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const citys = {
    "+706483": "Kharkiv",
    "+703448": "Kyiv",
    "+4166787": "Odessa",
    "+709930": "Dnipro",
    "+687700": "Zaporizhia",
    "+702550": "Lviv",
    "+703845": "Kryvyi Rih",
    "+700568": "Mykolaiv",
    "+701822": "Mariupol",
}

cityList.addEventListener("change", getWeather);

function addNewCity() {
    for (let key in citys) {
        let newCity = document.createElement("option");
        newCity.value = +key;
        newCity.innerText = citys[key];
        cityList.append(newCity);
    }
}

addNewCity();

function showWeather(data) {
    console.log(data);
    let correctSunrise = new Date(data.sys.sunrise * 1000)
    let correctsunset = new Date(data.sys.sunset * 1000)

    weatherTitle.innerHTML = data.name;
    weatherImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
    maxTemp.innerHTML = `Max Temp: ${Math.round(data.main["temp_max"])} &deg`;
    minTemp.innerHTML = `Min Temp: ${Math.round(data.main["temp_min"])} &deg`;
    normTemp.innerHTML = `Now Temp: ${Math.round(data.main["temp"])} &deg`;
    sunrise.innerHTML = `Sunrise: ${correctSunrise.getHours()} : ${correctSunrise.getMinutes()} : ${correctSunrise.getSeconds()}`;
    sunset.innerHTML = `Sunrise: ${correctsunset.getHours()} : ${correctsunset.getMinutes()} : ${correctsunset.getSeconds()}`;
}

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "fef890510c660ad7f6a1f2c3f12915a4"
}

function getWeather() {

    fetch(`${param.url}weather?id=${cityList.value}&units=metric&APPID=${param.appid}`)
        .then((response) => {
            return response.json();
        })
        .then(showWeather)
}

getWeather();