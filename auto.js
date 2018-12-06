var fa=$("body");  
var btn=$("<li></li>");  
var json={  
"background":"rgba(177, 177, 177, 0.83)",  
"height":"16px",  
"padding":"5px",  
"cursor": "pointer",  
"top":"50px",  
"right":"80px",  
"position": "fixed"  
};  
btn.css(json);  
btn.html("<span id='lfsenior'>智慧树自动模式</span>");  
fa.append(btn);  
var bodywidth=$("#body").css("width");  
var mainwidth=$("#main").css("width");  
//1.5倍速播放
$(".speedTab15").click(); 
btn.click(function () {  
   $("#lfsenior").html("智慧树自动模式已开启");  
   //关闭弹题  
  setInterval(function(){  
  $(".popbtn_cancel").click();  
  //获取当前进度  
  var spans=$(".current_play span");  
  var progress=spans[spans.size()-1].innerHTML;  
  if("100"==progress.substring(progress.lastIndexOf("『")+1,progress.lastIndexOf("』")-1)){  
     //播放完毕  
     $(".next_lesson a").click(); 
  }else{  
     $("#vjs_mediaplayer_html5_api")[0].play();  
    $("#vjs_mediaplayer_html5_api")[0].muted=true;
    //1.5倍速播放
     $(".speedTab15").click(); 
  }  
   $("#lfsenior").html("智慧树自动模式已开启,本章进度:"+progress+"%");  
},100);  
});
$("#lfsenior").click();
