
// 1
// var funcs = [];
// for(var i = 0; i < 11; i++){
//     funcs.push(
//         function(x){
//             return function(){
//             console.log(i); // console eleven times eleven
//         }
//         ()
//         }
        
//     )
// }

// funcs.forEach(function(a){
//     a();
// });




// 2
// var funcs = [];
// for(var i = 0; i < 11; i++){
//     funcs.push(
//         function(x){
//             return function(){
//             console.log(x); // console a value of i by indexing number
//         }
        
//         }
//         (i)
        
//     )
// }

// funcs.forEach(function(a){
//     a();
// });




// 3
// var funcs = [];
// for(let i = 0; i < 11; i++){
//     funcs.push(
//         function(x){
//             return function(){
//             console.log(x); // console a value of i by indexing number
//         }
        
//         }
//         (i)
        
//     )
// }

// funcs.forEach(function(a){
//     a();
// });




// 4
// var funcs = [];
// for(let i = 0; i < 11; i++){
//     funcs.push(
//         function(){
//             console.log(i); // console a value of i by indexing number
//         }
        
        
//     )
// }

// funcs.forEach(function(a){
//     a();
// });



// 5 
// var array1 = [];
// var x = {
//     a:true,
//     b:false,
//     c:true
// }

// for(var key in x){
//     array1.push(function(){
//         console.log(key) // console three times (c)
//     })
// }

// array1.forEach(function(a){
//     a();
// })



// 6
// var array1 = [];
// var x = {
//     a:true,
//     b:false,
//     c:true
// }

// for(let key in x){
//     array1.push(function(){
//         console.log(key) // console each property(a,b,c)
//     })
// }

// array1.forEach(function(a){
//     a();
// })


// 7
// var array1 = [];
// var x = {
//     a:true,
//     b:false,
//     c:true
// }

// for(var key in x){
//     array1.push(function(){
//         console.log(x[key]) // console the value of last property(true);
//     })
// }

// array1.forEach(function(a){
//     a();
// })


// 8
// var array1 = [];
// var x = {
//     a:true,
//     b:false,
//     c:true
// }

// for(let key in x){
//     array1.push(function(){
//         console.log(x[key]) // console the value of each property(true,false,true);
//     })
// }

// array1.forEach(function(a){
//     a();
// })


// 9
// var array1 = [];
// //throws an error on one iteration
// for(const i = 0; i < 11; i++){
//     array1.push(function(){
//         console.log(i);
//     })
// }




// let a = `hello`;
// console.log(window.a);

// let b = `hello`;
// console.log(window.b);




// let a = value => value + 5;

// console.log(a(2));

// let b = id => ({id:id, name : "temp"});

// let person = function(name) {
//     return {
//     getName: function() {
//     return name;
//     }
//     };
//    }("Nicholas");
//    console.log(person.getName()); // "Nicholas"





// let c = (name,name1) => name - name1;

// console.log(c(10,4));



// let d = () => "beerbal"




//  let calcTot = (merchTot) => {
//  let orderTot;
//  if (merchTot >= 100) {
//  orderTot = merchTot;
//  }
//  else if (merchTot < 50.01) {
//  orderTot = merchTot + 5;
//  }
//  else {
//  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//  }
//  return orderTot;
// }
// console.log(calcTot(40));



// let myIdentity = (id,name) => ({myId:id,myName:name});

// console.log(myIdentity(121,`beerbal`));


// let myIdentity1 = (id,name) => ({myId:id,myName:name});

// console.log(myIdentity1(121,`beerbal`).myId);


// let myIdentity2 = (id,name) => ({myId:id,myName:name});

// console.log(myIdentity2(121,`beerbal`).myName);



// let myIdentity3 = (name) => {
//       return {
//          myName : function(){
//            return name;
//          }
          
//       };
// }("beerbal");

// console.log(myIdentity3.myName());



// let myFunc = (e,f,g,h) => [g,h,f,e,f,g,e];

// console.log(myFunc(1,2,3,4));

// let myIdentity4 = function(name){
//     return{
//         myName : function(){
//             return(name);
//         }
//     }
// }("beerbal");
// console.log(myIdentity4.myName()); //beerbal


