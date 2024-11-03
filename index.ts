import express  from "express";
const app = express();

const port = process.env.PORT || 5006;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})