$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow");
    }, 3e3);
    $("#slideshow3 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow3 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow3");
    }, 3e3);
    $("#slideshow4 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow4 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow4");
    }, 3e3);
    $("#slideshow6 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow6 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow6");
    }, 3e3);
    $("#slideshow7 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow7 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow7");
    }, 3e3);
    $("#slideshow8 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow8 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow8");
    }, 3e3);
    $("#slideshow9 > div:gt(0)").hide();
    setInterval(function() {
        $("#slideshow9 > div:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo("#slideshow9");
    }, 3e3);
});