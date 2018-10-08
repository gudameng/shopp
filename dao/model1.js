//引入mongoose
const mongoose = require("mongoose");

//连接mongodb数据库
mongoose.connect("mongodb://localhost/suplier-lpf");

const suplierSchema = new mongoose.Schema({
	number:Number,
	supliername:String,
	contacts:String,
	telphone:Number,
	address:String,
	fax:Number,
	time:Date,
	id:Number
});

const Suplier = mongoose.model("suplier",suplierSchema);

module.exports = {Suplier};