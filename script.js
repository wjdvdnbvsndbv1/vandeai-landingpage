// scripts/script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Add background on scroll
    } else {
        header.classList.remove("scrolled"); // Restore transparency
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-signin").addEventListener("click", function() {
        window.location.href = "file:///E:/AI-Chatbot-Project2/public/index.html";
    });

    document.querySelector(".btn-send").addEventListener("click", function() {
        window.location.href = "file:///E:/AI-Chatbot-Project2/public/index.html";
    });
});

