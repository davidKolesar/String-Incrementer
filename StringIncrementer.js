/**
 * Function to increment numbers on the end of a string 
 * - argument: String to be incremented.

 * @typedef {{argument: String}}
 * @public
 */
function incrementString (argument) 
{

	//check if parameter is null
	if(argument === null) 
	{
		console.log("Parmeter is null");
		return 1;
	}

	//check if parameter contains numbers
	var chars = argument.split('');
	var containsNumber = false;
	var numbersWithinString = [];
	var numbersToReturn = [];
	var lettersWithinString = [];
	var incrementDigits = false;


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
	  
	  var argumentSansLastZero = argument.substring(0, argument.length - 1);
	  return argumentSansLastZero + 1;
	}

	//add numbers
	var argumentNumberWithCommas = numbersWithinString.toString();
	var argumentNumberWithoutCommas = argumentNumberWithCommas.replace(/\,/g,"");
	var argumentNumber = parseInt(argumentNumberWithoutCommas);

	//count number of digits
	var originalDigits = argumentNumber.toString().length;

	//add 1 to argument
	argumentNumber++;

	//count new number of digits
	var newDigits = argumentNumber.toString().length;

	if(originalDigits < newDigits)
	{
	  incrementDigits = true;
	}

	//combine String of argument with numbers
	var argumentLettersWithCommas = lettersWithinString.toString();
	var argumentLettersWithoutCommas = argumentLettersWithCommas.replace(/\,/g,"");;
	var allPreceedingZeros = "";

	//check if digits increased
	if(incrementDigits) 
	{
	  preceedingZeros--;
	}

	for(var i = 0; i < preceedingZeros; i++)
	{
	  allPreceedingZeros = allPreceedingZeros + "0";
	}
	
	 return argumentLettersWithoutCommas + allPreceedingZeros.toString() + argumentNumber; 
}