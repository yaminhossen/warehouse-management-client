import React from 'react';
import './NewSection1.css'

const NewSection1 = () => {
    return (
        <div className='section-1'>
            <h2 className='section-1-title'>This is our achivement.</h2>
            <div className='container info'>
                <div className='customer'>
                    <div >
                        <div>
                            Customer
                        </div>
                        <div>
                            15000++
                        </div>
                    </div>
                </div>
                <div className='customer'>
                    <div>
                        <div>
                            Reviews
                        </div>
                        <div>
                            10000++
                        </div>
                    </div>
                </div>
                <div className='customer'>
                    <div>
                        <div>
                            Likes
                        </div>
                        <div>
                            30000++
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection1;