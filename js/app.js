function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class CookieShop {
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

let shopOne = new CookieShop("Seattle", 20, 55, 10);
let shopTwo = new CookieShop("Tokyo", 30, 45, 15);
let shopThree = new CookieShop("Dubai", 1, 25, 20);
let shopFour = new CookieShop("Paris", 5, 15, 25);
let shopFive = new CookieShop("Lima", 1, 25, 50);

let shops = [shopOne, shopTwo, shopThree, shopFour, shopFive];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let shop of shops) {
  shop.render(table);
}

let totalRow = document.createElement("tr");
let totalHeader = document.createElement("th");
totalHeader.textContent = "Total";
totalRow.appendChild(totalHeader);

let hourlyTotal = 0;
let grandTotal = 0;

for (let i = 0; i < 14; i++) {
  for (let shop of shops) {
    hourlyTotal += shop.hourlySales[i];
  }
  grandTotal += hourlyTotal;
  let totalCell = document.createElement("td");
  totalCell.textContent = hourlyTotal;
  totalRow.appendChild(totalCell);
  hourlyTotal = 0;
}

let totalCell = document.createElement("td");
totalCell.textContent = grandTotal;
totalRow.appendChild(totalCell);

table.appendChild(totalRow);

document.body.appendChild(table);

let myForm = document.getElementById("my-form");

function handleSubmit(event) {
  event.preventDefault();
  alert("This form has been successfully submitted!");
}

myForm.addEventListener("submit", handleSubmit);
