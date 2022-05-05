import React from 'react';
import logo from '../../../images/logo/google logo.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-warning w-50"></div>
            </div>
            <div>
                <button className='btn btn-warning  w-100'><img width={30} src={logo} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;