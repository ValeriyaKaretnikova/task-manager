function datesValid(startDate, startTime, endDate, endTime){
    
    if (startDate.getTime() > endDate.getTime()){
        return false;
    }
    else if (startDate.getTime() == endDate.getTime()){
        const sthours = parseInt(startTime.slice(0, 2));
        const enHours = parseInt(endTime.slice(0,2));
  
        if (sthours > enHours){
            return false;
        }
        else if (sthours === enHours){
            const stmin = parseInt(startTime.slice(3,5));
            const enmin = parseInt(endTime.slice(3,5));
            if(stmin > enmin){
               
                return false;
            }
        }


    }
 
        return true;
  

}

export default datesValid;