// let myIdentity5 = function(name){
//     return{
//         myName : function(){
//             return(name);
//         }
//     }
// }("beerbal");
// console.log(myIdentity5.myName);//ƒ (){return(name);}


// let myIdentity6 = function(name){
//     return{
//         myName : function(){
//             return(name);
//         }
//     }
// }
// console.log(myIdentity6("beerbal"));//{myName: ƒ}


// let myIdentity7 = function(name){
//     return{
//         myName : function(){
//             return(name);
//         }
//     }
// }
// console.log(myIdentity7("beerbal").myName());//beerbal




// let myIdentity8 = (name) => ({
//        myName : () => name
//     }
// )

// console.log(myIdentity8("beerbal").myName()); // beerbal


// let myIdentity3 = (name) => ({
//        myName : () => name
//     }
// )
// ("beerbal");

// console.log(myIdentity3.myName()); // myIdentity3.myName is not a function error




// let myIdentity3 = ((name) => ({
//     myName : () => name
//  }
// ))
// ("beerbal");

// console.log(myIdentity3.myName()); // beerbal




//  let MyFunction = (name,fName,cityName)=>{
// this.name= name;
// this.fName = fName;
// this.cityName = cityName;
// }
// let myObj = new MyFunction("beerbal","kirshan","mithi");
// console.log(myObj);//Uncaught TypeError: MyFunction is not a constructor



// let  a = "beerbal";
// console.log("a" in window);




// const b = "beerbal";
// console.log("b" in window);





// var c = "beerbal";
// console.log("c" in window);





// let name = "name";
// let myObj = {
//     ["my" + name]: "beerbal"
// }




// myObj["lastname"] = "kumar";
// console.log(myObj);




// console.log(-0 === +0);
// console.log(-0 == +0);
// console.log(Object.is(-0,+0));
// console.log(NaN === NaN);



// let node ={
//   type : "Ingentifier",
//   name : "beerbal"
// }

// let type = "letural";
// let name = "sagar";

// ({name,type} = node)
// console.log(name);
// console.log(type);

// let myObj1 = {
//     firstName:"beerbal",
//     lastName : "kumar" 
// }

// let {firstName,lastName} = myObj1;
// myFunc = (value) =>{
//   console.log(value === myObj1.firstName);
//   return value;
// }
// console.log(myFunc(firstName));



// let myObj2 = {
//     city:"mithi",
//     village:"bhorilo"
// }
// let {city:myCity,village:myVillage,home:myHome = "my sweet home"} = myObj2;

// let myFunc1 = (value)=>{
//   console.log(value === myObj2);
//   console.log(myObj2);
//   console.log(value);
// }
// console.log({} = myObj2);
// console.log(myFunc1({a,b} = myObj2));
// console.log({});
// console.log(myHome);
// console.log(myCity);
// console.log(myVillage);





// let myObj3 = {
//     city:"mithi",
//     village:"bhorilo"
// }
// city = "karachi";
// village = "rohal";
// let {} = myObj3;
// console.log(city);
// console.log(village);






// ex 1
// let node={
//     name:"umar",
//     fname:"aslam"
// }

// let {name,fname}=node

// console.log(name,fname)







// ex2

// let node={
//     name:"umar",
//     fname:"aslam"
// }

// name="u"
// fname="a"

// let {name:myName,fname:myFname}=node

// console.log(name,fname);






// ex3
// let node={
//     name:"umar",
//     fname:"aslam"
// }

// name="u"
// fname="a"

// let {}=node

// console.log(name,fname);







// ex4 functions

// let node = {
//     type: "Identifier",
//     name: "foo"
//    },

//    type = "Literal",
//    name = 5;
   
//    function outputInfo(value) {
//     console.log(value === node); // true
//    }
//    outputInfo({ type, name } = node);
//    console.log(type); // "Identifier"
//    console.log(name); 







// ex5 

// let node = {
//     type: "Identifier",
//     name: "foo"
//    },

//    type = "Literal",
//    name = 5;
   
//    function outputInfo(value) {
//        console.log(value);
//        console.log(node)
//     console.log(value === node); // true
//    }
//    outputInfo( { } = node ) ;
//    outputInfo( { a , b } = node ) ;
//    outputInfo( { a  } = node ) ;


