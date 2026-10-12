const popupLinks={primary:"",secondary:"",close:""};
(function(){const $=s=>document.querySelector(s);
const d=new Date();d.setDate(d.getDate()+5);d.setHours(19,30,0,0);
const ds=d.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});
const tz=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",timeZoneName:"short"}).formatToParts(d).find(p=>p.type==="timeZoneName").value;
$("#md").textContent=ds+" · 7:30 PM ET ("+tz.replace("EDT","Eastern Daylight Time").replace("EST","Eastern Standard Time")+")";
const ov=$("#ov");let seen=false;try{seen=sessionStorage.getItem("sp_pop")}catch(e){}
function open(){ov.classList.add("show");document.body.style.overflow="hidden";$("#pp").focus()}
function shut(){ov.classList.remove("show");document.body.style.overflow="";try{sessionStorage.setItem("sp_pop","1")}catch(e){}}
function go(u,fb){shut();if(u)location.href=u;else if(fb)location.href=fb}
$("#pp").onclick=()=>go(popupLinks.primary,"#overview");$("#ps").onclick=()=>go(popupLinks.secondary,"news.html");
$("#px").onclick=()=>go(popupLinks.close,"");$("#pd").onclick=shut;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&ov.classList.contains("show"))shut()});
ov.addEventListener("click",e=>{if(e.target===ov)shut()});
if(!seen)setTimeout(open,400)})();
