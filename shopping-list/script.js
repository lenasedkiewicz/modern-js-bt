const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  //Validate input
  if (itemInput.value === "") {
    alert("Please add an item");
    return;
  }

  console.info("Success");
}

// Event listeners - keeping them on the bottom
itemForm.addEventListener("submit", addItem);