//    console.log(type); // "Identifier"
//    console.log(name);
//    console.log(a);
//    console.log(b);




// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//     start: {
//     line: 2,
//     column: 3
//     },
//     end: {
//     line: 1,
//     column: 4
//     }
//     }
//    };

//    let {type,name,loc:myLoc={start:myStart={line:myLine1,column:myColumn1},end:myEnd={line:myLine2,column:myColumn2}}} = node;
//    console.log(myLoc);
//    console.log(myStart);
//    console.log(myEnd);
//    console.log(myLine1);
//    console.log(myColumn1);
//    console.log(myLine2);
//    console.log(myColumn2);
//    console.log(type);
//    console.log(name);
   



// let myArray = [`blue`,`green`,`yellow`];

// let [firstColor,seconColor,thirdColor] = myArray;

// console.log(firstColor);
// console.log(seconColor);
// console.log(thirdColor);




// var a = 12;
// var b = 20;
// console.log(a,b);

// var c;
//  c = a;

//  a = b;
//  b = c;
//  console.log(a,b);



// let node1 = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//     start: {
//     line: 2,
//     column: 3
//     },
//     end: {
//     line: 1,
//     column: 4,
//     myArray1 :["beerbal","Darpan","Khatumal",["hishmat"]]
//     }
//     }
//    };

//    let {loc:{end:{line,column,myArray1:[myName,,,[yourName]]}}} = node1;
//    console.log(myName,yourName);




// let node1 = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//     start: {
//     line: 2,
//     column: 3
//     },
//     end: {
//     line: 1,
//     column: 4,
//     myArray1 :["beerbal","Darpan","Khatumal",["hishmat","jaidev"]]
//     }
//     }
//    };

//    let {loc:{end:{line,column,myArray1:[...names]}}} = node1;
//    console.log(names[3][1]);



// let myArray2 = ["mithi","karachi","islamkot",["rizwan","beerbal"],myObj={
//     a1:"Arsalan",
//     a2 :"Umair"
// }]

// let [...citynames] = myArray2;

// console.log(citynames[4].a1,citynames[4].a2);





// let myPara = "My name is beerbal kumar.";


// console.log(myPara.startsWith("M"));
// console.log(myPara.includes("beerbal"));
// console.log(myPara.endsWith("kumar."));
// console.log(myPara.startsWith("is"));


// console.log(myPara.startsWith("e",6));
// console.log(myPara.endsWith("a",1));

// let myArray = ["beerbal","kumar",["jaswant","singh"],myObj={
//     city:"mithi",
//     district:"Tharparkar"
// }];

// let [name,lastname,[firstName,seconName],myObj:{city,district}] = myArray;

// console.log(name);
// console.log(lastname);
// console.log(firstName);
// console.log(seconName);
// console.log(city);
// console.log(district);



// let myObj1 = {
//     cityName:"Islamkot",
//     countryName:"pakistan",
//     end:{
//        line:1,
//        column:4,
//        myArray1:["beerbal","kumar",["jaswant","singh"],myObj2={
//          city:"mithi",
//          district:"tharparkar"
//        }]
//     }
// }
// let {cityName,countryName,end:{line,column,myArray1:[a,b,c,myObj4:{city}]}} = myObj1;
// console.log(a,b,c,city);

// console.log(line);
// console.log(column);




  
//   class PersonClass{
//       constructor(name){
//           this.name = name;
//       }

//       callName(){
//           return this.name;
//       }
//   }

//   let person_1 = new PersonClass("beerbal");

//   console.log(person_1.callName());

//   console.log(person_1 instanceof PersonClass);
//   console.log(person_1 instanceof PersonClass);


//   let Plan = class{
//     constructor(name, price, space, transfer, pages){
//        this.name = name;
//        this.price = price;
//        this.space = space;
//        this.transfer = transfer;
//        this.pages = pages;
//     }
//   }

//   let plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
//   let plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
//   let plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);




//   function createObject(classDef) {
//     return new classDef();
//    }
//    let obj = createObject(class {
//     sayHi() {
//     console.log("Hi!");
//     }
//    });
//    obj.sayHi(); 




// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = !done ? items[i++] : undefined;
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }
//    var iterator = createIterator([1, 2, 3]);

//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());



// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i > items.length);
//     var value = !done ? items[i++] : undefined;
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }
//    var iterator = createIterator([1, 2, 3]);

//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());



// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = done ? undefined : items[i++];
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }
//    var iterator = createIterator([1, 2, 3]);

//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());





// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = done ? undefined : items[i++];
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }
//    var iterator = createIterator([1, 2, 3]);

//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());
//    console.log(iterator.next());





// let set = new Set();
// set.add("5");
// set.add(5);
// console.log(set.size);  // 2

// let set = new Set();
// set.add(5);
// set.add(5);
// console.log(set.size);  // 1


// let set = new Set();
// set.add("5");
// set.add("5");
// console.log(set.size);  // 1

// let beer = new Set([1,2,3,3,4,5]);
// console.log(beer.has(10));\


// let beer = new Set(["beerbal", "kumar","khatumal"]);
// beer.forEach(function(value, key, ownerSet) {
//  console.log(key + " " + value);
//  console.log(ownerSet === beer);
// });

// let a = prompt("enter value");
// let b = prompt("enter value");
// let c = prompt("enter value");
// let d = prompt("enter value");
// let e = prompt("enter value");

// let beer = new Set([a,b,c,d,e]);

// console.log(beer);

// function myFunc(){
//     console.log([...new Set()])
// }


// readFile("textfile.txt",function(err,contents){
//        if(err){
//            throw err;
//        }
//        console.log(contents);
// })

// console.log("hi");




// console.log(`teerath hello how are you!!!!!!!!`);

// setTimeout(function(){
//     console.log(`beerbal kumar`);
// },10000)

// console.log(`kamal-u-ddin`);

// setInterval(function(){
//     console.log(`kailash`);
// },1000);

//     clearInterval(function(){

//     },5000);



// let promise = new Promise(function(a,b){
//    console.log("promise");
//    b();
// })

// promise.then(function(){
//     console.log("beerbal");
// },function(){
//     setTimeout(function(){
//         console.log("kailash");
// },5000)
// })

// console.log("khatumal");





// let promise = Promise.reject();
// promise.then(function() {
//  console.log("Thank you so much");
// },function(){
//    console.log("Thanks for seeing our code");  // output
// });

// console.log("Hello how are you");



// let promise = Promise.resolve();
// promise.then(function() {
//  console.log("Thank you so much");  //output
// },function(){
//    console.log("Thanks for seeing our code");
// });

// console.log("Hello how are you");




// var promise = Promise.reject("beerbal");

// promise.then(null,function(value){
//      console.log(value);
// });


// let prompt1 = +prompt("enter any number");

// if(prompt1 <= 10){
// promise = Promise.resolve("successfull");
// }
// else{
//     promise = Promise.reject("unsuccessfull");
// }
// promise.then(function(a){
//     console.log(a);
// },function(a){
//     console.log(a)
// })




// let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let evenNumber = [];

// let oddNumber = [];

// for(let i = 0; i < numberArray.length; i++){
//     let promise = new Promise(function(resolve,reject){
//         if(numberArray[i]%2 !== 0){
//             resolve(numberArray[i]);
//         }

//         if(numberArray[i]%2 === 0){
//             reject(numberArray[i]);
//         }
//     })

//     promise.then(function(value){
//         oddNumber.push(value);
//         console.log(oddNumber);
//     },function(value){
//         evenNumber.push(value);
//         console.log(evenNumber);
//     })
// }



// let thenable = {
//     then: function(resolve, reject) {
//     resolve(42);
//     }
//    };
//    let p1 = Promise.resolve(thenable);
//    p1.then(function(value) {
//     console.log(value); 
//    },function(value){
//        console.log(value);
//    });



// let thenable = {
//     then: function(resolve, reject) {
//     reject(42);
//     }
//    };
//    let p1 = Promise.resolve(thenable);
//    p1.then(function(value) {
//     console.log(value); 
//    },function(value){
//        console.log(value);
//    });


// let thenable = {
//     then: function(resolve, reject) {
//     reject(42);
//     }
//    };
//    let p1 = Promise.reject(thenable);
//    p1.catch(function(value) {
//     console.log(value); 
//    });



