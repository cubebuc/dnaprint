import Title from "./Title";

function DetailList({ title, subtitle, items })
{
    return (
        <div className='mt-4'>
            <Title color='warning' text={
                <>
                    {title}
                    <div className='d-inline text-warning'>{subtitle}</div>
                </>
            } scale={.5} />
            <ul className='ms-3'>
                {items.map((item, index) =>
                {
                    return (
                        <li key={index} className='lead fs-6 text-light'>{item}</li>
                    );
                })}
            </ul>
        </div>
    );
}
export default DetailList;