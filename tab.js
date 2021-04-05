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
var tab1 =  new Tab(document.querySelectorAll('.tab-container')[0]);
tab1.init();
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
tab2.init();