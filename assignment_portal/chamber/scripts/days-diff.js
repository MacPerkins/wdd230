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