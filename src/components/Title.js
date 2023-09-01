function Title({ color, text, scale = 1 })
{
    return (
        <div className='Title d-inline-flex align-items-center align-self-start' style={{ fontSize: `${scale}em` }}>
            <h1 className={`display-2 me-2 text-${color}`}>/</h1>
            <h1 className='display-2 text-light'>{text}</h1>
        </div>
    );
}

export default Title;