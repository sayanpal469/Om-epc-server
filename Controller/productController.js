const multer = require('multer');
const path = require('path');
const Products = require('../Models/productModel');

// Create product
const createProduct = async (req, res) => {
  console.log('createProduct=> req.file', req.file);

  try {
    const newProduct = await Products.create({
      name: req.body.name,
      image: req.file.filename,
      modelNo: req.body.model,
    });
    res.status(200).json({
      success: true,
      newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
};
