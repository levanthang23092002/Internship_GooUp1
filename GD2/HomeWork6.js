// Date validation 

function dateValidation(date){
    let elementDate = date.split("-");
    let day = parseInt(elementDate[0]);
    let month = parseInt(elementDate[1]);
    let year = parseInt(elementDate[2]);
    if(month > 12 || month < 1){
        return false;
    }
    if(month == 1 || month == 3 || month == 5  ||  month == 7 || month == 8 || month == 10 || month == 12){
        if(day <= 31 && day > 0){
            return true;
            
        }else{
            return false;
        }
    }else{
        if(month == 4 || month == 6 || month == 9 || month == 11){
            if(day <= 30 && day > 0){
                return true;
            }else{
                return false;
            }
        }else{
            if(month == 2){
                if(year % 4 == 0){
                    if(day <= 29 && day > 0){
                        return true;
                    }else{
                        return false;
                    }
                }else{
                    if(day <= 28 && day > 0){
                        return true;
                    }else{
                        return false;
                    }
                }
            }else{
                return false
            }
        }
    }
    
   
}
module.exports = { dateValidation };