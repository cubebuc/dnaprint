import NavbarSection from './NavbarSection';

function Navigation()
{
    return (
        <div className='Navbar container-fluid pb-5 mb-5 text-center'>
            <NavbarSection color='success' image={require('../resources/nav_foto.webp')} text='foto' />
            <NavbarSection color='primary' image={require('../resources/nav_grafika.webp')} text='grafika' />
            <NavbarSection color='danger' image={require('../resources/nav_redakce.webp')} text='redakce' />
            <NavbarSection color='warning' image={require('../resources/nav_tisk.webp')} text='tisk' />
            <NavbarSection color='secondary' image={require('../resources/nav_reklama.webp')} text='reklama' />
        </div>
    );
}

export default Navigation;