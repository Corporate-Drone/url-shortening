import getIP from './modules/shrtco.js';

const shortenBtn = document.querySelector('#shortn-btn');
const redNotice = document.querySelector('.red-notice');
const linkInput = document.querySelector('#link-input');
const loadingAnimation = document.querySelector('.lds-dual-ring');

//On start
function init() {
    redNotice.style.visibility = "hidden";
    loadingAnimation.style.visibility = "hidden";
}

init();

shortenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regex = /([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/;

    //Check if input is a valid URL
    if (!regex.test(linkInput.value)) {
        redNotice.style.visibility = "visible";
        linkInput.style.borderColor = "red";
    } else {
        redNotice.style.visibility = "hidden";
        linkInput.style.removeProperty('border');
        getIP(linkInput.value);
        loadingAnimation.style.visibility = "visible";
        linkInput.value = "";
    }
})