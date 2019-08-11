var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var newItem = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else {
    if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    if (cart.length >= 3){
    for (var i = 0; i < cart.length; i++)
    return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}, and ${cart[i+2].itemName} at $${cart[i+2].itemPrice}.`
    }
  }
    }
  }
}

function total() {
  // write your code here
var sum = 0;
for (var i = 0; i < cart.length; i++){
return sum += cart[i][1].itemPrice
}
}

function removeFromCart(item) {
  // write your code here
    for (var i = 0; i < cart.length; i++){
    var string = `That item is not in your cart.`
    if (item === cart[i].itemName){
      cart.splice(i, 1)
      return cart
    }
    else if(item !== cart[i].itemName){
    return string
    }
    }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    cart.splice(0, cart.length)
    console.log (`Your total cost is ${total}, which will be charged to the card ${cardNumber}.`)
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}

