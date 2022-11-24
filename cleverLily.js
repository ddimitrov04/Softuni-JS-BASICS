function cleverLily(input){
   var years = Number(input[0]);
   var laundryPrice = Number(input[1]);
   var toyPrice = Number(input[2]);
   var toys = 0;
   var money = 0;
   for(let i=1; i<=years; i++){
      if(i%2 !== 0){
         toys+=1;
      }else{
         money += ((i/2)*10)-1;
      }
   }
   var moneyFromToys = toys*toyPrice;
   var allMoney = moneyFromToys+money;
   if(allMoney>= laundryPrice){
      let leftMoney = allMoney-laundryPrice;
      console.log(`Yes! ${leftMoney.toFixed(2)}`);
   }else{
      let needMoney = laundryPrice-allMoney;
      console.log(`No! ${needMoney.toFixed(2)}`);
   }
}
cleverLily(["10","170.00","6"])
