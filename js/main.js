const subtrair = document.getElementById('subtrair');
const braco = document.getElementById('braco');
const somar = document.getElementById('somar');

const controle = document.querySelectorAll('.controle-ajuste');

console.log(controle);

somar.addEventListener('click', ()=> {
  manipulaDados();
})


 subtrair.addEventListener('click', ()=> {
   manipulaDados();
 })

 function manipulaDados (operacao) {
   if (operacao === "subtrair") {
      braco.value = parseInt(braco.value) +1;
   } else {
      braco.value = parseInt(braco.value) -1;
   }
 }