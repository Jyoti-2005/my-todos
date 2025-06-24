import * as Yup from "yup";

export const signUpschema =Yup.object({
    username :Yup.string().min(5).max(25).required("Pleace enter your username"),
    email:Yup.string().email().required("Pleace enter your email"),
    password:Yup.string().min(6).required("Pleace enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
});


export const logInschema =Yup.object({
    email:Yup.string().email().required("Pleace enter your email"),
    password:Yup.string().min(6).required("Pleace enter your password")
});


