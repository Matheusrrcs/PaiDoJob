 
document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ 65,00</p>`
 

const eloPrice = {
    ferroIV: 0,
    ferroIII: 10,
    ferroII: 20,
    ferroI: 30,
    bronzeIV: 40,
    bronzeIII: 55,
    bronzeII: 70,
    bronzeI: 85,
    prataIV: 100,
    prataIII: 115,
    prataII: 130,
    prataI: 145,
    ouroIV: 165,
    ouroIII: 185,
    ouroII: 205,
    ouroI: 225,
    platinaIV: 255,
    platinaIII: 285,
    platinaII: 315,
    platinaI: 345,
    diamanteIV: 395,
    diamanteIII: 455,
    diamanteII: 535,
    diamanteI: 655,
    mestreIV: 805,
    graomestreIV: 1525,
    desafianteIV: 3215
}

function Eloprice() {
    let lga = document.getElementById("ligaatual").value
    let lgd = document.getElementById("ligadesejada").value

    let dva = document.getElementById("divisaoatual")
    let dvd = document.getElementById("divisaodesejada")


    let resultadoFinal

    let lgadva = lga + dva.options[dva.selectedIndex].text
    let lgadvd = lgd + dvd.options[dvd.selectedIndex].text
 
    resultadoFinal = eloPrice[`${lgadvd}`] - eloPrice[`${lgadva}`]

    document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ ${resultadoFinal},00</p>`

}
