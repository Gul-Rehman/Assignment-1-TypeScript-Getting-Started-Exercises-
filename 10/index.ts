// Name : Gul Rehman
// Date : 11 Feb,2022
// This program will print the person's name in lower case, upper case and title case


const personname = "Gul Rehman";
let titlecase = '';
var sentence = personname.toLowerCase().split(" ");
for (var i = 0; i < sentence.length; i++) {
    titlecase += sentence[i][0].toUpperCase() + sentence[i].slice(1) + ' ';
}
titlecase = titlecase.trim()



console.log(personname.toUpperCase());
console.log(personname.toLowerCase());
console.log(titlecase);


// Name : Gul Rehman
// Date : 11 Feb,2022
// This program will print the the author name and his quote.



const quote='It is not in the stars to hold our destiny but in ourselves.';
const authorName='Wllliam Shakespeare';


console.log(`${authorName} once said,"${quote}"`);
