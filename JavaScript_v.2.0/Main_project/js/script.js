//----------------------------
//===========UNIT_1===========

console.log('Hello!');
console.log('Hello');
console.log('333');
console.log(333);
console.log('Hello' + ' ' + 'world'); //Сложение строк это - конкатенация
console.info('Hello');
/*
alert('Hello'); //Выводим всплывающее окно
 */

//-------Получение документа:----------

//работа с элементом по id.
document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '2019';
document.getElementById('out').innerHTML = '<b>2020</b>';

//---работа с элементами через css селекторы
//работа с элементом через тег и класс.
document.querySelector('h2.header').innerHTML = 'Buy';
//работа с элементом через класс.
document.querySelector('.header').innerHTML = 'Buy-Buy';
//работа с элементом через id.
document.querySelector('#one').innerHTML = 777;

let a1 = document.querySelector('.header');
a1.innerHTML = 'Buyyyy';

//----------------------------
//==========UNIT_2============

//Выводим в консоль то, что будет написанно в input/value
let inputIn = document.querySelector('.input-in'); // input
let buttonUn = document.querySelector('.btn-unit2'); //button
let divOut = document.querySelector('.out-unit2');

buttonUn.onclick = function () {
    console.log('Работает!!!');
//  console.log( inputIn.value );
    //или
    let b2 = +inputIn.value; // + позваляет перевисти строку в число
    console.log(b2 * 2);
    console.log(b2 + 10);

//  Отчистка содержимого после вода в value
    inputIn.value = '';


//Вывод содержимого в другое место при нажатии на button

//    document.querySelector('.out-unit2').innerHTML = b;
//или
    divOut.innerHTML = b2;
}

//----------------------------
//==========UNIT_3============

let a3 = 11;

// >= | <= | == | !=
if (a3 > 9) {
    //Если true сработает if
    console.log('Yes');
} else {
    //Если folse сработает else
    console.log('No');
}
//Так же условие else являтся необязательным.

//---------------------------
//const нельзя изменять
const buttonUn3 = document.querySelector('.btn-unit3');
const inputUn3 = document.querySelector('.age');

// () => стрелочная функция
// тоже самое что function ()
buttonUn3.onclick = () => {
    //С помощью + преобразовываем получаемое value в число. т.к в функции value определяется как строка;
    let numUn3 = +inputUn3.value;

    if (numUn3 >= 16 && numUn3 < 60) {
        console.log('Welcome!!!');
    } else if (numUn3 > 60 && numUn3 < 110) {
        console.log('А ты не староват?');
    } else if (numUn3 > 110) {
        console.log('Этот контент не для тя');
    } else {
        console.log('Непутю тебя :(');
    }

    //C помощью switch можно задавать более точный value
    switch (numUn3) {
        case 15:
            console.log('Потерпи еще год');
            break;
        case 16:
            console.log('Как быстро растут чужие дети');
            break
        default:
            console.log('урааааа!');
    }
}

let b3 = 1;

console.log(b3 >= 6 && b3 <= 10); //&& и (Выводит все что folse)

console.log(b3 < 4 || b3 < 8); // || или (Выводит все что true)


//----------------------------
//==========UNIT_4============

/*
//Анонимная функция
document.querySelector('.btn-4').onclick = function () {

}

//Стрелочная функция
document.querySelector('.btn-4').onclick = () => {

}

//Функция с присвоением имени
document.querySelector('.btn-4').onclick = myFunc;

function myFunc() {

}

*/


//Получаем значение в консоль из input при нажатии

document.querySelector('.btn-4').onclick = () => {
    //Выводим написанное в input в консоль
    console.log(document.querySelector('#four').value);
    // Присвоение стилей через JS

    //Присваеваем bgc кнопки выбранный в input
    document.querySelector('.btn-4').style.backgroundColor =
        document.querySelector('#four-color').value;
    //Выводим код цвета в консоль
    console.log(document.querySelector('#four-color').value);
}

//Событие oninput - изменяется каждый раз когда исменяется значение элемента

document.querySelector('.four-range').oninput = () => {
    document.querySelector('.range-span').innerHTML =
        document.querySelector('.four-range').value;
}

//checked

