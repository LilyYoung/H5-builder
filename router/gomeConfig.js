var os=require("os");
var normal={
	cssServer:"http://css.gomein.net.cn",
	jsServer:"http://js.gomein.net.cn",
	imageServer:"http://app.gomein.net.cn",
	version:"2.1.1",
	cookieDomain:".gome.com.cn",
	domain: "http://gomebuy.gome.com.cn"
};

var debug={
	cssServer:"http://127.0.0.1",
	jsServer:"http://127.0.0.1",
	imageServer:"http://127.0.0.1",
	log:1,
	originResource:true,
	cookieDomain:".atguat.com.cn",
	domain: "http://127.0.0.1"
};



if(process.env.GOMECARTFRONT==="dev"){
	normal={
		cssServer:"",
		jsServer:"",
		imageServer:"http://app.atguat.com.cn",
		cookieDomain:".atguat.com.cn",
		log:1,
		originResource:false,
		debug:true,
		domain:"http://127.0.0.1"
	};
}
if(process.env.GOMECARTFRONT==="uat"){
	normal={
		cssServer:"http://css.atguat.com.cn",
		jsServer:"http://js.atguat.com.cn",
		imageServer:"http://app.atguat.com.cn",
		cookieDomain:".atguat.com.cn",
		version:"0.0.0",
		log:1,
		domain: "http://gomebuy.atguat.com.cn"

	};
}
if(process.env.GOMECARTFRONT==="pre"){
	normal={
		cssServer:"http://css.gomeprelive.com.cn",
		jsServer:"http://js.gomeprelive.com.cn",
		imageServer:"http://app.gomeprelive.com.cn",
		version:"1.1.1",
		cookieDomain:".gomeprelive.com.cn",
		domain: "http://gomebuy.gomeprelive.com.cn"
	};
}
module.exports={
	debug:debug,
	normal:normal
};
