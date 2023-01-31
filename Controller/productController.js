const multer = require('multer');
const path = require('path');
const Products = require('../Models/productModel');

console.log(__dirname);
const UPLOAD_FOLDER = `${__dirname}/../uploads`

const STORAGE = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename: (req, file, cb) => {
        console.log(file)
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt)
    },
});

const upload = multer({
    storage: STORAGE,
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
const createProduct = (async (req, res) => {
    upload(req, res, async (err) => {
        console.log('req.files:', req.files);
        console.log('req.file:', req.file);
        console.log('req.file.filename:', req.file.filename);
        console.log('err:', err);
        if (!err) {
            try {
                const newProduct = await Products.create({
                    name: req.body.name,
                    image: req.file.filename,
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
        } else{
            res.status(502).json({
                success: false,
                message: err.message
            })
        }

    })
    // console.log(req.file);

})



module.exports = {
    createProduct
}