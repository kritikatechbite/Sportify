/* CONFIG: set these before launch */
const SITE={url:"",gaId:"",email:"",newsletterEndpoint:"",social:{}};
(function(){
const $=(s,r=document)=>r.querySelector(s);
if(window.lucide)lucide.createIcons();
if(SITE.url){const l=document.createElement("link");l.rel="canonical";l.href=SITE.url.replace(/\/$/,"")+location.pathname.replace(/index\.html$/,"");document.head.appendChild(l)}
const mb=$("#mb"),nv=$("#nav");mb.onclick=()=>{const o=nv.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
document.addEventListener("keydown",e=>{if(e.key==="Escape")nv.classList.remove("open")});
const top=$("#top");addEventListener("scroll",()=>top.style.display=scrollY>500?"block":"none");top.onclick=()=>scrollTo({top:0});
document.querySelectorAll(".yr").forEach(e=>e.textContent=new Date().getFullYear());
document.querySelectorAll(".sl").forEach(e=>{const k=e.dataset.k;if(SITE.social[k]){e.href=SITE.social[k];e.hidden=false}});
document.querySelectorAll("form.nl").forEach(f=>f.addEventListener("submit",async e=>{e.preventDefault();const i=f.querySelector("input"),m=f.querySelector(".msg");
 const set=(t,c)=>{m.textContent=t;m.className="msg "+c};
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(i.value.trim()))return set("Enter a valid email address.","err");
 if(!SITE.newsletterEndpoint)return set("Newsletter signup is not connected yet, so nothing was sent.","err");
 try{const r=await fetch(SITE.newsletterEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i.value.trim()})});r.ok?(set("You're subscribed.","ok"),f.reset()):set("Signup failed. Try again later.","err")}catch(x){set("Signup failed. Check your connection.","err")}}));
const cf=$("#cf");if(cf)cf.addEventListener("submit",e=>{e.preventDefault();const m=$("#cm"),v=n=>cf.elements[n].value.trim();
 const set=(t,c)=>{m.textContent=t;m.className="msg "+c};
 if(!v("name")||!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(v("email"))||v("message").length<10)return set("Please enter your name, a valid email and a message of at least 10 characters.","err");
 if(!SITE.email)return set("The contact form is not connected yet. Set SITE.email in assets/js/main.js.","err");
 location.href="mailto:"+SITE.email+"?subject="+encodeURIComponent(v("subject")||"Sportify inquiry")+"&body="+encodeURIComponent(v("message")+"\n\n"+v("name")+" <"+v("email")+">");set("Opening your email app. Send the message from there.","ok")});
function ga(){if(!SITE.gaId||window.gtag)return;const s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+SITE.gaId;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",SITE.gaId,{anonymize_ip:true})}
function bar(){const b=$("#ck");if(b)b.remove()}
window.spCookie={set(v){try{localStorage.setItem("sp_consent",v)}catch(e){}bar();if(v==="granted")ga();const s=$("#cs");if(s)s.textContent="Current choice: "+(v==="granted"?"analytics allowed":"analytics declined")},get(){try{return localStorage.getItem("sp_consent")}catch(e){return null}}};
const cur=spCookie.get();if(cur==="granted")ga();
if(!cur){const b=document.createElement("div");b.id="ck";b.setAttribute("role","region");b.setAttribute("aria-label","Cookie consent");b.innerHTML='<span>We use optional analytics cookies only with your consent. <a href="cookie-policy.html">Cookie Policy</a></span><span><button class="btn ghost" data-v="denied">Decline</button> <button class="btn" data-v="granted">Accept analytics</button></span>';document.body.appendChild(b);b.querySelectorAll("button").forEach(x=>x.onclick=()=>spCookie.set(x.dataset.v))}
const cs=$("#cs");if(cs&&cur)cs.textContent="Current choice: "+(cur==="granted"?"analytics allowed":"analytics declined");
})();
