const fs = require("fs");
const inquirer = require("inquirer");
const shapes = require("./lib/shapes.js");

// Inquirer questions
const questions = [
    {
        type: "input",
        message: "Enter up to 3 characters: ",
        name: "text",
    },
    {
        type: "input",
        message: "Enter a color name or hex code for the text: ",
        name: "textColor",
    },
    {
        type: "list",
        message: "Choose a shape: ",
        name: "shape",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        message: "Enter a color name or hex code for the shape fill: ",
        name: "shapeColor",
    },
];

// Save SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Something went wrong. ", err);
        } else {
            console.log("Success!");
        }
    });
}

// Initialize the app, set Project Title as the filename
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response.text + ".svg", newShape(response));
    });
}
init();
