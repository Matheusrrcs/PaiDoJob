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
    diamanteI:625,
    mestreIV: 737,
    mestreIII: 737,
    mestreII: 737,
    mestreI: 737,
    graomestreIV: 1314,
    graomestreIII: 1314,
    graomestreII: 1314,
    graomestreI: 1314,
    desafianteIV: 2539,
    desafianteIII: 2539,
    desafianteII: 2539,
    desafianteI: 2539
}
const desconto = 20
const descontoP = 10

document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil(eloPrice.ouroIV - eloPrice.prataIV) }</p>`
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


    document.getElementById("valor").innerHTML = `<small >POR:</small> ${moedaBrasil(resultadoFinal)} </p>`
    document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil(descontoFinal)}<p>`

}


function moedaBrasil(valor) {

    var valor
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    return valorFormatado
}