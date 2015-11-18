var removeRow = document.getElementsByClassName("deleteR");
var myTable = document.getElementsByClassName("myTable");
var rowAdd = document.getElementById("addButton");


function getOut () {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
};

function addRow(){

this.parentNode.parentNode.parentNode.add(this.parentNode.parentNode);

}
rowAdd.addEventListener('click',addRow);

//Make delete buttons array
for (var i = 0; i < removeRow.length; i++) {
  removeRow[i].addEventListener('click',getOut);
};
  
