const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");

const tempoObjetivo1= new Date(2027,5,9,17,49)
const tempoObjetivo2= new Date(2027,10,18,14,29)
const tempoObjetivo3= new Date(2025,3,10,10,30)
const tempoObjetivo4= new Date(2024,10,5,17,20)

function calculaTempo(tempoObjetivo){
    let dias
    segundos = (tempoObjetivo - agora)/1000
    minutos = segundos/60
    horas = minutos/60
    dias = horas/24
    segundos = Math.floor(segundos)
    minutos = Math.floor(minutos)
    horas = Math.floor(horas)
    dias = Math.floor(dias)
     
    segundos = segundos%60
    minutos = minutos%60
    horas = horas%24


}



contador[0].textContent = `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`

for(let i = 0 ; i < botoes.length; i++){
    botoes[i].onclick = function(){
     for (let j = 0; j< botoes.length ; j++){
         botoes[j].classList.remove("ativo")
         conteudo[j].classList.remove("ativo")
     }   
     botoes[i].classList.add("ativo")
     conteudo[i].classList.add("ativo")
    }
}

