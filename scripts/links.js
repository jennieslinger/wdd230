const baseURL = "https://jennieslinger.github.io/wdd230";

const linksURL = "https://jennieslinger.github.io/wdd230/data/links.json";


const cards = document.querySelector('.links');
// const ccc = document.querySelector('.card');
// console.log(ccc);
console.log(cards);

function displayLinks(weeks) {
    weeks.forEach(week => {
        let article = document.createElement("article");

        let weekEl = document.createElement('h5');
        weekEl.textContent = `${week.lesson}: `

        console.log(week.links)

        week.links.forEach(link => {
            let linkEl = document.createElement('a');
            linkEl.innerHTML = `${link.title} | `;
            linkEl.href = link.url;
            weekEl.appendChild(linkEl);


            // url.textContent = `${link.url}`;
            // title.textContent = `${link.title}`;
        });

        article.appendChild(weekEl);
        // article.appendChild(link);

        cards.appendChild(article)

    });
}

getLinks();

async function getLinks() {

    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        console.log(data);
        displayLinks(data.lessons);
    }
    catch (error) {
        console.error(error);
    }
}