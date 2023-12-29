import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import "./Login.scss"
import {useAtom} from "jotai/index";
import {userAtom} from "../../atom/userAtom";
import {useNavigate} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});


const initialValues = {
    email: "",
    password: "",
}

const Login = () => {

    const {mutate} = useLogin();


    const [user, setUser] = useAtom(userAtom);


    const navigate = useNavigate();

    const handleSubmit = (values: any) => {

        const existingUsers = JSON.parse(localStorage.getItem('user') || '[]');
        const userExists = existingUsers.some((user: any) => user.email === values.email);

        if (!userExists) {
            return  navigate("/register");

        } else {
            const newUser = {...values};
            existingUsers.push(newUser);
            mutate(values);



            navigate("/home")

        }

        if ( user ){
            setUser(values)
        }


    }

    return (
        <div className="login-form-wrapper">
            <p>Sign In</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
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

                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>


        </div>
    );
};

export default Login;