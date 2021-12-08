function sing(){
    var s = '';
    for(var i = 0; i < 4; i++){
        s = s + 'let it be, ';
    }
    s = s + 'whisper words of wisdom, ';
    for(var i = 0; i < 5; i++){
        s = s + 'let it be, ';
    }
    s = s + 'there will be an answer, ';
    s = s + 'let it be';
    return s;
}

//Your code above ^^^

console.log(sing());