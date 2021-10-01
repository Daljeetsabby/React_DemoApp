import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Formiklogin from './loginform';
import { login } from '../actions/userAction'
import { useHistory } from "react-router-dom";


export default function Loginpage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(state => state.authentication.user);

    useEffect(() => {
        dispatch(login());
    }, [dispatch])

    const loginUser = (user) => {
        const result = users?.filter((li) =>
            li.emailId === user.emailId && li.password === user.password
        )
        if (result.length) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("profile", JSON.stringify(result));
            history.push("/");
        }
        else {
            localStorage.clear();
            alert("Invalid User!")
        }
    }

    return (

        <div>
            <Formiklogin onclick={loginUser} > </Formiklogin>
        </div>
    )
}
