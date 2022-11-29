function examPrep(input){
   let badGradesCount = 0;
   let maxBadGrades = Number(input[0]);
   let i = 1;
   let numOfProblems = 0;
   let gradeCount = 0;
   
   while(input[i] != "Enough"){
      numOfProblems += 1;
      if(Number(input[i+1]) <=4){
         badGradesCount ++;
         if(badGradesCount>= maxBadGrades){
            console.log(`You need a break, ${badGradesCount} poor grades.`);
            return;
         }
      }
      gradeCount += Number(input[i+1]);
      i += 2;
   }
   let lastProblem = input[i-2]; 
   let averageScore = gradeCount/numOfProblems;
   console.log(`Average score: ${averageScore.toFixed(2)}\nNumber of problems: ${numOfProblems}\nLast problem: ${lastProblem}`);
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])


