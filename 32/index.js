var currentUsers = ['Asad', 'Kashif', 'Asghar', 'Shujaat', 'Afzal'];
var newUsers = ['Asghar', 'Naveed', 'Furqan', 'Kashif', 'Rafay'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var lowerNewUser = newUser.toLowerCase();
    if (currentUsers.map(function (u) { return u.toLowerCase(); }).includes(lowerNewUser)) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
