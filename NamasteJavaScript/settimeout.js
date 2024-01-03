// function time()
// {
//     setTimeout(function(){
//         console.log("hello");
//     },3000);
//     for(let i=0;i<100;i++)
//     {
//         console.log(i);
//     }
// }

// time();


function x()
{
for(var i=1;i<=5;i++)
{
   function close(i){
       setTimeout(() =>{
        console.log(i);
    },i*1000);
   }
   close(i);
}
console.log("Practice page")
}

x();
