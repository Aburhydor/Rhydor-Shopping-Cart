const config = require('../config');
const Product = require('../models/productModel');

// const Product = require('../models/productModel');

const jsonProducts = require('../product.json');

const start = async () => {
  try {
    await config.MONGODB_URL;
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
