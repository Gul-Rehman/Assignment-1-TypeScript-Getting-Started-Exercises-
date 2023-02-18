function make_shirt(message, size) {
    if (message === void 0) { message = "I love TypeScript"; }
    if (size === void 0) { size = "large"; }
    console.log("The shirt is a ".concat(size, " and will have the message \"").concat(message, "\" printed on it."));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("I love TypeScript", "medium");
// Create a small shirt with a different message
make_shirt("TypeScript is awesome!", "small");
