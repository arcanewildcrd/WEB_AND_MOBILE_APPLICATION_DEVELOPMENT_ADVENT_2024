/*If statements in javascript are used 
to make certain decisions basing on 
certain conditions preset within the code block*/

/*If statements hep in making choices or
 decisions basing on conditions available
  at the time within the code*/

  //Let's create an if statement to check if a number is greater than 10
  /*let temperature = 30;
  if (temperature > 30) {
    console.log("Its hot!");
  } else {
    console.log("Its cold!");
  }*/

/*Modify the above program to print a message for temperatures between 15 and 25 without removing original code blocks*/
let temperature = 14;

if (temperature > 25) {
    console.log("Its hot!");
} else if (temperature > 15 && temperature <= 25) {
    console.log("Its warm!");
} else {
    console.log("Its not warm, its cold nigha!");
}
