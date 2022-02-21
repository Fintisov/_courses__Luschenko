// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

const infoLink = {
    link: "http://getpost.itgid.info/index2.php",
    key: "auth=7859d9d42a8834141d529577207c9596",
}

function t1() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=1`)
            .then(response => {
                resolve(response.text())
            })
    })

    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=2&name=Vadim`)
            .then(response => {
                resolve(response.text())
            })
    })

    Promise.all([prom1, prom2])
        .then((value) => {
            document.querySelector(".out-1").textContent = `${value[0]} ${value[1]}`;
        })
}

document.querySelector(".b-1").addEventListener("click", t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=3&num1=42&num2=71`)
            .then((res) => {
                resolve(res.text());
            })
    })

    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=4&num1=100&num2=149`)
            .then((response) => {
                resolve(response.text())
            })
    })

    Promise.all([prom1, prom2]).then((value) => {
        document.querySelector(".out-2").textContent = `${value[0]} ${value[1]}`;
    })
}

document.querySelector(".b-2").addEventListener("click", t2);
// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=5`)
            .then((res) => {
                resolve(res.text())
            })
    })
    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=6&num1=98&num2=32`)
            .then((res) => {
                resolve(res.text())
            })
    })

    Promise.all([prom1, prom2])
        .then(value => {
            document.querySelector(".out-3").textContent = `${value[0]} ${value[1]}`
        })
}

document.querySelector(".b-3").addEventListener("click", t3)
// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=7`)
            .then((res) => {
                resolve(res.text())
            })
    })
    const prom2 = new Promise(((resolve, reject) => {
        fetch(`${infoLink.link}?${infoLink.key}&action=8&year=1997`)
            .then((res) => {
                resolve(res.text())
            })
    }))

    Promise.all([prom1, prom2]).then(value => {
        document.querySelector(".out-4").textContent = `${value[0]} ${value[1]}`
    })
}

document.querySelector(".b-4").addEventListener("click", t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=1`),
        })
            .then(res => {
                resolve(res.text());
            })
    })
    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=2&name=Vadim`),
        })
            .then(res => {
                resolve(res.text());
            })
    })

    Promise.all([prom1, prom2]).then(value => {
        document.querySelector(".out-5").textContent = `${value[0]} ${value[1]}`;
    })

}

document.querySelector(".b-5").addEventListener("click", t5);
// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=3&num1=43&num2=87`),
        })
            .then(res => {
                resolve(res.text());
            })
    })
    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=4&num1=43&num2=87`),
        })
            .then(res => {
                resolve(res.text());
            })
    })

    Promise.all([prom1, prom2]).then(value => {
        document.querySelector(".out-6").textContent = `${value[0]} ${value[1]}`;
    })

}

document.querySelector(".b-6").addEventListener("click", t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=5`),
        })
            .then(res => {
                resolve(res.text());
            })
    })
    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=6&num1=143&num2=39`),
        })
            .then(res => {
                resolve(res.text());
            })
    })

    Promise.all([prom1, prom2]).then(value => {
        document.querySelector(".out-7").textContent = `${value[0]} ${value[1]}`;
    })

}

document.querySelector(".b-7").addEventListener("click", t7);
// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    const prom1 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=7`),
        })
            .then(res => {
                resolve(res.text());
            })
    })
    const prom2 = new Promise((resolve, reject) => {
        fetch(`${infoLink.link}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (`${infoLink.key}&action=8&year=1997`),
        })
            .then(res => {
                resolve(res.text());
            })
    })

    Promise.all([prom1, prom2]).then(value => {
        document.querySelector(".out-8").textContent = `${value[0]} ${value[1]}`;
    })

}

document.querySelector(".b-8").addEventListener("click", t8);

// ваше событие здесь!!!

