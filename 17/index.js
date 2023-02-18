var guestList = ["Kashif", "Abdullah", "Rafay"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my home."));
});
console.log(guestList[2] + " will not be able to make to dinner");
guestList[2] = "Ahsan";
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my home."));
});
console.log("Hello, I have found a bigger dinner table");
guestList.unshift("Asad");
guestList.splice(2, 0, "Asghar");
guestList.push("Rizwan");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my home."));
});
console.log("I am so sorry to all of you , but I can invite only 2 people to dinner");
console.log(guestList);
do {
    console.log("Dear ".concat(guestList.pop(), ", I am sorry due to shortage of space , I can't invite you to the dinner")); //  Rizwan       Ahsan  Abdullah    Asghar        
    // console.log();
} while (guestList.length > 2); //5       4         3           2
console.log(guestList);
