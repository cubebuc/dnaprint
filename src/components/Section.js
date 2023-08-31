import Title from './Title';

function Section({ color, image, title, subtitle, text })
{
    return (
        <div className='Section ms-5 p-5 text-center text-light'>
            <div className='row m-auto'>
                <div className="col-8">
                    <img className={`${color}`} src={image} alt='' />
                </div>
                <div className='col-3 d-flex flex-column text-start'>
                    <Title color={`${color}`} text={`${title}`} scale={1.5} />
                    <h2 className='lead mb-4 fs-4'>{subtitle}</h2>
                    <p className='lead mt-2 text-light fs-6'>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Section;