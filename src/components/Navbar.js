import NavbarSection from "./NavbarSection";

function Navigation()
{
    return (
        <div className="Navbar container-fluid text-center">
            <NavbarSection color='success' image={require('../resources/foto.webp')} text='foto' />
            <NavbarSection color='primary' image={require('../resources/grafika.webp')} text='foto' />
            <NavbarSection color='danger' image={require('../resources/redakce.webp')} text='foto' />
            <NavbarSection color='warning' image={require('../resources/tisk.webp')} text='foto' />
            <NavbarSection color='secondary' image={require('../resources/reklama.webp')} text='foto' />
        </div>
    );
}

export default Navigation;