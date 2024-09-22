import { useNavigate } from "react-router-dom";
import { useDirection } from "../hooks/useDirection";
import { useToggle } from "../hooks/useToggle";
import "../App.css"


export const Home=()=>{


  const{toggle,handleToggle}=useToggle();

  const {dir,handleDirection,paraRef,toCheckDirection,result}=useDirection();
  const navigate= useNavigate();


  return(<>
          <div className="container"> 
            <div className="login-section">
              {/* <input type="text" name="" id=""  value={userInPut} onChange={handleInPut}/> */}

              <h1>Login in to see the Text below ...</h1>
              <button onClick={handleToggle} className='login-btn'>Login</button>
              
              <button onClick={()=>navigate("/input")} style={{width:"150px", marginLeft:"10px"}}>To InPut Page</button>

            </div>
            <div className="text-container">
              {
                toggle &&
                <div>
                    <p ref={paraRef} dir={dir} style={{marginBottom:'40px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div className="direction-checking-container">
                        <h1 style={{fontSize:'16px',padding:'10px',background:"white", color:"black",borderRadius:'4px',margin:'5px'}}>{result}</h1>

                        <button onClick={()=>{if(paraRef.current!==null){toCheckDirection(paraRef)}}} className='check-btn'>Check</button>

                        <button onClick={handleDirection} className='change-btn'>Change Dir</button>
                        {/* <Link to="/input">Input</Link> */}
                    </div>


                </div>

                
              }
              
            </div>
      </div>
  
  
  
  
  </>)
}