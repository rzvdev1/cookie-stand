function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function render(shop) {
  let table = document.createElement("table");

  let headerRow = document.createElement("tr");
  let locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  let minCustomersHeader = document.createElement("th");
  minCustomersHeader.textContent = "Min / Cust";
  let maxCustomersHeader = document.createElement("th");
  maxCustomersHeader.textContent = "Max / Cust";
  let avgCookiesHeader = document.createElement("th");
  avgCookiesHeader.textContent = "Avg Cookie / Sale";
  headerRow.appendChild(locationHeader);
  headerRow.appendChild(minCustomersHeader);
  headerRow.appendChild(maxCustomersHeader);
  headerRow.appendChild(avgCookiesHeader);
  table.appendChild(headerRow);

  let dataRow = document.createElement("tr");
  let locationCell = document.createElement("td");
  locationCell.textContent = shop.location;
  let minCustomersCell = document.createElement("td");
  minCustomersCell.textContent = shop.minCustomers;
  let maxCustomersCell = document.createElement("td");
  maxCustomersCell.textContent = shop.maxCustomers;
  let avgCookiesCell = document.createElement("td");
  avgCookiesCell.textContent = shop.avgCookies;
  dataRow.appendChild(locationCell);
  dataRow.appendChild(minCustomersCell);
  dataRow.appendChild(maxCustomersCell);
  dataRow.appendChild(avgCookiesCell);
  table.appendChild(dataRow);

  document.body.appendChild(table);
}

function renderArray(shop) {
  let hourlySalesList = document.createElement("ul");

  for (let i = 6; i < 19; i++) {
    let customers = randomNumbers(shop.minCustomers, shop.maxCustomers);
    let cookies = Math.round(customers * shop.avgCookies);
    shop.hourlySales.push(cookies);

    let listItem = document.createElement("li");
    listItem.textContent = `${i}:00 - ${cookies} cookies sold`;
    hourlySalesList.appendChild(listItem);
  }

  let sum = 0;
  for (let i = 0; i < shop.hourlySales.length; i++) {
    sum += shop.hourlySales[i];
  }

  let totalListItem = document.createElement("li");
  totalListItem.textContent = "Total cookies sold: " + sum;
  hourlySalesList.appendChild(totalListItem);

  document.body.appendChild(hourlySalesList);
}

let shopOne = {
  location: "Seattle",
  minCustomers: randomNumbers(20, 55),
  maxCustomers: randomNumbers(30, 55),
  avgCookies: randomNumbers(10, 55),
  hourlySales: [],
};

render(shopOne);
renderArray(shopOne);

let shopTwo = {
  location: "Tokyo",
  minCustomers: randomNumbers(30, 45),
  maxCustomers: randomNumbers(12, 25),
  avgCookies: randomNumbers(10, 20),
  hourlySales: [],
};

render(shopTwo);
renderArray(shopTwo);

let shopThree = {
  location: "Dubai",
  minCustomers: randomNumbers(1, 25),
  maxCustomers: randomNumbers(15, 25),
  avgCookies: randomNumbers(10, 35),
  hourlySales: [],
};

render(shopThree);
renderArray(shopThree);

let shopFour = {
  location: "Paris",
  minCustomers: randomNumbers(5, 15),
  maxCustomers: randomNumbers(30, 35),
  avgCookies: randomNumbers(10, 30),
  hourlySales: [],
};

render(shopFour);
renderArray(shopFour);

let shopFive = {
  location: "Lima",
  minCustomers: randomNumbers(1, 25),
  maxCustomers: randomNumbers(60, 65),
  avgCookies: randomNumbers(45, 55),
  hourlySales: [],
};

render(shopFive);
renderArray(shopFive);
