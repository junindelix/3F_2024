const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".contador");
contador[0].textContent="Olá"
contador[1].textContent="Olá"
contador[2].textContent="Olá"
contador[3].textContent="Olá"
const tempoObjetivo1= new Date(2027,5,9,17,49)
const tempoObjetivo2= new Date(2027,10,18,14,29)
const tempoObjetivo3= new Date(2025,3,10,10,30)
const tempoObjetivo4= new Date(2024,10,5,17,20)



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

