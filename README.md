# Learning Playwright

A TypeScript automation project for learning and practicing Playwright Test. The current project includes web UI tests for uTest and API tests for the Todo API.

## Tech Stack

- TypeScript
- Playwright Test
- Node.js and npm
- `csv-parse` for CSV test data

## Prerequisites

- Install a supported Node.js LTS version and npm.
- Git is required if you clone the repository.

Check your installation:

```bash
node --version
npm --version
```

## Installation

```bash
git clone <repository-url>
cd learning_playwright
npm ci
npx playwright install
```

Replace `<repository-url>` with the repository URL.

## Project Structure

```text
learning_playwright/
├── _data/                 # CSV test data
├── _fixtures/             # Custom Playwright fixtures
├── _helpers/              # API helper methods
├── _page-objects/utest/   # uTest page objects
├── _tests/
│   ├── api/               # Todo API tests
│   └── ui/                # uTest UI tests
├── utils/                 # Shared UI and CSV utilities
├── playwright.config.ts   # Playwright configuration
├── package.json
└── package-lock.json
```

## Recommended VS Code Extensions

The project can also be used from Visual Studio Code with these extensions:

- **Playwright Test for VS Code** — discover tests in the Testing sidebar, run or debug individual test cases, and inspect test results without typing the CLI command each time.
- **Rainbow CSV** — makes CSV files such as `_data/userDetails.csv` easier to read and inspect by highlighting columns.

### Using the Extensions

1. Open the project folder in Visual Studio Code.
2. Install **Playwright Test for VS Code** and **Rainbow CSV** from the VS Code Extensions Marketplace.
3. For Playwright tests, open the **Testing** sidebar and use the run/debug controls shown beside discovered tests. If tests are not discovered, check that dependencies are installed and that `playwright.config.ts` and the test files are present.
4. For CSV test data, open the relevant `.csv` file. Use Rainbow CSV's CSV highlighting and column tools as needed.

These extensions are optional; tests can still be run from the terminal using the commands in [Running Tests](#running-tests).

## Running Tests

The project does not currently define npm scripts. Use the Playwright CLI:

```bash
# Run all tests across configured browser projects
npx playwright test

# Run UI tests only
npx playwright test _tests/ui

# Run API tests only
npx playwright test _tests/api

# Run a specific test file
npx playwright test _tests/ui/tc01-utest-register-basic.spec.ts

# Run in a specific browser project
npx playwright test --project=chromium

# Open Playwright UI mode
npx playwright test --ui
```

The configured browser projects are Chromium, Firefox, and WebKit. The current configuration runs browsers in headed mode by default, uses a 30-second test timeout, disables retries, and retains video for failed tests.

## Test Data and Reusable Components

- `_data/userDetails.csv` contains sample registration data.
- `utils/uiHelper.ts` provides locator selection and CSV-reading utilities.
- `_fixtures/customer-fixture.ts` defines shared fixtures for navigating to uTest pages and using page objects or browser contexts.
- `_page-objects/utest/` contains page objects for the uTest pages.
- `_helpers/apiHelpers.ts` provides a reusable API request helper.

Use synthetic or approved test data only. Do not store real customer data or credentials in test files.

## Reports and Debugging

Generate an HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

Useful debugging commands:

```bash
npx playwright test --debug
npx playwright test --project=chromium --headed
```

Test artifacts are typically written to `test-results/`; the HTML report is typically written to `playwright-report/`.

## Target Systems

The current tests use external services:

- UI tests: `https://utest.com/`
- API tests: `https://apichallenges.eviltester.com`

Test results can depend on the availability and behavior of these services.

## Document Links
- WebUI - PlaywrightJS: https://docs.google.com/spreadsheets/d/1LGfk1ma1FagPIpwm-xV94fMvbru92-_8ixVjcZ47Pvk/edit?usp=sharing
- API - PlaywrightJS: Comming Soon

### Proposed npm scripts (not yet added to `package.json`)

The following scripts are a proposal only. They will not work until added to `package.json`:

```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test _tests/ui",
    "test:api": "playwright test _tests/api",
    "test:chromium": "playwright test --project=chromium",
    "report": "playwright show-report"
  }
}
```

After these scripts are added, the corresponding commands would be `npm test`, `npm run test:ui`, `npm run test:api`, `npm run test:chromium`, and `npm run report`.