// let thenable = {
//     name: "beerbal",
//     then: function(resolve, reject) {
//     reject(42);
//     }
//    };
//    let p1 = Promise.resolve(thenable);
//    p1.then(function(value) {
//     console.log(value); 
//    },function(value){
//        console.log(value);
//    });


// let submitData = ()=>{
//     let inputData = document.getElementsByTagName(`input`);
//     if(inputData[0].value !== ""&& inputData[1].value !== ""&& inputData[2].value !== ""&& inputData[3].value !== ""&& inputData[4].value !== ""){
//     let promise = Promise.all([inputData[0].value,inputData[1].value,inputData[2].value,inputData[3].value,inputData[4].value]);
//     promise.then(function(value){
//         console.log(value);
//     })
// }
// else{
//     let promise = Promise.reject()
//     promise.catch(function(){
//         alert("fill the field");
//     })
// }
 
// }


// let submitData = ()=>{
//         let inputData = document.getElementsByTagName(`input`);
//         var promise = Promise.all([inputData[0].value,inputData[1].value,inputData[2].value,inputData[3].value,inputData[4].value]);
//         for(let i = 0; i < inputData.length; i++){
//            if(inputData[i].length === 0){
//                promise.catch(function(){
//                    alert("fill the field");
//                })
//            }
//            if(inputData[i].length !== 0){
//                promise.then(function(value){
//                    console.log(value);
//                })
//            }
//         }

// }


// if(true){
//     const a = 123456;
//     console.log(a);
// }
// const a = `beerbal`;
// const a = `ndfnfj`;
// console.log(a);


// console.log(a);
// var a = `teerath`;


// console.log(myFunc())
// function myFunc(){
//      return "jasvant";
// }


// console.log(myFunc()) // error myfunc is not a function
// var myFunc = function(){
//      return "jasvant";
// }
// console.log(myFunc()) // jaswant





// console.log(myFunc()) // error myFunc is not defined
// let myFunc = function(){
//      return "jasvant";
// }
// console.log(myFunc()) // jaswant


// if(true){
//     console.log(typeof a);
//     let a = "bdhdgdhgf";
// }




// console.log(typeof a);//undefined

// if(true){
//     let a = "bdhdgdhgf";
// }
// console.log(typeof b); //undefined


// for(var i = 0; i < 10; i++){
// }
// console.log(i); // 10



// for(let i = 0; i < 10; i++){
// }
// console.log(i); // error



// var funcs = [];
// for (var i = 0; i < 10; i++) {
//  funcs.push(function() {
//  console.log(i);
//  }())
 
// }

// let[a,b,c,d,e,f,g,h,j] = funcs;

// console.log(a());

// funcs[0]();
// funcs[1]();
// funcs[2]();
// funcs[3]();
// funcs[4]();
// funcs[5]();
// funcs[6]();
// funcs[8]();
// funcs[9]();


// funcs.forEach(function(func) {
//  func(); // outputs the number "10" ten times
// });





// var a;

// console.log(a in window);
// console.log(window);



// var myArray = [1,2,3,4,5,6,7,8,9,10]

// for(var i = 0; i<myArray.length; i++){
//     myArray[i] = Math.pow(myArray[i],2);
//     console.log(myArray[i]);
// }

// console.log(myArray);

// var myMap = myArray.map(
//     function(num){
//         return Math.pow(num,2);
//     }
// )
// console.log(myMap);

// var input1 = document.getElementById(`beer`);
// var input2 = document.getElementById(`beer1`);
// var showStudent = (ssn)=>{
//       var myObj = {
//           name : input1.value,
//           lastName :input2.value
//       }
//       localStorage.setItem(ssn,JSON.stringify(myObj));
//      var getData = JSON.parse(localStorage.getItem(ssn));
//      if(getData !== null){
//          document.getElementById(`maindiv`).innerHTML = `${getData.name},${getData.lastName}`
//      }
//      else{
//          console.log(`student not found`)
//      }
// }





// var set = Object.create(null);
// console.log(set);

// set[name] = `beerbal`;
// console.log(set);

// console.log(set[name]); // beerbal



