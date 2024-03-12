// import plus from './modules/plus.js'
// import minus from './modules/minus.js'
// import division from './modules/division.js'
// import multiplication from './modules/multiplication.js'
//! ///////////////////////////////////////////////////////////////
// import {plus, minus, division, multiplication} from './modules/math.js'
//! ///////////////////////////////////////////////////////////////
// import math from './modules/math_obj.js'
//! ///////////////////////////////////////////////////////////////
import {plus, minus, division, multiplication} from './modules/math_obj.js'

console.log('hi');

console.log(plus(5,2));
console.log(minus(5,2));
console.log(division(5,2));
console.log(multiplication(5,2));

const url = 'https://api-football-v1.p.rapidapi.com/v3/timezone';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42e4f1afc5mshf98cca64b27608cp186fa2jsnf46c39352989',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}