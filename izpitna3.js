function sumSeconds(input){
    let poroda = input[0];
    let pol = input[1];
    let months = 0;
    if(pol == 'm'){
        switch (poroda) {
            case "British Shorthair":
                months = 13*12;
                break;
            case "Siamese":
                months = 15*12;
                break;    
            case "Persian":
                months = 14*12;
                break;
            case "Ragdoll":
                months = 16*12;
                break;    
            case "American Shorthair":
                months = 12*12;
                break;
            case "Siberian":
                months = 11*12;
                break;
            default :
                return `${poroda} is invalid cat!`    
        }
    }else{
        switch (poroda) {
            case "British Shorthair":
                months = 14*12;
                break;
            case "Siamese":
                months = 16*12;
                break;    
            case "Persian":
                months = 15*12;
                break;
            case "Ragdoll":
                months = 17*12;
                break;    
            case "American Shorthair":
                months = 13*12;
                break;
            case "Siberian":
                months = 12*12;
                break;
            default :
                return `${poroda} is invalid cat!`    
        }
    }
    let catMonths = months/6;
    console.log(`${Math.floor(catMonths)} cat months`);
}
sumSeconds(["Siberian","m"]);
