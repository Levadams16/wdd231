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

export function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
  <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  if (!data.images || data.images.length === 0) {
    return `<p>${data.description || "No description available"}</p>`;
  }

  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}

function vcAddressTemplate(data) {
  if (!data || data.length === 0) {
    return "<p>No address available.</p>";
  }

  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" /></li>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function vcDirectionsTemplate(data) {
  if (!data || data.trim() === "") {
    return "<p>No directions available.</p>";
  }
  
  return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
  let html = '';
  
  // Check if email addresses exist
  if (data.emailAddresses && data.emailAddresses.length > 0) {
    html += `<section class="vc-contact__email">
              <h3>Email Address</h3>
              <a href="mailto:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
            </section>`;
  }
  
  // Check if phone numbers exist
  if (data.phoneNumbers && data.phoneNumbers.length > 0) {
    const rawPhone = data.phoneNumbers[0].phoneNumber;
    // Format phone number as (XXX) XXX-XXXX
    const formattedPhone = `(${rawPhone.slice(0, 3)}) ${rawPhone.slice(3, 6)}-${rawPhone.slice(6)}`;
    
    html += `<section class="vc-contact__phone">
              <h3>Phone Number</h3>
              <a href="tel:+1${rawPhone}">${formattedPhone}</a>
            </section>`;
  }
  
  // If no contact info exists, show a message
  if (!html) {
    html = '<p>No contact information available.</p>';
  }
  
  return html;
}

export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
    <use
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xlink:href="/images/sprite.symbol.svg#${iconId}"
    ></use>
    </svg>`;
}

export function vcDetailsTemplate(summaryText, iconId, content) {
    return `<summary>
    ${iconTemplate(iconId)}
    ${summaryText}
    </summary>
    ${content}`;
}