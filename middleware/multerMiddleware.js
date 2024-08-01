import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // directory where uploaded files will be stored
    cb(null, "public/upload");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    // name of the uploaded file
    cb(null, fileName);
  },
});
const upload = multer({ storage });

export default upload;
