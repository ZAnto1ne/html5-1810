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
        

        // 轮播
        var i = 0 ;
        var timer;
        $(document).ready(function(){
        //用jquery方法设置第一张图片显示，其余隐藏
        $('.ig').eq(0).show().siblings('.ig').hide();

        //调用showTime()函数（轮播函数）
        showTime();

          //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
          $('.tab').hover(function(){
            //获取当前i的值，并显示，同时还要清除定时器
            i = $(this).index();
            Show();
            clearInterval(timer);
          },function(){
            //
            showTime();
          });

           
          //鼠标点击左侧的箭头
          $('.btn1').click(function(){
            clearInterval(timer);
            if(i == 0){
              i = 5;
            }
            i--;
            Show();
            showTime();
          });

          //鼠标点击右侧的箭头
          $('.btn2').click(function(){
            clearInterval(timer);
            if(i == 4){
              i = -1;
            }
            i++;
            Show();
            showTime();
          });
        });

        //创建一个showTime函数
        function showTime(){
          //定时器
          timer = setInterval(function(){
            //调用一个Show()函数
            Show();
            i++;
            //当图片是最后一张的后面时，设置图片为第一张
            if(i==5){
              i=0;
            }
          },3000);
        }

        //创建一个Show函数
        function Show(){
          $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
          $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
        }


        // 滚动
        
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
        
        $("#text1").click(function(){
        $("html,body").animate(
            {scrollTop:$($("#text1").attr('href')).offset().top},2000 /*scroll实现定位滚动*/

            );/*让整个页面可以滚动*/
        return false;
        });
        $("#text2").click(function(){
        $("html,body").animate(
            {scrollTop:$($("#text2").attr('href')).offset().top},2000 /*scroll实现定位滚动*/

            );/*让整个页面可以滚动*/
        return false;
        });
        $("#text3").click(function(){
        $("html,body").animate(
            {scrollTop:$($("#text3").attr('href')).offset().top},2000 /*scroll实现定位滚动*/

            );/*让整个页面可以滚动*/
        return false;
        });
        $("#text4").click(function(){
        $("html,body").animate(
            {scrollTop:$($("#text4").attr('href')).offset().top},2000 /*scroll实现定位滚动*/

            );/*让整个页面可以滚动*/
        return false;
        });

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


    // $.ajax({
    //     type : "get",
    //     url : "../api/login.php?name="+name.value,
    //     dataType : "text",
    //     success : function(result) {
    //         console.log(result);
    //     },
    //     error : function() {
    //         alert("請求失敗");
    //     }
    // })

    // var data = sessionStorage.getItem('data');
    // console.log(data);

    // var xhr = new XMLHttpRequest();
    //     var status = [200,304];
    //     xhr.onreadystatechange = function(){
    //         if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
    //            var res = xhr.responseText;
               
    //            console.log(res);
    //         }
    //     }
    //     xhr.open("get","../api/login.php?name="+name.value,true);
    //     xhr.send(null);

    })
})
