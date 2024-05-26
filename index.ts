#! /usr/bin/env node

// Made Table Generator using inqiurer and loop  

console.log(`Hi,How are you\n`  );

let table= true;

import inquirer from "inquirer";

let numtable = await  inquirer.prompt
(
    [
        {
            message: `Enter any number to generate a table:\n`,
            name: "anyNumber",
            type: "number",
        }
    ]
) 
    let myNumber= numtable.anyNumber;
    if(myNumber){
    console.log(`Here is a table of :${myNumber} \n`);
    
let num: number[] =[ 1,2,3,4,5,6,7,8,9,10];
 
for (let i = 1; i <=num.length; i++) { 
    console.log(`${myNumber} X ${i} = ${myNumber *i}`);    
 
}
console.log(`\nThank you for using this Table Generator`);

}
else{
    console.log("Only Enter a Numeric value  ");
    
} 
