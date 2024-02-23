// api.js
import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/getdata');
        return response.data;
    } catch (error) {
        console.log('Error while getting data', error);
        throw error;
    }
};
