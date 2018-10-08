function Content() {
  this.createDom();
}

// 头部导航的布局DOM节点
Content.ContentTemplate = `
                          <div class="left_wrap pull-left">
                            <div class="nav_left">
                              <div class="list-group">
                                <h3 class="list-group-item">功能列表</h3>
                                <a href="#" class="list-group-item ">
                                  账单管理
                                </a>
                                <a href="/html/suplier.html" class="list-group-item">供应商管理</a>
                                <a href="#" class="list-group-item">用户管理</a>
                                <a href="#" class="list-group-item">密码修改</a>
                                <a href="#" class="list-group-item">退出系统</a>
                              </div>
                            </div>
                          </div>
                          <div class="right pull-left"></div>`;

$.extend(Content.prototype, {
  createDom() {
    $(Content.ContentTemplate).appendTo(".content");
  }
});
// 创建头部Header对象
new Content();