var rowNumber = 1;

function addRow()
{
	rowNumber++;
	var table = document.getElementById("tally_table_body");
	var row = document.createElement("tr");
	row.id = "tr_" + rowNumber;
	var delButtonTD = document.createElement("td");
	delButtonTD.innerHTML = '<button onclick="addTally(' + "'tr_" + rowNumber + "_tally'" + ', -1)">-</button>';
	var name = document.createElement("td");
	name.innerHTML = "Name " + rowNumber;
	var tally = document.createElement("td");
	tally.id = "tr_" + rowNumber + "_tally"
	tally.innerHTML = 0;
	var addButtonTD = document.createElement("td");
	addButtonTD.innerHTML = '<button onclick="addTally(' + "'tr_" + rowNumber + "_tally'" + ', 1)">+</button>';
	row.appendChild(delButtonTD);
	row.appendChild(name);
	row.appendChild(tally);
	table.appendChild(row);
	row.appendChild(addButtonTD);
}

function addTally(id, amount)
{
	var tallyTD = document.getElementById(id);
	tallyTD.innerHTML = Number(tallyTD.innerHTML) + amount;
}