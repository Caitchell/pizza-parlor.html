
 // Business logic for Pizza

function Pizza(toppings, size) {
    this.toppings = this.toppings;
    this.size = this.size;
}

Pizza.prototype.price = function() {
    if(this.size === "Medium") {
        return 10;
    } else if(this.size === "Large"){
        return 15;
    } else {
        alert ("Must choose size!")
    }
}
    
// Business Logic for PizzaOrder

function PizzaOrder(Pizzas, orderTotal) {
    this.pizzas = [];
    this.price
}

// Business logic for OderTotal
