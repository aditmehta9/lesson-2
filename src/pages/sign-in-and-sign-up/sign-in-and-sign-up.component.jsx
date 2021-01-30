import React from 'react';
import './sign-in-and-sign-up.scss'
import Signin from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SigninandSignup = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <SignUp />
    </div>

)

export default SigninandSignup;