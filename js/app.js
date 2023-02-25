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

    if (i <= 12) {
      let listItem = document.createElement("li");
      listItem.textContent = `${i}:00am - ${cookies} cookies sold`;
      hourlySalesList.appendChild(listItem);
    } else {
      let listItem = document.createElement("li");
      listItem.textContent = `${i}:00pm - ${cookies} cookies sold`;
      hourlySalesList.appendChild(listItem);
    }
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
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlySales: [],
};

render(shopOne);
renderArray(shopOne);

let shopTwo = {
  location: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlySales: [],
};

render(shopTwo);
renderArray(shopTwo);

let shopThree = {
  location: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlySales: [],
};

render(shopThree);
renderArray(shopThree);

let shopFour = {
  location: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlySales: [],
};

render(shopFour);
renderArray(shopFour);

let shopFive = {
  location: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlySales: [],
};

render(shopFive);
renderArray(shopFive);
