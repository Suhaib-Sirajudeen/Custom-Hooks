import { useRef, useState } from "react"

export const useDirection=()=>{

  const[dir,setDir]=useState('ltr');
  const[result,setResult]=useState('')
  const paraRef =useRef(null);

  const handleDirection=()=>{

    setDir(prev=>prev==='ltr'?'rtl':prev='ltr');
 
  }
 

  const toCheckDirection=(element)=>{
  
    const textDirection =element.current.getAttribute('dir');
  
    if(textDirection==='ltr'){
      setResult('The Current direction of the text is Left !');
    }else if(textDirection==='rtl'){
      setResult('The Current direction of the text is Right !');
    }

 }

  return({dir,handleDirection ,paraRef,toCheckDirection,result}

  );
}