import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const FilterBar = ({ filters, deleteFilter, clearFilters }: any) => {
    return (
        <div className="filterBar">
            <div className="filterBar__list">
                {filters.map((key: any) => (
                    <li className="filterBar__list--filter" key={key}>
                        {key}
                        <button
                            onClick={() => deleteFilter(key)}
                            className="filterBar__list--filter-delete"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </li>
                ))}
            </div>
            <button
                className="filterBar__clear"
                onClick={() => {
                    clearFilters();
                }}
            >
                clear
            </button>
        </div>
    );
};
