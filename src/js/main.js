import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate} from "./templates.mjs";

// import "../css/style.css";
// import "../css/partials/home.css";

document.addEventListener("DOMContentLoaded", function() {

});

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    if (introEl) {
        introEl.innerHTML = `
            <h1>${data.fullName}</h1>
            <p>${data.description}</p>
        `;
    }
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    if (infoEl) {
        const html = data.map(mediaCardTemplate);
        infoEl.innerHTML = html.join("");
    }
}


function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    
    if (!menuButton) {
        console.error('Menu button not found');
        return;
    }
    
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        
        document.querySelector(".global-nav").classList.toggle("show");
        
        if (target.tagName !== "BUTTON") {
            target = target.closest("button");
        }
        
        if (document.querySelector(".global-nav").classList.contains("show")) {
            target.setAttribute("aria-expanded", "true");
            target.setAttribute("aria-label", "Close Menu");
        } else {
            target.setAttribute("aria-expanded", "false");
            target.setAttribute("aria-label", "Open Menu");
        }
        
        console.log("Menu toggled");
    });
}

async function init() {
    console.log('Working...');
    try {
        const parkData = await getParkData();
        const links = getInfoLinks(parkData.images);

        setHeaderFooter(parkData);
        setParkIntro(parkData);
        setParkInfoLinks(links);
        
        enableNavigation();
        
        console.log('Work complete');
    } catch (error) {
        console.error('Work error:', error);
    }
}

init();