import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormikloginForm from './RegistrationForm';
import { login } from '../actions/userAction'
import { registerUser } from "../actions/userAction";
import NavbarHeader from '../Component/NavbarHeader'

export default function Registration(props) {

  const dispatch = useDispatch();
  const flag = useSelector(state => state.userReducer)
  const users = useSelector(state => state.authentication.user);
  useEffect(() => {
    dispatch(login());
  }, [dispatch])

  const saveUser = (user) => {
    const result = users?.filter((li) =>
      li.emailId === user.emailId
    )
    if (result.length > 0) {
      alert("Duplicate id !")
    }
    else if (result.length === 0) {
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <NavbarHeader />
      <FormikloginForm onSave={saveUser} > </FormikloginForm>
      {flag.success === "SF" ? (<>
        <h2>Something went wrong !! Please try again</h2>
      </>) : ""}
    </div>
  )
}
