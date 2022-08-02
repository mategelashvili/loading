let loader = document.querySelector(".loader");

let counter = 0;
let roate = setInterval(() => {
  loader.style.transform = `rotate(${counter}deg)`;
  counter += 10;
  if (counter == 500) {
    loader.style.display = "none";
    clearInterval(roate);
  }
}, 100);

let cards = document.querySelector(".cards");

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Alex", email: "alex@example.com" },
  { name: "Lily", email: "lily@example.com" },
];
let displayusers = setTimeout(() => {
  let usersmap = users.map((i) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardp = document.createElement("P");
    let cardp1 = document.createElement("P");
    card.appendChild(cardp);
    card.appendChild(cardp1);
    cards.appendChild(card);
    cardp.innerHTML = i.name;
    cardp1.innerHTML = i.email;
  });
}, 5000);
