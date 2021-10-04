import React,{useState} from 'react';
import c3 from "../homeImages/c3.svg";
import Button from "@material-ui/core/Button";

const HomeTime=()=>{
  let time=new Date().toLocaleTimeString();
    const[setT,setTime]=useState(time);
    
     
      const updateT=()=>{
       
          time=new Date().toLocaleTimeString();
         
          setTime(time);
      }
      setInterval(updateT,1000);
      return(
          <>
           <div className="item i1">
              <div className="i1Style">
                <h1>Deals of the day</h1>
                <img src={c3} alt="clock"/>
                <span>{setT}   Local Time</span>
              </div>
              <Button >View All</Button>
            </div>
          </>
      )
      

     
    
}
export default HomeTime;

