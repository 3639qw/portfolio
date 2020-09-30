var b1 = document.body;
var table1 = document.createElement('table');
var julldle = [];
var candle  =[];
var turn = 'X';

var callback = function(event1){
	console.log(event1.target); //Ä­
	console.log(event1.target.parentNode); //ÁÙ
	console.log(event1.target.parentNode.parentNode); //Å×ÀÌºí

	var mutjull = julldle.indexOf(event1.target.parentNode);
	console.log('¸îÁÙ', mutjull);
	var mutcan = candle[mutjull].indexOf(event1.target);
	console.log('¸îÄ­', mutcan);

	if(candle[mutjull][mutcan].textContent !== undefined){ //Ä­ÀÌ ÀÌ¹Ì Ã¤¿öÀú ÀÖ´Â°¡?
		console.log('ºóÄ­¾Æ´Õ´Ï´Ù');
		candle[mutjull][mutcan].textContent = turn;
		if(turn == 'X'){
			turn = '0';
		}else{
			turn = 'X';
		}

	}else{
		console.log('ºóÄ­ÀÔ´Ï´Ù');
	}

	};

for(i=1; i<=3; i++){
	var jull = document.createElement('tr');
	julldle.push(jull);
	candle.push([]);
	for(var j=1; j<=3; j+=1){
		var can = document.createElement('td');
		can.addEventListener('click', callback);
		candle[i - 1].push(can);
		jull.appendChild(can);
	}
	table1.appendChild(jull);
}
b1.appendChild(table1);
console.log(julldle, candle);




