import { useState } from 'react';
import './App.css';

function App() {

  const [List,setList] = useState([])
  const [Name,setName] = useState('')

  const submitHandler= (e)=>{
      e.preventDefault();
      setList([...List, {id: List.length+1, name: e.target.userTask.value}])
      console.log(e.target.userTask.value);
      e.target.userTask.value=''
  }

  const DeleteHandler =(id)=>{
    const NewList = List.filter(li=> li.id !== id)
    setList(NewList)
  }
  return (
  <>
      <div className='container'>
        <div className='todo-app'>
          <h2> Write Today's Task</h2>
            <div className='notebar'>
              <form onSubmit={(e)=> submitHandler(e)}>
              <input type='text' name='userTask' placeholder='Enter Task' className='input'/> 
              <button type='submit' className='button'>Add</button>      
              </form>
             </div>
              <ul className='list-container'>
              {List.map((li)=> (
              <li className='checked' key={li.id}>{li.name} <button className='button2' onClick={()=>DeleteHandler(li.id)}>X</button> </li> ))}
              </ul>
        </div>
      </div>
  </>
  );
}

export default App;
