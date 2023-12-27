//0,1,1,2,3,5,8,13,21

const fibonacci = function(n)
{
    var n1 = 0;
    var n2 = 1;
    var n3 = n1+n2;
    //console.log(n1);
    //console.log(n2);
    var i = 2;
    while(i<=n)
    {
        n3 = n1 + n2;
    //    console.log(n3);
        n1 = n2;
        n2 = n3;
        i++;
        if(i == n){
            return n3;
        }
    }
}

const res = fibonacci(7);
console.log(res);