var express=require("express");
var gomeConfig=require("./gomeConfig.js");
var connectLog=require("../util/connectLog.js");
var router=express();
var year = new Date().getFullYear();
//基础配置信息
router.use(function(req,res,next){
	if(req.query.debug){
		req.cartconfig=gomeConfig.debug;
	}else{
		req.cartconfig=gomeConfig.normal
	}
	next();
});


function fnindex(req,res){
	res.render("scene.tpl",{
		name: 'aaa',
		id:req.params.id||'',
		num: req.params.num||'',
		year: year,
		config:req.cartconfig
	});
}

router.get("/",fnindex); 
module.exports=router;
