# react-app-emailservice
This project is deployed using firebase: https://react-app-emailservice.web.app

This project is an email service application. It is based on Gmail. The application uses React for the general appliication, redux for state management(user authentication and compose window visibility), firebase(database for email storage and authentication), react hooks, react router(page navigation), google authentication(logging in) and Material-UI for the icons.

A user can log in using google authentication.

The emails in the inbox are displayed in the email list in the center of the screen, ordered by date sent. These emails are stored in and retrieved from a Firebase database.

Emails can be composed by using the Compose button in the top right, which will display a window with 3 input fields for writing the email recipient, subject and message. The X button will close this window. When pressing the send button, if the input fields are invalid, error messages will be displayed under the fields. If the input fields are valid, the email will be added to the firebase email database, which will then appear at the top of the email feed.

Clicking on an email in the email list will open up a single page dedicated to the clicked email.

The logout button will log the user out of the website.

The application does not have a proper email functionality. The composed emails will not be sent to the recipient, but will be visible to anyone that is logged in to the application. The majority of the buttons do not have any functionality.
