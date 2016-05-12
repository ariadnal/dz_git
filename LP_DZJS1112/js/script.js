$(function() {
  $('div.slider').mySlider();




var template = $('#test').html();
var data = {
title: 'Пелих Лариса Геннадиевна',
summary: 'Образование получено, дерево посажено, сын выращен, обнуляю счетчики и собираюсь реализовать мечты.',
phone: '+380996046470',
email: '<a href="https://www.facebook.com/gavalda.l">facebook.com</a>',
feedback: 'В GoForIt пришла за практическими структурированными знаниями. Особенно радует разнонаправленность подготовки.'
};
var content = tmpl(template, data);

$('body').append(content);

});
