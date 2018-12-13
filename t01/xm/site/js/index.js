document.addEventListener('DOMContentLoaded',()=>{
    var brando = document.querySelector('.brando');
    var brandi = brando.querySelectorAll('.brandi');
    // 遍历brandi，并绑定事件
    for(let i=0;i<brandi.length;i++){
    	// 鼠标移入
    	brandi[i].onmouseenter = function(){
    		// 获取文本所在元素
    		var txt = this.children[1];
    		clearInterval(this.timer);
    		// 不断改变txt的top值，直到0
    		this.timer = setInterval(()=>{
    			var top = txt.offsetTop;
    			// 计算速度
    			// 向上取整，使速度至少为1
    			var speed = Math.ceil(top/10);//0.5
    			if(top<=1){
    				clearInterval(this.timer);
    				top = speed;
    			}
    			txt.style.top = top - speed + 'px';
    		},50);
    	}
    	//鼠标移出
    	brandi[i].onmouseleave = function(){
    		// 获取文本所在元素
    		var txt = this.children[1];
    		clearInterval(this.timer);
    		// 不断改变txt的top值，直到0
    		this.timer = setInterval(()=>{
    			var top = txt.offsetTop;
    			// 计算速度
    			// 向上取整，使速度至少为1
    			var speed = Math.ceil((160-top)/10);//0.5
    			if(top >= 160){
    				clearInterval(this.timer);
    				top = 160 - speed;
    			}
    			txt.style.top = top + speed + 'px';
    		},50);
    	}
    }
});
