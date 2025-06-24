import React from 'react'
import './Register.css'
import { useFormik } from "formik";
import { signUpschema } from '../../schemas';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
};
const Register = () => {
    const nav = useNavigate()
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpschema,
        onSubmit: (val̥ues, action) => {
        console.log("🚀 ~ Register ~ val̥ues:", val̥ues)

        localStorage.setItem('regdata',JSON.stringify(values));
            nav('/login')
            action.resetForm();
        }
    });

    console.log(
        "~ file: Register.jsx ~ Line 25 ~Register ~errors ",
        errors
    );

    return (
        <div className='reg-main'>
            <div className='reg-box'>
                <form onSubmit={handleSubmit} >
                    <h1 className='reg-title'>Register</h1>
                    <h2 className='reg-title'>Let's create new account</h2>
                    <div className=''>
                        <div className='title-reg' >
                            <label className='reg-label'>Username:</label>
                            <input
                                type="text"
                                name='username'
                                id='username'
                                autoComplete='off'
                                placeholder="Enter username..."
                                className='input-title'
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.username ? (<p className='form-error'>{errors.username}</p>) : null}

                        <div className='title-reg' >
                            <label className='reg-label'>Email Address:</label>
                            <input
                                type="text"
                                name='email'
                                id='email'
                                autoComplete='off'
                                placeholder="Enter Email..."
                                className='input-title'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.email ? (<p className='form-error'>{errors.email}</p>) : null}

                        <div className='title-reg' >
                            <label className='reg-label'>Password:</label>
                            < input
                                type='password'
                                autoComplete='off'
                                name='password'
                                id='password'
                                placeholder="Enter Password..."
                                className='input-title'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        {errors.password ? (<p className='form-error'>{errors.password}</p>) : null}

                        <div className='title-reg' >
                            <label className='reg-label'> Confirm Password:</label>
                            <input
                                type='password'
                                autoComplete='off'
                                name='confirm_password'
                                id='confirm_password'
                                className='input-title'
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.confirm_password ? (<p className='form-error'>{errors.confirm_password}</p>) : null}

                        <button className='reg-btn' type='submit' >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
