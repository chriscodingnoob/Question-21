/*
 * Design a program that calculates a car's gas mileage. 
 * MPG = miles/gallons 
 * Have the user input the number of gallons of gas the car holds, 
 * and the number of miles it can be driven on a full tank.  
 * Then call a function to calculate and return miles per gallon.  
 * After the function call, display the MPG returned from the function 
 * back to the user.
 */

var gasCarholds = Number(prompt("Enter the number of gallons of gas the car holds."));

var milesFulltank = Number(prompt("Enter the number of miles car can be driven on full tank."));

let milesPerGallon = milesFulltank/gasCarholds;

document.write("You will get " + milesPerGallon, " miles per gallon!");
