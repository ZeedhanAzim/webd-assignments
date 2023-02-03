console.log("animations.js loaded");

function fadeInOutTo() {
    $('red-box').fadeOut(2000);

    $('red-box').fadeToggle(1000);
}

function hideElement() {
    $('green-box').hide(1000);
    $('green-box').show(1000);

    $('green-box').slideUp(1000);
    $('green-box').slideDown(1000);
}

function chainAnimations() {
    $('blue-box').fadeTo(1000, 0.5);
    $('green-box').delay(1000).fadeTo(1000, 0.5);

    $('red-box').delay(1000).fadeTo(1000, 0.5).delay(1000).fadeTo
        (1000, 1.0).delay(1000).fadeOut;

}