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

async function init() {
    console.log('Working...');
    try {
        const parkData = await getParkData();
        const links = getInfoLinks(parkData.images);

        setHeaderFooter(parkData);
        setParkIntro(parkData);
        setParkInfoLinks(links);
        
        console.log('Work complete');
    } catch (error) {
        console.error('Work error:', error);
    }
}

init();