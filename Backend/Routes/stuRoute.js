const express = require("express")
const route = express.Router();
const empController = require("../Controller/empController")

route.post("/empdatasave",empController.stuDataSave)
route.get("/empdisplaydata",empController.stuDisplay)
route.post("/empsearch",empController.empSearch)
route.get("/empedit",empController.empEdit)
route.post("/empdelete", empController.empDelete);
route.post("/epmeditdata", empController.empEditData);
route.post("/empeditdata",empController.empEditData);
route.post("/empeditdatasave",empController.empEditSave)
module.exports = route;