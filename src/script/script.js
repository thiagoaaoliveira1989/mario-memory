const main = document.getElementById('cards');
const pontosId =  document.getElementById('pontos');
console.log(pontosId);
const roundsId = document.getElementById('rounds');

const buttonEncerrar = document.getElementById("encerrar");


let click01 = null;
let click02 = null;
let encontrados = 0;
let placar = 0;

renderCards();

buttonEncerrar.addEventListener("click", ()=>{
  window.location.assign("../../index.html");
})


function renderCards() {
  const newArray = personagens.slice().concat(personagens.slice());
  const personagensEmbaralhado = shuffleArray(newArray);
  console.log(personagensEmbaralhado);


  for (let i = 0; i < personagensEmbaralhado.length; i++) {
    let card = document.createElement("img");

    card.id = personagensEmbaralhado[i].id;

    card.addEventListener("click", clickcard);

    card.src = "./src/img/QuestionBlock.png";

    main.appendChild(card);

  }
}

let lastClickPosition = null;

function clickcard(event) {

  const imgclick = event.target;
  let idClick = event.target.id;
  let personagemClick = personagens.find((Element) => Element.id == idClick);

  imgclick.src = personagemClick.img; //trocando o card pelo personagem
  imgclick.style = "width:200px;height:200px"; // colocando uma altura e largura fixa


  const position = {
    x: imgclick.offsetLeft,
    y: imgclick.offsetTop
  };

  if (lastClickPosition && lastClickPosition.x === position.x && lastClickPosition.y === position.y) {
    // O clique foi feito no mesmo lugar, então não faz nada
    return;
  }

  // Restante do seu código...

  lastClickPosition = position;
  
  // Restante do seu código...

  
  if (click01 == null) {
    click01 = imgclick;
  } else {
    click02 = imgclick;
  }


  console.log("primeiro click id: " + click01.id);
  console.log("segundo click id: " + click02.id);

  testPar();
}


function testPar() {
  
  if (click01.id === click02.id) {
    console.log("vc achou um par");
    encontrados++;
    click01 = null;
    click02 = null;
  
    if(encontrados == 4){
      placar++;
      pontosId.innerHTML = placar;
    
      setTimeout(() => {
        alert("Você encontrou todos os pares!");
      },500);
  
      setTimeout(() => {
        main.innerHTML = " ";
        renderCards();
      },2000);
      
      encontrados = 0;
    }


  } else {
    setTimeout(() => {
      click01.src = "./src/img/QuestionBlock.png";
      click02.src = "./src/img/QuestionBlock.png";

      click01 = null;
      click02 = null;
    }, 1000);


    console.log("vc nao achou o par");

  }




}



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

