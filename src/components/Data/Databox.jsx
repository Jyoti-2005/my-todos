import React from 'react'
import './Databox.css'
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Databox = (props) => {
  return (
    <div>
      <div className='box'>
        <div className={`text-box ${props.completed ? 'completed' : ''}`}>{props.task}</div>
        <div className='btn-group'>
          <button style={{ backgroundColor: 'yellow' }} className='all-btn' onClick={props.completeHandler}><FaCheck /></button>
          <button style={{ backgroundColor: 'blue' }} className='all-btn' onClick={props.edithandler}><MdEditDocument /></button>
          <button style={{ backgroundColor: 'red' }} className='all-btn' onClick={props.deletehandler}><MdDelete /></button>
          <button style={{ backgroundColor: 'black' }} className='all-btn'onClick={props.details}><FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Databox
