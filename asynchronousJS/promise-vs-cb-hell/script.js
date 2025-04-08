function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// callback hell - when we keep passing callback within callback, like here:
getData("./movies.json", (data) => {
  console.info(data);
  getData("./actors.json", (data) => {
    console.info(data);
    getData("./directors.json", (data) => {
      console.info(data);
    });
  });
});

// that's why promises are soooo useful
