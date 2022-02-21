// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector(".out-1").textContent = "touch";
}

document.querySelector(".div-1").addEventListener("touchstart", t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let counter2 = 0;

function t2() {
    document.querySelector(".out-2").textContent = counter2++;
}


document.querySelector(".div-2").addEventListener("touchstart", t2);
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    event.target.classList.forEach((elem) => {
        if (elem == "div-3_1") {
            document.querySelector(".out-3").textContent = 1;
        } else if (elem == "div-3_2") {
            document.querySelector(".out-3").textContent = 2;
        }
    })
}

document.querySelector(".div-3_1").addEventListener("touchstart", t3);
document.querySelector(".div-3_2").addEventListener("touchstart", t3);
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4.
При нажатии кнопки - добавляйте событие ontouchstart на блок div-4.
При событии происходит вывод текста touch в out-4.  */

function t41() {
    document.querySelector(".out-4").textContent = "touch";
}

function t4() {
    document.querySelector(".div-4").addEventListener("touchstart", t41)
}

document.querySelector(".b-4").addEventListener("click", t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector(".div-4").removeEventListener("touchstart", t41);
}

document.querySelector(".b-5").addEventListener("click", t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector(".out-6").textContent = "touchend";
}

document.querySelector(".div-4").addEventListener("touchend", t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.backgroundColor = "red";
}

document.querySelector(".div-7").addEventListener("touchstart", t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch,
которое при срабатывании окрашивает блок случаным цветом из массива
a8=[red, green, blue, orange, pink, yellow] */

a8 = ["red", "green", "blue", "orange", "pink", "yellow"];

function t8() {
    let result = Math.floor(Math.random() * a8.length);

    document.querySelector(".div-8").style.backgroundColor = a8[result];
}

document.querySelector(".div-8").addEventListener("touchstart", t8);
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector(".out-9").textContent = event.changedTouches.length;
}

document.querySelector(".div-9").addEventListener("touchstart", t9);
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10(e) {
    let currentW = e.target.offsetWidth;
    this.style.width = `${++currentW}px`
}

document.querySelector(".div-10").addEventListener("touchmove", t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
    document.querySelector(".out-11").innerHTML = `radiusX: ${e.changedTouches[0].radiusX} <br> radiusY: ${e.changedTouches[0].radiusY}`;
}

document.querySelector(".div-11").addEventListener("touchstart", t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*
Мини проект. Ознакомьтесь с версткой в задании 12.
Изучите html код внутри div-12-wrapper.
1. Добавьте на кнопку nex событие click, touch так,
чтобы при событии запускалась функция nextFunction и активным становилось
изображение следующее за выделенным классом active-img (рамкой).
Соответственно, на активном изображении появляется рамка,
а остальные - лишаются рамки.
2. Добавьте на кнопку prev событие click, touch так,
чтобы при событии запускалась функция prevFunction и активным
становилось изображение до выделенного классом active-img (рамкой).
Соответственно, на активном изображении появляется рамка,
а остальные - лишаются рамки.
3. Учтите краевые эффекты - когда мы доходим до конца или начала,
то нажатие кнопки должно приводить к перемещению
рамки в начало или конец изображений.
4. Добавьте кнопку reset (функция resetFunction),
нажатие которой сбрасывает активное изображение на нулевое.
5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную.
Т.е. произошло событие - заменилась главная картинка.
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0;

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const imgMax = document.querySelector(".img-12-max");

const imgArr = [];

function pushImg(elem, arr) {
    elem.forEach((elem) => {
        if (elem.getAttribute("src") != null) {
            arr.push(elem.getAttribute("src"));
        }
    })
}

pushImg(images, imgArr);


function nextFunction() {
    count++;
    if (count > imgArr.length - 1) {
        count = 0;
    }

    images.forEach((elem) => {
        elem.classList.remove("active-img");
    })

    for (let i = 0; i < images.length; i++) {
        if (i === count) {
            images[count].classList.add("active-img");
            imgMax.setAttribute("src", `${imgArr[count]}`);
            break;
        }
    }
}


function prevFunction() {
    count--;
    if (count < 0) {
        count = imgArr.length - 1;
    }

    console.log(imgArr.length)

    images.forEach((elem) => {
        elem.classList.remove("active-img");
    });

    images[count].classList.add("active-img")
    imgMax.setAttribute("src", `${imgArr[count]}`)
}

function resetFunction() {
    count = 0;
    images.forEach((elem) => {
        elem.classList.remove("active-img");
    })
    images[0].classList.add("active-img");
    imgMax.setAttribute("src", `${imgArr[0]}`)
}

document.querySelector(".reset").addEventListener("click", resetFunction);
// ваше событие здесь!!!
