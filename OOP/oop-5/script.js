const test1 = new Test();

test1.testProp = "Hello Boss";
console.log(test1.testProp);

//---------------------------------------

const test2 = new Test2();

console.group("Test2");

console.log(test2.testProp = "bbb");
console.log(test2);

console.log(test2.testProp = '');
console.log(test2);

console.log(test2.setTestProp(""));
console.log(test2);

console.groupEnd();

//---------------------------------------

console.log(test2.testProp);

//---------------------------------------

const test3 = new Test3();
console.group("Test3");

console.log(test3);
console.log(test3.testProp);
console.log(test3.testProp = 32);
console.log(test3.testProp);
console.log(test3);

console.groupEnd();

//---------------------------------------
const test4 = new Test4();

console.group("Test4");

console.log(test4.testProp = 5)
console.log(test4.testValue);

console.log(test4.testProp = 15)
console.log(test4.testValue);
console.groupEnd();
