const coachPrice={cinco:40,dez:80,quinze:130},desconto=20;function Eloprice(){let e,n=document.getElementById("ligaatual").value;e=coachPrice[`${n}`],descontoFinal=(desconto/100+1)*e,document.getElementById("valor").innerHTML=`<small style="font-size: 20px;">POR:</small> R$ ${e},00</p>`,document.getElementById("valorAntigo").innerHTML=`<small >de:</small>  ${moedaBrasil(descontoFinal)}</p>`}function moedaBrasil(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}document.getElementById("valor").innerHTML=`<small >POR:</small>  ${moedaBrasil(coachPrice.cinco)} </p>`,document.getElementById("valorAntigo").innerHTML=`<small >de:</small>  ${moedaBrasil((desconto/100+1)*coachPrice.cinco)}</p>`;