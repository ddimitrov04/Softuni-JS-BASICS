function sumSeconds(input){
    let timeForOneProcessor = 3;
    let needProcesori = Number(input[0]);
    let slujiteli = Number(input[1]);
    let workDays = Number(input[2]);
    let chasaObshto = slujiteli*workDays*8;
    let izraboteniProcesori = chasaObshto/timeForOneProcessor;
    izraboteniProcesori = Math.floor(izraboteniProcesori);
    if(needProcesori>izraboteniProcesori){
        let oshte = needProcesori-izraboteniProcesori
        let loses = oshte*110.10;
        console.log(`Losses: -> ${loses.toFixed(2)}`);
    }else{
        let poveche = izraboteniProcesori - needProcesori;
        let profit = poveche*110.10;
        console.log(`Profit: -> ${profit.toFixed(2)}`);
    }
}
sumSeconds([500,8,20]);
