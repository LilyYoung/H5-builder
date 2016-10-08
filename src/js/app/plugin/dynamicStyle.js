/**
 * Created by wangyongqiang-ds1 on 2016/9/18.
 * @param:动态创建，修改，删除样式
 */
define(function(){
    var dynamicStyle = {};
    dynamicStyle.styleInit = function(elemenid,select,style){
        if(!elemenid) return;
        var elemen_id = elemenid || "",
            selects = select || "",
            styles = style || "";
        $("style."+elemen_id).length && styles && this.changeStyle(elemen_id,selects,styles);
        $("style."+elemen_id).length || !styles || this.createStyle(elemen_id,selects,styles);
    };
    //生成样式
    dynamicStyle.createStyle = function(elemenid,selecter,strings){
        var pendobj = $("#"+elemenid).hasClass("edit_wrapper") ? $("#"+elemenid) :  $("#"+elemenid).parents(".edit_wrapper");
        pendobj = pendobj.length ? pendobj : $("#"+$(".icon-list li.tool-list2").attr("partid"));
        $("#"+elemenid).closest(".wqdFixedContainer").length && (pendobj = $(".wqdFixedContainerWrap"));
        var objStr = "";
        var spacing = selecter.charAt(0) == ":" ? "" : " ";
        for(var i in strings){
            objStr += i + ":" + strings[i] +";";
        }
        var styleString = "#" + elemenid + spacing + selecter + "{" + objStr +"}";
        pendobj.prepend('<style type="text/css" class="'+elemenid+'"></style>');
        $("style."+elemenid).html(styleString);
    };
    //修改样式
    dynamicStyle.changeStyle = function(elemenid,selecter,strings){
        var reg = /:|;/,
            isNewElementStyle = true,	//是否为新的子元素样式
            objString = '{',
            newObj = {},
            newStyles = '',
            spacing = selecter.charAt(0) == ":" ? "" : " ",
            selectArray = $("style."+elemenid).html().split("#"+elemenid);	//拆分成数组
        selectArray.shift();
        for(var i=0; i<selectArray.length; i++){
            if(selectArray[i].substring(0,selectArray[i].indexOf("{")).replace(/\s+/g,"") == selecter.replace(/\s+/g,"")){
                isNewElementStyle = false;
                var styleArray = selectArray[i].substring(selectArray[i].indexOf("{")+1,selectArray[i].indexOf("}")).split(reg);
                styleArray.pop();
                for(var k=0; k<styleArray.length; k++){
                    if(k % 2 == 0){
                        objString += '"' + styleArray[k] + '":';
                    }else{
                        if(k == styleArray.length-1){
                            objString += '"' + styleArray[k] + '"';
                        }else{
                            objString += '"' + styleArray[k] + '",';
                        }
                    }
                }
                objString = JSON.parse(objString+'}');
                //样式拆分成数组再转化为对象再合并对象
                $.extend(newObj,objString,strings);
                for(var m in newObj){
                    newStyles += m + ":" + newObj[m] +";";
                }
                selectArray[i] = selectArray[i].substring(0,selectArray[i].indexOf("{")) + "{" + newStyles + "}";
                //最后样式转成字符串
                newStyles = "#" + elemenid + selectArray.join("#"+elemenid);
                $("style."+elemenid).html(newStyles);
                break;
            }
        }
        if(isNewElementStyle){
            var newHtmlStyle = "";
            for(var n in strings){
                newHtmlStyle += n + ":" + strings[n] +";";
            }
            var newHtml = $("style."+elemenid).html() + "#" + elemenid + spacing + selecter + "{" + newHtmlStyle +"}";
            $("style."+elemenid).html(newHtml);
        }
    };
    //删除部分样式
    dynamicStyle.deleteStyle = function(elemenid,selecter,strings){
        var	newStyles = '',
            selectArray = $("style."+elemenid).html().split("#"+elemenid);	//拆分成数组
        selectArray.shift();
        for(var i=0; i<selectArray.length; i++){
            if(selectArray[i].substring(0,selectArray[i].indexOf("{")).replace(/\s+/g,"") == selecter.replace(/\s+/g,"")){
                selectArray[i] = selectArray[i].replace(strings,"");
                //最后样式转成字符串
                newStyles = "#" + elemenid + selectArray.join("#"+elemenid);
                $("style."+elemenid).html(newStyles);
                break;
            }
        }
    };
    return dynamicStyle;
});