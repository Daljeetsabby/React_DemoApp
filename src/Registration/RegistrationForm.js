import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import styles from './signup.css';



const RegistrationForm = ({ values, errors, touched, isSubmitting }) => (

  <section>

    <div className="container">
      <div className="container2">
        <div className="text-center"> <h1>Registration Form</h1></div>

        <Form>
          <div className="form-group" >
            <label for="inputEmail4">Email</label>
            <Field type="email" name="emailId" className="form-control" value={values.emailId} placeholder="Email ID" id="inputEmail4" />
            {touched.emailId && errors.emailId && <span style={{ color: 'red' }}>{errors.emailId}</span>}
          </div>
          <div className="form-group">
            <label for="inputPassword4">Password</label>
            <Field type="password" name="password" className="form-control" value={values.password} placeholder="password" id="inputPassword4" />
            {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstname">First Name</label>
              <Field type="text" name="firstName" className="form-control" value={values.firstName} placeholder="First name" id="firstname" />
              {touched.firstName && errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>

            <div className="form-group col-md-6">
              <label for="lastname">Last Name</label>
              <Field type="text" name="lastName" className="form-control" value={values.lastName} placeholder="Last name" id="lastname" />
              {touched.lastName && errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-group">
            <label for="location">Location</label>
            <Field as="select" name="location" className="form-control" id="location">
              <option value="_select_">---Select Location----</option>
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="Canada">Canada</option>
            </Field>
            {touched.location && errors.location && <span style={{ color: 'red' }}>{errors.location}</span>}
          </div>
          <div className="form-group">
            <label for="phone">Phone</label>
            <Field type="phone" name="phone" className="form-control" value={values.phone} placeholder="Mobile Number" id="phone" />
            {touched.phone && errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
              <label class="form-check-label text-primary" for="invalidCheck">
                Agree to terms and conditions
                </label>
              <div class="invalid-feedback">
                You must agree before submitting.
                </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
            </div>
            <div className="form-group col-md-8 text-secondary">
              <h6>Already have an account ? <Link to="/login" > Sign in </Link></h6>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </section>
)

const FormikloginForm = withFormik({

  mapPropsToValues: ({ emailId, password, firstName, lastName, location, phone }) => ({

    emailId: emailId || '',
    password: password || '',
    firstName: firstName || '',
    lastName: lastName || '',
    location: location || '',
    phone: phone || ''

  }),


  validationSchema: Yup.object().shape({
    emailId: Yup.string().email('invalid email format').required('Email Address is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be min 8 characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Firstname is required"),
    lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Lastname is required"),
    phone: Yup.string().required('10 digit Mobile Number is required')
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Number Must be digits")
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits'),
    location: Yup.string().required('location is required!')

  }),

  handleSubmit(values, { props }) {

    props.onSave(values);
  }
})(RegistrationForm)

export default FormikloginForm
