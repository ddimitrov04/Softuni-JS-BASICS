function nums(input){
   let broiChisla = Number(input[0]);
   let currentNum = 0
   let p1=0;
   let p2=0;
   let p3=0;
   let p4=0;
   let p5=0
   for(let i =1; i<=broiChisla; i++){
      currentNum = input[i];
      if(currentNum<200){
         p1 +=1;
      }else if(currentNum>=200 && currentNum<400){
         p2 +=1;
      }else if(currentNum>=400 && currentNum<600){
         p3 +=1;
      }else if(currentNum>=600 && currentNum<800){
         p4 +=1;
      }else if(currentNum<=1000){
         p5 +=1;
      }
   
   }
   let allnums = p1+p2+p3+p4+p5;
   p1 = p1/allnums*100
   p2 = p2/allnums*100
   p3 = p3/allnums*100
   p4 = p4/allnums*100
   p5 = p5/allnums*100
   console.log(`${p1.toFixed(2)}%`)
   console.log(`${p2.toFixed(2)}%`)
   console.log(`${p3.toFixed(2)}%`)
   console.log(`${p4.toFixed(2)}%`)
   console.log(`${p5.toFixed(2)}%`)

}
nums(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])
