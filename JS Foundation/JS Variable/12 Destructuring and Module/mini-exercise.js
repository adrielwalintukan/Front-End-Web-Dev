// Mini Exercise

//1
function calculateAge(birthYear){
	return 2019 - birthYear;
}

function yearUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 60 - age;

	if(retirement > 0){
    	console.log(firstName + ' retires in '+ retirement + ' years');
	} else {
    	console.log(firstName + ' is already retired.');
	}
}

yearUntilRetirement({year: 1987, firstName: 'John'});