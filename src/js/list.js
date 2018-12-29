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

        $.ajax({
            type:"GET",
            url:"../api/xqycar.php",
            data:{
                name:a,
            },
            success:function(data){
                var jsonObj = JSON.parse(data)
                // console.log(jsonObj)
                getCarLi(jsonObj);
                function getCarLi(jsonObj){
                var ulHt = document.getElementsByClassName("h_t_r_2")[0];
                var cartli = document.getElementById("CartLi");
                var Subtotal = 0;
                var allqty = 0;
                
                    
                var ulres = jsonObj.map(function(item){
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

        });

    $("#CartLi").on("mouseover",function(){
        $(".h_t_r_2").css("display","block");
    })
    $("#CartLi").on("mouseout",function(){
        $(".h_t_r_2").css("display","");
    })

        //页面渲染
        
        var status = [200,304];
        var page = document.querySelector(".page");
        var lis = document.getElementById("lis");
        var qty = 16;
        var currentPage = 1;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
               var res = JSON.parse(xhr.responseText);
               // console.log(res);
               lis.innerHTML = res.data.map(function(item) {
                    return  '<li data-id="' + item.id + '">' +'<a>'+
                            '<img src="' + item.imgurl + '"class="_goods" />'  +'<div>'+ '<p>' +item.goodname + '</p>' +'<span>' + item.jies + '</span><br/>' +'<span>￥</span>'+
                            '<span>' + item.price + '</span><br/>' +
                            '<span>Heat : ' + item.rd + '</span>' +'</div>'+
                            '</a>'+'</li>';
                }).join("");
                
        var brr = res.data.map(function(item){
            return item.price;
        });


        var _goods = document.getElementsByClassName("_goods");
        for(var i = 0; i < _goods.length; i++) {
            _goods[i].idx = i;
            _goods[i].onclick = function() {
                var goods = res.data[this.idx];
                location.href = "xqy.html?id=" + goods.id + "&imgurl=" + goods.imgurl + "&name=" + goods.goodname + "&jies=" + goods.jies + "&price=" + goods.price +"&rd=" + goods.rd;
            }
        }

                var totalPage = Math.ceil(res.len/res.qty);
                page.innerHTML = "";
                for(var i=1;i<=totalPage;i++){
                    var span = document.createElement("span");
                    span.innerHTML = i;
                    if(i == res.currentPage){
                        span.classList.add("active");
                    }
                    page.appendChild(span);
                }
               // render(res);
            }
        }
        xhr.open("get","../api/list_render.php?qty="+qty+"&currentPage="+currentPage,true);
        xhr.send(null);
            

        //2.点击page，获取当前页码，再次发起请求
        page.onclick = function(e){
            if(e.target.tagName == "SPAN"){
                currentPage = e.target.innerHTML;
                xhr.open("get","../api/list_render.php?qty="+qty+"&currentPage="+currentPage,true);
                xhr.send(null);
            }
        }



        // 筛选列表选中
        $("#select1 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectA").remove();
            } else {
                var copyThisA = $(this).clone();
                var id = $(this).attr('data-id');

                if ($("#selectA").length > 0) {
                    $("#selectA a").html($(this).text());
                    $("#selectA input").attr('value',id);
                    
                } else {
                    $(".select-result dl").append(copyThisA.attr("id", "selectA"));
                    $("#selectA").append('<input type="hidden" id="type1" name="type1" value="'+id+'" />');
                    
                }

                
                // var c = $("#selectA a").text().trim();
                // console.log(c);
                // $.ajax({
                //  type: "POST",
                //  url: "../api/list_render1.php",
                //  data:   c,
                //  success: function(res1){
                //     lis.innerHTML="";
                //     // if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                //     var res1 = JSON.parse(xhr.responseText);
                //     console.log(res1);
                //     lis.innerHTML = res.map(function(item) {
                //         return  '<li data-id="' + item.id + '">' +'<a>'+
                //                 '<img src="' + item.imgurl + '" />'  +'<div>'+ '<p>' +item.goodname + '</p>' +'<span>' + item.jies + '</span><br/>' +'<span>￥</span>'+
                //                 '<span>' + item.price + '</span><br/>' +
                //                 '<span>Heat : ' + item.rd + '</span>' +'</div>'+
                //                 '</a>'+'</li>';
                //     }).join("");     
                

                     
                //         }
                     
                // });
                
            }

            $("#selectA").on("click", function () {
                $(this).remove();
                $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
            });
        });
        
        $("#select2 dd").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            if ($(this).hasClass("select-all")) {
                $("#selectB").remove();
            } else {
                var copyThisB = $(this).clone();
                var id = $(this).attr('data-id');
                if ($("#selectB").length > 0) {
                    $("#selectB a").html($(this).text());
                    $("#selectB input").attr('value',id);
                } else {
                    $(".select-result dl").append(copyThisB.attr("id", "selectB"));
                    $("#selectB").append('<input type="hidden" id="type2" name="type2" value="'+id+'" />');
                }
            }
            $("#selectB").on("click", function () {
                $(this).remove();
                $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
            });
        });
        
        
        
        $(".select dd").on("click", function () {
            if ($(".select-result dd").length > 1) {
                $(".select-no").hide();
            } else {
                $(".select-no").show();
            }
        });

        var $select1 = $("#select1 dd");
        var $select2 = $("#select2 dd");
        if($select1.siblings().hasClass('selected')&&$select2.siblings().hasClass('selected')){
            $(".select-no").show();
        }else{
            $(".select-no").hide();
        }
        


        //分页
        
        // var pageData=[];
        // for(var i=1;i<80;i++){
        //     var data="渲染部分";
        //     pageData.push(data);
        // }

        // var Count = pageData.length;//记录条数
        // var PageSize=40;//设置每页示数目
        // var PageCount=Math.ceil(Count/PageSize);//计算总页数
        // var currentPage =1;//当前页，默认为1。
        // //造个分页按钮
        // for(var i=1;i<=PageCount;i++){
        // var pageN='<a href="#" selectPage="'+i+'" >&nbsp;'+i+'&nbsp;</a>';
        // $('#page').append(pageN);
        // }
        // //显示默认页（第一页）
        // // $('#table').empty().append(head);
        // // for(i=(currentPage-1)*PageSize;i<PageSize*currentPage;i++){ 
        // //     $('#table').append(pageData[i]);
        // // }
        // // $('#table').append(end);
        
        // //显示选择页的内容
        // $('a').click(function(){
        //  var selectPage=$(this).attr('selectPage');
        //  $('#table').html('');
        //     // $('#table').append(head);
        //     for(i=(selectPage-1)*PageSize;i<PageSize*selectPage;i++){
        //         $('#table').append(pageData[i]);
        //     }
        //     // $('#table').append(end);
        // }); 

        
        
    


        // 点击按钮排序
        var Heat = document.getElementById('Heat');
        var def = document.getElementById('def');
        var Price = document.getElementById('Price');
        var cc_li = lis.getElementsByTagName('li');
        var x=0;
        var clickNum=0;

        def.onclick = function(){
            location.reload();
        }
        Heat.onclick=function(){
            clickNum++;
            if(clickNum%2==0){
                heat_paixu1();
            }else{
                heat_paixu();
            }
        }
        Price.onclick=function(){
            x++;
            if(x%2==0){
                price_paixu1();
            }else{
                price_paixu();
            }
        }
        // Heat.onclick = function() {
        //     heat_paixu();
        // }

        // $("#Price").on("click",function(){
        //     price_paixu();
        // }).on("click",function(){
        //     price_paixu1();
        // })

        // Price.onclick = function() {
        //     price_paixu();
        // }
        // 价格排序
        // 降序
        function price_paixu() {
            var arr = [];
            for (var i = 0; i < cc_li.length; i++) {
                var Price = cc_li[i];
                arr.push(Price);
            }
            arr.sort(function(a, b) {
                // console.log(a.childNodes[0].childNodes[1].childNodes[4]);
                
                var num1 = a.childNodes[0].childNodes[1].childNodes[4].innerHTML;
                var num2 = b.childNodes[0].childNodes[1].childNodes[4].innerHTML;
                return num2 - num1;
            })
            for (var i = 0; i < arr.length; i++) {
                lis.appendChild(arr[i]); //替换
            }
        }

        // 升序
        function price_paixu1() {
            var arr = [];
            for (var i = 0; i < cc_li.length; i++) {
                var Price = cc_li[i];
                arr.push(Price);
            }
            arr.sort(function(a, b) {
                // console.log(a.childNodes[0].childNodes[1].childNodes[4]);
                
                var num1 = a.childNodes[0].childNodes[1].childNodes[4].innerHTML;
                var num2 = b.childNodes[0].childNodes[1].childNodes[4].innerHTML;
                return num1 - num2;
            })
            for (var i = 0; i < arr.length; i++) {
                lis.appendChild(arr[i]); //替换
            }
        }
        // 人气排序
        // 降序
        function heat_paixu() {
            var arr = [];
            for (var i = 0; i < cc_li.length; i++) {
                var Heat = cc_li[i];
                arr.push(Heat);
            }
            arr.sort(function(a, b) {
                console.log(a.childNodes[0].childNodes[1].childNodes[6].innerHTML);
                var num1 = (a.childNodes[0].childNodes[1].childNodes[6].innerHTML).slice(7,10);
                var num2 = (b.childNodes[0].childNodes[1].childNodes[6].innerHTML).slice(7,10);
                return num2 - num1;
            })
            for (var i = 0; i < arr.length; i++) {
                lis.appendChild(arr[i]); //替换
            }
        }

        // 升序
        function heat_paixu1() {
            var arr = [];
            for (var i = 0; i < cc_li.length; i++) {
                var Heat = cc_li[i];
                arr.push(Heat);
            }
            arr.sort(function(a, b) {
                console.log(a.childNodes[0].childNodes[1].childNodes[6].innerHTML);
                var num1 = (a.childNodes[0].childNodes[1].childNodes[6].innerHTML).slice(7,10);
                var num2 = (b.childNodes[0].childNodes[1].childNodes[6].innerHTML).slice(7,10);
                return num1 - num2;
            })
            for (var i = 0; i < arr.length; i++) {
                lis.appendChild(arr[i]); //替换
            }
        }


        
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

    })
})