const url = "https://jennieslinger.github.io/wdd230/scoots/data/rentals.json"


const displayRentals = (rentals) => {
    const rentalElement = document.querySelector("#results");
    rentalElement.innerHTML = "";

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
        addInfoElement.textContent = `Additional Information: ${recall.addditionalInformation}`;

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
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const rentalList = data.rentals;
        if (!rentalList || !Array.isArray(rentals)) {
            throw new Error('Data format error: "rentals" key not found or not an array');
        }
        displayRentals(rentalList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getRentals();