# Contribution Guideline

Any kind of input are always appreciated greatly. Feel free to speak with the developer team regarding:

- Discussing the current state of the code
- Proposing improvements or new features
- Reporting a bug
- Submitting a fix

## Development Workflow

Any kind of changes to the repository files should go through the following process to ensure accountability and integrity of the main branch:

### 1. Start by opening a new issue in the backlog and discuss it with the team

In particular, the stakeholder should be informed and included in the discussion of the changes. Feel free to mention the developer team or related party in the communication channel regarding these changes. Discussion could be done anywhere but its result should be documented in the issue page itself or some other documentation places such as ClickUp.

A good non-bug issue should contains:

- Background, for example what problems we currently have or what improvement do you think would be great to bring
- A quick summary of what you want to do
- Definition of when your task should be completed

bug issue should contains:

- Specific steps to reproduce
- What you expected would happen vs what actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### 2. Start your work by creating your development branch from your issue you have created

Your branch should preferably be derived from the latest commit in the main branch. Integrating updates from the main branch could be done by rebasing them into your branch.

Use lowercase with hyphen to name branch containing the issue identifier, short descriptive name. It is encouraged to add a prefix which apply to the situation from the following to further describe the tasks done in your branch:

- `feature`, for logic or functional changes in the code files affecting the production code
- `fix`, for bug fix in the production code, no changes in intended functions of the code
- `refactor`, for refactoring production code to make it easier to understand, like renaming a variable or restructuring folders
- `style`, for formatting change in the code
- `test`, for adding missing tests, refactoring tests, creating new tests; no production code change
- `chore`, for updating grunt tasks etc; no production code change
- `docs`, for changes to the documentation

For example, a branch name could be `feature/statistic-page-graph` or `refactor/initialize-folder-structure`. Similarly, a commit message also should contain the issue identifier and the type of changes, such as `feat: statistic page graph` or `refactor: initialize folder structure`.

### 3. Develop your changes

Code is read more often than it is written said somebody wise. That's why you should prioritize to make your changes easy to read and understood by other people beside their correctness. One way to achieve this, beside using clean code principle and the languages' best practices, is to follow style guides which provide some standardized baseline rules when developing some projects.

To further utilize linting and formatting tools, we recommend you to use [Visual Studio Code](https://code.visualstudio.com) as the IDE of choice.

### 4. Create a pull request

After making sure your code build and work as intended, push your changes to the remote repository and create a pull request from your branch to main branch in the Github website. Assign relevant people as a reviewer to your branch and feel free to mention them in the communication channel. Wait until your changes are reviewed and fix any problems that they raised. After your code has been reviewed then you can merge your changes into the main branch and your work here is done. (Unless further problems are encountered in the future from your code)
