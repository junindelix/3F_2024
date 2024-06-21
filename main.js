const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
let agora = new Date();
let segundos
let minutos
let horas
let dias 
Math.floor()
segundos = (tempoObjetivo1-agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;

contador[0].textContent = `faltam 4{dias} dias, 7{horas} horas, 30{minutos} minutos e 48{segundos} segundos`

const tempoObjetivo1= new Date(2027,5,9,17,49)
const tempoObjetivo2= new Date(2027,10,18,14,29)
const tempoObjetivo3= new Date(2025,3,10,10,30)
const tempoObjetivo4= new Date(2024,10,5,17,20)
contador[0].textContent = tempoObjetivo1 -agora
contador[1].textContent = tempoObjetivo2 -agora
contador[2].textContent = tempoObjetivo3 -agora
contador[3].textContent = tempoObjetivo4 -agora



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

