
import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
const Displayuser = () => {
    const [data, setData] = useState(null);
    const socket = io('http://localhost:3000');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getdata');
            setData(response.data);
          } catch (error) {
            console.log('Error while getting data', error);
          }
        };
    
        fetchData();
         // Set up Socket.IO to listen for real-time updates
         socket.on('newRecord', (newData) => {
          // Update state when a new record is added
          setData((prevData) => [...prevData, newData]);
      });

      return () => {
          // Cleanup on component unmount
          socket.disconnect();
      };
      }, [socket]);



  return (
    <div>
 
      {data ? (
        <div className=''>
          <h1>Data from API:</h1>
          {/* Apply the key prop directly to the top-level element */}
        
            <div className='d-flex'>
              <table>
                <thead>
                   <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                  <tr  key={item._id}>
                    <th>{item.name}</th>
                    <th>{item.email}</th>
                    <th> <a href="#" className='bg-pink-500 font-semibold p-2 text-white rounded '>Delete</a></th>
             
             
                  </tr>
                   ))}
                </tbody>
              </table>
            
              {/* Add more elements to display other properties if needed */}
            </div>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Displayuser