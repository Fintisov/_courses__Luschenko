//===========================Task-1====================================
function f1() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
// -------------------------------------------------
    let div = document.createElement('div');

    for (let i = 0; i <= 10; i++) {
        z += ("<div style='float: left; margin-right: 15px'>");
        for (let k = 1; k <= 10; k++) {
            z += `${i} * ${k} = ${i * k}<br>`;
        }
        z += ("</div>");
    }

    out.innerHTML = z;
}

document.querySelector('.b-1').onclick = f1;
//=====================================================================
//===========================Task-2====================================
function f2() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k <= 5; k++) {
            z += '*';
        }
        z += '<br>';
    }

    out.innerHTML = z;
}

document.querySelector('.b-2').onclick = f2;

//=====================================================================
//===========================Task-3====================================

function f3() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            z += '*';
        }
        z += '<br>';
    }

    out.innerHTML += z;
}

document.querySelector('.b-3').onclick = f3;

//=====================================================================
//===========================Task-4====================================


function f4() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    for (let i = 3; i >= 0; i--) {
        let w = 0;
        for (let k = 0; k <= 8; k++) {
            if (w == 4) break;
            if ( k < i ){
                z += '&nbsp;'
            }
            else {
                z += "*";
                w++;
            }
        }
        z += '<br>';
    }
    out.innerHTML = z;
}

document.querySelector('.b-4').onclick = f4;

//=====================================================================
//===========================Task-5====================================


function f5() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    for (let i = 1; i <= 3; i++) {
        for (let k = i; k > 0; k--) {
            z += '*';
        }
        z += '<br>';
    }
    for (let i = 0; i < 2; i++) {
        for (let k = 2; k > i; k--) {
            z += '*';
        }
        z += '<br>';
    }

    out.innerHTML += z;
}

document.querySelector('.b-5').onclick = f5;

//=====================================================================
//===========================Task-6====================================


function f6() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-6').onclick = f6;

//=====================================================================
//===========================Task-7====================================


function f7() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-7').onclick = f7;

//=====================================================================
//===========================Task-8====================================


function f8() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-8').onclick = f8;

//=====================================================================
//===========================Task-9====================================


function f9() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-9').onclick = f9;

//=====================================================================
//===========================Task-10====================================


function f10() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-10').onclick = f10;

//=====================================================================
//===========================Task-11====================================


function f11() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-11').onclick = f11;

//=====================================================================
//===========================Task-12====================================


function f12() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-12').onclick = f12;

//=====================================================================
//===========================Task-13====================================


function f13() {
    let out = document.querySelector('.out');
    out.innerHTML = '';
    let z = '';
//-------------------------------------------------
    out.innerHTML += z;
}

document.querySelector('.b-13').onclick = f13;

//=====================================================================