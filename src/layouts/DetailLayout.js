import { useEffect, useState } from 'react';

import MainLayout from './MainLayout';

function DetailLayout({ children })
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
        <MainLayout>
            <div className='DetailLayout container p-xl-0 p-5 ps-xl-5 my-5'>
                <div className='row'>
                    {isDesktop &&
                        <div className='col-3'>
                            <img className='warning' src={require('../resources/warning.jpg')} width={252} height={682} alt='' />
                        </div>
                    }
                    <div className='col-xl-6 mt-5'>
                        {children}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
export default DetailLayout;