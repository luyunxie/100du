//@author luyun

$(function(){
   //搜索框的轮换
   (function(){
       var aLi = $(".menu li");
	   var liText = $("#search").find(".form .text");
	   var arrText = [
				'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
				'例如：昌平区育新站龙旗广场2号楼609室',
				'例如：万达影院双人情侣券',
				'例如：东莞出事了，大老虎是谁？',
				'例如：北京初春降雪，天气变幻莫测'
			];

		var iNow = 0;

		liText.attr("placeholder",arrText[iNow]);
		 
		aLi.each(function(index){
		    $(this).click(function(){
			   aLi.attr("class","gradient");
			   $(this).attr("class","active");

			   iNow = index;

			   liText.attr("placeholder",arrText[iNow]);
			});
		});
   })();
   
   //hot shop切换
   (function(){

       var navLi = $(".options .nav li");
	   navLi.each(function(index){
	       $(this).click(
			  function(){
		           navLi.attr("class","gradient");
				   navLi.find("span").attr("class","trangle_down_gray");
				   $(this).attr("class","active");
				   $(this).find("span").attr("class","trangle_down_red");

                   $("#all_shop .hot_shop").hide().eq(index).show();
		      }
			  
		   );
	   });

	   var mapLi = $(".subway .nav li");
	   mapLi.each(function(index){
	       $(this).click(
			  function(){
		           mapLi.attr("class","gradient");
				   mapLi.find("span").attr("class","trangle_down_gray");
				   $(this).attr("class","active");
				   $(this).find("span").attr("class","trangle_down_red");

                   $(".subway .map img").hide().eq(index).show();
		      }
			  
		   );
	   });

	   //mouseover事件
	   function mEvent(publicUl,publicOl1){
	           var publicUlLi = $(publicUl).children();
			   var publicOl = $(publicOl1);

			   //alert(publicUlLi.length);
			   publicOl.hide().eq(0).show();
			   publicUlLi.each(function(index){
					 $(this).mouseover(function(){
						 publicUlLi.attr("class","gradient");
						 $(this).removeClass("gradient").addClass("active")

						 publicOl.hide().eq(index).show();
					 });
			   });
	   }
       //side_shop,advice的mouseover事件
	   mEvent(".public_ul1",".public_ol1");
	   mEvent(".public_ul2",".public_ol2");
	  

	   /*function choose(tnav,tcon){
	        var tabnav = $(tnav).children();
			var tabcon = $(tcon).children();
			//alert(tabnav.innerHTML);

			tabnav.hide().eq(0).show();
			
			tabcon.each(function(index){
			     $(this).click(function(){
				     tabcon.attr("class","gradient");
					 $(this).attr("class","active");
					 tabcon.find("span").attr("class","trangle_down_gray").eq(index).attr("class","trangle_down_gray");
					 tabnav.hide().eq(index).show();
				 });
			});
	   };

       choose("tabnav1","tabcon1");
	   choose("tabnav2","tabcon2");*/

   })();
   
   //图片轮播事件
   (function(){
       var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
	   var arrImg = ["imgs/content/img1.gif","imgs/content/img2.gif","imgs/content/img3.gif"];

	   var bgImg = $(".list_img .bgimg");
	   var listImg = $(".list_img li");
	   var listp = $(".list_img p");
	   var iNum = 0;
	   var timer = null;

	   bgImg.attr("src",arrImg[iNum]);

	   function autoplay(){
	        timer = setInterval(function(){
			    iNum++;
				if(iNum>arrImg.length-1){
				  iNum = 0;
				}
				listImg.removeClass("active").eq(iNum).addClass("active");
				bgImg.attr("src",arrImg[iNum]);
				listp.text(arr[iNum]);
			},2000);
	   }
		autoplay();
        //给轮播添加hover事件
		listImg.each(function(index){
		   $(this).hover(function(){
			   clearInterval(timer);
		       iNum = index;
			   listImg.removeClass("active").eq(iNum).addClass("active");
			   bgImg.attr("src",arrImg[iNum]);
			   listp.text(arr[iNum]);
		   },autoplay);
		});
   })();
    
});