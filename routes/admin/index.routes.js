const dashboardRoutes = require("./dashboard.routes");
const productRoutes = require("./products.routes");
const systemConfig=require("../../config/system");

module.exports =(app)=>{
    const PATH_ADMIN= systemConfig.prefixAdmin;

    app.use(PATH_ADMIN + '/dashboard',dashboardRoutes);
    app.use(PATH_ADMIN + '/products',productRoutes);

    }