const $MENU_BUTTON = document.getElementById('menu_button')
const $MENU = document.querySelector('.menu')



$MENU_BUTTON.addEventListener('click', ()=> {
    $MENU.classList.toggle('active')
})

