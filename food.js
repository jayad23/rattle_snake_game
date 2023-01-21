import { getRandomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

const getRandomFoodPosition = () => {
  let newFoodPosition;
  while(newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = getRandomGridPosition();
  }

  return newFoodPosition;
}

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;
export const update = () => {
  if(onSnake(food)){
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export const draw = (gameBoard) => {
  const foodElem = document.createElement("div");
  foodElem.style.gridRowStart = food.y;
  foodElem.style.gridColumnStart = food.x;
  foodElem.classList.add("food");
  gameBoard.appendChild(foodElem);
};