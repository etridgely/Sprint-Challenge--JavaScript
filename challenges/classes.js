// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(property) {
        this.length = property.length;
        this.width = property.width;
        this.height = property.height;
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
  }
  
class CubeMaker extends CuboidMaker {
    constructor(attributes) {
        super(attributes);
    }
}

  const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
  });

  const rubiks = new CubeMaker ({
    length: 100,
    width: 100,
    height: 100,
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(rubiks.volume()); // 1000000
console.log(rubiks.surfaceArea()); //60000

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.