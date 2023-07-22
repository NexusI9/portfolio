
export default ({
    portrait,
    name = 'Jon Doe',
    age = '35',
    job = 'the job',
    status = 'single',
    summary = '',
    interests = [],
    personality = [],
    motivations = [],
    goals = [],
    painPoints = [],
    coreNeeds = [],
    headerColor
}) => (

    <article className="card persona">
        <header style={headerColor && {backgroundColor:headerColor}}>
            <picture>
                <img alt={`${name} portrait`} src={portrait} />
            </picture>
            <div className="persona-biography">
                <h5 className="persona-subtitle">{name}</h5>
                <ul>
                    <li>
                        <strong>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6C12.5304 6 13.0391 5.78929 13.4142 5.41421C13.7893 5.03914 14 4.53043 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6ZM16.6 15.99L15.53 14.92L14.45 15.99C13.15 17.29 10.87 17.3 9.56 15.99L8.49 14.92L7.4 15.99C6.75 16.64 5.88 17 4.96 17C4.23 17 3.56 16.77 3 16.39V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V16.39C20.44 16.77 19.77 17 19.04 17C18.12 17 17.25 16.64 16.6 15.99ZM18 9H13V7H11V9H6C4.34 9 3 10.34 3 12V13.54C3 14.62 3.88 15.5 4.96 15.5C5.48 15.5 5.98 15.3 6.34 14.93L8.48 12.8L10.61 14.93C11.35 15.67 12.64 15.67 13.38 14.93L15.52 12.8L17.65 14.93C18.02 15.3 18.51 15.5 19.03 15.5C20.11 15.5 20.99 14.62 20.99 13.54V12C21 10.34 19.66 9 18 9Z" />
                                </svg> Age:
                            </span>
                            <span>{age}</span>
                        </strong>
                    </li>
                    <li>
                        <strong>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" />
                                </svg> Job:
                            </span>
                            <span>{job}</span></strong>
                    </li>
                    <li>
                        <strong>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 10L8 4.4L9.6 2H14.4L16 4.4L12 10ZM15.5 6.8L14.3 8.5C16.5 9.4 18 11.5 18 14C18 15.5913 17.3679 17.1174 16.2426 18.2426C15.1174 19.3679 13.5913 20 12 20C10.4087 20 8.88258 19.3679 7.75736 18.2426C6.63214 17.1174 6 15.5913 6 14C6 11.5 7.5 9.4 9.7 8.5L8.5 6.8C5.8 8.1 4 10.8 4 14C4 16.1217 4.84285 18.1566 6.34315 19.6569C7.84344 21.1571 9.87827 22 12 22C14.1217 22 16.1566 21.1571 17.6569 19.6569C19.1571 18.1566 20 16.1217 20 14C20 10.8 18.2 8.1 15.5 6.8Z" />
                                </svg> Status:
                            </span>
                            <span>{status}</span>
                        </strong>
                    </li>
                </ul>
                <p><small>{summary}</small></p>
            </div>
        </header>
        <div className="persona-body">
            <div className="persona-interperso persona-grid">

                <div>
                    <h5 className="persona-subtitle">Interests</h5>
                    <ul>
                        {interests.map( (item,i) => <li key={`${item}interest`}><strong>{item}</strong></li>)}
                    </ul>
                </div>

                <div>
                    <h5 className="persona-subtitle">Personality</h5>
                    <ul>
                        {personality.map( (item,i) => <li key={`${item}personality`}><strong>{item}</strong></li>)}
                    </ul>
                </div>


            </div>
            <hr/>
            <div className="persona-details persona-grid">

                <div>
                    <h5 className="persona-subtitle">Goals</h5>
                    <ul>
                        {goals.map(item => <li key={`${item}goals`}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="persona-subtitle">Pain points</h5>
                    <ul>
                        {painPoints.map(item => <li key={`${item}painPoints`}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="persona-subtitle">Core needs</h5>
                    <ul>
                        {coreNeeds.map(item => <li key={`${item}coreNeeds`}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h5 className="persona-subtitle">Motivations</h5>
                    <ul>
                        {motivations.map(item => <li key={`${item}motivation`}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>

    </article>


);