/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    playerInfo = $_GET["playerInfo"].split('/');
    showInfo(playerInfo);
});

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

function showInfo(playerInfo){
    //$("#test").append(playerInfo);
    $("#className").html(playerInfo[0]);
    $("#playerHP").html(playerInfo[1]);
    $("#playerArmor").html(playerInfo[2]);
    $("#playerDamage").html(playerInfo[3]);
}

function enterET(){
    window.location.href = "theTower.html?playerInfo=" + $_GET["playerInfo"] + "/" + 1;
}
