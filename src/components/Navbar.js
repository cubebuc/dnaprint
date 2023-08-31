import NavbarSection from "./NavbarSection";

function Navigation()
{
    return (
        <div className="Navbar container-fluid text-center">
            <NavbarSection color='success' image={require('../resources/foto.webp')} text='foto' />
            <NavbarSection color='primary' image={require('../resources/grafika.webp')} text='grafika' />
            <NavbarSection color='danger' image={require('../resources/redakce.webp')} text='redakce' />
            <NavbarSection color='warning' image={require('../resources/tisk.webp')} text='tisk' />
            <NavbarSection color='secondary' image={require('../resources/reklama.webp')} text='reklama' />
        </div>
    );
}

export default Navigation;