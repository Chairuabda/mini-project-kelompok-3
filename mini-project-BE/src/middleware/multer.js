const path = require("path")
const multer = require("multer");

const avatarStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/image/avatar"))
  },
  filename: (req, res, cb) => {
    const { username } = req.user;
    cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`)
  }
})

const fileFilter = (req, res, cb) => {
  const fileType = file.mimetype.split("/")[1]
  if (
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg" ||
    fileType === "gif"
  ) {
    cb(null, true)
  } else {
    cb("File type not allowed", false)
  }
}

const limits = {
  fileSize : 1024 * 1024,
}

const uploadAvatar = multer({
  storage: avatarStorage,
  fileFilter,
  limits
}).single("avatar")


module.exports = { uploadAvatar }