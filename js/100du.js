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

	   /*function choose(tnav,tcon){
	        var tabnav = $(tnav).children();
			var tabcon = $(tcon).children();

			tabnav.hide().eq(0).show();
			
			tabcon.each(function(index){
			     tabcon.attr("class","gradient");
				 $(this).attr("class","active");
				 tabcon.find("span").attr("class","trangle_down_gray").eq(index).attr("class","trangle_down_gray");
				 tabnav.hide().eq(index).show()
			});
	   }
       choose("tabnav1","tabcon1")();
	   choose("tabnav2","tabcon2")();*/

   })();


});