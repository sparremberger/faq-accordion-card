/* Esses são os elementos que contém o texto que será exibido
   ao clicar para expandir em seu respectivo tópico. */
var respostas = [
  document.getElementById("text-1"),
  document.getElementById("text-2"),
  document.getElementById("text-3"),
  document.getElementById("text-4"),
  document.getElementById("text-5"),
];

/* Os próximos elementos contém o texto do botão, que ficará
   em negrito quando o tópico for selecionado. */
var botoes = [
  document.getElementById("button-1"),
  document.getElementById("button-2"),
  document.getElementById("button-3"),
  document.getElementById("button-4"),
  document.getElementById("button-5"),
];

/* Em seguida temos os valores booleanos para descrever o
   estado do botão, ou seja, se ele atualmente exibe seu
   conteúdo ou não. */
var show = [false, false, false, false, false];

function showText(clickedButton) {
  /* clickedButton retorna o objeto inteiro, e a propriedade id retorna um array com cada caractere do id no HTML.  */
  /* Como arrays tem base 0, diminui-se 1 da posição 7 (que é onde fica o número) para obter o numero do botão clicado */
  var botaoClicado = clickedButton.id[7] - 1;
  if (!show[botaoClicado]) { /* Se o botão não está exibindo seu conteúdo... */
    show[botaoClicado] = true;
    respostas[botaoClicado].style.display = "block";
    botoes[botaoClicado].style.fontWeight = 700;

    for (i = 0; i < show.length; i++) {
      if (i != botaoClicado) {
        show[i] = false;
        respostas[i].style.display = "none";
        botoes[i].style.fontWeight = 300;
      }
    }
  } else { /* Caso ele esteja exibindo seu conteúdo ao ser clicado... */
    show[botaoClicado] = false;
    respostas[botaoClicado].style.display = "none";
    botoes[botaoClicado].style.fontWeight = 300;
  }
}
