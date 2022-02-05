# Phonewords

[![Node](https://img.shields.io/badge/Node->=14.17.6-blue.svg)](https://shields.io/)

Basic demonstration of a NodeJS+React+Typescript project.

## Running Locally

```
// setup
$ yarn setup

// running front and back in development mode
$ yarn dev
```

## Tests

The front-end test cases are based in a serie of articles:

- https://kentcdodds.com/blog/why-i-never-use-shallow-rendering
- https://kentcdodds.com/blog/testing-implementation-details
- https://kentcdodds.com/blog/how-to-know-what-to-test

To run the tests, run the command:

```
// front-end unit and e2e tests
$ cd front && yarn test-all

// back-end tests
$ cd server && yarn test
```

## Deployment

The deployment is done using heroku

## Demo

https://phonewords-generator.herokuapp.com/
