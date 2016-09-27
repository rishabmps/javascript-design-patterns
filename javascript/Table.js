/**
 * Created by idnrsj on 9/26/2016.
 */



class data{

    constructor(rows,index){
        this.rows = rows;
        this.index = index;
    }



    insertRow() {
    var table = document.getElementById("myTable")
    this.rows[this.index] =  table.insertRow(this.index);
    var row = this.rows[this.index];
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML =   '<input type="text" class="fname" />';
    cell2.innerHTML = '<input type="button" value="Delete" onclick="data_table.deleteRow(this)" />';

    this.index++;

    }

    deleteRow(row){
    var table = document.getElementById("myTable")
    var  i = row.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
    delete this.rows[i];
    this.index--;
    }

}

let data_table = new data({},0);
