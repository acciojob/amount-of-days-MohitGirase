//your JS code here. If required.
function daysOfAYear(year){
	let flag = false;
	if(year % 4 == 0){
		if(year % 100 == 0){
			if(year % 400 == 0){
				flag = true;
			}
		}else{
			flag = true;
		}
	}
	return flag ? 366 : 365;
}