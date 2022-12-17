function sumSeconds(input){
    let broi = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let kolHrana = 0;
    for (let i = 1; i <= broi; i++) {
        let hrana = Number(input[i]);
        if(hrana >=100 && hrana <200){
            group1++;
            kolHrana += hrana;
        }else if(hrana >=200 && hrana <300){
            group2++;
            kolHrana+= hrana;
        }else{
            group3++;
            kolHrana+= hrana;
        }
        
    }
    let kolHranaKG = kolHrana/1000;
    let priceForFood = kolHranaKG*12.45
    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${priceForFood.toFixed(2)} lv.`);
}
sumSeconds([6,102,236,123,399,342,222]);    
