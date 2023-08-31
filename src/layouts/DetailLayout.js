import MainLayout from './MainLayout';

function DetailLayout({ children })
{
    return (
        <MainLayout>
            <div className='container ps-5 my-5'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='warning' src={require('../resources/detail_tisk.webp')} alt='' />
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