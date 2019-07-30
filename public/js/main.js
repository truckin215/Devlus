var calendar = document.getElementById('calendar');
var table    = document.createElement("table");                /*Create `table` element*/
var rows     = <%=projects.length%>
var cols     = 3;
var counter  = 15;
for (var i = 1; i <= rows; i++) {
	var tr = document.createElement("tr");                 /*Create `tr` element*/
	for (var j = 1; j <= cols; j++) {
	    var td = document.createElement("td");             /*Create `td` element*/
	    var cellText = document.createTextNode(counter);   /*Create text for `td` element*/
	    ++counter;
	    td.appendChild(cellText);                          /*Append text to `td` element*/
	    tr.appendChild(td);                                /*Append `td` to `tr` element*/
	}
	table.appendChild(tr);                                 /*Append `tr` to `table` element*/
}
calendar.appendChild(table);                                   /*Append `table` to your HTML `calender` DIV*/