import React from 'react';

function Header()
{
    return (
        <div className="Header d-flex text-center justify-content-center align-items-end text-light">
            <h1 className='me-4 pe-2 text-large fw-light'>/dnaprint</h1>
            <div className='divider ms-5' />
            <div className='divider me-5' />
            <p className='ms-3 ps-1 me-4 fw-light fs-5'>david.martinek@dnaprint.cz</p>
            <p className='fw-light fs-5'>tel.: +420 602 696 343</p>

        </div>
    );
}

export default Header;