document.addEventListener("DOMContentLoaded", () => {

  // Safely handle footer toggle (if headings exist)
  const headings = document.querySelectorAll(".footer-heading");
  headings.forEach((heading) => {
    const column = heading.parentElement;
    const contentItems = column.querySelectorAll(".footer-list, .footer-form, p");

    heading.addEventListener("click", function () {
      const isOpen = heading.classList.contains("open");

      document.querySelectorAll(".footer-heading").forEach((h) => {
        h.classList.remove("open");
        const allItems = h.parentElement.querySelectorAll(".footer-list, .footer-form, p");
        allItems.forEach((item) => (item.style.display = "none"));
        h.querySelector(".toggle-icon").textContent = "+";
      });

      if (!isOpen) {
        heading.classList.add("open");
        contentItems.forEach((item) => (item.style.display = "block"));
        heading.querySelector(".toggle-icon").textContent = "−";
      } else {
        heading.classList.remove("open");
        contentItems.forEach((item) => (item.style.display = "none"));
        heading.querySelector(".toggle-icon").textContent = "+";
      }
    });
  });

  // ✅ Responsive toggle
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
  window.toggleMenu = toggleMenu; // So you can call it from HTML onclick

  // ✅ Search bar toggle
  const searchIcon = document.querySelector(".icons .icon i.fa-search");
  const searchBar = document.getElementById("search-bar");
  const closeBtn = document.getElementById("close-search");

  if (searchIcon && searchBar && closeBtn) {
    searchIcon.addEventListener("click", () => {
      searchBar.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      searchBar.style.display = "none";
    });
  } else {
    console.log("Search elements missing", {
      searchIcon,
      searchBar,
      closeBtn,
    });
  }

});

//Cart sidebar
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}