function vacation(input){
   let i = 0;
   let needMoney = Number(input[i]);
   i++;
   let haveMoney = Number(input[i]);
   i++;
   let action = input[i];
   i++;
   let sum = Number(input[i])
   i++;
  
   let daysSpend = 0;
   let daysPassed = 0; 
   while(haveMoney< needMoney){
      daysPassed++;
      if(action === 'spend'){
         if(sum > haveMoney){
            haveMoney =0;
         }else{
            haveMoney -= sum;
         }
         daysSpend++;          
      }else{
         haveMoney += sum;
         daysSpend =0;
      }
      if(daysSpend === 5){
         console.log("You can't save the money.");
         console.log(daysPassed);
         return;
      }
      action =input[i];
      i++;

      sum = Number(input[i])
      i++;
   }
   console.log(`You saved the money for ${daysPassed} days.`);
}
vacation([
      "2000",
      "1000",
      "spend",
      "1200",
      "save",
      "2000"
])
