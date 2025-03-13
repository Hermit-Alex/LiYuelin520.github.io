
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
  var trans = new Translate("#p1", "嘿，李玥林！")
  var trans2 = new Translate("#p2", "恭喜你发现了彩蛋！")
  var trans3 = new Translate("#p3", "情人节快乐~")
  var trans4 = new Translate("#p4", "喜欢是一个过于苍白的词来形容我对你的感受")
  var trans5 = new Translate("#p5", "我生活在最平凡的世界里")
  var trans6 = new Translate("#p6", "有着再寻常不过的喜怒哀乐")
  var trans7 = new Translate("#p7", "但因为身边有了你")
  var trans8 = new Translate("#p8", "连每次去见你的舟车劳顿，繁复琐碎")
  var trans9 = new Translate("#p9", "都变得无与伦比的浪漫")
  var trans10 = new Translate("#p10", "冬逝春至，幸于相逢")
  var trans11 = new Translate("#p11", "愿我能够给予你撒娇任性的权利")
  var trans12 = new Translate("#p12", "给予你依赖和自由")
  var trans13 = new Translate("#p13", "陪你度过热爱向往的漫长人生")
  var trans14 = new Translate("#p14", "祝你今天快乐，明天的快乐，留给我明天再祝")
}