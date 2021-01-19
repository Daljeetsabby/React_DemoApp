import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import styles from './signin.css';
import NavbarHeader from '../Component/NavbarHeader'


const loginform = ({ values, errors, touched, isSubmitting }) => (
    <>
        <NavbarHeader />
        <div>
            <Form className="form-signin  ">

                <div className="form-group">
                    <h1 className="h3 mb-3 text-center  ">Please sign in</h1>
                    <label for="inputEmail4" className=" text-left">Email</label>
                    <Field type="email" name="emailId" className="form-control" value={values.emailId} placeholder="Email ID" required autofocus />
                    {touched.emailId && errors.emailId && <span style={{ color: 'red' }}>{errors.emailId}</span>}
                </div>
                <div className="form-group">
                    <label for="password" className=" text-left">Password</label>
                    <Field type="password" name="password" className="form-control" value={values.password} placeholder="password" id="password" />
                    {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>Submit</button>
                <br />
                <div className="form-group col-md-8 text-secondary text-center ">
                    <h6>Don't have an account ? <Link to="/register" > Sign up</Link></h6>
                </div>
                <p class="mt-5 mb-3 text-muted text-center">&copy; 2019-2020</p>
            </Form>
        </div>
    </>
)

const Formiklogin = withFormik({

    mapPropsToValues: ({ emailId, password }) => ({
        emailId: emailId || '',
        password: password || '',

    }),

    validationSchema: Yup.object().shape({
        emailId: Yup.string().email('Invalid email format').required('Email Address is required'),
        password: Yup.string()
            .required('Password is required')
    }),

    handleSubmit(values, { props }) {
        props.onclick(values);
    }

})(loginform)

export default Formiklogin
