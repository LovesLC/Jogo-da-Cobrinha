Jogo da Cobrinha em JavaScript
Experimente o clássico jogo da cobrinha recriado em JavaScript, onde você controla uma cobra em busca de pontos. O jogo é renderizado em um canvas e utiliza o contexto 2D para criar uma experiência nostálgica e desafiadora.

Recursos
Inicie o jogo com um clique no botão "Iniciar".

Guie a cobra com as setas do teclado.

Movimente-a em todas as direções para coletar itens.

Aumente sua pontuação com cada item vermelho coletado.

O jogo acaba se a cobra colidir consigo mesma ou com as bordas.

A mensagem "Game Over" encerra a partida.

Reinicie o jogo a qualquer momento.

Estrutura do Código
O jogo é composto por funções que mantêm a lógica organizada:

update(): Gerencia o jogo, atualizando a posição da cobra, verificando colisões e desenhando na tela.

handleKeyPress(event): Altera a direção da cobra com base nas setas pressionadas.

gameOver(): Exibe a mensagem de fim de jogo e reseta a pontuação.

document.addEventListener("DOMContentLoaded", () => { ... }): Inicializa o jogo quando o HTML é carregado.

Como Jogar
Para jogar, inclua o código JavaScript em um arquivo HTML com um elemento <canvas id="gameCanvas"> e um botão <button id="inicia">Iniciar</button>. Abra o arquivo em um navegador e use as setas para controlar a cobra.

Desfrute deste jogo clássico e tente superar seu próprio recorde!