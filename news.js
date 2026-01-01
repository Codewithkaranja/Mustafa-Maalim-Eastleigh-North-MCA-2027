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

      // News filtering functionality
      const filterBtns = document.querySelectorAll(".filter-btn");
      const newsCards = document.querySelectorAll(".news-card");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons
          filterBtns.forEach((b) => b.classList.remove("active"));

          // Add active class to clicked button
          this.classList.add("active");

          // Get filter value
          const filterValue = this.getAttribute("data-filter");

          // Show/hide news cards based on filter
          newsCards.forEach((card) => {
            if (
              filterValue === "all" ||
              card.getAttribute("data-category") === filterValue
            ) {
              card.classList.add("visible");
            } else {
              card.classList.remove("visible");
            }
          });
        });
      });

      // News card animation on scroll
      const newsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      newsCards.forEach((card) => {
        newsObserver.observe(card);
      });

      /* Newsletter form submission
      const newsletterForm = document.querySelector(".newsletter-form");

      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = this.querySelector(".newsletter-input").value;
        alert(
          `Thank you for subscribing with ${email}! You will now receive our campaign updates.`
        );
        this.reset();
      });
      */

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


      //newsletter form submission popup
      function closeNewsletterSuccess() {
  document.getElementById("newsletterSuccessPopup").style.display = "none";
}

document.getElementById("newsletterForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Honeypot check
  if (formData.get("_honey")) return;

  try {
    await fetch("https://formsubmit.co/mustafamaalim05@gmail.com", {
      method: "POST",
      body: formData
    });

    // Show success popup
    document.getElementById("newsletterSuccessPopup").style.display = "flex";

    // Reset form
    form.reset();

  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
});