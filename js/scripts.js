// back end
function Order(size, topping, age) {
  this.size = size;
  this.topping = topping;
  this.age = age;
}

Order.prototype.addSize = function() {
  var sizeOutput = 0;
  if (this.size.includes("Personal")) {
    sizeOutput += 10;
  }
  else if (this.size.includes("Medium")) {
    sizeOutput += 20;
  }
  else if (this.size.includes("Large")) {
    sizeOutput += 30;
  }
  else if (this.size.includes("Legacy Edition")) {
    sizeOutput += 40;
  };

  this.sizeOutput = sizeOutput;
  console.log(sizeOutput);
};

Order.prototype.addToppings = function() {
  var toppingsOutput = 0;
  if (this.topping.includes("Pepperoni")) {
    toppingsOutput += 10;
  }
  else if (this.topping.includes("Canadian")) {
  toppingsOutput += 20;
  }
  else if (this.topping.includes("Meatlover")) {
  toppingsOutput += 30;
  }
  else if (this.topping.includes("Legacy Edition")) {
  toppingsOutput += 40;
};

  this.toppingsOutput = toppingsOutput;
  console.log(toppingsOutput);
};

Order.prototype.addAge = function() {
  var ageOutput = 0;
  if (this.age <= 18 && this.age >= 1) {
    ageOutput += 10;
  }
  else if (this.age > 18 && this.age <=50) {
    ageOutput += 20;
  }
  else if (this.age > 51 && this.age <=99) {
    ageOutput += 30;
  }
  else if (this.age <= 122) {
    ageOutput += 40;
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
    var size = $("select#pizzaSize").val();
    var topping = $("select#pizzaToppings").val();
    var age = parseInt($("input#age").val());
    var pizzaTotal = new Order(size, topping, age)
    pizzaTotal.addSize();
    pizzaTotal.addAge();
    pizzaTotal.addToppings();
    pizzaTotal.pizzaPrice();
    $("p#pizzaResult").show();
    $("span#output").text(""+ pizzaTotal.pizzaOutcome + "");
});
});
