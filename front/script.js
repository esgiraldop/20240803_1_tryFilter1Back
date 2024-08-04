
fetch('http://localhost:3000/api/users/', {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
        // "Authorization": true
    },
    body:JSON.stringify({
        name: "jose bareto",
        email: "jose@bareto.com",
        password: "123"
    })
}).then(response => {
    console.log(response.json())
}).catch(()=>{
    console.log("Error fetching")
})

// const testFunc = async () =>{
//     try{
//         const response = await fetch('http://localhost:3000/api/users/');
//         console.log("response: ", response)
//     }catch(error){
//         console.log("error: ", error)
//     }
// }

// testFunc()
// console.log("response: ", response)