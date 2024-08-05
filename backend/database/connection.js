import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_WITH_AUTOMATION",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Error Occused wile connecting Database: ${err}");
    });
};
