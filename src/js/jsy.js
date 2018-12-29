document.addEventListener('DOMContentLoaded',()=>{
    jQuery(function($){

        var $tz = $("#tz");
        $tz.click(function(){
            window.location.href="../index.html";
        })
        a = Cookie.getCookie("uname");
        var name = a;
        var htx = document.getElementById("htx");
        var money = document.getElementById("money");
        var xhr = new XMLHttpRequest();
        var status = [200,304];
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
               var res = JSON.parse(xhr.responseText);
               render(res);
               console.log(res);
            }
        }
        xhr.open("get","../api/xqycar.php?name="+name,true);
        xhr.send(null);

        function render(res) {
            var Subtotal = 0;
            var allqty = 0;
            var sum = 0;
                for(var i=0;i<res.length;i++){
                    allqty= res[i].price*res[i].qty;
                    // console.log(res[i].price);
                    // console.log(res[i].qty);
                    sum+=allqty;
                    // console.log(sum);
                }
            
            htx.innerHTML  = res.map(function(item) {
                Subtotal += item.allprice*1;
                
                return  '<div id="'+item.idx+'">'+
                        '<img src="'+item.imgurl+'" height="107" width="88" alt="" />'+
                        '<div class="htx_c">'+
                            '<p>'+item.uname+'</p>'+
                            '<p>'+item.uname+'T恤</p>'+
                            '<p>颜色：白色 尺码：XL</p>'+
                        '</div>'+
                        '<div class="htx_r">'+
                            '<p>￥'+Math.ceil(item.price*1.6)+'</p>'+
                            '<p>￥'+item.price+'</p>'+
                        '</div>'+
                        '<div class="htx_e">'+
                            '<p>'+item.qty+'</p>'+
                        '</div>'+
                        "</div>"
                ;

            }).join("");
            var total = Subtotal;
            if(total-50+15>0){
                total = total-50+15;
            }else{
                total = 0;
            }
            // console.log(total);
            money.innerHTML  = 
                        '<p>商品总价：￥'+Subtotal+'</p>'+
                        '<p>优惠金额：<span>￥50</span></p>'+
                        '<p>运费：￥15</p>'+
                        '<p>订单应付金额：<span>￥'+total+'</span></p>' ;  

                var zf = document.getElementById("zf");
                zf.onclick = function(){
                    res.map(function(item){
                        var xhr = new XMLHttpRequest();
                        var status = [200,304];
                        xhr.onreadystatechange = function(){
                            if(xhr.readyState == 4 && status.indexOf(xhr.status) != -1){
                               // var res = JSON.parse(xhr.responseText);
                               // render(res);
                               // console.log(res);
                               
                            }
                        }
                        xhr.open("get","../api/jsy.php?idx="+item.idx,true);
                        xhr.send(null);
                    })
                    window.location.href="../index.html";

                     
                }
            
            $(".qr").on("click",function(){
                // console.log($(this).prev().prev().children());
                $(this).prev().prev().children().attr("disabled",true);
            })
            $(".qx").on("click",function(){
                // console.log($(this).prev().prev().prev().children());
                $(this).prev().prev().prev().children().attr("disabled",false);
            })
            $(".qr1").on("click",function(){
                // console.log($(this).prev().prev().children());
                $(this).prev().prev().children().attr("disabled",true);
                $(this).prev().children().attr("disabled",true);
            })
            $(".qx1").on("click",function(){
                // console.log($(this).prev().prev().prev().children());
                $(this).prev().prev().prev().children().attr("disabled",false);
                $(this).prev().prev().children().attr("disabled",false);
            })
            
                        
        }

    


    })
})