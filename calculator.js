
const express = require("express");
const bodyParser = require("body-parser")
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
  var Num1 = Number(req.body.n1);
  var Num2 =Number(req.body.n2);
  var result = Num1 + Num2;
  res.send("Your answer is " + result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height= parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("Your BMI is " + bmi);
});




app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