document.querySelector('.btn-check').onclick = () => {
    let myCheck = document.querySelector('#check1');
    console.log(myCheck.checked);

    if (myCheck.checked == true) {
        document.querySelector('.vivod').innerHTML = 'Okay';
    } else {
        document.querySelector('.vivod').innerHTML = 'Ne Okay';
    }
}

//textarea и работа с вложиностью в form
// event.preventDefault() если событие не обрабатывается явно, его действие по умолчанию не должно выполняться

document.querySelector('#btn-u4').onclick = (event) => {
    event.preventDefault();
    let form = document.querySelector('.form-un4');
    console.log(form);
    console.log(form.elements.textUn4.value);//обращение по name
    console.log(form.elements.inpUn4.value);//обращение по id (В приоретете id, если нету id то обращаемся по name)
}


//----------------------------
//==========UNIT_5============
//----Цыклы----
//--Цыклы (for)(while)(do while)--

/*
---------------Цыкл for-------
далее в круглых скобочках () записывается условие цикла на основании которых условие или выполняется или нет
и в фигурных скобочках {} записывается блок команд

for (старт; работаем пока верно, условие выполнения) {


}
 */

for (let i = 0; i < 5; i++) {
    if (i == 4) break; //прерываем цыкл когда i = 4
    console.log(i); //выводим получаемые значения
}

/*
for (let i = 0; i < 6; i = i + 2) {
    console.log(i);
}
 */

let div = document.querySelectorAll('.one');
console.log(div);

for (let i = 0; i < div.length; i = i + 1) {
    console.log(div[i]);// в [] скобках мы указываем номер элемента в масиве
    div[i].style.background = 'red';
    div[i].style.textAlign = 'center';
    div[i].onclick = two;//при клке на div воспроизводим функцию two
}

function two() {
    console.log('work!!!');
}

//-------------------------
//getElementsByClassName - так же как и при помощи querySelectorAll пребераем все элементы
let b = document.getElementsByClassName('one');
//getElementsByTagName - получаем элементы по тегу
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '5px solid black';
}

//------Перебераем input--------
document.querySelector('.btnIn5').onclick = () => {
    let e = document.querySelectorAll('.inp5[type="radio"]');
    console.log(e);
    for (let i = 0; i < e.length; i++) {
        if (e[i].checked) {
            console.log(e[i].value);
        }
    }
}

//------Выводим значение из цикла в div----------------
let outUt = '';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue; //С помощью continue мы пропускаем значение и идем дальше
    outUt += i + ' ';
    //if (i == 6) break;
}

document.querySelector('#out5').innerHTML = outUt;


//----------------------------
//==========UNIT_6============
//----ВЛОЖЕННЫЕ ЦИКЛЫ-----
/*

let out6 = document.querySelector('.out-6');
let z = '';



for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 10; k++) {
        z += k;
    }
    z += '<br>';
}

out6.innerHTML = z;



for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
        z += `${i} * ${k} = ${i * k}<br>`;
    }
    z += '<hr>';
}

out6.innerHTML = z;
*/

//----------------------------
//==========UNIT_7============
//----ФУНКЦИИ И ВСЕ О НИХ-----

let f1 = document.querySelector('.f-1'); //button 1
let f2 = document.querySelector('.f-2'); //button 2

//Создаем функцию
function one() {
    console.log('work');
}

one(); //Вызов функции

//Вызываем функцию при нажатии на кнопку
f1.onclick = one;

//---------------------
let a7 = 9;

function two(a, b) {
    return a * b;
}

console.log(two(10, 5));
console.log(two(7, 5));
console.log(two(7, a7));

//------------
//Значения по умолчанию (Функция принимает значения по умолчанию, или те которые указаны при вызове)

function three(x = 10, y = 8) {
    return x + y;
    //все что написанно после return отображатся не будет
}

console.log(three());
console.log(three(40));
console.log(three(30, 415));

//------------
//Ананимная функция (функция вызывается без имени) function () {}
let f22 = document.querySelector('.f-2');

f22.onclick = function () {
    console.log('Hello');
}

//или аналог ананимной функции - Стрелочная функция () => {}

f22.onclick = () => {
    console.log('World');
}

//сокращение записи ананимной функции
/*
1)-------------

function (a, b) {}

или

(a, b) => {}

2)-------------

function (a) {}

или

a => {}

3)-------------

function (a) {
    return 2 * a;
}

или

(a) => 2 * a

*/

