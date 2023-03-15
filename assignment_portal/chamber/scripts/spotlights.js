const directoryUrl = 'json_content/directory.json';

const displayBusinesses = (businesses) => {
    const silverAndGoldBusinesses = businesses.filter((business) => {
      return business.membership === "silver" || business.membership === "gold";
    });
  
    const numBusinessesToDisplay = Math.min(silverAndGoldBusinesses.length, 3);
    const randomBusinesses = [];
  
    while (randomBusinesses.length < numBusinessesToDisplay) {
      const randomIndex = Math.floor(Math.random() * silverAndGoldBusinesses.length);
      const randomBusiness = silverAndGoldBusinesses[randomIndex];
  
      if (!randomBusinesses.includes(randomBusiness)) {
        randomBusinesses.push(randomBusiness);
      }
    }

    randomBusinesses.forEach((business, index) => {
      const subTab = document.querySelector(`#sub-tab${index + 1}`);
      const h2 = subTab.querySelector('.company');
      const p2 = subTab.querySelector('p.phone-number');
      const link = subTab.querySelector('a.website');
      const image = subTab.querySelector('.tab-img');
  
      h2.textContent = business.name;
      p2.textContent = business.phone;
      link.textContent = business.link;
      link.setAttribute("href", business.link);
      image.setAttribute("src", business.imagesrc);
      image.setAttribute("alt", `${business.name} logo`);
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", "400");
      image.setAttribute("height", "400");
    });
  };

async function getBusinesses() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayBusinesses(data.businesses);
};

getBusinesses();