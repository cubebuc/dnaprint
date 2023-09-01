import NavbarSection from './NavbarSection';

function Navigation()
{
    return (
        <div className='Navbar container-fluid pb-5 mb-5 text-center'>
            <NavbarSection color='success' text='foto' />
            <NavbarSection color='primary' text='grafika' />
            <NavbarSection color='danger' text='redakce' />
            <NavbarSection color='warning' text='tisk' />
            <NavbarSection color='secondary' text='reklama' />
        </div>
    );
}

export default Navigation;