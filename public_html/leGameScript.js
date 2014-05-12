/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var classInf = new Array();

$(function(){
    var classInfo = 
    [
        $_GET["playerClass"],
        $_GET["playerHP"],
        $_GET["playerArmor"],
        $_GET["playerDamage"]
    ];
    classInf = classInfo;
});

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

function enterET(){
    window.location.href = "theTower.html?playerClass=" + classInfo[1]
                           + "?playerHP=" + classInfo[2] 
                           + "?playerArmor=" + classInfo[3]
                           + "?playerDamage=" + classInfo[4];
}