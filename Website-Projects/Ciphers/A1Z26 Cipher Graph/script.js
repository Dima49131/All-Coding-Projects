var data = [];
var dataLength = 100;
var e = 0;

// headers
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const headers = alphabet.split("");

// all data underneath
var mainData = [];

for (var i = 1; i <= alphabet.length*dataLength;i++){
    mainData.push(i);e++;
    if (e >= 26){e = 0;data.push(mainData);mainData = [];}
}

const table = document.getElementById("myTable");
const tbody = table.getElementsByTagName("tbody")[0];
const headerRow = table.getElementsByTagName("tr")[0];
    
    headers.forEach(function(headerText) {
      const header = document.createElement("th");
      const headerTextEl = document.createTextNode(headerText);
      header.appendChild(headerTextEl);
      headerRow.appendChild(header);
});
    
    data.forEach(function(obj) {
      const row = document.createElement("tr");
    for (const prop in obj) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(obj[prop]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    });
