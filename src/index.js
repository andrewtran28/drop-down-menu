import "./styles.css";

const menuDrop = (() => {
  const btn_menu = document.querySelector(".btn-menu-drop");
  btn_menu.addEventListener("click", menuDropDown);

  function menuDropDown() {
    document.getElementById("drop-down").classList.toggle("visible");
  }

  window.onclick = function (e) {
    if (!e.target.matches(".btn-menu-drop")) {
      let menuDrop = document.getElementsByClassName("drop-down-cont");

      for (let i = 0; i < menuDrop.length; i++) {
        let showDropdown = menuDrop[i];
        if (showDropdown.classList.contains("visible")) {
          showDropdown.classList.remove("visible");
        }
      }
    }
  };
})();