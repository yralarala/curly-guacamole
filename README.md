# A Portfolio about Yeyethu Ralarala

## About This Project

This project is a single page application built using the React Framework, Html, CSS and JavaScript. The application gives an overview of who Yeyethu Ralarala is.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and can be found on [My GitHub Repository](https://github.com/yralarala/curly-guacamole), or alternatively viewed on this [website](https://master.dro90zr9rg54m.amplifyapp.com).

## Available Scripts

In the project directory, you can run the below commands on your Terminal:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes to the Project.\

### `yarn test`

Launches the test runner in the interactive watch mode and runs all test suites.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This project gets deployed using Amazon S3. Each time a commit is pushed to GitHub, its get picked
up by Amazon S3. The project gets compile, deployed and hosted on a domain: [domain for viewing the application](https://master.dro90zr9rg54m.amplifyapp.com).

## Things I enjoyed about the Project

Working on a new Framework was enjoyable and challenging to some extent. React is an easy Framework to work with
Being able to reuse components and JSX saves time in coding.

## Shortcomings

Having to juggle school work and completing the project - need to plan better around that in future

## Other features I would have loved to add to the Projet

I am happy with the project, however, there is alway room for improvement. Some I have noted below:

1. For the Navigation bar to change background on an active link
2. For the Application to be a Cross-platform application
3. Applying the Test Driven Development Cycle on the application
4. Using Switch componet to route to another Component instead of Routes component

   1. For the Application to redirecte user to the NotFound component when invalid path is entered

      1. Code snippet is retrived from ./src/App.js . regardless of installations made, Switch and Redirect components were not recognised

      ```javascript
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/careerexpectation" element={<CareerExpectation />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route element={<NotFound />} />
      </Routes>
      ```
