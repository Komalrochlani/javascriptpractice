const radius = [2,3,4,5];

const area = function (radius) {
    return Math.PI * radius * radius;
};


const circumference = function (radius)
{
    return 2 * Math.PI * radius;
};

const diameter = function (radius)
{
    return 2 * radius;
};

const calculate = function (arr,logic) {
    const output = [];
    for(let i=0;i<arr.length;i++)
    {
        output.push(logic(arr[i]));
    }
    return output;
};


//we can write map function also instead of calculate
console.log(radius.map(area));//calculate is polyfill of map

console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));







// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);