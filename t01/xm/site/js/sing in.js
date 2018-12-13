document.addEventListener("DOMContentLoaded", function(){
	

function SingIn(){
	var name = document.getElementById("Name");
	var pass = document.getElementById("Password");	
	if(name.value.length == 0){
		alert("账号不能为空");
		return;
	}else if(pass.value.length == 0){
		alert("密码不能为空");
	}else {
		judge();
	}
}


function getMa(){
	var randomMa = "" + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
	getCodeBtn.value = randomMa;
}

function judge(){
	// var code = document.getElementById("Code");
	// var getCodeBtn = document.getElementById("getCodeBtn");
	// var _code = code.value;
	// var _getCodeBtn = getCodeBtn.value;
	// if(_code == _getCodeBtn){
	// 	alert("登陆成功");
	// 	location.href = "../Index.html";
	// }else if(_code.length == 0){
	// 	alert("请输入验证码");
	// }else{
	// 	alert("验证码错误");
	// 	code.value = '';
	// 	getMa();
	// }
}


function SingInr(){
	// var Rname = document.getElementById("Rname");
	// var pwd = document.getElementById("Rpass1");
	// var Rpass2 = document.getElementById("Rpass2");	
	// if(Rname.value.length == 0){
	// 	alert("账号不能为空");
	// 	return;
	// }else if(pwd.value.length == 0){
	// 	alert("密码不能为空");
	// }else if(Rpass2.value.length == 0){
	// 	alert("请再次输入密码");
	// }else if(Rpass2.value.length != 0){
	// 	if(pwd.value != Rpass2.value){
	// 		alert("两次输入密码不一致，请再次输入密码");
	// 		Rpass2.value = '';	
	// 	}else{
	// 		var coder = document.getElementById("Coder");
	// 		var getCodeBtnr = document.getElementById("getCodeBtnr");
	// 		var _coder = coder.value;
	// 		var _getCodeBtnr = getCodeBtnr.value;
	// 		if(_coder == _getCodeBtnr){
	// 			alert("注册成功");
	// 		}else if(_coder.length == 0){
	// 			alert("请输入验证码");
	// 		}else{
	// 			alert("验证码错误");
	// 			coder.value = '';
				getMa();
	// 		}
	// 	}
	// }
}

function getMar(){
	var randomMa = "" + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
	getCodeBtnr.value = randomMa;
}


function Rightjudge(){
	// var coder = document.getElementById("Coder");
	// var getCodeBtnr = document.getElementById("getCodeBtnr");
	// var _coder = coder.value;
	// var _getCodeBtnr = getCodeBtnr.value;
	// if(_coder == _getCodeBtnr){
	// 	alert("登陆成功");
	// }else if(_coder.length == 0){
	// 	alert("请输入验证码");
	// }else{
	// 	alert("验证码错误");
	// 	coder.value = '';
	// 	getMa();
	// }
}
	sub.onclick = SingIn;
	reg.onclick = SingInr;
	getCodeBtn.onclick = getMa;
	getCodeBtnr.onclick = getMar;




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
