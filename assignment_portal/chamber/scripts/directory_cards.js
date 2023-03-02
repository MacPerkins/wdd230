const directoryUrl = 'json_content/directory.json';

const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let p1 = document.createElement('p1');
        let p2 = document.createElement('p2');
        let p3 = document.createElement('p3');
        let link = document.createElement('a');
        let portrait = document.createElement('img');

        p1.textContent = `${business.name}`;
        p2.textContent = `${business.address}`;
        p3.textContent = `${business.phone}`;
        p2.textContent = `${business.address}`;
        link.textContent = `${business.link}`;

        portrait.setAttribute('src', business.imagesrc);
        portrait.setAttribute('alt', `${business.name} logo`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '400');
        portrait.setAttribute('height', '400');

        link.setAttribute('href', business.link);

        card.appendChild(portrait);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(link);

        cards.appendChild(card);
    });
};

async function getBusinesses() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayBusinesses(data.businesses);
};

getBusinesses();