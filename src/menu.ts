import shrimpImg from "./img/shrimp.png";
import lobsterImg from "./img/lobster.png";
import crabImg from "./img/crab.png";

const homepage = document.getElementById("content");

type menuItem = {img: string, name: string, price: number}

function createMenuSubsection(title: string, items: menuItem[]) {
    const section = document.createElement("div");
    section.classList.add("menu-subsection");
    const sectionHeader = document.createElement("div");
    sectionHeader.textContent = title;
    sectionHeader.classList.add("menu-subsection-header");

    const sectionList = document.createElement("div");
    sectionList.classList.add("menu-subsection-list");
    for (let item of items) {
        const menuEntry = document.createElement("div");
        menuEntry.classList.add("menu-entry");
        const img = document.createElement("img");
        img.src = item.img;
        const name = document.createElement("h4");
        name.textContent = item.name;
        const price = document.createElement("p");
        price.textContent = "$" + item.price;
        menuEntry.append(img, name, price);
        sectionList.append(menuEntry);
    }
    section.append(sectionHeader, sectionList);
    return section;
}

function writeMenuPage() {
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("section-title");
    menuTitle.textContent = "Menu";

    const menuDisplay = document.createElement("div");
    menuDisplay.classList.add("menu-display");

    const appetizerItems:menuItem[] = [];
    const entreeItems:menuItem[] = [
        {img: shrimpImg, name: "Infinite shrimp", price: 99.9},
        {img: lobsterImg, name: "Juicy lobster", price: 199.9},
        {img: crabImg, name: "JUMBO crabs", price: 999.9}
    ];
    const dessertItems:menuItem[] = [];
    const drinkItems:menuItem[] = [];

    const appetizers = createMenuSubsection("Appetizers", appetizerItems);
    const entrees = createMenuSubsection("Entrees", entreeItems);
    const desserts = createMenuSubsection("Desserts", dessertItems);
    const drinks = createMenuSubsection("Drinks", drinkItems);
    
    menuDisplay.append(appetizers, entrees, desserts, drinks);
    homepage?.append(menuTitle, menuDisplay);
}

export default writeMenuPage;