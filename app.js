const $=id=>document.getElementById(id),n=id=>{const e=$(id);return e?parseFloat(e.value):NaN},f=(x,d=2)=>isFinite(x)?x.toLocaleString("en-US",{minimumFractionDigits:d,maximumFractionDigits:d}):"–",set=(id,t)=>{const e=$(id);if(e)e.textContent=t};
function calc(){
 set("pr1",f(n("p1")/100*n("p2"),2).replace(/\.00$/,""));set("pr2",f(n("p3")/n("p4")*100,2).replace(/\.00$/,"")+"%");
 const P=n("l1"),r=n("l2")/1200,m=n("l3")*12,pay=r?P*r/(1-Math.pow(1+r,-m)):P/m;
 set("lr1","$"+f(pay));set("lr2","per month · total interest $"+f(pay*m-P));
 if($("b1")){let h=n("b1"),w=n("b2");if($("b0").value==="i"){h*=2.54;w*=0.45359237}const b=w/Math.pow(h/100,2);set("br1",f(b,1));set("br2",!isFinite(b)?"Enter height and weight":b<18.5?"Underweight":b<25?"Healthy range":b<30?"Overweight":"Obese range")}
 const tot=n("t1")*(1+n("t2")/100);set("tr1","$"+f(tot/Math.max(1,n("t3"))));set("tr2","each, total $"+f(tot));
 const dp=n("d1"),ds=dp*n("d2")/100;set("dr1","$"+f(dp-ds));set("dr2","final price, you save $"+f(ds));
 if($("a1")){const dob=new Date($("a1").value),now=new Date();if(!isNaN(dob)&&dob<=now){let y=now.getFullYear()-dob.getFullYear(),mo=now.getMonth()-dob.getMonth(),d=now.getDate()-dob.getDate();if(d<0){mo--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate()}if(mo<0){y--;mo+=12}set("ar1",y+" years");set("ar2",mo+" months, "+d+" days · "+Math.floor((now-dob)/864e5).toLocaleString("en-US")+" days in total")}else{set("ar1","–");set("ar2","Pick a valid date of birth")}}
 const S=n("s1"),Dp=n("s2"),sr=n("s3")/1200,sm=n("s4")*12,g=Math.pow(1+sr,sm),fv=sr?S*g+Dp*(g-1)/sr:S+Dp*sm;set("sr1","$"+f(fv,0));set("sr2","you deposit $"+f(S+Dp*sm,0)+", interest earns $"+f(fv-S-Dp*sm,0));
}
document.querySelectorAll("input,select").forEach(e=>e.addEventListener("input",calc));calc();