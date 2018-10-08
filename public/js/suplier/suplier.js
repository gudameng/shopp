function Suplier() {
  this.createDom();
  this.init();
  this.addListener();
}

let id = 0;
let indexs = 1;

Suplier.SuplierTemplate = `<nav class="navbar navbar-default con-right-header">
							  <div class="container-fluid">
							    <div class="navbar-header">
							      <a class="navbar-brand navbar-img-home" href="#">
							        <img src="../../img/ico/home.png">
							      </a>
							    </div>
							    <p class="navbar-txt-o">你现在所在的位置是： <span>供应商管理页面</span></p>
							  </div>
							</nav>
							<form class="navbar-form navbar-left navbar-co-bgcolor" role="search">
							  <div class="form-group">
							  	供应商名称：
							    <input type="text" class="form-control form-co-bor seek" placeholder="请输入供应商的名称">
							  </div>
							  <button type="button" class="btn btn-default btn-wid-sizeo">查询</button>
							</form>


							<button type="button" class="btn btn-primary btn-wid-sizet" data-toggle="modal" data-target=".bs-example-modal-lg">添加供应商</button>

							  <div class="modal fade bs-example-modal-lg" id="suplier-modal-c" tabindex="-1" role="dialog">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								        <h4 class="modal-title">添加供应商</h4>
								      </div>
								      <div class="modal-body">
								        <form class="suplier-da">
								          <div class="form-group">
								             <label for="addPosNumber">供应商编码</label>
								             <input type="text" class="form-control" name="number" id="addPosNumber" placeholder="请输入供应商编码">
								          </div>
								          <div class="form-group">
								             <label for="addPosSupliername">供应商名称</label>
								             <input type="text" class="form-control" name="supliername" id="addPosSupliername" placeholder="请输入供应商名称">
								          </div>
								          <div class="form-group">
								             <label for="addPosContacts">联系人</label>
								             <input type="text" class="form-control" name="contacts" id="addPosContacts" placeholder="请输入联系人">
								          </div>
								          <div class="form-group">
								             <label for="addPosTelphone">联系电话</label>
								             <input type="text" class="form-control" name="telphone" id="addPosTelphone" placeholder="请输入联系电话">
								          </div>
								          <div class="form-group">
								             <label for="addPosAddress">联系地址</label>
								             <input type="text" class="form-control" name="address" id="addPosAddress" placeholder="请输入联系地址">
								          </div>
								          <div class="form-group">
								             <label for="addPosFax">传真</label>
								             <input type="text" class="form-control" name="fax" id="addPosFax" placeholder="请输入传真">
								          </div>
								          <div class="form-group">
								             <label for="addPosTime">创建时间</label>
								             <input type="text" class="form-control" name="time" id="addPosTime" placeholder="自动生成,无需输入内容">
								          </div>
								        </form>
								      </div>
								      <div class="modal-footer">
								        <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
								        <button type="button" class="btn btn-primary btn-add-pos">保存</button>
								      </div>
								    </div>
								  </div>
							  </div>

							<table class="table table-condensed position-table supliermodalal">
								<thead class="position-txt-one">
									<tr>
										<th>供应商编码</th>
										<th>供应商名称</th>
										<th>联系人</th>
										<th>联系电话</th>
										<th>联系地址</th>
										<th>传真</th>
										<th>创建时间</th>
										<th>操作</th>
									</tr>
								</thead>
								<tbody  class="position-txt-two">
									
								</tbody>
							</table>

							<!--分页-->
							<nav>
							  <ul class="pagination">
							    <li class="disabled">
							      <a href="#">
							        <span>&laquo;</span>
							      </a>
							    </li>
							    <li class="active"><a href="#">1</a></li>
							    <li><a href="#">2</a></li>
							    <li><a href="#">3</a></li>
							    <li><a href="#">4</a></li>
							    <li><a href="#">5</a></li>
							    <li>
							      <a href="#" aria-label="Next">
							        <span aria-hidden="true">&raquo;</span>
							      </a>
							    </li>
							  </ul>
							</nav>

							<!--修改时弹出模态框-->
							<div class="modal fade bs-example-modal-alte" tabindex="-1" role="dialog">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								        <h4 class="modal-title">供应商信息修改</h4>
								      </div>
								      <div class="modal-body">
								        <form class="suplier-upda">
								          <div class="form-group">
								             <label for="addPosNm">供应商名称</label>
								             <input type="text" class="form-control" name="supliername" id="addPosNm" placeholder="请输入准备修改的供应商名称">
								          </div>
								          <div class="form-group">
								             <label for="addPosLinkm">联系人</label>
								             <input type="text" class="form-control" name="contacts" id="addPosLinkm" placeholder="请输入准备修改的联系人">
								          </div>
								          <div class="form-group">
								             <label for="addPosPhone">联系电话</label>
								             <input type="text" class="form-control" name="telphone" id="addPosPhone" placeholder="请输入准备修改的联系电话">
								          </div>
								          <div class="form-group">
								             <label for="addPosAddres">联系地址</label>
								             <input type="text" class="form-control" name="address" id="addPosAddres" placeholder="请输入准备修改的联系地址">
								          </div>
								          <div class="form-group">
								             <label for="addPosFacs">传真</label>
								             <input type="text" class="form-control" name="fax" id="addPosFacs" placeholder="请输入准备修改的传真">
								          </div>
								        </form>
								      </div>
								      <div class="modal-footer">
								        <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
								        <button type="button" class="btn btn-primary btn-updata-ser">保存</button>
								      </div>
								    </div>
								  </div>
							  </div>`;

	$.extend(Suplier.prototype,{
		//创建DOM元素
		createDom(){
			$(Suplier.SuplierTemplate).appendTo(".right");
		},
		//初始化
		init(){
			//加载第一页数据
			this.loadByPage(1);
		},
		//按页加载职位信息
		loadByPage(page){
			page = page ||1;
			$.get("/api/suplier/find",{page},(data)=>{
				let html = "";
				data.res_body.data.forEach((curr, index)=>{
					html += `<tr>
								<td>${curr.number}</td>
								<td>${curr.supliername}</td>
								<td>${curr.contacts}</td>
								<td>${curr.telphone}</td>
								<td>${curr.address}</td>
								<td>${curr.fax}</td>
								<td>${curr.time}</td>
								<td><a href="javascript:void(0);"><img src="../../img/ico/read.png"/></a>
								<a href="" data-toggle="modal" data-target=".bs-example-modal-alte" class="update"><img src="../../img/ico/xiugai.png"/></a>
								<a href="javascript:void(0);" class="dele"><img src="../../img/ico/delete.png"/></a></td>
						</tr>`;
				});
			//显示
				$(".position-txt-two").html(html);
			})
		},
		//注册事件监听
		addListener(){
			//点击页面翻页
			$(".pagination").on("click","a",this.loadByPageHandler.bind(this));
			//添加职位
			$(".btn-add-pos").on("click",this.addSuplierHandler);
			//修改信息
			$(".btn-updata-ser").on("click",this.updateUse);
			$(".supliermodalal").on("click",".update",function(event){
				numUp = $(event.currentTarget).parent().parent().find("td").eq(0).text();
				// console.log(numUp);
				$("input[name='supliername']").val($(event.currentTarget).parent().parent().find("td").eq(1).text());
				$("input[name='contacts']").val($(event.currentTarget).parent().parent().find("td").eq(2).text());
				$("input[name='telphone']").val($(event.currentTarget).parent().parent().find("td").eq(3).text());
				$("input[name='address']").val($(event.currentTarget).parent().parent().find("td").eq(4).text());
				$("input[name='fax']").val($(event.currentTarget).parent().parent().find("td").eq(5).text());
			});
			//删除信息
			$(".supliermodalal").on("click",".dele",this.removeUse.bind(this));
			//查找用户信息
			$(".btn-wid-sizeo").on("click",this.findSupli);
		},
		//点击翻页处理
		loadByPageHandler(event){
			const src = event.target;
			//页面
			const page = Number($(src).text()) || 1;
			//加载
			this.loadByPage(page);
			//激活
			$(src).parent().addClass("active").siblings().removeClass("active");

			return false;
		},
		//添加职位处理
		addSuplierHandler(){
			//接口
			let url = "/api/suplier/publish";
			//ajax上传
			$.ajax({
				type:"get",
				url,
				data:$(".suplier-da").serialize(),
				dataType:"json",
				success(data){
					// console.log(data);
					const curr = data.res_body.data;
					// console.log(curr);
					const html = `<tr>
									<td>${curr.number}</td>
									<td>${curr.supliername}</td>
									<td>${curr.contacts}</td>
									<td>${curr.telphone}</td>
									<td>${curr.address}</td>
									<td>${curr.fax}</td>
									<td>${curr.time}</td>
									<td><a href="javascript:void(0);"><img src="../../img/ico/read.png"/></a> <a href="javascript:void(0);"><img src="../../img/ico/xiugai.png"/></a> <a href=""  class="dele"><img src="../../img/ico/delete.png"/></a></td>
								</tr>`;
					$(".position-txt-two").append(html);
					//关闭模态框
					$("#suplier-modal-c").modal("hide");
					window.location.reload();
				}
			});
		},

		//修改
		updateUse(){
			const url = "/api/suplier/updata";
			data = $(".suplier-upda").serialize()+"&number="+numUp;
			// console.log(numUp);
			// console.log(data);
			$.get(url,data,(data)=>{
				window.location.reload();
			});
		},
		//删除
		removeUse(event){
			del = $(event.currentTarget).parent().parent().find("td").eq(1).text();
			const url = "/api/suplier/remove";
			data = "&supliernames="+del;
			// console.log(data);
			$.get(url,data,(data)=>{
				alert("删除成功！");
				window.location.reload();
			})
		},
		//查找
		findSupli(){
			const fdUserSupli = $(".seek").val();
			url = "/api/suplier/fin";
			//console.log(fdUserSupli);
			$.get(url,{fdUserSupli},(data)=>{
				//console.log(data);
				let html = "";
				data.res_body.data.forEach((curr,index)=>{
					html += `<tr>
							<td>${curr.number}</td>
							<td>${curr.supliername}</td>
							<td>${curr.contacts}</td>
							<td>${curr.telphone}</td>
							<td>${curr.address}</td>
							<td>${curr.fax}</td>
							<td>${curr.time}</td>
							<td><a href="javascript:void(0);"><img src="../../img/ico/read.png"/></a> <a href="javascript:void(0);"><img src="../../img/ico/xiugai.png"/></a> <a href=""  class="dele"><img src="../../img/ico/delete.png"/></a></td>
						</tr>`;
				$(".position-txt-two").html(html);
				})
			})
		}
	})

//创建管理商内容
new Suplier();