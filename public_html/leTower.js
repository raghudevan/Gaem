/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

var monsterClass =
[
    {monsterLvl:"Small", monsterHP: 10, monsterArmor: 1, monsterDamage: 1},
    {monsterLvl:"Medium", monsterHP: 20, monsterArmor: 5, monsterDamage: 5},
    {monsterLvl:"Large", monsterHP: 50, monsterArmor: 10, monsterDamage: 10}
];

var playerInfo = $_GET["playerInfo"].split('/');
var level = parseInt(playerInfo[4]);
var playerHP = parseInt(playerInfo[1]);
var playerArmor = parseInt(playerInfo[2]);
var playerDamage = parseInt(playerInfo[3]);

//className, playerHP, playerArmor, playerDamage, playerLevel
$(function(){
    showInfo();
});

function showInfo(){
    //$("#test").append(playerInfo);
    $("#spanLevel").html(level);
    $("#playerHP").html(playerHP);
    $("#playerArmor").html(playerArmor);
    $("#playerDamage").html(playerDamage);
}

function increment(){
    level++;
    $("#spanLevel").html(level);
}