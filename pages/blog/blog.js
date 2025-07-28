// No dynamic JS currently needed for this static layout.
// Reserved for future interactivity if needed.
console.log("Blog Section Loaded");


//Responsive//////////////////////////////////////

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

//searchbar
document.addEventListener("DOMContentLoaded", () => {
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
  }
});


//Cart sidebar
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}