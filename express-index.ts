import express from "express";
import multer from "multer";
import { fromPath } from "./src/utils/image-utils";
import path from "path";

const app = express();
const disk = multer.diskStorage({
  filename:(req, file, cb) =>{
    const ext= path.extname(req.file?.originalname!);
    const name= `${Date.now()}.${ext}`;
    cb(null, name);
  }
})

const upload = multer({ dest: "uploads/" });

app.use("upload",express.static("uploads"));

app.post("/upload", upload.single("upload"), async (req, res) => {
  const { file } = req;
  if (!file) return res.status(4000).json({ error: "No file uploaded" });

  const { path: filePath } = file;
  await fromPath(filePath);

  return res.status(201).json({ ...req.file });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
