import React from 'react'
import { useDispatch } from 'react-redux';
import FormikProductForm from './ProductForm'
import { registerProduct } from '../actions/productAction'
import FooterComponent from './footerComponent'
import NavbarHeader from '../Component/NavbarHeader'

const AddProduct = () => {
    const dispatch = useDispatch();
    const saveProduct = (product) => {
        dispatch(registerProduct(product))
    }

    return (
        <div>
            <NavbarHeader />
            <FormikProductForm onSave={saveProduct} />
            <FooterComponent />
        </div>
    )
}

export default AddProduct;