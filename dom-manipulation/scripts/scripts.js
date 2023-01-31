const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    ul.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    input.focus();
});