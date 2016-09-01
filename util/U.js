function fromatDate(date1,yyyyMMdd){
    var month=date1.getMonth()+1
    ,date=date1.getDate()
    ,hours=date1.getHours()
    ,min=date1.getMinutes()
    ,sec=date1.getSeconds();

    return yyyyMMdd.replace(/yyyy/g,date1.getFullYear())
    .replace(/yy/g,String(date1.getFullYear()).substr(2,2))
    .replace(/MM/g,month>=10?month:"0"+month)
    .replace(/M\*/g,month)
    .replace(/dd/g,date>=10?date:"0"+date)
    .replace(/d\*/g,date)
    .replace(/hh/g,hours>=10?hours:"0"+hours)
    .replace(/h\*/g,hours)
    .replace(/m\*/g,min)
    .replace(/mm/g,min>=10?min:"0"+min)
    .replace(/ss/g,sec>=10?sec:"0"+sec)
    .replace(/s\*/g,sec)
}
 //日期格式化
function formatLong(time){
    return fromatDate(new Date(time),"yyyy-MM-dd hh:mm:ss");
}

module.exports={
	fromatDate:fromatDate
	,formatLong:formatLong
}