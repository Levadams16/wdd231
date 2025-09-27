import {footerTemplate} from "./templates.mjs";

function setHeaderInfo(data) {
    const parkLink = document.getElementById("park-link");

    if (parkLink) {
        parkLink.textContent = data.fullName;
        parkLink.href = data.url;
    }

    const parkTitle = document.getElementById("park-title");

    if (parkTitle) {
        parkTitle.textContent = data.name;
        parkTitle.href = data.url
    }

    const heroImage = document.getElementById("hero-image");

    if (heroImage) {
        heroImage.src = data.images[0].url;
        heroImage.alt = data.images[0].altText;
    }

    const parkDesignation = document.getElementById("park-designation");

    if (parkDesignation) {
        parkDesignation.textContent = data.designation;
    }

    const parkStates = document.getElementById("park-states");

    if (parkStates) {
        parkStates.textContent = data.states;
    }

}

function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    if (footerEl) {
        footerEl.innerHTML = footerTemplate(data);
    }
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}