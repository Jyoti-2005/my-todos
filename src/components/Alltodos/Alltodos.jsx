import React, { useContext, useEffect, useState } from 'react'
import './Alltodos.css'
import { mycontext } from '../../context/DataFetching';

const Alltodos = () => {
  const { mode } = useContext(mycontext)
  const [apidata, setapidata] = useState([]);
  async function fetchdata() {
    const response = await fetch('https://dummyjson.com/todos');
    const result = await response.json();
    setapidata(result?.todos)

  } 
  useEffect(() => { fetchdata() }, [])

  return (
    <div className={`${mode === 'dark' ? 'todo-dark' : 'todo-white'}`}>
      <div className={`${mode === 'dark' ? 'all-title' : 'all-light'}`}>
        <h1>List of ToDos</h1>
        <hr className='line' />

        {/* <h1>Do something nice for someone you care about</h1>
          <button>Pending</button> */}
        {apidata.map((item) => (<><div class={`${mode === 'dark' ? 'todo-item' : 'todo-light'}`}><h1>{item?.todo}</h1>
          <button className={`${item.completed === true ? 'blue' : 'red'}`}>{item.completed === true ? 'completed' : 'pending'}</button>
        </div></>))}
      </div>
    </div>
  )
}

export default Alltodos
