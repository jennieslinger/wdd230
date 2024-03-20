const baseURL = "https://jennieslinger.github.io/wdd230";

const membersURL = "https://jennieslinger.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector(".members");
console.log(cards)

function displayMembers(data) {

    const members = data.members.member;

    members.forEach(member => {

        let section = document.createElement("section");

        let name = document.createElement("h2");
        name.textContent = member.name;

        let membershipLevel = document.createElement("p");
        membershipLevel.textContent = member.membershipLevel;

        let image = document.createElement("img");
        image.setAttribute("src", member.image);
        image.setAttribute("alt", name.textContent);
        image.setAttribute("loading", "lazy");
        //image.setAttribute("width", 200);
        //image.setAttribute("height", 325);

        let additionalInfo = document.createElement("p");
        additionalInfo.textContent = member.additionalInfo;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phoneNumber;

        let emailAddress = document.createElement("p");
        emailAddress.textContent = member.emailAddress;

        section.appendChild(name);
        section.appendChild(membershipLevel);
        section.appendChild(image);
        section.appendChild(additionalInfo);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(emailAddress);

        cards.appendChild(section);
    });
};

getMemberData();

async function getMemberData() {

    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json()
        console.log(data);
        displayMembers(data);
    }
    catch (error) {
        console.error(error);
    }
}