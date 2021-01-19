import React from 'react'
import { Link } from 'react-router-dom';
import NavbarHeader from '../Component/NavbarHeader'
import FooterComponent from '../Component/footerComponent'

const UserDetails = () => {

    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user[0].emailId)

    return (
        <>
            <NavbarHeader />
            <div className="container">
                <div class="card  mb-5 bt-5">
                    <h3 class="card-header">User Detail </h3>
                    <div class="card-body">
                        <form>
                            <div className="form-group" >
                                <label ><h5>Email</h5></label>
                                <input type="text" name="Email" defaultValue={user[0].emailId} className="form-control" disabled />
                            </div>
                            <div className="form-group">
                                <label ><h5>Password</h5></label>
                                <input type="password" name="Password" defaultValue={user[0].password} className="form-control" disabled />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label ><h5>First Name</h5></label>
                                    <input type="text" name="fname" defaultValue={user[0].firstName} className="form-control" disabled />
                                </div>
                                <div className="form-group col-md-6">
                                    <label ><h5>Last Name</h5></label>
                                    <input type="text" name="lname" defaultValue={user[0].lastName} className="form-control" disabled />
                                </div>
                            </div>
                            <div className="form-group">
                                <label ><h5>Location</h5></label>
                                <input type="text" name="location" defaultValue={user[0].location} className="form-control" disabled />
                            </div>
                            <div className="form-group">
                                <label ><h5>Phone</h5></label>
                                <input type="text" name="phone" defaultValue={user[0].phone} className="form-control" disabled />
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

export default UserDetails;