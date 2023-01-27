function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".current-date");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

let last_modif = new Date(document.lastModified);

const modif_date = `Last Modified: ${last_modif}`;
document.querySelector("#last-modified").textContent = modif_date;

document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;
