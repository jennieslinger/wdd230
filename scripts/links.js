const baseURL = "https://jennieslinger.github.io/wdd230";

const linksURL = "https://jennieslinger.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data.lessons);
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    data.forEach(week => {
        let article = document.createElement("article");

    });
}