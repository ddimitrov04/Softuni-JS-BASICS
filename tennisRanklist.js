function tennisRanklist(input){
   let tournaments = input[0];
   let points = Number(input[1]);
   let pointsWon=0;
   let wonTournaments =0;
   for(let i = 1; i<=tournaments; i++){
      let result = input[i+1];
      if(result === "W"){
         pointsWon += 2000;
         wonTournaments +=1;
      }else if(result === "F"){
         pointsWon += 1200;
      }else if(result === "SF"){
         pointsWon += 720;
      }
   }
   let averageP = pointsWon/tournaments;
   let percentWonTournaments = (wonTournaments/tournaments)*100;
   let endPoints = points + pointsWon;
   console.log(`Final points: ${endPoints}\nAverage points: ${Math.floor(averageP)}\n${percentWonTournaments.toFixed(2)}%`);

}
tennisRanklist(["5","1400","F","SF","W","W","SF"])
