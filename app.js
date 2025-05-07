/* Assignment Age Calculate
let age = parseInt(prompt("Enter Your Age: "));
if (isNaN(age) || age < 0 || age > 90) 
{
    alert("Invalid input. Please enter a valid age between 0 and 90.");
}  
    else 
{
    let Age = age * 52;
    let totalAge = 90 * 52; 
    let result = totalAge - Age; 
    alert("Your age in weeks is" + Age);
    alert("You have "+result+" weeks left with an estimated life of 90 years ");
}*/

/* Assignment 2 Average 
let sum = 0;
for (let i = 1; i <= 10; i++) 
    
{
  let age = parseInt(prompt(`Enter the age of student ${i}:`));
  sum += age;
}

let average = sum / 10;
alert("The average age is: " + average);
*/

/* Assignment 3 BMI calculations
let weight = prompt("Enter weight of a person in kilograms:");
weight = parseFloat(weight);

let height = prompt("Enter height of a person in meters:");
height = parseFloat(height);

let BMI = weight / (height ** 2);
alert("BMI Calculation for the height: " + height + " and weight: " + weight + " is = " + BMI);
*/

/* Assignment 4 Calculator
let num1= prompt("Enter first number");
num1=parseFloat(num1);

let num2= prompt("Enter second number");
num2=parseFloat(num2);

let sum= num1+num2;
alert("The sum is "+sum);

let choice= prompt("Which operation do you want to perform? Add, Sub, Mul, Div");

if (choice === "Add")
{
    let result= num1+num2;
    alert("The Addition is "+result);
}

else if(choice === "Sub")
   {
    if(num1>num2) {
        let result= num1-num2;
        alert("The subtraction is "+result);
    }
    else {
        let result= num2-num1;
        alert("The subtraction is "+result);
    }
   }

   else if (choice === "Mul")
    {
        let result= num1*num2;
        alert("The Multiplication is "+result);
    }

   else if (choice === "Div")
       {
        if(num2 === 0)
        {
            alert("Undefinedd(Not divisible by 0)");
        }
        else{
            let result=num1/num2;
            alert("The Quotient is "+result);
        }
       }

       else{
        
        alert("Invalid Number");
       }
*/

/* Assignment 5  Circle calculations
let radius= prompt("Enter radius:");
radius=parseFloat(radius);

alert("The radius is "+radius);

let diameter= radius*2;
alert("The Diameter is "+diameter);

let circle= radius*radius;
alert("The Area is "+circle);

let result= 2*radius*3.14;
alert("The Circumference is "+result);
*/

/* Assignment 6 Even check
function isEven()
{
    let x = prompt("Enter any number you want to check: ");

    if( x%2==0)
    {
        alert("The number you enterd is an EVEN number.")
    }
    else{
        alert("The number is ODD.")
    }
}
isEven();
*/

/* Assignment 7 Favourite color
function colorMessage()
{
    let x = prompt('Enter Your favourite color: ');
    let y =  prompt('Enter Your shirt color: ');
   
    if(x===y)
        {
            alert('The shirt is your favourite color:)');
        }
    
        else{
            alert('That is a nice color...');
    }
}
colorMessage ();
*/

/* Assignment 8 Final Grade
function finalGrade()
{
    let x = parseInt(prompt("Enter number of sub 1: "));
    let y = parseInt(prompt("Enter number of sub 2: "));
    let z = parseInt(prompt("Enter number of sub 3: "));
    let avg = ((x+y+z)/3);

    if (avg >= 0 && avg<=59 )
    {
        return "Grade F";
    }
    else if (avg >= 60 && avg<=69 )
        {
            return "Grade D";
        }
    else if (avg >= 70 && avg<=79 )
        {
                return "Grade C";
        }
    else if (avg >= 80 && avg<=89 )
        {
             return "Grade B";
         }
    else if (avg >= 90 && avg<=100 )
        {
            return "Grade A";
        }
}


let grade = finalGrade();
alert(grade);   
*/

/* Assignment 9 Keyless car
let age1= prompt("Enter your age: ");
let age= parseInt(age1);
{
    
if(age === 18)
    {
       alert("Congratulations on your first year of driving. Get your Ride");
    }

else if (age > 18 && age <= 90)
{
    alert("Powering ON. Enjoy the Ride");
}

else if (age < 18 )
    {
        alert("SORRY you are too young to drive this car , Powering OFF");
    }
    
else{
    alert("Invalid Age");
}
}
*/

/* Assignment 10 Life Phase
function lifePhase(){

    let x = prompt("Enter your age : ");

    if (x<=3)
    {
        alert("You are a Baby:");
    }
    else if(x >= 4 && x <= 12)
    {
        alert("You are a child:");
    }
    else if(x >= 13 && x <= 19)
    {
        alert("You are Teen:");
    }
    else if(x >= 20 && x <= 64)
        {
            alert("You are Adult:");
        }
    else if(x >= 65 && x <= 140)
    {
        alert("You are Senior Citizen:");
    }
    else{
        alert("This is not a Valid Age...");
    }
}

lifePhase();
*/

