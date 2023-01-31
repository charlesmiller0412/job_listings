export const JobCard = (props: any) => {
    const { languages, level, role, tools } = props.job;

    let keywords = [role, level, ...languages, ...tools];

    return (
        <div
            className={
                props.job.featured ? "jobCard jobCard--featured" : "jobCard"
            }
        >
            <div className="jobCard__top">
                <div className="jobCard__top--logo">
                    <img src={`${props.job.logo.slice(1)}`} alt="logo" />
                </div>
                <div className="jobCard__top--info">
                    <div className="jobCard__top--company">
                        <h2>{props.job.company}</h2>
                        <div className="jobCard__top--company-labels">
                            {props.job.new ? (
                                <span className="jobCard__top--company-labels-new">
                                    new!
                                </span>
                            ) : (
                                ""
                            )}
                            {props.job.featured ? (
                                <span className="jobCard__top--company-labels-featured">
                                    featured
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="jobCard__top--title">
                        {props.job.position}
                    </div>
                    <div className="jobCard__top--details">
                        {props.job.postedAt}
                        <span className="bullet">&#x2022;</span>
                        {props.job.contract}
                        <span className="bullet">&#x2022;</span>
                        {props.job.location}
                    </div>
                </div>
            </div>
            <hr className="jobCard__break" />
            <ul className="jobCard__bottom">
                {keywords.map((key: string, id: number) => (
                    <li
                        className="tablet"
                        key={id}
                        onClick={() => props.addFilter(key)}
                    >
                        {key}
                    </li>
                ))}
            </ul>
        </div>
    );
};
