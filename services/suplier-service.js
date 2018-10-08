const SuplierDao = require("../dao/suplier-dao.js");

const SuplierService = {
	//发布职位信息
	publish(req,res,next){
		//获取请求中传递的职位数据
		const {number,supliername,contacts,telphone,address,fax,time} = req.query;
		SuplierDao.save({number,supliername,contacts,telphone,address,fax,time})
					.then((data)=>{
						console.log(data);
						res.json({res_code:1,res_error:"",res_body:{data}});
					})
					.catch((err)=>{
						console.log(123);
						res.json({res_code:0,res_error:err,res_body:{}});
					})
	},
	//查找
	find(req,res,next){
		//获取查询的页码
		const {page} = req.query;
		//查询
		SuplierDao.findByPage(page)
					.then((data)=>{
						res.json({res_code:1,res_error:"",res_body:{data}});
					})
					.catch((err)=>{
						res.json({res_code:1,res_error:err,res_body:{}});
					});
	},
	//修改
	updata(req,res,next){
		const {supliername,contacts,telphone,address,fax,number} = req.query;
		SuplierDao.update({supliername,contacts,telphone,address,fax,number})
						.then((data)=>{
							res.json({res_code:1,res_error:"",res_body:{data}})
						})
	},
	//总数
	count(req,res,next){
		SuplierDao.counts()
					.then((data)=>{
						res.json({res_num:data});
					})
	},
	//删除
	removeDate(req,res,next){
		const {supliernames} = req.query;
		console.log(supliernames);
		SuplierDao.removes(supliernames)
						.then((data)=>{
							res.json({res_code:1})
						});
	},
	findTwo(req,res,next){
		const {fdUserSupli} = req.query;
		SuplierDao.findByInfo(fdUserSupli)
						.then((data)=>{
							res.json({res_code:1,res_error:"",res_body:{data}});
						})
						.catch((err)=>{
							res.json({res_code:0,res_error:err,res_body:{}});
						});
	}
}

module.exports = SuplierService;