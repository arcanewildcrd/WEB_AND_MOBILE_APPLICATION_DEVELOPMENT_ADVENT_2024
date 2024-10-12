/*nested if
let age = 18;
if (age >= 18) {
    if (age < 65){
        console.log("You are eligible to work.");
    } else { console.log("You are of retirement age.");

    }
} else{
    console.log("You are too young to work.");
}*/

//modification
let age = 18;
if (age >= 18 && age < 65 ) {
      console.log("You are eligible to work.");
} else if(age > 65) { 
    console.log("You are of retirement age.");
}else{
    console.log("You are too young to work.");
}