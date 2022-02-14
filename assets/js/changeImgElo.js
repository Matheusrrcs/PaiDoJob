
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