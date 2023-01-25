import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection  } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

const formEl = document.querySelector("form");
const selectEl = document.getElementById("speed");

let speed;

const Game = () => {
  let lastRenderTime = 0;
  const Board = document.getElementById("root");
  let gameOver = false;

  const main = (currentTime) => {
    if(gameOver){
      if(confirm("You lost. Press ok to restart.")){
        window.location = "/"
      }
      return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / speed) return;

    lastRenderTime = currentTime;

    update();
    draw();
  }

  window.requestAnimationFrame(main);

  const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }

  const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
  }

  const draw = () => {
    Board.innerHTML = '';
    drawSnake(Board);
    drawFood(Board);
  }
}

//Game();

selectEl.addEventListener("change", (e) => {
  speed = Number(e.target.value);
})

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  if(speed === undefined){
    speed = 2;
  }
  formEl.classList.add("hide");
  Game();
})