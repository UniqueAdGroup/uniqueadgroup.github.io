const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyOw4sQPiVAxBqbUiSkjVoOGab0Y5juVZng5d9GqdYvN6vzCMvjZv-0Ew-dR7C4P2tmOA/exec";
// ===== Mobile Menu =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    });
});
const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = "Sending...";

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {
        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.text();

        success.textContent = result;
        success.style.color = "green";
        form.reset();

    } catch (err) {
        success.textContent = "❌ Failed to send message.";
        success.style.color = "red";
    }

    btn.disabled = false;
    btn.textContent = "Send Message";
});
