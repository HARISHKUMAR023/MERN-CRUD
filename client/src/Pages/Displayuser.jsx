
import { useEffect, useState } from 'react';
import axios from 'axios';
const Displayuser = () => {
    const [data, setData] = useState(null);
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
      }, []);



  return (
    <div>
 
      {data ? (
        <div className=''>
          <h1>Data from API:</h1>
          {/* Apply the key prop directly to the top-level element */}
          {data.map((item) => (
            <div key={item._id}>
              <h2>{item.name}</h2>
              <p key={item._id + '-email'}>{item.email}</p>
              {/* Add more elements to display other properties if needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Displayuser