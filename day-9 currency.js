//step-1 create an xmlhttp resquest
var request=new XMLHttpRequest();
// step-2 choose the data (ex:API url choosing)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step-3 creating path for client to server
request.send();
//step-4 string format into json format for redability
request.onload=function(){
    var data=JSON.parse(request.response);
    for(let i=0;i<data.length;i++)
    {
        var iscur=data[i].currencies !== undefined;
        if(iscur){
            var cur=data[i].currencies;
            for(let i=0;i<iscur.length;i++){
                if(iscur[i].code=="USD"){
                    console.log("USD using countries",data[i].name)
                }
            }
        }
    }
    
}