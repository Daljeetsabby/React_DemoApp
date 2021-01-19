import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarHeader from '../Component/NavbarHeader'
import FooterComponent from '../Component/footerComponent'

const ViewProduct = () => {
    const product = useSelector(state => state.updateProductReducer.product);
    return (
        <>
            <NavbarHeader />
            <div className="container">
                <div class="card mb-5 mt-5 pb-4 ">
                    <h3 class="card-header">Product Detail </h3>
                    <div class="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label ><h5>Product Name </h5></label>
                                    <input type="text" name="title" className="form-control" defaultValue={product?.title} disabled />
                                </div>
                                <div className="form-group col-md-6">
                                    <label ><h5>Product Id</h5></label>
                                    <input type="text" name="id" className="form-control" defaultValue={product?.id} disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label ><h5>Description</h5></label>
                                <textarea name="description" className="form-control" defaultValue={product?.description} disabled></textarea>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label ><h5>Price</h5></label>
                                    <input type="number" name="price" className="form-control" defaultValue={product?.price} disabled />
                                </div>
                                <div className="form-group col-md-6">
                                    <label><h5>Quantity</h5></label>
                                    <input type="number" name="quantity" className="form-control" defaultValue={product?.quantity} disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label ><h5>Manufacturer</h5></label>
                                <input type="text" name="manufacturer" className="form-control" defaultValue={product?.manufacturer} disabled />
                            </div>
                        </form>
                        <Link to="/" className="btn btn-primary" > Back </Link>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default ViewProduct;