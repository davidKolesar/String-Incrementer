function incrementString(str){
  var lastLetterInString = str[str.length-1];
    switch(lastLetterInString){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(lastLetterInString)+1);//prevents 'foobar001' ending as 'foobar1000' or 1 as 10
            case '9': return incrementString(str.substring(0, str.length-1)) + 0; //If the last digit is a 9, change it to 0 and recursively call the function, but pass in the second to last digit as an argument
            default: return str+"1";// otherwise, just add 1 to the final digit
        }
}