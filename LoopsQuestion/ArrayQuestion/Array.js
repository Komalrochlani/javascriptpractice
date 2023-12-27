
const numbers = [];

const mapNum = numbers.map((item,array)=>{
    return item + 5;
})

//console.log(mapNum);


const sum = numbers.reduce( (prev,curr)=> {
    return prev + curr;
})

console.log(sum);