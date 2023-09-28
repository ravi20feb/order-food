import { useState } from "react";
import { useEffect } from "react";
// import { autoComUrl, autoComplete } from "../../constant";
import { data } from "autoprefixer";



   export default function useAddressMain(){
    let[input,setInput] = useState('');
    let[diffAddress,setDiffAddress] = useState([])
  

   //  remove previous address from diffaddress when input length <3 && diffAddress.length>3
      useEffect(()=>{
      
      console.log(diffAddress)
      input.length<3 && diffAddress.length>3 ? setDiffAddress(''):console.log('do ');
      
      //   

      })
   // console.log(diffAddress)
    
   //  console.log(diffAddress)
    


      async function getAddressApi(input){
      
      const fetch1 = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${input}&types=`);

      console.log(fetch1);
      const json =await  fetch1.json();
      
      let {data} = json
      setDiffAddress([...data])
      
      }
    
      useEffect(
         
         ()=>{
         let timer; 
         if (input.length>=3 ) {
            console.log('hwllo address')
            console.log(input)
            timer=  setTimeout(()=>getAddressApi(input),700)
         }
            return ()=>clearTimeout(timer)
         },[input])
      // useEffect(
         
      //    ()=>{
      //    let timer; 
      //    if (input.length>=3 ) {
      //       console.log('hwllo address')
      //       console.log(input)
      //       timer=  setTimeout(()=>getAddressApi(input),700)
      //    }
      //       return ()=>{clearTimeout(timer)}
      //    },[])

   return [input,setInput,diffAddress,setDiffAddress]
}

