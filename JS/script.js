window.onload = toggleButton();

function selectFood(id) {
  const collection = document.getElementsByClassName("selected-food");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-food");
    allowPurchase(0);
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-food");
    element.classList.toggle("selected-food");
  } 
  else if (collection.length != 0 && collection[0] == element){
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
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-drink");
    element.classList.toggle("selected-drink");
  } 
  else if (collection.length != 0 && collection[0] == element){
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
    allowPurchase(0); // 0 = first element since load to be selected
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-dessert");
    element.classList.toggle("selected-dessert");
  } 
  else if (collection.length != 0 && collection[0] == element)
  {
    deSelectDessert(element);
    allowPurchase(1); // 1 = element de-selected, clear section 
  }
}
function selectItem(id, section) {
  const selected = document.getElementsByClassName("selected");
  const section = document.getElementsByClassName(section);
  const element = document.getElementById(id);
  
  if (selected.length == 0)
  {
    element.classList.toggle("selected");
    allowPurchase(0);
  }
  for (let i = 0; i < selected.length; i++){
    if (selected[i] == element){
      deSelectFood(element);
      allowPurchase(1);
    }
    /* else if ()
    {
      selected[i].classList.toggle("selected");
      element.classList.toggle("selected");
    }  */
  }
}
function allowPurchase(i) {
  const foodOpted = document.getElementsByClassName("selected-food");
  const drinkOpted = document.getElementsByClassName("selected-drink");
  const dessertOpted = document.getElementsByClassName("selected-dessert");
  const selectedItems = (foodOpted.length + drinkOpted.length + dessertOpted.length);
  const element = document.getElementById("btn");

  if (!i) // same as if i == 0
  {
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
  else if (i) // same as if == 1
  {
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
function popUpDeSelectDessert(element) {
  const scrollDisable1 = document.querySelector("body");
  scrollDisable1.classList.toggle("disable-scroll");

  const scrollDisable2 = document.querySelector(".options-container");
  scrollDisable2.classList.toggle("disable-scroll");

  const indexDeSelect = document.querySelector("de-select");
  indexDeSelect.classList.toggle("hidden");

  
}
function deSelectFood(element) {
  element.classList.remove("selected-food");
}
function deSelectDrink(element) {
  element.classList.remove("selected-drink");
}
function deSelectDessert(element) {
  element.classList.remove("selected-dessert");
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