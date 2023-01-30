const multer = require('multer');
const path = require('path');
const Products = require('../Models/productModel');

const UPLOAD_FOLDER = '../upload/productUpload'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt)
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5000000, // 5mb
    },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true)
        } else {
            cb(new Error("Only .jpg, .png or .jpeg format allowed"))
        }
    }
}).single('image')

// Create product
const createProduct = (upload, async (req, res) => {
    try {
        const newProduct = await Products.create({
            name: req.body.name,
            image: req.file.fileName,
            modelNo: req.body.model
        });
        // await newProduct.save()
        res.status(200).json({
            success: true,
            newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})



module.exports = {
    createProduct
}