//----------------------------
//==========UNIT_8============
//----Цикл while, do while----

//цыкл работает до тех пор пока в скобочках будет true
//Сдесь вывод от 0 до 4
let k = 0
while (k < 5) {
    console.log('k ' + k);
    k++;
}

//или
//Сдесь вывод от 1 до 5
let k1 = 0
while (k1 < 5) {
    k1++;
    console.log('k ' + k1);
}

/* Бесконечный цикл
let k1 = 0
while (k1 < 5 ) {
    console.log('k ' +k1);
    if (k1 == 5) continue;
    k1++;
}
*/


//3 + 2 + 1 = 6
let sum8 = 0;
let p8 = 0;
while (p8 <= 3) {
    sum8 = sum8 + p8;
    p8++
}
console.log('sum = ' + sum8);

//рисунок звездачками
function f8() {
    let out = document.querySelector('.out-8');
    let p = 0;
    let outStr = '';
    let flag = 3;

    while (p < 4) {
        let p1 = 0;
        while (p1 < 4) {
            if (p1 < flag) {
                outStr += '&nbsp';
            } else {
                outStr += '*'
            }
            p1++;
        }
        flag--;
        outStr += '<br>';
        p++
    }

    out.innerHTML = outStr;
}

f8();

//----------------------------
//==========UNIT_9============
//-----------DOM--------------

//Присваеваем стили элементу:
let one9 = document.querySelector('.one9'); //Вызываем элемент

//Прописываем стили элементу
one9.style.width = '150px';
one9.style.paddingBottom = '50px';
one9.style.backgroundColor = 'red';
one9.style.fontSize = '22px';

//Выведим стили элемента в консоль
console.log(one9);

//Присваеваем элементу новый класс (что бы добавить несколько новых классов их нужно записать через запятую)
one9.classList.add('one9-1');
one9.classList.add('dop-class', 'dell-class');

//Удаляем класс у элимента
one9.classList.remove('dell-class');

one9.classList.contains('dell-class');//Позволяет узнать есть ли такой класс или нету

//Присваеваем класс при клике на объект
let toggle9 = document.querySelector('.toggle');

toggle9.onclick = function () {
    //с помощью this мы обращаемся имено к тому объекту от которого происходит действие
    this.classList.toggle('dop-class'); //Убирает/добовляет class
}

// Атрибуты

//Выводим(читаем) атрибут в выбранном элементне
console.log(toggle9.getAttribute('data'));
//
console.log(document.querySelector('link').getAttribute('href'));

//Так же я могу добавить новый атрибут или дать новое имя старому (Первым мы записываем имя атрибута, после его значение)
console.log(toggle9.setAttribute('data-num', 6));

//Задача с приминением метода getAttribute
let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

//Создание нового div и манипулирование им

let a9 = document.createElement('div'); //создали div
a9.innerHTML = 'Hello!';//Добавили в него строку
a9.classList.add('two9');//Добавили класс для сделанного ранее div
a9.style.padding = '50px';//Присваеваем стили
a9.style.backgroundColor = 'yellow';//Присваеваем стили
a9.style.width = '150px';//Присваеваем стили
a9.onclick = function () {
    alert('Hello');
}

document.querySelector('.test9').appendChild(a9); //Вставили наш div
console.log(a9);

/*
append - Вставляем элемент перед первым потомком
prepend - Вставляем элемент после первого потомка
----
Так же альтернативные методы before и after

replaceWith - заменяет собой всех дитей в списке родителя
 */


//----------------------------
//==========UNIT_10============
//-----------Массивы--------------
let a10_1 = []; //Создали пустой массив

let a10 = ['Иван', 37, 'Овен']; // Создали массив со значениями внутри
a10[0] = 'Igor'; //Изменили значние в массиве
console.log(a10);


//--------Поменяем местами значения элементов в массиве
let b10 = [1, 2, 3, 4];
console.log(b10);

let t10 = b10[0];//Создаем временное хранение для переменной
b10[0] = b10[b10.length - 1];//Присваеваем значения от последнего элемента массива, первому
b10[b10.length - 1] = t10;//Присвоили хначение с временной переменной
//b10[3] = t10; или можно использовать определенный номер в массиве
console.log(b10);


//--------Вывод на страницу данных из массива
let out10 = document.querySelector('.out-10');
let out10_1 = '';

