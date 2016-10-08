/**
 * Created by wangyongqiang-ds1 on 2016/9/20.
 * @param:吸附配置
 */
define(function () {
    var adsorb = {};
    //初始化该通条所有元素的坐标数据
    adsorb.dataInit = function(element){
        if(element.hasClass("wqd-carouseOverlay-box")) return;
        if(!element) return;
        var	allElem = element.siblings(":visible").not("[data-rotate]"),
            coordObj = {};
        coordObj.objX = {};
        coordObj.objY = {};
        coordObj.arrayX = [];
        coordObj.arrayY = [];
        allElem.each(function(){
            var that = $(this),
                elementId = that.attr("id") || "",
                leftX = that.position().left,
                centerX = that.position().left + that.width()/2,
                rightX = that.position().left + that.width(),
                topY = that.position().top,
                centerY = that.position().top + that.height()/2,
                bottomY = that.position().top + that.height();
            coordObj.objX[leftX] ? coordObj.objX[leftX] = coordObj.objX[leftX]+","+elementId : coordObj.objX[leftX] = elementId;
            coordObj.objX[centerX] ? coordObj.objX[centerX] = coordObj.objX[centerX]+","+elementId : coordObj.objX[centerX] = elementId;
            coordObj.objX[rightX] ? coordObj.objX[rightX] = coordObj.objX[rightX]+","+elementId : coordObj.objX[rightX] = elementId;
            coordObj.objY[topY] ? coordObj.objY[topY] = coordObj.objY[topY]+","+elementId : coordObj.objY[topY] = elementId;
            coordObj.objY[centerY] ? coordObj.objY[centerY] = coordObj.objY[centerY]+","+elementId : coordObj.objY[centerY] = elementId;
            coordObj.objY[bottomY] ? coordObj.objY[bottomY] = coordObj.objY[bottomY]+","+elementId : coordObj.objY[bottomY] = elementId;
            coordObj.arrayX.push(leftX);coordObj.arrayX.push(centerX);coordObj.arrayX.push(rightX);
            coordObj.arrayY.push(topY);coordObj.arrayY.push(centerY);coordObj.arrayY.push(bottomY);
        });
        //再添加通条的两条中间轴
        var parentsObj = element.parent(".sectionV2").length ? element.parent(".sectionV2") : element.parents(".elementsContainer"),
            parentId = element.parent(".sectionV2").length ? element.parents(".wqdSectiondiv").attr("id")+" .sectionV2" : parentsObj.attr("id"),
            sectionX = element.parent().width()/2,
            sectionY = element.parent().height()/2;
        parentId = parentId || "";
        coordObj.objX[sectionX] ? coordObj.objX[sectionX] = coordObj.objX[sectionX]+","+parentId : coordObj.objX[sectionX] = parentId;
        coordObj.objY[sectionY] ? coordObj.objY[sectionY] = coordObj.objY[sectionY]+","+parentId : coordObj.objY[sectionY] = parentId;
        coordObj.arrayX.push(sectionX);coordObj.arrayY.push(sectionY);

        coordObj.arrayX.sort(function(a,b){return a>b?1:-1});coordObj.arrayX.sort(function(a,b){return a>b?1:-1});
        coordObj.arrayX = this.unique(coordObj.arrayX);
        coordObj.arrayY = this.unique(coordObj.arrayY);
        parentsObj.data("wqdAdsorb",coordObj);
    };
    //移动吸附
    adsorb.moveAdsorb = function(element,newLeft,newTop,adsorb){
        if(element.hasClass("wqd-carouseOverlay-box")) return;
        if(element.attr("data-rotate")) return;		//不支持旋转过的元素
        $(".wqdAdsorbGuides").remove();
        var that = element,
            parentsObj = element.parent(".sectionV2").length ? element.parent(".sectionV2") : element.parents(".elementsContainer"),
            adsorbVal = 5,
            wqdAdsorb = parentsObj.data("wqdAdsorb") || "",
            sectionW = element.parent().width(),
            sectionH = element.parent().height(),
            xminVal = 6,
            xtemporarys = [],
            yminVal = 6,
            ytemporarys = [],
            leftX = newLeft,
            centerX =newLeft + that.width()/2,
            rightX = newLeft + that.width(),
            topY = newTop,
            centerY = newTop + that.height()/2,
            bottomY = newTop + that.height();
        if(!wqdAdsorb) return;
        //x轴
        for(var i = 0; i < wqdAdsorb.arrayX.length; i++){
            if(Math.abs(wqdAdsorb.arrayX[i]-leftX) <= adsorbVal && Math.abs(wqdAdsorb.arrayX[i]-leftX) <= Math.abs(xminVal)){
                if(wqdAdsorb.arrayX[i]-leftX == xminVal){
                    xtemporarys.push(wqdAdsorb.arrayX[i]+",1");
                }else{
                    xtemporarys = [wqdAdsorb.arrayX[i]+",1"];
                }
                xminVal = wqdAdsorb.arrayX[i]-leftX;
            }else if(Math.abs(wqdAdsorb.arrayX[i]-centerX) <= adsorbVal && Math.abs(wqdAdsorb.arrayX[i]-centerX) <= Math.abs(xminVal)){
                if(wqdAdsorb.arrayX[i]-centerX == xminVal){
                    xtemporarys.push(wqdAdsorb.arrayX[i]+",2");
                }else{
                    xtemporarys = [wqdAdsorb.arrayX[i]+",2"];
                }
                xminVal = wqdAdsorb.arrayX[i]-centerX;
            }else if(Math.abs(wqdAdsorb.arrayX[i]-rightX) <= adsorbVal && Math.abs(wqdAdsorb.arrayX[i]-rightX) <= Math.abs(xminVal)){
                if(wqdAdsorb.arrayX[i]-rightX == xminVal){
                    xtemporarys.push(wqdAdsorb.arrayX[i]+",3");
                }else{
                    xtemporarys = [wqdAdsorb.arrayX[i]+",3"];
                }
                xminVal = wqdAdsorb.arrayX[i]-rightX;
            }
        }
        //Y轴
        for(var i = 0; i < wqdAdsorb.arrayY.length; i++){
            if(Math.abs(wqdAdsorb.arrayY[i]-topY) <= adsorbVal && Math.abs(wqdAdsorb.arrayY[i]-topY) <= Math.abs(yminVal)){
                if(wqdAdsorb.arrayY[i]-topY == yminVal){
                    ytemporarys.push(wqdAdsorb.arrayY[i]+",4");
                }else{
                    ytemporarys = [wqdAdsorb.arrayY[i]+",4"];
                }
                yminVal = wqdAdsorb.arrayY[i]-topY;
            }else if(Math.abs(wqdAdsorb.arrayY[i]-centerY) <= adsorbVal && Math.abs(wqdAdsorb.arrayY[i]-centerY) <= Math.abs(yminVal)){
                if(wqdAdsorb.arrayY[i]-centerY == yminVal){
                    ytemporarys.push(wqdAdsorb.arrayY[i]+",5");
                }else{
                    ytemporarys = [wqdAdsorb.arrayY[i]+",5"];
                }
                yminVal = wqdAdsorb.arrayY[i]-centerY;
            }else if(Math.abs(wqdAdsorb.arrayY[i]-bottomY) <= adsorbVal && Math.abs(wqdAdsorb.arrayY[i]-bottomY) <= Math.abs(yminVal)){
                if(wqdAdsorb.arrayY[i]-bottomY == yminVal){
                    ytemporarys.push(wqdAdsorb.arrayY[i]+",6");
                }else{
                    ytemporarys = [wqdAdsorb.arrayY[i]+",6"];
                }
                yminVal = wqdAdsorb.arrayY[i]-bottomY;
            }
        }
        if(xminVal < 6){
            var newArrX = xtemporarys[0].split(","),
                thisLeft = null;
            if(newArrX[1] == "1"){
                thisLeft = newArrX[0]-0;
            }else if(newArrX[1] == "2"){
                thisLeft = newArrX[0]-that.width()/2;
            }else{
                thisLeft = newArrX[0]-that.width();
            }
            if(thisLeft >= 0 && thisLeft <= sectionW - that.width() && adsorb) element.css("left",thisLeft);
        }

        if(yminVal < 6){
            var newArrY = ytemporarys[0].split(","),
                thisTop = null;
            if(newArrY[1] == "4"){
                thisTop = newArrY[0]-0;
            }else if(newArrY[1] == "5"){
                thisTop = newArrY[0]-that.height()/2;
            }else{
                thisTop = newArrY[0]-that.height();
            }
            if(thisTop >= 0 && thisTop <= sectionH - that.height() && adsorb) element.css("top",thisTop);
        }
        var arryConcat = xtemporarys.concat(ytemporarys);
        if(arryConcat.length) this.calculating(that,arryConcat,wqdAdsorb);
    };
    //计算需要生成参考线的坐标
    adsorb.calculating = function(element,parameter,wqdAdsorb){
        var elemLeft = element.position().left,
            elemRight =  element.position().left + element.width(),
            elemTop =  element.position().top,
            elemBottom = element.position().top + element.height();
        for(var i = 0; i < parameter.length; i++){
            var type = parameter[i].substr(parameter[i].length-1),
                thisVal = parameter[i].replace(/,\d*/g,"");
            if(type == 1 || type == 2 || type == 3){
                var newArrX = wqdAdsorb.objX[thisVal].split(","),
                    temporary = [];
                for(var k = 0; k < newArrX.length; k++){
                    if(!newArrX[k]) continue;
                    var containerTop = element.siblings("#"+newArrX[k]).length ? element.siblings("#"+newArrX[k]).position().top : 0,
                        containerHeight = element.siblings("#"+newArrX[k]).length ? element.siblings("#"+newArrX[k]).height() : element.parent().height();
                    temporary.push(containerTop);
                    temporary.push(containerTop + containerHeight);
                }
                temporary.push(elemTop);temporary.push(elemBottom);
            }else{
                var newArrY = wqdAdsorb.objY[thisVal].split(","),
                    temporary = [];
                for(var k = 0; k < newArrY.length; k++){
                    if(!newArrY[k]) continue;
                    var containerLeft = element.siblings("#"+newArrY[k]).length ? element.siblings("#"+newArrY[k]).position().left : 0,
                        containerWidth = element.siblings("#"+newArrY[k]).length ? element.siblings("#"+newArrY[k]).width() : element.parent().width();
                    temporary.push(containerLeft);
                    temporary.push(containerLeft + containerWidth);
                }
                temporary.push(elemLeft);temporary.push(elemRight);
            }
            temporary.sort(function(a,b){return a>b?1:-1});
            this.createGuides(element,type,thisVal,temporary[0],temporary[temporary.length-1]);
        }

    };
    //生成参考线
    adsorb.createGuides = function(element,type,val,minval,maxval){
        var guides = $('<div class="wqdAdsorbGuides" style="position:absolute;z-index:9999; background-color:#ffa45b;"></div>'),
            thisWidth, thisHeight, thisLeft, thisTop;
        if(type == 1 || type == 2 || type == 3){
            thisWidth = 1;
            thisHeight = maxval - minval;
            thisLeft = val + "px";
            thisTop = minval;
        }else{
            thisWidth = maxval - minval;
            thisHeight = 1;
            thisLeft = minval;
            thisTop = val  + "px";
        }
        guides.css({"width":thisWidth,"height":thisHeight,"left":thisLeft,"top":thisTop});
        guides.appendTo(element.parent());
    };
    //数组去重
    adsorb.unique = function(array){
        var obj = {},
            newarray=[];
        for(var i = 0; i < array.length; i++){
            if (!obj[array[i]]){
                obj[array[i]] = true;
                newarray.push(array[i]);
            }
        }
        return newarray;
    };

    return adsorb;
});