import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate} from "./templates.mjs";

document.addEventListener("DOMContentLoaded", function() {
    const parkData = getParkData();
    
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
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