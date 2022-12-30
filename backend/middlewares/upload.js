const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5 // limit filesize to 5MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(new Error('Please upload a PDF'));
    }

    cb(undefined, true);
  }
});

