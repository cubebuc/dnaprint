import Title from "./Title";

function DetailParagraph({ title, subtitle, text })
{
    return (
        <div className="mt-4">
            <Title color='warning' text={
                <>
                    {title}
                    <div className='d-inline text-warning'> - {subtitle}</div>
                </>
            } scale={.5} />
            <p className="lead fs-6 text-light">{text}</p>
        </div>
    );
}
export default DetailParagraph;