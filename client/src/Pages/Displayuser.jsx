import { useEffect, useState } from 'react';
import axios from 'axios';
// import io from 'socket.io-client';  // Commented out


const Displayuser = () => {
    const [data, setData] = useState(null);
    const [refechdata, setrefechdata] = useState(false);
    // const socket = io('http://localhost:3000');  // Commented out

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
        // socket.on('newRecord', (newData) => {
        //     // Update state when a new record is added
        //     setData((prevData) => [...prevData, newData]);
        // });

        // return () => {
        //     // Cleanup on component unmount
        //     // socket.disconnect();
        // };
    }, [refechdata]);

    const handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/del/${id}`);
            alert("data is deleted is successful");
            setrefechdata((prev) => !prev);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    
    return (
     
        <div className=''> 
          
            {data ? (
                <div className='flex justify-center mt-2'>
                    {/* <h1>Data from API:</h1> */}
                    {/* Apply the key prop directly to the top-level element */}
                    <div className='d-flex'>
                        <table className='table-auto border'>
                            <thead className='border'>
                                <tr>
                                    <th className='border'>Name</th>
                                    <th className='border'>Email</th>
                                    <th className='border'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='border'>
                                {data.map((item) => (
                                    <tr key={item._id} className='border p-3 '>
                                        <th className='border p-2 capitalize'>{item.name}</th>
                                        <th className='border p-2 capitalize'>{item.email}</th>
                                        <th className='border p-4 capitalize' >
                                            <a
                                                href='#'
                                                className='bg-pink-700 font-semibold p-2 text-white rounded hover:bg-pink-600 '
                                                onClick={() => handledelete(item._id)}
                                            >
                                                Delete
                                            </a>
                                        </th>
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
    );
};

export default Displayuser ;
