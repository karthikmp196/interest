import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const[pamount,setPamount]=useState("")
  const[years,setYears]=useState("")
  const[rate,setRate]=useState("")
  const[sinterest,setSinterest]=useState(0)
  const[ispamountvalid,setIspamountvalid]=useState(true)
  const[isyearsvalid,setIsyearsvalid]=useState(true)
  const[isratevalid,setIsratevalid]=useState(true)

  const validate=(e)=>{
    const{name,value}=e.target
    if(name=='pamount'){
      if(!value.match(/^[0-9]+$/)){
        setPamount(value)
        setIspamountvalid(false)
      }
      else{
        setPamount(value)
        setIspamountvalid(true)
      }
    }else if(name == 'rate'){
      if(!value.match(/^[0-9]+$/)){
        setRate(value)
        setIsratevalid(false)
      }else{
        setRate(value)
        setIsratevalid(true)
      }
    }
    else if(name=='years'){
      if(!value.match(/^[0-9]+$/))
      {
        setYears(value)
        setIsyearsvalid(false)
      }
      else{
        setYears(value)
        setIsyearsvalid(true)
      }
    }
}
       


    const calculate=(e)=>{
      if(!pamount||!years||!rate){
        alert("Complete the fields")
      }
      else{
        setSinterest((pamount*years*rate)/100)

      }
    }

    const reset=(e)=>{
       setSinterest(0)
       setRate()
       setYears()
       setPamount()
    }

     
    
    
    
        
 
  return (
    <div className="App">
     <div id='main'>
     
      <dv id='box'>
      <h3>Simple Interest Calculator</h3>
       <h5>Calculate your simple interest</h5>
       <div id='rate'>
        <h1><i class="fa-solid fa-indian-rupee-sign"></i> {sinterest}</h1>
       <h2>Total simple interest</h2>
       </div><br />
       <div id='tfd'>
        <TextField id="pamt" name='pamount' value={pamount||""} label="Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
        { !ispamountvalid &&
        <div className='text-danger'>
          Invalid entry
        </div>}
        <br /><br />
        <TextField id="rte" name='rate' value={rate||""} label="Rate of interest(p.a)%" variant="outlined" onChange={(e)=>validate(e)} />
        { !isratevalid &&
        <div className='text-danger'>
          Invalid entry
        </div>
        }
        <br /><br />
        <TextField id="yrs" name='years' value={years||""} label="Time Period(yr)" variant="outlined" onChange={(e)=>validate(e)} />
        { !isyearsvalid &&
        <div className='text-danger'>
          Invalid entry
        </div>}
        <br /><br />
        </div>
        
       <div id='but'>
          <Button variant="contained" onClick={(e)=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={(e)=>reset(e)}>Reset </Button>
       </div>
      </dv>
     </div>
    </div>
  );

}
export default App;
