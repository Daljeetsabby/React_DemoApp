import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct } from '../actions/productAction';
import { Prompt } from 'react-router';

const UpdateProductForm = () => {

    const product = useSelector(state => state.updateProductReducer.product);
    const dispatch = useDispatch();

    return (
        <>
            <Formik enableReinitialize={true}
                initialValues={{
                    id: product?.id,
                    title: product?.title,
                    description: product?.description,
                    manufacturer: product?.manufacturer || '',
                    price: product?.price,
                    quantity: product?.quantity
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required('Product Name is required').min(5, 'Name must be atleast 5 character ').max(25, 'Length should not exceed 25'),
                    description: Yup.string().required('Product description is required').min(5, 'Description must be atleast 5 character').max(200, 'Length should not exceed 200'),
                    manufacturer: Yup.string().required('Manufacturer is required').min(5, 'Name must be atleast 5 character ').max(25, 'Length should not exceed 25'),
                    price: Yup.number().required('Price is required').min(1, 'Price must be atleast Rs.1  '),
                    quantity: Yup.number().required('Quantity  is required').min(1, 'quantity must be atleast 1  ')
                })}
                onSubmit={(fields) => {
                    dispatch(updateProduct(fields.id, fields))
                }}
            >
                {({ errors, touched,values }) => (
                    <Form>
                        <Prompt
                            when={
                                values.title !== product?.title ||
                                values.quantity !== product?.quantity  ||
                                values.description !== product?.description ||
                                values.manufacturer !== product?.manufacturer ||
                                values.price !== product?.price
                            }
                            message="You have unsaved changes, are you sure you want to leave?"
                        />
                        <div className="container align-middle">
                            <div className=" update ">
                                <div className="text-center " > <h1>Edit Product</h1></div>
                                <div className="form-row">
                                    <div className="form-group col-md-4" >
                                        <label for="productid">Product Id</label>
                                        <Field type="text" name="id" className="form-control" placeholder="Product Id" id="productid" disabled></Field>
                                    </div>
                                    <div className="form-group col-md-8" >
                                        <label for="productname">Product Name</label>
                                        <Field type="text" name="title" /*onChange={(e) => setstate({ ...state, title: e.target.value })}*/ className="form-control" placeholder="Product Name" id="productname"></Field>
                                        {touched.title && errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="description">Description</label>
                                    <Field component="textarea" name="description"  className="form-control" placeholder="Product description (max:200)" id="description" />
                                    {touched.description && errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
                                </div>
                                <div className="form-group">
                                    <label for="manufacturer">Manufacturer</label>
                                    <Field type="text" name="manufacturer" className="form-control" placeholder="Manufacturer" id="manufacturer" />
                                    {touched.manufacturer && errors.manufacturer && <span style={{ color: 'red' }}>{errors.manufacturer}</span>}
                                </div>
                                <div className="form-group">
                                    <label for="price">Price</label>

                                    <Field type="number" name="price"  className="form-control" placeholder="Price" id="price" />
                                    {touched.price && errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                                </div>
                                <div className="form-group">
                                    <label for="quantity">Quantity</label>
                                    <Field type="number" name="quantity"  className="form-control" placeholder="Quantity " id="quantity" />
                                    {touched.quantity && errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <button type="submit" className="btn btn-primary" >Submit</button>
                                    </div>
                                    <div className="form-group col-md-10 text-secondary">
                                        <h6><Link to="/" > Back </Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export { UpdateProductForm };