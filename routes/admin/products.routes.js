const express= require("express");
const router= express.Router();

const products=require('../../controllers/admin/product.controller');

router.get('/', products.index);

module.exports=router;