import MainLayout from './MainLayout';

function DetailLayout({ children })
{
    return (
        <MainLayout>
            <div className='container ps-5 my-5'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='warning' src={require('../resources/warning.jpg')} width={252} height={682} alt='' />
                    </div>
                    <div className='col-6 mt-5'>
                        {children}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
export default DetailLayout;