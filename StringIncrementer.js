function incrementString() 
{

argument = "foobar001";

//check if parameter is null
if(argument === null) 
{
console.log("return null");
  return 1;
}

//check if parameters contain numbers
var chars = argument.split('');
var containsNumber = false;
var numbersWithinString = [];
var numbersToReturn = [];
var lettersWithinString = [];


for(var i = 0; i < chars.length; i++) 
{
  if(isNaN(parseFloat(chars[i])))
  {
      lettersWithinString.push(chars[i]);
  } 
  else 
  {
    containsNumber = true;
    numbersWithinString.push(chars[i]);
  }
}

  if(containsNumber === false)
  {
   return argument + 1;
  } 
 
 var preceedingZeros = 0;
 
//handle adding with preceeding digits of zeros
for(var i = 0; i < numbersWithinString.length; i++)
{
console.log("counting zeros in " + numbersWithinString[i]);
//count zeros
if(numbersWithinString[i] === "0") 
{
console.log("Here is a zero!");
   preceedingZeros++;
} 

}

//handle if all zeros
if(preceedingZeros === numbersWithinString.length)
{
  console.log("All of the numbers are zero");
  preceedingZeros--;
  return argument + preceedingZeros + 1;
}


//add numbers
var argumentNumberWithCommas = numbersWithinString.toString();
var argumentNumberWithoutCommas = argumentNumberWithCommas.replace(/\,/g,"");
var argumentNumber = parseInt(argumentNumberWithoutCommas);
argumentNumber++;


//combine String of argument with numbers
var argumentLettersWithCommas = lettersWithinString.toString();
var argumentLettersWithoutCommas = argumentLettersWithCommas.replace(/\,/g,"");;
var allPreceedingZeros = "";


for(var i = 0; i < preceedingZeros; i++)
{
  allPreceedingZeros === allPreceedingZeros + "0";
}

 return argumentLettersWithoutCommas + allPreceedingZeros.toString() + argumentNumber;
 
}