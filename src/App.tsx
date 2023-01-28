import { useState } from "react";
import data from "./assets/data.json";
import Header from "./components/header";
import { JobCard } from "./components/jobCard";

console.log(data);

let key = 0;
function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                {data.map((job: any) => (
                    <JobCard job={job} key={key++} />
                ))}
            </main>
        </div>
    );
}

export default App;
