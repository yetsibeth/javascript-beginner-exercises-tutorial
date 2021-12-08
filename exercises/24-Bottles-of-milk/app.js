var i = 99;

while(i > 0){
    var letra = '';
    if(i > 1){
        letra = letra + i + " bottles of milk on the wall, " + i + " bottles of milk. ";
    }
    else{
        letra = letra + i + " bottle of milk on the wall, " + i + " bottle of milk. ";
    }
    i --;
    if(i > 1 ){
        letra = letra + "Take one down and pass it around, " + i + " bottles of milk on the wall.";
    }else{
        letra = letra + "Take one down and pass it around, no more bottles of milk on the wall.";
        letra = letra + "No more bottles of milk on the wall, no more bottles of milk. ";
        letra = letra + "Go to the store and buy some more, 99 bottles of milk on the wall.";
    }
    
    console.log(letra);
}
