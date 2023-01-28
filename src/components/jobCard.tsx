export const JobCard = (props: any) => {
    const job = props.job;

    return (
        <div className="jobCard">
            <div className="jobCard__top">
                <div className="jobCard__top--logo">
                    <img src={`${job.logo}`} alt="logo" />
                </div>
                <div className="jobCard__top--info">
                    <div className="jobCard__top--company">
                        <h2>{job.company}</h2>
                        <div className="jobCard__top--company-labels">
                            {job.new ? (
                                <span className="jobCard__top--company-labels-new">
                                    new!
                                </span>
                            ) : (
                                ""
                            )}
                            {job.featured ? (
                                <span className="jobCard__top--company-labels-featured">
                                    featured
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="jobCard__top--title">{job.position}</div>
                    <div className="jobCard__top--details">
                        {job.postedAt}
                        <span className="bullet">&#x2022;</span>
                        {job.contract}
                        <span className="bullet">&#x2022;</span>
                        {job.location}
                    </div>
                </div>
            </div>
            <hr className="jobCard__break" />
            <ul className="jobCard__bottom">
                <li className="tablet" key={job.role}>
                    {job.role}
                </li>
                <li className="tablet" key={job.level}>
                    {job.level}
                </li>
                {job.languages.map((language: any) => (
                    <li className="tablet" key={language}>
                        {language}
                    </li>
                ))}
                {job.tools.map((tool: any) => (
                    <li className="tablet" key={tool}>
                        {tool}
                    </li>
                ))}
            </ul>
        </div>
    );
};
