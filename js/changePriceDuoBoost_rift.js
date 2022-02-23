 

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
const desconto = 20

document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil(eloPrice.ouroIV - eloPrice.prataIV)} </p>`
document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil((desconto/100 + 1) * (eloPrice.ouroIV - eloPrice.prataIV))}</p>`
 
 

function Eloprice() {
    let lga = document.getElementById("ligaatual").value
    let lgd = document.getElementById("ligadesejada").value

    let dva = document.getElementById("divisaoatual")
    let dvd = document.getElementById("divisaodesejada")


    let resultadoFinal
    let descontoFinal 

    let lgadva = lga + dva.options[dva.selectedIndex].text
    let lgadvd = lgd + dvd.options[dvd.selectedIndex].text
 
    do{
    resultadoFinal = eloPrice[`${lgadvd}`] - eloPrice[`${lgadva}`]
     descontoFinal = ( desconto/100 + 1) * resultadoFinal
    }while(resultadoFinal == NaN || descontoFinal == NaN)
  

     document.getElementById("valor").innerHTML = `<small >POR:</small> ${moedaBrasil(resultadoFinal)} </p>`
     document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil(descontoFinal)}<p>`
 
}


function moedaBrasil(valor){
   
	var valor  
	var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
 

    return valorFormatado
}