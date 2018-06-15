window.onload=function(){
    //横向轮播图
    $(function(){
        $('.sowingParent').liMarquee(
            {
                hoverstop:true
            }
        );
    });
    
// 点击显示三个案例：
$(".caseUl").click(function(ev){
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    switch(target.id){
        case 'case1Btn' :
        $("#content2Case,#content3Case").hide();
          $("#content1Case").show();
          $(".anliFont2").css("background-color","white");
          $(".anliFont3,.anliFont4").css("background-color","#f1f1f1");
            break;
        case 'case2Btn' :
        $("#content1Case,#content3Case").hide();
        $("#content2Case").show();
        $(".anliFont3").css("background-color","white");
        $(".anliFont2,.anliFont4").css("background-color","#f1f1f1");
            break;
        case 'case3Btn' :
        $("#content2Case,#content1Case").hide();
        $("#content3Case").show();
        $(".anliFont4").css("background-color","white");
        $(".anliFont3,.anliFont2").css("background-color","#f1f1f1");
            break;
    }
})
//点击隐藏案例详情
$(".sanjiaoFont").click(function(){
    $("#content1Case,#content2Case,#content3Case").hide();
})
    //切割获取url里的id
    // var strUrl = "www/activity/123/SVGAnimatedTransformList";
    var strUrl = window.location.href;
    var str2 = strUrl.match("activity/\\d+/");
    if(str2){
        var activityId = parseInt(str2[0].split("/")[1])
    }

    //点击提交
    $(".btn").click(function(){
        //名字
        if($(".username").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            $(".mustName").show();
            return;
        }
        //电话
        if($(".tel").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            $(".mustTle").css("display","block")
            return;
        }else if(!(/^1[34578]\d{9}$/.test($(".tel").val()))){
            $(".mustTle2").show()
            return;
        }
        //所在城市
        if($(".city").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            $(".mustCity").show()
            return;
        }
        //职位需求
        if($(".workUse").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            $(".mustUse").show()
            return;
        }
    
        //现状自述和职位描述,如果有就填写，没有就写“无”
        // var nowContent = ""; 
        // var skillContent = "";
        let [nowContent,skillContent] = ["",""]
        if($(".nowContent").val().replace(/(^\s*)|(\s*$)/g, "")!=""){
            nowContent = $(".nowContent").val()
        }
        
        if($(".skillContent").val().replace(/(^\s*)|(\s*$)/g, "")!=""){
            skillContent = $(".skillContent").val()
        }
        
        var content =  {
            "name":$(".username").val(),
            "tel":$(".tel").val(),
            "city":$(".city").val(),
            "workUse":$(".workUse").val(),
            "youself":nowContent,
            "skill":skillContent
        }

		if( skillContent == ""){
			delete content.skill
		}
		if( nowContent == ""){
			delete content.youself
		}
		
        if(typeof content === "object"){
            content = JSON.stringify(content)
        }
		
        var datas = {};
        datas.activityId = activityId;
        datas.content = content;
        if(typeof datas === "object"){
            data = JSON.stringify(datas)
        }
        $.ajax({
            type: "post",
            url: "/services/activity/reply",
            data:data,
            contentType: "application/json",
            success: function(data){
                $(".mustmust").css("display","none")
                    // location.href="enlist.html"
                    $(".ipt").hide()
                    $(".baoming").hide()
                    $(".enlist").show()
                  },
            error:function(){
                alert("服务器错误，请稍后再试！")
            }
        })
    })
}



















