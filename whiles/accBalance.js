function accBalance(input){
   let i =0;
   let money =0; 
   while(input[i]!= "NoMoreMoney"){
      if(Number(input[i])<0){
         console.log("Invalid operation!");
         break;
      }else{
         console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
         money += Number(input[i]);
         i++;
      }
   }
   console.log(`Total: ${money.toFixed(2)}`);
}
accBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
