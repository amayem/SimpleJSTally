var rowNumber = 1;

function addRow()
{
	rowNumber++;
	var table = document.getElementById("tally_table");
	var row = document.createElement("tr");
	var name = document.createElement("td");
	name.innerHTML = "name" + rowNumber;
	var tally = document.createElement("td");
	tally.innerHTML = 0;
	row.appendChild(name);
	row.appendChild(tally);
	table.appendChild(row);
}