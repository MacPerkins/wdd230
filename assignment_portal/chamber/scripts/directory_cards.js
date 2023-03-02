const directoryUrl = 'json_content/directory.json';

const displayBusinesses = (businesses) => {
    const grid = document.querySelector('div.grid'); // select the output container element

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let div = document.createElement('div');
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
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(link);
        card.appendChild(div);

        grid.appendChild(card);
    });
};

async function getBusinesses() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayBusinesses(data.businesses);
};

getBusinesses();

const gridbutton = document.querySelector(".grid-view");
const listbutton = document.querySelector(".list-view");
const display = document.querySelector("div.grid");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}