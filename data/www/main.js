(()=>{"use strict";const e=160,o=16;let t=0,n=e;const r=()=>{t=innerWidth>innerHeight?1:2,n=Math.floor((1===t?innerWidth:innerHeight)/(1===t?innerHeight:innerWidth)*e)},a=()=>1===t?n:e,i=()=>1===t?e:n,d=c.getContext("2d"),h=(e,o,t,n,r,a)=>d.drawImage(e,n,0,o,t,r,a,o,t),s=[];onkeydown=e=>{87!==e.keyCode&&38!==e.keyCode||(s[1]=1),83!==e.keyCode&&40!==e.keyCode||(s[2]=1),65!==e.keyCode&&37!==e.keyCode||(s[3]=1),68!==e.keyCode&&39!==e.keyCode||(s[4]=1)},onkeyup=e=>{87!==e.keyCode&&38!==e.keyCode||(s[1]=0),83!==e.keyCode&&40!==e.keyCode||(s[2]=0),65!==e.keyCode&&37!==e.keyCode||(s[3]=0),68!==e.keyCode&&39!==e.keyCode||(s[4]=0)};const l=e=>new Promise((o=>{const t=new Image;t.onload=()=>o(t),t.src=e}));let f,y,k=0,C=0,M=0,g=0;const m=e=>{(e=>{k||(k=e),C=e-k,M=Math.floor(C/500)%2})(e),(()=>{const e=C-g>125;f=p,y=H,s[1]&&e&&(H--,g=C),s[2]&&e&&(H++,g=C),s[3]&&e&&(p--,g=C),s[4]&&e&&(p++,g=C);const o=W[2][H*W[0]+p][0];o>=11&&o<=14&&(p=f,H=y)})(),c.width=a(),c.height=i(),(()=>{const[e,t,n,r,c,d]=((e,t,n,r)=>{let a=Math.ceil(n/o),i=Math.ceil(r/o);a=a%2?a:a+1,i=i%2?i:i+1;const c=(a-1)/2,d=(i-1)/2;return[a,i,t-d,e-c,Math.floor(n/2-8-c*o),Math.floor(r/2-8-d*o)]})(p,H,a(),i()),[h,s,l]=W;let f=c,y=d;for(let a=n;a<n+t;a++)if(!(a<0||a>=s)){for(let t=r;t<r+e;t++){if(t<0||t>=h)continue;const e=l[a*h+t][0];F(e,f,y),f+=o}f=c,y+=o}})(),(()=>{const e="RANGER";for(let o=0;o<e.length;o++){const t=e.charCodeAt(o);q(t,8*o,0)}})(),I(0+M,Math.floor(a()/2-8),Math.floor(i()/2-8)),requestAnimationFrame(m)};let u,w,A,p=0,H=0,W=((e,o)=>{const t=[];for(let e=0;e<160;e++)for(let e=0;e<160;e++){const e=Math.random()<.75,o=e?3:11,n=e?8:4,r=Math.floor(Math.random()*n)+o;t.push([r])}return[160,160,t]})();const q=(e,o,t)=>h(u,8,8,8*(e-32),o,t),F=(e,t,n)=>h(w,o,o,e*o,t,n),I=(e,t,n)=>h(A,o,o,e*o,t,n);(async()=>{u=await l("f.gif"),A=await l("p.gif"),w=await l("t.gif"),p||H||(p=Math.floor(W[0]/2),H=Math.floor(W[1]/2)),onresize=r,r(),requestAnimationFrame(m)})().catch(console.error)})();