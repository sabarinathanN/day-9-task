//step-1 create an xmlhttp resquest
var request=new XMLHttpRequest();
// step-2 choose the data (ex:API url choosing)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step-3 creating path for client to server
request.send();
//step-4 string format into json format for redability
request.onload=function(){
    var data=JSON.parse(request.response);
    data.forEach(function(element){
        console.log("Name of the country",element.name)
        console.log("capital",element.capital)
        console.log("flag",element.flag)
    })
    
// for(var i=0;i<data.length;i++)
// {
// console.log(`flag:${data[i].flag}`);
// }
}