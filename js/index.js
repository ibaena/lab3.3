//Global Variables
var removeRow = document.getElementsByClassName("deleteR");
var myTable = document.getElementById("myTable");
var rowAdd = document.getElementById("addButton");
var formInput = document.getElementsByClassName("inPut");


//This function will give the 'x' button the ability to remove the entire row

function getOut() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
};

for (var i = 0; i < formInput.length; i++) {
  formInput[i]
};

//Make delete buttons array
for (var i = 0; i < removeRow.length; i++) {
  removeRow[i].addEventListener('click', getOut);
};


//This will allow the addition of rows to the table the new row will be added before the last row in the table

function addRow() {

  var row = myTable.insertRow(myTable.rows.length - 1);

  var cell1 = row.insertCell(0);
  var element1 = document.createElement("input");
  element1.className = 'form-control';
  element1.placeholder = 'First Name';
  cell1.appendChild(element1);

  var cell2 = row.insertCell(1);
  var element2 = document.createElement("input");
  element2.className = 'form-control';
  element2.placeholder = 'Last Name';
  cell2.appendChild(element2);

  var cell3 = row.insertCell(2);
  var element3 = document.createElement("input");
  element3.className = 'form-control';
  element3.placeholder = 'Email Address';
  cell3.appendChild(element3);

  var cell4 = row.insertCell(3);
  var element4 = document.createElement("button");
  element4.className = 'btn btn-default';
  element4.innerHTML = 'X';
  element4.addEventListener('click', getOut);
  element4.style.fontWeight = 'bold';
  cell4.appendChild(element4);
}
rowAdd.addEventListener('click', addRow);


/*Random number 1st row deleter

var randomRow = setInterval(randomDelete, 1000);
function randomDelete() {
  numberRandom = Math.floor((Math.random() * 10) + 1);
  console.log(numberRandom);

  if (numberRandom >= 5 || numberRandom >= 10) {
    myTable.deleteRow(1);

  };
};*/

//test for emepty

function IsEmpty(){
  if(forInput.value == "")
  {
    alert("empty");
    return false;
  }
    return true;
}

