# react-app-emailservice
This project is deployed using firebase: https://react-app-emailservice.web.app

This project is an email service application. It is based on Gmail. The application uses React for the general appliication, redux for state management(user authentication and compose window visibility), firebase(database for email storage and authentication), react hooks, react router(page navigation), google authentication(logging in) and Material-UI for the icons.

You can log in using google authentication.
You can compose emails using the Compose button in the top right, which will display a window for writing the email recipient, subject and message. The X button will close this window. The email will be pushed into the email list in the center of the screen. 
Clicking on an email in the email list will open up a single page dedicated to the clicked email.
You can log out by clicking on the icon in the top right labeled "logout".

The application does not have a proper email functionality. The composed emails will not be sent to the recipient, but will be visible to anyone that is logged in to the application. The majority of the buttons do not have any functionality.
