function coins(input){
   
   let left = Math.round(Number(input[0])*100);
   let i= 0;
   while(left != 0){
      if(left >= 200){
         left -=200;
         i++;
      }else if(left >= 100 && left < 200){
         left -=100;
         i++
      }else if(left >=50 && left < 100){
         left -= 50;
         i++;
      }else if(left >= 20 && left < 50){
         left -= 20;
         i++; 
      }else if(left >= 10 && left < 20){
         left -= 10;
         i++;
      }else if(left >= 5 && left < 10){
         left -= 5;
         i++;
      }else if(left >= 2 && left < 5){
         left -= 2;
         i++;
      }else if(left < 2){
         left -= 1;
         i++;
      }  
   }
   console.log(i);
}
coins(["1.23"])



