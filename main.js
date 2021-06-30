menu_list_array = ["Veg Margherita Pizza","Chicken-Tandoori Pizza","Chese Pizza","Deluxe-Veggie Pizza","Veg-Supreme Pizza","Paneer-Tikka Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+"<div class='card'>"
    +"<img id='hi' src='pizzaImg.png'/>"
    + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("menu").innerHTML = htmldata;
//Complete the code


}
function add_top(){
    var hi=document.getElementById("add_item").value;
    menu_list_array.push(hi);
    add_item();
}