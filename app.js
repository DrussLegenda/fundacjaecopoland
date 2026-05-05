document.documentElement.classList.add("has-js");

const sections = document.querySelectorAll(".section-observed");
const navLinks = document.querySelectorAll(".site-nav a");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  },
);

sections.forEach((section) => revealObserver.observe(section));

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || !entry.target.id) {
        return;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isActive);
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-20% 0px -40% 0px",
  },
);

document.querySelectorAll("main section[id]").forEach((section) => {
  activeSectionObserver.observe(section);
});
