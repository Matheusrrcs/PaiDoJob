

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


function changeImg() {
    let slc = document.getElementById("ligaatual").value


    let igm = document.getElementById("emblem")
    let div = document.getElementById("boxDivisaoAtual")


    igm.src = `imagens/${slc}.png`
    
    if (slc == "mestre" || slc == "graomestre" || slc == "desafiante"){
        div.classList.add("d-none")}
    else{
    div.classList.remove("d-none")
    }

}

function changeImg2() {

    let slc = document.getElementById("ligadesejada").value

    let igm = document.getElementById("emblem2")

    let div = document.getElementById("boxDivisaoDesejada")
 
    igm.src = `imagens/${slc}.png`
    
    if (slc == "mestre" || slc == "graomestre" || slc == "desafiante"){
        div.classList.add("d-none")}
    else{
    div.classList.remove("d-none")
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


    if (elo[`${lga}`] > elo[`${lgd}`]) {

        btn.classList.add("d-none")
        value.classList.add("d-none")
        msg.classList.remove("d-none")
    }

    else if (elo[`${lga}`] == elo[`${lgd}`] && dva <= dvd) {
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