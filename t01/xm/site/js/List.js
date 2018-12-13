document.addEventListener("DOMContentLoaded", function(){

	var ml_goods = document.getElementById("ml_goods");
	var mr_goods = document.getElementById("mr_goods");
	var cc_li = mr_goods.getElementsByTagName('li');
	
    
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
           var res = JSON.parse(xhr.responseText);
           render(res);
        }
    }
    xhr.open("get","../api/render.php",true);
    xhr.send(null);



	function render(res) {
		mr_goods.innerHTML = res.map(function(item,idx) {
			return  '<li data-id="' + item.id + '">' +
    				'<img src="' + item.imgurl + '" class="_goods"/>' +
    				'<p><input type="checkbox"/>' + item.goodsname + '</p>' +
    				'<p><span>' + item.lprice + '</span>&nbsp;<span>USD' + item.oPrice + '</span></p>' +
    				'<p>Save USD ' + item.usd + '</p>' +
    				'<p><a href="#" class="a_goods">wholesale</a>▶<span>Heat : ' + item.heat + '</span></p>' +
    				'</li>';
		}).join("");
        var _goods = document.getElementsByClassName("_goods");
        for(var i = 0; i < _goods.length; i++) {
            _goods[i].idx = i;
            _goods[i].onclick = function() {
                var goods = res[this.idx];
                location.href = "m_xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oPrice=" + goods.oPrice + "&usd=" + goods.usd + "&heat=" + goods.heat;
            }
        }

        var a_goods = document.getElementsByClassName("a_goods");
        for(var i = 0; i < a_goods.length; i++) {
            a_goods[i].idx = i;
            a_goods[i].onclick = function() {
                var goods = res[this.idx];
                location.href = "m_xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oPrice=" + goods.oPrice + "&usd=" + goods.usd + "&heat=" + goods.heat;
            }
        }
	}



    var xhrz = new XMLHttpRequest();
        var status = [200,304];
        xhrz.onreadystatechange = function(){
            if(xhrz.readyState == 4 && status.indexOf(xhrz.status) != -1){
               var res1 = JSON.parse(xhrz.responseText);
               render2(res1);
            }
        }
        xhrz.open("get","../api/render2.php",true);
        xhrz.send(null);

    

	function render2(res1) {
		ml_goods.innerHTML = res1.map(function(item,idx){
			return '<li idx="' + item.id + '" >' +
    				'<img src="' + item.imgurl + '" class="l_goods"/>' +
    			 	'<p>' + item.goodsname + '</p>' +
    				'<p>List Price：<span>' + item.lprice + '</span></p>' +
    				'<p>Our Price：<span>' + item.oPrice + '</span></p>' +
    				'<p>Save USD ' + item.usd + '</p></li>';
		}).join("");

        var l_goods = document.getElementsByClassName("l_goods");
        for(var i = 0; i < l_goods.length; i++) {
            l_goods[i].idx = i;
            l_goods[i].onclick = function() {
                var goods = res1[this.idx];
                location.href = "m_xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodsname + "&lprice=" + goods.lprice + "&oPrice=" + goods.oPrice + "&usd=" + goods.usd + "&heat=" + goods.heat;
            }
        }
	}
	
	



	// 下拉菜单
    var main_tblb = document.getElementById('main_tblb');
    var c_ul = main_tblb.getElementsByTagName('ul');
    var c_h3 = main_tblb.getElementsByTagName('h3');
    for (var i = 0; i < c_h3.length; i++) {
        c_h3[i].idx = i;
        c_h3[i].isture = true;
        c_h3[i].onclick = function() {
            if (this.isture) {
                this.children[0].className = 'jia';
                animation(c_ul[this.idx],{height:0});
            } else {
                this.children[0].className = 'jian';
                if(c_ul[this.idx]==c_ul[0]){
                    animation(c_ul[this.idx],{height:24});
                    }
                else if(c_ul[this.idx]==c_ul[1]){
                    animation(c_ul[this.idx],{height:24*8});
                }else if(c_ul[this.idx]==c_ul[2]){
                    animation(c_ul[this.idx],{height:24*9});
                }
                
            }
            this.isture = !this.isture;
        }
    }

    // 点击按钮排序
    var Heat = document.getElementById('Heat');
    var Price = document.getElementById('Price');
    Heat.onclick = function() {
        heat_paixu();
    }
    Price.onclick = function() {
        price_paixu();
    }
    // 价格排序
    function price_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Price = cc_li[i];
            arr.push(Price);
        }
        arr.sort(function(a, b) {

            // console.log(((a.childNodes[2]).childNodes[2].innerHTML).slice(3,8));
            var num1 = ((a.childNodes[2]).childNodes[2].innerHTML).slice(3, 8);
            var num2 = (b.childNodes[2].childNodes[2].innerHTML).slice(3, 8);
            return num2 - num1;
        })
        for (var i = 0; i < arr.length; i++) {
            mr_goods.appendChild(arr[i]); //替换
        }
    }
    // 人气排序
    function heat_paixu() {
        var arr = [];
        for (var i = 0; i < cc_li.length; i++) {
            var Heat = cc_li[i];
            arr.push(Heat);
        }
        arr.sort(function(a, b) {
            var num1 = ((a.childNodes[4]).childNodes[2].innerHTML).slice(7, 11);
            var num2 = (b.childNodes[4].childNodes[2].innerHTML).slice(7, 11);
            return num2 - num1;
        })
        for (var i = 0; i < arr.length; i++) {
            mr_goods.appendChild(arr[i]); //替换
        }
    }

	// 吸顶
	var headerggg = document.getElementById('headerggg');
	window.onscroll = function() {
		if(window.scrollY > 0) {
			headerggg.className = "header1";
		} else {
			headerggg.className = "";
		}
	}

	// 滚到顶部
	var xgg = document.getElementById("xgg"); // 
	xgg.onclick = function() {
		clearInterval(xgg.timer);
		xgg.timer = setInterval(function() {
			var top = window.scrollY;
			if(top <= 0) {
				clearInterval(xgg.timer);
			}
			window.scrollBy(0, -70);
		}, 30)
	}




	// 获取cookie
	var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
    }
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

})