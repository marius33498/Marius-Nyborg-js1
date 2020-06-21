


document.querySelector('input').addEventListener("input", function(){
	var theNumberInput = document.querySelector('#inputNumber').value;
	var output = document.querySelector('.dynamic-divs');
	
	
	output.innerHTML = "Number " + theNumberInput;
     
})

function resetButton(){
	document.getElementById('form').reset();
	document.getElementById('dynamic').reset();
}