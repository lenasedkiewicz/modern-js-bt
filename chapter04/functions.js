// Fahrenheit to Celsius

function getCelcius(F) {
  const celsius = ((F - 32) * 5) / 9;
  return celsius;
}

// console.log(getCelcius(32));
// console.log(getCelcius(100));

const getCelciusArrow = (F) => ((F - 32) * 5) / 9;
// console.log(getCelciusArrow(150));
console.log(`The temp outside is ${getCelciusArrow(140)}`);

// Return min and max values in an array
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7, 100]));
