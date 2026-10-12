(function(){const C=["Lakeside","Harbor","Summit","Prairie","Canyon","River"],M={NFL:["Hawks","Kings","Rams","Wolves","Bears","Falcons"],NBA:["Comets","Titans","Foxes","Rockets","Owls","Pilots"],MLB:["Sailors","Hornets","Miners","Herons","Giants","Otters"],NHL:["Blizzard","Wardens","Frost","Rangers","Pines","Storm"],NCAA:["Cardinals","Mustangs","Badgers","Tigers","Pioneers","Bison"]},
MX={NFL:[10,28],NBA:[95,30],MLB:[0,9],NHL:[0,6],NCAA:[14,30]},T=["1:00 PM","4:25 PM","7:30 PM"];
let lg="NFL",st="all",dt="";const $=s=>document.querySelector(s);
const iso=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function games(l){const r=[];for(let o=-3;o<=3;o++)for(let i=0;i<3;i++){const k=o+3+i*2,a=(k+1)%6,b=(k+2+i)%6,d=new Date();d.setDate(d.getDate()+o);
 const f=(s)=>MX[l][0]+((s*37+11)%MX[l][1]);let h=f(k+1),v=f(k+5);if(h===v)h++;
 r.push({d:iso(d),dl:d.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),h:C[a]+" "+M[l][a],a:C[b]+" "+M[l][b],hs:h,as:v,done:o<0,t:T[i]+" ET",v:"Demo Arena "+"ABC"[i]})}return r}
function stand(l){return C.map((c,i)=>{const w=(i*5+3)%12+4;return{n:c+" "+M[l][i],w,l:16-w}}).sort((x,y)=>y.w-x.w)}
function draw(){const g=games(lg).filter(x=>(st==="all"||(st==="done")===x.done)&&(!dt||x.d===dt));
 $("#gl").innerHTML=g.length?g.map(x=>'<tr><td>'+x.dl+'</td><td>'+x.a+'</td><td>'+(x.done?x.as+' – '+x.hs:'at')+'</td><td>'+x.h+'</td><td>'+(x.done?'Final':x.t)+'</td><td>'+x.v+'</td></tr>').join(""):'<tr><td colspan="6">No demonstration games match these filters.</td></tr>';
 $("#sd").innerHTML=stand(lg).map((x,i)=>'<tr><td>'+(i+1)+'</td><td>'+x.n+'</td><td>'+x.w+'</td><td>'+x.l+'</td></tr>').join("");$("#lt").textContent=(lg==="NCAA"?"College Sports":lg)+" demonstration standings"}
document.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{lg=b.dataset.l;document.querySelectorAll("[data-l]").forEach(x=>x.classList.toggle("on",x===b));draw()});
$("#st").onchange=e=>{st=e.target.value;draw()};$("#dt").onchange=e=>{dt=e.target.value;draw()};$("#cl").onclick=()=>{dt="";$("#dt").value="";draw()};draw()})();
