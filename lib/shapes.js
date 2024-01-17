class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
        <rect width="100%" height="100%" fill="white" />
   
        <${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />
   
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
        </svg>`;
    }
}

function newShape(data) {
    const logoText = data.text;
    const logoColor = data.textColor;
    const logoShape = data.shape;
    const logoShapeColor = data.shapeColor;

    const newLogo = new Shape(
        logoText,
        logoColor,
        logoShape,
        logoShapeColor
    ).render();
    return newLogo;
}

module.exports = newShape;
