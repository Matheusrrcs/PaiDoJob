
const coachPrice = {

    cinco: 40,
    dez: 80,
    quinze: 130
}

const desconto = 20
const descontoP = 10

document.getElementById("valor").innerHTML = `<small >POR:</small>  ${moedaBrasil((1 - descontoP / 100) * coachPrice.cinco)} </p>`

document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil((desconto / 100 + 1) * coachPrice.cinco)}</p>`


function Eloprice() {
    let lga = document.getElementById("ligaatual").value



    let resultadoFinal
    let descontoPincipal

    resultadoFinal = coachPrice[`${lga}`]
    descontoPincipal = (1 - descontoP / 100) * resultadoFinal
    descontoFinal = (desconto / 100 + 1) * resultadoFinal
    

    document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ ${ resultadoFinal},00</p>`
    document.getElementById("valorAntigo").innerHTML = `<small >de:</small>  ${moedaBrasil(descontoFinal)}</p>`

}


function moedaBrasil(valor) {

    var valor
    var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    return valorFormatado
}