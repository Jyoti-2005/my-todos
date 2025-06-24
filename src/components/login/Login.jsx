import React, { useState } from 'react'
import './Login.css'
import { useFormik } from "formik";
import { logInschema } from '../../schemas';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    const nav = useNavigate()
    //register data mathch to login data get data ,create new variable
 const loginData = JSON.parse(localStorage.getItem("regdata")) || [];

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: logInschema,
        onSubmit: (values, action) => {
            console.log(                                
                " ~ file: Login.jsx ~ Line 14 ~Login ~values ",
                values
            );
            //register data mathch to login data condition
            if(loginData.email===values.email  && loginData.password === values.password){
                localStorage.setItem('logindata',JSON.stringify(values))
                nav('/')
                action.resetForm()
        
            }else{
                alert('invalid')
            }
        //   action.resetForm();
        }   
        
    });

    console.log(
        "~ file: login.jsx ~ Line 23 ~Login ~errors ",
        errors
    );

    
    return (
        <div className='log-main'>
            <div className='login-box'>
                <form onSubmit={handleSubmit} >
                    <h1 className='login-title'>Login</h1>
                    <h2 className='login-title'>Welcome back !!</h2>
                    <div className=''>
                        <div className='title-login' >
                            <label className='title-label'>Email Address:</label>
                            <input
                                type="text"
                                placeholder="Enter Email..."
                                className='input-title'
                                id='email'
                                name='email'
                                autoComplete='off'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.email ? (<p className='form-error'>{errors.email}</p>) : null}

                        <div className='title-login' >
                            <label className='title-label'>Password:</label>
                            <input
                                type='password'
                                placeholder="Enter Password..."
                                className='input-title'
                                id='password'
                                name='password'
                                autoComplete='off'
                               value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                        </div>
                        {errors.password ? (<p className='form-error'>{errors.password}</p>) : null}

                        <button className='login-btn' type='submit' >Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login
