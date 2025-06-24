import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar';
import Todos from '../Todo/Todos';
import Databox from '../Data/Databox';
import { mycontext } from '../../context/DataFetching';
import { useNavigate } from 'react-router-dom';

function Home() {
  // const [formData, setformData] = useState(JSON.parse(localStorage.getItem('formData')) || []);
  const { mode,formData, setformData } = useContext(mycontext)
  const nav = useNavigate()
  //editdata
  const [isedit, setisedit] = useState(false)
  const [editdata, seteditdata] = useState('')

  const formDataHandler = (alldata) => {
    setformData((prev) => [...prev,
    { task: alldata.task, id: Math.random(), completed: false }]
    )
  }

  //complete
  const completeHandler = (id) => {
    const updated = formData.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setformData(updated);
  };

  //editdata
  const edithandler = (id) => {
    setisedit(true)
    const editformdata = formData.filter((item) => item.id === id)
    seteditdata(editformdata)
  }

  //delete
  const deletehandler = (id) => {
    const deletedata = formData.filter((item) => item.id !== id)
    setformData(deletedata)
    console.log(deletedata)
  }

  //edit
  const updateHandler = (updatedTask) => {
    const updatedFormData = formData.map(item =>
      item.id === updatedTask.id ? { ...item, task: updatedTask.task } : item
    );
    setformData(updatedFormData);
    setisedit(false);
    seteditdata('');
  };
  //local storage
  // useEffect(() => { localStorage.setItem('formData', JSON.stringify(formData)) }, [formData])
  const details = (id) => {
    console.log(`/details/${id}`);
    nav(`/details/${id}`)
  }
  return (
    <>      

      {
      /* <Navbar /> */}
      <div className={`${mode === 'dark' ? 'todo-dark' : 'todo-white'}`}>
        <div className={`${mode === 'dark' ? 'container' : 'container-1'}`}>
          <Todos formDataHandler={formDataHandler} editdata={editdata} isedit={isedit} updateHandler={updateHandler} />
          <div className='f1'>
            {formData.map((item) => (<Databox
              key={item.id}
              task={item.task}
              completed={item.completed}
              deletehandler={() => deletehandler(item.id)}
              edithandler={() => edithandler(item.id)}
              completeHandler={() => completeHandler(item.id)}
              details={() => details(item.id)}
            />))}
          </div>
        </div>
      </div></>
  )
}

export default Home