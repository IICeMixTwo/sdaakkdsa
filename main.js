menuListArray = ["Pizza Vegetariana",
                    "Pizza de Frango",
                    "Pizza Portuguesa",
                    "Pizza Quatro Queijos",
                    "Pizza de Calabresa",
                    "Pizza Extravaganza",];

function getMenu(){
var htmldata;
menuListArray.sort();
for (var i = 0; i < menuListArray.length; i++) {
    htmldata = htmldata + '<li>' + menuListArray[i] + '</li>';
    }
    document.getElementById("displayAddedMenu").innerHTML=htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
//Completar o código

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}