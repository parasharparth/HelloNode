console.log("Hello World");

// const assert = require('assert');
//
// let x = 3;
// let y = 7;
// let z = "2";
//
// assert(x + y === 10);
// //assert(x + z == 5);
// assert(x + z === "32");
//
// function doubleNumber(number) {
// 	return number * 2;
// }
//
// assert(doubleNumber(7) === 14);
// assert(doubleNumber(9) === 18);
//
// function tripleNumber(number) {
// 	return number * 3;
// }
//
// assert(tripleNumber(7) === 21);
// assert(tripleNumber(9) === 27);
//
// let doubledNumber = doubleNumber(10);
// // doubledNumber == 20
// let functionVar = doubleNumber;
// assert(functionVar(20) === 40);
//
// functionVar = tripleNumber;
// assert(functionVar(20) === 60);
//
// /////////////////////////////////////////////////////////////////
// function isEqual(a, b) {
// 	if (Array.isArray(a) && Array.isArray(b)) {
// 		return compareArray(a,b);
// 	}
// 	else if (typeof a === "object" && typeof b === "object") {
// 		return compareObjects(a,b);
// 	}	
//	
// 	if (a === b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
//	
// 	function compareObjects(a, b) {
// 		let keysA = Object.keys(a);
// 		let keysB = Object.keys(b);
//		
// 		for (const key of keysA) {
// 			if (typeof a[key] === "object") {
// 				if (typeof b[key] !== undefined && typeof b[key] === "object") {
// 					if (!compareObjects(a[key], b[key])) return false;
// 				} else return false;
// 			} else if (Array.isArray(a[key])) {
// 				if (Array.isArray(b[key])) {
// 					if (!compareArray(a[key], b[key])) return false;
// 				} else return false;
// 			} else {
// 				if (a[key] !== b[key]) return false;
// 			}
// 		}
// 		return true;
//		
// 	}
//	
// 	function compareArray(a, b) {
// 		if( a.length !== b.length) return false;
//		
// 		for (let i = 0; i < a.length; i++) {
// 			if(a[i] !== b[i]) {
// 				return false
// 			}
// 		}
// 		return true;
// 	}
// }
//
// assert(isEqual(10, 10));
// assert(isEqual(1, 2) === false);
// assert(isEqual(5, 5));
//
// assert(isEqual([], []));
// assert(isEqual([1, "z"], [1, "z"]));
//
// ////////////////////////////////////////////////////////
// x = 5; //variable
// x = [7, 5]; //array
// x = { name: "Tom", age: 7 };
// y = { name: "Beth" };
//
// assert(isEqual(x, y) === false);
//
//
// console.log("All assertions passed");
