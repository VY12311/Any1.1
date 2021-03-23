console.log("Windows PowerShell");
console.log("Copyright (C) Microsoft Corporation. All rights reserved.");
console.log("");
console.log("Try the new cross-platform PowerShell https://aka.ms/pscore6");
console.log("");
console.log("PS D:\workspace>");
console.log("function get menu()");
var menur = ["Chicken Toodri pizza"
            ,"Veg Supreme pizza"
            ,"Panner Tika pizza"
            ,"Deulex Veggie Pizza"
            ,"Veg Extravanzanga Pizza"];
function menuui() {
    var data;
    data="<ol class='menu'>";
    menur.sort;
    for (var i = 0; i < menur.length; i++) {
        data = data + '<li>' + menur[i] + '</li>';
    }
    data = data + '</ol>'
    document.getElementById("a").innerHTML = data;
}
function recom() {
    data="<div>";
    menur.sort;
    var item = document.getElementById("name_of_student_1").value;
    menur.push(item)
    for (var i = 0; i < menur.length; i++) {
        data = data + '<li>' + '<img src="yb.jpg" style="width: 100px; height: 100px;">' + menur[i] + '</li>';
    }
    data = data + '</div>'
    document.getElementById("d").innerHTML = data;
}