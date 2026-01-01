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

      // Media tabs functionality
      const mediaTabs = document.querySelectorAll(".media-tab");
      const mediaContents = document.querySelectorAll(".media-content");

      mediaTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          // Remove active class from all tabs and contents
          mediaTabs.forEach((t) => t.classList.remove("active"));
          mediaContents.forEach((c) => c.classList.remove("active"));

          // Add active class to clicked tab
          this.classList.add("active");

          // Show corresponding content
          const mediaId = this.getAttribute("data-media");
          document.getElementById(`${mediaId}-content`).classList.add("active");
        });
      });

      // Lightbox functionality
      const galleryItems = document.querySelectorAll(".gallery-item");
      const lightbox = document.getElementById("lightbox");
      const lightboxImage = document.getElementById("lightbox-image");
      const lightboxClose = document.getElementById("lightbox-close");
      const lightboxPrev = document.getElementById("lightbox-prev");
      const lightboxNext = document.getElementById("lightbox-next");

      let currentImageIndex = 0;
      const images = Array.from(galleryItems).map(
        (item) => item.querySelector("img").src
      );

      // Open lightbox when gallery item is clicked
      galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
          currentImageIndex = index;
          lightboxImage.src = images[currentImageIndex];
          lightbox.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });

      // Close lightbox
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      });

      // Navigate to previous image
      lightboxPrev.addEventListener("click", function () {
        currentImageIndex =
          (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex];
      });

      // Navigate to next image
      lightboxNext.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex];
      });

      // Close lightbox when clicking outside the image
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
          lightbox.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });

      // Video play functionality
      const videoCards = document.querySelectorAll(".video-card");

      videoCards.forEach((card) => {
        card.addEventListener("click", function () {
          // In a real implementation, this would open a modal with the video player
          alert(
            "Campaign Videos Coming Soon.Thank You For Your Support. ~  Mustafa Maalim"
          );
        });
      });

      // Download button functionality
      const downloadButtons = document.querySelectorAll(".download-card .btn");

      downloadButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          alert(
            "Campaign Videos Coming Soon.Thank You For Your Support. ~  Mustafa Maalim"
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