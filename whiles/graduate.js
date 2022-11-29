function graduate(input){
   let name = input[0];
   let i = 1;
   let badGradesCount =0 ;
   let gradeSum= 0;
   let gradeCount = 0;
   while(input[i]>=2){
      if(input[i]<4){
         badGradesCount +=1;
         if(badGradesCount >1){
            console.log(`${name} has been excluded at ${gradeCount+badGradesCount-1} grade`);
            return;
         }
      }else{
         gradeSum += Number(input[i]);
         gradeCount ++;
         i++;
         if(gradeCount >= 12){
            let averageGr = gradeSum/gradeCount
            console.log(`${name} graduated. Average grade: ${averageGr.toFixed(2)}`);
            return;
         }

      }
      
   }
   

}
graduate(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