/* Assignment 11 Pizza
let order = prompt("Choose any Pizza Size: S, M , L").toLowerCase();

if (order === "l") {
    let choose = prompt("Add pepperoni for Large or Medium Pizza(Y or N): ").toLowerCase();
    let cheese = prompt("Add Extra cheese for any size Pizza (Y or N):").toLowerCase();

    if (choose === "y" && cheese === "y") {
        let largePizza = "25";
        let LargePizza = parseInt(largePizza);
        let pepperoni = "3";
        let Pepperoni = parseInt(pepperoni);
        let Cheese = "1";
        let CheeseCost = parseInt(Cheese); 
        let Result = LargePizza + Pepperoni + CheeseCost;
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + Result);
    } else if (choose === "y" && cheese === "n") {
        let largePizza = "25";
        let LargePizza = parseInt(largePizza);
        let pepperoni = "3";
        let Pepperoni = parseInt(pepperoni);
        let Result = LargePizza + Pepperoni; 
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + Result);
    } else {
        let largePizza = "25";
        let LargePizza = parseInt(largePizza);
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + LargePizza);
    }
} else if (order === "s") {
    let choose = prompt("Add pepperoni forsmall Pizza(Y or N): ").toLowerCase();
    let cheese = prompt("Add Extra cheese for any size Pizza (Y or N):").toLowerCase(); 
     if (choose === "y" && cheese === "y") {
        let smallPizza = "15";
        let SmallPizza = parseInt(smallPizza);
        let pepperoni = "2";
        let Pepperoni = parseInt(pepperoni);
        let Cheese = "1";
        let CheeseCost = parseInt(Cheese); 
        let Result = SmallPizza + Pepperoni + CheeseCost; 
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + Result);
    } else if (choose === "y" && cheese === "n")
    {
        let smallPizza = "15";
        let SmallPizza = parseInt(smallPizza);
        let pepperoni = "2";
        let Pepperoni = parseInt(pepperoni);
        let Result = SmallPizza + Pepperoni; // Define Result here
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + Result);
    } 
    else 
    {
        let smallPizza = "15";
        let SmallPizza = parseInt(smallPizza);
        alert('Thank You For Choosing Python Pizza Deliveries!');
        alert('Your final Bill is : $' + SmallPizza);
    }
} 
else if (order === "m")
{
    let choose = prompt("Add pepperoni for Large or Medium Pizza(Y or N): ").toLowerCase();
    let cheese = prompt("Add Extra cheese for any size Pizza (Y or N):").toLowerCase();
    if (choose === "y" && cheese === "y") {
        let mediumPizza = "20";
        let MediumPizza = parseInt(mediumPizza);
        let pepperoni = "3";
        let Pepperoni = parseInt(pepperoni);
        let Cheese = "1";
        let CheeseCost = parseInt(Cheese);
        let Result = MediumPizza + Pepperoni + CheeseCost;
        alert("Thank You For Choosing Python Pizza Deliveries!");
        alert("Your final Bill is : $" + Result);
    } else if (choose === "y" && cheese === "n") {
        let mediumPizza = "20";
        let MediumPizza = parseInt(mediumPizza);
        let pepperoni = "3";
        let Pepperoni = parseInt(pepperoni);
        let Result = MediumPizza + Pepperoni; 
        alert("Thank You For Choosing Python Pizza Deliveries!");
        alert("Your final Bill is : $" + Result);
    } else {
        let mediumPizza = "20";
        let MediumPizza = parseInt(mediumPizza);
        alert("Thank You For Choosing Python Pizza Deliveries!");
        alert("Your final Bill is : $" + MediumPizza);
    }
} else {
    alert("Invalid Input");
}
*/

/* Assignment 12  Reverse array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let userInput = prompt("Enter words separated by commas:");
let sentence = userInput.split(",");
let result = reverseArray(sentence);
alert(result);

*/

/* Assignment 13 reverse numbeer
let number =  parseInt(prompt("Enter a four-digit number:"); 
let result = "";
while (number > 0) {
    let digit = number % 10;  
    result += digit + " ";    
    number = Math.floor(number / 10);
 }
alert("Digits are: " + result);
*/

/* Assignment 14 shopping cart
let show= alert("WELCOME TO OUR SHOP");
let num1= prompt("Which item do you want to buy?");
let num2= prompt("Enter the price of the item:");
let num3= prompt("Enter quantity of the item:");
let total=num2*num3;
alert("You want to buy " +num1+ " having price "+num2+ " in quantity "+num3+ " and the subtotal is "+total);
*/

/* Assignment 15 month quarter
let quarter = parseInt(prompt("Enter the quarter number (1-4):"));

switch (quarter) {
    case 1:
        alert("Months in Quarter 1 are : January, February, March");
        break;
    case 2:
        alert("Months in Quarter 2 are : April, May, June");
        break;
    case 3:
        alert("Months in Quarter 3 are : July, August, September");
        break;
    case 4:
        alert("Months in Quarter 4 are : October, November, December");
        break;
    default:
        alert("Invalid quarter! Please enter a number between 1 and 4.");
}

*/

/* Assignment 16 tweet
let tweet = prompt("Enter your tweet here : ");
let Tweet= tweet.length;
if (Tweet <= 140)
{
    alert("That "+Tweet+" char...Tweet will Work!");
}
else
{
    extra = Tweet-140
    alert("Your "+Tweet+" char...Tweet is "+extra+" chars too long ");
}
*/

/* Assignment 17*/

let height = parseFloat(prompt("Enter your height in inches:"));
let weight = parseFloat(prompt("Enter your weight in pounds:"));

let bmi = (weight * 703) / (height * height);

if (bmi < 16.0) {
   alert(`Your BMI of ${bmi} makes you Severely Underweight`);
} else if (bmi >= 16.0 && bmi <= 18.4) {
    alert(`Your BMI of ${bmi} makes you Underweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`Your BMI of ${bmi} makes you Normal`);
} else if (bmi >= 25.0 && bmi <= 29.9) {
    alert(`Your BMI of ${bmi} makes you Overweight`);
} else if (bmi >= 30.0 && bmi <= 34.9) {
    alert(`Your BMI of ${bmi} makes you Moderately Obese`);
} else if (bmi >= 35.0 && bmi <= 39.9) {
    alert(`Your BMI of ${bmi} makes you Severely Obese`);
} else if (bmi > 39.9) {
    alert(`Your BMI of ${bmi} makes you Morbidly Obese`);
}