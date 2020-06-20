function loadJsonFile(file,callback){
	var f=new XMLHttpRequest();
	f.overrideMimeType("application/json");
	f.open("GET",file,true);
	f.onreadystatechange = function(){
		if(f.readystate === 4 && f.status == "200")
		{
			callback(f.responseText);
		}	
	}
	f.send();
}
loadJsonFile("index.json",function(text){
	var data1=JSON.parse(text);
	console.log(data1);

})
var body=document.getElementById('root');
var ma=document.createElement('main');
ma.classList.add('main2')
body.appendChild(ma);