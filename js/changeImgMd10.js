 

function changeImg() {
    let slc = document.getElementById("ligaatual").value
    let igm = document.getElementById("emblem")
  
    igm.src = `imagens/${slc}.png`
 
    
}
document.getElementById("valorAntigo").innerHTML =' <small style="font-size: 20px;">DE:</small> R$ 90,00'
document.getElementById("valor").innerHTML =' <small style="font-size: 20px;">POR:</small> R$ 75,00'
