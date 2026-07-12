/*====================================================
    CARTOONDEV APP.JS
    PART 1
====================================================*/

"use strict";

/*====================================================
    DOM ELEMENTS
====================================================*/

const header = document.querySelector("header");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const scrollTop = document.querySelector(".scroll-top");

const darkToggle = document.querySelector(".dark-toggle");

const loader = document.querySelector(".loader");

const sections = document.querySelectorAll("section");

/*====================================================
    MOBILE MENU
====================================================*/

if(menuToggle){

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("active");

navLinks.classList.toggle("active");

});

}

/* Close menu */

navItems.forEach(item=>{

item.addEventListener("click",()=>{

menuToggle.classList.remove("active");

navLinks.classList.remove("active");

});

});

/*====================================================
    STICKY HEADER
====================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*====================================================
    SCROLL TO TOP
====================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollTop.classList.add("active");

}else{

scrollTop.classList.remove("active");

}

});

if(scrollTop){

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*====================================================
    SMOOTH SCROLL
====================================================*/

navItems.forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

const section=document.querySelector(href);

if(section){

section.scrollIntoView({

behavior:"smooth"

});

}

}

});

});

/*====================================================
    ACTIVE NAVIGATION
====================================================*/

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*====================================================
    DARK MODE
====================================================*/

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}

if(darkToggle){

darkToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

darkToggle.innerHTML="☀";

}else{

localStorage.setItem("theme","light");

darkToggle.innerHTML="🌙";

}

});

}

/* Set initial icon */

if(document.body.classList.contains("dark")){

darkToggle.innerHTML="☀";

}

/*====================================================
    LOADER
====================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("hide");

},1000);

});

/*====================================================
    FADE-IN EFFECT
====================================================*/

const cards=document.querySelectorAll(

".card,.service-card,.project,.member,.plan,.testimonial"

);

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*120);

});

/*====================================================
    CONSOLE
====================================================*/

console.log("🚀 CartoonDev Loaded Successfully");
/*====================================================
    CARTOONDEV APP.JS
    PART 2A
    Scroll Reveal + Counters + Typing + Progress Bars
====================================================*/

"use strict";

/*=========================================
    SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(
".card,.service-card,.project,.member,.plan,.testimonial,.timeline div"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

revealObserver.unobserve(entry.target);

}

});

},{
threshold:0.15
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*=========================================
    ANIMATED COUNTERS
=========================================*/

/*
Example HTML

<h2 class="counter" data-target="250">0</h2>

*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=Number(counter.dataset.target);

let current=0;

const increment=Math.max(1,Math.ceil(target/120));

function update(){

current+=increment;

if(current>=target){

counter.textContent=target;

}else{

counter.textContent=current;

requestAnimationFrame(update);

}

}

update();

counterObserver.unobserve(counter);

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
    TYPING EFFECT
=========================================*/

/*
Example HTML

<h1 class="typing"
data-words="Web Development,Desktop Apps,AI Solutions">
</h1>

*/

const typing=document.querySelector(".typing");

if(typing){

const words=typing.dataset.words.split(",");

let wordIndex=0;

let letterIndex=0;

let deleting=false;

function type(){

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=currentWord.substring(0,letterIndex);

letterIndex++;

if(letterIndex>currentWord.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=currentWord.substring(0,letterIndex);

letterIndex--;

if(letterIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

letterIndex=0;

}

}

setTimeout(type,deleting?45:90);

}

type();

}

/*=========================================
    PROGRESS BAR ANIMATION
=========================================*/

/*
Example HTML

<div class="progress">

<div class="progress-bar"

data-progress="90"></div>

</div>

*/

const progressBars=document.querySelectorAll(".progress-bar");

const progressObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar=entry.target;

const value=bar.dataset.progress;

bar.style.width=value+"%";

progressObserver.unobserve(bar);

}

});

},{
threshold:.4
});

progressBars.forEach(bar=>{

bar.style.width="0%";

bar.style.transition="width 1.5s ease";

progressObserver.observe(bar);

});

/*=========================================
    FINISHED
=========================================*/

console.log("✅ App.js Part 2A Loaded");

/*====================================================
    CARTOONDEV APP.JS
    PART 2B-1A
    TESTIMONIAL SLIDER
====================================================*/

"use strict";

/*=========================================
    TESTIMONIAL SLIDER
=========================================*/

const slider = document.querySelector(".testimonial-slider");

if (slider) {

    const slides = slider.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    const dotsContainer = document.querySelector(".testimonial-dots");

    let currentIndex = 0;
    let autoSlide;

    /* Create Navigation Dots */

    slides.forEach((_, index) => {

        const dot = document.createElement("button");

        dot.className = "testimonial-dot";

        if (index === 0) {

            dot.classList.add("active");

        }

        dot.addEventListener("click", () => {

            currentIndex = index;

            updateSlider();

            restartAuto();

        });

        dotsContainer.appendChild(dot);

    });

    const dots = document.querySelectorAll(".testimonial-dot");

    /* Update Slider */

    function updateSlider() {

        slider.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));

        dots[currentIndex].classList.add("active");

    }

    /* Next */

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= slides.length) {

            currentIndex = 0;

        }

        updateSlider();

    }

    /* Previous */

    function prevSlide() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = slides.length - 1;

        }

        updateSlider();

    }

    /* Auto Play */

    function startAuto() {

        autoSlide = setInterval(nextSlide, 5000);

    }

    function restartAuto() {

        clearInterval(autoSlide);

        startAuto();

    }

    /* Buttons */

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

            restartAuto();

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            prevSlide();

            restartAuto();

        });

    }

    /* Pause on Hover */

    slider.addEventListener("mouseenter", () => {

        clearInterval(autoSlide);

    });

    slider.addEventListener("mouseleave", () => {

        startAuto();

    });

    startAuto();

}
/*====================================================
    CARTOONDEV APP.JS
    PART 2B-1B
    PORTFOLIO FILTER
    BUTTON RIPPLE EFFECT
====================================================*/

"use strict";

/*=========================================
    PORTFOLIO FILTER
=========================================*/

/*
Example HTML

<div class="portfolio-filter">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="web">Web</button>
    <button class="filter-btn" data-filter="mobile">Mobile</button>
    <button class="filter-btn" data-filter="desktop">Desktop</button>
</div>

<div class="project" data-category="web"></div>
<div class="project" data-category="mobile"></div>
*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

if (filterButtons.length && projects.length) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            projects.forEach(project => {

                const category = project.dataset.category;

                if (filter === "all" || filter === category) {

                    project.style.display = "block";

                    requestAnimationFrame(() => {

                        project.style.opacity = "1";
                        project.style.transform = "scale(1)";

                    });

                } else {

                    project.style.opacity = "0";
                    project.style.transform = "scale(.9)";

                    setTimeout(() => {

                        project.style.display = "none";

                    }, 250);

                }

            });

        });

    });

}

/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

const rippleButtons = document.querySelectorAll(

".btn,.primary-btn,.secondary-btn,.view-btn,.profile-btn"

);

rippleButtons.forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            event.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            event.clientY - rect.top - size / 2 + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        ripple.addEventListener("animationend", () => {

            ripple.remove();

        });

    });

});

console.log("✅ Portfolio Filter & Ripple Loaded");

