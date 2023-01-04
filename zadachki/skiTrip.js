function skiTrip(input){
    let days = Number(input[0]);
    let nights = days-1;
    let kindOfRoom = input[1];
    let type = input[2];
    let price = 0.00;
    let discount =0;

    switch(kindOfRoom){
        case "room for one person":
            price = 18.00*nights;
            break;
        case "apartment":
            price = 25.00*nights;    
            if(days<10){
                discount = price *0.30;
            }else if(days>=10 && days <=15){
                discount = price *0.35;
            }else if(days >15){
                discount = price* 0.50;
            }               
            break;
        case "president apartment":
            price = 35.00*nights;
            if(days<10){
                discount = price *0.10;
            }else if(days>=10 && days <=15){
                discount = price *0.15;
            }else if(days >15){
                discount = price* 0.20;
            }
            break;    
    }
    let PriceWithDiscount = price-discount;
    if(type === "positive"){
        PriceWithDiscount += PriceWithDiscount*0.25;
    }else{
        PriceWithDiscount -= PriceWithDiscount*0.10;
    }
    console.log(PriceWithDiscount.toFixed(2));
}
skiTrip([30,"president apartment","negative" ])
