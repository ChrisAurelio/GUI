function generateTable() {
    let table = '<table id="table">';
    let minColumn = parseInt(document.getElementById('minColumn').value);
    let maxColumn = parseInt(document.getElementById('maxColumn').value);
    let minRow = parseInt(document.getElementById('minRow').value);
    let maxRow = parseInt(document.getElementById('maxRow').value);
    let error = document.getElementById("error");

    // Initial error text is blank
    error.innerHTML = "";

    // If the input is valid...
    if (validInput(minColumn, maxColumn, minRow, maxRow)) {
        // Populate the headr row and column
        table += '<th>';

        for (i = minRow; i <= maxRow; i++) {
            table += '<th>' + i + '</th>';
        }
        
        // Caclulate multiples and add to the table
        for (i = minColumn; i <= maxColumn; i++) {
            table += '<tr>';
            table += '<th>' + i + '</th>';
            for (j = minRow; j <= maxRow; j++) {
                table = table + '<td>' + i*j + '</td>';
            }
            table += '</tr>';
        }

        table += '</table>';
        document.getElementById('table').innerHTML = table;
    } else {
        // Print error message if input is invalid
        error.innerHTML = "Input is Invalid" + "<br>" + "Values must be between -50 and 50";
    }
}

function validInput(minColumn, maxColumn, minRow, maxRow) {
    // Valid boolean is true by default
    valid = true;
    
    // Value is toggled to false if any of these conditons are met
    if (minColumn < -50 || maxColumn > 50) {
        valid = false;
    }

    if (minRow < -50 || maxRow > 50) {
        valid = false;
    }

    if (isNaN(minColumn) || isNaN(maxColumn) || isNaN(minRow) || isNaN(maxRow)) {
        valid = false;
    }

    if (minColumn >= maxColumn || minRow >= maxRow) {
        valid = false;
    }

    // Return value of valid
    return valid;
}