// Original array of magicians
const magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Function to show magicians
function show_magicians(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

// Function to modify the array of magicians
function make_great(magicians: string[]): string[] {
  const great_magicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push(`The Great ${magicians[i]}`);
  }
  return great_magicians;
}

// Call make_great with a copy of the original array
const great_magicians = make_great([...magicians]);

// Show the original array and the modified array
console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(great_magicians);
