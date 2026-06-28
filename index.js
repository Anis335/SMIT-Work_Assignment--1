//    .-------.
//   /   ____  \
//  |   |    |  |---.
//  |   |____|  |   |
//  |           |   |
//  |           |---'
//  |   .---.   |
//  |   |   |   |
//  '---'   '---'

//  ____           _                          
// | __ ) _   _   / \   _ __   ___  ___ ___  
// |  _ \| | | | / _ \ | '_ \ / _ \/ _ \ __| 
// | |_) | |_| |/ ___ \| | | |  __/  __\__ \ 
// |____/ \__, /_/   \_\_| |_|\___|\___|___/ 
//       |___/

// ==========================================
// Chapter 1: Alerts
// ==========================================

// Q1: Write a script to greet your website visitor using JS alert box.
// alert("Hi! Welcome:)");

// Q2: Write a script to display following message on your web page.
// alert("Error! Please enter a valid password.");

// Q3: Write a script to display following message on your web page.
// alert("Welcome to JS Land...\nHappy Coding!");

// Q4: Write a script to display following messages in sequence.
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// Q5: Generate the following message through browser’s developer console.
// console.log("Hello... I can run JS through my web browser's console");

// Q6: Make use of alerts in your new/existing HTML & CSS project.
// alert("Welcome to my website! Enjoy your stay.");

// Q7: Practice placement of script element.
// alert("This script is running perfectly.");


// ==========================================
// Chapter 2: Variables for Strings
// ==========================================

// Q1: Declare a variable called username.
// var username;

// Q2: Declare a variable called myName.
// var myName = "Muhammad Anees";

// Q3: Declare variable message, assign "Hello World", display in alert.
// var message;
// message = "Hello World";
// alert(message);

// Q4: Save student’s bio data in JS variables and show in alerts.
// var studentName = "Muhammad Anees";
// var studentAge = 16;
// var studentCourse = "Computer Science";
// alert("Name: " + studentName);
// alert("Age: " + studentAge);
// alert("Course: " + studentCourse);

// Q5: Display the following alert using one JS variable.
// var pizzaMessage = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizzaMessage);

// Q6: Declare email variable and assign it a string.
// var email = "aneesbeast@example.com";
// alert("My email address is " + email);

// Q7: Declare variable called book.
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Q8: Write a script to display this in browser through JS.
// document.write("Yah! I can write HTML content through JavaScript<br><br>");

// Q9: Store following string in a variable and show in alert and browser.
// var designMessage = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(designMessage);
// document.write(designMessage + "<br><br>");


// ==========================================
// Chapter 3: Variables for Numbers
// ==========================================

// Q1: Declare variable age.
// var age = 16;
// alert("I am " + age + " years old.");

// Q2: Keep track of how many times a visitor has visited.
// var visitCount = 1;
// document.write("You have visited this page " + visitCount + " times.<br><br>");

// Q3: Declare a variable called birthYear.
// var birthYear = 2007;
// document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number.<br><br>");

// Q4: Online clothing store variables.
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.<br><br>");


// ==========================================
// Chapter 4: Legal & Illegal Variables
// ==========================================

// Q1: Declare 3 variables in one statement.
// var var1 = "Hello", var2 = "World", var3 = "!";

// Q2: Declare 5 legal & 5 illegal variable names.
// Legal variable names:
// var myVariable;
// var _myVariable;
// var $myVariable;
// var myVariable1;
// var myVariableName;
//
// Illegal variable names:
// var 1myVariable;
// var my-Variable;
// var my Variable;
// var var;
// var myVariable!;

// Q3: Display rules for naming JS variables.
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords<br><br>");


// ==========================================
// Chapter 5: Math Expressions
// ==========================================

// Q1 & Q2: Math operations.
// var num1 = 10;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".<br>");
// document.write("The difference of " + num1 + " and " + num2 + " is " + (num1 - num2) + ".<br>");
// document.write("The product of " + num1 + " and " + num2 + " is " + (num1 * num2) + ".<br>");
// document.write("The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2) + ".<br>");
// document.write("The modulus of " + num1 + " and " + num2 + " is " + (num1 % num2) + ".<br><br>");

// Q3: Math expressions sequence.
// var num;
// document.write("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.write("Initial value: " + num + "<br>");
// num++;
// document.write("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");
// num--;
// document.write("Value after decrement is: " + num + "<br>");
// var remainder = num % 3;
// document.write("The remainder is: " + remainder + "<br><br>");

