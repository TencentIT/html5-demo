const express = require("express");	
var app = express();

app.listen(3000);
app.use(express.static(__dirname+"/public"));


app.get("/list",(req,res)=>{
	var obj = [
		{"label":"东里","value":50},
		{"label":"西里","value":80},
		{"label":"南里","value":210},
		{"label":"地铁口","value":260},
		{"label":"东里1","value":350},
		{"label":"西里1","value":300},
		{"label":"南里1","value":160},
		{"label":"地铁口1","value":50},
		{"label":"东里2","value":360},
		{"label":"西里2","value":280},
		{"label":"南里2","value":410},
		{"label":"地铁口2","value":40}
	];
	res.send(obj);
})