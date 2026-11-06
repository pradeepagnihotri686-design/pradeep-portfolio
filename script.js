// Portfolio Scroll Animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});

console.log("Portfolio loaded successfully!");