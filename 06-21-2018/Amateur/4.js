// 4. Type Object
// Write a function that returns an object with keys set to the arguments passed in and values equal to the types of the corresponding keys. Arguments will be type "number", "string", or "boolean".
// input: "hey", 1, "Jeffrey wants to go to the store", false
// output: {
//           hey: “string”,
//           1: “number”,
//           "Jeffrey wants to go to the store": “string",
//           false: “boolean"
//         }

function typeObject() {
  return Array.from(arguments).reduce((obj, arg) => {
    obj[arg] = typeof arg;
    return obj;
  }, {});
}
