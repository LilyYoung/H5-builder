var express=require("express");
var http=require("http");
var app=express();
var httpapp=http.createServer(app);
var swig=require("swig");
var U=require("./util/U.js");
var router=require("./router/scene.js");


//如果本地环境
if(process.env.GOMECARTFRONT==="dev"){
	var devconfig=require('./dev-cart/devconfig.js');
	var devcart=require('./dev-cart/gomeCartNative');
	devcart.gomeCartNative(app,devconfig.gomeCartNative);
	httpapp.listen(80,function(){
		console.log(U.formatLong(new Date-0)+"gome-cart-front app run on port 80");
	});
}else{
	httpapp.listen(8087,function(){
		console.log(U.formatLong(new Date-0)+"gome-cart-front app run on port 8087");
	});
}


app.set("view engine","tpl");// 指定模板文件的后缀名为tpl
app.engine("tpl",swig.renderFile);// 运行swig模块
app.use(router);
app.use(express.static(__dirname+"/static"));

app.all("/:site/api/*",function(req,res){
	res.json({success:false,errMsg:"接口404"});
});
app.use(function(req,res){
	res.redirect("/?status=404");
});