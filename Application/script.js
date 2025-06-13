 function toggleMenu() {
      const menu = document.getElementById("menuOptions");
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }

    // Close menu on outside click
    window.addEventListener("click", function (e) {
      const menu = document.getElementById("menuOptions");
      const hamburger = document.querySelector(".hamburger");
      if (
        !hamburger.contains(e.target) &&
        !menu.contains(e.target)
      ) {
        menu.style.display = "none";
      }
    });