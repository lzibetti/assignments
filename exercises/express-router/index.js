const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const hawkRoute = require("./routes/hawk")
const skoalRoutes = require("./routes/skoal")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/hawk", hawkRoute);
app.use("/skoal", skoalRoutes);


app.listen(PORT, ()=>{
    console.log(`RUNNING ON PORT ${PORT}`)
})