// Q4: Movie ticket cost.
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalMovieCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalMovieCost + " PKR.<br><br>");

// Q5: Multiplication table.
// var tableNum = 4;
// document.write("Multiplication Table of " + tableNum + "<br>");
// for (var i = 1; i <= 10; i++) {
//     document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// }
// document.write("<br>");

// Q6: Temperature Converter.
// var celsiusTemp = 25;
// var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");
// var fahrenheitTemp2 = 70;
// var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
// document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C<br><br>");

// Q7: Shopping cart.
// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var checkoutTotal = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("Total cost: " + checkoutTotal + " PKR<br><br>");

// Q8: Percentage calculator.
// var totalExamMarks = 500; 
// var marksObtainedTotal = 400;
// var percentage = (marksObtainedTotal / totalExamMarks) * 100;
// document.write("Total Marks: " + totalExamMarks + "<br>");
// document.write("Marks Obtained: " + marksObtainedTotal + "<br>");
// document.write("Percentage: " + percentage + "%<br><br>");

// Q9: Currency converter.
// var usDollars = 10;
// var saudiRiyals = 25;
// var totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);
// document.write("Total currency in PKR: " + totalInPKR + " PKR<br><br>");

// Q10: Arithmetic sequence.
// var myNumber = 5;
// var result = (((myNumber + 5) * 10) / 2);
// document.write("Result: " + result + "<br><br>");

// Q11: Age Calculator.
// var currentYear = 2024;
// var myBirthYear = 2007;
// var myCalculatedAge = currentYear - myBirthYear;
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + myBirthYear + "<br>");
// document.write("Your Age: " + myCalculatedAge + "<br><br>");

// Q12: Geometrizer.
// var radius = 20;
// var pi = 3.142; 
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br><br>");

// Q13: Lifetime supply.
// var favoriteSnack = "Chocolate Chip Cookies";
// var currentAge = 16;
// var maxAge = 65;
// var amountPerDay = 3;
// var yearsRemaining = maxAge - currentAge;
// var totalSnacks = yearsRemaining * 365 * amountPerDay;
// document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".<br><br>");


// ==========================================
// Chapter 6: Math Expressions (Advanced)
// ==========================================

// Q1: Arithmetic sequence.
// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");
// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a + "<br>");
// a++;
// document.write("Now the value of a is: " + a + "<br><br>");

// Q2: Prefix and postfix.
// var aVar = 2, bVar = 1;
// var resultVar = --aVar - --bVar + ++bVar + bVar--;
// document.write("a is: " + aVar + "<br>");
// document.write("b is: " + bVar + "<br>");
// document.write("result is: " + resultVar + "<br><br>");

// Q3: Prompt greeting.
// var userNameInput = prompt("Enter your name:");
// alert("Hello, " + userNameInput + "! Welcome to our website.");

// Q4 & Q7: Multiplication table with prompt.
// var tablePrompt = prompt("Enter a number for multiplication table:");
// if (tablePrompt == "") {
//     tablePrompt = 5;
// }
// document.write("<h2>Multiplication Table of " + tablePrompt + "</h2>");
// for (var j = 1; j <= 10; j++) {
//     document.write(tablePrompt + " x " + j + " = " + (tablePrompt * j) + "<br>");
// }

// Q5 & Q6: Marks Sheet using prompts.
// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");
// var totalMarksPerSubject = 100;
// var marksObtained1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
// var marksObtained2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
// var marksObtained3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
// var grandTotalMarks = marksObtained1 + marksObtained2 + marksObtained3;
// var perc1 = (marksObtained1 / totalMarksPerSubject) * 100;
// var perc2 = (marksObtained2 / totalMarksPerSubject) * 100;
// var perc3 = (marksObtained3 / totalMarksPerSubject) * 100;
// var grandPercentage = (grandTotalMarks / 300) * 100;
// document.write("<h2>Marks Sheet</h2>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained1 + "</td><td>" + perc1 + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained2 + "</td><td>" + perc2 + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained3 + "</td><td>" + perc3 + "%</td></tr>");
// document.write("<tr><th>Total</th><th>300</th><th>" + grandTotalMarks + "</th><th>" + grandPercentage + "%</th></tr>");
// document.write("</table>");