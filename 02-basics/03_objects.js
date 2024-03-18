// singleton
// Object.create


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Pawan",
    age : 23,
    [mySym] : "myKey2",
    isLoggedIn : true,
    "full name" : "Pawan Chandra Joshi"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.age = 24;
// Object.freeze(JsUser);      // this will freeze the object from updating
JsUser.age = 23;    // this is not going to give error, however value will not update.

JsUser.helloFunc = function(){
    console.log("Hey there!");
}]]]]

JsUser.helloFunc2 = function(){
    console.log(`Hey there! ${this.name}`)
}

console.log(JsUser.helloFunc());
console.log(JsUser.helloFunc2());