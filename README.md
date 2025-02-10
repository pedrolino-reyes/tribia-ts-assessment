# Testing "The Internet"!

A basic Playwright and Typescript repo to demonstrate how we can write end to end tests for the basic website hosted at [http://the-internet.herokuapp.com/](http://the-internet.herokuapp.com/).

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