// JSON Fruit info

let submissionCount = Number(localStorage.getItem('drinkCount')) || 0;

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
    } else {
        throw Error(await response.text());
    };
  } catch (error) {
      console.log(`Error: ${error}`);
  };
};
  
apiFetch();

async function outputForm() {
    const outputDiv = document.querySelector('.output');
    const fName = document.getElementsByName('fname')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementsByName('instructions')[0].value;

    const response = await fetch(fruitURL);
    if (!response.ok) {
        throw Error(await response.text());
    }
    let data = await response.json();

    const fruits = [fruit1, fruit2, fruit3];
    let totalCarbs = 0;
    let totalProtein =  0;
    let totalFat = 0;
    let totalCalories = 0;
    let totalSugar = 0;
    fruits.forEach(fruit => {
        const fruitInfo = data.find(f => f.name === fruit);
        totalCarbs += fruitInfo.nutritions.carbohydrates;
        totalProtein += fruitInfo.nutritions.protein;
        totalFat += fruitInfo.nutritions.fat;
        totalCalories += fruitInfo.nutritions.calories;
        totalSugar += fruitInfo.nutritions.sugar;
    });

    outputDiv.innerHTML = `
    <h2>Your Order</h2>
    <p>Order Date: ${new Date()}</p>
    <p>Full name: ${fName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Fruit 1: ${fruit1}</p>
    <p>Fruit 2: ${fruit2}</p>
    <p>Fruit 3: ${fruit3}</p>
    <p>Special Instructions: ${instructions}</p>
    <h3>Nutrition Info</h3>
    <ul>
    <li>Carbs: ${totalCarbs}g</li>
    <li>Protein: ${totalProtein}g</li>
    <li>Fat: ${totalFat}g</li>
    <li>Calories: ${totalCalories}kcal</li>
    <li>Sugar: ${totalSugar}kcal</li>
    </ul>
    `;

    submissionCount = submissionCount + 1;
    localStorage.setItem('drinkCount', submissionCount);

    return false;

};