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

// Function for button click
function handleClick(){
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if date was entered and filter the data using that date
    if (date){
        // Apply filter to table data to only keep rows where datetime matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using the filtered data
    // Note: if no date was entered, then it'll just the be original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);