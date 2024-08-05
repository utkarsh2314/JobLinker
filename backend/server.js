import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloudname: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log("Server listening at port ${4000}");
});
