
 // Business logic for Pizza

function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.toppingsPrice = function(){
    if(this.toppings.length != 0){
        let toppingsPrice = this.toppings.length *5;
        return toppingsPrice;
    } else {
        alert ("Please choose a topping!");
    }
}

Pizza.prototype.sizePrice = function() {
    if(this.size === "Medium") {
        return 10;
    } else if(this.size === "Large"){
        return 15;
    } else {
        alert ("Please choose a size!");
    }
}

Pizza.prototype.completeOrder = function(toppingsPrice, sizePrice){
    let orderTotal =toppingsPrice + sizePrice;
    $("#displayOrderTotal").html(orderTotal);
}

let pizza;
$(document).ready(function(){
    $("#formid").submit(function(event){
        event.preventDefault();
        $("#order-Total").show();
        let userName = $("#name").val();
        let userToppings = parseInt($("#toppingsAmount").val());
        let toppingAdd = [];
        $("input:checkbox[name = toppingCheck]:checked").each(function(){
        let userToppings = $(this).val();
        toppingAdd.push(userToppings);
        $("#displayToppings").text(userToppings)
    });

        let userSize =$("input:radio[name = sizePizza]:checked").val();
        $("#displayName").text(userName);
        $("#displaySize").text(userSize);

        pizza = new Pizza(toppingAdd,userSize);

        let toppingsPrice = pizza.toppingsPrice();
        let sizePrice = pizza.sizePrice();
        pizza.completeOrder(toppingsPrice, sizePrice);
    });
});