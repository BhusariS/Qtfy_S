import axios from "axios";

const BACKEND_ENDPOINT ='https://qtify-backend-labs.crio.do';

export async function fetchTopAlbums(){
    try{
        const res=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    }catch(e){
        console.log(e);

    }

}
export async function fetchSongs(){
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

// const promise=new Promise((res, rej)=>{
//     setTimeout(() => {
//         res("hello");
//     }, 2000);
// })

// promise.then((res)=>{
//     const a=12;
//     console.log(a);
//     console.log(res);
// })