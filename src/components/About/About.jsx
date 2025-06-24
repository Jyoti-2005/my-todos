import React, { useContext } from 'react'
import './About.css'
import { mycontext } from '../../context/DataFetching';

function About() {
  const { mode } = useContext(mycontext)

  return (
    <div className={`${mode === 'dark' ? 'todo-dark' : 'todo-white'}`}>
      <div className={`${mode === 'dark' ? 'about-title' : 'about-light'}`}>
        <h1>About ToDo</h1>
        <hr className='line' />
        <div className='paragraph'>
          <p className='para'>
            A to-do list is a list of items that <span style={{ color: 'red' }}>need to be completed.</span> The items on the list can range from simple activities like replying to an email, to more complex tasks like creating project briefs.
          </p>
          <br /><br />
          <p className='para'>
            The items on a to-do list are usually <span style={{ color: 'red' }}>action-oriented,</span>
            such as “Schedule a meet with the R&D team” or “Call back customer X.” Some lists include
            more abstract goals, such as “improve your time management skills” or “learn how to use a new software program.”
          </p>
        </div>
      </div>
    </div>

  )
}

export default About