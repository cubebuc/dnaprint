import { Link } from 'react-router-dom';

function Header()
{
    return (
        <div className='Header d-flex text-center justify-content-center align-items-end text-light'>
            <Link to='/dnaprint' className='text-decoration-none text-light'>
                <h1 className='display-2 me-4 pe-2'>/dnaprint</h1>
            </Link>
            <div className='divider ms-5' />
            <div className='divider me-5' />
            <p className='lead ms-3 ps-1 me-4'>david.martinek@dnaprint.cz</p>
            <p className='lead'>tel.: +420 602 696 343</p>
        </div>
    );
}

export default Header;