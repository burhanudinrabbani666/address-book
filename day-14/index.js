console.log(this); // Which means this will be the window in a browser context.

const car = {
  maker: "tesla",
  model: "Model X",

  drive() {
    console.log(`driving a ${this.maker} ${this.model} car!`);
  },
};

car.drive();
