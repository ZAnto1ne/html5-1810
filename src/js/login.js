document.addEventListener('DOMContentLoaded',()=>{
    jQuery(function($){
        //窗口切换
        var $lg = $("#lg");
        var $rg = $("#rg");
        var $lgw = $(".loginw");
        var $rgw = $(".regw");
        $lg.on("click",function(){
            $lgw.css("display","block");
            $rgw.css("display","none");
            $rg.css("background","#F7F7F9");
            $lg.css("background","white");
            $rg.css("color","black");
        })
        $rg.on("click",function(){
            $lgw.css("display","none");
            $rgw.css("display","block");
            $lg.css("background","#F7F7F9");
            $rg.css("background","white");
            $lg.css("color","black");
        })
    })

    
    var username = document.getElementById("username");
    var passwd = document.getElementById("passwd");
    var registerBtn = document.getElementById("registerBtn");
    var login = document.getElementById("login");
    var tips = document.querySelector(".tips");
    var status = [200,304];


    //用户名判断
    username.onblur = function(){
                    
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                tips.innerHTML = xhr.responseText;
            }
        }
        xhr.open("get","../api/register.php?uname="+username.value,true);
        xhr.send(null);
    }
    //注册验证
    registerBtn.onclick = function(){
        var _username = username.value;
        if(_username.length == 0){
            console.log(_username);
            alert("账号不能为空");
        }else if(passwd.value.length == 0){
            alert("密码不能为空");
        }else{
                var coder = document.getElementById("codeMa");
                var getCodeBtn = document.getElementById("getCodeBtn");
                var _coder = coder.value;
                var _getCodeBtnr = getCodeBtn.value;
                if(_coder == _getCodeBtnr){
                    // alert("注册成功");
                    var registerBtn = true;
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                            alert(xhr.responseText);
                            window.location.href="../index.html";
                        }
                    }
                    xhr.open("get",`../api/reg.php?username=${username.value}&passwd=${passwd.value}&registerBtn=${registerBtn}`,true);
                    xhr.send(null);
                    var _name = username.value;
    
                    var d = new Date();
                    d.setDate(d.getDate()+7);
                    Cookie.setCookie("uname",_name,d,"/");
                }else if(_coder.length == 0){
                    alert("请输入验证码");
                }else{
                    alert("验证码错误");
                    coder.value = '';
                    getMa();
                    }  
            }
        }
        getCodeBtn.onclick = getMa;
        function getMa(){
            var randomMa = "" + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
            getCodeBtn.value = randomMa;
        }
    
    //登录验证
    var getCodeBtnr = document.getElementById("getCode");
    var uname = document.getElementById("uname");
    var pwd = document.getElementById("pwd");
    var code = document.getElementById("code");
    login.onclick = function(){
    // var login = true;
    
    
    var _code = code.value;
    var _getCodeBtnr = getCodeBtnr.value;
    if(_code == _getCodeBtnr){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                alert(xhr.responseText);
                if(xhr.responseText=="登录成功"){
                    window.location.href="../index.html";
                }
            }
        }
        xhr.open("get",`../api/login.php?uname=${uname.value}&pwd=${pwd.value}`,true);
        xhr.send(null);
        
        var _name = uname.value;
    
        var d = new Date();
        d.setDate(d.getDate()+7);
        Cookie.setCookie("uname",_name,d,"/");


    }else if(_code.length == 0){
        alert("请输入验证码");
    }else{
        alert("验证码错误");
        code.value = '';
        getMar();
        }
    }

    getCodeBtnr.onclick = getMar;
    function getMar(){
        var randomMa = "" + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10) + parseInt(Math.random()*10);
        getCodeBtnr.value = randomMa;
    }  

})