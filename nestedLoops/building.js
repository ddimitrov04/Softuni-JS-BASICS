function building(input){
   let firstNum = Number(input[0]);
   let secondNum = Number(input[1]);
   for(i  = firstNum; i>=1; i--){
      let result = ``;
      for (let j = 0; j <secondNum ; j++){
         
         if(i === firstNum){
            result += `L${i}${j} `;
         }else if(i%2==0 && i!=firstNum){
            result += `O${i}${j} `;
         }else if(i%2 !=0 && i!=firstNum){
            result += `A${i}${j} `;
         }
         
      }
     console.log(result);
   }
   }
  
building([6,4])
