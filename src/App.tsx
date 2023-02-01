import { useEffect, useState } from "react";
import jobList from "./assets/data.json";
import { FilterBar } from "./components/filterBar";
import Header from "./components/header";
import { JobCard } from "./components/jobCard";

function App() {
    const jobs = jobList;
    const [filteredJobs, setFilteredJobs] = useState<any>([]);
    const [filters, setFilters] = useState<any>([]);

    const addFilter = (key: string) => {
        if (!filters.includes(key)) {
            setFilters([...filters, key]);
        }
    };

    const deleteFilter = (job: string) => {
        const newFilters = filters.filter((filter: any) => filter != job);
        setFilters(newFilters);
    };

    const clearFilters = () => {
        setFilters([]);
    };

    function handleFilters() {
        if (filters.length > 0) {
            const filteredJobs = jobs.filter((job: any) => {
                return filters.every((filter: any) => {
                    return (
                        job.role === filter ||
                        job.level === filter ||
                        job.languages.includes(filter) ||
                        job.tools.includes(filter)
                    );
                });
            });
            setFilteredJobs(filteredJobs);
        } else {
            setFilteredJobs(jobList);
        }
    }

    useEffect(() => {
        handleFilters();
    }, [filters]);

    return (
        <div className="App">
            <Header />
            <main className="main">
                <h1 className="main__heading">Job Listings</h1>
                {filters.length > 0 && (
                    <FilterBar
                        filters={filters}
                        setFilters={setFilters}
                        deleteFilter={deleteFilter}
                        clearFilters={clearFilters}
                    />
                )}
                {!filteredJobs
                    ? jobs.map((job: any) => (
                          <JobCard
                              job={job}
                              key={job.id}
                              addFilter={addFilter}
                          />
                      ))
                    : filteredJobs.map((job: any) => (
                          <JobCard
                              job={job}
                              key={job.id}
                              addFilter={addFilter}
                          />
                      ))}
            </main>
        </div>
    );
}

export default App;
