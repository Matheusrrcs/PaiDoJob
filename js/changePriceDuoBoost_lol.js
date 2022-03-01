
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
    diamanteIV: 565,
    diamanteIII: 645,
    diamanteII: 745,
    diamanteI: 895,
    mestreIV: 1095,
    mestreIII: 1095,
    mestreII: 1095,
    mestreI: 1095

}
const desconto = 20
const descontoP = 10


<<<<<<< HEAD
document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil(eloPrice.ouroIV - eloPrice.prataIV)} </p>`
=======
document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil((1 - descontoP / 100) * (eloPrice.ouroIV - eloPrice.prataIV))} </p>`
>>>>>>> parent of 4cca3af (desconto tirado)
document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil((desconto / 100 + 1) * (eloPrice.ouroIV - eloPrice.prataIV))}</p>`



function Eloprice() {
    let lga = document.getElementById("ligaatual").value
    let lgd = document.getElementById("ligadesejada").value

    let dva = document.getElementById("divisaoatual")
    let dvd = document.getElementById("divisaodesejada")


    let resultadoFinal
    let descontoFinal
    let descontoPincipal

    let lgadva = lga + dva.options[dva.selectedIndex].text
    let lgadvd = lgd + dvd.options[dvd.selectedIndex].text


    resultadoFinal = eloPrice[`${lgadvd}`] - eloPrice[`${lgadva}`]
    descontoPincipal = (1 - descontoP / 100) * resultadoFinal
    descontoFinal = (desconto / 100 + 1) * resultadoFinal


<<<<<<< HEAD
    document.getElementById("valor").innerHTML = `<small >POR:</small> ${moedaBrasil(resultadoFinal)} </p>`
=======
    document.getElementById("valor").innerHTML = `<small >POR:</small> ${moedaBrasil(descontoPincipal)} </p>`
>>>>>>> parent of 4cca3af (desconto tirado)
    document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil(descontoFinal)}<p>`

}


function moedaBrasil(valor) {

    var valor
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    return valorFormatado
}