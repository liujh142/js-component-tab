# js-component-tab
## 组件功能
tab切换
## 组件实现方式
```
function Tab(node){
    this.node = node
}
Tab.prototype = {
    constructor : Tab,
    init : function(){
       this.buttonList = this.node.querySelectorAll('.tab-button')
       this.tabList = this.node.querySelectorAll('.tab')
       this.tabList[0].setAttribute('style','display:block');
       this.buttonList[0].classList.add('active');
       this.find();
    },
    find : function(){
        var _this = this;
        this.node.addEventListener('click',function(e){
            _this.buttonList.forEach(function(value,index){
                if( value === e.target){
                    _this.tabList[index].setAttribute('style',"display:block")
                    value.classList.add('active')
                }else{
                    _this.tabList[index].setAttribute('style',"display:none")
                    value.classList.remove('active')
                }
            })
        })
    }
}
```
通过遍历tab-nav操作对应的dom来实现tab切换，如果使用jquery的话则不需要遍历但是每次使用都需要引入jQuery很麻烦所以使用了原生js
## 如何使用
将需要操作的dom节点作为参数创建实例
```
var tab =  new Tab(document.quearySelector('.tab'))
```
需要把用于绑定点击事件控制切换的按钮class设置为`tab-button`  
同时用于tab切换的区域class设置为.tab  
且容器内button和tab的数量需要保存一致  
```
    <div class="tab-container">
        <div class="nav">
            <div class="tab-button">TBA1</div>
            <div class="tab-button">TBA2</div>
            <div class="tab-button">TBA3</div>
        </div>
        <div class="tab">1</div>
        <div class="tab" >2</div>
        <div class="tab" >3</div>
    </div>
```

