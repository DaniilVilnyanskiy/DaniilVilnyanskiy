const intNumbers = [-1, 2, -3, 4, -5, 6, -7, 0, -8];

const signCount = function (array) {
    let result = 0;
    for (let index = 0; index < array.length; ++index) {
        if (Math.sign (array[index]) !== 1 && array [index] !== 0) {
            ++result;
            console.log(array[index]);
        }
    }
    return result;
};
console.log(signCount(intNumbers));


let windowInnerHeight = document.documentElement.clientHeight; //узнаю размер внутреннего окна браузера



/*
if($('.main').length > 0) {
    console.log('more less zero')
} else {
    console.log('not fined')
}
*/


let mediaHtml = "file:///C://Users//%D0%BD//Documents//html//media.html";
let contactsHtml = "file:///C://Users//%D0%BD//Documents//html//contacts.html";
if (location.href == mediaHtml) {
    /*alert('верно');*/
    $(".mainMedia").css("display", "none").fadeIn(1000);
    document.getElementsByClassName('headerMedia')[0].style.height = document.documentElement.clientHeight + 'px'; //тоже
} else if (location.href == contactsHtml) {
    $(".mainContactsHtml").css("display", "none").fadeIn(1000);
    document.getElementsByClassName('headerContacts')[0].style.height = document.documentElement.clientHeight + 'px'; //тоже
} else {
    document.getElementsByClassName('main')[0].style.height = document.documentElement.clientHeight + 'px'; //задаю класс высоты для элемента
    document.getElementsByClassName('header')[0].style.height = document.documentElement.clientHeight + 'px'; //тоже}
}



console.log('загруж');

/*fadeIn и fadeOut при загрузке страницы*/
$(window).on('load', function() {  /*$(document).ready(function ()) или такой вариант*/
    console.log('загруж');
    $("#welcomeid, .header_menu").css("display", "none").fadeIn(2000);

    $("#my_company").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("#welcomeid, .header_menu").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

});

/*
let question = prompt('Кто там?', '')

if (question == 'Админ') {

    let pass = prompt('Пароль?','');

    if (pass === 'Я главный') {
        alert('Здравствуйте!')
    } else if (pass === '' || pass === null) {
        alert('ERROR')
    } else {
        alert('Неверный пароль!')
    }
} else if (question === '' || question === null){
    alert('ERROR')
} else {
    alert('Я вас не знаю!')
}
*/

/*$.ajax({
    url: "myCompanyDemo.html",
    dataType: 'json',
    data: data,
    success: function () {alert("success");},
    error: function () {alert("error");}
});*/


(function() {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let position = windowInnerHeight - 100;

        if (scrolled > position) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < position) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();



/*Скролл на главной странице до div main*/
const $scrollBy = document.querySelector('#main');
$scrollBy.onclick = function (e) {
    e.preventDefault();
    scrollTo({ top: windowInnerHeight, behavior: 'smooth' });
};


/*Исчезновение дива welcome при прокрутке на 150*/
let divHide = document.getElementById("welcomeid");

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;


    if (scrolled >= 150){
        divHide.classList.add('welcome_hide');
    } else {
        divHide.classList.remove('welcome_hide');
    }

    oldScrollY = scrolled;
}

/*$(function() {
    alert('Подключена последняя версия jQuery через CDN');
});*/

/*$(document).ready(function (){
    $("#my_company").click(function (){
        $("#w").append(" JQuery")
    })

});*/


/*if (window.jQuery) {
    var verJquery = jQuery.fn.jquery;
    // выведем версию jQuery в консоль
    console.log(verJquery);
}*/





$('#media').on("click", function (event){
    event.preventDefault();
    linkLocation = this.href;
    $("#welcomeid").fadeOut(1000, redirectPage);
});

function redirectPage() {
    window.location = linkLocation;
}

/*$("#my_company").click(function() {
   /!* this.style.display = 'none';*!/
    /!*$(".welcome").css('display', 'block');*!/
    $("video").get(0).play()
    /!*$('.welcome').prop('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?;autoplay=1&;controls=0&;showinfo=0');*!/!*!/
});*/


let myCompanyDem = $('.myCompanyDemo').html(); // это переменная, которая хранит в себе содержимое тега с классом myCompanyDemo $('.myCompanyDemo').text()

console.log(myCompanyDem);

$("#my_company").on("click", function(){   // эта функция после клика должна вставлять значение переменной myCompanyDemo в div с классом index
    $("video").get(0).play();
    $('div.index').html(myCompanyDem);
    $('video').addClass('add_class');
});

let url = "file://C://Users//н//Documents//html//myCompany.html";

$("video").on("ended", function() {
    $("#me").append(" end video");
    $('video').removeClass('');
    window.location.href = url;

})



/*
let time = allert
*/

/*$(document).ready(function (){
    $("#my_company").click(function (){
        $("#me").append(" JQuery")
    })

});*/


/*let url = "C:/Users/%D0%BD/Documents/html/index.html";
function openhtml () {
    $(location).attr('href', url);
}*/


/*
1. Почему document ready на 2 странице сайта когда загружается занодо функция не происходит, строчка 106
2. в 141 строчке и js и jquery, как под один язык сделать
*/
