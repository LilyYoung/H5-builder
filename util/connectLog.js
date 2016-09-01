function reqtpl(obj){
	var date=new Date();
	return obj.time+":"+obj.method+":"+(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+">"+date.getHours()+">"+date.getMinutes()+">"+date.getSeconds())+":"+obj.url;
}
function connectLog(req,res,next){
	if(req.cartconfig.log){
		var pt=Date.now();
		res.on("finish",function(){
			console.log(reqtpl({
				time:Date.now()-pt,
				method:req.method,
				url:req.originalUrl
			}));
		})
	}
	next();
}
module.exports=connectLog;