import React, { createContext, useState } from 'react'


export const mycontext = createContext()
function DataFetching({ children }) {
  const [formData, setformData] = useState(JSON.parse(localStorage.getItem('formData')) || []);
  const [mode, setmode] = useState('dark');
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
    } else {
      setmode('dark')
    }
    useEffect(() => { localStorage.setItem('formData', JSON.stringify(formData)) }, [formData])
  }
  return (
    <>
      <mycontext.Provider value={{ mode, togglemode, formData, setformData }}>{children}</mycontext.Provider>
    </>
  )
}

export default DataFetching