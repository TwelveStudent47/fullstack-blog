const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const blogRouter = require("./routes/blog");

const app = express();

app.use(express.json());

app.use("/api", blogRouter);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is listening on port ${process.env.PORT || 5000}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();