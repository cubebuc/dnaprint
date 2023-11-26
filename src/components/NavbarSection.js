import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import Title from './Title';

function NavbarSection({ color, text })
{
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>
    {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const isDesktop = width >= 1200;

    return (
        <HashLink className='NavbarSection d-inline-flex justify-content-center text-decoration-none' smooth to={`#${text}-id`}>
            {isDesktop &&
                <img className='mx-2' src={require(`../resources/${color}.jpg`)} width={180} height={334} alt='' />
            }
            <div className='z-1 d-flex justify-content-center align-items-center' >
                <Title color={color} text={text} />
            </div>
        </HashLink>
    );
}

export default NavbarSection;