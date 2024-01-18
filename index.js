// Import file system, inquirer, and the shapes objects
const fs = require("fs");
const inquirer = require("inquirer");
const shape = require("./lib/shapes.js");

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
            console.log(`Generated ${fileName}`);
        }
    });
}

// Initialize the app, set Project Title as the filename
function init() {
    inquirer.prompt(questions).then((response) => {
        const filePath = `./examples/${response.text}-logo.svg`;

        // Use Circle object if circle is selected
        if (response.shape == "circle") {
            const createLogo = new shape.Circle(
                response.text,
                response.textColor,
                response.shapeColor
            );
            writeToFile(filePath, createLogo.render());
            // Use Square object if square is selected
        } else if (response.shape == "square") {
            const createLogo = new shape.Square(
                response.text,
                response.textColor,
                response.shapeColor
            );
            writeToFile(filePath, createLogo.render());
            // Use Triangle object if Triangle is selected
        } else if (response.shape == "triangle") {
            const createLogo = new shape.Triangle(
                response.text,
                response.textColor,
                response.shapeColor
            );
            writeToFile(filePath, createLogo.render());
        }
    });
}
init();
