const xml = new XMLHttpRequest();

const xmlInfo = {
    url: "http://getpost.itgid.info/index2.php",
    key: "7859d9d42a8834141d529577207c9596",
}
// Task 1 ============================================

/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 1. Выведите в out-1 результат.
Запускаться функция должна по нажатию b-1. */

function t1() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=1`);
    xml.send()
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-1").textContent = xml.response;
        }
    }
    console.log(xml)
}

document.querySelector(".b-1").addEventListener("click", t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице.
Если все сделано верно, сервер пришлет строку hello ваше имя.
Выведите в out-2 результат.
Запускаться функция должна по нажатию b-2. */

function t2() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=2&name=Vadim`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-2").textContent = xml.response;
        }
    }
}

document.querySelector(".b-2").addEventListener("click", t2);

// ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет сумму чисел.
Выведите в out-3 результат.
Запускаться функция должна по нажатию b-3. */

function t3() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=3&num1=4&num2=75`)
    xml.send();
    xml.onload = function () {
        if (this.status == 200 & this.readyState == 4) {
            document.querySelector(".out-3").textContent = xml.response;
        }
    }
}

document.querySelector(".b-3").addEventListener("click", t3);
// ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет случайное число в заданном диапазоне.
Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат.
Запускаться функция должна по нажатию b-4. */

function t4() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=4&num1=55&num2=109`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-4").textContent = xml.response;
        }
    }
}

document.querySelector(".b-4").addEventListener("click", t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату.
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат.
Запускаться функция должна по нажатию b-5. */

function t5() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=5`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-5").textContent = xml.response;
        }
    }
}

document.querySelector(".b-5").addEventListener("click", t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет большее число.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-6 результат.
Запускаться функция должна по нажатию b-6. */

function t6() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=6&num1=19&num2=93`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-6").textContent = xml.response;
        }
    }
}

document.querySelector(".b-6").addEventListener("click", t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-7 результат.
Запускаться функция должна по нажатию b-7. */

function t7() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=7`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-7").textContent = xml.response;
        }
    }
}

document.querySelector(".b-7").addEventListener("click", t7);
// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 8.
В качестве параметра по очереди укажите year равный году вашего рождения.
Если все правильно сервер вернет ваш возраст.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-8 результат.
Запускаться функция должна по нажатию b-8.*/

function t8() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=8&year=1997`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-8").textContent = xml.response;
        }
    }
}

document.querySelector(".b-8").addEventListener("click", t8);
// ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 9.
В качестве параметра по очереди укажите m = 1, d=1, y=1.
Если все сделано верно, сервер возвратит дату или месяц или год.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-9 результат.
Запускаться функция должна по нажатию b-9. */

function t9() {
    xml.open("GET", `${xmlInfo.url}?auth=${xmlInfo.key}&action=9&m=1&d=1&y=1`);
    xml.send();
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-9").textContent = xml.response;
        }
    }
}

document.querySelector(".b-9").addEventListener("click", t9);
// ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 1.
Если все сделано верно, сервер пришлет строку hello.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-10 результат.
Запускаться функция должна по нажатию b-10.

*/

function t10() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=1`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-10").textContent = xml.response;
        }
    }
}

document.querySelector(".b-10").addEventListener("click", t10);

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 2.
Добавьте параметр name с вашим именем на латинице.
Если все сделано верно, сервер пришлет строку hello ваше имя.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-11 результат.
Запускаться функция должна по нажатию b-11. */

function t11() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=2&name=Vadim`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-11").textContent = xml.response;
        }
    }
}

document.querySelector(".b-11").addEventListener("click", t11);

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 3.
Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет сумму чисел.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-12 результат.
Запускаться функция должна по нажатию b-12.*/

function t12() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=3&num1=3&num2=96`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-12").textContent = xml.response;
        }
    }
}

document.querySelector(".b-12").addEventListener("click", t12);
// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет случайное число в заданном диапазоне.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-13 результат.
Запускаться функция должна по нажатию b-13.*/

function t13() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=4&num1=10&num2=92`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-13").textContent = xml.response;
        }
    }
}

document.querySelector(".b-13").addEventListener("click", t13);
// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-14 результат.
Запускаться функция должна по нажатию b-14.*/

function t14() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=5`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-14").textContent = xml.response;
        }
    }
}

document.querySelector(".b-14").addEventListener("click", t14);
// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа.
Если все сделано верно, сервер вернет большее число.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-15 результат.
Запускаться функция должна по нажатию b-15. */

function t15() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=6&num1=43&num2=87`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-15").textContent = xml.response;
        }
    }
}

document.querySelector(".b-15").addEventListener("click", t15);
// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-16 результат.
Запускаться функция должна по нажатию b-16. */

function t16() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=7`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-16").textContent = xml.response;
        }
    }
}

document.querySelector(".b-16").addEventListener("click", t16);
// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 8.
В качестве параметра по очереди укажите year равный году вашего рождения.
Если все правильно сервер вернет ваш возраст.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-17 результат.
Запускаться функция должна по нажатию b-17. */

function t17() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=8&year=1997`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-17").textContent = xml.response;
        }
    }
}

document.querySelector(".b-17").addEventListener("click", t17);
// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php.
В качестве action укажите 9.
В качестве параметра по очереди укажите m = 1, d=1, y=1.
Если все сделано верно, сервер возвратит дату или месяц или год.
Не забывайте указывать параметр auth (ключ в чате).
Выведите в out-18 результат.
Запускаться функция должна по нажатию b-18. */

function t18() {
    xml.open("POST", `${xmlInfo.url}`);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(`auth=${xmlInfo.key}&action=9&m=1&d=1&y=1`);
    xml.onload = function () {
        if (this.status == 200 && this.readyState == 4) {
            document.querySelector(".out-18").textContent = xml.response;
        }
    }
}

document.querySelector(".b-18").addEventListener("click", t18);
// ваше событие здесь!!!

