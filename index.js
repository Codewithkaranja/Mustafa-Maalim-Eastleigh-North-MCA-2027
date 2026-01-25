// =========================
// Header Scroll Effect
// =========================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const backToTop = document.querySelector(".back-to-top");
  const scrolled = window.scrollY > 100;

  header?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("active", scrolled);
});

// =========================
// Mobile Menu
// =========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// =========================
// Smooth Scrolling
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor.getAttribute("href"));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// =========================
// Tab Functionality
// =========================
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    this.classList.add("active");
    document.getElementById(this.dataset.tab).classList.add("active");
  });
});

// =========================
// Intersection Observer Animations
// =========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".pillar, .news-card, .value-item")
  .forEach((el) => observer.observe(el));

// =========================
// Hero Slideshow
// =========================
// =========================
// Hero Slideshow (Optimized for PageSpeed)
// =========================

const heroSlides = document.querySelectorAll(".hero-slides .slide");
const heroImages = [
  "image 24.webp",
  "image 34.webp",
  "image 2.webp",
  "Mustafa Maalim favicon.webp",
  
];

// 1️⃣ Load ONLY the first image immediately
heroSlides[0].style.backgroundImage = `url(${encodeURI(heroImages[0])})`;

// Apply shared styles
heroSlides.forEach((slide) => {
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center 15%";
  slide.style.position = "absolute";
  slide.style.top = 0;
  slide.style.left = 0;
  slide.style.width = "100%";
  slide.style.height = "100%";
  slide.style.opacity = 0;
 // slide.style.transition = "opacity 1s ease-in-out";
});

// Make slide 1 visible
heroSlides[0].style.opacity = 1;

// 2️⃣ Lazy-load the other images after first paint
setTimeout(() => {
  for (let i = 1; i < heroSlides.length; i++) {
    heroSlides[i].style.backgroundImage = `url(${encodeURI(heroImages[i])})`;
  }
}, 800); // load after page becomes interactive

let currentSlide = 0;

function showSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
  });
}

// 3️⃣ Start slideshow after lazy-loading begins
setInterval(() => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}, 3000);


// =========================
// Scroll Down Button
// =========================
document.querySelector(".scroll-down")?.addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

// =========================
// Typewriter Effect
// =========================
const typewriterElement = document.getElementById("typewriter");
const messages = [
  "Vote For Hon. maalim ",
  "Leadership with Vision ",
  "Maendeleo Champion ",
  "Uniting Eastleigh North for Better ",
  "Your Voice, Your Future "
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentMessage = messages[msgIndex];
  typewriterElement.textContent = isDeleting
    ? currentMessage.substring(0, charIndex--)
    : currentMessage.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentMessage.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}
typeWriter();

// =========================
// Volunteer Form (Safe Version)
// =========================
const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
  volunteerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(volunteerForm);
    if (formData.get("_honey")) return;

    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "New Volunteer Submission");

    try {
      await fetch("https://formsubmit.co/bensonmaalim05@gmail.com", {
        method: "POST",
        body: formData
      });

      document.getElementById("volunteerSuccessPopup").style.display = "flex";
      volunteerForm.reset();

    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  });
}

function closeVolunteerSuccess() {
  document.getElementById("volunteerSuccessPopup").style.display = "none";
}

// =========================
// Swiper Slider
// =========================
var visionSwiper = new Swiper(".vision-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
  delay: 2000,
  disableOnInteraction: false,
},

});
