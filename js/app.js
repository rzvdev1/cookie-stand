function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

shopOne.render(table);
shopTwo.render(table);
shopThree.render(table);
shopFour.render(table);
shopFive.render(table);

document.body.appendChild(table);
