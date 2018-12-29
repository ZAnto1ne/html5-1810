document.addEventListener('DOMContentLoaded',()=>{
    jQuery(function($){
        // 二级菜单
        var $nav = $('.nav1');
        var $_nav = $(".nav1 li");
        var $fz = $(".nav1 li div");

        $_nav.on('mouseover',function(){
            $fz.css("display","block");
        }).on('mouseout',function(){
            $fz.css("display","none");
        })

        //获取用户名显示、点击退出登录删除cookie
        a = Cookie.getCookie("uname");
            var name = a;
        // console.log(a);
        c_start=document.cookie.indexOf("uname=");
        if(c_start == -1){
            $("#unm").show();
            $("#logined").hide();
            $("#loginout").hide();
        }
        else{
            $("#unm").hide();
            $("#loginout").css("display","inline-block");
            $("#logined").append(value="欢迎你，"+a);
            $("#logined").css("display","inline-block");
            $("#loginout").on("click",function(){
                var d = new Date();
                d.setDate(d.getDate()-1);
                Cookie.setCookie("uname","",d,"/");
            })
        }

    



        //获取列表页参数，并设置详情页
        var params = decodeURI(location.search.slice(1));
        var sp = document.getElementById("sp");
        var dsp = document.getElementById("dsp");
        var li01 = document.getElementById("li01");
        var goods = {};
        var paramsArr = params.split("&");
        paramsArr.forEach(function(item){
            var arr = item.split("=");
            goods[arr[0]] = arr[1];
        })
        // console.log(goods.name);
        $("#name1").html(goods.name);
        $("#lprice").html("￥"+goods.price);
        $("#oprice").html("￥"+Math.ceil(goods.price*1.8));
        sp.src = goods.imgurl;
        dsp.src = goods.imgurl;
        li01.src = goods.imgurl;
        sp.setAttribute("data-id",goods.id);







        // 吸顶
        var xd1 = document.getElementById("xd1");
        var xd2 = document.getElementById("xd2");
        window.onscroll = function(){
            if(window.scrollY > 0){
                xd1.className = "fixed";
                xd2.classList.add("fixed2");
            }else{
                xd1.className = "";
                xd2.classList.remove("fixed2");
            }
        }

        //返回顶部
        var text5 = document.getElementById("text5"); // 
            text5.onclick = function() {
                clearInterval(text5.timer);
                text5.timer = setInterval(function() {
                    var top = window.scrollY;
                    if(top <= 0) {
                        clearInterval(text5.timer);
                    }
                    window.scrollBy(0, -70);
                }, 30)
            }



        //滑动切换图片
        function fn(liid,bg){
                var box = document.getElementById("sp");
                var box1 = document.getElementById("dsp");
                var obj = document.getElementById(liid);

                obj.onmouseover = function(){
                    box.src = bg;
                    box1.src = bg;
                }

            }

            fn("li01",goods.imgurl);
            fn("li02","../images/list/t2.png");
            fn("li03","../images/list/t3.png");
            fn("li04","../images/list/t4.png");
            fn("li05","../images/list/t5.png");  



    //放大镜
    //拿到整个大的div
    var pic_div = document.getElementById('full-pic');
    //拿到div中的图片
    var normal_pic = pic_div.getElementsByTagName('img')[0];
    //拿到显示当前图片位置的span
    var span_move = document.getElementById('pic-span');
    //拿到右边放置放大图片的div
    var big_div = document.getElementById('big-pic');
    //拿到右侧放大的图片本身
    var pic_move = big_div.getElementsByTagName('img')[0];


    //当鼠标在最外层div中滑动的时候触发事件，因为要获取当前的鼠标位置所以要拿到事件源evt
    pic_div.onmousemove = function (evt) {
    // 获取事件
    var e = evt || window.event;
     // 获取大图和小图之间的倍数
    var bigSize = pic_move.offsetHeight;
    var littleSize = normal_pic.offsetHeight;
    var n = bigSize / littleSize;
     //获取pic对于页面的绝对位置
    var pic_x = normal_pic.getBoundingClientRect().left;
    var pic_y = normal_pic.getBoundingClientRect().top + document.documentElement.scrollTop;
    // 获取鼠标相对full-pic的位置
    var mouse_x = e.pageX - pic_x;
    var mouse_y = e.pageY - pic_y;
    //将两个div的设置为显示
    big_div.style.display = 'block';
    span_move.style.display = 'block';
    span_move.style.width = normal_pic.offsetWidth / 2 + 'px';
    span_move.style.height = normal_pic.offsetWidth / 2 + 'px';
        //设置边际以及图片移动的算法
    if (mouse_x <= span_move.offsetWidth / 2) {
        //在最左侧不发生移动的情况
        pic_move.style.left = '0px';//右边大图位置为0px
        span_move.style.left = normal_pic.offsetLeft + 'px';//span始终和图片左端对齐
    } 
    else if (mouse_x > span_move.offsetWidth/ 2 && mouse_x < normal_pic.offsetWidth - span_move.offsetWidth / 2) {
    var tempX = mouse_x - span_move.offsetWidth/ 2;
    pic_move.style.left = -n * (tempX) + 'px';//控制右侧大图的移动
    span_move.style.left = tempX + normal_pic.offsetLeft + 'px';//控制span位置的移动
    }
    else {
            //当移动到最右端的时候，停止span的移动，大图也移动到相应的最右端，此时可以通过一个n来控制大图的移动了
            pic_move.style.left = -n * (normal_pic.offsetWidth - span_move.offsetWidth) + 'px';
            span_move.style.left = normal_pic.offsetLeft + normal_pic.offsetWidth - span_move.offsetWidth + 'px';
        }
    if (mouse_y <= span_move.offsetWidth / 2) {
            pic_move.style.top = '0px';
            span_move.style.top = '0px';
        } else if (mouse_y > span_move.offsetHeight / 2 && mouse_y < normal_pic.offsetHeight - span_move.offsetHeight /2) {
            var tempY = mouse_y - span_move.offsetHeight / 2;
            pic_move.style.top = - n * tempY + 'px';
            span_move.style.top = tempY + 'px';
        } else {
            pic_move.style.top = -(n - 1) * normal_pic.offsetHeight + 'px';
            span_move.style.top = normal_pic.offsetHeight - span_move.offsetHeight + 'px';
        }
     
     
    }
     
     
    pic_div.onmouseout = function () {
        span_move.style.display = 'none';
        big_div.style.display = 'none';
    }

    //点击按钮加边框
    var x=0;
    $(".ma3_tr input").on("click",function(){
        
        x++;
        if(x%2==0){
            $(this).css("border","");
        }else{
            $(this).css("border","3px solid #FF6701");
        }
        
    })

    //商品数量
    var txt = document.getElementById('txt');
    var jia = document.getElementById('jia');
    var jian = document.getElementById('jian');
    jia.onclick = function() {
        var _txt = txt.value;
        _txt++;
        txt.value = _txt;
    }
    jian.onclick = function() {
        var _txt = txt.value;
        if(_txt > 1) {
            _txt--;
            txt.value = _txt;
        } else if(_txt <= 1) {
            _txt = 1;
            txt.value = _txt;
        }
    }

    //评论区功能
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
//              brr.unshift(_m_username);
                if(brr.length>3){
                        brr.pop();
                    }
                var _m_pinlun=m_pinlun.value;
                if(_m_pinlun!=""){
//                  arr.unshift(_m_pinlun);
                    if(arr.length>3){
                        arr.pop();
                    }
                    var minarr = "辣鸡,傻逼,草,bitch,狗日的,fuck,垃圾，智障，".split(",");
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
    //  M渲染到评论上
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


        //点击切换详情介绍与评论
    $("#xqjs").on("click",function(){
        $("#xqjs").css("background","#EA7514");
        $("#xqjs").css("color","white");
        $("#bbq").css("background","#EFEFEF");
        $("#bbq").css("color","black");
        $("#ngzltz").css("display","block");
        $("#gbbd").css("display","none");
    })
    $("#bbq").on("click",function(){
        $("#bbq").css("background","#EA7514");
        $("#bbq").css("color","white");
        $("#xqjs").css("background","#EFEFEF");
        $("#xqjs").css("color","black");
        $("#gbbd").css("display","block");
        $("#ngzltz").css("display","none");
    })

    // 获取cookie
    var goodsarr = Cookie.getCookie("goodslist") || [];
        if(typeof goodsarr == "string"){
        goodsarr = JSON.parse(goodsarr);
    }
    //点击添加购物车
    var addBtn = document.getElementById("addBtn");
    var buyBtn = document.getElementById("buyBtn");
    
    addBtn.onmousedown = function(){
        addBtn.style.opacity = 0.8;
    }
    addBtn.onmouseup = function(){
        addBtn.style.opacity = 1;
    }
    buyBtn.onmousedown = function(){
        buyBtn.style.opacity = 0.8;
    }
    buyBtn.onmouseup = function(){
        buyBtn.style.opacity = 1;
    }
    


    var status = [200,304];
    var id = goods.id;
    var uname = goods.name;
    var imgurl = goods.imgurl;
    
    
    var price = goods.price;
    var qty = document.getElementById("txt");

    var buyBtn = document.getElementById("buyBtn");
    var allqty = qty.value;
    var allprice = allqty*price;
    buyBtn.onclick = function(){
        window.location.href="../html/gwc.html";
    }
    

    addBtn.onclick = function(){
        // console.log(name);
        var allqty = qty.value;
        var allprice = allqty*price;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                var res = JSON.parse(xhr.responseText);
                // console.log(res);
                // console.log(res);
                getCarLi(res);
                // // window.location.href="../Index.html";
            }
        }
        // 
        // console.log(allprice);
        // console.log(a);
        xhr.open("get",`../api/xqycar.php?id=${id}&uname=${uname}&imgurl=${imgurl}&name=${name}&price=${price}&allqty=${allqty}&allprice=${allprice}`,true);
        xhr.send(null);


        //头部购物车
    function getCarLi(res){
        var ulHt = document.getElementsByClassName("h_t_r_2")[0];
        var cartli = document.getElementById("CartLi");
        var Subtotal = 0;
        var allqty = 0;
        
            
        var ulres = res.map(function(item){
            Subtotal += item.price*item.qty;

            allqty += item.qty*1;

            return '<li class="nn" data-id="'+item.idx+'"><a>'+
                    '<span style="background:url('+item.imgurl+')no-repeat;background-size:cover;"></span>'+item.uname+'</a>'+
                    '<i>￥'+item.price+' × '+item.qty+'</i>'+
                    '</li>'
        }).join("");
    
        ulres = ulres + '<p>总价:<span>'+Subtotal+'</span></p>'+
                        '<p><a href="../html/gwc.html"><input type="button" name="" id="qs" value="结算" /></a></p>';
        ulHt.innerHTML = ulres;

        cartli.children[0].innerHTML = '<span>购物袋</span>'+allqty+' 件 <span>￥'+Subtotal+'</span> <span></span>';

    }
    
    
    }

  
    
    $("#CartLi").on("mouseover",function(){
        $(".h_t_r_2").css("display","block");
    })
    $("#CartLi").on("mouseout",function(){
        $(".h_t_r_2").css("display","");
    })



    })
})