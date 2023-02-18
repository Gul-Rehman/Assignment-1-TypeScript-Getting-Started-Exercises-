var usersnames = ['admin', 'Shujaat', 'Afzal', 'Furqan', 'Zeeshan'];
// Checking if User List is empty or not
if (usersnames.length == 0) {
    console.log('We need to find some users!');
}
else {
    // Printing Greeting Message for users
    for (var i = 0; i < usersnames.length; i++) {
        if (usersnames[i] === "Admin") {
            console.log("Hi ".concat(usersnames[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Welcome back ".concat(usersnames[i], ", thank you for logging in again"));
        }
    }
}
// Removing All users from list
for (var i = usersnames.length; i > 0; i--) {
    usersnames.pop();
}
console.log(usersnames);
console.log('We need to find some users!');
