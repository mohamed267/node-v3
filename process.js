console.log("our process argv   => ", process.argv)
console.log("our process pid  => ", process.pid)
console.log("console.log  env mode  ",  process.env.NODE_ENV);


//test exist of process

console.log("testing exiting of  process")

const sum  =  (a, b , callback)=>{
    console.log("stare summing ")
    setTimeout(()=>{
        console.log("callback the result ")
        callback(a + b)
    } , 4000 )
}


sum( 1, 3 , (sum)=>{
    console.log("our sum here is  => ", sum)
})
console.log("exiting the process");
process.exit()

