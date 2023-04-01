let last_modif = new Date(document.lastModified);

const modif_date = `Last Modified: ${last_modif}`;
document.querySelector("#last-modified").textContent = modif_date;

document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

// Submitted drink form counter.

const forms = document.querySelectorAll('.drink-form');
const counts = document.querySelectorAll('.drink-count');

forms.forEach((form, index) => {
  let submissionCount = 0;

  form.addEventListener('submit', function(event) {
    submissionCount++;
    counts[index].innerText = submissionCount;
    });
});

// JSON Fruit info

const fruitURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function apiFetch() {
    try {
      const response = await fetch(fruitURL);
      if (response.ok) {
        const data = await response.json();
        const fruitOptions = data.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
        document.getElementById("fruit1").innerHTML = `<option value="">Choose a fruit option</option>${fruitOptions.join('')}`;
        document.getElementById("fruit2").innerHTML = `<option value="">Choose a fruit option</option>${fruitOptions.join('')}`;
        document.getElementById("fruit3").innerHTML = `<option value="">Choose a fruit option</option>${fruitOptions.join('')}`;
        outputForm(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(`Error:${error}`);
    }
  }
  
  apiFetch();

function outputForm() {
    const fName = document.getElementsByName('fname')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementsByName('instructions').value;
    const formData = {
        fName: fName,
        email: email,
        phone: phone,
        fruit1: fruit1,
        fruit2: fruit2,
        fruit3: fruit3,
        instructions: instructions
    };
    return formData;
}