import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" placeholder='Password' id="" required />
                <input className='bg-warning  border-0' type="submit" value="Register" />
            </form>
            <p className='mx-auto w-50'>Already have an account? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <div className='w-50 mx-auto'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;