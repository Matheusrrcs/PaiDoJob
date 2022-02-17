let value 

document.querySelectorAll(".nav-link").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target;
    value = el.innerText;
  
  });
  
});


function modalChange2(){
  
    if(value == "MD10"){
        window.location.href ='md10_lol.html';
       
    }
    else if(value.trim() == "ELO BOOST"){
        window.location.href ='Eloboost_lol.html';
    }
    else if(value == "DUO BOOST"){
        window.location.href ='DuosBoost_lol.html'
    }
   else if(value=="COACH"){
    window.location.href ='coach_lol.html'
   }
 }

 
function modalChange3(){
    
    if(value == "MD10"){
        window.location.href ='md10_rift.html';
    }
    else if(value.trim() == "ELO BOOST"){
        window.location.href ='Eloboost_rift.html';
    }
    else if(value == "DUO BOOST"){
        window.location.href ='DuosBoost_rift.html'
    }
   else if(value=="COACH"){
    window.location.href ='coach_rift.html'
   }
 }
