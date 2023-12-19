import { Field, Form, Formik } from "formik";
import "./Search.scss"
const Search = () => {
    return (
        <div>
            <Formik
                initialValues={{ val: "" }}
                onSubmit={() => console.log("aaaaa")}
            >
                <Form className="search-form">
                    <Field
                        className="search-input"
                        type="text"
                        name="val"
                    />
                    <img
                        className="search-icon"
                        src={`/assets/images/searchIcon.png`}
                        alt=""
                    />
                    <button
                    className="search-button"
                        type="submit"
                    >
                        Search
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Search;
