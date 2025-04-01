// notes - set timeout and clear timeput

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 7000);

document.querySelector("#cancel").addEventListener("click", () => {
  console.info(timerId);
  clearTimeout(timerId);
  console.info("Timer Cancelled");
});
