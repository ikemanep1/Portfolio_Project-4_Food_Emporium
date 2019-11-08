// back end
function Order(size, topping, age) {
  this.size = size;
  this.topping = topping;
  this.age = age;
}

Order.prototype.sizeOutput = function() {
  var sizeOutput = 50;
  if (this.size.includes(10)) {
    sizeOutput += 10;
  }
  if (this.size.includes(20)) {
    sizeOutput += 20;
  }
  if (this.size.includes(30)) {
    sizeOutput += 30;
  }
  if (this.size.includes(100)) {
    sizeOutput += 100;
  }
  else {
    alert("please enter your desired pizza size")
  }
  this.sizeOutput = sizeOutput;
}

Order.prototype.toppingsOutput = function() {
  var toppingsOutput = 50;
  if (this.topping.includes(10)) {
    toppingsOutput += 10;
  }
  if (this.topping.includes(20)) {
    toppingsOutput += 20;
  }
  if (this.topping.includes(30)) {
    toppingsOutput += 30;
  }
  if (this.topping.includes(100)) {
    toppingsOutput += 100;
  }
  else {
    alert("please enter your desired toppings")
  }
  this.toppingsOutput = toppingsOutput;
};

Order.prototype.ageOutput = function() {
  var ageOutput = 50;
  if (this.age <=18) {
    ageOutput -=50
  }
  if (this.age >18 && this.age <=50) {
    ageOutput += 30
  }
  if (this.age >51 && this.age <=99) {
    ageOutput += 35
  }
  if (this.age >99) {
    ageOutput +=100
  }
  else {
    alert("please enter your age")
  }
  this.ageOutput = ageOutput;
};

Order.prototype.pizzaPrice = function() {
  var pizzaOutcome = sizeOutput + toppingsOutput + ageOutput;
}




// front end
$(document).ready(function(){
  $("#pizzaInputs").submit(function(event){
    event.preventDefault();
  var size = parseInt($("select#pizzaSize").val());
  var toppings = parseInt($("select#pizzaToppings").val());
  var age = parseInt($("input#age").val());
