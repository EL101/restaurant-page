import "./styles.css";
import writeHomePage from "./home";
import writeAboutPage from "./about";
import writeMenuPage from "./menu";

function clear() {
    const content = document.querySelector("#content");
    if (content !== null) {
        content.innerHTML = "";
    }
}
writeHomePage();
const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach(elem => {elem.addEventListener("click", e => {
    navButtons.forEach(x => x.classList.remove("active"));
    if (elem.classList.contains("home")) {
        clear();
        writeHomePage();
        elem.classList.add("active");
    } else if (elem.classList.contains("about")) {
        clear();
        writeAboutPage();
        elem.classList.add("active");
    } else {
        clear();
        writeMenuPage();
        elem.classList.add("active");
    }
})});