(()=>{"use strict";const e=160;let t=0,i=e;const n=()=>{t=innerWidth>innerHeight?1:2,i=~~((1===t?innerWidth:innerHeight)/(1===t?innerHeight:innerWidth)*e)},r=c.getContext("2d"),h=n=>{c.width=1===t?i:e,c.height=1===t?e:i;for(let e=0;e<c.height;e++)for(let t=0;t<c.width;t++)r.fillStyle=(t+e)%2?"#fff":"#000",r.fillRect(t,e,1,1);requestAnimationFrame(h)};requestAnimationFrame(h),onresize=n,n()})();