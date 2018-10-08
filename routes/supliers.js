var express = require('express');
var SublierService = require("../services/suplier-service.js");
var router = express.Router();

//发布
router.get("/publish",SublierService.publish);

//查找
router.get("/find",SublierService.find);

//总数量
router.get("/count",SublierService.count);

//修改
router.get("/updata",SublierService.updata);

//删除
router.get("/remove",SublierService.removeDate);

//根据输入信息查找数据
router.get("/fin",SublierService.findTwo);

module.exports = router;