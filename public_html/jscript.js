// JS Stuff here

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/

var classInformation = 
[
    {className:"Dual Weilding",HP:10,Armour:1,Damage:2},
    {className:"Sword and Shield",HP:10,Armour:2,Damage:1} 
];

$(function(){
    drawClassTable();
    drawChooseClass();
    
    $("[name=selectClass]").on("click",function(){
        var playerClass = "";
        var playerHP;
        var playerArmor;
        var playerDamage;
        if(window.confirm("Are you sure?")){
           playerClass = classInformation[parseInt($(this).attr("class"))].className;
           playerHP = classclassInformation[parseInt($(this).attr("class"))].HP;
           playerArmor = classclassInformation[parseInt($(this).attr("class"))].Armor;
           playerDamage = classclassInformation[parseInt($(this).attr("class"))].Damage;
           window.location.href = "legame.html?playerClass=" + playerClass 
                                  + "?playerHp=" + playerHP
                                  + "?playerArmor=" + playerArmor
                                  + "?playerDamage" + playerDamage;
        }
           
    });
});

function drawClassTable()
{
    for(var i=0; i<classInformation.length; i++)
    {
        var rowHTML = "";
        rowHTML = "<tr><td>"+classInformation[i].className+"</td><td>"+classInformation[i].HP+"</td><td>"+classInformation[i].Armour+"</td> <td>"+classInformation[i].Damage+"</td></tr>";
        $("#classTable tbody").append(rowHTML);
        
    }
}

function drawChooseClass()
{
    for(var i=0; i<classInformation.length; i++)
    {
        var selectionHTML = "";
        selectionHTML = "<input type='radio' class=" + i + " name='selectClass'>Choose" + classInformation[i].className + "</input><br/>";  
        $("#chooseClass").append(selectionHTML);
    }
}


function back(){
    window.location.href = "index.html";
}
