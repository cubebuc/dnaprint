import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import Title from './Title';

function Section({ color, title, subtitle, text })
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
        <div className='Section ms-xl-5 p-xl-5 mb-xl-0 mb-5 text-center text-light' id={`${title}-id`}>
            <div className='row m-auto'>
                <div className='col-xl-8'>
                    <img src={require(`../resources/${color}.jpg`)} width={isDesktop ? 804 : width * 0.7} height={isDesktop ? 612 : 612 / 2} alt='' />
                </div>
                <div className='section-content col-xl-3 d-flex flex-column text-start'>
                    <Title color={color} text={title} scale={1.5} />
                    <h2 className='lead mb-4 fs-3'>{subtitle}</h2>
                    <p className='lead mt-2 text-light fs-5'>{text}</p>
                    {isDesktop &&
                        <HashLink className='arrow mt-5 align-self-start' smooth to={`./#`}>
                            <img src={require('../resources/arrow.png')} width={75} alt='' />
                        </HashLink>
                    }
                </div>
            </div>
        </div>
    );
}

export default Section;