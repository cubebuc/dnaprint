import { HashLink } from 'react-router-hash-link';

import Title from './Title';

function NavbarSection({ color, text })
{
    return (
        <HashLink className='NavbarSection d-inline-flex justify-content-center text-decoration-none' smooth to={`#${text}`}>
            <img className='mx-2' src={require(`../resources/${color}.jpg`)} width={180} height={334} alt='' />
            <div className='z-1 position-absolute d-flex justify-content-center align-items-center' >
                <Title color={color} text={text} />
            </div>
        </HashLink>
    );
}

export default NavbarSection;