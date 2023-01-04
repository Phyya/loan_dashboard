# LENDSQR - Frontend Web Application

Lendsqr is a platform that provides lending-as-a-service to companies to simplify the lending process with an easy, but sophisticated technology that can guarantee an awesome lending experience.
<br/>

This repository contains all the client side code that runs on a browser. The live application can be found at [Lendsqr](https://nafisat-faruk-lendsqr-fe-test.heroku.com)

## Getting Familiar With The Stack

This project is built primarily with [React JS/Typescript](https://www.typescriptlang.org/).
**CSS Library** - [SCSS](https://sass-lang.com/)<br/>
**Build Tool** - [Netlify](https://www.netlify.com/) <br/>
**HTTP client** - [Axios](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/) <br/>
**Testing Library** - [Jest, React Testing Library](https://facebook.github.io/create-react-app/docs/running-tests).

## User Flow

On clicking on the application link [Lendsqr](https://nafisat-faruk-lendsqr-fe-test.heroku.com), the user is redirected to the login page. After successful login, the user is taken to the users page.

## Features

1.  **Login** <br/>
    There is a mock API implementation simulating an authentication being done on the user trying to login. You can simulate this using any email and password, after which you would be redirected to the users page and your login credentials stored in the local storage of your browser to persist state upon refresh.
2.  **Navbar** <br/>
    The navbar at the top contains a searchbar component and user's information. After login, the user's email address will be displayed at the top.
    <br />
    At tablet and mobile views, the navbar collapses and a hamburger menu shows up which displays a drawer upon click.
3.  **Logout** <br/>
    Users can logout from the application at any time. The stored credentials would be deleted from the local storage and the users would be redirected to the login page.
4.  **Users Page** <br/>
    This page contains a table displaying users' information fetched from the database using axios. The table is responsive and includes an options modal where you can find an option to view a particular user's complete information on a "User Details" page. <br/>
    It is well paginated and includes a filter option which can be triggered by clicking on the filter icon on any of the table's header cells.
5.  **Filter Sidebar** <br/>
    Clicking on any filter icon will open up the filter sidebar which is fully functional and would traverse through the data with inputed fields to find a match. It displays the results if found and none if no results. It can be closed by clicking outside the sidebar.
6.  **User Details** <br/>
    The user details page receives the id of the selected user form the users' page and fetches the user's information using that specific id. It displays the information in a responsive layout with an option to go back to the users' page with the exact page number.
7.  **Sidebar** <br/>
    The sidebar is a fully responsive component that allows for navigating the various pages of the application. All the navlinks have been tested and display the right pages. In a case where the page is not available, there is a "Not available" placeholder.

## Testing

All components in the src folder havve been tested using React Testing Library and jest covering positive and negative scenarios.

## Commit Messages

The commit messages use the following naming convention:

1. feat- {name of feature} OR
2. fix- {name of fix}
