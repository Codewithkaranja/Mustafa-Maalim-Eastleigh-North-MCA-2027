// Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        const backToTop = document.querySelector(".back-to-top");

        if (window.scrollY > 100) {
          header.classList.add("scrolled");
          backToTop.classList.add("active");
        } else {
          header.classList.remove("scrolled");
          backToTop.classList.remove("active");
        }
      });

      // Mobile menu toggle
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", function () {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });

      /* Contact form submission
      const contactForm = document.getElementById("contactForm");

      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;

        // Show success message
        alert(
          `Thank you, ${name}! We've received your message about "${subject}" and will respond to ${email} within 24 hours.`
        );

        // Reset form
        this.reset();
      });*/

      // FAQ functionality
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
          // Close all other items
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
            }
          });

          // Toggle current item
          item.classList.toggle("active");
        });
      });

      // Animate contact cards on scroll
      const contactCards = document.querySelectorAll(".contact-card");

      const contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1 }
      );

      contactCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        contactObserver.observe(card);
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      function closeContactSuccess() {
  document.getElementById("contactSuccessPopup").style.display = "none";
}

// AJAX form submission
document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Honeypot check
  if (formData.get("_honey")) return;

  // Add FormSubmit hidden fields
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append("_subject", "New Contact Message");

  try {
    await fetch("https://formsubmit.co/mustafamaalim05@gmail.com", {
      method: "POST",
      body: formData
    });

    // Show success popup
    document.getElementById("contactSuccessPopup").style.display = "flex";

    // Reset form
    form.reset();

  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
});