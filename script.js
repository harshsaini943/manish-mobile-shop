/* ===============================
   MANISH MOBILE SHOP - MAIN JS
================================ */


/* ===============================
   1. 3D PHONE TILT
================================ */

const phone = document.querySelector(".phone-card");
const visual = document.querySelector(".hero-visual");

if (phone && visual) {

    visual.addEventListener("mousemove", (event) => {

        const box = visual.getBoundingClientRect();

        const mouseX = event.clientX - box.left;
        const mouseY = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * 12;

        const rotateX =
            ((centerY - mouseY) / centerY) * 10;

        phone.style.animation = "none";

        phone.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${-14 + rotateY}deg)
             rotateZ(3deg)
             translateY(-8px)`;
    });


    visual.addEventListener("mouseleave", () => {

        phone.style.transform =
            `perspective(1000px)
             rotateX(5deg)
             rotateY(-14deg)
             rotateZ(3deg)`;

        phone.style.animation =
            "phoneFloat 5s ease-in-out infinite";
    });
}


/* ===============================
   2. 3D SERVICE CARDS
================================ */

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const box = card.getBoundingClientRect();

        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -7;

        const rotateY =
            ((x - centerX) / centerX) * 7;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    });
});


/* ===============================
   3. QUICK CARDS 3D
================================ */

const quickCards = document.querySelectorAll(".quick-card");

quickCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const box = card.getBoundingClientRect();

        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const rotateX =
            ((y - box.height / 2) / (box.height / 2)) * -6;

        const rotateY =
            ((x - box.width / 2) / (box.width / 2)) * 6;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
    });
});


/* ===============================
   4. SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(
    ".service-card, .quick-card, .location-banner"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }
        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);
});


/* ===============================
   5. BUTTON MAGNETIC EFFECT
================================ */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const box = button.getBoundingClientRect();

        const x =
            event.clientX - box.left - box.width / 2;

        const y =
            event.clientY - box.top - box.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";
    });
});


/* ===============================
   6. SMOOTH SCROLL
================================ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ===============================
   7. INFO ITEM HOVER
================================ */

const infoItems = document.querySelectorAll(".info-item");

infoItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
            "translateY(-5px)";

    });


    item.addEventListener("mouseleave", () => {

        item.style.transform =
            "translateY(0)";
    });
});


console.log("Manish Mobile Shop website loaded successfully!");
```javascript
/* =========================================================
   PRODUCT DETAIL SYSTEM
========================================================= */

const productData = {

    "Earphones": {
        title: "Premium Earphones",
        icon: "fa-headphones",
        description:
            "Comfortable and reliable earphones for music, calls and everyday entertainment."
    },

    "Chargers": {
        title: "Fast Chargers",
        icon: "fa-bolt",
        description:
            "Fast and reliable mobile chargers suitable for everyday smartphone charging."
    },

    "Battery": {
        title: "Mobile Battery",
        icon: "fa-battery-full",
        description:
            "Replacement batteries for smartphones with reliable performance and proper fitting."
    },

    "Power Banks": {
        title: "Power Banks",
        icon: "fa-car-battery",
        description:
            "Portable backup power for your smartphone while travelling, working or studying."
    },

    "Phone Covers": {
        title: "Premium Phone Covers",
        icon: "fa-mobile-screen",
        description:
            "Stylish and protective phone covers available for different smartphone models."
    }

};


/* OPEN PRODUCT */

function openProduct(productName) {

    const product = productData[productName];

    if (!product) {
        return;
    }

    const detailSection =
        document.getElementById("productDetail");

    const title =
        document.getElementById("productTitle");

    const description =
        document.getElementById("productDescription");

    const icon =
        document.getElementById("productIcon");


    title.textContent = product.title;

    description.textContent = product.description;


    icon.innerHTML = 
        <i class="fa-solid ${product.icon}"></i>
    ;


    detailSection.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* CLOSE PRODUCT */

function closeProduct() {

    const detailSection =
        document.getElementById("productDetail");

    detailSection.classList.remove("active");

    document.body.style.overflow = "";

}


/* ESC KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProduct();
    }

});
```
