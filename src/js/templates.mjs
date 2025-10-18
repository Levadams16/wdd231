import spritePath from "../images/sprite.symbol.svg";

export function mediaCardTemplate(info) {
    return `
        <article class="media-card">
            <img src="${info.image}" alt="${info.name}" class="media-card__image">
            <div class="media-card__content">
                <h3 class="media-card__title">
                    <a href="${info.link}">${info.name}</a>
                </h3>
                <p class="media-card__description">${info.description}</p>
            </div>
        </article>
    `;
}

export function parkInfoTemplate(data) {
    return `
        <section class="park-info">
            <h2>About ${data.name}</h2>
            <p>${data.description}</p>
        </section>
    `;
}

export function footerTemplate(data) {
    return `
        <div class="footer-content">
            <div class="footer-info">
                <h3>CONTACT INFO</h3>
                <div class="footer-address">
                    <h4>Mailing Address:</h4>
                    <address>
                        <div class="po-box">${data.addresses[1].line1}</div>
                        ${data.addresses[1].city}, ${data.addresses[1].stateCode} ${data.addresses[1].postalCode}
                    </address>
                </div>
                <h4>Phone Number:</h4>
                <p class="contact-info">
                    ${data.contacts.phoneNumbers[0].phoneNumber}
                </p>
            </div>
        </div>
    `;
}

export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
        alertType = "closure";
        break;
        default:
        alertType = alert.category.toLowerCase();
    }
    return `<div class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${alertType}"></use>  
    </svg>
    <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
    </div></div>`;
}

export function visitorTemplate(visitor) {
    return `<li class="visitor">
        <h3>${visitor.name}</h3>
        <p>${visitor.description}</p>
        <p>${visitor.directionsInfo}</p>
    </li>`;
}

export function activityTemplate(activity) {
    return `<li>${activity.name}</li>`;
}