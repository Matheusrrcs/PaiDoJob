 

function changeImg() {
    let slc = document.getElementById("ligaatual").value
    let igm = document.getElementById("emblem")
  
    igm.src = `imagens/${slc}.png`
 
    
}

document.getElementById("valor").innerHTML =' <small style="font-size: 20px;">POR:</small> R$ 75,00'