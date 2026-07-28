const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name==="" || email==="" || message===""){
        alert("Please fill all fields.");
        return;
    }

    success.innerHTML = "✅ Thank you! Your message has been sent successfully.";
    success.style.color = "green";

    form.reset();
});
