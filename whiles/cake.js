function cake(input){
   let i=0;
   let length = Number(input[i]);
   i++;
   let width = Number(input[i]);
   i++
   let pieces = length*width;
   let eaten = 0;

   while(input[i] != 'STOP' && Number(input[i]) > 0){
      eaten += Number(input[i]);
      i++;
         
   }
   if(eaten >= pieces){
      let need = eaten - pieces;
      console.log(`No more cake left! You need ${need} pieces more.`);
   }else{
      let left = pieces - eaten;
      console.log(`${left} pieces are left.`);
   }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

