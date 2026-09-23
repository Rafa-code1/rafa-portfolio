/* =========================
   MOBILE MENU
========================= */

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-260px";
}


/* =========================
   CLOSE MOBILE MENU
   WHEN CLICKING A LINK
========================= */

const menuLinks = document.querySelectorAll("#sidemenu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {
        closemenu();
    });

});


/* =========================
   ABOUT TABS
========================= */

function opentab(tabname, clickedTab) {

    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    clickedTab.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function() {

    const submitButton = contactForm.querySelector("button");

    submitButton.textContent = "Opening Email...";

    setTimeout(function() {
        submitButton.textContent = "Send Message";
    }, 2000);

});