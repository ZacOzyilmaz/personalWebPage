const inputID = ['projectID','issueDes', 'locFound', 'foundBy', 'exBeh', 'otherInfo'];

function getDefectData(elementID){ //Gets the data from the form
    var data = document.getElementById(elementID).value;
    return data;
}

function createNewRow(event){ //creates a new row
    event.preventDefault();
    var table = document.getElementById('tableBody');
    var row = table.insertRow(-1);
    
//creates cell and gives it a class
    var cell0 = row.insertCell(0); 
    cell0.classList.add('tablePID');
    var cell1 = row.insertCell(1);
    cell1.classList.add('tableTLID');
    var cell2 = row.insertCell(2);
    cell2.classList.add('tableTFID');
    var cell3 = row.insertCell(3);
    cell3.classList.add('tableTEID');
    var cell4 = row.insertCell(4);
    cell4.classList.add('tableTIID');
    var cell5 = row.insertCell(5);
    cell5.classList.add('tableTOID');
    
//gives the inner text to the cell
    cell0.innerHTML = getDefectData('projectID'); 
    cell1.innerHTML = getDefectData('locFound');
    cell2.innerHTML = getDefectData('foundBy');
    cell3.innerHTML = getDefectData('exBeh');
    cell4.innerHTML = getDefectData('issueDes');
    cell5.innerHTML = getDefectData('otherInfo');
}

//this will delete the current row
function deleteRow(event){
    
    event.preventDefault();

    document.getElementById('tableBody').deleteRow(-1);
}