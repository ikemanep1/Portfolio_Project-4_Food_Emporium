// back end
function Order(size, topping, age) {
  this.size = size;
  this.topping = topping;
  this.age = age;
}

Order.prototype.sizeOutput = function() {
  var pizzaPrice = 50;

  if (this.size.includes(10)) {
    pizzaPrice += 10;
  };

  if (this.size.includes(20)) {
    pizzaPrice += 20;
  };

  if (this.size.includes(30)) {
    pizzaPrice += 30;
  };
  if (this.size.includes(100)) {
    pizzaPrice += 100;
  };
  this.sizeOutput = sizeOutput;
};






// front end
$(document).ready(function(){
  $("#pizzaInputs").submit(function(event){
    event.preventDefault();
  var size = parseInt($("select#pizzaSize").val());
  var toppings = parseInt($("select#pizzaToppings").val());
  var age = parseInt($("input#age").val());
