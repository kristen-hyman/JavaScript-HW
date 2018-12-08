// from data.js

var tableData = data;

var tbody = d3.select("tbody");

//template to plug in values to run function - gives initial instructions so when you call the argument it knows what to do
function updatetable (aliendata) {
tbody.html("")
aliendata.forEach((Alien) => {
    var row = tbody.append("tr");
    Object.entries(Alien).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

//make local variable for table data to loop through and filter
  var filterdata = tableData
  
  filterdata = filterdata.filter(row => row.datetime === inputValue)

  console.log(filterdata);

  updatetable(filterdata);

});


updatetable(tableData);
