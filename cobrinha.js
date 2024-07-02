document.addEventListener("DOMContentLoaded", () => {
  let iniciar = document.getElementById("inicia");
  iniciar.addEventListener("click", () => {
    update();
  });

  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");
  const gridSize = 10;
  const gridWidth = canvas.width / gridSize;
  const gridHeight = canvas.height / gridSize;
  let pontos = 0;
  let snake = [{ x: 10, y: 10 }];
  let direction = "right";

  let object = { x: 10, y: 10 };

  function update() {
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
      case "up":
        head.y -= 1;
        break;
      case "down":
        head.y += 1;
        break;
      case "left":
        head.x -= 1;
        break;
      case "right":
        head.x += 1;
        break;
    }
    if (
      head.x < 0 ||
      head.x >= gridWidth ||
      head.y < 0 ||
      head.y >= gridHeight
    ) {
      gameOver();
      return;
    }
    if (
      snake.some(
        (segment) =>
          segment.x === head.x && segment.y === head.y && segment !== head
      )
    ) {
      gameOver();
      return;
    }
    if (head.x === object.x && head.y === object.y) {
      object.x = Math.floor(Math.random() * gridWidth);
      object.y = Math.floor(Math.random() * gridHeight);
    } else {
      snake.pop();
    }

    snake.unshift(head);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    snake.forEach((segment) => {
      context.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize,
        gridSize
      );
    });
    context.fillStyle = "red";
    context.fillRect(
      object.x * gridSize,
      object.y * gridSize,
      gridSize,
      gridSize
    );
    context.fillStyle = "black";
    context.font = "20px Arial";
    setTimeout(update, 1000 / 25);
  }

  function handleKeyPress(event) {
    const key = event.key;
    if (key === "ArrowUp" && direction !== "down") {
      direction = "up";
    } else if (key === "ArrowDown" && direction !== "up") {
      direction = "down";
    } else if (key === "ArrowLeft" && direction !== "right") {
      direction = "left";
    } else if (key === "ArrowRight" && direction !== "left") {
      direction = "right";
    }
  }

  function gameOver() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.font = "30px Arial";
    context.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);

    pontos = 0;
  }

  document.addEventListener("keydown", handleKeyPress);
});
