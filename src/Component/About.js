import React from 'react'
import NavbarHeader from '../Component/NavbarHeader'
import FooterComponent from '../Component/footerComponent'
import { Link } from 'react-router-dom';
const About = () => {

    return (
        <>
            <NavbarHeader />
            <div className="container ">
                <div class="card h-200  ">
                    <h5 class="card-header">About </h5>
                    <div class="card-body mb-5 " style={{ height: "72vh" }}>
                        <h5 class="card-title">Product Inventory Management</h5>
                        <p class="card-text"> Product Inventory App is on ef leading product for managing the products information digitally. Our product theme inspired by dark and light shade.
                        Users can manage any kind of product information by using the offered functionalities. You can access our product from anywhere around the world, all you need is an device with enabled internet connection and you will have access to all our services.
                        </p>
                        <Link to="/" class="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default About;
