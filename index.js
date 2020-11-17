const $MENU_BUTTON = document.getElementById('menu_button')
const $MENU = document.querySelector('.menu')
const $HERO = document.querySelector('.hero-filter')
const $HEADER = document.querySelector('header')


/*Función para controlar el botón del menú*/
$MENU_BUTTON.addEventListener('click', ()=> {
    $MENU.classList.toggle('active')
})


/*Función para controlar la animación por scroll del menú*/

const observerOptions = 0.01

const observer = new IntersectionObserver(darkFixedMenu, {threshold: observerOptions})

observer.observe($HERO)

function darkFixedMenu(entries){
    const entry = entries[0]
    const target = $HEADER
    const isVisible = entry.intersectionRatio >= observerOptions;
        if(isVisible){
            target.classList.remove("dark")
            target.style.position = "inherit"
        } else{
            target.classList.add("dark")
            target.style.position = "fixed"
        }
}





