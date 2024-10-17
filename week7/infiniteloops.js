//what is an infinite loop and how can it occur
/*these are loops that run indefinitely unless a certain condition is met
it can occur when the loops condition never evaluates to 0*/

let v = 0;
while (v < 10) {
    console.log("v - ", v);
    v++;
}

//do-while loop
let w = 0;
do {
    console.log("w - ", w);
    w++;
} while (w < 10);


let data = [
    {district: "Kampala", rainfall: 120},
    {district: "Gulu", rainfall: 80},
    {district: "Mbarara", rainfall: 95}
];
/*write a for loop that iterates through the array and 
prints the district names and their rainfall levels*/

for (let i = 0; i < data.length; i++) {
    console.log("District - ", data[i].district, " Rainfall - ", data[i].rainfall);
}







