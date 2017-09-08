$(function(){
	var prize = getClass("div","prize"),   //显示奖品
	    begin = getClass("label","begin"), //开始按钮
	    end = getClass("label","end"),     //停止按钮
	    str   = ['iPhone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
	    flag = 0,
	    time = null;  //定时器
	//鼠标事件
	begin.onclick = function(){
		clearInterval(time);
    	$(this).addClass("active");
    	time = setInterval(function(){
    		var index = Math.floor(Math.random()*str.length);
    		prize.innerText = str[index];
    	},100); 
    	flag = 1;
    };
    end.onclick = function(){
    	clearInterval(time);
    	$(begin).removeClass("active");	
    	flag = 0;
    };
	
	//键盘事件
	addEvent(document,"keyup",function(e){
		e = getEven(e);
		if(e.keyCode === 13){
			if(flag){
				$(begin).removeClass("active");	
				flag = 0;
				clearInterval(time);
			}else{
				
				$(begin).addClass("active");	
				flag = 1;
				time = setInterval(function(){
					var index = Math.floor(Math.random()*str.length);
    				prize.innerText = str[index];
    			},100) 
			}		
		}
	})
});
