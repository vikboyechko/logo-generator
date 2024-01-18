// first import the shapes objects under const shape
const shape = require("../lib/shapes.js");

describe("Logo Shape, Text, and Color", () => {
    // Test for Circle logo
    describe("Circle Logo", () => {
        it("should create an svg with a circle logo, text, text color, and background color", () => {
            const circleText = "TXT"; // random three letter text
            const circleTextColor = "white"; // any color will work
            const circleShapeColor = "#999999"; // hex codes work too
            const circleShape = new shape.Circle(
                circleText,
                circleTextColor,
                circleShapeColor
            );
            // have to left indent the SVG render code because white spaces are considered within backticks.
            const expectedSVG = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="white" />
<circle cx="150" cy="100" r="80" fill="${circleShapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${circleTextColor}">${circleText}</text>
</svg>`;

            expect(circleShape.text).toEqual(circleText); // does the text match?
            expect(circleShape.textColor).toEqual(circleTextColor); // does the text color match?
            expect(circleShape.shapeColor).toEqual(circleShapeColor); // does the shape fill color match?
            expect(circleShape.render()).toEqual(expectedSVG); // does the final rendered SVG code match?
        });
    });

    // Test for Triangle logo
    describe("Triangle Logo", () => {
        it("should create an svg with a triangle logo, text, text color, and background color", () => {
            const triangleText = "MA";
            const triangleTextColor = "#fff";
            const triangleShapeColor = "red";
            const triangleShape = new shape.Triangle(
                triangleText,
                triangleTextColor,
                triangleShapeColor
            );
            const expectedSVG = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="white" />
<polygon points="150,0,20,150,280,150" fill="${triangleShapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangleTextColor}">${triangleText}</text>
</svg>`;

            expect(triangleShape.text).toEqual(triangleText);
            expect(triangleShape.textColor).toEqual(triangleTextColor);
            expect(triangleShape.shapeColor).toEqual(triangleShapeColor);
            expect(triangleShape.render()).toEqual(expectedSVG);
        });
    });
    // Test for Square logo
    describe("Square Logo", () => {
        it("should create an svg with a square logo, text, text color, and background color", () => {
            const squareText = "RAD";
            const squareTextColor = "yellow";
            const squareShapeColor = "#333333";
            const squareShape = new shape.Square(
                squareText,
                squareTextColor,
                squareShapeColor
            );
            const expectedSVG = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="white" />
<rect x="70" y="20" width="160" height="160" fill="${squareShapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${squareTextColor}">${squareText}</text>
</svg>`;

            expect(squareShape.text).toEqual(squareText);
            expect(squareShape.textColor).toEqual(squareTextColor);
            expect(squareShape.shapeColor).toEqual(squareShapeColor);
            expect(squareShape.render()).toEqual(expectedSVG);
        });
    });
});
