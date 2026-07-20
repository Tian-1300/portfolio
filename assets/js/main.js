// Render Lucide icons referenced via data-lucide attributes.
if (window.lucide) {
  window.lucide.createIcons();
}

// Mobile navigation toggle
(function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  if (!toggle || !mobileMenu) return;

  function setOpen(open) {
    mobileMenu.classList.toggle("hidden", !open);
    if (iconMenu) iconMenu.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    setOpen(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
})();

// Scroll-reveal animation using IntersectionObserver
(function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
})();

// Contact form validation + mailto submission handler
(function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const CONTACT_EMAIL = form.dataset.contactEmail;

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("name-error"),
      validate: (value) => value.trim().length >= 2,
      message: "Please enter your name.",
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
      validate: (value) => EMAIL_PATTERN.test(value.trim()),
      message: "Please enter a valid email address.",
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("message-error"),
      validate: (value) => value.trim().length >= 10,
      message: "Message should be at least 10 characters.",
    },
  };

  function setFieldError(field, hasError) {
    const { input, error, message } = field;
    if (!input) return;
    input.classList.toggle("border-red-500", hasError);
    input.classList.toggle("border-background/20", !hasError);
    input.setAttribute("aria-invalid", String(hasError));
    if (error) {
      error.textContent = hasError ? message : "";
      error.classList.toggle("hidden", !hasError);
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    const values = {};
    Object.entries(fields).forEach(([key, field]) => {
      const value = field.input ? field.input.value : "";
      values[key] = value;
      const fieldValid = field.validate(value);
      setFieldError(field, !fieldValid);
      if (!fieldValid) isValid = false;
    });

    const statusEl = document.getElementById("contact-status");

    if (!isValid) {
      if (statusEl) statusEl.classList.add("hidden");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${values.name}`,
    );
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    if (statusEl) statusEl.classList.remove("hidden");
    form.reset();
  });
})();
