function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order: ".concat(items.join(", ")));
}
// Call the function with different numbers of arguments
sandwichOrder("ham", "cheese", "lettuce");
sandwichOrder("turkey", "bacon", "avocado", "tomato");
sandwichOrder("peanut butter", "jelly");
