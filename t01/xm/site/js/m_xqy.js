window.onload = function() {
	var txt = document.getElementById('txt');
	var jia = document.getElementById('jia');
	var jian = document.getElementById('jian');
	var num1 = document.getElementById("num1");
	//商品数量
	jia.onclick = function() {
		var _txt = txt.value;
		_txt++;
		txt.value = _txt;
		num1.innerHTML = goods.oPrice+" py6.x" + txt.value + "=" + parseInt(txt.value * goods.oPrice * 100) / 100 + "py6.";
	}
	jian.onclick = function() {
		var _txt = txt.value;
		if(_txt > 0) {
			_txt--;
			txt.value = _txt;
		} else if(_txt <= 0) {
			_txt = 0;
			txt.value = _txt;
		}
		num1.innerHTML = goods.oPrice+" py6.x" + txt.value + "=" + parseInt(txt.value * goods.oPrice * 100) / 100 + "py6.";
	}
	



	//	M用户评论,验证码,过滤敏感词
	var code = document.getElementById("m_code");
	var m_getCodeBtn = document.getElementById("m_getCodeBtn");
	var m_submitBtn = document.getElementById("m_submitBtn");
	var m_username=document.getElementById("m_username");
	var m_pinlun=document.getElementById("m_pinlun");
	var m_wz=document.getElementById("m_wz");
	var randomMa;
	function getMa(){
	randomMa = ""+ parseInt(Math.random()*10) +  parseInt(Math.random()*10) +parseInt(Math.random()*10) + parseInt(Math.random()*10);
	m_getCodeBtn.value = randomMa;
	}
	m_getCodeBtn.onclick = getMa;
	var m_p3=document.getElementById("m_p3");
	var arr=[];
	var brr=[];
	m_submitBtn.onclick = function(){
		var _m_code = m_code.value;
	    if(_m_code == randomMa){
	    	var _m_username=m_username.value;
	        if(_m_username!=""){
//	        	brr.unshift(_m_username);
	        	if(brr.length>3){
						brr.pop();
					}
	        	var _m_pinlun=m_pinlun.value;
	        	if(_m_pinlun!=""){
//					arr.unshift(_m_pinlun);
					if(arr.length>3){
						arr.pop();
					}
           			var minarr = "辣鸡,傻逼,早泄,草,bitch,狗日的,fuck,垃圾，智障，".split(",");
            		minarr.forEach(function(item){
                	var reg = new RegExp(item,"gi");
                	_m_pinlun = _m_pinlun.replace(reg,"可爱");
					_m_username=_m_username.replace(reg,"可爱");
            		})
            		arr.unshift(_m_pinlun);
           			brr.unshift(_m_username);
					render();
	        		alert("评论成功");
	        		m_pinlun.value="";
	        		m_username.value="";
	        		m_code.value="";
	        		getMa();
	        	}else{
	        		alert("内容为空");
	        	}
	        }else{
	        	alert("用户名为空");
	        }
	    }else{
	         alert("您的验证码有误");
	        getMa();
	    }
	}
//	M渲染到评论上
	function render(){
		var str='';
		for(i=0;i<arr.length;i++){
			str+='<li>'+
					'<div class="m_zuo"><span class="m_user">用户：'+brr[i]+'</span></div>'+
					'<div class="m_you"><span id="m_wz">'+arr[i]+'</span></div>'+
				'</li>';
		}
		m_p3.innerHTML=str;
	}
	




	

    // 获取列表页参数信息，并设置详情页
	var params = decodeURI(location.search.slice(1));
	var sp = document.getElementById("sp");
	var goods = {};
	var paramsArr = params.split("&");
    paramsArr.forEach(function(item){
        var arr = item.split("=");
        goods[arr[0]] = arr[1];
    })
	sp.src = goods.imgurl;
	sp.setAttribute("data-id",goods.id);
	var addCart = document.getElementById("addCart");

	// 获取cookie
	var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
    }
    //console.log(goodsarr);

	//点击添加购物车
	addCart.onmousedown = function(){
		addCart.style.opacity = 0.8;
	}
	addCart.onmouseup = function(){
		addCart.style.opacity = 1;
	}
	addCart.onclick = function(){
		var i;
        var res = goodsarr.some(function(item,idx){
            i = idx;
            return item.id == goods.id;
        });
        if(res){
        	goodsarr[i].qty += parseInt(txt.value);
        	goodsarr[i].allprice = parseInt(goodsarr[i].qty * goods.oPrice * 100) / 100;
        }
        else{
			goods.qty = parseInt(txt.value);
			goods.allprice = parseInt(txt.value * goods.oPrice * 100) / 100;
			goodsarr.push(goods);
        }

        // var d = new Date();
        Cookie.setCookie("goodslist",JSON.stringify(goodsarr),"","/");
		getCarLi();



        //飞入购物车
        var links_l = document.querySelector(".links_l");
        var currentImg = links_l.children[0];
        var cloneImg = currentImg.cloneNode();
        cloneImg.classList.add('clone-img');
        cloneImg.style.left = currentImg.offsetLeft + 'px';
        cloneImg.style.top = currentImg.offsetTop + 'px';
        document.body.appendChild(cloneImg);
        animation(cloneImg,{top:10,left:parseInt(window.innerWidth*0.65),width:0,height:0,opacity:0.7},30,function(){
            document.body.removeChild(cloneImg);
        });


	}
	

        console.log(window.innerWidth);

	// 打印价格
	num1.innerHTML = goods.oPrice+" py6.x" + txt.value + "=" + parseInt(txt.value * goods.oPrice * 100) / 100 + "py6.";
	








	//头部购物车
	function getCarLi(){
        var ulHt = document.getElementsByClassName("h_t_r_2")[0];
        var cartli = document.getElementById("CartLi");
        var Subtotal = 0;
        var allqty = 0;
        var ulres = goodsarr.map(function(item){
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


    // 列表切换
    var newArrivals_a1=document.querySelector(".newArrivals_a1");
    var ulbox2 = newArrivals_a1.children[0];
    var left1=document.querySelector("#left1");
    var right1=document.querySelector("#right1");
    // var firstImg = ulbox2.children[0].children[0];
    var cloneLi1 = ulbox2.children[0].cloneNode(true);
    ulbox2.appendChild(cloneLi1);
    var len1 = ulbox2.children.length;
    var idx1 = 0;
    // 1.newArrivals_a呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
    //  * 必须等待第一张图片加载完成后，再获取宽度
   

        ulbox2.style.width = 400 * 5 + 'px';
    

    right1.onclick=function(){
        idx1++;
        showPic1();
    }
    left1.onclick=function(){  
        idx1--;
        showPic1();
    }

    function showPic1(){
        if(idx1 == len1){
            ulbox2.style.left = 0;
            idx1 = 1;
        }
        if(idx1==-1){
            ulbox2.style.left=-400 *(3) +"px";
            idx1=len1-2;
        }

        animation(ulbox2,{left:-400 *idx1},30);
    }

    function fn(liid,bg){
            var box = document.getElementById("sp");
            var obj = document.getElementById(liid);

            obj.onmouseover = function(){
                box.src = bg;
            }

        }

        fn("li01","../images/m_r_b_bag1.png");
        fn("li02","../images/m_r_b_bag2.png");
        fn("li03","../images/m_r_b_bag3.png");
        fn("li04","../images/m_r_b_bag4.png");
        fn("li05","../images/m_r_b_bag5.png");  
        fn("li06","../images/m_r_b_bag6.png"); 
        fn("li07","../images/m_r_b_bag7.png"); 
        fn("li08","../images/m_r_b_bag8.png"); 

}