for (let i = 0; i < a10.length; i++) {
    out10_1 += a10[i] + ' ';
}
out10.innerHTML = out10_1;


//----------------------------------------------------------------------------------------------------------------------
const c10 = [106, 569, 281, 126, 173, 183, 302, 33, 151, 701, 14, 291, 935, 277, 425];

//--------Поиск самого большого/маленькго значения в массиве
let max10 = c10[0]; //Берем первое значение масива, и с ним будем сравнивать все остальные
for (let i = 0; i < c10.length; i++) {
    if (c10[i] > max10) {
        max10 = c10[i];
    }
}
out10.append('max: ' + max10);

//--------Сумма значений в массиве
let sum10 = 0;//Переменная в которую мы будем складывать значения с масива (0 + 106 + 569 + 281 ......)
for (let i = 0; i < c10.length; i++) {
    sum10 = sum10 + c10[i];
}
out10.append(' sum: ' + sum10);


//----------------------------
//==========UNIT_11============
//-----------ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВЕ, POP, PUSH,SPLICE, SHIFT, UNSHIFT--------------

let a11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b11 = ['a', 'b', 'c', 'd'];

//---Push (Метод push позмоляет добовлять в конец массива элементы)
console.log(a11.length); //Вывили длину массива
console.log(a11.push(11, 12, 13, 14, 135)); //Добавили значения в конец массива
console.log(a11);
//---
b11.push('e', 'f', 'g');
console.log(b11);

//---Pop (метод pop позволяет удалить последний элемент в массиве
console.log(b11);
console.log(b11.pop());//оператор без значения, просто удаляет последний элемент в масиве
console.log(b11.pop());
console.log(b11.pop());
console.log(b11.pop())//При этом мы сколько этот матод раз вызовем, столько раз он и удалит элимент.
console.log(b11);

//--Splice (метод splice позволяет удальть и заменить элемент в нутри массива)
//можно удалить элимент с помощью delete (Но такой способ не сокращает длину массива)
delete a11[3];
console.log(a11);

a11.splice(4, 2); //Здесь мы удалили 2-а элемента в массиве начиная с 4-го
console.log(a11);

a11.splice(4, 0, 'hi'); //так же я могу добавлять новые элементы в массив на место тех которые я удалил
console.log(a11);

//--unshift (метод unshift добовляет элемент в начало массива)
a11.unshift('new world'); //Довавили элемент
console.log(a11);

//--shift (метод shift удаляет элемент в начале массива)
a11.shift('new world'); //удалили элемент
console.log(a11);

//--reverse(метод reverse создает новый массив и заполняет его в обратном порядке)
a11.reverse();
console.log(a11);

//--indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве
// или -1, если такого индекса нет.

//--includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

//--concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
// соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
/*
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
Array ["a", "b", "c", "d", "e", "f"]
*/

//--join() объединяет все элементы массива (или массивоподобного объекта) в строку.


//----------------------------
//==========UNIT_12============
//-----------ДВУМЕРНЫЕ МАССИВЫ--------------

//Создаем двумерный массив
let a12 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(a12);

//перебераем внешний массив
for (let i = 0; i < a12.length; i++) {
    for (let k = 0; k < a12[i].length; k++) {
        console.log(a12[i][k]);
    }
}
// или таким способом, он более читабельный
// for (let i = 0; i < a12.length; i++) {
//     let c = a12[i];
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }


//Вывод в обратном порядке
for (let i = 0; i < a12.length; i++) {
    for (let k = a12[i].length - 1; k >= 0; k--) {
        console.log(a12[i][k]);
    }
}

//---выведим содержиммое массива на страницу
let out12 = '';

for (let i = 0; i < a12.length; i++) {
    for (let k = 0; k < a12[i].length; k++) {
        out12 += a12[i][k] + ' ';
    }
    out12 += '<br>'
}

document.querySelector('.out12').innerHTML = out12;

//---выведим содержиммое массива на страницу которые больше 4-х

out12 = '';

for (let i = 0; i < a12.length; i++) {
    for (let k = 0; k < a12[i].length; k++) {
        if (a12[i][k] > 4) {
            out12 += a12[i][k] + ' ';
        }
    }
}

console.log(out12);

//Задача с передвижением единицы
let b12 = [1, 0, 0, 0, 0];
let c12 = 0;
document.querySelector('.out12_1').innerHTML = b12;

