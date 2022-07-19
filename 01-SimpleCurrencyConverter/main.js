const input = require('sync-input');  
let currencies = [
    {name : "USD", rate : 1.0},
    {name : "JPY", rate : 113.5},
    {name : "EUR", rate : 0.89},
    {name : "RUB", rate :74.36},
    {name : "GBP", rate :0.75}
  ];
  
console.log("Welcome to Currency Converter!");
for(i=0; i<currencies.length; i++){
  console.log(`1 USD equals  ${currencies[i].rate} ${currencies[i].name}`);
}

let inputMenu;
do {
  console.log("What do you want to do?");
  inputMenu = input("1-Convert currencies 2-Exit program\n");
  switch(inputMenu){
    case '1' :
      console.log("What do you want to convert?");
      let inputFrom = input("From: ");
      let currFrom = currencies.find(o => o.name === inputFrom.toUpperCase());
      if(typeof currFrom != 'undefined'){
        let inputTo = input("To: ");
        let currTo = currencies.find(o => o.name === inputTo.toUpperCase());
        if(typeof currTo != 'undefined'){
          let amount = input("Amount: ");
          if(isNaN(amount)){
            console.log("The amount has to be a number");
          }
          else if(amount < 0){
            console.log("The amount can not be less than 1");
          } else {
            let total = (currTo.rate / currFrom.rate) * amount;
            console.log(`Result: ${amount} ${currFrom.name} equals ${total.toFixed(4)} ${currTo.name}`);
          }
        } else {
          console.log("Unknown currency");
        }
      } else {
        console.log("Unknown currency");
      }
      break;
    case '2' :
      console.log("Have a nice day!");      
      break;
    default :
      console.log("Unknown input");
      break;
  }
} while(inputMenu != 2)