function oldBooks(input){
   let needBook = input[0];
   let i = 1;
   while(needBook!= input[i]){
      if(input[i]=== "No More Books"){
         console.log(`The book you search is not here!\nYou checked ${i-1} books.`);
         return;
      }
      i++;
   } 
   console.log(`You checked ${i-1} books and found it.`);

}
oldBooks([
      "Bourne",
      "True Story",
      "Forever",
      "More Space",
      "The Girl",
      "Spaceship",
      "Strongest",
      "Profit",
      "Tripple",
      "Stella",
      "The Matrix",
      "Bourne"
])


