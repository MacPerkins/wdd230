const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let portrait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Birthdate: ${prophet.birthdate}
        Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

async function getProhetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProhetData();