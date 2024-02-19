import axios from "axios";
import {  useState } from "react"
// import {Displayuser} from '../Pages/Displayuser';

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
    <div className="mt-3 ">
<form onSubmit={handlesumit}>
    <label htmlFor="name" className="m-4">
        Enter the Name:
        <input type="text" id="name" name="name" value={formdata.name} onChange={handleinputchange} />
    </label>
    <br />
    <label htmlFor="email" className="m-4">
        Enter the Email:
        <input type="text" className="m-3" id="email" name="email" value={formdata.email} onChange={handleinputchange} />
    </label>
    <button className="bg-red-500 text-white" type="submit">Submit</button>
</form>


    </div>
  )
}

export default Forms