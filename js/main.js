const subtrair = document.getElementById('subtrair');
const braco = document.getElementById('braco');
const somar = document.getElementById('somar');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento)=>{
   elemento.addEventListener('click', (evento) =>{
      manipulaDados(evento.target.textContent)
   })
})

 function manipulaDados (operacao) {
   if (operacao === '-') {
      braco.value = parseInt(braco.value) -1;
   } else  {
      braco.value = parseInt(braco.value) +1;
   }
 }