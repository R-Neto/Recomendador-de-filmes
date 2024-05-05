// fantasia, aventura, drama

// a viagem de chihiro, livre, fantasia/aventura
// paddington, livre, fantasia/aventura
// as aventuras de pi. 10, drama/fantasia/aventura
// guardiões da galáxia, 12, fantasia/aventura
// ladrões de bicicleta, 12, drama 
// o menino que descobriu o vento, 14, drama

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("Escreva sua Idade");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade){
  if(idade >= 10){
    if(idade >= 14){
      return "O menino que descobriu o vento"
    } else{
    return "As aventuras de Pi";
    }
  } else{
  return "A viagem de Chihiro";
  }
}