// module.exprts = {
//     hello: () => {console.log}
// }
 const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

 function myLogger() {
  console.log(myNumbers, animals);
}

class Alligator {
   constructor() {
     // ...
   }
}


export default {Alligator, myLogger, myNumbers}
// export default {a:2}
// var w = {a:'vhgt',g:777}


