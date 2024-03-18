// const tinderUser = new Object();    // singleton object
const tinderUser = {}   // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Pawan",
            lastName: "Joshi"
        }
    },
    printName: function(){
        console.log("hello");
    }
}

console.log(regularUser.fullname?.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2, obj3);       // put values from obj1, 2, 3 and assign it in {}
console.log(obj4);      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

