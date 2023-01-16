'use strict';
// Задание 1
function but1(){
    var zad1 = document.getElementById('zad1');
    zad1.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

// Задание 2
function but2(){
    let zad2 = document.getElementById('zad2');
    zad2.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}

// Задание 3
function but3(){
    let zad3 = document.getElementById('zad3')
    zad3.innerHTML = '<h3>' + zad3.innerHTML + '</h3>';
}

// Задание 4
function text(){
    var chislo1 = +document.getElementById('chislo1').value;
    var chislo2 = +document.getElementById('chislo2').value;
    var otvet = document.getElementById('otvet');
    otvet.innerHTML = chislo1 + chislo2;
}

// Задание 5
function text1(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}
