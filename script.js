document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation menu
  const menuButton = document.querySelector(
    ".menu-toggle, .hamburger, #menu-toggle"
  );
  const navigation = document.querySelector(
    ".nav-links, .navbar-menu, #nav-links"
  );

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("active");
      menuButton.setAttribute(
        "aria-expanded",
        navigation.classList.contains("active")
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scrolling for section links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Current year in footer
  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // WhatsApp contact buttons
  document.querySelectorAll("[data-whatsapp]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      const number = button.getAttribute("data-whatsapp");

      if (!number) return;

      event.preventDefault();

      const message = encodeURIComponent(
        "Hello Shree Ganesh Computers, I need information about CCTV installation and networking services."
      );

      window.open(
        "https://wa.me/" + number.replace(/\D/g, "") +
        "?text=" + message,
        "_blank",
        "noopener,noreferrer"
      );
    });
  });

  // Reveal animation when elements enter the screen
  const revealElements = document.querySelectorAll(
    ".reveal, .fade-in, [data-reveal]"
  );

  if ("IntersectionObserver" in window && revealElements.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  // Contact form validation
  document.querySelectorAll("form[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      const phone = form.querySelector(
        'input[type="tel"], input[name="phone"]'
      );

      if (phone) {
        const digits = phone.value.replace(/\D/g, "");

        if (digits.length < 10) {
          event.preventDefault();
          alert("Please enter a valid contact number.");
          phone.focus();
        }
      }
    });
  });

  console.log("Shree Ganesh Computers website loaded successfully.");
});
