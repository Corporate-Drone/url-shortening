const statisticsDiv = document.querySelector('.statistics');
const loadingAnimation = document.querySelector('.lds-dual-ring');

async function getIP(link) {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, { mode: 'cors' });
        const respData = await response.json();
        createShortLink(respData);

    } catch (error) {
        console.log(error);
    }
}

function createShortLink(respData) {
    let shortenLinksDiv = document.createElement('div');
    shortenLinksDiv.setAttribute('class', 'shorten-links');
    statisticsDiv.prepend(shortenLinksDiv);

    let linkDiv = document.createElement('div');
    linkDiv.setAttribute('class', 'link');
    shortenLinksDiv.appendChild(linkDiv);

    let enteredLink = document.createElement('span');
    enteredLink.setAttribute('class', 'original-link');
    enteredLink.innerText = respData.result.original_link;
    linkDiv.appendChild(enteredLink);

    let newLinkDiv = document.createElement('div');
    newLinkDiv.setAttribute('class', 'new-link');
    linkDiv.appendChild(newLinkDiv);

    let shortLink = document.createElement('textarea');
    shortLink.setAttribute('class', 'short-link-text');
    shortLink.value = respData.result.short_link;
    shortLink.disabled = true;
    newLinkDiv.appendChild(shortLink);

    let copyBtn = document.createElement('button');
    copyBtn.setAttribute('class', 'copy-btn');
    copyBtn.innerText = "Copy";
    newLinkDiv.appendChild(copyBtn);

    copyBtn.addEventListener('click', () => {
        shortLink.disabled = false;
        shortLink.focus();
        shortLink.select();
        document.execCommand('copy');
        copyBtn.innerText = "Copied!";
        copyBtn.style.backgroundColor = "hsl(257, 27%, 26%)";
        shortLink.disabled = true;
    })

    loadingAnimation.style.visibility = "hidden";
}

export default getIP;