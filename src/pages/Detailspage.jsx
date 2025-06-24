import React, { useContext } from 'react'
import { mycontext } from '../context/DataFetching'
import { useParams } from 'react-router-dom'
import './Detailspage.css'

function Detailspage() {
    const {formData ,setformData} = useContext(mycontext)
    const param = useParams();
    const filterdata = formData.filter((item) => item.id == param.id)
    console.log(filterdata)
    return (
        <div className='param'>
            {filterdata[0]?.id} :  
            {filterdata[0]?.task}
        </div>   
    )
}

export default Detailspage