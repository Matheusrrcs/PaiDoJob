 
document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ 84,00</p>`
 

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
    ouroIV: 246,
    ouroIII: 294,
    ouroII: 324,
    ouroI: 354,
    platinaIV: 394,
    platinaIII: 434,
    platinaII: 474,
    platinaI: 514,
    esmeraldaIV:554,
    esmeraldaIII:624,
    esmeraldaII:714,
    esmeraldaI:814,
    diamanteIV:934,
    diamanteIII: 1074,
    diamanteII: 1234,
    diamanteI:1414,
    mestreIV: 1634,
    graomestreIV: 2384,
    desafianteIV: 3784
 
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
