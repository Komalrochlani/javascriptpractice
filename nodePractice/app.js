//const {readFile , writeFile}= require("fs").promises
const fs = require("fs");
const util = require("util")
 const readFilePromise = util.promisify(fs.readFile)
 const writeFilePromise = util.promisify(fs.writeFile)


const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        }) 
    })
}

const start = async () => {
    try{
    const first = await getText("./content/first.txt")
    const second = await getText("./content/second.txt")
    // const first = await readFile("./content/first.txt","utf-8")
    // const second = await readFile("./content/second.txt","utf-8")
    console.log(first + second)
    await writeFile("./content/promiseThirdFile2.txt",`This is Promised ${first} ${second}`)
    }catch(error){
        console.log(error)
    }
}

start()
console.log("program ends")