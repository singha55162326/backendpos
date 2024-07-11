require("dotenv").config();
const express = require("express");
const logger = require("./logger");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/cars", require("./routes/carsRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/categories", require("./routes/CategoriesRoutes"));
app.use("/customers", require("./routes/customersRoutes"));
app.use("/employees", require("./routes/employeesRoutes"));
app.use("/oils", require("./routes/oilsRouters"));
app.use("/supplier", require("./routes/supplierRoutes"));
app.use("/document", require("./routes/documentRoutes"));
app.use("/transport", require("./routes/transportRoutes"));
app.use("/order", require("./routes/orderRoutes"));
app.use("/sell", require("./routes/sellRoutes"));
app.use("/selldetail", require("./routes/selldetailRoutes"));
app.use("/orderdetail", require("./routes/orderdetailRoutes"));
app.use("/import", require("./routes/importRoutes"));
app.use("/importdetail", require("./routes/importdetailRoutes"));
app.use("/report", require("./routes/reportRoutes"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => logger.info(`Server running on PORT ${PORT}`));
