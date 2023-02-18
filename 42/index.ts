function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}

// Test the functions
const magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
const great_magicians: string[] = make_great(magicians);
show_magicians(great_magicians);
