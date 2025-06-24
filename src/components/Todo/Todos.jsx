import React, { useEffect, useState } from 'react'
import './Todos.css'

const Todos = ({ formDataHandler, isedit, editdata, updateHandler }) => {

  const [alldata, setalldata] = useState({ task: '' });

  //editdata
  const handlechange = (e) => {
    const { name, value } = e.target;
    setalldata((prev) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alldata.task.trim() === '') {
      return alert('Please enter your task');
    }
    //edit
    if (isedit && editdata.length > 0) {
      updateHandler({ task: alldata.task, id: editdata[0].id });
    } else {
      formDataHandler(alldata);
    }
    setalldata({ task: '' });
  };

  //editdata
  useEffect(() => { setalldata((prev) => { return { ...prev, task: editdata[0]?.task } }) }, [editdata])

  return (
    <>
      <div className='title'>
        <h1>My Todos</h1>
        <div className='icon-todo'>✔</div>
      </div>
      <form onSubmit={handleSubmit} >
        <div className='text'>
          <input type="text" placeholder='Enter Your task...' onChange={handlechange} value={alldata?.task} name='task' id='task' />
          <button className='add-btn' type='submit' >{isedit ? "Update" : 'Add'}</button>
        </div>
      </form>
    </>
  )
}

export default Todos
