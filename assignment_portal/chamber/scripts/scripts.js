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

// Gets the day of the week. If it is Monday or Tuesday, set the event tab to display as block. Otherwise, leave display as none.

const d = new Date();
let day = d.getDay();

if (day == 1 && day == 2) {
    document.querySelector(".tab2").style.display = "block";
}

// Gets the last time site was visited, calculates difference between last visit date and current date.

const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit !== null) {
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - new Date(lastVisit).getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const lastVisitSpan = document.querySelector('#last-visit');
  lastVisitSpan.innerHTML = diffDays;
}

const currentDateString = new Date().toString();
localStorage.setItem('lastVisit', currentDateString);