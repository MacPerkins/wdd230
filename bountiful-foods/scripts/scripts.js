let last_modif = new Date(document.lastModified);

const modif_date = `Last Modified: ${last_modif}`;
document.querySelector("#last-modified").textContent = modif_date;

document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

var drinkCount = localStorage.getItem('drinkCount');
if (drinkCount) {
  document.querySelector('.drink-count').innerHTML = drinkCount;
}
