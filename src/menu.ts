import shrimpImg from "./img/shrimp.png";
import lobsterImg from "./img/lobster.png";
import crabImg from "./img/crab.png";
import salmonImg from "./img/salmon.jpg";
import cheeseImg from "./img/cheese.jpg";
import baugetteImg from "./img/baugette.jpg";
import oysterImg from "./img/oyster.jpg";
import lemoncakeImg from "./img/lemoncake.jpg";
import tartImg from "./img/tart.jpg";
import sorbetImg from "./img/sorbet.jpg";
import iceteaImg from "./img/icetea.jpg";
import lemonadeImg from "./img/lemonade.jpg";

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

    const appetizerItems:menuItem[] = [
        {img: shrimpImg, name: "Infinite shrimp", price: 99.9},
        {img: cheeseImg, name: "Cheesy cheese", price: 3.91},
        {img: oysterImg, name: "Clammy oyster", price: 6.7},
        {img: baugetteImg, name: "Le baugette", price: 8.88},


    ];
    const entreeItems:menuItem[] = [
        
        {img: lobsterImg, name: "Juicy lobster", price: 199.9},
        {img: crabImg, name: "JUMBO crabs", price: 999.9},
        {img: salmonImg, name: "Buttery Salmon", price: 59.67}
    ];
    const dessertItems:menuItem[] = [
        {img: lemoncakeImg, name: "Soft lemon cake", price: 15.87},
        {img: tartImg, name: "Tarty fruit tart", price: 9.12},
        {img: sorbetImg, name: "Creamy cherry sorbet", price: 12.22}
        
    ];
    const drinkItems:menuItem[] = [
        {img: iceteaImg, name: "Sweet ice tea", price: 5.98},
        {img: lemonadeImg, name: "Classic lemonade", price: 3.33},

    ];

    const appetizers = createMenuSubsection("Appetizers", appetizerItems);
    const entrees = createMenuSubsection("Entrees", entreeItems);
    const desserts = createMenuSubsection("Desserts", dessertItems);
    const drinks = createMenuSubsection("Drinks", drinkItems);
    
    menuDisplay.append(appetizers, entrees, desserts, drinks);
    homepage?.append(menuTitle, menuDisplay);
}

export default writeMenuPage;