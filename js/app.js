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

class Shop {
  constructor(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.dailyTotal = 0;
    this.generateHourlySales();

  }

  generateHourlySales() {
    for (let i = 6; i < 20; i++) {
      let customers = randomNumbers(this.minCustomers, this.maxCustomers);
      let cookies = Math.round(customers * this.avgCookies);
      this.hourlySales.push(cookies);
      this.dailyTotal += cookies;
    }
  }

  render(table) {
    let dataRow = document.createElement("tr");
    let locationCell = document.createElement("td");
    locationCell.textContent = this.location;
    dataRow.appendChild(locationCell);
    for (let i = 0; i < this.hourlySales.length; i++) {
      let cookiesCell = document.createElement("td");
      cookiesCell.textContent = this.hourlySales[i];
      dataRow.appendChild(cookiesCell);
    }

    let dailyTotalCell = document.createElement("td");
    dailyTotalCell.textContent = this.dailyTotal;
    dataRow.appendChild(dailyTotalCell);

    table.appendChild(dataRow);
  }
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

let table = document.createElement("table");
let headerRow = document.createElement("tr");
let locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(locationHeader);
// stackoverflow time format 24 hours to 12 : https://stackoverflow.com/questions/4898574/converting-24-hour-time-to-12-hour-time-w-am-pm-using-javascript
for (let i = 6; i < 20; i++) {
  let hourHeader = document.createElement("th");
  if (i <= 12) {
    hourHeader.textContent = i + ":00am";
  } else {
    hourHeader.textContent = i - 12 + ":00pm";
  }
  headerRow.appendChild(hourHeader);
}

let dailyTotalHeader = document.createElement("th");
dailyTotalHeader.textContent = "Daily Location Total";
headerRow.appendChild(dailyTotalHeader);
table.appendChild(headerRow);


let shopOne = new Shop("Seattle", 2, 8, 10);
let shopTwo = new Shop("Tokyo", 3, 10, 15);
let shopThree = new Shop("Dubai", 1, 4, 20);
let shopFour = new Shop("Paris", 5, 7, 25);
let shopFive = new Shop("Lima", 1, 5, 50);


let shopFive = {
  location: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlySales: [],
};

shopOne.render(table);
shopTwo.render(table);
shopThree.render(table);
shopFour.render(table);
shopFive.render(table);


document.body.appendChild(table);
