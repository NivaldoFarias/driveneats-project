window.onload = toggleButton();
let selectedFood = null;
let selectedDrink = null;
let selectedDessert = null;

function selectFood(id) {
  const collection = document.getElementsByClassName("selected-food");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-food");
    allowPurchase(0);
    selectedFood = element;
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-food");
    element.classList.toggle("selected-food");
    selectedFood = element;
  } 
  else if (collection.length != 0 && collection[0] == element){
    selectedFood = null;
    deSelectFood(element);
    allowPurchase(1);
  }
}
function selectDrink(id) {
  const collection = document.getElementsByClassName("selected-drink");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-drink");
    allowPurchase(0);
    selectedDrink = element;
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-drink");
    element.classList.toggle("selected-drink");
    selectedDrink = element;
  } 
  else if (collection.length != 0 && collection[0] == element){
    selectedDrink = null;
    deSelectDrink(element);
    allowPurchase(1);
  }
}
function selectDessert(id) {
  const collection = document.getElementsByClassName("selected-dessert");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-dessert");
    selectedDessert = element;
    allowPurchase(0); // 0 = first element since load to be selected
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-dessert");
    element.classList.toggle("selected-dessert");
    selectedDessert = element;
  } 
  else if (collection.length != 0 && collection[0] == element)
  {
    selectedDessert = null;
    deSelectDessert(element);
    allowPurchase(1); // 1 = element de-selected, clear section 
  }
}
function allowPurchase(i) {
  const foodOpted = document.getElementsByClassName("selected-food");
  const drinkOpted = document.getElementsByClassName("selected-drink");
  const dessertOpted = document.getElementsByClassName("selected-dessert");
  const selectedItems = (foodOpted.length + drinkOpted.length + dessertOpted.length);
  const element = document.getElementById("btn");

  if (i == 0) {
    if (selectedItems == 3){
      toggleButton();
      element.innerHTML = `Fechar pedido`;
    }
    else if (selectedItems == 2){
      element.innerHTML = `Selecione ${3 - selectedItems} item para fechar o pedido`;
    }
    else if (selectedItems == 1){
      element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    }
  }
  else if (i == 1) {
    if (selectedItems == 2){
      toggleButton();
      element.innerHTML = `Selecione ${3 - selectedItems} item para fechar o pedido`;
    }
    else if (selectedItems == 1){
      element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    }
    else if (selectedItems == 0){
      element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    }
  }
}
/* function popUpDeSelectDessert(element) {
  const scrollDisable1 = document.querySelector("body");
  scrollDisable1.classList.toggle("disable-scroll");

  const scrollDisable2 = document.querySelector(".options-container");
  scrollDisable2.classList.toggle("disable-scroll");

  const indexDeSelect = document.querySelector("de-select");
  indexDeSelect.classList.toggle("hidden");

  
} */
function deSelectFood(element) {
  element.classList.remove("selected-food");
  
}
function deSelectDrink(element) {
  element.classList.remove("selected-drink");
}
function deSelectDessert(element) {
  element.classList.remove("selected-dessert");
  allowPurchase();
}
function toggleButton() {
  const btn = document.getElementById("btn");
  if (btn.disabled) {
    btn.disabled = false;
  }
  else if (!btn.disabled){
    btn.disabled = true;
  }
}
function sendPurchase() {
  const phoneNumber = prompt("Digite seu número. (Ex.: 55XX93928398)");
  let foodPrice = parseFloat(selectedFood.children[3].innerText.replace(',', '.').substr(3,7));
  let drinkPrice = parseFloat(selectedDrink.children[3].innerText.replace(',', '.').substr(3,6));
  let dessertPrice = parseFloat(selectedDessert.children[3].innerText.replace(',', '.').substr(3,6));

  let totalPrice = (foodPrice + drinkPrice + dessertPrice).toFixed(2);

  let message = `Olá, gostaria de fazer o pedido: \n- *Prato:* _${selectedFood.children[1].innerText}_\n- *Bebida:* _${selectedDrink.children[1].innerText}_\n- *Sobremesa:* _${selectedDessert.children[1].innerText}_\n*Total:* _R$ ${totalPrice}_`;
  let encodedMessage = encodeURIComponent(message);

  window.location.replace(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
}
/*function popUpPurchase() {
  const 
}*/