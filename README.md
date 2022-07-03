If you want to run cypress test, you need to install all of new dependencies using 
### `npm install`

> I try to create different types of test cases. So, in this project I use:

## First test case: Create one task and complete this
Expected Result: The task is created. When you click on the flag, the task is cancelled
Status: Pass

## Second test case: Create 5 items.
Text should be longer than 50 characters
Complete just first and last tasks
Expected Result: The 5 tasks are set in line with the other elements. 
When you click on the flag of the first and the last element, they collapse.
Status: Pass

## Third test case: Verify the behaviour of the application when user put different data types in field
Text with huge amount characters
Data includes special elements
Expected Result: 
If a large amount of text is entered, the system will work correctly. 
Status: Faild
Special characters are displayed in the field and are visible. 
Status: Pass

> For faild test I need to create 
## bug report
**Title:** Web App. Text with more than 90 characters does not transfer to another line
**ER:** The user expects the task to fit on different lines on the page and not to overstep the screen frame
**AC:** Text with more than 90 characters does not transfer to another line and is displayed outside the page window (frame)

Also, I use add tools like cypress-mochawesome-reporter 
This plugin help to crate video screenshots for all of tests. Results you can find in folder `simple-todo/cypress/videos`

> In cypress we have local reporter. We can use command 
### `npx cypress run`
This command create sceenshots for testing results and HTML file in folder `simple-todo/cypress/report`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
