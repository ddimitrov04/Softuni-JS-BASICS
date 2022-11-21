function hotel(input){
    let month = input[0];
    let days = Number(input[1]);
    let apPrice = 0.00;
    let studPrice = 0.00;
    if(month === "May" || month === "October"){
        studPrice += 50*days;
        apPrice += 65*days;
        if(days > 7 && days <= 14){
            studPrice -= studPrice*0.05;
        }else if(days>14){
            studPrice -= studPrice*0.30;
            apPrice -= apPrice*0.10;
        }

    }else if(month === "June" || month === "September"){
        studPrice += 75.20*days;
        apPrice += 68.70*days;
        if(days> 14){
            studPrice -= studPrice*0.20
            apPrice -= apPrice*0.10;
        }

    }else if(month === "July" || month === "August"){
        studPrice += 76*days;
        apPrice += 77*days;
        
        if(days>14){
            apPrice -= apPrice*0.10;
        }
    }

console.log(`Apartment: ${apPrice.toFixed(2)} lv.\nStudio: ${studPrice.toFixed(2)} lv.`);    

}
hotel(["June",14])
