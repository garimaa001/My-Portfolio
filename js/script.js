// Typing effect
var typed = new Typed('#typed', {
    strings: [" HELLO! ", " Welcome to My Portfolio, ", " I am Garima Bisht"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
  });
  
  // Reveal section when Explore is clicked
  document.querySelector(".btn").addEventListener("click", () => {
    document.querySelectorAll("section:not(.home)").forEach(sec => {
      sec.classList.add("show");
    });
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
  
  // Reveal section when nav links are clicked
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("href").slice(1);
      document.querySelectorAll("section:not(.home)").forEach(sec => {
        sec.classList.add("show");
      });
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // 💡 NEW: Project Filtering Logic
  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter');
  
        projectCards.forEach(card => {
          if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  