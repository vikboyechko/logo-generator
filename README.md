# SVG Logo Generator

## The Project

This app uses Node.js and Inquirer to prompt a user for up to 3 characters, a shape (triangle, square, or circle), and colors for both the text and the shape fill, with both color names as well as hex codes accepted. The result is an SVG logo that is scaleable and ready to use.

In addition to the app itself, there are Jest tests that ensure the code passes a test-driven development environment.

Finally, I used Object Oriented Programming (OOP) to create a Shape object with the SVG render template, which then allows each new shape to inherit the basic shape properties and dynamically add their specific SVG instructions to the render.

[See the video demo of the SVG Logo generator](#)

## Installation Instructions

Fork repo, install Node.js, install Inquirer using 'npm i inquirer@8.2.4', install Jest for testing, and then run the project using the command 'node index.js'.
