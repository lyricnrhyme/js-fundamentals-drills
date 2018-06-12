/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
var sumArrays = function(arr1, arr2) {
  var sum = 0;
  for (var i=0; i<arr1.length; i++) {
    sum += arr1[i];
  }
  for (var i=0; i<arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr) {
  var length = 0;
  for (var i=0; i<arr.length; i++) {
    length += 1;
  }
  return length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr){
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr){
  var lengthArr = [];
  for (var i=0; i<arr.length; i++) {
    lengthArr.push(arr[i].length);
  }
  return lengthArr;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arr){
  var lengthSum = 0;
  for (var i=0; i<arr.length; i++) {
    lengthSum += arr[i].length;
  }
  return lengthSum;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  return Object.values(obj);
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj) {
  return Object.keys(obj).length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num) {
  var zeroArr = [];
  for (var i=0; i<num; i++) {
    zeroArr.push(0);
  }
  return zeroArr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  var newArr = [];
  for (var i=0; i<arr.length-1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  var splitStr = str.split("");
  return splitStr;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(arr) {
  var last = 0;
  for (var i=0; i<arr.length; i++) {
    last = arr[i].length;
  }
  return last;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr) {
  var selectSum = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i]<10) {
      selectSum += arr[i];
    }
  }
  return selectSum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  var amount = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length > 10) {
      amount += 1;
    }
  }
  return amount;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  var product = 1;
  for (var i=0; i<arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i]>0) {
      sum += arr[i];
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  var amount = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length <= 3) {
      amount += 1;
    }
  }
  return amount;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  var amount = 0;
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] == "object") {
      amount += 1;
    }
  }
  return amount;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  return Object.keys(obj);
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  return Object.values(obj);
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(str1, str2) {
  var newObj = {};
  newObj[str1] = str2;
  return newObj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(str1, str2) {
  var newObj = {};
  newObj[str2] = str1;
  return newObj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  var newObj = {};
  newObj[arr[0]] = arr[1];
  return newObj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  var newObj = {};
  newObj[arr[1]] = arr[0];
  return newObj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  var newObj = {};
  for (var i=0; i<arr.length; i++) {
    newObj[arr[i]] = 0;
  }
  return newObj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  return Object.values(obj);
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  return Object.keys(obj);
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  return Object.entries(obj);            
};


/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  var newObj = {};
  for (var i=0; i<arr.length; i++) {
    newObj[arr[i]] = false;
  }
  return newObj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arr1, arr2) {
  var newObj = {};
  for (var i=0; i<arr1.length; i++) {
    newObj[arr1[i]] = arr2[i];
  }
  return newObj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2) {
  var newArr = [];
  var firstArr = Object.entries(obj1);
  var secondArr = Object.entries(obj2);
  for (var i=0; i<firstArr.length; i++) {
    newArr.push(firstArr[i]);
  }
  for (var i=0; i<secondArr.length; i++) {
    newArr.push(secondArr[i]);
  }
  return newArr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  var newObj = {};
  for (var i=0; i<arr.length; i++) {
    newObj[arr[i]] = true;
  }
  return newObj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  var newObj = {};
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length >= 5) {
      newObj[arr[i]] = true;
    } else {
      newObj[arr[i]] = false;
    }
  }
  return newObj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  var newObj = {};
  for (var i=0; i<arr.length; i++) {
    newObj[arr[i]] = true;
  }
  return newObj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  var splitStr = str.split("");
  var newObj = {};
  for (var i=0; i<splitStr.length; i++) {
    newObj[splitStr[i]] = true;
  }
  return newObj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}