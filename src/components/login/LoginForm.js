import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    
    userName: yup.string().required("Please enter username"),
    password: yup
            .string()
            .min(8, "Password must be at least 8 characters long")
            .required("Please enter password")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain of one lower case letter, one uppercase letter and one number')
});

function LoginForm () {
    
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});

    function onSubmit(data) {
        console.log("data", data);
    }
    
    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Username</label>
            <input type="text" placeholder="Username" name="userName" ref={register({required: true})} />
            {errors.userName && <p>{errors.userName.message}</p>}

            <label>Password</label>
             <input type="text" placeholder="Password" name="password" ref={register} />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" />

        </form>
  );
}

export default LoginForm;