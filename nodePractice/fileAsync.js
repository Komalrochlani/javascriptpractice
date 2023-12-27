const fs=require("fs");

fs.readFile("./content/first.txt", "utf-8", (err,result) =>{
    if(err){
        console.log(err);
    }
    const first =  result;
    console.log(result);

    fs.readFile("./content/second.txt", "utf-8", (err,result) =>{
        if(err){
            console.log(err);
        }
        const second =  result;
        console.log(result);
    
        fs.writeFile("./content/thirdAsyn.txt",`new content heloooo:${first} ${second}`,(err,result) => {
            if(err){
                console.log(err);
            }
             const thirdAsyn =  result;
            console.log(result);
        })
    
    })
})


console.log("program ends")