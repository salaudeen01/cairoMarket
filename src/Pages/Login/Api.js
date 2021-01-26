export function Api(userData){

  const baseUrl = " http://142.93.152.229/cairo/api/auth/login";

  return new Promise((resolve , reject)=>{

    fetch(baseUrl,{
      method:'POST',
      body: JSON.stringify(userData)
    })
   .then((response)=> response.json())
    .then((responsejson)=>{
      resolve(responsejson)
      // console.log(userData)
    })
    .catch((error)=>{
      reject(error);
    });

  });
}   