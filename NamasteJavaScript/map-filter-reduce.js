const arr = [1,2,3,4,5];

function double(x)
{
    return x * 2;
}
const output = arr.map(double);
//or we can write
//const output = arr.map(function double(x){return x * 2 })
//or
//const output = arr.map((x) => x*2)
console.log(output);

//filter
//find odd number

function isOdd(x)
{
    return x % 2;
}
const output1 = arr.filter(isOdd);
console.log(output1);

//reduce
//sum or max

function sumAll(arr)
{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumAll(arr);
//same above function written with reduce function

const output2 = arr.reduce(function (acc, curr){
    acc = acc + curr;// accumulator is value (above like sum) into a single result 
    //+ currentValue is holding a particluar single value of the array one by one
    // acc is holding sum of array
    return acc;
})

console.log(output2);

//for max

function findMax(arr)
{
    let max = 0;
    for(let i =0; i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    console.log(max);
}
findMax(arr);
const maxValue = arr.reduce(function (max,curr){
    if(max < curr)
    {
        max = curr;
    }
    return max;
}, 0)//this 0 means initial value is 0 acc is 0 at starting
console.log(maxValue);

//list all full names
const users = [
    {firstName :"Komal", lastName : "Rochlani", age : 30},
    {firstName :"Nikhil", lastName : "Sharma", age : 32},
    {firstName :"P", lastName : "Sha", age : 22},
    {firstName :"Tanu", lastName : "ro", age : 25},
];

//{30:2, 32:1.25:1}
const output4 = users.map((x) => x.firstName + " "+ x.lastName);
console.log(output4);

const output5 = users.reduce(function(acc,curr)
{
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(output5);

//program to write firstname whose age is below 30
const output6 = users.filter((x) => x.age<30).map((i) => i.firstName)
console.log(output6);