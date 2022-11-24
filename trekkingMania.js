function trekkingMania(input){
   let allPeople =0;
   let musalaP = 0;
   let monblanP = 0;
   let kilimandjaroP=0;
   let k2 = 0;
   let everest = 0;
   for(let i=0; i<input[0]; i++){
      let people = Number(input[i+1]);
      allPeople += Number(input[i+1]);
      if(people<=5){
         musalaP += people;
      }else if(people>5 && people<=12){
         monblanP += people;
      }else if(people>12 && people<=25){
         kilimandjaroP += people;
      }else if(people>25 && people <=40){
         k2 += people;
      }else{
         everest += people;
      }
  }
  let p1 = (musalaP/allPeople)*100;
  let p2 = (monblanP/allPeople)*100;
  let p3 = (kilimandjaroP/allPeople)*100;
  let p4 = (k2/allPeople)*100;
  let p5 = (everest/allPeople)*100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"])
