var price= document.querySelector("#price_text");
var reset_id = document.querySelector("#reset_id");
var currency = ["USD", "GBP" ,"EUR"];
var data = [];
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
                                    if(XHR.readyState == 4 && XHR.status == 200)
			                       {
			                       // data
			                       data = Object.values(JSON.parse(XHR.responseText).bpi).map(v => v.rate);			 
			                       }
		                           }
XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
XHR.send();
function getRate(id) {
price.innerHTML = data[id];
}
reset_id.addEventListener("click",function()
{
	price.innerHTML="";
});
