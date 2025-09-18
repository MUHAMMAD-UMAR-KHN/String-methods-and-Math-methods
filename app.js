//---------------- chapter 21-25---------------------------

//Q1

var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var fullName = firstName + " " + lastName;
alert("greetings ", fullName);




//Q2

var mobileModel = prompt("Enter your favourite mobile phone model: ");
console.log("My favourite mobile model is", mobileModel);
console.log("Length of String:", mobileModel.length);




//Q3

var word = "Pakistani";
console.log("String:", word);
console.log("Index of n:", word.indexOf("n"));




//Q4

var word2 = "Hello world";
console.log("String:", word2);
console.log("Last Index of l:", word2.lastIndexOf("l"));



//Q5

var word3 = "Pakistani";
var searchLetter = [];
var flag = false;
for (let i = 0; i < word3.length; i++) {
    if (i == 3) {
        flag = true;
        searchLetter.push(word3[i]);
    }
}
console.log("String:", word3);
console.log("Character at index 3 is",searchLetter.toString());




//Q6

var firstName = prompt("Enter first name: ");
var lastName = prompt("Enter last name: ");
var fullName = firstName.concat(lastName);
alert("greetings ", fullName);




//Q7

var city = "Hyderabad";
var replacement = city.replace("Hyder","Islam");
console.log("City:", city);
console.log("After replacement:",replacement);




//Q8

var message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message.replaceAll("and", "&"));




//Q9

var numb = "472";
console.log("Value:",numb)
console.log("Type:",typeof numb);
var convertedNumb = Number(numb);
console.log("Value:",numb);
console.log("Type:",typeof convertedNumb);




//Q10

var userInput = prompt("Enter any word: ");
console.log("User Input:",userInput);
var convertedUserInput = userInput.toUpperCase();
console.log("Upper Case:",convertedUserInput);




//Q11

var userInput2 = prompt("Enter the statement: ");
console.log("Normal statement:",userInput2);
var words  = userInput2.toLowerCase().split(" ");
for(var i = 0; i<words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCaseText = words.join(" ")
console.log("Title Case:",titleCaseText);





//Q12

var number1 = 32.56;
console.log(`The number is ${number1} and its datatype before type conversion is ${typeof number1}`);
var strNumb = number1.toString();
console.log("Data type after type conversion: ",typeof strNumb);
var reqNumb = [];
for(let i = 0;i<strNumb.length;i++){
    if(strNumb[i] === "."){
        continue;
    }
    else{
        reqNumb.push(strNumb[i]);
    }
}
reqNumb = reqNumb.join().replaceAll(",","");
console.log(reqNumb);





//Q14

var item = prompt("Enter the item: ").toLowerCase();
var itemsList = ["cake","apple pie","cookie","chips","patties"];
var flag = false;
for(let i = 0; i <itemsList.length; i++){
    if(item == itemsList[i]){
        flag = true;
        console.log(`${itemsList[i]} is available at index ${i} in our bakery.`)
    }
}
if (flag === false) {
    console.log(`we are sorry. ${item} is not available in our bakery.`)
}




//Q13

var userName =prompt("Enter your username: ");
var checker = true;
for(let i = 0; i<userName.length; i++){
    if(userName[i] == "@" || userName[i] == "." || userName[i] == "," || userName[i] == "!"){
        checker = false;
        console.log("Username is not valid");
        break;
    }
}
if (checker == true) {
    console.log("Username is valid");
}




//Q16

var university = "University Of Karachi";
var splitedUniversity = university.split().toString();
for(let i = 0; i < splitedUniversity.length; i++){
    console.log(splitedUniversity[i]);
}





//Q17

var userWord = prompt("Enter the word: ");
var lastCharacter = userWord[userWord.length - 1];
console.log("user input:",userWord);
console.log("Last character of input:",lastCharacter);




//Q18

var sentence = "The quick brown fox jumps over the lazy dog".toLowerCase();
var splitedSentence = sentence.split(" ");
var theWord = [];
for(let i = 0; i< splitedSentence.length; i++){
    if(splitedSentence[i] == "the"){
        theWord.push(splitedSentence[i]);
    }
}
console.log("Text:",sentence);
console.log(`There are ${theWord.length} occurences of word "the". `);



//-----------------------chapter 26-30----------------------

//Q1

var int1 = 3.45214;
console.log("number:",int1);
console.log("Round off value:",Math.round(int1));
console.log("floor value:",Math.floor(int1));
console.log("ceil value:",Math.ceil(int1))




//Q2

var negInt = -2.673;
console.log(negInt);
console.log("round off value:",Math.round(negInt));
console.log("floor value:",Math.floor(negInt));
console.log("ceil value:",Math.round(negInt));




//Q3

var int2 = -4;
console.log(`The absolute value of ${int2} is`,Math.abs(int2));





//Q4

var diceValue = Math.random()*6;
console.log("random dice value:",Math.round(diceValue));




//Q5

var coinToss = Math.random() * 10;
var n = 2;
if(coinToss > 5){
    console.log(n)
    console.log("random coin value: Heads");
}
else{
    n = 1;
    console.log(n);
    console.log("random coin value: Tails");
}




//Q6

var integer = Math.random() * 100;
var realInteger = Math.floor(integer);
console.log("Random number between 1 and 100:",realInteger);




//Q7

var weight = prompt("Enter your weight in kg: ");
var actWeight = parseFloat(weight);
console.log("the weight of user is" + " " + actWeight + " " + "kilograms");




//Q8

var enterNumber = +prompt("Enter the number: ");
var randomNumber = Math.random() * 9;
var finalRandomNumber = Math.ceil(randomNumber);
if(enterNumber == finalRandomNumber){
console.log("Congratulation! you have guess the correct number");
}else{
console.log("Try Again!!!");
}