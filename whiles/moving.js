function moving(input){
   let i=0;
   let width = Number(input[i]);
   i++;
   let length = Number(input[i]);
   i++;
   let height = Number(input[i]);
   i++;
   let roomSize = length*width*height;
   let taken = 0;

   while(input[i] != 'Done' && Number(input[i]) >= 0){
      taken += Number(input[i]);
      i++;
         
   }
   if(taken >= roomSize){
      let need = taken - roomSize;
      console.log(`No more free space! You need ${need} Cubic meters more.`);
   }else{
      let left = roomSize - taken;
      console.log(`${left} Cubic meters left.`);
   }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])







