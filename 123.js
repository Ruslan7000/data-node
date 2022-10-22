function add(){
    console.log(arguments);
    var sum = 0;
    for ( var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(3, 4, 7));
console.log(add(3, 4, 6, 7));