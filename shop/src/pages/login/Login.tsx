import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import "./Login.scss"

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});


const initialValues = {
    email: "",
    password: "",
}

const Login = () => {

    const handleSubmit = () => {

    }

    return (
        <div className="login-form-wrapper">
            <p>Sign In</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => handleSubmit()} //add useQuery and useMutation for post TODO
            >
                <Form className="sign-in-form">
                    <div className="sign-in-inputs-and-button-wrapper">
                        <div className="sign-in-inputs">
                            <div className="sign-in-input-wrapper">
                                <label htmlFor="email">Email</label>
                                <Field className="sign-in-input" type="text" name="email" placeholder="email"/>
                                <ErrorMessage name="email" className="error-message" component="div"/>
                            </div>

                            <div className="sign-in-input-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field className="sign-in-input" type="password" name="password" placeholder="password"/>
                                <ErrorMessage name="password" className="error-message" component="div"/>
                            </div>

                        </div>
                        <div>

                            <button>Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>


        </div>
    );
};

export default Login;