/* 
* @Author: Marte
* @Date:   2018-11-24 14:03:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-12-01 18:09:19
*/

document.addEventListener('DOMContentLoaded',()=>{

        var btnPrev =document.getElementById('btnPrev');
        btnPrev.onclick = function(){
                history.back();
            }
            
        var m_ul= document.getElementById('main_car_ul');
        var m_c_b=document.getElementById('m_c_b');
        var con = document.getElementById('tota');
        var btnClear=document.getElementById('btnClear');
        var car_arr = Cookie.getCookie("goodslist") ||[];
        if (typeof car_arr == "string"){
            car_arr = JSON.parse(car_arr);
        }

         btnClear.onclick = function(){
                m_ul.innerHTML = "";
                con.innerHTML = 0;
                Cookie.delCookie("goodslist","/");
            }


        render();
             m_ul.onclick=function(e){
                var currentLi = e.target.parentElement;
                var currentGuid = currentLi.getAttribute("guid");
                var i;
                var add=currentLi.getElementsByClassName('btn')[0];
                var val=currentLi.children[3];
                console.log(currentLi.children[3]);
                if(e.target.className =="btn0"){
                    car_arr.some(function(item,idx){  //减单价
                        i = idx;
                        return item.id == currentGuid;
                    })
                    car_arr[i].qty--;
                    val.value=car_arr[i].qty;
                    if(car_arr[i].qty<=1){
                        car_arr[i].qty=1;
                    }
                    var all=0;
                    all+=car_arr[i].oPrice*car_arr[i].qty;
                    render();
                }
                if(e.target.className =="btn"){
                    
                    car_arr.some(function(item,idx){  //加单价
                        i = idx;
                        return item.id == currentGuid;
                    })
                    car_arr[i].qty++;
                    val.value=car_arr[i].qty;
                    var all=0;
                    all+=car_arr[i].oPrice*car_arr[i].qty;
                    render();
                }
                if(e.target.className == "btn-close"){

                    car_arr.some(function(item,idx){
                        i = idx;
                        return item.id == currentGuid;
                    })
                    car_arr.splice(i,1);
                   render();
                }
                getCarLi();
                Cookie.setCookie("goodslist",JSON.stringify(car_arr),"","/");

                
            }
   


    function render(){
         var total = 0;
                m_ul.innerHTML = car_arr.map(function(item){
                    var all=(item.oPrice*item.qty).toFixed(2);
                    total += item.oPrice*item.qty;
                    return `<li guid="${item.id}">
                           <i style="background:url(../images/${item.imgurl})
                           no-repeat;background-size:100% 100%;"></i>
                           <p class="idx"><span class="fl">ID:${item.id}</span><br /><span class="Size">Size: Default</span></p>
                           <input class="btn0"  type="button"  value="-">
                           <input type="text"  value="${item.qty}" />
                           <input class="btn" type="button" value="+" >
                           <p class="price">&times;$${item.oPrice}</p>
                           <p class="allprice">${all}</p>
                           <a class="btn-close">&times;</a>
                       </li>`
                }).join("");
                con.innerHTML = total.toFixed(2);
                // console.log(con);
            }


            // 封装轮播图
            function lunbotu(){
                var focus=document.querySelector(".cc_bmt");
                var ulbox = focus.children[0];
                var left=document.querySelector("#left");
                var right=document.querySelector("#right");
                // var firstImg = ulbox.children[0].children[0];
                var cloneLi = ulbox.children[0].cloneNode(true);
                ulbox.appendChild(cloneLi);
                var len = ulbox.children.length;
                var idx = 0;
                // 1.focus呈现图片，宽度为第一张图片的宽度。ul的宽度=图片的宽度*图片张数
                //  * 必须等待第一张图片加载完成后，再获取宽度
               
                    focus.style.width = 980 + 'px';
                    ulbox.style.width = 980 * 5 + 'px';
                

                right.onclick=function(){
                    idx++;
                    showPic();
                }
                left.onclick=function(){  
                    idx--;
                    showPic();
                }

                function showPic(){
                    if(idx == len){
                        ulbox.style.left = 0;
                        idx = 1;
                    }
                    if(idx==-1){
                        ulbox.style.left=-980 *(3) +"px";
                        idx=len-2;
                    }

                    animation(ulbox,{left:-980 *idx},30);
                }
            }
            lunbotu();


            //头部购物车
    function getCarLi(){
        var ulHt = document.getElementsByClassName("h_t_r_2")[0];
        var cartli = document.getElementById("CartLi");
        var Subtotal = 0;
        var allqty = 0;
        var ulres = car_arr.map(function(item){
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
});
 
