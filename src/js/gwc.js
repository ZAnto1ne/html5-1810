document.addEventListener('DOMContentLoaded',()=>{
    jQuery(function($){

    var $tz = $("#tz");
    $tz.click(function(){
        window.location.href="../index.html";
    })
    a = Cookie.getCookie("uname");
    var name = a;
    
    // console.log(name);
    var xr = document.getElementById("xr");
    var xhr = new XMLHttpRequest();
    var status = [200,304];
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
           var res = JSON.parse(xhr.responseText);
           render(res);
           // console.log(res);
        }

    }
    xhr.open("get","../api/xqycar.php?name="+name,true);
    xhr.send(null);
           // console.log(res);
           
    function render(res) {
        var Subtotal = 0;
        var allqty = 0;
        var sum = 0;
        for(var i=0;i<res.length;i++){
            allqty= res[i].price*res[i].qty;
            sum+=allqty;
        }
        var xe = res.map(function(item,idx) {
            Subtotal = item.price*item.qty;
            return  '<li data-id="'+item.idx+'" class="clearfix">'+
                        '<img src="'+item.imgurl+'" height="118" width="88" alt="" />'+
                        '<div class="wz">'+
                            '<span>商品名称：'+item.uname+'</span><br />'+
                            '<span>价格：<i>'+item.price+'</i>元</span>'+
                            '<input id="txt" type="text" value="数量：'+item.qty+'"/>'+
                            '<span>总价：<i>'+Subtotal+'</i>元</span>'+
                            '<button class="delBtn" id="del">X</button>'+
                        '</div>'+
                    '</li>'
            ;
        }).join("");
        xe = xe + '<p>共：<i>'+sum+'</i>元</p>'+
                  '<button id="submit1">支付</button>';
        xr.innerHTML = xe;

        $("#submit1").on("click",function(){
            window.location.href="../html/jsy.html";
        })
    }



    $("div").on("mousedown","button",function(){
        $(this).css("opacity","0.8")
    })
    $("div").on("mouseup","button",function(){
        $(this).css("opacity","1")
    })
    $('.wz').on('click', 'button', function() { 
        $(this).parent().remove(); 
    });
    $("div").on("click","button",function(){
        //删除数据
        // console.log(name);
        
        var $liid = $(this).parent().parent().remove();
        var b = $liid.attr("data-id");
        // console.log(b);
        // console.log(a);
        $.ajax({
            type:"GET",
            url:"../api/xqycar.php",
            data:{
                name:a,
                sc:b
            },
            success:function(data){
                // alert("注册成功");
                // var res = data.data
                // render(res);
                // xr.innerHTML="";
                
                
                // console.log(data);
                 var jsonObj = JSON.parse(data)
                // console.log(jsonObj)
                render(jsonObj);
                function render(jsonObj) {

                var Subtotal = 0;
                var allqty = 0;
                var sum = 0;
                for(var i=0;i<jsonObj.length;i++){
                    allqty= jsonObj[i].price*jsonObj[i].qty;
                    sum+=allqty;
                }

                
                var xe = jsonObj.map(function(item,idx) {
                    Subtotal = item.price*item.qty;
                    return  '<li data-id="'+item.idx+'" class="clearfix">'+
                                '<img src="'+item.imgurl+'" height="118" width="88" alt="" />'+
                                '<div class="wz">'+
                                    '<span>商品名称：'+item.uname+'</span><br />'+
                                    '<span>价格：<i>'+item.price+'</i>元</span>'+
                                    '<input id="txt" type="text" value="数量：'+item.qty+'"/>'+
                                    '<span>总价：<i>'+Subtotal+'</i>元</span>'+
                                    '<button class="delBtn" id="del">X</button>'+
                                '</div>'+
                            '</li>'
                    ;
                }).join("");
                xe = xe + '<p>共：<i>'+sum+'</i>元</p>'+
                          '<button id="submit1">支付</button>';
                xr.innerHTML = xe;

                $("#submit1").on("click",function(){
                    window.location.href="../html/jsy.html";
                })
            }
            }

        });
        

        

            
    })




        
    
    
    })
})