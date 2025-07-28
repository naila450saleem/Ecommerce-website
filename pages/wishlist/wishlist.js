function toggleMenu() {
  const navLinks = document.getElementById("navMenu");
  navLinks.classList.toggle("active");
}


//Cart sidebar
function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}

//Searchbar
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