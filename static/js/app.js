// Import data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create function for data table
function buildTable(data){
    tbody.html("");
}

// Add the forEach function, Loop through each object in the data 
// and append a row and cells for each value in the row data
data.forEach((dataRow) => {
    let row = tbody.append("tr");   // declare row variable, append a row to the table 
    
    // Loop through each field in the dataRow and add each value as td
    Object.values(dataRow).forEach((val) => {   
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
