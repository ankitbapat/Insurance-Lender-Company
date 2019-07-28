jQuery("#ex6").slider();
jQuery("#ex6").on("slide", function (slideEvt) {
    jQuery("#ex6SliderVal").text(slideEvt.value);
});

jQuery("#ex7").slider();
jQuery("#ex7").on("slide", function (slideEvt) {
    jQuery("#ex7SliderVal").text(slideEvt.value);
});

jQuery("#ex8").slider();
jQuery("#ex8").on("slide", function (slideEvt) {
    jQuery("#ex8SliderVal").text(slideEvt.value);
});

jQuery("#ex9").slider();
jQuery("#ex9").on("slide", function (slideEvt) {
    jQuery("#ex9SliderVal").text(slideEvt.value);
});
