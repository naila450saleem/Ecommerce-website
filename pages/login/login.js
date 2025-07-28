//Responsive//////////////////////////////////////

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


window.addEventListener("DOMContentLoaded", () => {
  const flashBar = document.querySelector(".flash-bar");
  const pTag = flashBar.querySelector("p");

  if (pTag) {
    const content = pTag.innerHTML;
    const scrollingDiv = document.createElement("div");
    scrollingDiv.className = "scrolling-text";
    scrollingDiv.innerHTML = content;

    flashBar.removeChild(pTag);
    flashBar.appendChild(scrollingDiv);
  }
});


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
