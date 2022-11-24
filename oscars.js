function oscars(input){
   let actor = input[0];
   let points = Number(input[1]);
   let judges = Number(input[2]);
   let pointsFromJudge = 0;
   let name = "";
   
   for(let i=3; i<input.length; i=i+2){
      name = input[i];   
      let nameLength = name.toString(input[i]).length;
      pointsFromJudge = Number(input[i+1]);
      points += (nameLength*pointsFromJudge)/2; 
      if(points >1250.5){
         console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
         return;
      }
   }
   let needPoints = 1250.5-points;
   console.log(`Sorry, ${actor} you need ${needPoints.toFixed(1)} more!`);
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])
