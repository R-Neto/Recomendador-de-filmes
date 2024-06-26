// fantasia, aventura, drama

// a viagem de chihiro, livre, fantasia/aventura
// paddington, livre, fantasia/aventura
// as aventuras de pi. 10, drama/fantasia/aventura
// guardiões da galáxia, 12, fantasia/aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
// depois da chuva, 10, drama

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de filmes");
  createSpan("Escreva sua idade:");
  campoIdade = createInput("");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?")
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura){
          return "Homem-Aranha no Aranhaverso"
        } else{
        return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de Pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de Chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
