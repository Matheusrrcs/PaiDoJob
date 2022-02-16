
 
const elo = {
    ferro: 1,
    bronze: 2,
    prata: 3,
    ouro: 4,
    platina: 5,
    diamante: 6,
    mestre: 7,
    graomestre: 8,
    desafiante: 9
}

const eloPrice = {
    ferro: 10,
    bronze: 10,
    prata: 20,
    ouro: 0,
    platina: 0,
    diamante: 0,
    mestre: 0,
    graomestre: 0,
    desafiante: 0
}

const divPrice = {
    IV:0,
    III: 1,
    II: 2,
    I: 3,

}


function Eloprice() {
    let lga = document.getElementById("ligaatual").value
    let lgd = document.getElementById("ligadesejada").value
    let dva = document.getElementById("divisaoatual")
    let dvd = document.getElementById("divisaodesejada")
    var FinalPrice
   let prLga, prLgd, t


    if (elo[`${lga}`] == 1)  {
      prLga = eloPrice[`${lga}`] * divPrice[`${ dva.options[dva.selectedIndex].text }`] 
   
     

    FinalPrice = prLga +  prLgd 
   

    document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ ${FinalPrice},00 `

}
}


function changeImg() {
    let slc = document.getElementById("ligaatual").value


    let igm = document.getElementById("emblem")
    let div = document.getElementById("boxDivisaoAtual")


    if (slc == "ferro") {
        igm.src = "imagens/Emblem_Iron.png"
        div.classList.remove("d-none")
    }
    else if (slc == "bronze") {
        igm.src = "imagens/Emblem_Bronze.png"
        div.classList.remove("d-none")
    }
    else if (slc == "prata") {
        igm.src = "imagens/Emblem_Silver.png"
        div.classList.remove("d-none")
    }
    else if (slc == "ouro") {
        igm.src = "imagens/Emblem_Gold.png"
        div.classList.remove("d-none")
    }
    else if (slc == "platina") {
        igm.src = "imagens/Emblem_Platinum.png"
        div.classList.remove("d-none")
    }
    else if (slc == "diamante") {
        igm.src = "imagens/Emblem_Diamond.png"
        div.classList.remove("d-none")
    }
    else if (slc == "mestre") {
        igm.src = "imagens/Emblem_Master.png"
        div.classList.add("d-none")
    }
    else if (slc == "grao-mestre") {
        igm.src = "imagens/Emblem_Grandmaster.png"
        div.classList.add("d-none")
    }
    else if (slc == "desafiante") {
        igm.src = "imagens/Emblem_Challenger.png"
        div.classList.add("d-none")
    }

}


function changeImg2() {

    let slc = document.getElementById("ligadesejada").value

    let igm = document.getElementById("emblem2")

    let div = document.getElementById("boxDivisaoDesejada")


    if (slc == "ferro") {
        igm.src = "imagens/Emblem_Iron.png"
        div.classList.remove("d-none")
    }
    else if (slc == "bronze") {
        igm.src = "imagens/Emblem_Bronze.png"
        div.classList.remove("d-none")
    }
    else if (slc == "prata") {
        igm.src = "imagens/Emblem_Silver.png"
        div.classList.remove("d-none")
    }
    else if (slc == "ouro") {
        igm.src = "imagens/Emblem_Gold.png"
        div.classList.remove("d-none")
    }
    else if (slc == "platina") {
        igm.src = "imagens/Emblem_Platinum.png"
        div.classList.remove("d-none")
    }
    else if (slc == "diamante") {
        igm.src = "imagens/Emblem_Diamond.png"
        div.classList.remove("d-none")
    }
    else if (slc == "mestre") {
        igm.src = "imagens/Emblem_Master.png"
        div.classList.add("d-none")
    }
    else if (slc == "grao-mestre") {
        igm.src = "imagens/Emblem_Grandmaster.png"
        div.classList.add("d-none")
    }
    else if (slc == "desafiante") {
        igm.src = "imagens/Emblem_Challenger.png"
        div.classList.add("d-none")
    }

}

function bigElo() {

    let lga = document.getElementById("ligaatual").value
    let lgd = document.getElementById("ligadesejada").value

    let dva = document.getElementById("divisaoatual").value
    let dvd = document.getElementById("divisaodesejada").value 
     
    let btn = document.getElementById("btnElo")

    let msg = document.getElementById("bigElo")
    let value = document.getElementById("valor")


    if (elo[`${lga}`] >  elo[`${lgd}`]) {

        btn.classList.add("d-none")
        value.classList.add("d-none")
        msg.classList.remove("d-none")
    }

    else if(elo[`${lga}`] == elo[`${lgd}`] && dva ==  dvd){
        btn.classList.add("d-none")
        value.classList.add("d-none")
        msg.classList.remove("d-none")
    }
    
    else {
        btn.classList.remove("d-none")
        value.classList.remove("d-none")
        msg.classList.add("d-none")
    }


}