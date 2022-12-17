function sumSeconds(input){
    let i =0
    let adults = 0;
    let kids = 0;
    let priceForToys = 0;
    let priceForSweaters= 0;
    while(input[i]!="Christmas"){
        let years = Number(input[i])
        if(years<17){
            kids++;
            priceForToys+=5;
        }else{
            adults++;
            priceForSweaters+=15;
        }
        i++;
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${priceForToys}`);
    console.log(`Money for sweaters: ${priceForSweaters}`);
}
sumSeconds([16,20,46,12,8,20,49,"Christmas"]);    
