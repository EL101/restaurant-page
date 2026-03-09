import { write } from "node:fs";
import "./styles.css";

const homepage = document.getElementById("content");

function writeHomepage() {
    const title = document.createElement("h1");
    title.textContent = "HELO";
    homepage.append(title);
}

writeHomepage();