import { useEffect, useRef, useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage";
import"./Input.css"
import { useNavigate } from "react-router-dom";

export const Input=()=>{

  const[userInPut,setUserInPut]=useState('');

  const[alldata,setAlldata]=useState([]);

  const{storeData,retrieveData}=useLocalStorage();

  const navigate=useNavigate();

  const inputRef=useRef(null);

  // const userDatas=[];

  // if(userDatas){
  //   setAlldata(prev=>[...prev,userDatas]);
  // }
 

 useEffect(()=>{

  const userDatas=retrieveData('userData')
  // console.log(userDatas)
  if(userDatas){
    setAlldata(userDatas)
  }

 },[])

  

  const handleChange=(event)=>{

    setUserInPut(event.target.value)
  }
  const addData=()=>{
    console.log(userInPut)

  
      setAlldata(prev=>[...prev,userInPut])
      storeData('userData',[...alldata,userInPut])
      setUserInPut("")
      // console.log(inputRef.current)
      inputRef.current.focus();
    
 
  }

  const deleteName=(i)=>{

    const newData=alldata.filter((item,index)=>index!==i)
    setAlldata(newData);
    storeData('userData',newData);
  }
  // if(alldata.length>0){
  //   storeData('userData',alldata)

  // }


  return(
    <>
    <div className="main-conatiner">
      <button onClick={()=>navigate(-1)} style={{marginBottom:"10px"}}>Home Page</button>
      <div className="input-section">


        <input type="text" name="" id="" value={userInPut} onChange={handleChange} ref={inputRef}/>
        <button onClick={addData}>Add</button>
      </div>

      <div className="display-container">

          {alldata.map((item,index)=>{
          return(<>

                <div style={{padding:"10px"}}>{item}<button onClick={()=>deleteName(index)}>Delete</button></div>

          
          </>
          
         
          )
          
        })}

      </div>
    </div>
   

    
    </>
  )
}