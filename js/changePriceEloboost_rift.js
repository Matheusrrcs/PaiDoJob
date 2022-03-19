
const eloPrice = {
    ferroIV: 0,
    ferroIII: 18,
    ferroII: 36,
    ferroI: 54,
    bronzeIV: 74,
    bronzeIII: 94,
    bronzeII: 114,
    bronzeI: 134,
    prataIV: 159,
    prataIII: 184,
    prataII: 209,
    prataI: 234,
    ouroIV: 264,
    ouroIII: 294,
    ouroII: 324,
    ouroI: 354,
    platinaIV: 394,
    platinaIII: 434,
    platinaII: 474,
    platinaI: 514,
    esmeraldaIV: 554,
    esmeraldaIII: 624,
    esmeraldaII: 714,
    esmeraldaI: 814,
    diamanteIV: 934,
    diamanteIII: 1074,
    diamanteII: 1234,
    diamanteI: 1414,
    mestreIV: 1634,
    mestreIII: 1634,
    mestreII: 1634,
    mestreI: 1634,
    graomestreIV: 2384,
    graomestreIII: 2384,
    graomestreII: 2384,
    graomestreI: 2384,
    desafianteIV: 3784,
    desafianteIII: 3784,
    desafianteII: 3784,
    desafianteI: 3784

}
const desconto = 20
const descontoP = 10

document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil( eloPrice.ouroIV - eloPrice.prataIV) }</p>`

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