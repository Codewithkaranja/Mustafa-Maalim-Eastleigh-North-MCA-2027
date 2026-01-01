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

      // Pillar tabs functionality
      const pillarTabs = document.querySelectorAll(".pillar-tab");
      const pillarContents = document.querySelectorAll(".pillar-content");

      pillarTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          // Remove active class from all tabs and contents
          pillarTabs.forEach((t) => t.classList.remove("active"));
          pillarContents.forEach((c) => c.classList.remove("active"));

          // Add active class to clicked tab
          this.classList.add("active");

          // Show corresponding content
          const pillarId = this.getAttribute("data-pillar");
          document.getElementById(`${pillarId}-pillar`).classList.add("active");
        });
      });

      // Progress bar animation
      const progressBars = document.querySelectorAll(".progress-fill");

      const progressObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const width = entry.target.getAttribute("data-width");
              entry.target.style.width = `${width}%`;
            }
          });
        },
        { threshold: 0.5 }
      );

      progressBars.forEach((bar) => {
        progressObserver.observe(bar);
      });

      // Ward markers interaction
      const wardMarkers = document.querySelectorAll(".ward-marker");

      wardMarkers.forEach((marker) => {
        marker.addEventListener("click", function () {
          const wardName = this.getAttribute("data-ward");
          alert(
            `You selected ${wardName} ward. Detailed development plans for this ward are available in our comprehensive Ward development plan.`
          );
        });
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

      // Animation for initiative items on scroll
      const initiativeItems = document.querySelectorAll(".initiative-item");

      const initiativeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateX(0)";
            }
          });
        },
        { threshold: 0.1 }
      );

      initiativeItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        initiativeObserver.observe(item);
      });