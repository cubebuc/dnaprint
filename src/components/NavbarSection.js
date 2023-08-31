import { HashLink } from 'react-router-hash-link';

import Title from './Title';

function NavbarSection({ color, image, text })
{
    return (
        <HashLink className='NavbarSection d-inline-flex justify-content-center text-decoration-none' smooth to={`/#${text}`}>
            <img className={`${color} mx-2`} src={image} alt='' />
            <div className='z-1 position-absolute d-flex justify-content-center align-items-center' >
                <Title color={color} text={text} />
            </div>
        </HashLink>
    );
}

export default NavbarSection;