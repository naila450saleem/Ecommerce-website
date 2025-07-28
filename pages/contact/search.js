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
