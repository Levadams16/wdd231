import { getParkData, parkInfoLinks, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate} from "./templates.mjs";

import "../css/style.css";
import "../css/partials/home.css";

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


async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
}

init();