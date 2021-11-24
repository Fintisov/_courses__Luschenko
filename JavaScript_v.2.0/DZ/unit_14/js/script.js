// task 1 --------------------
moment.locale('ru');
const dataAdd = moment().format('DD.MM.YYYY');
const date = document.querySelector('.day-info_data');
const time = document.querySelector('.day-info_time');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city span');
const minTemp = document.querySelector('.min-temp');
const maxTemp = document.querySelector('.max-temp');
const logo = document.querySelector('.logo a');
const felt = document.querySelector('.felt');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.pressure');
const windSpeed = document.querySelector('.speed');
const cityList = {
    706483: "Kharkiv",
    703448: "Kyiv",
    4166787: "Odessa",
    709930: "Dnipro",
    687700: "Zaporizhia",
    702550: "Lviv",
    703845: "Kryvyi Rih",
    700568: "Mykolaiv",
    701822: "Mariupol",
};

function showWeather(data) {
    // console.log(data);
    date.textContent = dataAdd;
    city.textContent = data.name;
    logo.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="logo">`
    temp.innerHTML = Math.round(data.main.temp - 273) + '&deg';
    minTemp.innerHTML = Math.round(data.main.temp_min - 273) + '&deg';
    maxTemp.innerHTML = Math.round(data.main.temp_max - 273) + '&deg';
    felt.innerHTML = Math.round(data.main.feels_like - 273) + '&deg';
    humidity.textContent = data.main.humidity + '%';
    pressure.textContent = data.main.pressure;
    windSpeed.textContent = data.wind.speed + 'км/ч'
}

//---sunrise and sunset start
function sunTime(data) {
    let sun = '';
    let m = '';
    //--sunrise start
    sun = new Date(data.sys.sunrise * 1000);
    m = '0' + sun.getMinutes();
    sunrise.textContent = `${sun.getHours()}:${m.substr(-2)}`
    //--sunrise end

    //--sunset start
    sun = new Date(data.sys.sunset * 1000);
    sunset.textContent = `${sun.getHours()}:${m.substr(-2)}`;
    //--sunset end
}
//---sunrise and sunset end

//---add select and options start
function addSelect() {
//---add select start
    const select = document.createElement('select');
    select.classList.add('cities');
    document.querySelector('.header_wrap').appendChild(select);
//---add select end

//---add options start
    let option = '';
    for (let key in cityList) {
        option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', key);
        option.textContent = cityList[key];
    }
//---add options end
}

addSelect();
//---add select and options end

//---Dynamic time change start
function showTime() {
    const timeAdd = moment().format('HH:mm:ss');
    time.textContent = timeAdd;
    setTimeout(showTime, 1000);
}

showTime();
//---Dynamic time change end

function getWeather() {
    const cityId = document.querySelector('.cities').value;
    const appiInfo = {
        'url': 'http://api.openweathermap.org/data/2.5/',
        'key': 'fef890510c660ad7f6a1f2c3f12915a4',
    };

    fetch(`${appiInfo.url}weather?id=${cityId}&appid=${appiInfo.key}&lang=ru`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            showWeather(data);
            sunTime (data);
        })
        .catch(function () {

        });
}

getWeather();

document.querySelector('.cities').onchange = getWeather;