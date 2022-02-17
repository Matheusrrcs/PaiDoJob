 
document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ 105,00</p>`
 

const eloPrice = {
    ferroIV: 0,
    ferroIII: 25,
    ferroII: 50,
    ferroI: 75,
    bronzeIV: 103,
    bronzeIII: 131,
    bronzeII: 159,
    bronzeI: 187,
    prataIV: 219,
    prataIII: 251,
    prataII: 283,
    prataI: 315,
    ouroIV: 353,
    ouroIII: 391,
    ouroII: 429,
    ouroI: 467,
    platinaIV: 522,
    platinaIII: 577,
    platinaII: 632,
    platinaI: 687,
    esmeraldaIV:742,
    esmeraldaIII:892,
    esmeraldaII:1062,
    esmeraldaI:1252,
    diamanteIV:1452,
    diamanteIII:1692,
    diamanteII:1952,
    diamanteI:2252,
    mestreIV: 2672,
 
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
