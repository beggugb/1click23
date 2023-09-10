export default function authHeader() {    
    const token = JSON.parse(localStorage.getItem("@tokenUnity22"));
    if(token){
        return { 'x-access-token' : token}
    }else{
        return {};
    }
}