// var set = Object.create(null);
// console.log(set);

// set.name = `beerbal`;
// console.log(set);

// console.log(set[name]); // undefined


// var set = Object.create(null);
// console.log(set);

// set[name] = `beerbal`;
// console.log(set);

// console.log(set.name); //undefined



// var set = Object.create(null);
// console.log(set);

// set.name = `beerbal`;
// console.log(set);

// console.log(set.name); // beerbal



// var set = Object.create(null);
// set[5] = `mithi`;

// console.log(set);


// var set = new Set();
// console.log(set);
// set.add(`beerbal`)
// set.add(`beerbal`);
// set.add(`kirshan`);
// set.add(`mithi`)
// console.log(set);
// console.log(set.size);

// console.log(set.has(`beerbal`)); // true
// console.log(set.has(`kumar`));


// var set = new Set([1,2,3,4,5,5,5,6,7,8,7]);

// console.log(set.size); // 8

// set.delete(1);
// set.clear();
// console.log(set.size);// 0

// var set = new Set([1,2]);
// 
// set.forEach(function(value,key,ownerSet){
//     console.log(value + `` + key);
//     console.log(ownerSet === set);
// 
// })
// 
// 
// var set = new Set([`Rashid`,`beerbal`]);
// var processor = {
//  output(value) {
//  console.log(value);
//  },
//  process(dataSet) {
//  dataSet.forEach(function(value) {
//  this.output(value);
//  },this);
//  }
// };
// processor.process(set);
// 
// 
// 
// 
// 
// let p1 = new Promise(function(resolve, reject) {
//     throw "Explosion!";
//    });
//    p1.catch(function(error) {
//     console.log(error); // "Explosion!"
//     throw "Boom!";
//    }).catch(function(error) {
//     console.log(error); // "Boom!"
//    });
// 
// 
// 
//    let p1 = new Promise(function(resolve, reject) {
//     throw new Error("Explosion!");
//    });
//    p1.catch(function(error) {
//     console.log(error); // "Explosion!"
//     throw new Error("Boom!");
//    }).catch(function(error) {
//     console.log(error); // "Boom!"
//    });
// 
// 
// 
// 
// let p1 = new Promise(function(resolve, reject) {
//     throw Error("Explosion!");
//    });
//    p1.catch(function(error) {
//     console.log(error.message); // "Explosion!"
//     throw Error("Boom!");
//    }).catch(function(error) {
//     console.log(error.message); // "Boom!"
//    });
// 
// 
// 
// 
// let p1 = new Promise(function(resolve, reject) {
//     throw ("Explosion!");
//    });
//    p1.catch(function(error) {
//     console.log(error); // "Explosion!"
//     throw ("Boom!");
//    }).catch(function(error) {
//     console.log(error); // "Boom!"
//  });
// 
// 
// 
// 
// 
// document.getElementById("main-div").innerHTML = "<h1><i> Beerbal Kumar </i></h1>"
// 
// 
// let getId = document.getElementById(`main-div`);
// 
// 
// let myFunc = (a,b,c,d)=>{
//     a.innerHTML = `<${b}><${c}>${d}</${c}></${b}>`;
// }
// 
// myFunc(getId,`h1`,`i`,`Beerbal Kumar`);
// 
// 
// 
// 
// 
// var myArray = [1,2,3,4,5,6,7,8,9,10]
// 
// for(var i = 0; i<myArray.length; i++){
//     myArray[i] = Math.pow(myArray[i],2);
//     console.log(myArray[i]);
// }
// 
// console.log(myArray);
// 
// var myMap = myArray.map(
//     function(num){
//         return Math.pow(num,2);
//     }
// )
// console.log(myMap);
// 
// var input1 = document.getElementById(`beer`);
// var input2 = document.getElementById(`beer1`);
// var showStudent = (ssn)=>{
//       var myObj = {
//           name : input1.value,
//           lastName :input2.value
//       }
//       localStorage.setItem(ssn,JSON.stringify(myObj));
//      var getData = JSON.parse(localStorage.getItem(ssn));
//      if(getData !== null){
//          document.getElementById(`maindiv`).innerHTML = `${getData.name},${getData.lastName}`
//      }
//      else{
//          console.log(`student not found`)
//      }
//
// 
// 
// 
// 
// 
// var set = Object.create(null);
// console.log(set);
// 
// set[name] = `beerbal`;
// console.log(set);
// 
// console.log(set[name]); // beerbal
// 
// 
// 
// var set = Object.create(null);
// console.log(set);
// 
// set.name = `beerbal`;
// console.log(set);
// 
// console.log(set[name]); // undefined
// 
// 
// var set = Object.create(null);
// console.log(set);
// 
// set[name] = `beerbal`;
// console.log(set);
// 
// console.log(set.name); //undefined
// 
// 
// 
// var set = Object.create(null);
// console.log(set);
// 
// set.name = `beerbal`;
// console.log(set);
// 
// console.log(set.name); // beerbal
// 
// 
// 
// var set = Object.create(null);
// set[5] = `mithi`;
// 
// console.log(set);
// 
// 
// var set = new Set();
// console.log(set);
// set.add(`beerbal`)
// set.add(`beerbal`);
// set.add(`kirshan`);
// set.add(`mithi`)
// console.log(set);
// console.log(set.size);
// 
// console.log(set.has(`beerbal`)); // true
// console.log(set.has(`kumar`));
// 
// 
// var set = new Set([1,2,3,4,5,5,5,6,7,8,7]);
// 
// console.log(set.size); // 8
// 
// set.delete(1);
// set.clear();
// console.log(set.size);// 0
// 
// var set = new Set([1,2]);
// 
// set.forEach(function(value,key,ownerSet){
//     console.log(value + `` + key);
//     console.log(ownerSet === set);
// 
// })
// 
// 
// var set = new Set([`Rashid`,`beerbal`]);
// var processor = {
//  output(value) {
//  console.log(value);
//  },
//  process(dataSet) {
//  dataSet.forEach(function(value) {
//  this.output(value);
//  },this);
//  }
// };
// processor.process(set);
// 
// 
// 
// 
// function createIterator(items) {
//     var i = 0;
//     return {
//     next: function() {
//     var done = (i >= items.length);
//     var value = done ? undefined : items[i++];
//     return {
//     done: done,
//     value: value
//     };
//     }
//     };
//    }
//    var iterator = createIterator([1, 2, 3]);
//    console.log(iterator.next()); // "{ value: 1, done: false }"
//    console.log(iterator.next()); // "{ value: 2, done: false }"
//    console.log(iterator.next()); // "{ value: 3, done: false }"
//    console.log(iterator.next()); // "{ value: undefined, done: true }"
//    // for all further calls
//    console.log(iterator.next()); // "{ value: undefined, done: true }"
// 
// 
// 
// 
// 
//    function sum(a,b){
//        return a + b;
//    }
// 
//    function square(a){
//        return a * a;
//    }
// 
//    function sqRoot(a){
//       return Math.sqrt(a);
//    }
// 
//    function hyp(sum){
//       return sum;
//    }
// 
//    var myHyp = hyp(sum(square(2),sqRoot(3)));
// 
//    console.log(myHyp);
// 
// 
// 
// 
// var find = curry(function (db, id) {
// 	var obj = db.get(id);
// 	if(obj === null) {
// 		throw new Error('Object not found!');
// 	}
// 	return obj;
// });
// 
// var csv =(student) => {
// 	return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
// };
// 
// var append = curry(function (elementId, info) {
// 	document.querySelector(elementId).innerHTML = info;
// });
// 
// var showStudent = run( append('#student-info'), csv, find(db) );
// 
// 
// showStudent('444-44-4444');
// 
// 
// 
// var values = [0,3,2,5,7,4,8,1];
// console.log(values);
// 
// var sortOut = values.sort(function(value1,value2){
//     console.log(value1 - value2);
// })
// 
// console.log(sortOut);
// 
// 
// 
// 
// 
// 
// var myFunc = (...myArg)=>({
//     a:myArg[0],
//     b:myArg[1],
//     c:myArg[2],
//     d:myArg[3]
// })
// 
// console.log(myFunc(1,2,3,4));
// 
// 
// var myArray = [200,100,400,1000,50000];
// 
// console.log(Math.max(...myArray)); // 50000
// console.log(Math.max.apply(Math,myArray)); // 5000
// 
// 
// var myArray = [1,200,500,700,1000,1500,2000];

