import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

export default function Auth() {
    const [loginPage,setLoginPage] = useState(true);
    return (
        loginPage ?
        <Login setLoginPage={setLoginPage}/>
        :
        <Register setLoginPage={setLoginPage}/>
    )
}
