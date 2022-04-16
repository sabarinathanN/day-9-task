//step-1 create an xmlhttp resquest
var request=new XMLHttpRequest();
// step-2 choose the data (ex:API url choosing)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step-3 creating path for client to server
request.send();
//step-4 string format into json format for redability
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
var res=data.filter((ele)=>ele.region==="asia");
for(var i=0;i<res.length;i++){
    console.log(res[i].name)
}
}