
/**
 * Translate 
 * query_string 用于获取元素的查询字符串
 * translated 翻译后的字符串
 * options 选项
 */
function Translate(query_string, translated="", options={}) {
  this.ele = document.querySelector(query_string);
  this.translated = translated;
  this.options = options;
  this.translate();
}

Translate.prototype.translate = function() {
  this.ele.onclick = e => {
    console.log(this.ele.classList.contains("translated"))
    if (this.ele.classList.contains("translated")){
      this.ele.classList.remove("translated")
      this.ele.classList.add("translating")
      setTimeout(()=>{
        [this.ele.innerHTML, this.translated] = [this.translated, this.ele.innerHTML]
        this.ele.classList.remove("translating")
      }, 500)
    } else {
      this.ele.classList.add("translating")
      setTimeout(()=>{
        [this.ele.innerHTML, this.translated] = [this.translated, this.ele.innerHTML]
        this.ele.classList.add("translated")
        this.ele.classList.remove("translating")
      }, 500)
    }
  }
}

window.onload = function(){
  // 使用示例
  var trans = new Translate("#p1", "嘿，宝贝仔！")
  var trans2 = new Translate("#p2", "文案更新啦！")
  var trans3 = new Translate("#p3", "生日快乐仔~")
  var trans4 = new Translate("#p4", "第一次见到你时，宝贝仔像星星一样进入我的生活~")
  var trans5 = new Translate("#p5", "过去的一年里，我们完成了既定的每一个出行计划")
  var trans6 = new Translate("#p6", "在北京鸟巢体育场感受了张杰粉丝的热情")
  var trans7 = new Translate("#p7", "在兰州奥林匹克中心入手了林俊杰的应援帽")
  var trans8 = new Translate("#p8", "在长沙的午夜街头靠打枪拥有了新的仔们")
  var trans9 = new Translate("#p9", "在重庆拥挤的人潮里跨年~")
  var trans10 = new Translate("#p10", "点点滴滴，共同经历")
  var trans11 = new Translate("#p11", "愿我能与你在新的一年里继续完成我们的计划")
  var trans12 = new Translate("#p12", "给予你依赖和自由")
  var trans13 = new Translate("#p13", "陪你度过热爱向往的漫长人生")
  var trans14 = new Translate("#p14", "祝你今天快乐，明天的快乐，留给我明天再祝")
}