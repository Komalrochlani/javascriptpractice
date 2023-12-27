
const primeNumber = function(x) {
    var flag = true;
    for(let i=2; i<x; i++)
    {
        if(x%i == 0)
        {
            flag = false;
            break;
        }
    }
    
    if(flag)
    {
        console.log("Prime Number");
    }else{
        console.log("Not a Prime Number");
    }
}

primeNumber(5);