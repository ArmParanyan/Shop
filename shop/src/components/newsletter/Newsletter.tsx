import {Field, Form, Formik} from "formik";
import React from "react";

import "./Newsletter.scss"

export const Newsletter = () => {
    return (
        <div className="newsletter-wrapper">
            <div className="newsletter-text">
                <p className="sign-up-for-newsletter">SING UP FOR OUR NEWSLETTER</p>
                <p className="subscribe-for-newsletter">Subscribe for the latest DEALS and promotions</p>
            </div>
            <div className="newsletter-form">
                <Formik initialValues={{email: ""}} onSubmit={() => console.log()}
                >
                    <Form className="sign-up-form-for-newsletter">
                        <Field
                            className="sign-up-form-input-for-newsletter"
                            type="email"
                            name="email"
                        />
                        <button className="sign-up-button-for-newsletter"><img src={`assets/images/emailbutton.svg`} alt=""/></button>
                    </Form>

                </Formik>
            </div>
        </div>
    );
};

export default Newsletter;
