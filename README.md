# Github Search

Github Search is a React.js Single Page Application which lets you search for Github Repos by Organization names, and also offers a capability to filter the result set by number of issues, stars or watchers.


## Getting started

###  Requirements
[Node.js](https://nodejs.org/en/) LTS installed.
(You can use `nvm`, `brew` or direct package installer from the official website.)

`npm install`

`npm start`

This will start the local development server in the hot reload module and open the browser at
http://localhost:3000

If you want to deploy your application to production, follow these steps:

 1. `npm run build`
 2. Serve the build folder from Nginx, or Express.js app or any other web server. And as we are using React router for this SPA, make sure to serve index.html even for unmatched routes.

#### Note:
The APIs used are mocked (octokit) and the service should be replaced with a real http client for it to make calls to real Github public APIs.

## Tech stack & frameworks

 - React.js
 - Redux
 - Jest
 - Enzyme

## Running tests
`npm test`

## Guide
 1. Type in an organization name (octokit) and click search.
 (Search will be disabled in case there is no text entered)
 2. Enter values in the filters post search to dynamically filter down the results. Available filters:
    - Watchers
    - Stars
    - Issues

    The filters are applied using AND operation. Example: If the result set has got 4 entries(repos)
    
        [
         {
             name: 'foo',
             stars: 1,
             watchers: 2,
             issues: 3
         },
         {
             name: 'bar',
             stars: 1,
             watchers: 2,
             issues: 30
         }
         {
             name: 'baz',
             stars: 11,
             watchers: 12,
             issues: 13
         }
         {
             name: 'moo',
             stars: 10,
             watchers: 20,
             issues: 30
         }
        ] 
    A filter - issues: 30 & watchers: 2 & stars: 1 will return the repo - 'bar'