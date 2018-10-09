const express = require("express")
const pool = require("./pool.js")

var app = express()

app.listen(3000)

app.use(express.static(__dirname+"/public"))

app.get("/product",(req,res)=>{
	var obj ={}
	var sql = "SELECT * FROM `products` WHERE 1";
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		obj = result;
		res.send(obj)
	})
})