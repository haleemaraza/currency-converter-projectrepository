
import inquirer from "inquirer";

let Convertion ={
    "PKR":{
        "USD":0.0044,
        "GBP":0.0037,
        "PKR":1
    },
    "GBP":{
        "USD":1.21,
        "PKR":271.79,
        "GBP":1
    },
    "USD":{
        "PKR":225.50,
        "GBP":0.38,
        "USD":1
    }
} 

const answer:{
    from :"GBP"|"PKR"|"USD",
    to :"GBP"|"PKR"|"USD",
    amount:number
} = await  inquirer.prompt([
    {
        type:"list" ,
        name:"From ",
        choices:["PKR","USD","GBP"],
        message:"select your currency"
    },
    {
        type:"list" ,
        name:"to ",
        choices:["PKR","USD","GBP"],
        message:"select your  converter currency"
    },
    {
        type:"name" ,
        name:"amount ",
        message:"enter your convertion amount "
    }
]);

const {from,to, amount}=answer

if (from&& to && amount){
    let result =Convertion[from][to]*amount
    console.log(`your convrtion from ${from}to ${to}is${result}`)
}else{
    console.log("Invaild input")
}