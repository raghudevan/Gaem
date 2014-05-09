/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var player_type = new String();

function back(){
    window.location.href = "index.html";
}

function confirmation(v){
   if(window.confirm("Are you sure?")){
       player_type = v;
   }
   window.location.href = "legame.html";   
}
