import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { Prompt } from 'react-router';

const ProductForm = ({ values, errors, touched }) => (

    <div className="container ">
        <div className="one">
            <div className="text-center " > <h1>Add Product</h1></div>
            <Form>
                <Prompt
                    when={
                        values.title ||
                        values.quantity ||
                        values.description ||
                        values.manufacturer ||
                        values.price
                    }
                    message="You have unsaved changes, are you sure you want to leave?"
                />

                <div className="form-group" >
                    <label for="productname">Product Name</label>
                    <Field type="text" name="title" className="form-control" value={values.title} placeholder="Product Name" id="productname"></Field>
                    {touched.title && errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <Field component="textarea" name="description" className="form-control" value={values.description} placeholder="Product description (max:200)" id="description" />
                    {touched.description && errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
                </div>
                <div className="form-group">
                    <label for="manufacturer">Manufacturer</label>
                    <Field type="text" name="manufacturer" className="form-control" value={values.manufacturer} placeholder="Manufacturer" id="manufacturer" />
                    {touched.manufacturer && errors.manufacturer && <span style={{ color: 'red' }}>{errors.manufacturer}</span>}
                </div>
                <div className="form-group">
                    <label for="price">Price</label>

                    <Field type="number" name="price" className="form-control" value={values.price} placeholder="Price" id="price" />
                    {touched.price && errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                </div>
                <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <Field type="number" name="quantity" className="form-control" value={values.quantity} placeholder="Quantity " id="quantity" />
                    {touched.quantity && errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <button type="submit" className="btn btn-primary"  >Submit</button>
                    </div>
                    <div className="form-group col-md-10 text-secondary">
                        <h6><Link to="/" > Back </Link></h6>
                    </div>
                </div>
            </Form>
        </div>
    </div>


)

const FormikProductForm = withFormik({

    mapPropsToValues: ({ title, description, manufacturer, price, quantity }) => ({
        title: title || '',
        description: description || '',
        manufacturer: manufacturer || '',
        price: price || '',
        quantity: quantity || ''
    }),

    validationSchema: Yup.object().shape({
        title: Yup.string().required('Product Name is required').min(5, 'Name must be atleast 5 character ').max(25, 'Length should not exceed 25'),
        description: Yup.string().required('Product description is required').min(5, 'Description must be atleast 5 character').max(700, 'Length should not exceed 700'),
        manufacturer: Yup.string().required('Manufacturer is required').min(5, 'Name must be atleast 5 character ').max(80, 'Length should not exceed 80'),
        price: Yup.number().required('Price is required').min(1, 'Price must be atleast Rs.1  '),
        quantity: Yup.number().required('Quantity  is required').min(1, 'quantity must be atleast 1  '),
    }),

    handleSubmit(values, { props, resetForm }) {
        console.log(values);
        props.onSave(values);
        resetForm();
    }
})(ProductForm)

export default FormikProductForm
