const multer = require('multer');
const path = require('path');

const UPLOAD_FOLDER = `${__dirname}/../uploads`;

const STORAGE = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    console.log(file);
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, '')
        .toLowerCase()
        .split(' ')
        .join('-') +
      '-' +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: STORAGE,
  limits: {
    fileSize: 5000000, // 5mb
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpg, .png or .jpeg format allowed'));
    }
  },
}).single('image');

const singleFileUpload = (req, res, next) => {
  upload(req, res, (err) => {
    // console.log('req.files:', req.files);
    // console.log('req.file:', req.file);
    // console.log('req.file.filename:', req.file.filename);
    console.log('err:', err);
    if (!err) {
      next();
    } else {
      res.status(502).json({
        success: false,
        message: err.message,
      });
    }
  });
};

module.exports = singleFileUpload;
