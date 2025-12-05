import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { 
    vcTitleTemplate, 
    vcInfoTemplate, 
    vcAddressesListTemplate,
    vcDirectionsTemplate,
    vcAmenityTemplate,
    vcContactsTemplate,
    vcImageTemplate,
    listTemplate
} from "./templates.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

async function init() {
    try {
        const parkData = await getParkData();
        const id = getParam("id");
        
        console.log('ID from URL:', id); // Check if ID exists
        
        if (!id) {
            console.error('No visitor center ID found in URL');
            return;
        }
        
        const centerDetails = await getParkVisitorCenterDetails(id);
        
        console.log('Visitor Center Data:', centerDetails); // Check the data structure
        console.log('Contacts:', centerDetails.contacts); // Specifically check contacts
        
        setHeaderFooter(parkData);
        
        renderVisitorCenter(centerDetails);
    } catch (error) {
        console.error('Error loading visitor center:', error);
    }
}

function renderVisitorCenter(data) {
    console.log('Rendering visitor center with data:', data);
    
    document.querySelector('.vc-name').innerHTML = vcTitleTemplate(data.name);
    
    document.querySelector('.vc-info').innerHTML = vcInfoTemplate(data);

    const addressesHTML = vcAddressesListTemplate(data.addresses);
    document.querySelector('#vcAddresses summary').insertAdjacentHTML('afterend', addressesHTML);
    
    const directionsHTML = vcDirectionsTemplate(data.directionsInfo);
    document.querySelector('#vcDirections summary').insertAdjacentHTML('afterend', directionsHTML);
    
    const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
    document.querySelector('#vcAmenities summary').insertAdjacentHTML('afterend', amenitiesHTML);

    console.log('About to render contacts:', data.contacts);
    const contactHTML = vcContactsTemplate(data.contacts);
    console.log('Contact HTML:', contactHTML);
    document.querySelector('#vcContact summary').insertAdjacentHTML('afterend', contactHTML);
    
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
    document.querySelector('.vc-gallery ul').innerHTML = galleryHTML;
}

init();