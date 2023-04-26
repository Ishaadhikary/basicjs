document.write("Hello World! I am cat."+ "<br><br>");
    for (num = 0; num < 50; num++ ){
        setTimeout(function() {
        var box = document.createElement('div')
        box.className = 'box';
        console.log(box);
        document.getElementById('container').appendChild(box);  
    },100*num);   
    }; 