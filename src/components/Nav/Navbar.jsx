import React, { useContext, useState } from 'react'
import './Navbar.css'
import { BsCloudSunFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { mycontext } from '../../context/DataFetching';
import { BsMoonStarsFill } from "react-icons/bs";
import Model from '../model/Model';

const Navbar = () => {
  const { mode, togglemode } = useContext(mycontext)
  const [openmodel, setopenmodel] = useState(false)

  const handleopenmodel = () => {
    setopenmodel(true)
  }
  //cancel button
  const handleclosemodel = () => {
    setopenmodel(false);
  };

  return (
    <>
      {openmodel && (<>  <Model onClose={handleclosemodel} /></>)}
      <div className='header'>
        <div className='title-1'>
          <h2>TODO</h2>
          <div className='icon-todos'>✔</div>
        </div>
        <div className='nav'>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/alltodos" className="nav-link">All Todos</NavLink>
        </div>
        <div className={`${mode === 'dark' ? 'sun' : 'moon'}`} onClick={togglemode}>{mode === 'dark' ? <BsCloudSunFill /> : <BsMoonStarsFill />}</div>
        <button className='btn' onClick={handleopenmodel}>Logout</button>
      </div></>
  )
}

export default Navbar
