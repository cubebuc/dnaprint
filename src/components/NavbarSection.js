import Title from "./Title";

function NavbarSection({ color, image, text })
{
    return (
        <div className="NavbarSection d-inline-flex justify-content-center">
            <img className={`${color} mx-2`} src={image} alt='' />
            <div className="z-1 position-absolute" >
                <Title color={color} text={text} />
            </div>
        </div>
    );
}

export default NavbarSection;;