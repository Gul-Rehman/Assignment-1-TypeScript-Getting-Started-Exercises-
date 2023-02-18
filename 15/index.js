var guestList = ['Kashif', 'Abdullah', 'Rafay'];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my home."));
});
console.log(guestList[2] + " will not be able to make to dinner");
// guestList[2].replace(guestList[2],"Ahsan");
guestList[2] = "Ahsan";
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to a dinner party at my home."));
});
