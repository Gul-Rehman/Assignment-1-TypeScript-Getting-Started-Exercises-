var personname = "Gul Rehman";
var titlecase = '';
var sentence = personname.toLowerCase().split(" ");
for (var i = 0; i < sentence.length; i++) {
    titlecase += sentence[i][0].toUpperCase() + sentence[i].slice(1) + ' ';
}
titlecase = titlecase.trim();
console.log(personname.toUpperCase());
console.log(personname.toLowerCase());
console.log(titlecase);
