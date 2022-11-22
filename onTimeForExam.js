function onTimeExam(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamMins = examHour*60 + examMin;
    let totalArrivalMins = arrivalHour*60 + arrivalMin;
    let totalMinDiff = Math.abs(totalExamMins - totalArrivalMins);
    let totalHoursDiff = Math.floor(totalMinDiff/60);
    let minsDiff = totalMinDiff % 60;

    if(totalArrivalMins>totalExamMins){
        if(totalMinDiff >=60){
            if(minsDiff<10){
                console.log(`Late\n${totalHoursDiff}:0${minsDiff} hours after the start`);
            }else{
                console.log(`Late\n${totalHoursDiff}:${minsDiff} hours after the start`);
            }
            
        }else{
            console.log(`Late\n${minsDiff} minutes after the start`);
        }

    }else if(totalArrivalMins<=totalExamMins && (totalExamMins-totalArrivalMins)<=30){
        if(totalArrivalMins===totalExamMins){
            console.log("On time");
        }else{
            console.log(`On time\n${minsDiff} minutes before the start`);
        }
    }else{
        if(totalMinDiff >= 60){
            if(minsDiff<10){
                console.log(`Early\n${totalHoursDiff}:0${minsDiff} hours before the start` );
            }else{
                console.log(`Early\n${totalHoursDiff}:${minsDiff} hours before the start` );
            }
            
        }else{
        console.log(`Early\n${minsDiff} minutes before the start`);    
        }
    }

}
