const xlsx = require('xlsx');

//Here we call the file
const wb = xlsx.readFile("ventas.xls");


//Here we call the first sheet (we ain't sure about first sheet's name)
const firstSheetName = wb.SheetNames[0];
const ws = wb.Sheets[firstSheetName];

//Alternative way of calling the sheet by name instead
//const ws = wb.Sheets["ventas"];

//this xlsx.utils.sheet_to_json will ransform each row into a JSON object
const sales = xlsx.utils.sheet_to_json(ws);

//Here we add a dummy date
const saleDate = "octubre";

//We add the date to each row
for(const sale of sales) {
    Object.assign(sale, {date: saleDate});
}

//testing
console.log(sales[1]);


//example of manipulating data from our new JSON objects
let total = 0;
for(const sale of sales) {
    total += sale.total;
};

console.log(`Total sale for ${saleDate} is ${total} USD`);