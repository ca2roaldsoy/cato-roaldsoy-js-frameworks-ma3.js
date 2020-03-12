import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";

const schema = yup.object().shape({
    
    userName: yup.string().required("Please enter username"),
    password: yup
            .string()
            .min(8, "Please enter password")
            .required()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain of one lower case letter, one uppercase letter and one number')
});

function LoginForm () {
    
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});

    function onSubmit(data) {
        console.log("data", data);
    }
    
    return (
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" name="userName" ref={register({required: true})} />
                {errors.userName && <Form.Text>{errors.userName.message}</Form.Text>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                 <Form.Control type="text" placeholder="Password" name="password" ref={register} />
                {errors.password && <Form.Text>{errors.password.message}</Form.Text>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default LoginForm;