# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Job listings with filtering solution](#frontend-mentor---job-listings-with-filtering-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Filter job listings based on the categories

### Screenshot

![](https://raw.githubusercontent.com/charlesmiller0412/job_listings/main/Project%20Display%20Images/jobListingDesktop.webp)

### Links

-   Solution URL: [https://github.com/charlesmiller0412/job_listings](https://github.com/charlesmiller0412/job_listings)
-   Live Site URL: [https://charlesmiller0412.github.io/job_listings/](https://charlesmiller0412.github.io/job_listings/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Mobile-first workflow
-   TypeScript
-   [React](https://reactjs.org/) - JS library
-   [Vite.js](https://vitejs.dev/)
-   [Block Elemenet Modifier (BEM)](https://getbem.com/) - For style organization

### What I learned

This was a great project to test my abilities with array filtering.

```js
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
```

## Author

-   Website - [Charles Miller](https://www.charlesmiller.dev)
-   Frontend Mentor - [@charlesmiller0412](https://www.frontendmentor.io/profile/charlesmiller0412)
-   Instagram - [@millersWebDev](https://www.instagram.com./millersWebDev)
-   Twitter - [@millersWebDev](https://www.twitter.com/millersWebDev)]
