import React from 'react'
import FormikUpdateProductForm, { UpdateProductForm } from './UpdateProductForm'
import { useDispatch, useSelector   } from 'react-redux';

import FooterComponent from './footerComponent'
import NavbarHeader from '../Component/NavbarHeader'
 const EditProduct = () => {

    return (
        <div>

            <NavbarHeader/>
          <UpdateProductForm/>
          <FooterComponent/>
        </div>
    )
}

export default EditProduct;