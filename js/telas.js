let value;function modalChange2(){"MD10"==value?window.location.href="md10_lol":"ELO BOOST"==value.trim()?window.location.href="Eloboost_lol":"DUO BOOST"==value?window.location.href="DuosBoost_lol":"COACH"==value&&(window.location.href="coach_lol")}function modalChange3(){"MD10"==value?window.location.href="md10_rift":"ELO BOOST"==value.trim()?window.location.href="Eloboost_rift":"DUO BOOST"==value?window.location.href="DuosBoost_rift":"COACH"==value&&(window.location.href="coach_rift")}document.querySelectorAll(".nav-link").forEach(function(o){o.addEventListener("click",function(o){const l=o.target;value=l.innerText})});