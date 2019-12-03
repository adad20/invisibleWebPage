function animate(obj){
	obj.style.color =  'red';
}

function hideShow(obj){
    obj.style.visibility = 'hidden';
}

function fade(element) {
   element.style.opacity = '0' ;
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}