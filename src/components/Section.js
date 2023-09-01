import { HashLink } from 'react-router-hash-link';

import Title from './Title';

function Section({ color, title, subtitle, text })
{
    return (
        <div className='Section ms-5 p-5 text-center text-light' id={`${title}`}>
            <div className='row m-auto'>
                <div className='col-8'>
                    <img src={require(`../resources/${color}.jpg`)} width={804} height={612} alt='' />
                </div>
                <div className='col-3 d-flex flex-column text-start'>
                    <Title color={color} text={title} scale={1.5} />
                    <h2 className='lead mb-4 fs-3'>{subtitle}</h2>
                    <p className='lead mt-2 text-light fs-5'>{text}</p>

                    <HashLink className='mt-5 align-self-start' smooth to={`./#`}>
                        <img src={require('../resources/arrow.png')} width={85} height={85} alt='' style={{ filter: 'invert(.3)' }} />
                    </HashLink>
                </div>
            </div>
        </div>
    );
}

export default Section;