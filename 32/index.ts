const currentUsers= ['Asad', 'Kashif', 'Asghar', 'Shujaat', 'Afzal'];
const newUsers = ['Asghar', 'Naveed', 'Furqan', 'Kashif', 'Rafay'];

for (let newUser of newUsers) {
  const lowerNewUser = newUser.toLowerCase();
  if (currentUsers.map(u => u.toLowerCase()).includes(lowerNewUser)) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}
