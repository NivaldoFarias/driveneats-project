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
    selectedFood = 0;
    deSelectItem();
    allowPurchase(1);
  }
}
function selectDrink(id) {
  const collection = document.getElementsByClassName("selected-drink");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-drink");
    selectedDrink = element;
    allowPurchase(0);
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-drink");
    element.classList.toggle("selected-drink");
    selectedDrink = element;
  } 
  else if (collection.length != 0 && collection[0] == element){
    selectedDrink = 0;
    deSelectItem();
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
    selectedDessert = 0;
    deSelectItem();
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

  /*if (i == 0) {
    if (selectedItems === 3){
      toggleButton();
      element.innerHTML = `Fechar pedido`;
    }
    else if (selectedItems === 1){
      element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    }
    else if (selectedItems === 2){
      element.innerHTML = `Selecione ${3 - selectedItems} item para fechar o pedido`;
    }
  }
  else if (i == 2) {
    if (selectedItems === 2){
      element.innerHTML = `Selecione ${3 - selectedItems} item para fechar o pedido`;
    }
    else {
      element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    }
  }*/
}
function popUpToggle(element) {
  const scrollDisable1 = document.querySelector("body");
  scrollDisable1.classList.toggle("disable-scroll");

  const scrollDisable2 = document.querySelector(".options-container");
  scrollDisable2.classList.toggle("disable-scroll");

  const indexDeSelect = document.querySelector(".de-select");
  indexDeSelect.classList.toggle("hidden");
  if (!(indexDeSelect.classList.contains("hidden"))) {
    indexDeSelect.textContent = `Deseja remover ${element.children[1].innerHTML} dos selecionados?`;
  }
}
function deSelectItem() {
  if (selectedFood == 0) {
    let food = document.getElementsByClassName("selected-food");
    food.classList.toggle("selected-food");
  }
  else if (selectedDrink == 0) {
    let drink = document.getElementsByClassName("selected-drink");
    drink.classList.toggle("selected-drink");
  }else if (selectedDessert == 0) {
    let dessert = document.getElementsByClassName("selected-dessert");
    dessert.classList.toggle("selected-dessert");
  } 
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
/*function popUpPurchase() {
  const 
}*/