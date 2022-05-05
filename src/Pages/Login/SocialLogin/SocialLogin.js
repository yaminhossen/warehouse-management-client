import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo/google logo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning  w-100'><img width={30} src={logo} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;