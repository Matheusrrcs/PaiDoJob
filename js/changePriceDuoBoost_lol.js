 
document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ 105,00</p>`
 

const eloPrice = {
    ferroIV: 0,
    ferroIII: 15,
    ferroII: 30,
    ferroI: 45,
    bronzeIV: 65,
    bronzeIII: 85,
    bronzeII: 105,
    bronzeI: 125,
    prataIV: 150,
    prataIII: 175,
    prataII: 200,
    prataI: 225,
    ouroIV: 255,
    ouroIII: 285,
    ouroII: 315,
    ouroI: 345,
    platinaIV: 385,
    platinaIII: 425,
    platinaII: 465,
    platinaI: 505,
    diamanteIV:565,
    diamanteIII: 645,
    diamanteII: 745,
    diamanteI: 895,
    mestreIV: 1095,
 
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
