#! /usr/bin/env node

import inquirer from "inquirer"
const currentBalance=10000;
console.log(`Your Current Balance is ${currentBalance}`);

const ans=await inquirer.prompt([{
  message:"Enter Your Pin Number",
  type:"number",
  name:"number"
},
])
if(ans.number===1425){
console.log("Your Pin Code is Correct");
const pin=await inquirer.prompt([{
  message:"What do you want to do",
  type:"list",
  name:"operator",
  choices:["Withdraw","Check Balance"],
},

])
if(pin.operator==="Check Balance"){
  console.log(`Your Current Balance is ${currentBalance}`);
}else if(pin.operator==="Withdraw"){
  const amount1=await inquirer.prompt([{
    messege:"Which type of amount do you receive",
    type:'list',
    name:"operator",
    choices:["Large Amount","Small Amount"]
  }])
  if(amount1.operator==="Large Amount"){
    const amount=await inquirer.prompt([{
      message:"Enter your amount?",
      type:"list",
      name:"number",
      choices:[1000,2000,3000,4000]
    }])  
    if(currentBalance<amount.number){
      console.log("You don't have that much money in your account.");
      
    }else{
      let amount1=currentBalance - amount.number
    console.log(`Your remaining amount is ${amount1}`);
    }
  }else if(amount1.operator==="Small Amount"){
    const amount=await inquirer.prompt([{
      message:"Enter your amount?",
      type:"number",
      name:"number",
      
    }])  
    if(currentBalance<amount.number){
      console.log("You don't have that much money in your account.");
      
    }else{
      let amount1=currentBalance - amount.number
    console.log(`Your remaining amount is ${amount1}`);
    }
  }

}

}else{
  console.log("Please Enter Correct Pin");
  
}


// console.log(ans);
