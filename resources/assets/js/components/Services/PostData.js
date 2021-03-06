export function PostData(type,userData){
    
    let BaseUrl = "http://127.0.0.1:8000/api/";

    return new Promise ((resolve, reject) => {
        fetch(BaseUrl+type,{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resolve(responseJson);
        }).catch((error) => {console.log(error)});
    });
}