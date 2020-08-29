/* DropDown Nav Menu*/
let navlink = $("#dropdown_link")
let menu = $("#dropdown_toggle")
$(navlink).on("click", function (event) {
        event.preventDefault();
        menu.toggleClass("show")
    })



    /* Growing block*/
let button = $("#growing_button")
let growingItem = $("#growing_item")
$(button).on("click", function (event) {
        event.preventDefault();
        growingItem.toggleClass("hidden")
        button.toggleClass("reverse")
    })





//$(function () {
//    let slider = $("#slider");
//    slider.slick({
//        infinite: true
//        , slidesToShow: 2
//        , slidesToScroll: 2
//        , fade: true
//        , arrows: false
//        , dots: true
//    , });
//});
