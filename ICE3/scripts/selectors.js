console.log('selectors.js loaded')

//change background colour
function highlight(element) {
    element.css("background-color", '#fcf30040')
}

function cssSelectors() {
    $('p').css('background-color', '2a9d8f');
    $('.red-box').css('background-color', '2a9d8f');
    $('#list').css('font-size', '40px');
    // $('h1,h2').css('color', 'red')
    $('li:even').css('elector');
}
cssSelectors();

function traversingTheDOM() {
    // $('#list').prev().css('background-color', '3a8ff');


    $('#list').find('li').css('background-color', '#3/a86ff')
    //traverse up 1 level
    $('#list').parents('div').css('font-size', '24px');


}


function filtering() {
    $('#list').find('li').filter(':even').css('background-color', '#3/a86ff')
    $('#list').find('li').filter(function (index) {
        return index % 2 == 0;
    }).css("background-color", "red");
}

//replaces text
function addingReplactingRemoving() {
    $("ul ul:first").append($("<li>lasst item of the first sub list</li>"));

    $("<li>this is the last</li>").appendTo($("ul ul:first"));

    $('.red-box').befor("<div class='red-box'>new red box</div>");

    let newText = 'movie quote';

    $('li').replaceWith('<li>$(newText)</li>');

    $("<div class = 'green-box'>new green box</div>").replaceAll("red-box");


}