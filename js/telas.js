let value 

document.querySelectorAll(".nav-link").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target;
    value = el.innerText;
  
  });
  
});


function modalChange2(){
  
    if(value == "MD10"){
        window.location.href ='md10_lol';
       
    }
    else if(value.trim() == "ELO BOOST"){
        window.location.href ='Eloboost_lol';
    }
    else if(value == "DUO BOOST"){
        window.location.href ='DuosBoost_lol'
    }
   else if(value=="COACH"){
    window.location.href ='coach_lol'
   }
 }

 
function modalChange3(){
    
    if(value == "MD10"){
        window.location.href ='md10_rift';
    }
    else if(value.trim() == "ELO BOOST"){
        window.location.href ='Eloboost_rift';
    }
    else if(value == "DUO BOOST"){
        window.location.href ='DuosBoost_rift'
    }
   else if(value=="COACH"){
    window.location.href ='coach_rift'
   }
 }
