## Description

A demo full-stack web application that lets users filter a sorted list of 50 movies that contain 'guardians' in their title.

The back-end is a traditional Node/Express RESTful API, and uses the well-tested [request](https://github.com/request/request) library to fetch a set of movies from the [Open Movie Database](https://www.omdbapi.com/) API.

The front-end uses React.js for fast DOM re-renders while filtering. The native `fetch` API is used to make XHR requests to the back-end. State management is handled using React's built-in component state.

All API unit tests use the Mocha test runner and Chai's `expect` assertion library. Controller unit tests add [mockery](https://github.com/mfncooper/mockery) for mocking model dependencies.

Client-side tests use Cypress.

--------

## Local Usage Instructions

Install dependencies:

```bash
npm i && cd client && npm i
```

API Tests:

```bash
npm test            # runs and exits; verbose
npm run test:watch  # remains resident; only logs failures
```

Client Tests:

```bash
npm start            # start the server first
cd client            # then cd to client
npm run cypress      # opens Cypress dashboard for interactive testing
npm run cypress:all  # runs Cypress in terminal, in headless mode
```

>NOTE: A valid OMDb API key is required to run the application locally. The server looks for this in a root-level `.env` file. For example:
>
> `OMDB_API_KEY=yourkeyhere`

Start backend:

```bash
npm start
```

Start frontend:

```bash
cd client
npm start
```

--------
## Project Requirements

**Mission/Challenge**

* Create a responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of things.
* The top of the page will have a search input field and then below that a list of things in response to the filter.
* The things should be sorted alphabetically.
* The things could be anything,
* but should be AJAX pulled from a back-end service that you write and should ultimately be pulled from an open public API.
