
$(document).ready(function(){ 
		$.ajax({ 
		type:"GET", 
			url:"http://api.tianapi.com/it/?key=cf7f32ca14511e50603a087199789818&num=20",
		    dataType:"json", 
			success:function(data){ 
				var txapi="<ul>";
				for(var i=0;i<20;i++){
					txapi+="<li class='content am-cf'><div class='news-img am-fl'><img src=" + data.newslist[i]["picUrl"] +"/></div><a class='news-content' href=" +data.newslist[i]["url"] + "><p class='news-content-title' >" + data.newslist[i]["title"] + "</p><p class='news-content-desc'><span>"+data.newslist[i]["description"] +"</span><span>" +data.newslist[i]["ctime"]+ "</span></p></a></li>";
				}
				txapi+="</ul>";
				$('#result4').append(txapi); 
				console.log(data.newslist);
				} 

			}); 
			return false; 
}); 