document.querySelector('.btn12').onclick = () => {
    if (c12 + 1 < 5) {
        b12[c12] = 0;
        b12[c12 + 1] = 1;
        c12++;
    }
    document.querySelector('.out12_1').innerHTML = b12;
};


//----------------------------
//==========UNIT_13============
//------------Ассоциативные массивы-------------

/*
Ассоциативный массив отличается от обычного тем, что
в обычном массиве в качестве индекса выступает число,
а в ассоциативном массиве может быть как число, так и строка
*/

//Объявление ассоциативного массива
const a13 = {
    'a': 5, //a - ключь; 5 - значение
    'b': 'Hello',
    'z2': 'Hi',
    y43: 1999,
//Ключи можно писать без ковычек, но если ключь состаит из двух слов и более БЕЗ КОВЫЧЕК, то в таком случае будет ошибка.
    'villa de': 3040,
};
console.log(a13);

console.log(a13.z2); //Так можно вывесли конкретное значение

//Если имя ключа содержится в переменной, тогда обращатся к имени нужно через [];
let b13 = 'y43';
console.log(a13[b13]);

//Присвоение нового элемента в массив
a13.yyyy = 555; //Создал ключь 'уууу' со значением '555';
console.log(a13);

//Изменение значения в массиве
a13.b = 'World';
console.log(a13);

//---Как вывести значение из ассоциативного массива на страницу---

//вывести просто на страницу ассоцеативный массив нельзя, будет ошибка [object Object]
document.querySelector('.out-13-1').innerHTML = a13;

//Его нужно перебрать с помощью цикла for in:

//Выводим ключи
let out13 = ' ';

for (let key in a13) {
    out13 += key + ' ';
}
document.querySelector('.out-13-2').innerHTML = out13;

//Если нам нужно вывести КЛЮЧЬ И ЗНАЧЕНИЕ, применяется следующая запись:
out13 = '';
for (let key in a13) {
    out13 += key + ' --- ' + a13[key] + '<br>';
}
document.querySelector('.out-13-3').innerHTML = out13;


//Удаление элемента в массиве
console.log(a13)
delete a13.a; // Удалили ключь "а"
console.log(a13)


/*
----
Метод hasOwnProperty() позваляет узнать есть ли определенный ключь в массиве.
Если он есть, тогда true, если нет, тогда false
----
*/


let c13 = {
    "b": 17,
    "e": 22
};

function f13() {
    let a = document.querySelector('.i-13').value;
    let b = document.querySelector('.out-13-4-1');


// С помощью метода hasOwnProperty()

    if (c13.hasOwnProperty(a) == true) {
        b.innerHTML = 1;
    } else {
        b.innerHTML = 0;
    }

    /*
    С помощью цикла

        for (let key in a7) {
            if (key === a) {
                b.innerHTML = 1; break
            } else if (key !== a){
                b.innerHTML = 0;
            }
        }

    */

    /*
    Или с помощью проверки на undefined
    т.к если не находит ключь, выпадает undefined, можно сделать проверку этим способом

        if (a7[a.value] !== undefined) {
            b.innerHTML = 1;
        } else {
            b.innerHTML = 0;
        }
    */

}

document.querySelector('.b-13').onclick = f13;


//----------------------------
//==========UNIT_14============
//------------Получение данных по API-------------

// task 1 --------------------
function showWeather(data) {
    console.log(data);
    console.log(data.name);
}

function getWeather() {

    fetch('http://api.openweathermap.org/data/2.5/weather?id=706483&appid=fef890510c660ad7f6a1f2c3f12915a4&lang=ru')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            showWeather(data);
        })
        .catch(function () {

        });
}

// getWeather();

//----------------------------
//==========UNIT_15============
//------------Массив SET-------------

//Создаем новый set
let a15 = new Set();
console.log(a15);

//Добовляем новые элименты в set (add)
a15.add(1);
a15.add(2);
a15.add('Hello');
a15.add('world');
a15.add(1); //этот элемент не добавится. т.к сет довобляет в себя только уникальные(новые) элементы
a15.add('1');
console.log(a15);

//Добовляем несколько элементов в set
let c15 = new Set(['one', 'two', 'four']);
console.log(c15);

