const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getJoke() {
  joke.innerHTML = "Loading";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      joke.innerHTML = data.value;
    }
  };

  xhr.send();
}

getJoke();

jokeBtn.addEventListener("click", getJoke);
