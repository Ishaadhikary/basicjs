var word = "COMING SOON..."
for (num = 0; num < word.length; num++ ){
    (function(num){
        setTimeout(function() {
            console.log(num);
            letter = word.split("");
            console.log(letter);
            document.write(letter[num]);  
            console.log(letter[num])
    },100*num);})(num); 
    }; 