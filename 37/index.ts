function make_shirt(message: string = "I love TypeScript", size: string = "large") {
  console.log(`The shirt is a ${size} and will have the message "${message}" printed on it.`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("I love TypeScript", "medium");

// Create a small shirt with a different message
make_shirt("TypeScript is awesome!", "small");