//При добовлении строки, она разбивается на уникальные эилименты
let d15 = new Set('hello world');
console.log(d15);
/*
0: "h"
1: "e"
2: "l"
3: "o"
4: " "
5: "w"
6: "r"
7: "d"
size 8
*/

//Если ввести через []
d15 = (['hello world']);
console.log(d15);
/*
0: "hello world"
size 1
*/

//Получаем колличество элеметов в set (size)
console.log(a15.size);

//Отчистка set (clear)
// a15.clear();
// console.log(a15);

//Удаление определенного элемента из set (delete)
a15.delete('world');
console.log(a15);

//Проверка на наличие элемента в нутри set (has);
console.log(a15.has('Hello')); //true
console.log(a15.has(3)); //false

//Вывод массива set
//Вывод осуществляется с помощью цикла for of;
for (let i of a15) {
    console.log(i);
}

//Выбока уникальных элементов из массива
let m15 = [1, 2, 3, 4, 5, 'hello', 3, 4, 'hello', 1, 2, 5];
console.log(m15);

//Преобразовали массив в set, (set записал только уникальные элементы)
let b15 = new Set(m15);
console.log(b15);
console.log(b15[3]); //undefined

//Преобразование set в массив (Array.from() )
m15 = Array.from(b15);
console.log(m15);
console.log(m15[3]); //4
console.log(m15);

//----------------------------
//==========UNIT_16============
//------------Способы перебора масивов FOR, FOR IN, FOR OF-------------
let arr16 = [1, 2, 3, 4, 'arr'];

//1)----цикл for----
for (let i = 0; i < arr16.length; i++) {
    console.log(arr16[i]);
    /*
Получим значения массива
    1
    2
    3
    4
    arr
    */
}

//2)---цикл for in---
for (let key in arr16) {
    console.log(key);
    /*
Получим ключи значений
    0
    1
    2
    3
    4
    */
}
//--
for (let key in arr16) {
    console.log(arr16[key]);
    /*
Получим значения
    1
    2
    3
    4
    arr
    */
}

//3)---цикл for of---
for (let item of arr16) {
    console.log(item);
    /*
Получим значения
 1
 2
 3
 4
 arr
   */

}

//--
for (let item of arr16) {
    console.log(arr16[item]);
    /*
Получим undefined
   */
}

//-----Перебор элементов на странице циклами FOR, FOR IN, FOR OF----
let allP = document.querySelectorAll('.unit-16 p');
console.log(allP);

//1)--цикл for
for (let i = 0; i < allP.length; i++) {
    console.log(allP[i]);
    //Я получу доступ к колекции элементов
}

//2)--цикл for in
for (let key in allP) {
    /*
    console.log(key); Такой способ не подходит
    console.log(allP[key]);  Такой способ не подходит

    !!!Оба способа не дают нужного результата!!!
    */
}

//3)--цикл for of
for (let item of allP) {
    console.log(item); //Я получу доступ к колекции элементов (!!!Этот способ подходит!!!)
}

for (let item of allP) {
    console.log(allP[item]); //undefined (!!!Этот способ не подходит!!!)
}

//----------------------------
//==========UNIT_17============
//------------МЕТОДЫ МАССИВОВ: MAP, FILTER-------------

let arr17 = [2, 4, 500, 0, 'Vadimka', 1021, -4, 313];

//---Map
/*
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

item - значения массива (2, 4, 500, 0, 'Vadimka', 1021, -4, 313)
index - порядковый номер (0, 1, 2, 3, 4, 5, 6, 7) "необязательный параметр"
return - мы возвращаем в новый масив значения. Если его не указать, возвращатся будет undefined
*/

let a17 = arr17.map(function (item, index) {
    return item * 2;
})
console.log(a17);


/*
    Более короткая запись

let a17 = arr17.map(item => item * 2)
*/


//---Filter
/*
Добовляет(возвращает) элементы, которые прошли проверку, или подходят по условию.
Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
Если проверка выдала true метод срабатывает, если false, тогда нет.
*/

//Задаем условие (числовое)
let b17 = arr17.filter(function (item, index) {
    if (item % 2 === 0) {
        return item;
    }
})
console.log(b17);

//Задаем условие (буливое)
b17 = arr17.filter(function (item, index) {
    if (typeof (item) === 'string') {
        return item;
    }
})

console.log(b17);