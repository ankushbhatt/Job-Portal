//packageimports
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// //file import
import connectDB from "./utils/db.js";
import userRoute from "./routes/user_route.js";
import companyRoute from "./routes/company_route.js";
import jobRoute from "./routes/job_route.js";
import applicationRoute from "./routes/application_route.js";

// //dot ENV config
dotenv.config();

//rest objects
const app = express(); 

//middleware
app.use(express.json());  //get data in json format
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:6060',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT,() => {
    connectDB(); //mongoose connection
    console.log(`Node Server Running at port ${PORT}`); 
});