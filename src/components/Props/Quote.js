export default ({ name, job, location, quote, detail, avatar }) => {

    return (
        <blockquote>
            <div>
                <h5>{quote}</h5>
                {detail && <p><small className="discrete">{detail}</small></p>}
            </div>
            <div className="quote-profile">
                <img src={avatar} alt={`${name} portrait`} width={32} height={32} />
                <div>
                    <p>{name}
                        <small><b>{job}</b></small>
                        <small>{location}</small>
                    </p>
                </div>
            </div>
        </blockquote>
    );

}