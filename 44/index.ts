function sandwichOrder(...items: string[]): void {
  console.log(`Sandwich order: ${items.join(", ")}`);
}

// Call the function with different numbers of arguments
sandwichOrder("ham", "cheese", "lettuce");
sandwichOrder("turkey", "bacon", "avocado", "tomato");
sandwichOrder("peanut butter", "jelly");
