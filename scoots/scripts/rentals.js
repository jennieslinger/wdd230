/*const cards = document.querySelector("#cards");

const displayRentals = (rentals) => {
    rentals.forEach(rental => {
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

getProphetData();*/

document.addEventListener("DOMContentLoaded", function () {

    // Declare and initialize global variables
    const url = "https://jennieslinger.github.io/WDD230/scoots/rentals/rentals.json";
    const rentalElement = document.querySelector("#results");
    console.log(rentalElement);
    let rentalList = [];

    const reset = () => {
        rentalElement.innerHTML = "";
    }

    const displayRentals = (rentals) => {
        rentals.forEach(rental => {
            let article = document.createElement("article");

            const typeElement = document.createElement("p");
            typeElement.textContent = `Type: ${rental.type}`;

            const makeElement = document.createElement("p");
            makeElement.textContent = `Make: ${rental.make}`;

            const modelElement = document.createElement("p");
            modelElement.textContent = `Model: ${rental.model}`;

            const personsElement = document.createElement("p");
            personsElement.textContent = `Persons: ${rental.persons}`;

            const addInfoElement = document.createElement("p");
            addInfoElement.textContent = `Additional Information: ${recall.addInfo}`;

            const imageElement = document.createElement("img");
            //IMAGE ELEMENT LINK GOES HERE!!!!!

            article.appendChild(typeElement);
            article.appendChild(makeElement);
            article.appendChild(modelElement);
            article.appendChild(personsElement);
            article.appendChild(addInfoElement);

            rentalElement.appendChild(article);
        });
    }

    const getRentals = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                rentalList = data.results;
                console.log("Rental data:", rentalList);
                displayRentals(rentalList);
            } else {
                console.error("Failed to fetch data. ");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    /* sortBy Function */
    const sortBy = (recalls) => {
        reset();
        const selectedSortOption = document.querySelector("#sortBy").value;
        switch (selectedSortOption) {
            case "type":
                rentals.sort((a, b) => {
                    return a.type.localeCompare(b.type);
                });
                break;
            case "make":
                rentals.sort((a, b) => {
                    return a.make.localeCompare(b.make);
                });
                break;
            case "model":
                rentals.sort((a, b) => {
                    return a.model.localeCompare(b.model);
                });
                break;
            case "persons":
                rentals.sort((a, b) => {
                    return a.persons.localeCompare(b.persons);
                });
                break;
                //case "availability":
                recalls.sort((a, b) => {
                    return a.product_type.localeCompare(b.product_type);
                });
            case "all":
                break;
        };
        displayRentals(rentals);
    };

    /* Event Listener */
    document.querySelector("#sortBy").addEventListener("change", () => {
        sortBy(rentalList)
    });

    getRentals();

});