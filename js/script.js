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

/* /PopUp*/

/*Active state for menu */

let addStateObserverForMenu = function(menuItems, itemSelector, activeClass) {
    menuItems = document.querySelectorAll(itemSelector)

        menuItems.forEach((value, index) =>
        menuItems[index].addEventListener('click', function() {
        for(let i=0; i < menuItems.length; i++) {
           menuItems[i].classList.remove(activeClass)
        }
        menuItems[index].classList.add(activeClass)
    }))}


addStateObserverForMenu("mainMenuItems", '.menu_link', 'menu_link_active')
addStateObserverForMenu("innerMenuItems", '.inner_menu_link', 'inner_menu_link_active')
addStateObserverForMenu("burgerMenuItems", '.burger_link', 'menu_link_active')
addStateObserverForMenu("innerBurgerMenuItems", '.inner_burger_link', 'inner_menu_link_active')

/*/Active state for menu*/

/*One listener for 4 Dropdown menu*/

let menu = $("#dropdown_toggle")
let innermenu = $("#dropdown_inner")
let burgermenu = $("#dropdown_burger")
let innerburgermenu = $('#dropdown_inner_burger')


window.addEventListener('click', (event) => {
   let targetClassList = event.target.classList

   if (targetClassList.contains('menu_link_dropdown'))
    {menu.toggleClass("show")
    innermenu.toggleClass("show")}
    else if (targetClassList.contains('dropdown_item')||(targetClassList.contains('show')))
    {"prevent closing"}
    else if (targetClassList.contains('burger_line'))
    {burgermenu.toggleClass("toggleburger")}
    else if ((targetClassList.contains('dropdown_burger_item'))||(targetClassList.contains('dropdown_burger'))||(targetClassList.contains('dropdown_burger_list')))
    {"prevent closing"}
    else if (targetClassList.contains('burger_inner_button'))
    {innerburgermenu.toggleClass("toggleinnerburger")}
    else if ((targetClassList.contains('second_dropdown_list'))||(targetClassList.contains('second_dropdown')))
    {"prevent closing"}
    else
    {menu.removeClass("show")
    innermenu.removeClass("show");
    burgermenu.removeClass("toggleburger")
    innerburgermenu.removeClass("toggleinnerburger")}
})

/*/One listener for 4 Dropdown menu*/

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

/*/Slider*/

/* Growing block*/

let button = $("#growing_button")
let growingItem = $("#growing_item")
$(button).on("click", function (event) {
    event.preventDefault();
    growingItem.toggleClass("hidden")
    button.toggleClass("reverse")
})

/*/Growing block*/




