const xlsx = require('xlsx');

//Here we call the file
const wb = xlsx.readFile("ventas.xls");


//Here we call the first sheet (we ain't sure about first sheet's name)
const firstSheetName = wb.SheetNames[0];
const ws = wb.Sheets[firstSheetName];

//Alternative way of calling the sheet by name instead
//const ws = wb.Sheets["ventas"];

//this xlsx.utils.sheet_to_json will ransform each row into a JSON object
const ventas = xlsx.utils.sheet_to_json(ws);

//Here we add a dummy date
const date = "octubre";

//We add the date to each row
for(const venta of ventas) {
    Object.assign(venta, {fecha: date});
}

console.log(ventas[1]);

let total = 0;
for(const venta of ventas) {
    total += venta.total;
};

console.log(total);