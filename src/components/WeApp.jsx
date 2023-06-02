import React ,{useState}from 'react'
import './WeApp.css'
import Display from './Display';



function WeApp() {
  const [Weather,setWeather] = useState([]);
  const [form ,setform] =useState({
    city : '',
    country :'',
  });

const APIKEY ='47b8c411cbaefbb5c821ccfce0e210fa';
 async function weatherData(e){
  e.preventDefault();
  if(form.city ===''){
    alert('Please Enter City location');

  }else{
   const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${form.city},${form.country}&APPID=${APIKEY}`)
   .then((res)=>res.json()).then((data)=console.log(data));

   setWeather({data:data})
  }
 }

 const handleChange =(e) =>{
  let name =e.target.name;
  let value = e.target.value;

  if(name ==='city'){
    setform({...form,city :value});
  }else{
    console.log("error");
  }
  if(name === 'country'){
    setform({...form,country : value});
  }
 }
  return (
    <>
    <div className='weapp'>
      <span className='title'>My Wheather App</span>
      <br />
      <form action="">
        <input type="text" placeholder='city' name='city' onChange={(e)=>handleChange(e)} />
        <input type="text" placeholder='country' name='country' onChange={(e) =>handleChange(e)} />
         <button className='subBtn' onClick={(e)=>weatherData(e)}>Check Weather</button>


      </form>
      {weather.data !==undefined?(
        <div>
          <Display data ={weather.data}/>
        </div>
      ):null}



    </div>
    
    
    
    </>
  )
}

export default WeApp