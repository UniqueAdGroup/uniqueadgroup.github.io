const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyOw4sQPiVAxBqbUiSkjVoOGab0Y5juVZng5d9GqdYvN6vzCMvjZv-0Ew-dR7C4P2tmOA/exec";

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
