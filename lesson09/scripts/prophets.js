const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData(prophets);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const h2 = document.createElement('h2')
        const fullName = document.createElement('name' + 'lastname');
        const portrait = document.createElement('img');

        h2.textContent = '${prophet.name} ${prophet.lastname}';
        fullName.textContent = '${prophet.fullName}_____';
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrait of ${prophet.fullName}');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(h2);
        card.appendChild(fullName);
        card.appendChild(portrait);

        //cards.appendChild(card);
    });
}