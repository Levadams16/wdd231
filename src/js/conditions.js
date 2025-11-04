import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate, visitorTemplate, activityTemplate } from "./templates.mjs";

// import "../css/style.css";
// import "../css/partials/conditions.css";

function setAlerts(data) {
    const alertsEl = document.querySelector(".alert-list");
    if (!data || data.length === 0) {
        alertsEl.innerHTML = "<p>No current alerts.</p>";
        return;
    }
    if (alertsEl) {
        const html = data.map(alertTemplate).join("");
        alertsEl.innerHTML = `<ul>${html}</ul>`;
    }
}

async function setVisitorCenters(parkCode) {
    const visitorCenters = await getVisitorCenterData(parkCode);

    const listElement = document.querySelector(".visitor_services ul");
    listElement.innerHTML = visitorCenters.map(visitorTemplate).join("");
}

function setActivities(parkData) {
    const activitiesEl = document.querySelector(".activities ul");
    const activities = parkData.activities;
    if (!activities || activities.length === 0) {
        activitiesEl.innerHTML = "<li>No activities listed.</li>";
        return;
    }

    const html = activities.map(activityTemplate).join("");
    activitiesEl.innerHTML = html;
}

function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const globalNav = document.querySelector(".global-nav");
    
    if (!menuButton) {
        console.error('Menu button not found');
        return;
    }
    
    if (!globalNav) {
        console.error('Global navigation not found');
        return;
    }
    
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;
        
        globalNav.classList.toggle("show");
        
        if (target.tagName !== "BUTTON") {
            target = target.closest("button");
        }
        
        if (globalNav.classList.contains("show")) {
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
    const parkData = await getParkData();
    const alertData = await getParkAlerts();
    
    setHeaderFooter(parkData);
    setAlerts(alertData);
    setVisitorCenters("asis");
    setActivities(parkData);
    enableNavigation();
}

init();