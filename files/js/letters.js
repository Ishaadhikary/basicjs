function howManyLetters(word){
    return word.length;
};

var word = prompt("Enter The word you want to pass:");
console.log(word);
console.log(typeof word);
totalLetters = howManyLetters(word);
document.write("Letter Count: " + totalLetters);

/*For loop practice*/
for(num = 0; num<=5; num++){
    document.write("<h5>" + num + "</h5>");
}