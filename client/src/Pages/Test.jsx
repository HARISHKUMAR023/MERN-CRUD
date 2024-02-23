// pages/ParentComponent.jsx
import  { useState } from 'react';
import Display from './Display';
import Forms from '../components/Forms';

const Test = () => {
    const [refetchData, setRefetchData] = useState(false);

    return (
        <div>
            <Forms setRefetchData={setRefetchData} />
            <Display refetchData={refetchData} />
        </div>
    );
}

export default Test;
