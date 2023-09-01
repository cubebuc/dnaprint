import { Link } from 'react-router-dom';

function Header()
{
    return (
        <div className='Header mb-xl-0 mb-5 d-flex flex-xl-row flex-column justify-content-xl-center align-items-xl-end align-items-center text-light'>
            <Link to='/dnaprint' className='text-decoration-none text-light'>
                <h1 className='text-large lead me-xl-4 pe-xl-2'>/dnaprint</h1>
            </Link>
            <div className='divider ms-5' />
            <div className='divider me-5' />
            <p className='lead ms-xl-3 ps-xl-1 me-xl-4 mb-xl-3 mb-1'>david.martinek@dnaprint.cz</p>
            <p className='lead'>tel.: +420 602 696 343</p>
        </div>
    );
}

export default Header;