import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkLink = document.getElementById("park-link");

if (parkLink) {
    parkLink.textContent = parkData.fullName;
    parkLink.href = parkData.url;
}

const parkTitle = document.getElementById("park-title");

if (parkTitle) {
    parkTitle.textContent = parkData.name;
    parkTitle.href = parkData.url
}

const heroImage = document.getElementById("hero-image");

if (heroImage) {
    heroImage.src = parkData.images[0].url;
    heroImage.alt = parkData.images[0].altText;
}

const parkDesignation = document.getElementById("park-designation");

if (parkDesignation) {
    parkDesignation.textContent = parkData.designation;
}

const parkStates = document.getElementById("park-states");

if (parkStates.textContent = parkData.states);