// ===============================
// Sticky Header
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#09111f";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    } else {
        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";
    }
});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(
".hero,.about,.skills,.education,.projects,.contact"
).forEach(section=>{

    observer.observe(section);

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

}

// ===============================
// Typing Effect
// ===============================

const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer"
];

const roleElement = document.querySelector(".hero-content h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        roleElement.textContent =
        currentRole.substring(0,charIndex++);

        if(charIndex > currentRole.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        roleElement.textContent =
        currentRole.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,
    deleting ? 60 : 120);

}

typeEffect();

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};