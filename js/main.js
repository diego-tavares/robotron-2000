const botaoBg1 = document.getElementById('botao-1')
const botaoBg2 = document.getElementById('botao-2')

botaoBg1.addEventListener('click', () =>{
  document.body.classList.remove('bg-2')
  document.body.classList.toggle('bg-1')
})

botaoBg2.addEventListener('click', () =>{
  let contador = 1

  if (contador === 1) {
    document.body.classList.toggle('bg-2')
    document.body.classList.remove('bg-1')
    contador = 2
    console.log(contador)
  }
  contador = contador +1
})


const robotron = document.getElementById('robotron')
const robotron1 = document.getElementById('robotron1')
const robotron2 = document.getElementById('robotron2')
const robotron3 = document.getElementById('robotron3')
const robotron4 = document.getElementById('robotron4')
const robotron5 = document.getElementById('robotron5')


robotron1.addEventListener('click', ()=>{
  robotron.setAttribute('src', 'img/robotron1.png')
} )
robotron2.addEventListener('click', ()=>{
  robotron.setAttribute('src', 'img/robotron2.png')
} )
robotron3.addEventListener('click', ()=>{
  robotron.setAttribute('src', 'img/robotron3.png')
} )
robotron4.addEventListener('click', ()=>{
  robotron.setAttribute('src', 'img/robotron4.png')
} )
robotron5.addEventListener('click', ()=>{
  robotron.setAttribute('src', 'img/robotron5.png')
} )



const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatisticas]')

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },
  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

controle.forEach ( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    atualizaEstatisticas(evento.target.dataset.peca)
  })
})

function manipulaDados (operacao, controle) {
  const peca = controle.querySelector('[data-contador]')
  
  if (operacao ==='-') {
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca) {

  estatisticas.forEach( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
  })
}

const pecaBracos = document.getElementById('pecaBracos');
const pecaBlindagem = document.getElementById('pecaBlindagem');
const pecaNucleos = document.getElementById('pecaNucleos');
const pecaPernas = document.getElementById('pecaPernas');
const pecaFoguetes = document.getElementById('pecaFoguetes');

const forca = document.getElementById('forca');
const poder = document.getElementById('poder');
const energia = document.getElementById('energia');
const velocidade = document.getElementById('velocidade');

const random = document.getElementById('producao');

const allRandom = document.querySelectorAll('.controle-contador').textContent

random.addEventListener('click', ()=>{
let valueRandom = '??';
let randomizer = 0;

randomizer = Math.floor(Math.random() * 999 + 1);
forca.innerText = randomizer;
randomizer = Math.floor(Math.random() * 999 + 1);
poder.innerText = randomizer;
randomizer = Math.floor(Math.random() * 999 + 1);
energia.innerText = randomizer;
randomizer = Math.floor(Math.random() * 999 + 1);
velocidade.innerText = randomizer;

pecaBracos.value = valueRandom;
pecaBlindagem.value = valueRandom;
pecaNucleos.value = valueRandom;
pecaPernas.value = valueRandom;
pecaFoguetes.value = valueRandom;

console.log(pecaBracos.value)

})

function mudar() {
  let allRandom = document.getElementsByClassName('.controle-contador');
       for (let index = 0; index < allRandom.length; index++) {
         allRandom[index].value = "blue";
     }
}

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
  document.location.reload(true)
})