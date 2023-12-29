import "./Registration.scss"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {redirect, Link, useNavigate} from "react-router-dom";
import {useRegisrtation} from "../../hooks/useRegistation";
import {useAtom} from "jotai";
import {userAtom} from "../../atom/userAtom";
import React from "react";


const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    phone: Yup.string().required(),
    street: Yup.string().required(),
    apartment: Yup.string().required(),
    zip: Yup.string().required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
})


const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    apartment: "",
    zip: "",
    city: "",
    country: "",
    isAdmin: true,
}

const Registration = () => {

    const {mutate} = useRegisrtation();

    const [user, setUser] = useAtom(userAtom);


    const navigate = useNavigate();



    const handleSubmit = async (values: any) => {

        const existingUsers = JSON.parse(localStorage.getItem('user') || '[]');
        const userExists = existingUsers.some((user: any) => user.email === values.email);

        if (userExists) {
            navigate("/login");
        } else {
            const newUser = {...values};
            existingUsers.push(newUser);
            localStorage.setItem('user', JSON.stringify(existingUsers));
            setUser(values)
            mutate(values);
        }



    }



    return (
        <div className="registration-wrapper">
            <div className="register-input-title">
                <p>Registration</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                <Form className="registration-form">
                    <div className="registration-form-wrapper">
                        <div className="registration-inputs">

                            <div className="register-input-wrapper">
                                <label htmlFor="name">Name</label>
                                <Field type="text" name="name" placeholder="Name"/>
                                <ErrorMessage name="name" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="email">Email</label>
                                <Field type="text" name="email" placeholder="email"/>
                                <ErrorMessage name="email" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" placeholder="password"/>
                                <ErrorMessage name="password" className="error-message" component="div"/>
                            </div>


                            <div className="register-input-wrapper">
                                <label htmlFor="phone">Phone</label>
                                <Field type="text" name="phone" placeholder="phone"/>
                                <ErrorMessage name="phone" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="street">Street</label>
                                <Field type="text" name="street" placeholder="street"/>
                                <ErrorMessage name="street" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="apartment">Apartment</label>
                                <Field type="text" name="apartment" placeholder="apartment"/>
                                <ErrorMessage name="apartment" className="error-message" component="div"/>
                            </div>


                            <div className="register-input-wrapper">
                                <label htmlFor="zip">ZIP</label>
                                <Field type="text" name="zip" placeholder="zip"/>
                                <ErrorMessage name="zip" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="city">City</label>
                                <Field type="text" name="city" placeholder="city"/>
                                <ErrorMessage name="city" className="error-message" component="div"/>
                            </div>

                            <div className="register-input-wrapper">
                                <label htmlFor="country">Country</label>
                                <Field type="text" name="country" placeholder="country"/>
                                <ErrorMessage name="country" className="error-message" component="div"/>
                            </div>
                        </div>

                        <button type="submit" className="registration-form-submit-button">Submit</button>

                        <div className="navigate-to-login">


                            <p>
                                Already registered? please {" "}
                                <Link to="/login"><span
                                    className="sign-in-link-from-registration">Sign in here</span></Link>
                            </p>

                        </div>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

export default Registration