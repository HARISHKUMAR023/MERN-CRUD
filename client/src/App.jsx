
import './App.css';

import Forms from './components/Forms';
import Displayuser from './Pages/Displayuser';
function App() {
 

  

  return (
    <div className=''>
     <h1 className='text-center text-4xl font-bold text-rose-600 font-sans mt-2'><span className='text-green-700'>M</span><span className='text-yellow-500'>E</span><span className='text-blue-500'>R</span><span className='text-green-500'>N</span>  STACK  CRUD </h1>
          <Forms/>
          <Displayuser/>


    </div>
  );
}

export default App;
