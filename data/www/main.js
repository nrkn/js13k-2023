(()=>{"use strict";const t=160;let e=0,i=t;const n=()=>{e=innerWidth>innerHeight?1:2,i=~~((1===e?innerWidth:innerHeight)/(1===e?innerHeight:innerWidth)*t)},r=c.getContext("2d"),o=n=>{c.width=1===e?i:t,c.height=1===e?t:i;for(let t=0;t<c.height;t++)for(let e=0;e<c.width;e++)r.fillStyle=(e+t)%2?"#fff":"#000",r.fillRect(e,t,1,1);for(let t=0;t<~~(c.height/8);t++)for(let e=0;e<~~(c.width/8/2);e++){const i=~~(h.width/8),n=32+~~(Math.random()*i);d(n,e,t)}requestAnimationFrame(o)};let h;const d=(t,e,i)=>{const n=8*(t-=32);r.drawImage(h,n,0,8,8,8*e,8*i,8,8)};l.onload=()=>{h=l.cloneNode(!0),onresize=n,n(),requestAnimationFrame(o)},l.src="f.gif"})();