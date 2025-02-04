// array 

let myArry = [0,1,2,3,4,5]

// const myHeros = ["spiderman","Batman"]

// // console.log(myHeros[1]);


// // array methods 



// myArry.push(6)   
// myArry.push("heloo")
// // push adds elements to the array position -> in Last

// myArry.pop()
// //pop removes the last element position -> in last

// myArry.unshift(9)
// // addes new element in the start 

  
// console.log('does it include 9 =>>' + myArry.includes(9));  
//  // incluude shows is the given value is included or not in myArray

// console.log(myArry.indexOf(19)); 
// // it gives the value of the index value of given number 

// console.log(myArry);


// const newArray = new Array(1,2,3,4,5,'RTCRtpReceiver','removeEventListener','r','RTCRtpReceiver');

// const newArr = newArray.join();

// console.log(newArr);




// slice and splice difference 

console.log("A = ", myArry );
console.log(myArry.slice(2,4));   // copies specific elements from the array and doesnt effect the original array
console.log("After Slicing A = ", myArry );




console.log("B = ", myArry );
console.log(myArry.splice(2,4));   // Cutes specific elements from the array and it effect the original array
console.log("After Splicing B = ", myArry );

