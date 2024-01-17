class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // basic SVG render function
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect width="100%" height="100%" fill="white" />
   
        ${this.shapeFill}
   
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeFill = `<polygon points="150,0,20,150,280,150" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeFill = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeFill = `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

const exportedClasses = {
    Shape: Shape,
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
};

module.exports = exportedClasses;
