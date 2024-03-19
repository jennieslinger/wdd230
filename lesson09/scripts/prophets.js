const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let section = document.createElement("section");

        let fullName = document.createElement("h2");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        let birthdate = document.createElement("p");
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

        let birthplace = document.createElement('p');
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        let portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", fullName);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", 200);
        portrait.setAttribute("height", 325);

        section.appendChild(fullName);
        section.appendChild(birthdate);
        section.appendChild(birthplace);
        section.appendChild(portrait);


        cardsElement.appendChild(section)
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();