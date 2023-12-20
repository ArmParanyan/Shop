import "./Registration.scss"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string(),
    phone: Yup.string(),
    street: Yup.string(),
    apartment: Yup.string(),
    zip: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
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
}

const Registration = () => {

    const handleSubmit = () => {
        console.log(":exo")
    }

    return (
        <div className="registration-wrapper">
            <div className="register-input-title">
                <p>Registration</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => handleSubmit()}
            >
                <Form className="registration-form">
                    <div className="registration-form-wrapper">
                        <div className="registration-inputs">
                            <div className="register-input-display">
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
                            </div>

                            <div className="register-input-display">

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

                            </div>

                            <div className="register-input-display">

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
                        </div>

                        <button className="registration-form-submit-button">Submit</button>

                        <div>
                            <p className="navigate-to-login">
                                Already registered please {" "} <Link to={"/login"}> sign in
                            </Link>
                            </p>

                        </div>
                    </div>
                </Form>

            </Formik>
        </div>
    );
};

export default Registration