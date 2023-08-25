(()=>{"use strict";const t=160,e=[[64,24],[[5,8,3,12,2,15,10,8,11,11,14,14,6,14,5,18,3,23,10,14,11,18,12,23],[4,8,3,12,2,16,9,8,10,12,14,15,5,14,4,18,3,23,9,14,11,18,12,23],[4,8,2,12,1,15,9,8,10,11,13,14,5,14,4,18,3,23,9,14,10,18,12,23],[5,8,3,12,1,15,10,8,11,11,13,14,6,14,4,18,3,23,10,14,11,18,12,23]]],o=[[180,33],[[7,18,8,20,11,23,11,18,10,20,8,23,7,25,5,27,2,31,12,25,13,27,14,31],[8,19,9,20,12,23,10,19,8,19,6,21,7,26,5,27,1,27,11,26,11,28,10,31],[7,18,9,20,12,22,6,18,6,21,10,23,9,25,10,27,5,27,11,25,12,27,11,31],[5,17,6,19,9,22,11,17,13,19,14,21,12,25,11,26,9,27,8,25,6,27,4,31],[4,17,5,19,7,22,10,17,12,18,13,21,12,26,12,28,13,31,8,26,6,28,3,31],[5,17,4,19,4,22,12,17,13,18,14,21,12,26,12,28,13,31,8,26,6,28,3,31],[5,18,3,19,2,22,11,18,13,19,15,22,11,26,10,28,10,31,8,28,6,27,3,27],[6,17,4,19,3,22,11,17,11,18,12,21,9,26,8,28,8,31,8,26,6,27,3,27],[5,17,4,19,4,22,11,17,11,18,12,21,8,25,7,28,6,31,12,25,13,27,14,31],[6,17,5,19,6,22,11,17,11,18,12,21,7,25,7,28,5,31,12,24,10,26,8,28]]],a=(t,e)=>({x:Math.round(t),y:Math.round(e)}),n=(t,e,o,a,n,i)=>Math.abs(t*(a-i)+o*(i-e)+n*(e-a)),i=(t,e,o,a)=>n(e.x,e.y,o.x,o.y,a.x,a.y)===n(t.x,t.y,o.x,o.y,a.x,a.y)+n(e.x,e.y,t.x,t.y,a.x,a.y)+n(e.x,e.y,o.x,o.y,t.x,t.y),r=(t,e,o)=>{t=a(t.x,t.y),e=a(e.x,e.y),o=a(o.x,o.y);const n=[],r=Math.min(t.x,e.x,o.x),h=Math.max(t.x,e.x,o.x),s=Math.min(t.y,e.y,o.y),l=Math.max(t.y,e.y,o.y);for(let a=r;a<=h;a++)for(let r=s;r<=l;r++)i({x:a,y:r},t,e,o)&&n.push({x:0|a,y:0|r});return n},h=(t,e,o,a)=>[...r(t,e,o),...r(t,o,a)],s=[...Array(256)].map(((t,e)=>e));s.sort((()=>Math.random()-.5)),s.push(...s);const l=(t,e,o,n)=>{t|=0,e|=0,n|=0;const i=[];for(let r=-(o|=0);r<=o;r++){let h=Math.round(n*Math.sqrt(1-r*r/(o*o)));for(let o=-h;o<=h;o++)(o===h||o===-h)&&Math.abs(h-o)<.5||i.push(a(t+r,e+o))}return i},d=c;d.width=t,d.height=t;const y=d.getContext("2d"),f=(e=innerWidth,o=innerHeight)=>{const a=e>o?o/t:e/t;d.width=Math.floor(e/a),d.height=Math.floor(o/a)};addEventListener("resize",(()=>f()));const x={startTime:0,lastTime:0,elapsedTime:0,deltaTime:0},m=[],M={type:2,x:0,y:0,image:void 0,anim:"idle",speed:0,acceleration:0,direction:1,intersects:1},g=t=>{"ArrowLeft"===t.key?(M.direction=-1,M.acceleration=.175):"ArrowRight"===t.key&&(M.direction=1,M.acceleration=-.175)},p=t=>{"ArrowLeft"!==t.key&&"ArrowRight"!==t.key||(M.acceleration=0)},u=t=>{let e;if(1===t.type||2===t.type){const o=t.image[t.anim];e=o.frames[o.frame]}else e=t.image;return e};let w=[];const S=t=>{x.startTime||(x.startTime=t,x.lastTime=t),x.elapsedTime=t-x.startTime,x.deltaTime=t-x.lastTime,x.lastTime=t,(t=>{(t=>{for(const t of m){if(1===t.type||2===t.type){const{elapsedTime:e}=x,o=t.image[t.anim],{duration:a,frames:n}=o,i=n.length,r=Math.floor(e/a*i)%i;o.frame=r}void 0!==t.speed&&void 0!==t.acceleration&&(t.speed+=t.acceleration,t.speed*=.95,t.x-=t.speed,Math.abs(t.speed)<.1?(t.speed=0,1!==t.type&&2!==t.type||(t.anim="idle")):1!==t.type&&2!==t.type||(t.anim="walk"))}})(),(()=>{w=[];for(let t=0;t<m.length;t++){const e=m[t];if(e.blocks||e.intersects)for(let o=0;o<m.length;o++){const a=m[o];if(t!==o&&(a.blocks||a.intersects)){const n=u(e),i=u(a),r=e.x,h=e.y,s=n.width,l=n.height,c=a.x,d=a.y,y=i.width,f=i.height;r<c+y&&r+s>c&&h<d+f&&h+l>d&&w.push([t,o])}}}})();for(let t=0;t<w.length;t++){const[e,o]=w[t],a=m[e];m[e].intersects&&m[o].blocks&&"number"==typeof a.speed&&(a.x+=a.speed,a.speed=0)}})(),(t=>{d.width=d.width;const e=d.width/2,o=d.height/2;for(const t of m){const a=u(t),n=t.moveSpeed?(1-t.moveSpeed)*M.x:0;let i,r=Math.floor(t.x+n-M.x-a.width/2+e);i=2===t.tiling?d.height-a.height:1===t.tiling?o-a.height/2+t.y:d.height-a.height-16+t.y,2===t.type&&(r=e-a.width/2,i=d.height-a.height-16);const h=(e,o)=>{y.save(),-1===t.direction?(y.translate(e+a.width,o),y.scale(-1,1),y.drawImage(a,0,0)):y.drawImage(a,e,o),y.restore()};if((t.tiling||r+a.width>0&&r<d.width)&&(h(r,i),t.tiling)){let t=r-a.width;for(;t+a.width>0;)h(t,i),t-=a.width;let e=r+a.width;for(;e<d.width;)h(e,i),e+=a.width}}y.fillStyle="white",y.font="10px monospace",y.fillText(`x: ${M.x.toFixed(2)}`,4,12),y.fillText(`speed: ${Math.abs(M.speed).toFixed(2)}`,4,24)})(),requestAnimationFrame(S)},v=(t,e,o,n,i)=>{const r=(o|=0)-(t|=0),h=(n|=0)-(e|=0),s=Math.atan2(h,r),l=i/2,c=t+Math.cos(s-Math.PI/2)*l,d=e+Math.sin(s-Math.PI/2)*l,y=t+Math.cos(s+Math.PI/2)*l,f=e+Math.sin(s+Math.PI/2)*l,x=o+Math.cos(s+Math.PI/2)*l,m=n+Math.sin(s+Math.PI/2)*l,M=o+Math.cos(s-Math.PI/2)*l,g=n+Math.sin(s-Math.PI/2)*l;return[a(y,f),a(c,d),a(M,g),a(x,m)]},b=(t=100,e=100,o="#2e6d35",a="#5b3138")=>{const n=3*Math.random()+5,i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d"),s=Math.floor(t/15),c=Math.floor(e/2),d=h({x:(t-s)/2,y:e-c},{x:(t+s)/2,y:e-c},{x:(t+s)/2,y:e},{x:(t-s)/2,y:e});r.fillStyle=a;for(const t of d)r.fillRect(t.x,t.y,1,1);const y=Math.floor(3*s/4),f=Math.floor(e/4);for(let i=0;i<n;i++){const n=Math.random()*Math.PI/2-Math.PI/4+Math.PI/2,i=t/2,s=e-c,d=i+f*Math.cos(n),x=s-f*Math.sin(n),m=v(i,s,d,x,y),M=h(...m);r.fillStyle=a;for(const t of M)r.fillRect(t.x,t.y,1,1);const g=l(d,x,2*y,y);r.fillStyle=o;for(const t of g)r.fillRect(t.x,t.y,1,1)}return i},R=[[255,0,0],[255,127,0],[255,255,0],[139,0,0],[139,69,0],[139,139,0],[0,255,0],[0,0,255],[138,43,226],[0,100,0],[0,0,139],[85,26,139]],T=(t,e,o=.5)=>{const[a,n,i]=t,[r,h,s]=e;return[Math.round(a+(r-a)*o),Math.round(n+(h-n)*o),Math.round(i+(s-i)*o)]},I=t=>{const[e,o,a]=t;return`#${e.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`},k=(t,e)=>{const o=document.createElement("canvas");return o.width=t,o.height=e,o},E=(t,e,o,a,n,i)=>{const r=((t,e,o,a)=>{t|=0,e|=0,o|=0,a|=0;const n=[],i=Math.abs(o-t),r=Math.abs(a-e),h=t<o?1:-1,s=e<a?1:-1;let l=i-r;for(;n.push(t,e),t!==o||e!==a;){const o=2*l;o>-r&&(l-=r,t+=h),o<i&&(l+=i,e+=s)}return n})(o,a,n,i);return[r,T(t,e)]},P=(t,e,o)=>{const a=t[2*e],n=t[2*e+1],i=t[2*o],r=t[2*o+1];return E(R[e],R[o],a,n,i,r)},C=(t,e)=>{t.fillStyle=I(e[1]);for(let o=0;o<e[0].length;o+=2){const a=e[0][o],n=e[0][o+1];t.fillRect(a,n,1,1)}},A=(t,e)=>{const o=R.length;for(let a=0;a<o;a++){const o=R[a],n=e[2*a],i=e[2*a+1];t.fillStyle=I(o),t.fillRect(n,i,1,1)}},L=(t,e,o,a,n)=>{a&&((t,e)=>{C(t,P(e,3,4)),C(t,P(e,4,5)),C(t,P(e,9,10)),C(t,P(e,10,11))})(t,e),o&&((t,e,o)=>{const a=((t,e)=>{const o=P(t,0,3),a=P(t,6,9),n=(t[0]+t[6])/2,i=(t[1]+t[7])/2,r=(t[12]+t[18])/2,h=(t[13]+t[19])/2,s=E(o[1],a[1],n,i,r,h);return[o,a,s,E(o[1],s[1],n,i,n,i-e)]})(e,o);for(const e of a)C(t,e)})(t,e,4),n&&((t,e)=>{C(t,P(e,0,1)),C(t,P(e,1,2)),C(t,P(e,6,7)),C(t,P(e,7,8))})(t,e)},$=(t,e=!0,o=!0,a=!0,n=!0,i=!0)=>{const r=t[0],h=t[1],[s,l]=r,c=h.length,d=s/c,y=[];for(let t=0;t<c;t++){const r=k(d,l),s=r.getContext("2d"),c=h[t];e&&L(s,c,a,n,i),o&&A(s,c),y.push(r)}return{frames:y,frame:0,duration:1e3}};(async()=>{const t=$(o),a=$(e),n=b(100,100),i=b(100,100,"#225027","#422429"),s=((t=32,e=64,o=4,a=2,n="#333333")=>{const i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d"),l=[],c=Math.floor(t/o);for(let t=0;t<o;t++){let o=t*c+c/2,a=o,n=0,i=e;o+=5*Math.random()-3,a+=5*Math.random()-3,n+=3*Math.random(),l.push({x1:o,y1:n,x2:o,y2:i})}const d=[],y=Math.floor(e/a);for(let e=0;e<a;e++){let o=0,a=t,n=e*y+y/2,i=n;o+=3*Math.random(),a-=3*Math.random(),n+=5*Math.random()-3,i+=5*Math.random()-3,d.push({x1:o,y1:n,x2:a,y2:i})}const f=t=>{const e=v(t.x1,t.y1,t.x2,t.y2,2),o=h(...e);for(const{x:t,y:e}of o)s.fillRect(t,e,1,1)};s.fillStyle=n;for(const t of l){f(t);const e=r({x:t.x1-4,y:t.y1-8},{x:t.x1+4,y:t.y1-8},{x:t.x1,y:t.y1});for(const{x:t,y:o}of e)s.fillRect(t,o,1,1)}for(const t of d)f(t);return i})(32,64),c=((t=800,e=300,o=10,a="#33d5fe",n="#caebfb",i=20,r=40,h=10,s=20)=>{const c=document.createElement("canvas");c.width=t,c.height=e;const d=c.getContext("2d");d.fillStyle=a,d.fillRect(0,0,c.width,c.height);for(let t=0;t<o;t++){const t=Math.random()*c.width,e=Math.random()*c.height/2,o=3+Math.floor(3*Math.random());for(let a=0;a<o;a++){const o=i+Math.random()*r,a=h+Math.random()*s,y=(Math.random()-.5)*r,f=(Math.random()-.5)*s,x=l(t+y,e+f,o,a);d.fillStyle=n,x.forEach((({x:t,y:e})=>{t=(t+c.width)%c.width,e=(e+c.height)%c.height,d.fillRect(t,e,1,1)}))}}return c})(800,300),d=((t=800,e=300,o="#a4b1bd",a="#628099",n="#1f65a1",i=.5,r=.4,s=.3)=>{const l=document.createElement("canvas");l.width=t,l.height=e;const c=l.getContext("2d"),d=(o,a,n)=>{const i=e*a;let r=i+(Math.random()*n-n/2);for(let s=1;s<t;s++){let t=Math.random()*n-n/2;r>i+a*e-n&&(t=-1*Math.abs(t));let d=r+t;d=Math.min(i+a*e,d),d=Math.max(.1*e,d);const y=h({x:s-1,y:e-r},{x:s,y:e-d},{x:s,y:e},{x:s-1,y:e});c.fillStyle=o,y.forEach((({x:t,y:e})=>{t=(t+l.width)%l.width,e=(e+l.height)%l.height,c.fillRect(t,e,1,1)})),r=d}};return d(o,i,15),d(a,r,10),d(n,s,5),l})(800,300),y=((t=64,e=16,o=8,a="#4f942d",n="#874718")=>{const i=document.createElement("canvas");i.width=t,i.height=e;const s=i.getContext("2d"),l=Math.floor(e/3),c=Math.floor(2*e/3),d=Math.floor(t/o),y=h({x:0,y:0},{x:t-1,y:0},{x:t-1,y:e-1},{x:0,y:e-1});s.fillStyle=n;for(const t of y)s.fillRect(t.x,t.y,1,1);const f=h({x:0,y:0},{x:t-1,y:0},{x:t-1,y:l},{x:0,y:l});s.fillStyle=a;for(const t of f)s.fillRect(t.x,t.y,1,1);for(let t=0;t<o;t++){const e=t*d,o=r({x:e,y:l},{x:e+d-1,y:l},{x:e+d/2,y:c});for(const t of o)s.fillRect(t.x,t.y,1,1)}return i})(64,16),x={idle:a,walk:t},u=(t=>{let e=0,o=0;for(const a of t)e+=a.width,o=Math.max(o,a.height);const a=document.createElement("canvas");a.width=e,a.height=o;const n=a.getContext("2d");let i=0;for(const e of t)n.drawImage(e,i,0),i+=e.width;return a})(t.frames);document.body.append(u),M.image=x,m.push({type:0,x:0,y:0,image:c,moveSpeed:.5,tiling:1},{type:0,x:0,y:0,image:d,moveSpeed:.8,tiling:1},{type:0,x:-500,y:0,image:s,blocks:1},{type:0,x:-200,y:0,image:n},{type:1,x:100,y:0,image:x,anim:"idle",direction:-1},{type:0,x:150,y:2,image:i,moveSpeed:.95},{type:0,x:200,y:0,image:n},{type:0,x:500,y:0,image:n},{type:0,x:800,y:0,image:s,blocks:1},{type:0,x:0,y:0,image:y,moveSpeed:1,tiling:2},M),addEventListener("keydown",g),addEventListener("keyup",p),f(),requestAnimationFrame(S)})().catch(console.error)})();