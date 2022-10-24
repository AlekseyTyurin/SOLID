//Open Close Principle

// Какие то классы которые мы создаем должны быть открыты для расширения, но закрыты для модификаций

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}

// This class ready for extending, but not for modification
class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc;
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(15),
    new Circle(3),
    new Circle(25),
    new Rectangle(25, 10),
    new Triangle(15, 10),
])

console.log(calc.sum());