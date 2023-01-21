const Grid_Size = 21;
export const getRandomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * Grid_Size) + 1,
    y: Math.floor(Math.random() * Grid_Size) + 1
  }
};


const check = (pos) => {
  return pos < 1 || pos > Grid_Size;
}
export const outsideGrid = (position) => {
  const x_check = check(position.x);
  const y_check = check(position.y);

  return ( x_check || y_check );
}