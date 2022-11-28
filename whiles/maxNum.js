function maxNum(input){
   let i = 0;
   let num = input[0];
   while(input[i] != "Stop"){
      if(Number(input[i])>=num){
         num = Number(input[i]);
      }
      i++;
   }
   console.log(num);

}
