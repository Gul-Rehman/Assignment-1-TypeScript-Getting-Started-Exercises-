let guestList = ["Kashif", "Abdullah", "Rafay"];

guestList.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are cordially invited to a dinner party at my home.`
  );
});

console.log(guestList[2] + " will not be able to make to dinner");

guestList[2] = "Ahsan";

guestList.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are cordially invited to a dinner party at my home.`
  );
});
