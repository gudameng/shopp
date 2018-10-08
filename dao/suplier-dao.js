const {Suplier} = require("./model1.js");

const SuplierDao = {
	//添加
	save(suplierInfo){
		suplierInfo.time = new Date();
		return new Suplier(suplierInfo).save();
	},
	//每页显示
	findByPage(page){
		const pageSize = 10;//每页显示记录数
		return Suplier.find().limit(pageSize).skip((page - 1) * pageSize);
	},
	//修改
	update(condition){
		return Suplier.update({number:condition.number},{$set:{supliername:condition.supliername,contacts:condition.contacts,telphone:condition.telphone,address:condition.address,fax:condition.fax}})
	},
	//用户数量
	counts(){
		return Suplier.find().count();
	},
	//删除
	removes(supliernames){
		return Suplier.remove({supliername:supliernames});
	},
	//查找
	findByInfo(condition){
		return Suplier.find({supliername:condition});
	}
}

module.exports = SuplierDao;