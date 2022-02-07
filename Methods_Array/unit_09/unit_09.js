// TASK 01
// По нажатию b-1 выполняется функция f1.
// Функция с помощью find должна найти первый элемент массива a1,
// значение которого лежит от a1_from до a1_to (больше a1_from но меньше a1_to).
// Вывести найденный элемент в out-1.
// Если значение не найдено то выводить undefined.

let a1 = [13, 15, 22, 23, 226, 35, 72];
let a1_from = 23;
let a1_to = 27;
// ожидаю 26, но вы протестируйте и на других

const f1 = () => {
    let result = a1.find(elem => {
        if (elem > a1_from && elem < a1_to) {
            return true;
        }
    })

    document.querySelector(".out-1").innerHTML = result;
}

document.querySelector('.b-1').addEventListener('click', f1);

// TASK 02
// По нажатию b-2 выполняется функция f2.
// Функция с помощью find должна найти первый элемент массива a2,
// значение которого лежит от a2_from до a2_to (больше a2_from но меньше a2_to).
// Вывести элемент в out-2.
// Если значение не найдено то выводить false.

let a2 = [13, 15, 22, 23, 26, 35, 72];
let a2_from = 23;

let a2_to = 27;

const f2 = () => {
    let result = a2.find(elem => {
        if (elem > a2_from && elem < a2_to) {
            return true
        }
    })

    if (result === undefined) {
        result = false;
    }

    document.querySelector(".out-2").innerHTML = result;
}

document.querySelector('.b-2').addEventListener('click', f2);

// TASK 03
// По нажатию b-3 выполняется функция f3.
// Функция с помощью FILTER должна найти все элементы массива a3,
// значение которых лежит от a3_from до a3_to (больше a3_from но меньше a3_to).
// Добавить их в a3_res, предварительно очистить a3_res.
// В out-3 вывести нулевой элемент массива a3_res.
// Считаем что в a3_res будет всегда минимум одно значение.

let a3 = [13, 15, 22, 23, 26, 35, 72];
let a3_from = 14;
let a3_to = 25;

let a3_res = [];

const f3 = () => {
    a3_res = [];
    a3_res = a3.filter(elem => {
        if (elem > a3_from && elem < a3_to) {
            return true;
        }
    })

    document.querySelector(".out-3").textContent = a3_res[0];
}

document.querySelector('.b-3').addEventListener('click', f3);


// TASK 04
// По нажатию b-4 выполняется функция f4.
// Функция с помощью FIND должна найти первый элемент строки str4,
// который лежит от a4_from, до a4_to(строго больше, строго меньше).
// Вывести результат в out-4. Если совпадений нет вывести undefined.
// Обратите внимание, find не работает со строками!

let str4 = 'a_baba_galamaga_tvoe_korito_est_nesti';
let a4_from = 'k';
let a4_to = 't';

const f4 = () => {
    let myStr = str4.split("");

    let result = myStr.find(elem => {
        if (elem > a4_from && elem < a4_to) {
            return true;
        }
    })

    document.querySelector(".out-4").innerHTML = result;
}

document.querySelector('.b-4').addEventListener('click', f4);

// TASK 05
// По нажатию b-5 выполняется функция f5.
// Функция с помощью findIndex должна найти индекс элемента массива a5,
// значение которого лежит от a5_from до a5_to (больше a5_from но меньше a5_to).
// Вывести найденный индекс в out-5. Если значение не найдено то выводить -1.

let a5 = [13, 15, 22, 23, 26, 35, 72];

let a5_from = 23;

let a5_to = 67;

const f5 = () => {
    let result = a5.findIndex(elem => {
        if (elem > a5_from && elem < a5_to) {
            return true;
        }
    })

    document.querySelector(".out-5").textContent = result;
}

document.querySelector('.b-5').addEventListener('click', f5);


// TASK 06
//  По нажатию b-6 выполняется функция f6.
//  Функция с помощью findIndex должна найти ПОСЛЕДНИЙ индекс элемента массива a6,
//  значение которого лежит от a6_from до a6_to (больше a6_from но меньше a6_to).
//  Вывести найденный индекс в out-6.
//  Если значение не найдено то выводить false.

let a6 = [13, 15, 22, 23, 26, 35, 72];
let a6_from = 23;
let a6_to = 67;

const f6 = () => {
    let copyArr = [];

    for (let i = a6.length - 1; i >= 0; i--) {
        copyArr.push(a6[i]);
    }

    let result = copyArr.findIndex(elem => {
        if (elem > a6_from && elem < a6_to) {
            return true;
        }
    })

    result = (a6.length - 1) - result;
    document.querySelector(".out-6").textContent = result;
}

document.querySelector('.b-6').addEventListener('click', f6);


// TASK 07
// По нажатию b-7 выполняется функция f7.
// Функция с помощью lastIndexOf должна найти наибольший индекс символа a7_1 в строке str7, и вывести out-7.
// Если значение не найдено то выводить -1.
// Обратите внимание, что lastIndexOf зависит от регистра.

let str7 = 'cccaBCcbBDabBddcCadcDbACacbbCdbBCADBDBdaAdcCd';

let a7_1 = 'C'; // 43

const f7 = () => {
    let result = str7.lastIndexOf(a7_1)

    document.querySelector(".out-7").textContent = result;
}

document.querySelector('.b-7').addEventListener('click', f7);

// TASK 08
// По нажатию b-8 выполняется функция f8.
// Функция с помощью lastIndexOf должна найти наибольший индекс символа a8_1 в строке str8, и вывести out-8.
// Если значение не найдено то выводить -1.
// Реализуйте поиск независимо от регистра.
let str8 = 'C#CdABd$d@$Ab!#@#bcAaB@c$D#@AD$A!b#!D!BB@CaAD@###@';

let a8_1 = 'a'; // 43 ожидаю и на a и на A

const f8 = () => {
    str8 = str8.toLowerCase();
    a8_1 = a8_1.toLowerCase();

    let result = str8.lastIndexOf(a8_1);

    document.querySelector(".out-8").textContent = result;
}

document.querySelector('.b-8').addEventListener('click', f8);

// TASK 09
// По нажатию b-9 выполняется функция f9.
// Функция с помощью lastIndexOf должна найти наибольший индекс символа a9_1 в массиве a9, и вывести out-9.
// Если значение не найдено то выводить -1.
let a9 = ['2', '17', '45', '5', '14', '5', '45', '107'];

let a9_1 = '5'; // ожидаю индекс 5

const f9 = () => {
    let result = a9.lastIndexOf(a9_1);

    console.log(result);
}

document.querySelector('.b-9').addEventListener('click', f9);

// TASK 10
// По нажатию b-10 выполняется функция f10.
// Функция должна заполнить массив a10_res, на основе массива значений a10 и массива индексов a11.
// Т.е. мы берем числа из a11 и смотрим есть ли значения с такими индексами в a10.
// Если есть - добавляем значения в a10_res. Результат a10_res выводим в out-10 через пробел.
// Перед заполнением чистим a10_res.
// Если значения с таким индексом не существует пропускаем индекс.

let a10 = [-2, 3, -4, 5, -6, 7];
let a11 = [0, 4, 22];

let a10_res = []; // ожидаю [-2, -6];

const f10 = () => {
    a10_res = [];

    for (let item of a11) {
        if (a10[item] !== undefined) {
            a10_res.push(a10[item]);
        }
    }

    document.querySelector(".out-10").textContent = a10_res.join(" ");
}

document.querySelector('.b-10').addEventListener('click', f10);