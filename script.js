/*___________________________________________Scroll Footer_____________________________________________________*/
document.addEventListener("DOMContentLoaded", () => {
    const scrollFooter = document.getElementById("scroll-footer");

    let scrollTimeout; // To track the scroll timeout
    let lastScrollPosition = window.scrollY; // Get initial scroll position
    let isAtBottom = false;

    const checkIfAtBottom = () => {
        return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    };

    const showFooter = () => {
        scrollFooter.classList.add("visible");
    };

    const hideFooter = () => {
        scrollFooter.classList.remove("visible");
    };

    const handleScroll = () => {
        clearTimeout(scrollTimeout); // Clear any existing timeout

        let currentScrollPosition = window.scrollY;
        isAtBottom = checkIfAtBottom();

        if (currentScrollPosition > lastScrollPosition && !isAtBottom) {
            // User is scrolling down and not at the bottom
            showFooter();
            scrollTimeout = setTimeout(hideFooter, 1000); // time
          } else if (currentScrollPosition < lastScrollPosition) {
            // User is scrolling up
            hideFooter();
          } else if (isAtBottom) {
            // Keep the footer visible if at the bottom of the page
            showFooter();
          }

        lastScrollPosition = currentScrollPosition; // Update last scroll position
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
});
/*_________________________________________Dropdown menu____________________________________________________*/
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

/*______________________________________________Typewriter Effect_______________________________________________*/
const texts = [
    "une étudiante",
    "créative",
    "en but informatique"
]
let speed =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter

/*_____________________________________________________________________________________________*/
var isScrolled = false;
var navbar = document.querySelector(".navbar");

function setScrolled(bool) {
    isScrolled = bool;

    navbar.classList.toggle("scrolled", isScrolled);
}

function handleScroll() {
    if (window.scrollY > 10) {
        setScrolled(true);
    } else {
        setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
};

window.addEventListener("scroll", handleScroll);

/*__________________________________________Carousel___________________________________________________*/
let index = 1;
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const smallItemWidth = 180 + 20; // width normale + margin
    const largeItemWidth = 260 + 20; // width active + margin

    // Calcul du décalage pour centrer l'élément actif
    const offset = -index * smallItemWidth + (containerWidth / 2 - largeItemWidth / 2);

    carousel.style.transform = `translateX(${offset}px)`;

    items.forEach((item, i) => {
        item.classList.remove('active');
        item.style.width = '180px';
        item.style.height = '280px';
        if (i === index) {
            item.classList.add('active');
            item.style.width = '260px';
            item.style.height = '360px';
        }
    });
}


function moveSlide(direction) {
    index += direction;
    if (index < 0) index = totalItems - 1;
    if (index >= totalItems) index = 0;
    updateCarousel();
}
updateCarousel();

/*__________________________________________hard skills___________________________________________________*/
function afficherSection(id, btn) {
    var section = document.getElementById(id);
    var icon = btn.querySelector("i");
    var isVisible = section.style.display === "block";

    
    section.style.display = isVisible ? "none" : "block";

    
    if (isVisible) {
        icon.classList.remove("bx-chevron-down");
        icon.classList.add("bx-chevron-right");

        
        section.querySelectorAll('.bar-fill').forEach(bar => {
            bar.style.width = "0%";
        });

    } else {
        icon.classList.remove("bx-chevron-right");
        icon.classList.add("bx-chevron-down");

        
        setTimeout(() => {
            section.querySelectorAll('.bar-fill').forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
        }, 200);
    }
}