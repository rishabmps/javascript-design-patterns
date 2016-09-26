/**
 * Created by idnrsj on 9/26/2016.
 */

var rows = {};
var index = 0;

function insertRow() {
    var table = document.getElementById("myTable")
    rows[index] =  table.insertRow(index);
    var row = rows[index];
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML =   '<input type="text" class="fname" />';
    cell2.innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" />';

    index++;
    console.log("hi");
}

function deleteRow(row){
    var table = document.getElementById("myTable")
    var  i = row.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
    delete rows[i];
    index--;
}
