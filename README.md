# Simple Website with CI Automation

This project demonstrates a basic website with Continuous Integration (CI) automation using GitHub Actions.

## CI Tools Used

- [GitHub Actions](https://github.com/features/actions) - CI/CD platform integrated with GitHub
- [HTMLHint](https://htmlhint.com/) - Static code analysis tool for HTML
- [Stylelint](https://stylelint.io/) - Linter for CSS files
- [Jest](https://jestjs.io/) - JavaScript testing framework

## Local Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Run tests with `npm test`
4. Run CSS linting with `npm run lint:css`

## CI Workflow

The CI workflow in this project:
1. Runs on every push to the main branch and on pull requests
2. Checks out the repository code
3. Sets up `Node.js` environment
4. Installs project dependencies
5. Runs HTML linting with `HTMLHint`
6. Runs CSS linting with `Stylelint`
7. Runs JavaScript tests with `Jest`

## Learning Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)
- [Jest Testing Guide](https://jestjs.io/docs/getting-started)
- [Stylelint Documentation](https://stylelint.io/user-guide/get-started)
- [HTMLHint Documentation](https://htmlhint.com/docs/user-guide/getting-started)
