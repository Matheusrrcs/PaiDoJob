const elo = {
    ferro : 1,
    bronze : 2,
    prata : 3,
    ouro : 4,
    platina : 5,
    diamante : 6,
    mestre : 7,
    graomestre : 8,
    desafiante : 9
}

function changeImg() {
    let slc = document.getElementById("ligaatual").value
   
    let igm = document.getElementById("emblem")
    let div = document.getElementById("boxDivisaoAtual")
   

    if (slc == "ferro") {
        igm.src = "imagens/Emblem_Iron.png"
        div.classList.remove("invisible")
    }
    if (slc == "bronze") {
        igm.src = "imagens/Emblem_Bronze.png"
        div.classList.remove("invisible")
    }
    if (slc == "prata") {
        igm.src = "imagens/Emblem_Silver.png"
        div.classList.remove("invisible")
    }
    if (slc == "ouro") {
        igm.src = "imagens/Emblem_Gold.png"
        div.classList.remove("invisible")
    }
    if (slc == "platina") {
        igm.src = "imagens/Emblem_Platinum.png"
        div.classList.remove("invisible")
    }
    if (slc == "esmeralda") {
        igm.src = "imagens/Wild_Rift_Emerald_rank.webp"
        div.classList.remove("invisible")
    }
    if (slc == "diamante") {
        igm.src = "imagens/Emblem_Diamond.png"
        div.classList.remove("invisible")
    }
    if (slc == "mestre") {
        igm.src = "imagens/Emblem_Master.png"
        div.classList.add("invisible")
    }
    if (slc == "grao-mestre") {
        igm.src = "imagens/Emblem_Grandmaster.png"
        div.classList.add("invisible")
    }
    if (slc == "desafiante") {
        igm.src = "imagens/Emblem_Challenger.png"
       div.classList.add("invisible")
    }
    
}


function changeImg2() {
    let slc = document.getElementById("ligadesejada").value
   
    let igm = document.getElementById("emblem2")
    console.log(igm)
    let div = document.getElementById("boxDivisaoDesejada")
   

    if (slc == "ferro") {
        igm.src = "imagens/Emblem_Iron.png"
        div.classList.remove("invisible")
    }
    if (slc == "bronze") {
        igm.src = "imagens/Emblem_Bronze.png"
        div.classList.remove("invisible")
    }
    if (slc == "prata") {
        igm.src = "imagens/Emblem_Silver.png"
        div.classList.remove("invisible")
    }
    if (slc == "ouro") {
        igm.src = "imagens/Emblem_Gold.png"
        div.classList.remove("invisible")
    }
    if (slc == "platina") {
        igm.src = "imagens/Emblem_Platinum.png"
        div.classList.remove("invisible")
    }
    if (slc == "esmeralda") {
        igm.src = "imagens/Wild_Rift_Emerald_rank.webp"
        div.classList.remove("invisible")
    }
    if (slc == "diamante") {
        igm.src = "imagens/Emblem_Diamond.png"
        div.classList.remove("invisible")
    }
    if (slc == "mestre") {
        igm.src = "imagens/Emblem_Master.png"
        div.classList.add("invisible")
    }
    if (slc == "grao-mestre") {
        igm.src = "imagens/Emblem_Grandmaster.png"
        div.classList.add("invisible")
    }
    if (slc == "desafiante") {
        igm.src = "imagens/Emblem_Challenger.png"
       div.classList.add("invisible")
    }
    
}

function bigElo(){

    let lga = document.getElementById("ligaatual").value
     let lgd = document.getElementById("ligadesejada").value

    let btn = document.getElementById("btnElo")
  
   let msg = document.getElementById("bigElo")
   let value =  document.getElementById("valor")
 

 if(elo[`${lga}`] >= elo[`${lgd}`]){
 
    btn.classList.add("invisible")
    value.classList.add("invisible")
    msg.classList.remove("invisible")
 }
 else{
    btn.classList.remove("invisible")
    value.classList.remove("invisible")
    msg.classList.add("invisible")
 }
}