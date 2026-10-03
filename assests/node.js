document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const hamburger =
        document.getElementById("hamburger");

    const navMenu =
        document.getElementById("navMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");


    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

    }


    if (navMenu) {

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section");


    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {

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

    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm && formMessage) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    document.getElementById("name");

                const emailInput =
                    document.getElementById("email");

                const subjectInput =
                    document.getElementById("subject");

                const messageInput =
                    document.getElementById("message");

                const name =
                    nameInput ? nameInput.value.trim() : "";

                const email =
                    emailInput ? emailInput.value.trim() : "";

                const subject =
                    subjectInput ? subjectInput.value.trim() : "";

                const message =
                    messageInput ? messageInput.value.trim() : "";


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    formMessage.textContent =
                        "Please fill all the fields.";

                    return;

                }


                const recipient =
                    "rishiakshi2819@gmail.com";


                const mailSubject =
                    encodeURIComponent(subject);


                const mailBody =
                    encodeURIComponent(

                        `Name: ${name}
Email: ${email}

Message:
${message}`

                    );


                window.location.href =
                    `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;


                formMessage.textContent =
                    "Opening your email application...";


                contactForm.reset();

            }
        );

    }


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".skill-card, .project-card, .timeline-item, .certificate-card, .experience-card"
        );


    if (animatedElements.length) {

        if ("IntersectionObserver" in window) {

            const observer =
                new IntersectionObserver(

                    (entries) => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        });

                    },

                    {
                        threshold: 0.15
                    }

                );


            animatedElements.forEach(element => {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(30px)";

                element.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";

                observer.observe(element);

            });

        } else {

            animatedElements.forEach(element => {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            });

        }

    }

});