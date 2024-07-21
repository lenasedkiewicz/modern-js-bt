// Fahrenheit to Celsius

function getCelcius(F) {
  const celsius = ((F - 32) * 5) / 9;
  return celsius;
}

console.log(getCelcius(32));
console.log(getCelcius(100));

const getCelciusArrow = (F) => ((F - 32) * 5) / 9;
console.log(getCelciusArrow(150));
