/* PopUp*/

let popupbutton = $("#popup_button")
let popup = $("#popup")
let popupInner = $("#popup_inner")
let popupClose = $("#popup_close")


$(popupbutton).on("click", function (event) {
    event.preventDefault();
    popup.toggleClass("open")
    popupInner.toggleClass("move")
})

$(popupClose).on("click", function (event) {
    event.preventDefault();
    popup.toggleClass("open")
    popupInner.toggleClass("move")
})

$(popup).on("click", function (event) {
    event.preventDefault();
    if (event.target.className == "popup open") {
        popup.removeClass("open")
        popupInner.toggleClass("move")
    }
})


/* DropDown Nav Menu*/

let navlink = $("#dropdown_link")
let menu = $("#dropdown_toggle")
let innermenu = $("#dropdown_inner")

let header = $("#header_inner")
let main = $("main")
let footer = $("section")

$(navlink).on("click", function (event) {
        event.preventDefault();
        menu.addClass("show")
        innermenu.addClass("show");
        event.stopPropagation()
    })

$(header).on("click", function (event) {
        event.preventDefault();
        menu.removeClass("show")
        innermenu.removeClass("show");
        burgerMenu.removeClass("toggleburger")

    })
$(main).on("click", function (event) {
        event.preventDefault();
        menu.removeClass("show")
        innermenu.removeClass("show");
            burgerMenu.removeClass("toggleburger")

    })
$(footer).on("click", function (event) {
        event.preventDefault();
        menu.removeClass("show")
        innermenu.removeClass("show");
        burgerMenu.removeClass("toggleburger")
        secondBurgerMenu.removeClass("toggleburger")
    })


/* Burger menu*/

let burgerButton = $("#burger_button")
let burgerMenu = $("#dropdown_burger")
$(burgerButton).on("click", function (event) {
        event.preventDefault();
        burgerMenu.addClass("toggleburger")
        secondBurgerMenu.removeClass("toggleburger")
        event.stopPropagation()
    })

/* Second Burger menu*/

let secondBurgerButton = $("#second_burger_button")
let secondBurgerMenu = $("#second_dropdown")
$(secondBurgerButton).on("click", function (event) {
    event.preventDefault();
        secondBurgerMenu.addClass("toggleburger")
        event.stopPropagation()
    })


/* Slider*/

$(function () {
    let slider = $("#slider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true,
        variableWidth: false,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 3000
    });
});

/* Growing block*/

let button = $("#growing_button")
let growingItem = $("#growing_item")
$(button).on("click", function (event) {
    event.preventDefault();
    growingItem.toggleClass("hidden")
    button.toggleClass("reverse")
})





