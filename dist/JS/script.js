function selectFood(id) {
  const collection = document.getElementsByClassName("selected-food");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-food");
    allowPurchase();
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-food");
    element.classList.toggle("selected-food");
    allowPurchase();
  } 
  else if (collection.length != 0 && collection[0] == element){
    const sel = parseInt(prompt("Deseja remover o item selecionado? 1/0"));
    if (sel === 1) {
      element.classList.remove("selected-food");
      allowPurchase();
    }
  }
  
}
function selectDrink(id) {
  const collection = document.getElementsByClassName("selected-drink");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-drink");
    allowPurchase();
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-drink");
    element.classList.toggle("selected-drink");
    allowPurchase();
  } 
  else if (collection.length != 0 && collection[0] == element){
    const sel = parseInt(prompt("Deseja remover o item selecionado? 1/0"));
    if (sel === 1) {
      element.classList.remove("selected-drink");
      allowPurchase();
    }
  }
}
function selectDessert(id) {
  const collection = document.getElementsByClassName("selected-dessert");
  const element = document.getElementById(id);
  
  if (collection.length == 0)
  {
    element.classList.toggle("selected-dessert");
    allowPurchase();
  }
  else if (collection.length != 0 && collection[0] != element)
  {
    collection[0].classList.toggle("selected-dessert");
    element.classList.toggle("selected-dessert");
    allowPurchase();
  } 
  else if (collection.length != 0 && collection[0] == element)
  {
    const sel = parseInt(prompt("Deseja remover o item selecionado? 1/0"));
    if (sel === 1) {
      element.classList.remove("selected-dessert");
      allowPurchase();
    }
  }
}
function allowPurchase() {
  const foodOpted = document.getElementsByClassName("selected-food");
  const drinkOpted = document.getElementsByClassName("selected-drink");
  const dessertOpted = document.getElementsByClassName("selected-dessert");
  const selectedItems = (foodOpted.length + drinkOpted.length + dessertOpted.length);
  const element = document.querySelector("button");

  if (selectedItems === 3){
    element.classList.remove("disabled");
    element.innerHTML = `Fechar pedido`;
  }
  else if (selectedItems === 1){
    element.innerHTML = `Selecione ${3 - selectedItems} itens para fechar o pedido`;
    element.classList.add("disabled");
  }
  else {
    element.innerHTML = `Selecione ${3 - selectedItems} item para fechar o pedido`;
     element.classList.add("disabled");
  }
}