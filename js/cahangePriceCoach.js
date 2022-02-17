
document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ 40,00</p>`

const coachPrice = {

    cinco:40,
    dez:80,
    quinze:130
}

function Eloprice() {
    let lga = document.getElementById("ligaatual").value
   


    let resultadoFinal

 
    resultadoFinal  = coachPrice[`${lga}`]

    document.getElementById("valor").innerHTML = `<small style="font-size: 20px;">POR:</small> R$ ${resultadoFinal},00</p>`

}