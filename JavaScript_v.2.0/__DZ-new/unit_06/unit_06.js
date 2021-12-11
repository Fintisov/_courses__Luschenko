//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let out1 = document.querySelector(".out-1");

function t1() {
    let counter = "";

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            counter += "*";
        }
        counter += "_";
    }

    out1.innerHTML = counter;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов.
// Внешний цикл выводит цифру и перенос строки br,
// внутренний - *_, и после этого внешний - знак переноса.</p>
let out2 = document.querySelector(".out-2");

function t2() {
    let counter = "";

    for (let i = 0; i < 3; i++) {
        counter += (i + 1) + "<br>";
        for (let k = 0; k < 3; k++) {
            counter += "*_";
        }
        counter += "<br>";
    }

    out2.innerHTML = counter;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>

function t3() {
    let counter = "";

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            counter += "*_";
        }
        counter += "<br>";
    }

    document.querySelector(".out-3").innerHTML = counter;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
    let counter = "";

    for (let i = 1; i <= 3; i++) {
        counter += `${i}_`;
        for (let k = 1; k <= 5; k++) {
            counter += `${k}*`;
        }
    }

    document.querySelector(".out-4").innerHTML = counter;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>

function t5() {
    let counter = "";

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2) {
                counter += 0
            } else {
                counter += 1
            }
        }
        counter += "<br>";
    }

    document.querySelector(".out-5").innerHTML = counter;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {
    let counter = "";

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k == 0 || k == 4) {
                counter += 1;
            } else if (k == 1 || k == 3) {
                counter += 0;
            } else {
                counter += "x";
            }
        }
        counter += "<br>";
    }

    document.querySelector(".out-6").innerHTML = counter;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
    let counter = "";

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < (1 + i); k++) {
            counter += "*";
        }
        counter += "<br>";
    }

    document.querySelector(".out-7").innerHTML = counter;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
    let counter = "";

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < (5 - i); k++) {
            counter += "*";
        }
        counter += "<br>";
    }

    document.querySelector(".out-8").innerHTML = counter;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
    let counter = "";

    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= (i + 1); k++) {
            counter += `${k}_`;
        }
        counter += "<br>";
    }

    document.querySelector(".out-9").innerHTML = counter;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
    let result = "";

    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            let counter = (10 * i) + k;
            if (counter < 10) {
                result += `0${counter}_`;
            } else {
                result += `${counter}_`;
            }
        }
        result += "<br>"
    }

    document.querySelector(".out-10").innerHTML = result;
}

document.querySelector('.b-10').onclick = t10;