# Testing "The Internet"!

## Notes to assessors:

There is a feature branch in this repo that demonstrates how we could use page object models for our tests. Using page objects isn't always the best way to go about things, but they can be very useful depending on what it is you want to do in your tests. If different tests have to take the same path through the application, then defining page objects can make writing and maintaining tests a bit more straightforward.

Of course, for this very basic single test, they don't add much value, they just add another layer of indirection. I prefer not to implement page objects until their benefit is clear - otherwise, a simpler codebase is arguably preferable.

The page object code is available in the `feature/page-object-model` branch.

## Introduction

This is a basic Playwright and Typescript repo to demonstrate how we can write end to end tests for the sample website hosted at [http://the-internet.herokuapp.com/](http://the-internet.herokuapp.com/).

## Getting set up

1. **Install Node**. You'll need to have first install Node (and npm). This code was written using Node 23.7.0. You can find installation instructions [here](https://nodejs.org/en/download).
1. **Clone this codebase**. Clone this repo to your local machine.
1. **Install the dependencies**. Run `npm install` to install all the required node libraries.
1. **Create a local .env file**. There are some "secrets" and configuration details that we keep in a .env file. This file isn't part of the repo, to avoid putting secrets in plain text in github. Ask a friend for the login user details and then complete your .env file with the following values:

```bash
BASE_URL=http://the-internet.herokuapp.com
LOGIN_USER=<secret_login_user>
LOGIN_PASS=<secret_login_password>
```

## Running the tests

### Using the Playwright UI

When developing tests, using the Playwright UI tool can be very handy. This application gives you an interface for running and debugging tests, with a test timeline and the ability to step through the test:

```bash
npx playwright test --ui
```

### Running tests from the command line

To run the tests in headless mode, use the npm script:

```bash
npm run test
```

By default, the tests run against Chromium.