/*
intNumbers = [-1, 2, -3, 4, -5, 6, -7, 0, -8];

signCount = function (array) {
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

*/

console.log('script right')



/*
if($('.main').length > 0) {
    console.log('more less zero')
} else {
    console.log('not fined')
}
*/
let windowInnerHeight = document.documentElement.clientHeight; //узнаю размер внутреннего окна браузера
let mediaHtml = "http://first/media.php";
let contactsHtml = "http://first/contacts.php";
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


$("#signUp").click(function () {
    $(".signUp").fadeIn(1000).css("display", "block");
})
$("#logIn").click(function (){
    $(".signUp").fadeOut(1000).css("display", "none");
    $(".logIn").fadeIn(1000).css("display", "block");
})

$("#backLogIn, #backSignUp").click(function (){
    $(".signUp, .logIn").fadeOut(1000).css("display", "none");
})


/*fadeIn и fadeOut при загрузке страницы*/
$(window).on('load', function() {  /*$(document).ready(function ()) или такой вариант*/
    $(".header_menu").fadeIn(2000).css('display', 'flex');
    $("#welcomeid").fadeIn(2000).css('display', 'block');

    $("#main, #my_company, #media, #contacts").click(function(event){
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
    /*oldScrollY = scrolled;*/
}

////////////////////////////////////////////////////////

/*if (window.jQuery) {
    var verJquery = jQuery.fn.jquery;
    // выведем версию jQuery в консоль
    console.log(verJquery);
}*/

//////////////   работает, но не нужна   ///////////////

/*$('#media').on("click", function (event){
    event.preventDefault    ();
    linkLocation = this.href;
    $("#welcomeid, .header_menu").fadeOut(1000, redirectPage);
});

function redirectPage() {
    window.location = linkLocation;
}*/


let myCompanyDem = $('.myCompanyDemo').html(); // это переменная, которая хранит в себе содержимое тега с классом myCompanyDemo $('.myCompanyDemo').text()

$("#my_company").on("click", function(){   // эта функция после клика должна вставлять значение переменной myCompanyDemo в div с классом index
    $("video").get(0).play();
    $('div.index').html(myCompanyDem);
    $('video').animate({
            width: "100%",
            opacity: 1,
        }, {
            duration: 1500,
            complete: function (){
                console.log('success');
                $('video').animate({
                    width: "100%",
                }, {
                    duration: 1500,
                })
            }
        })

});

/*let video = $('video').html();
console.log(video);
alert(video);*/

/*let timeout = $('video').removeClass('.remove_class')*/

let url = "http://first/myCompany.php";

$("video").on("ended", function() {
    $("#me").append(" end video");
    window.location.href = url;
});


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
