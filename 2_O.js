//Open Close Principle

// Какие то классы которые мы создаем должны быть открыты для расширения, но закрыты для модификаций

class Square {
    constructor(size) {
        this.type = 'square'
        this.size = size
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle'
        this.radius = radius
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if (shape.type === 'square') {
                acc += shape.size ** 2
            }

            return acc;
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(15),
    new Circle(3),
    new Circle(25),
])

console.log(calc.sum());