
 // Business logic for Pizza

function Pizza(toppings, size) {
    this.toppings = this.toppings;
    this.size = this.size;
}

Pizza.prototype.toppingsPrice = function(){
    if(this.toppings.length != 0){
        let toppingsPrice = this.toppings.length + 1;
        return toppingsPrice;
    }else {
        alert("Must choose atleast one topping!")
    }
}

Pizza.prototype.sizePrice = function() {
    if(this.size === "Medium") {
        return 10;
    } else if(this.size === "Large"){
        return 15;
    } else {
        alert ("Must choose size!")
    }
}

Pizza.prototype.completeOrder = function(toppingsPrice, sizePrice) {
    let orderTotal = toppingsPrice + sizePrice;
    return orderTotal;
}

// Business logic for OderTotal
