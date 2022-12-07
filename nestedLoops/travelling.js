function travelling(input){
   let country = "";
   let moneyNeeded = 0;
   let money = 0;
   let i = 0;
   let needMoney = true;
   while(input[i]!= "End"){
      needMoney = true;
      country = input[i];
      i++;
      moneyNeeded = Number(input[i])
      i++

      while(needMoney){
         if(money>=moneyNeeded){
            console.log(`Going to ${country}!`);
            money = 0;
            needMoney = false;
               
         }else{
            money += Number(input[i]);
            i++;   
         }
      }
     
   }

   }
  
travelling(["Greece",
1000,
200,
200,
300,
100,
150,
240,
"Spain",
1200,
300,
500,
193,
423,
"End"])
