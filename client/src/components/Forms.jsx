import axios from "axios";
import {  useState } from "react"
// eslint-disable-next-line no-unused-vars
 import  refreshDataFromOtherFile from '../Pages/Displayuser';

const Forms = () => {
    const [ formdata , setformdata]= useState({
        'name':'',
        'email':''
    })

    const handleinputchange = (e) => {
        console.log('Input Change:', e.target.name, e.target.value);
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }
    
    


const handlesumit = async (e)=>{
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3000/post', formdata)
        console.log(response.data)
        alert("data submited")
        refreshDataFromOtherFile();
        setformdata({
            'name':'',
            'email':''
        });
    //   Displayuser()
    } catch(error){
        console.log(error)
    }
}

  return (
    <div className="mt-24 flex justify-center  ">
<form onSubmit={handlesumit} className="backdrop-blur-sm  bg-white/30 justify-center p-8 " >
    <label htmlFor="name" className="m-4 font-semibold text-right text-slate-800 ">
        Enter the Name:
        
    </label>
    <br />
    <input className="ml-6 m-3 p-2 rounded bg-transparent border border-black text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" id="name" name="name" value={formdata.name} onChange={handleinputchange} />
    <br />
    <label htmlFor="email" className="m-4 font-semibold text-start text-slate-800">
        Enter the Email:
       
    </label>
    <br />
    <input type="text" className="ml-6 m-3 p-2 rounded bg-transparent border border-black text-sm shadow-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500" id="email" name="email" value={formdata.email} onChange={handleinputchange} />

    <br />
    <button className="bg-black text-white p-2  rounded" type="submit">Submit</button>
</form>


    </div>
  )
}

export default Forms