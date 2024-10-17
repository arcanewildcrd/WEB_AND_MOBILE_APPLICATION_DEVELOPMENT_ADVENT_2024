// what will be the result of the following code?
/*let score = 80;
if (score > 90 && score <= 100){
    console.log("A grade");
}else if (score > 75 && score <= 90){
    console.log("B grade");
}else if (score >= 50 && score <= 75){
    console.log("C grade");
}else {
    console.log("Fail");
}*/

//use switch statement
let score = 80;
switch (score) {
    case score >= 100:
        console.log("A grade");
        break;
    case score >= 90:
        console.log("B grade");
        break;
    case score >= 76:
        console.log("C grade");
        break;
    default:
        console.log("Fail");
}