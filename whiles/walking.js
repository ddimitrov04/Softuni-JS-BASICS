function steps(input){
  let goal = 10000;
  let i = 0;
  let stepCount = 0;
  while(input[i] > 0 || input[i] === "Going home"){
      if(input[i] === "Going home"){
         stepCount += Number(input[i+1]);
         break;
      }
      stepCount += Number(input[i]);
      i++;   
   }
  
   if(stepCount >= goal){
      let stepOver = stepCount - goal;
      console.log(`Goal reached! Good job!\n${stepOver} steps over the goal!`);
   }else{
      let needStep = goal - stepCount;
      console.log(`${needStep} more steps to reach goal.`);
   }

}
steps([
   1500
   ,300
  , 2500
   ,3000
   ,"Going home"
  , 200
])
