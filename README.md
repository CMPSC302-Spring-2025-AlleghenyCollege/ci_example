# Automated Testing

This is a basic HTML, CSS, and JavaScript website with automated testing using GitHub Actions.

## Features
- Basic webpage with a button that changes text when clicked.
- HTML and CSS linting using `htmlhint` and `stylelint`.
- JavaScript testing with `jest` and `jsdom`.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/simple-website.git
   cd simple-website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests and Linters
- **Run HTML Lint:**
  ```sh
  npx htmlhint .
  ```
- **Run CSS Lint:**
  ```sh
  npx stylelint "**/*.css"
  ```
- **Run JavaScript Tests:**
  ```sh
  npx jest
  ```

## GitHub Actions
This repository includes a GitHub Actions workflow to automatically:
- Lint HTML and CSS files.
- Run JavaScript unit tests on every push or pull request to `main`.