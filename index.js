const readline = require('readline-sync');
let resultado = [];
let mediageral = [];

function capturarNotas1() {
  let quantMaterias = +readline.question(`Notas para quantas matérias deseja digitar? `);

  for (let i = 0; i < quantMaterias; i++) {
    let materia = readline.question(`${i + 1} - Digite o nome da matéria: `);
    let notas = [];

    for (let j = 0; j < 3; j++) {
      let nota = +readline.question(`${j + 1} - Digite a nota: `);
      notas.push(nota);
    }

    let media = 0;

    notas.forEach((value) => {
      media += value;
    });

    media = media / notas.length;

    let faltas = +readline.question(`Quantas faltas o aluno teve na matéria? `);

    let materiaObj = {
      nome: materia,
      media: media.toFixed(2),
      faltas: faltas
    };

    resultado.push(materiaObj);
    mediageral.push(media);
  }

  let totalGeral = 0;

 mediageral.forEach((value) => {
    totalGeral += value;
  });

  totalGeral = totalGeral / quantMaterias;

  console.log(" ");

  resultado.forEach((materia) => {
    console.log(`Na matéria ${materia.nome}, o aluno teve a nota média ${materia.media} e ${materia.faltas} faltas.`);
  });

  console.log("A média das notas de todas as matérias foi de", totalGeral.toFixed(2));

}

capturarNotas1();