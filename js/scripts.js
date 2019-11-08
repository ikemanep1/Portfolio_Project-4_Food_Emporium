// back end
function Order(size, topping, age) {
  this.size = size;
  this.topping = topping;
  this.age = age;
}

Order.prototype.addSize = function() {
  var sizeOutput = 50;
  if (this.size = 10) {
    sizeOutput += 10;
  };
  if (this.size = 20) {
    sizeOutput += 20;
  };
  if (this.size = 30) {
    sizeOutput += 30;
  };
  if (this.size = 100) {
    sizeOutput += 100;
  };
  if (this.size = NaN) {
    alert("please enter your desired pizza size")
  };
  this.sizeOutput = sizeOutput;
  console.log(sizeOutput);
};

Order.prototype.addToppings = function() {
  var toppingsOutput = 50;
  if (this.topping = 10) {
    toppingsOutput += 10;
  };
  if (this.topping = 20) {
    toppingsOutput += 20;
  };
  if (this.topping = 30) {
    toppingsOutput += 30;
  };
  if (this.topping = 100) {
    toppingsOutput += 100;
  };
  if (this.topping = NaN) {
    alert("please enter your desired toppings")
  };
  this.toppingsOutput = toppingsOutput;
  console.log(toppingsOutput);
};

Order.prototype.addAge = function() {
  var ageOutput = 50;
  if (this.age <=18) {
    ageOutput -=50
  };
  if (this.age >18 && this.age <=50) {
    ageOutput += 30
  };
  if (this.age >51 && this.age <=99) {
    ageOutput += 35
  };
  if (this.age >99) {
    ageOutput +=100
  };
  if (this.age = NaN) {
   alert("please enter your age")
 };
  this.ageOutput = ageOutput;
  console.log(ageOutput);
};

Order.prototype.pizzaPrice = function() {
  var pizzaOutcome = this.sizeOutput + this.toppingsOutput + this.ageOutput;
  this.pizzaOutcome = pizzaOutcome
  console.log(pizzaOutcome);
};




// front end
$(document).ready(function(){
  $("#pizzaInputs").submit(function(event){
    event.preventDefault();
  var size = parseInt($("select#pizzaSize").val());
  var topping = parseInt($("select#pizzaToppings").val());
  var age = parseInt($("input#age").val());
  var pizzaTotal = new Order(size, topping, age)
  pizzaTotal.addSize();
  pizzaTotal.addAge();
  pizzaTotal.addToppings();
  pizzaTotal.pizzaPrice();

  $("p#results").text("Thank you for ordering! Your pizza is on the way, please pay "+ this.pizzaOutcome + ".00$");
  });
});
