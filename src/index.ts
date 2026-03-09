import "./styles.css";
import shrimpImg from "./img/shrimp.png";
import lobsterImg from "./img/lobster.png";
import crabImg from "./img/crab.png";

const homepage = document.getElementById("content");
type menuItem = {img: string, name: string, price: number}

function writeHomepage() {
    const title = document.createElement("h1");
    title.textContent = "HELO";
    title.classList.add("title");

    const description = document.createElement("p");
    description.textContent = "Yummy yummy shrimp, crab, lobster, shark, whale, beluga, lanternfish, squid, octopus, jellyfish"
    description.classList.add("description");

    const highlights = document.createElement("div");
    highlights.classList.add("highlights");
    const highlightItems: menuItem[] = [
        {img: shrimpImg, name: "Infinite shrimp", price: 99.9},
        {img: lobsterImg, name: "Juicy lobster", price: 199.9},
        {img: crabImg, name: "JUMBO crabs", price: 999.9}
    ]
    for (let item of highlightItems) {
        const itemElem = document.createElement("div");
        itemElem.classList.add("highlight-item");
        const name = document.createElement("h3");
        name.textContent = item.name;
        const img = document.createElement("img");
        img.src = item.img;
        img.width = 200;
        const price = document.createElement("p");
        price.textContent = "$" + item.price;
        itemElem.append(name, img, price);
        highlights.append(itemElem);
    }
    const hours = document.createElement("div");
    hours.classList.add("hours");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sturday", "Sunday"]
    const times = ["9:00am - 9:00pm","9:00am - 9:00pm","10:00am - 7:00pm","9:00am - 9:00pm","9:00am - 12:00am","11:00am - 5:00pm","Closed"]
    for (let i = 0; i < 7; i++) {
        const time = document.createElement("p");
        time.classList.add("time");
        time.textContent = days[i] + ": " + times[i];
        hours.append(time);
    }
    homepage?.append(title,description,highlights,hours);
}

writeHomepage();