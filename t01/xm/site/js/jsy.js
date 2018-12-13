window.onload = function(){ 
    // 吸顶
    var nav = document.getElementById("nav");
    var js = document.getElementById("js");
            window.onscroll = function(){
                if(window.scrollY > 0){
                    nav.style.position = "fixed";
                    nav.style.background = "white";
                    nav.style.top = "0";
                }else{
                    nav.style.position = "static";
                }
            }

    // nav_r_t
    
    var arr = Cookie.getCookie("goodslist") || [];
        if(typeof arr == "string"){
            arr = JSON.parse(arr);
        }
        console.log(arr);
   
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        var j = arr[i].oPrice*arr[i].qty;
        sum = sum+j; 
    }
    // console.log(sum); 
    render();
    render2();
    function render(){
         nav.innerHTML = '<p><span>Subtotal:</span><span>'+sum+'</span></p>'+
                    '<p><span>Shipping Fees:</span><span>+$10</span></p>'+
                    '<p><span>Shipping Insurance:</span><span>+$1.99</span></p>'+
                    '<p><span>Your Order Total</span><span>'+parseInt(sum+10)+'</span></p>'+
                    '<p><span>Coupon:</span><span>-$10</span></p>'+
                    '<p><span>Grand Total:</span><span>USD&nbsp;'+parseInt(sum+10)+'</span></p>';
    }
    

    function render2(){
        js.innerHTML = arr.map(function(item){
            return  '<li data-id="' + item.id + '">'+
                        '<img src="'+item.imgurl+'" />'+
                        '<p>'+item.name+'</p>'+
                        '<p><span>Color:</span><span>BLACK</span></p>'+
                        '<p><span>Size:</span><span>Default</span></p>'+
                        '<p><span>Qty:</span><span>'+item.qty+'</span></p>'+
                        '<p><span>Price:</span><span>'+item.oPrice+'</span></p>'+
                    '</li>';
        }).join("");

    
    }


    //头部购物车
    function getCarLi(){
        var ulHt = document.getElementsByClassName("h_t_r_2")[0];
        var cartli = document.getElementById("CartLi");
        var Subtotal = 0;
        var allqty = 0;
        var ulres = arr.map(function(item){
            Subtotal += item.oPrice*item.qty;
            allqty += item.qty;
            return '<li><a>'+
                    '<span style="background:url('+item.imgurl+')no-repeat;background-size:cover;"></span>'+item.name+'</a>'+
                    '<i>$'+item.oPrice+' × '+item.qty+'</i>'+
                    '</li>'
        }).join("");
        ulres = ulres + '<p>Subtotal:<span>'+Subtotal+'</span></p>'+
        '<p><a href="../html/m_total.html"><input type="button" name="" id="" value="Checkout" /></a></p>';
        ulHt.innerHTML = ulres;

        cartli.children[0].innerHTML = '<span></span>'+allqty+' Items <span>$'+Subtotal+'</span> <span></span>';
    }
    getCarLi();
	
	
//	划过提示信息m
	var m_tanchuang = document.getElementsByClassName("m_tanchuang")[0];
    var m_tishi = document.getElementsByClassName("m_tishi")[0];
    var links = m_tishi.children;
    for(var i=0;i<links.length;i++){
        links[i].onmouseover = function(e){
            m_tanchuang.style.display = "block";
            this.bak = this.children[0].title;
            this.children[0].title = "";
            m_tanchuang.innerHTML = this.bak;
        }
        links[i].onmousemove = function(e){
            m_tanchuang.style.left = e.pageX - 10 + 'px';
            m_tanchuang.style.top = e.pageY -80 + 'px';
        }
        links[i].onmouseout = function(e){
            this.children[0].title = this.bak;
        	m_tanchuang.style.display = "none";
        }
    }
    
    
    var m_tanchuang2 = document.getElementsByClassName("m_tanchuang2")[0];
    var m_tishi2 = document.getElementsByClassName("m_tishi2")[0];
    var links = m_tishi2.children;
    for(var j=0;j<links.length;j++){
        links[j].onmouseover = function(e){
            m_tanchuang2.style.display = "block";
            this.bak = this.children[0].title;
            this.children[0].title = "";
            m_tanchuang2.innerHTML = this.bak;
        }
        links[j].onmousemove = function(e){
            m_tanchuang2.style.left = e.pageX - 10 + 'px';
            m_tanchuang2.style.top = e.pageY -80 + 'px';
        }
        links[j].onmouseout = function(e){
            this.children[0].title = this.bak;
        	m_tanchuang2.style.display = "none";
        }
    }
    
    var m_btn2=document.getElementById("m_btn2");
    m_btn2.onclick=function(){
    	if(sum<1){
    		alert("请去挑选商品");
    		location.href="../html/List.html";
    	}else{
    		alert("结算成功");
    	}
    }
}
