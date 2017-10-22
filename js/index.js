$(window).on('load', function() {
    $("body").removeClass("preload");
});
$(window).on('load', function() {
    $("#loading").fadeOut("fast");
});
$(document).ready(function() {
    $('#hideMe').fadeOut(8000); // 5 seconds x 1000 milisec = 5000 milisec
    $('#text').fadeIn(10000);
});

setTimeout(resetCSS, 8000);

function resetCSS() {
    $('#close').fadeIn("slow");
}