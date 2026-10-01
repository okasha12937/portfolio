/* =================================
   PRELOADER
================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 600);

});


/* =================================
   NAVBAR
================================= */

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("open");

    const icon =
        menuToggle.querySelector("i");

    if (navbar.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =================================
   DARK / LIGHT MODE
================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");


function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    } else {

        document.body.classList.remove("light");

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }

}


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme) {

    applyTheme(savedTheme);

}


themeToggle.addEventListener("click", () => {

    const isLight =
        document.body.classList.contains("light");

    const newTheme =
        isLight ? "dark" : "light";

    applyTheme(newTheme);

    localStorage.setItem(
        "portfolioTheme",
        newTheme
    );

});


/* =================================
   TYPING ANIMATION
================================= */

const typing =
    document.getElementById("typing");


const words = [

    "Accounts Executive",
    "BBA Student",
    "Finance Enthusiast",
    "Business Learner"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeWriter() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (letterIndex === word.length) {

            deleting = true;

            setTimeout(
                typeWriter,
                1500
            );

            return;

        }

    } else {

        typing.textContent =
            word.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );

}


typeWriter();


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("show");

                    revealObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =================================
   SKILL BARS
================================= */

const skillBars =
    document.querySelectorAll(
        ".bar span"
    );


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const value =
                        entry.target
                            .dataset
                            .value;

                    entry.target.style.width =
                        value + "%";

                    skillObserver
                        .unobserve(
                            entry.target
                        );

                }

            });

        },
        {
            threshold: .5
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            formMessage.style.color =
                "#ff6b6b";

            formMessage.textContent =
                "Please complete all fields.";

            return;

        }


        formMessage.style.color =
            "#35e58a";

        formMessage.textContent =
            `Thanks ${name}! Your message has been received.`;


        contactForm.reset();

    }
);


/* =================================
   BACK TO TOP
================================= */

const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =================================
   CURSOR GLOW
================================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =================================
   CURRENT YEAR
================================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();