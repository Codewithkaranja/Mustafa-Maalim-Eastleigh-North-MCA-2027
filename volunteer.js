document.addEventListener("DOMContentLoaded", function () {
        // Header scroll effect
        window.addEventListener("scroll", function () {
          const header = document.getElementById("header");
          const backToTop = document.querySelector(".back-to-top");

          if (!header || !backToTop) return;

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

        if (hamburger && navMenu) {
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
        }

        /* Volunteer form submission
        const volunteerForm = document.getElementById("volunteerForm");
        if (volunteerForm) {
          volunteerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form data
            const firstName = document.getElementById("firstName").value;
            const email = document.getElementById("email").value;

            // Show success message
            alert(
              `Thank you, ${firstName}! We've received your volunteer application and will contact you at ${email} within 48 hours. Welcome to the Gamechanger movement!`
            );

            // Reset form
            this.reset();
          });
        }*/

        // FAQ functionality
        const faqItems = document.querySelectorAll(".faq-item");
        if (faqItems.length > 0) {
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
        }

        // Animate stats counter
        const statNumbers = document.querySelectorAll(".stat-number");
        const statsSection = document.querySelector(".volunteer-intro");

        if (statNumbers.length > 0 && statsSection) {
          const animateValue = (element, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
              );
              const value = Math.floor(progress * (end - start) + start);
              element.textContent = value.toLocaleString() + "+";
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };

          const statsObserver = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  statNumbers.forEach((stat) => {
                    const target = parseInt(stat.textContent);
                    animateValue(stat, 0, target, 2000);
                  });
                  statsObserver.disconnect();
                }
              });
            },
            { threshold: 0.5 }
          );

          statsObserver.observe(statsSection);
        }

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
      });
      document.getElementById("volunteerForm").addEventListener("submit", function() {
  alert("🎉 Thank you! Your volunteer registration has been submitted successfully!");
});