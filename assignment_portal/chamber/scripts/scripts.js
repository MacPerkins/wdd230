function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Select the elements to manipulate (output to)
const datefield = document.querySelector(".current-date");


// Derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

let last_modif = new Date(document.lastModified);

const modif_date = `Last Modified: ${last_modif}`;
document.querySelector("#last-modified").textContent = modif_date;

document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

// Gets the day of the week. If it is Monday or Tuesday, set the event tab to display as block. Otherwise, leave display as none.

const d = new Date();
let day = d.getDay();

if (day == 1 && day == 2) {
    document.querySelector(".tab2").style.display = "block";
}

// Gets the current date and time from a hidden field

const date = new Date();
const dateTime = now.toLocaleString();

let hiddenField = document.createElement("input");
hiddenField.setAttribute("type", "hidden");
hiddenField.setAttribute("id", "dateTime");
hiddenField.setAttribute("name", "dateTime");
hiddenField.setAttribute("value", dateTime);
document.body.appendChild(hiddenField);