// console.log(Math.max(...myArray,2500)); // 2500
// 
// 
// 
// 
// 
// var myArrayPow = [1,2,3,4,5,6,7,8,9].map(
//     function(num,a=2){
//         return Math.pow(num,a);
//     }
// )
// console.log(myArrayPow);
// 
// 
// 
// 
// 
// 
// var counter = 0;
// function increment(){
//     document.getElementById(`h1`).innerHTML = counter;
//     return ++counter;
// }
// 
// 
// 
// 
// 
// var counter = 0;
// var increment = () => {
// document.getElementById(`h1`).innerHTML = counter;
//   var a = counter++;
//   return a;
// }
// 
// 
// 
// 
// var sum = arr => {
//     var totalResult = 0;
// 
//     for(num of arr){
//      totalResult+=num;
//     }
//     return totalResult;
// 
// }
// 
// var size = arr => arr.length;
// 
// var divide = (mySum,mySize)=>mySum/mySize;
// 
// var average = (arr)=>(divide(sum(arr),size(arr)));
// 
// var input = [100,80,100,2,78,54,78,23];
// 
// var result = average(input);
// 
// console.log(Math.round(result));




// var sum = (a,b)=>a+b;

// var total = arr => arr.reduce(sum);

// var size = arr => arr.length;

