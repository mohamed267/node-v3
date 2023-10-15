const getUserAsync = (userId, callback) => {
    const users = {
      1: { name: 'John', age: 35 },
      2: { name: 'Jane', age: 28 }
    };
  setTimeout(()=>{
    callback(users[userId])
    
  } , 3000)
  }
  
getUserAsync(1 , (user)=>{
    console.log("our selected user is => " , user)
});

console.log("argv => ", process);