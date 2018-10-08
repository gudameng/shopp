function HeaderDown() {
  this.createDom();
}

HeaderDown.HeaderDownTemplate = `
                                <span class="pull-left">
                                  <span><img src="../../img/ico/time.png" /></span>
                                  <span>2018年9月21日</span>
                                </span>
                                <span class="pull-right">温馨提示：为了能正常浏览，请使用高版本浏览器！(IE10+)</span>
                                `;

$.extend(HeaderDown.prototype, {
  createDom() {
    $(HeaderDown.HeaderDownTemplate).appendTo(".headerdown");
  }
});
// 创建头部下面的对象
new HeaderDown();