// var divide = (a,b)=>a/b;

// var average = arr=>divide(total(arr),size(arr));

// var myArray = [1,2,3,4,5,6,7,8,9];

// console.log(average(myArray));



// var arr = [10, 20, 30, 40, 50, 60]; 

// function sumofArray(sum, num) { 
//   return sum + num; 
// } 
// function myGeeks(){ 
//   document.getElementById("div").innerHTML 
//       = arr.reduce(sumofArray); 
// } 


// let p1 = new Promise(function(resolve,reject){
//     reject(`teerath`);
// })

// p1.then(null,function(a){
//    console.log(a);
//    return a
// }).then(function(a){
//     console.log(a);
// })


// let p1 = new Promise(function(resolve,reject){
//     reject(`teerath`);
// })

// p1.then(null,function(a){
//    console.log(a);
//    throw `beerbal`
// }).catch(function(error){
//     console.log(error);
// })

// let p1 = new Promise(function(resolve,reject){
//     reject(`teerath`);
// })

// p1.then(null,function(a){
//    console.log(a);
//    return a
// }).then(function(a){
//     console.log(a);
// })


// var skulk = (str)=>{
//    console.log(this,str);
// }

// console.log(skulk(`hattori`));



// var skulk = (str)=>{
//     console.log(this,str);
//  }
 
//  skulk.call(`Hattori`);



 
// function skulk(str){
//     console.log(this,str);
//  }
 
//  skulk.apply(`Hattori`);








// function Myfunc(name,age){
//    this.name = name;
//    this.age = age;
// }


// function Myfunc2(name,age,city){
//    Myfunc.call(this,name,age);
//    this.city = city;
// }

// var x = new Myfunc2(`beerbal`,20,`Mithi`);
// Myfunc2.prototype.country = `pakistan`;

// console.log(x);





// class Myfunc{
//     constructor(name,age){
//      this.name = name;
//      this.age = age;
//     }
// }

// class Myfunc1 extends Myfunc{
//     constructor(name,age,city){
//      super(name,age);
//      this.city = city;
//     }
//     country= `pakistan`;
//     sayName() {
//         console.log(this.name);
//         }
// }

// let x = new Myfunc1(`beerbal`,20,`Mithi`,);
// console.log(x);

// let y = new Myfunc1(`beerbal`,20,`Mithi`,);
// console.log(y.hasOwnProperty(`sayName()`));

//  var listOfProperties = [];
//  for (var prop in y) {
//  if (prop) {
//  listOfProperties.push(prop);
//  }
//  }
//  console.log(listOfProperties);

// console.log(`country` in y);

a = [[1,2,3], [4,5,6], [1,2,3]]
b = uniqBy(a, JSON.stringify)
console.log(b) 