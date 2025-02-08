// // const tinderUser = new Object()  // declaring obj
// const tinderUser = {} // declared empty obj 

// tinderUser.id = "123abc"  // declared key and values for the obj
// tinderUser.name = "Sammy" 
// tinderUser.isLoggedIn = true 

// // console.log(tinderUser);

// // const regularUser = {
// //     email: "some@gmail.com",
// //     fullname: {
// //         userfullname: {
// //             firstname: "hitesh",
// //             lastname: "choudhary"
// //         }
// //     }
// // }

// // // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }  // merging two njects in 
// const obj3 = Object.assign( obj1, obj2, obj4)  // adding stores objects in first object and then it will be stored in the variable 
// const obj5 = Object.assign( {},obj1, obj2, obj4)  // adding objects into the empty container then valuse assigned to variable

// // const obj3 = {...obj1, ...obj2}
// // console.log(obj3);
// // console.log(obj5);


// // when data comes from database its into the array

// const users = [ 
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 2,
//         email: "p@gmail.com"
//     },
//     {
//         id: 3,
//         email: "r@gmail.com"
//     },
// ]

// // console.log(users[1].email);  // taking output from the exact keys

// // console.log(users); // all data has been outputed

// // methods for 
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// storing values 

const course = {
    coursename: "js in hindi",
    price: "999",
    Id: "Valid"
}

// course.courseInstructor    not gonna use this repetedly 

// instead use direct declaratio 
const {Id : notID} = course  // destructuring the object by giving anorther key to the same value 

console.log(notID);  
 
// methods to do destructuirng ? and its in the react
// when you see these curly braces then its de structructing the object 

// const header = ({section}){

// }

// header(section = "company")


// api structure  api  jason structure 

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

