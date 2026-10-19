import{n as $e,o as He,t as We,m as Ke}from"./perf.Bj8UVO8T.js";const jt=256,Pt=3,le=1,Re={C:2.5,Sw:3,A:2},Ze={C:.45,Sw:1.25,A:1.4},pe=["--color-ink","--color-ink-2","--color-art","--color-games","--color-paper-2","--color-research","--color-games-deep"],S=0,I=1,Ct=2,Le=3,ke=4,Je=5,Qe=6,Be=[.92,.62,.36,.17],oe=1,Se=5,ze=8,ta=13,Gt=18,Ce=19,ea=20,Ne=21,ne=22,aa=e=>e.c+8*(e.a??0)+32*(e.g??0)+1024*(e.o??0),q=Math.PI*2,xt=(e,t,o)=>Math.min(o,Math.max(t,e)),Qt=(e,t,o)=>{const u=xt((o-e)/(t-e),0,1);return u*u*(3-2*u)};function oa(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function na(e){const t=getComputedStyle(e),o=document.createElement("canvas");o.width=o.height=1;const u=o.getContext("2d",{willReadFrequently:!0}),n=new Float32Array(pe.length*3);return pe.forEach((s,d)=>{u.clearRect(0,0,1,1),u.fillStyle=t.getPropertyValue(s).trim()||"black",u.fillRect(0,0,1,1);const c=u.getImageData(0,0,1,1).data;n[d*3]=c[0]/255,n[d*3+1]=c[1]/255,n[d*3+2]=c[2]/255}),n}function ra(e,t,o,u){const n=1/Math.tan(e/2),s=1/(o-u);return new Float32Array([n/t,0,0,0,0,n,0,0,0,0,(u+o)*s,-1,0,0,2*u*o*s,0])}function ca(e,t){const o=new Float32Array(16);for(let u=0;u<4;u++)for(let n=0;n<4;n++){let s=0;for(let d=0;d<4;d++)s+=e[d*4+n]*t[u*4+d];o[u*4+n]=s}return o}const re=e=>{const t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},ce=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],de=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];class sa{constructor(t){this.rnd=t}prims=[];add(t,o,u,n){t>0&&o>0&&this.prims.push({w:t*o,meta:aa(u),gen:n})}line(t,o,u,n,s){const d=o[0]-t[0],c=o[1]-t[1],h=Math.hypot(d,c)||1e-6,p=-c/h,x=d/h;this.add(Math.hypot(d,c,o[2]-t[2])*u,n,s,(i,l,y)=>{const C=i(),T=(i()-.5)*u;l[y]=t[0]+d*C+p*T,l[y+1]=t[1]+c*C+x*T,l[y+2]=t[2]+(o[2]-t[2])*C})}ring(t,o,u,n,s,d,c,h,p){this.add((c-d)*u*n,h,p,(x,i,l)=>{const y=d+x()*(c-d),C=u+(x()-.5)*n;i[l]=t+C*Math.cos(y),i[l+1]=o+C*Math.sin(y),i[l+2]=s})}wall(t,o,u,n,s,d,c,h,p){this.add((c-d)*u*(s-n),h,p,(x,i,l)=>{const y=d+x()*(c-d);i[l]=t+u*Math.cos(y),i[l+1]=o+u*Math.sin(y),i[l+2]=n+x()*(s-n)})}sweep(t,o,u,n,s,d){this.add(q*.5*o*u,s,{...d,g:Se+t},(c,h,p)=>{h[p]=c(),h[p+1]=o+(c()-.5)*u,h[p+2]=n})}rect(t,o,u,n,s,d,c){this.add((u-t)*(n-o),d,c,(h,p,x)=>{p[x]=t+h()*(u-t),p[x+1]=o+h()*(n-o),p[x+2]=s})}frame(t,o,u,n,s,d,c,h){this.line([t,o,s],[u,o,s],d,c,h),this.line([u,o,s],[u,n,s],d,c,h),this.line([u,n,s],[t,n,s],d,c,h),this.line([t,n,s],[t,o,s],d,c,h)}walls(t,o,u,n,s,d,c,h){const p=(x,i,l,y)=>this.add(Math.hypot(l-x,y-i)*(d-s),c,h,(C,T,z)=>{const A=C();T[z]=x+(l-x)*A,T[z+1]=i+(y-i)*A,T[z+2]=s+C()*(d-s)});p(t,o,u,o),p(u,o,u,n),p(u,n,t,n),p(t,n,t,o)}glyphs(t,o,u,n,s,d,c,h){const p=this.rnd;for(let x=0;x<n;x++){let i=t;const l=t+u*(.55+p()*.45),y=o-x*s;for(;i<l;){const C=s*(.4+p()*1.6);this.rect(i,y-s*.22,Math.min(l,i+C),y+s*.22,d,c,h),i+=C+s*.45}}}text(t,o,u,n,s,d,c,h,p){const i=document.createElement("canvas"),l=i.getContext("2d",{willReadFrequently:!0});l.font=`700 64px ${o}`;const y=Math.ceil(l.measureText(t).width)+8;i.width=y,i.height=64*1.4,l.font=`700 64px ${o}`,l.fillStyle="black",l.textBaseline="alphabetic",l.fillText(t,4,64);const C=l.getImageData(0,0,i.width,i.height).data,T=[];for(let A=0;A<i.width*i.height;A++)C[A*4+3]>120&&T.push(A%i.width,A/i.width|0);if(!T.length)return;const z=Math.min(s/(64*.72),d/y);this.add(T.length/2*z*z,h,p,(A,M,X)=>{const j=A()*T.length/2|0;M[X]=u+(T[j*2]-4+A())*z,M[X+1]=n+(64-T[j*2+1]-A())*z,M[X+2]=c})}*emit(t,o,u){const n=this.rnd,s=this.prims.reduce((l,y)=>l+y.w,0),d=this.prims.map(l=>t*l.w/s),c=d.map(Math.floor);let h=t-c.reduce((l,y)=>l+y,0);const p=d.map((l,y)=>[l-Math.floor(l),y]).sort((l,y)=>y[0]-l[0]);for(let l=0;h>0;l=(l+1)%p.length,h--)c[p[l][1]]++;const x=new Float32Array(3);let i=0;for(let l=0;l<this.prims.length;l++){const y=this.prims[l];for(let C=0;C<c[l];C++,i++){y.gen(n,x,0);const T=u+i*4;o[T]=x[0],o[T+1]=x[1],o[T+2]=x[2],o[T+3]=y.meta,(i+1)%da===0&&(yield)}}for(let l=t-1;l>0;l--){const y=n()*(l+1)|0,C=u+l*4,T=u+y*4;for(let z=0;z<4;z++){const A=o[C+z];o[C+z]=o[T+z],o[T+z]=A}}}}function ia(e,t,o,u,n){e.add(n*u/(1-u),1,{c:I,a:2,g:Ne,o:3},(s,d,c)=>{d[c]=(s()-.5)*t*1.1,d[c+1]=(s()-.5)*o*1.1,d[c+2]=(s()-.3)*.5})}const Oe=e=>e.prims.reduce((t,o)=>t+o.w,0);function ua(e,t,o,u){const n=t/2,s=o/2,d=Math.min(t,o)*.07,c=.06;e.rect(-n,-s,n,s,0,.05,{c:I,a:3,o:3});const h=[[-n+d,-s],[n-d,-s],[n,-s+d],[n,s-d],[n-d,s],[-n+d,s],[-n,s-d],[-n,-s+d]];for(let _=0;_<h.length;_++){const v=h[_],b=h[(_+1)%h.length];e.line([v[0],v[1],c],[b[0],b[1],c],.012,1.6,{c:S,o:0})}e.walls(-n,-s,n,s,0,c,.35,{c:I,a:2,o:0}),e.frame(-n+.05,-s+.05,n-.05,s-.05,.015,.005,.9,{c:I,a:1,o:0}),e.rect(-n-.012,-s+d,-n+.026,s-d*2,c+.01,1.3,{c:S,o:1}),e.rect(-n*.35,-s-.012,n*.8,-s+.022,c+.01,1.3,{c:S,o:1}),e.rect(n-.02,s*.1,n+.01,s*.55,c+.01,1.1,{c:Ct,o:1}),e.rect(-n-.01,-s*.75,-n+.02,-s*.45,c+.02,1.1,{c:Ct,o:1});const p=t/o>=1.45,x=p?[[-t*.31,-o*.04,Math.min(t*.15,o*.3)],[0,-o*.04,Math.min(t*.15,o*.3)],[t*.31,-o*.04,Math.min(t*.13,o*.27)]]:[[-t*.15,-o*.02,Math.min(t*.27,o*.27)],[t*.3,o*.13,Math.min(t*.14,o*.15)],[t*.3,-o*.24,Math.min(t*.14,o*.15)]];x.forEach(([_,v,b],D)=>{u.gauges[D*2]=_,u.gauges[D*2+1]=v;const U=.05;e.wall(_,v,b,0,U,0,q,.55,{c:I,a:1,o:1}),e.ring(_,v,b,.011,U,0,q,1.6,{c:S,o:1}),e.ring(_,v,b*.52,.006,U+.01,0,q,1,{c:I,o:1});const H=48;for(let P=0;P<H;P++){const K=P/H*q,Z=P%6===0,lt=b*(Z?.84:.89),Y=b*.95;e.line([_+lt*Math.cos(K),v+lt*Math.sin(K),U],[_+Y*Math.cos(K),v+Y*Math.sin(K),U],Z?.008:.004,1.2,{c:S,a:Z?0:1,o:2})}const G=q*(.5+.12*D);e.ring(_,v,b*.7,b*.13,U+.05,0,G,.95,{c:S,g:oe+D,o:2}),e.wall(_,v,b*.765,U,U+.05,0,G,.6,{c:I,a:1,g:oe+D,o:2}),e.ring(_,v,b*.17,b*.07,U+.08,0,q,1.2,{c:S,o:2}),e.wall(_,v,b*.205,U,U+.08,0,q,.6,{c:I,a:1,o:2}),e.sweep(D,b*1.07,.014,U+.02,1.2,{c:D===2?Ct:I,a:D===2?0:1,o:2});for(let P=0;P<3;P++){const K=G*(.2+P*.3),Z=_+b*.7*Math.cos(K),lt=v+b*.7*Math.sin(K),Y=b*.05;e.rect(Z-Y,lt-Y,Z+Y,lt+Y,U+.065,1.2,{c:ke,g:oe+D,o:3})}});{const[_,v,b]=x[0];for(let D=0;D<3;D++)e.ring(_,v,b*.43,b*.05,.085,D/3*q,(D/3+.2)*q,1.3,{c:S,g:oe+3,o:2})}const i=p?5:4,l=Math.min(t*.075,.15),y=l*.46,C=l*.42,T=s-.11-y/2,z=-n+.11,A=y*.78,M=.035,X=.075;u.togTravel=l-A-(y-A);for(let _=0;_<i;_++){const v=z+_*(l+C),b=v+l,D=T-y/2,U=T+y/2;e.frame(v,D,b,U,M,.006,1.5,{c:S,g:ta+_,o:0}),e.walls(v,D,b,U,0,M,.7,{c:I,a:1,o:1});const H=v+(y-A)/2,G=T-A/2;e.rect(H,G,H+A,G+A,X,1.4,{c:S,g:ze+_,o:2}),e.walls(H,G,H+A,G+A,M,X,.7,{c:I,a:1,g:ze+_,o:2})}const j=p?t*.02:t*.12;e.rect(j,s-.16,j+t*.16,s-.09,.03,1,{c:Ct,o:2}),e.glyphs(j+.02,s-.125,t*.12,1,.022,.035,1,{c:ke,o:3});const V=n-t*(p?.2:.3),k=n-.08,E=s-.08,a=E-o*(p?.22:.13);e.frame(V,a,k,E,.03,.005,1.2,{c:S,o:0}),e.walls(V,a,k,E,0,.03,.4,{c:I,a:2,o:1}),e.rect(V,E-.035,V+(k-V)*.45,E,.032,1,{c:Ct,o:2}),e.glyphs(V+.02,E-.07,k-V-.04,p?5:3,.03,.03,.9,{c:I,o:3});const R=-n+.11,m=p?t*.12:n-.11,f=-s+.12,g=.045;u.bar[0]=R+.008,u.bar[1]=m-R-.016,e.frame(R,f-g/2,m,f+g/2,.03,.005,1.4,{c:S,o:0}),e.walls(R,f-g/2,m,f+g/2,0,.03,.5,{c:I,a:1,o:1}),e.add(m-R,g*.6,{c:S,g:ea,o:2},(_,v,b)=>{v[b]=_(),v[b+1]=f+(_()-.5)*g*.55,v[b+2]=.035});for(let _=0;_<=24;_++){const v=R+(m-R)*_/24;e.line([v,f-g/2-.012,.01],[v,f-g/2-(_%4?.025:.04),.01],.004,1.2,{c:I,o:3})}p&&e.glyphs(t*.18,f+.01,t*.22,2,.028,.02,.9,{c:I,a:1,o:3}),e.ring(n-.13,-s+.12,.02,.016,.04,0,q,1.6,{c:Le,o:2}),e.wall(n-.13,-s+.12,.028,0,.04,0,q,.6,{c:I,a:1,o:2})}const mt={W:1.7,D:1.2,floor:-.14,base:.07,peak:.44,hill:.13},me=(e,t)=>{const o=(e/(mt.W/2))**2,u=(t/(mt.D/2))**2;return o*o+u*u},_e=e=>.55+.16*Math.sin(q*e)+.05*Math.sin(q*2*e+1),Ue=e=>.28+.1*Math.sin(q*e+.5)+.04*Math.sin(q*3*e),ve=e=>e-Math.round(e);function zt(e,t){let o=.55*Math.sin(q*(e+.13))*Math.cos(q*(t+.2))+.32*Math.sin(q*(2*e+t)+1.3)+.12*Math.cos(q*(3*t-e)+.4)+.04*Math.sin(q*(4*e+3*t)+2.2);const u=ve(t-_e(e));o-=.85*Math.exp(-(u*u)/(.08*.08));const n=xt((o+1.9)/3,0,1);return .03+mt.peak*n*n*n}function fa(e,t){const{W:o,D:u,hill:n}=mt,s=o/2,d=u/2;t.map[0]=-s,t.map[1]=-d,t.map[2]=o,t.map[3]=u;const c=-s,h=-d,p=o,x=u,i=(m,f)=>Math.abs(ve(f-_e(m)))>.024&&Math.abs(ve(m-Ue(f)))>.016,l=.035,y=(m,f,g)=>e.add(p*x,f,g,(_,v,b)=>{for(let D=0;D<600;D++){const U=_(),H=_(),G=zt(U,H);if(G>n!==m||!i(U,H))continue;const P=G/l,K=P-Math.floor(P),Z=Math.min(K,1-K),lt=Math.round(P)%4===0;if(_()<Math.exp(-(Z*Z)/(lt?.012:.004))){v[b]=c+U*p,v[b+1]=h+H*x,v[b+2]=G;return}}v[b]=c,v[b+1]=h,v[b+2]=.03});y(!1,.55,{c:I,a:0,g:Gt,o:1}),y(!0,.6,{c:S,a:0,g:Gt,o:1});const C=.004,T=-.6,z=.5,A=.62;e.add(p*x,.7,{c:I,a:1,g:Gt,o:2},(m,f,g)=>{let _=0,v=0,b=0;for(let D=0;D<60;D++){if(_=m(),v=m(),b=zt(_,v),!i(_,v))continue;const U=(zt(_+C,v)-zt(_-C,v))/(2*C*p),H=(zt(_,v+C)-zt(_,v-C))/(2*C*x),G=(-U*T-H*z+A)/Math.sqrt(U*U+H*H+1);if(m()<xt(1.05-G,.08,1))break}f[g]=c+_*p,f[g+1]=h+v*x,f[g+2]=b}),e.add(p*.035,6.5,{c:Je,a:0,g:Gt,o:2},(m,f,g)=>{const _=m(),v=_e(_)+(m()-.5)*.026,b=v-Math.floor(v);f[g]=c+_*p,f[g+1]=h+b*x,f[g+2]=zt(_,b)+.006}),e.add(x*.02,14,{c:Qe,a:0,g:Gt,o:2},(m,f,g)=>{const _=m(),v=Ue(_)+(m()-.5)*.015,b=v-Math.floor(v);f[g]=c+b*p,f[g+1]=h+_*x,f[g+2]=zt(b,_)+.01});{const g=zt(.62,.3),_=.2,v=.1,b=.065,D=c+.62*p,U=h+.3*x,H=g+_,G={c:Ct,a:0,g:Gt,o:3};e.ring(D,U,.034,.012,g+.006,0,q,9,{...G,a:1}),e.add(.03,2,G,(P,K,Z)=>{K[Z]=D+(P()-.5)*.009,K[Z+1]=U+(P()-.5)*.007,K[Z+2]=g+P()*_}),e.add(.075,2,G,(P,K,Z)=>{const lt=1-Math.sqrt(P()),Y=(P()-.5)*(1-lt);K[Z]=D+lt*v,K[Z+1]=U,K[Z+2]=H-b/2+Y*b}),e.ring(D,U,.013,.026,H+.004,0,q,14,G)}const M=512,X=new Float32Array(M+1),j=new Float32Array(M+1),V=new Float32Array(M+1);for(let m=0;m<=M;m++){const f=m/M*q,g=Math.cos(f),_=Math.sin(f);X[m]=s*Math.sign(g)*Math.sqrt(Math.abs(g)),j[m]=d*Math.sign(_)*Math.sqrt(Math.abs(_)),m&&(V[m]=V[m-1]+Math.hypot(X[m]-X[m-1],j[m]-j[m-1]))}const k=V[M],E=(m,f,g)=>{const _=m()*k;let v=0,b=M;for(;b-v>1;){const U=v+b>>1;V[U]<_?v=U:b=U}const D=(_-V[v])/Math.max(1e-6,V[b]-V[v]);return f[g]=X[v]+(X[b]-X[v])*D,f[g+1]=j[v]+(j[b]-j[v])*D,Math.atan2(f[g+1]/d,f[g]/s)},a=(m,f,g,_,v)=>e.add(k*g,_,{...v,g:ne},(b,D,U)=>{const H=E(b,D,U);D[U+2]=m+f*Math.sin(H*5+m*9)+(b()-.5)*g});a(1,0,.012,9,{c:S,a:0,o:0}),a(.74,.03,.02,3.2,{c:I,a:1,o:1}),a(.5,.04,.02,3.2,{c:I,a:1,o:1}),a(.27,.03,.02,3.2,{c:I,a:1,o:1}),a(0,0,.012,5,{c:S,a:1,o:0}),e.add(k*.3,.6,{c:I,a:2,g:ne,o:2},(m,f,g)=>{E(m,f,g),f[g+2]=m()}),e.add(.9,.8,{c:I,a:3,o:3},(m,f,g)=>{for(let _=0;_<40;_++){const v=(m()-.5)*o*1.3+.05,b=(m()-.5)*u*1.35-.05,D=me(v,b),U=me(v-.05,b+.05);if(!(D<=1.02||U>1.9)&&m()<1-(U-1)/.9){f[g]=v,f[g+1]=b,f[g+2]=-.07-.005;return}}f[g]=s*1.05,f[g+1]=0,f[g+2]=-.07-.005});const R=Oe(e);e.add(R*.03/.97,1,{c:I,a:2,g:Ne,o:3},(m,f,g)=>{f[g]=(m()-.5)*o*1.3,f[g+1]=(m()-.5)*u*1.3,f[g+2]=m()*.6})}function la(e,t,o,u,n,s){const d=t/2,c=o/2,h=Math.min(t,o)*.11,p=-d+h,x=d-h,i=-c+h*1.25,l=c-h*.85;e.rect(-d,-c,d,i,.03,.12,{c:I,a:2,o:3}),e.rect(-d,l,d,c,.03,.12,{c:I,a:2,o:3}),e.rect(-d,i,p,l,.03,.12,{c:I,a:2,o:3}),e.rect(x,i,d,l,.03,.12,{c:I,a:2,o:3}),e.frame(-d,-c,d,c,.05,.012,1.6,{c:S,o:0}),e.walls(-d,-c,d,c,0,.05,.3,{c:I,a:2,o:0}),e.frame(p,i,x,l,.04,.009,1.7,{c:S,o:0}),e.walls(p,i,x,l,-.32,.04,.22,{c:I,a:1,o:1}),e.frame(p,i,x,l,-.32,.005,.9,{c:I,a:1,o:1});const y=Math.min(x-p,l-i)/9;e.add((x-p)*(l-i),.12,{c:I,a:1,o:2},(k,E,a)=>{const R=Math.round((p+k()*(x-p)-p)/y),m=Math.round((i+k()*(l-i)-i)/y);E[a]=Math.min(x,p+R*y)+(k()-.5)*.008,E[a+1]=Math.min(l,i+m*y)+(k()-.5)*.008,E[a+2]=-.32});const C=h*.45;for(const[k,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const a=k<0?-d+.04:d-.04,R=E<0?-c+.04:c-.04;e.line([a,R,.06],[a-k*C,R,.06],.01,1.6,{c:S,o:1}),e.line([a,R,.06],[a,R-E*C,.06],.01,1.6,{c:S,o:1})}const T=Math.min(x-p,l-i)*.21,z=T*.42,A=T*.17;u.objC[0]=(p+x)/2,u.objC[1]=(i+l)/2,u.objC[2]=-.32*.35;const M=k=>{const E=3*k,a=2*k,R=T+z*Math.cos(E);return[R*Math.cos(a),R*Math.sin(a),-z*Math.sin(E)]},X=(k,E,a,R)=>{const m=M(k),f=M(k+.001),g=re([f[0]-m[0],f[1]-m[1],f[2]-m[2]]),_=re(ce(g,[0,0,1])),v=ce(g,_);a[R]=m[0]+A*(Math.cos(E)*_[0]+Math.sin(E)*v[0]),a[R+1]=m[1]+A*(Math.cos(E)*_[1]+Math.sin(E)*v[1]),a[R+2]=m[2]+A*(Math.cos(E)*_[2]+Math.sin(E)*v[2])},j=q*(T+z)*2.2;e.add(j*A*q,1.1,{c:S,a:1,g:Ce,o:2},(k,E,a)=>X(k()*q,k()*q,E,a)),e.add(j*.01,1.4,{c:Ct,a:0,g:Ce,o:3},(k,E,a)=>{const R=k()*q;X(R,R*7+(k()-.5)*.4,E,a)});const V=Math.min(h*.55,.11);e.text(n,s,-d+h*.9,-c+(i+c-V)/2,V,t*.45,.055,1.6,{c:S,o:3}),e.rect(d-h-t*.14,-c+(i+c)/2-.018,d-h,-c+(i+c)/2+.018,.05,1.2,{c:Ct,o:2}),e.glyphs(-d+h,c-h*.42,t*.3,1,.026,.05,1,{c:I,o:3}),e.ring(d-h*.75,c-h*.42,.018,.01,.05,0,q,1.6,{c:Le,o:2})}const da=1024;function*ha(e,t,o,u,n,s,d,c,h){const p=new sa(oa(11+e*7));e===0?ua(p,t,o,h):e===1?fa(p,h):la(p,t,o,h,s,d),e!==1&&ia(p,t,o,.03,Oe(p));const x=e*n*jt*4;if(yield*p.emit(u,c,x),e===1)for(let i=0,l=x;i<u;i++,l+=4){const y=c[l+1],C=(c[l+3]>>5&31)===ne;c[l+1]=C?c[l+2]:c[l+2]+mt.floor,c[l+2]=-y}}function pa(e,t,o){const{C:u,Sw:n,A:s}=e.arc,d=e.arcT,c=1-Qt(u-.4,u+.4,d),h=Qt(u-.6,u+.5,d),p=u+n-.35+(t*.5+o*.3)*s,x=Qt(p,p+.4*s,d),i=Qt(u+n*.65,u+n+.2,d)*(1-x);return[c,h,x,i]}const Ie=`
  uniform highp sampler2D u_tgt;
  uniform int u_rows, u_shape;
  uniform float u_time;
  uniform vec4 u_rot;          // rotation angles for groups 1..4
  uniform vec4 u_gauge[3];     // cx, cy, sweep start, sweep length
  uniform float u_tog[5];
  uniform float u_togTravel;
  uniform vec4 u_map;          // slab rect on the ground plane: x0, z0, w, d
  uniform vec2 u_pan;          // sand drift (x, z)
  uniform vec3 u_objC;
  uniform mat3 u_objR;
  uniform vec3 u_bar;          // x0, length, level
  vec4 tgtRaw() { return texelFetch(u_tgt, ivec2(gl_VertexID & 255, u_shape * u_rows + (gl_VertexID >> 8)), 0); }
  int grp(int m) { return (m >> 5) & 31; }
  // the land's height at world (x, z) before the drift (mirror of sandZ in JS)
  float sandZ(vec2 q) {
    const float TAU = 6.2831853;
    float u = (q.x - u_map.x) / u_map.z, v = (-q.y - u_map.y) / u_map.w;
    float h = 0.55 * sin(TAU * (u + 0.13)) * cos(TAU * (v + 0.2)) + 0.32 * sin(TAU * (2.0 * u + v) + 1.3)
      + 0.12 * cos(TAU * (3.0 * v - u) + 0.4) + 0.04 * sin(TAU * (4.0 * u + 3.0 * v) + 2.2);
    float dv = v - (0.55 + 0.16 * sin(TAU * u) + 0.05 * sin(TAU * 2.0 * u + 1.0));
    dv -= floor(dv + 0.5);
    h -= 0.85 * exp(-(dv * dv) / 0.0064);
    float n = clamp((h + 1.9) / 3.0, 0.0, 1.0);
    return 0.03 + ${mt.peak.toFixed(3)} * n * n * n;
  }
  vec3 resolveT(vec4 t, float seed) {
    int g = grp(int(t.w));
    vec3 p = t.xyz;
    if (g >= 1 && g <= 4) {
      vec2 c = u_gauge[g == 4 ? 0 : g - 1].xy, d = p.xy - c;
      float s = sin(u_rot[g - 1]), k = cos(u_rot[g - 1]);
      p.xy = c + vec2(k * d.x - s * d.y, s * d.x + k * d.y);
    } else if (g >= 5 && g <= 7) {
      vec4 G = u_gauge[g - 5];
      float a = G.z + p.x * G.w;
      p = vec3(G.xy + p.y * vec2(cos(a), sin(a)), p.z);
    } else if (g >= 8 && g <= 12) p.x += u_tog[g - 8] * u_togTravel;
    else if (g == 18) p.xz = u_map.xy + mod(p.xz - u_map.xy + u_pan, u_map.zw);
    else if (g == 19) p = u_objC + u_objR * p;
    else if (g == 20) p.x = u_bar.x + p.x * u_bar.y * u_bar.z;
    else if (g == 21) p += vec3(sin(u_time * 0.23 + seed * 61.0), cos(u_time * 0.19 + seed * 37.0), sin(u_time * 0.17 + seed * 13.0)) * vec3(0.09, 0.07, 0.08);
    else if (g == 22) p.y = mix(${(mt.floor-mt.base).toFixed(3)}, ${mt.floor.toFixed(3)} + sandZ(p.xz - u_pan), p.y);
    return p;
  }
  uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
  float h1(uint v) { return float(pcg(v)) * (1.0 / 4294967295.0); }
  `,ma=`#version 300 es
  precision highp float; precision highp int;
  layout(location = 0) in vec4 a_pos;
  layout(location = 1) in vec4 a_vel;
  uniform ivec3 u_gdim; uniform vec3 u_gmin, u_gcell;
  out vec4 v_c;
  void main() {
    ivec3 c = ivec3(floor((a_pos.xyz - u_gmin) / u_gcell));
    gl_PointSize = 1.0;
    if (any(lessThan(c, ivec3(0))) || any(greaterThanEqual(c, u_gdim))) { gl_Position = vec4(2.0, 2.0, 0.0, 1.0); v_c = vec4(0.0); return; }
    vec2 px = vec2(float(c.x + c.z * u_gdim.x) + 0.5, float(c.y) + 0.5);
    gl_Position = vec4(px / vec2(float(u_gdim.x * u_gdim.z), float(u_gdim.y)) * 2.0 - 1.0, 0.0, 1.0);
    v_c = vec4(a_vel.xyz, 1.0);
  }`,_a=`#version 300 es
  precision highp float; in vec4 v_c; out vec4 o; void main() { o = v_c; }`,va=`#version 300 es
  precision highp float; precision highp int;
  layout(location = 0) in vec4 a_pos;   // xyz, seed
  layout(location = 1) in vec4 a_vel;   // xyz, excitement (from bursts)
  ${Ie}
  uniform float u_dt, u_arcT, u_snap, u_flockOn, u_detach, u_cruise, u_rho;
  uniform uint u_frame;
  uniform vec3 u_arc;                   // chaos, swarm, assembly durations
  uniform highp sampler2D u_grid;
  uniform ivec3 u_gdim; uniform vec3 u_gmin, u_gcell, u_cloud;
  uniform vec3 u_lead[4];
  uniform mat4 u_vp; uniform vec2 u_view;
  uniform vec3 u_camR, u_camU, u_camF;
  uniform vec4 u_ptr;                   // css px x, y, strength, radius
  uniform vec4 u_burst;                 // css px x, y, impulse, radius
  out vec4 v_pos; out vec4 v_vel;

  vec4 cellAt(ivec3 c) {
    if (any(lessThan(c, ivec3(0))) || any(greaterThanEqual(c, u_gdim))) return vec4(0.0);
    return texelFetch(u_grid, ivec2(c.x + c.z * u_gdim.x, c.y), 0);
  }
  vec4 grid(vec3 p) {
    vec3 g = (p - u_gmin) / u_gcell - 0.5;
    ivec3 c = ivec3(floor(g)); vec3 f = g - floor(g);
    vec4 r = vec4(0.0);
    for (int k = 0; k < 8; k++) {
      ivec3 o = ivec3(k & 1, (k >> 1) & 1, k >> 2);
      vec3 w = mix(1.0 - f, f, vec3(o));
      r += cellAt(c + o) * (w.x * w.y * w.z);
    }
    return r;
  }
  // divergence-free flow: curl of a vector potential built from drifting plane waves
  vec3 curl(vec3 p, float t) {
    vec3 k1 = vec3(1.7, 2.3, 1.1), k2 = vec3(-2.1, 1.3, 2.7), k3 = vec3(1.2, -1.9, 2.2);
    float c1 = cos(dot(k1, p) + t * 0.7), c2 = cos(dot(k2, p) - t * 0.5 + 1.7), c3 = cos(dot(k3, p) + t * 0.4 + 4.1);
    return vec3(k3.y * c3 - k2.z * c2, k1.z * c1 - k3.x * c3, k2.x * c2 - k1.y * c1);
  }
  vec3 rnd3(uint a) { return vec3(h1(a), h1(a ^ 0x9e3779b9u), h1(a ^ 0x85ebca6bu)) * 2.0 - 1.0; }

  void main() {
    float seed = a_pos.w;
    uint id = uint(gl_VertexID);
    vec4 tg = tgtRaw();
    int m = int(tg.w), g = grp(m);
    vec3 T = resolveT(tg, seed);
    if (u_snap > 0.5) { v_pos = vec4(T, seed); v_vel = vec4(0.0); return; }
    vec3 pos = a_pos.xyz, vel = a_vel.xyz;
    float e = a_vel.w;
    float dt = u_dt;

    // phase weights: chaos → swarm → (per particle, outlines first) assembly
    float order = float((m >> 10) & 3) / 3.0;
    float chaos = 1.0 - smoothstep(u_arc.x - 0.4, u_arc.x + 0.4, u_arcT);
    float swarm = smoothstep(u_arc.x - 0.6, u_arc.x + 0.5, u_arcT);
    float a0 = u_arc.x + u_arc.y - 0.35 + (order * 0.5 + seed * 0.3) * u_arc.z;
    float asmb = smoothstep(a0, a0 + 0.4 * u_arc.z, u_arcT);
    float pour = smoothstep(u_arc.x + u_arc.y * 0.65, u_arc.x + u_arc.y + 0.2, u_arcT) * (1.0 - asmb);

    // the sand drifts by wrapping; settled particles hop with their target instead of streaking across
    if (g == 18 && asmb > 0.999) {
      vec2 d = T.xz - pos.xz;
      if (abs(d.x) > u_map.z * 0.5) pos.x += sign(d.x) * u_map.z;
      if (abs(d.y) > u_map.w * 0.5) pos.z += sign(d.y) * u_map.w;
    }
    // now and then a settled particle wanders off and is recaptured
    float kSoft = 1.0;
    if (u_detach > 0.5 && g != 21) {
      float cyc = u_time / 6.0 + seed * 17.0, ph = fract(cyc);
      if (h1(id * 7919u + uint(floor(cyc))) < 0.0025 && ph < 0.4) {
        T += rnd3(id * 31u + uint(floor(cyc))) * vec3(0.16, 0.16, 0.22) * sin(3.14159 * ph / 0.4);
        kSoft = 0.12;
      }
    }

    vec3 acc = vec3(0.0);
    float drag = 0.3;

    // 1 · chaos: Brownian kicks + a slow curl flow, held loosely inside the cloud
    if (chaos > 0.001) {
      acc += chaos * (rnd3(id * 1664525u + u_frame * 22695477u) * 16.0 + curl(pos * 2.2, u_time) * 1.4);
      vec3 q = pos / u_cloud; float d = length(q);
      acc -= chaos * (q / max(d, 1e-3)) * max(0.0, d - 1.0) * 10.0;
      drag = mix(drag, 3.0, chaos);
    }

    // 2 · swarm: boids from the splatted grid (alignment, cohesion/separation), led by a few wanderers
    // burst grains fly free at first, then flock and home in as their excitement fades
    float eF = e * (1.0 - e) * 3.0;
    float fl = max(swarm * (1.0 - asmb), eF);
    if (fl > 0.001) {
      if (u_flockOn > 0.5) {
        // trilinear reads keep the field smooth, so flocks don't snap to the grid's cells
        vec3 h = u_gcell;
        vec4 s0 = grid(pos);
        vec4 xp = grid(pos + vec3(h.x, 0, 0)), xm = grid(pos - vec3(h.x, 0, 0));
        vec4 yp = grid(pos + vec3(0, h.y, 0)), ym = grid(pos - vec3(0, h.y, 0));
        vec4 zp = grid(pos + vec3(0, 0, h.z)), zm = grid(pos - vec3(0, 0, h.z));
        vec4 sum = s0 * 2.0 + xp + xm + yp + ym + zp + zm;
        vec3 meanV = sum.xyz / max(sum.w, 1.0);
        acc += fl * (meanV - vel) * 4.5;                                     // alignment
        vec3 grad = vec3(xp.w - xm.w, yp.w - ym.w, zp.w - zm.w) / (2.0 * h);
        float press = clamp((u_rho - s0.w) / u_rho, -3.0, 1.0);             // + cohesion · − separation
        acc += fl * grad / u_rho * press * 1.5;
      }
      // follow the nearest leader: the swarm splits into flocks that trade members as they pass
      vec3 L = u_lead[0];
      for (int k = 1; k < 4; k++) if (distance(pos, u_lead[k]) < distance(pos, L)) L = u_lead[k];
      float seekL = swarm * (1.0 - asmb) * (1.0 - pour * 0.7);
      vec3 toL = L - pos;
      acc += seekL * (normalize(toL + 1e-4) * u_cruise - vel) * 1.4;
      vec3 toT = T - pos;
      acc += (pour + eF * 0.6) * (normalize(toT + 1e-4) * u_cruise * clamp(length(toT) * 3.0, 0.3, 1.4) - vel) * 1.6;
      float sp = length(vel);                                              // cruise speed
      acc += fl * (vel / max(sp, 1e-4)) * (u_cruise - sp) * 1.5;
      acc += fl * curl(pos * 1.4, u_time * 0.6) * 0.15;
      drag = mix(drag, 0.2, fl);
    }

    // 3 · assembly + hold: a capped, slightly underdamped spring to the (live) target
    float ie = 1.0 - e;
    float sw = asmb * ie * ie * ie * kSoft;
    if (sw > 0.0) {
      vec3 d = T - pos; float dist = length(d);
      float k = mix(30.0, 170.0, asmb);
      acc += sw * ((d / max(dist, 1e-5)) * min(dist * k, 70.0) - vel * 2.0 * 0.42 * sqrt(k));
    }

    // pointer: a soft dent that pushes grains away from the cursor and into the panel
    vec4 cp = u_vp * vec4(pos, 1.0);
    vec2 sp2 = vec2(cp.x / cp.w * 0.5 + 0.5, 0.5 - cp.y / cp.w * 0.5) * u_view;
    if (u_ptr.z > 0.0) {
      vec2 d = sp2 - u_ptr.xy; float r = length(d);
      if (r < u_ptr.w) {
        float f = 1.0 - r / u_ptr.w; f *= f;
        vec2 dir = d / (r + 0.5);
        acc += ((u_camR * dir.x - u_camU * dir.y) * 26.0 + u_camF * 22.0) * f * u_ptr.z;
      }
    }
    // tap burst: blow grains off towards the camera; their excitement makes them flock back
    if (u_burst.z > 0.0) {
      vec2 d = sp2 - u_burst.xy; float r = length(d);
      if (r < u_burst.w) {
        float f = sqrt(1.0 - r / u_burst.w);
        vec2 dir = d / (r + 0.5);
        float j = 0.4 + 0.9 * h1(id + u_frame);
        vel += ((u_camR * dir.x - u_camU * dir.y) * 0.7 - u_camF * 0.9 + rnd3(id ^ u_frame) * 0.6) * u_burst.z * f * j;
        e = max(e, f * 0.95);
      }
    }

    vel += acc * dt;
    vel *= exp(-drag * dt);
    float spd = length(vel); if (spd > 6.0) vel *= 6.0 / spd;
    pos += vel * dt;
    e *= exp(-0.55 * dt); if (e < 0.01) e = 0.0;
    v_pos = vec4(pos, seed);
    v_vel = vec4(vel, e);
  }`,wa=`#version 300 es
  precision mediump float; out vec4 o; void main() { o = vec4(0.0); }`,xa=`#version 300 es
  precision highp float; precision highp int;
  layout(location = 0) in vec4 a_pos;
  layout(location = 1) in vec4 a_vel;
  ${Ie}
  uniform mat4 u_vp;
  uniform vec2 u_px;           // canvas size, device px
  uniform float u_psize, u_jit, u_dRef, u_alpha;
  uniform vec3 u_col[7];
  out vec4 v_c;
  void main() {
    vec4 t = tgtRaw();
    int m = int(t.w), ci = m & 7, al = (m >> 3) & 3, g = grp(m);
    vec3 c = u_col[ci];
    float a = al == 0 ? 0.92 : al == 1 ? 0.62 : al == 2 ? 0.36 : 0.17;
    if (g >= 8 && g <= 12) c = mix(c, u_col[2], u_tog[g - 8]);                    // knob lights coral when on
    else if (g >= 13 && g <= 17) { float v = u_tog[g - 13]; c = mix(u_col[1], u_col[2], v); a *= mix(0.6, 1.0, v); }
    else if (g == 18) {
      // only the sand inside the slab's rounded footprint shows (this also hides the drift's wrap seam)
      vec2 l = resolveT(t, a_pos.w).xz / (u_map.zw * 0.5);
      vec2 l2 = l * l; float se = dot(l2, l2);
      a *= 1.0 - smoothstep(0.86, 1.0, se);
    }
    vec4 cp = u_vp * vec4(a_pos.xyz, 1.0);
    float near = u_dRef / cp.w;                                                   // >1 nearer the camera
    gl_PointSize = clamp(u_psize * near * near, 1.0, 2.0);
    a *= clamp(0.55 + 0.45 * near * near, 0.4, 1.2) * u_alpha;
    if (u_jit > 0.0) {                                                            // the nervous shake
      uint h = pcg(uint(gl_VertexID) * 9781u + uint(u_time * 24.0));
      vec2 j = vec2(float(h & 65535u), float(h >> 16)) / 65535.0 - 0.5;
      cp.xy += j * u_jit * 2.0 / u_px * cp.w;
    }
    gl_Position = cp;
    v_c = vec4(c * a, a);
  }`,ya=`#version 300 es
  precision mediump float; in vec4 v_c; out vec4 o; void main() { o = v_c; }`;function De(e,t,o){const u=e.createShader(t);if(e.shaderSource(u,o),e.compileShader(u),!e.getShaderParameter(u,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(u)||"compile");return u}function he(e,t,o,u){const n=e.createProgram(),s=De(e,e.VERTEX_SHADER,t),d=De(e,e.FRAGMENT_SHADER,o);if(e.attachShader(n,s),e.attachShader(n,d),u&&e.transformFeedbackVaryings(n,u,e.INTERLEAVED_ATTRIBS),e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(n)||"link");return e.deleteShader(s),e.deleteShader(d),n}function Pe(e,t,o){let u=0,n=0,s=0;do u=Math.random()*2-1,n=Math.random()*2-1,s=Math.random()*2-1;while(u*u+n*n+s*s>1);t[o]=u*e.cloud[0],t[o+1]=n*e.cloud[1],t[o+2]=s*e.cloud[2]}function ga(e,t,o){let u,n,s;try{u=he(t,va,wa,["v_pos","v_vel"]),n=he(t,xa,ya),s=he(t,ma,_a)}catch(f){return console.warn("[particles] shader setup failed, using 2D",f),null}const d=f=>new Proxy({},{get:(g,_)=>_ in g?g[_]:g[_]=t.getUniformLocation(f,_)??t.getUniformLocation(f,_+"[0]")}),c=d(u),h=d(n),p=d(s),x=new Float32Array(o.nMax*8);for(let f=0;f<o.nMax;f++)Pe(o,x,f*8),x[f*8+3]=Math.random();const i=[t.createBuffer(),t.createBuffer()],l=[t.createVertexArray(),t.createVertexArray()];for(let f=0;f<2;f++)t.bindVertexArray(l[f]),t.bindBuffer(t.ARRAY_BUFFER,i[f]),t.bufferData(t.ARRAY_BUFFER,x,t.DYNAMIC_COPY),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,4,t.FLOAT,!1,32,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,4,t.FLOAT,!1,32,16);t.bindVertexArray(null),t.bindBuffer(t.ARRAY_BUFFER,null);const y=t.createTransformFeedback(),C=t.createTexture();t.bindTexture(t.TEXTURE_2D,C);for(const[f,g]of[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]])t.texParameteri(t.TEXTURE_2D,f,g);t.texStorage2D(t.TEXTURE_2D,1,t.RGBA32F,jt,o.rows*Pt);const T=t.getExtension("EXT_color_buffer_float"),z=t.getExtension("EXT_float_blend"),A=T?z?t.RGBA32F:t.RGBA16F:0;let M=null,X=null,j=0,V=0;function k(){A&&(j=o.gdim[0]*o.gdim[2],V=o.gdim[1],M&&t.deleteTexture(M),M=t.createTexture(),t.bindTexture(t.TEXTURE_2D,M),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texStorage2D(t.TEXTURE_2D,1,A,j,V),X=X||t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,X),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,M,0),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE&&(t.deleteTexture(M),M=null),t.bindFramebuffer(t.FRAMEBUFFER,null))}let E=0;function a(f){t.uniform1i(f.u_tgt,0),t.uniform1i(f.u_rows,o.rows),t.uniform1i(f.u_shape,o.shape),t.uniform1f(f.u_time,o.t),t.uniform4fv(f.u_rot,o.rot),t.uniform4fv(f.u_gauge,o.gauge),t.uniform1fv(f.u_tog,o.tog),t.uniform1f(f.u_togTravel,o.info.togTravel),t.uniform4fv(f.u_map,o.info.map),t.uniform2fv(f.u_pan,o.pan),t.uniform3fv(f.u_objC,o.info.objC),t.uniformMatrix3fv(f.u_objR,!1,o.objR),t.uniform3fv(f.u_bar,o.bar),t.uniformMatrix4fv(f.u_vp,!1,o.vp)}const R=f=>{t.uniform3i(f.u_gdim,o.gdim[0],o.gdim[1],o.gdim[2]),t.uniform3fv(f.u_gmin,o.gmin),t.uniform3fv(f.u_gcell,o.gcell)};let m=0;return{get grid(){return!!M},resize(){e.width=Math.round(o.W*o.dpr),e.height=Math.round(o.H*o.dpr),k()},upload(f){t.bindTexture(t.TEXTURE_2D,C),t.texSubImage2D(t.TEXTURE_2D,0,0,f*o.rows,jt,o.rows,t.RGBA,t.FLOAT,o.targets,f*o.rows*jt*4)},frame(f,g){if(t.isContextLost())return;m=m+1>>>0;const _=1-E,v=!g&&o.flockOn>0&&!!M;v&&(t.bindFramebuffer(t.FRAMEBUFFER,X),t.viewport(0,0,j,V),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE),t.useProgram(s),R(p),t.bindVertexArray(l[E]),t.drawArrays(t.POINTS,0,o.n),t.bindFramebuffer(t.FRAMEBUFFER,null)),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,C),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,M),t.useProgram(u),a(c),R(c),t.uniform1i(c.u_grid,1),t.uniform1f(c.u_dt,f),t.uniform1f(c.u_arcT,o.arcT),t.uniform3f(c.u_arc,o.arc.C,o.arc.Sw,o.arc.A),t.uniform1f(c.u_snap,g?1:0),t.uniform1f(c.u_flockOn,v?1:0),t.uniform1f(c.u_detach,o.detach),t.uniform1f(c.u_cruise,o.cruise),t.uniform1f(c.u_rho,o.rho),t.uniform1ui(c.u_frame,m),t.uniform3fv(c.u_cloud,o.cloud),t.uniform3fv(c.u_lead,o.lead),t.uniform2f(c.u_view,o.W,o.H),t.uniform3fv(c.u_camR,o.camR),t.uniform3fv(c.u_camU,o.camU),t.uniform3fv(c.u_camF,o.camF),t.uniform4fv(c.u_ptr,o.ptr),t.uniform4fv(c.u_burst,o.burst),t.bindVertexArray(l[E]),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,y),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,i[_]),t.enable(t.RASTERIZER_DISCARD),t.beginTransformFeedback(t.POINTS),t.drawArrays(t.POINTS,0,o.n),t.endTransformFeedback(),t.disable(t.RASTERIZER_DISCARD),t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER,0,null),t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null),t.viewport(0,0,e.width,e.height),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.useProgram(n),a(h),t.uniform2f(h.u_px,e.width,e.height),t.uniform1f(h.u_psize,o.psize),t.uniform1f(h.u_jit,o.jitter),t.uniform1f(h.u_dRef,o.dRef),t.uniform1f(h.u_alpha,1),t.uniform3fv(h.u_col,o.colors),t.bindVertexArray(l[_]),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.POINTS,0,o.n),t.bindVertexArray(null),E=_},destroy(){t.deleteBuffer(i[0]),t.deleteBuffer(i[1]),t.deleteVertexArray(l[0]),t.deleteVertexArray(l[1]),t.deleteTransformFeedback(y),t.deleteTexture(C),M&&t.deleteTexture(M),X&&t.deleteFramebuffer(X),t.deleteProgram(u),t.deleteProgram(n),t.deleteProgram(s),t.getExtension("WEBGL_lose_context")?.loseContext()}}}function Ma(e,t,o,u){const n=(e.shape*e.rows*jt+t)*4,s=e.targets,d=s[n+3]|0,c=d>>5&31;let h=s[n],p=s[n+1],x=s[n+2];if(c>=1&&c<=4){const i=c===4?0:c-1,l=e.gauge[i*4],y=e.gauge[i*4+1],C=e.rot[c-1],T=h-l,z=p-y,A=Math.sin(C),M=Math.cos(C);h=l+M*T-A*z,p=y+A*T+M*z}else if(c>=5&&c<=7){const i=(c-5)*4,l=e.gauge[i+2]+h*e.gauge[i+3],y=p;h=e.gauge[i]+y*Math.cos(l),p=e.gauge[i+1]+y*Math.sin(l)}else if(c>=8&&c<=12)h+=e.tog[c-8]*e.info.togTravel;else if(c===18){const i=e.info.map;h=i[0]+((h-i[0]+e.pan[0])%i[2]+i[2])%i[2],x=i[1]+((x-i[1]+e.pan[1])%i[3]+i[3])%i[3]}else if(c===19){const i=e.objR,l=e.info.objC,y=i[0]*h+i[3]*p+i[6]*x,C=i[1]*h+i[4]*p+i[7]*x,T=i[2]*h+i[5]*p+i[8]*x;h=l[0]+y,p=l[1]+C,x=l[2]+T}else if(c===20)h=e.bar[0]+h*e.bar[1]*e.bar[2];else if(c===ne){const i=e.info.map,l=(h-e.pan[0]-i[0])/i[2],y=(-(x-e.pan[1])-i[1])/i[3];p=mt.floor-mt.base+p*(mt.base+zt(l,y))}else c===21&&(h+=Math.sin(e.t*.23+o*61)*.09,p+=Math.cos(e.t*.19+o*37)*.07,x+=Math.sin(e.t*.17+o*13)*.08);u[0]=h,u[1]=p,u[2]=x,u[3]=d}function ba(e,t){const o=e.getContext("2d");if(!o)return null;const u=t.nMax,n=new Float32Array(u*3),s=new Float32Array(u*3),d=new Float32Array(u),c=new Float32Array(u);for(let T=0;T<u;T++)Pe(t,n,T*3),c[T]=Math.random();const h=[14,10,5],p=new Float32Array(h[0]*h[1]*h[2]),x=new Float32Array(p.length*3),i=new Float32Array(4);let l=[];const y=(T,z,A)=>{const M=Math.floor((T-t.gmin[0])/(t.gcell[0]*t.gdim[0]/h[0])),X=Math.floor((z-t.gmin[1])/(t.gcell[1]*t.gdim[1]/h[1])),j=Math.floor((A-t.gmin[2])/(t.gcell[2]*t.gdim[2]/h[2]));return[M,X,j]},C=(T,z,A)=>T<0||z<0||A<0||T>=h[0]||z>=h[1]||A>=h[2]?-1:T+h[0]*(z+h[1]*A);return{grid:!0,resize(){e.width=Math.round(t.W*t.dpr),e.height=Math.round(t.H*t.dpr),l=[];for(let T=0;T<pe.length;T++)for(let z=0;z<4;z++){const A=T*3;l.push(`rgba(${Math.round(t.colors[A]*255)},${Math.round(t.colors[A+1]*255)},${Math.round(t.colors[A+2]*255)},${Be[z]})`)}},upload(){},frame(T,z){const A=t.n,M=t.vp,X=!z&&t.flockOn>0;if(X){p.fill(0),x.fill(0);for(let k=0;k<A;k++){const[E,a,R]=y(n[k*3],n[k*3+1],n[k*3+2]),m=C(E,a,R);m<0||(p[m]++,x[m*3]+=s[k*3],x[m*3+1]+=s[k*3+1],x[m*3+2]+=s[k*3+2])}}const j=Math.max(1,A/p.length*4);o.setTransform(t.dpr,0,0,t.dpr,0,0),o.clearRect(0,0,t.W,t.H);const V=1.5;for(let k=0;k<A;k++){const E=k*3,a=c[k];Ma(t,k,a,i);const R=i[3]|0,m=R>>5&31;if(z)n[E]=i[0],n[E+1]=i[1],n[E+2]=i[2],s[E]=s[E+1]=s[E+2]=0;else{const[P,K,Z,lt]=pa(t,(R>>10&3)/3,a);let Y=n[E],_t=n[E+1],st=n[E+2],dt=s[E],it=s[E+1],ht=s[E+2],vt=d[k];if(m===18&&Z>.999){const W=t.info.map;Math.abs(i[0]-Y)>W[2]/2&&(Y+=Math.sign(i[0]-Y)*W[2]),Math.abs(i[2]-st)>W[3]/2&&(st+=Math.sign(i[2]-st)*W[3])}let yt=0,wt=0,gt=0,qt=.3;if(P>.001){yt+=P*(Math.random()*2-1)*16,wt+=P*(Math.random()*2-1)*16,gt+=P*(Math.random()*2-1)*16;const W=Y/t.cloud[0],at=_t/t.cloud[1],Q=st/t.cloud[2],B=Math.hypot(W,at,Q),tt=P*Math.max(0,B-1)*10/Math.max(B,.001);yt-=W*tt,wt-=at*tt,gt-=Q*tt,qt+=(3-qt)*P}const Tt=vt*(1-vt)*3,Et=Math.max(K*(1-Z),Tt);if(Et>.001){if(X){const[ct,Mt,Nt]=y(Y,_t,st);let Ft=0,Ot=0,Xt=0,Rt=0;const Kt=C(ct,Mt,Nt),Zt=Kt<0?0:p[Kt],Jt=[[0,0,0],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],bt=[0,0,0,0,0,0,0];Jt.forEach(([ee,se,kt],ae)=>{const Ut=C(ct+ee,Mt+se,Nt+kt);Ut<0||(bt[ae]=p[Ut],Ft+=x[Ut*3],Ot+=x[Ut*3+1],Xt+=x[Ut*3+2],Rt+=p[Ut])}),Rt>0&&(yt+=Et*(Ft/Rt-dt)*4,wt+=Et*(Ot/Rt-it)*4,gt+=Et*(Xt/Rt-ht)*4);const Vt=xt((j-Zt)/j,-3,1)*.9*Et/j,It=t.gcell[0]*t.gdim[0]/h[0];yt+=(bt[1]-bt[2])/(2*It)*Vt,wt+=(bt[3]-bt[4])/(2*It)*Vt,gt+=(bt[5]-bt[6])/(2*It)*Vt}let W=0,at=1e9;for(let ct=0;ct<4;ct++){const Mt=Math.hypot(t.lead[ct*3]-Y,t.lead[ct*3+1]-_t,t.lead[ct*3+2]-st);Mt<at&&(at=Mt,W=ct*3)}const Q=K*(1-Z)*(1-lt*.7);let B=t.lead[W]-Y,tt=t.lead[W+1]-_t,rt=t.lead[W+2]-st,$=Math.hypot(B,tt,rt)||1;yt+=Q*(B/$*t.cruise-dt)*1.1,wt+=Q*(tt/$*t.cruise-it)*1.1,gt+=Q*(rt/$*t.cruise-ht)*1.1,B=i[0]-Y,tt=i[1]-_t,rt=i[2]-st,$=Math.hypot(B,tt,rt)||1;const At=lt+Tt*.6,Ht=t.cruise*xt($*3,.3,1.4);yt+=At*(B/$*Ht-dt)*1.6,wt+=At*(tt/$*Ht-it)*1.6,gt+=At*(rt/$*Ht-ht)*1.6;const te=Math.hypot(dt,it,ht)||1e-4,Wt=Et*(t.cruise-te)*1.5/te;yt+=dt*Wt,wt+=it*Wt,gt+=ht*Wt,qt+=(.2-qt)*Et}const F=Z*(1-vt)**3;if(F>0){const W=i[0]-Y,at=i[1]-_t,Q=i[2]-st,B=Math.hypot(W,at,Q)||1e-5,tt=30+140*Z,rt=Math.min(B*tt,70)/B,$=.84*Math.sqrt(tt);yt+=F*(W*rt-dt*$),wt+=F*(at*rt-it*$),gt+=F*(Q*rt-ht*$)}const Lt=M[3]*Y+M[7]*_t+M[11]*st+M[15],Bt=((M[0]*Y+M[4]*_t+M[8]*st+M[12])/Lt*.5+.5)*t.W,St=(.5-(M[1]*Y+M[5]*_t+M[9]*st+M[13])/Lt*.5)*t.H;if(t.ptr[2]>0){const W=Bt-t.ptr[0],at=St-t.ptr[1],Q=Math.hypot(W,at);if(Q<t.ptr[3]){const B=(1-Q/t.ptr[3])**2*t.ptr[2],tt=W/(Q+.5),rt=at/(Q+.5);for(let $=0;$<3;$++){const At=(t.camR[$]*tt-t.camU[$]*rt)*26+t.camF[$]*22;$===0?yt+=At*B:$===1?wt+=At*B:gt+=At*B}}}if(t.burst[2]>0){const W=Bt-t.burst[0],at=St-t.burst[1],Q=Math.hypot(W,at);if(Q<t.burst[3]){const B=Math.sqrt(1-Q/t.burst[3]),tt=W/(Q+.5),rt=at/(Q+.5),$=(.4+.9*Math.random())*t.burst[2]*B;dt+=((t.camR[0]*tt-t.camU[0]*rt)*.7-t.camF[0]*.9+(Math.random()-.5)*1.2)*$,it+=((t.camR[1]*tt-t.camU[1]*rt)*.7-t.camF[1]*.9+(Math.random()-.5)*1.2)*$,ht+=((t.camR[2]*tt-t.camU[2]*rt)*.7-t.camF[2]*.9+(Math.random()-.5)*1.2)*$,vt=Math.max(vt,B*.95)}}dt+=yt*T,it+=wt*T,ht+=gt*T;const Yt=Math.exp(-qt*T);dt*=Yt,it*=Yt,ht*=Yt;const $t=Math.hypot(dt,it,ht);$t>6&&(dt*=6/$t,it*=6/$t,ht*=6/$t),n[E]=Y+dt*T,n[E+1]=_t+it*T,n[E+2]=st+ht*T,s[E]=dt,s[E+1]=it,s[E+2]=ht,vt*=Math.exp(-.55*T),d[k]=vt<.01?0:vt}const f=n[E],g=n[E+1],_=n[E+2],v=M[3]*f+M[7]*g+M[11]*_+M[15];if(v<=.01)continue;const b=((M[0]*f+M[4]*g+M[8]*_+M[12])/v*.5+.5)*t.W,D=(.5-(M[1]*f+M[5]*g+M[9]*_+M[13])/v*.5)*t.H;if(m===Gt&&me(i[0],i[2])>1)continue;let U=R&7,H=R>>3&3;m>=8&&m<=12&&t.tog[m-8]>.5&&(U=Ct),m>=13&&m<=17&&(U=t.tog[m-13]>.5?Ct:I),o.fillStyle=l[U*4+H];const G=V*xt(t.dRef/v,.7,1.4);o.fillRect(b-G/2,D-G/2,G,G)}},destroy(){}}}function ye(e){const t=e.querySelector("canvas"),o=e.querySelector(".pf__bar"),u=e.querySelector(".pf__cap"),n=e.querySelector("[data-stats]"),s=[...e.querySelectorAll("[data-shape]")],d=e.querySelector("[data-scatter]"),c=e.dataset.name||"Hello",h=matchMedia("(prefers-reduced-motion: reduce)"),p=new URLSearchParams(location.search).get("pf")||"",x=p.split(",").includes("2d")||e.dataset.pfForce2d==="1",i=p.split(",").includes("stats");let l=We();const y=()=>h.matches||l==="low",T=matchMedia("(pointer: coarse)").matches&&Math.min(screen.width,screen.height,innerWidth)<820,z=x?null:t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"});!z&&!p.split(",").includes("2d")&&$e();const A=z?T?"phone":"desktop":"2d",M={"2d":3e3,phone:12e3,desktop:3e4}[A],X={"2d":1500,phone:6e3,desktop:15e3}[A],j=()=>!!z&&l==="mid",V=()=>j()?M>>1:M,k=()=>j()?X>>1:X,E=Math.ceil(M/jt),a={W:1,H:1,dpr:1,t:0,n:M,nMax:M,rows:E,PW:2,PH:1.4,shape:le,arc:Re,arcT:0,flockOn:1,jitter:0,detach:0,rot:new Float32Array(4),gauge:new Float32Array(12),tog:new Float32Array([1,0,1,0,0]),bar:new Float32Array(3),pan:new Float32Array(2),objR:new Float32Array([1,0,0,0,1,0,0,0,1]),vp:new Float32Array(16),camR:[1,0,0],camU:[0,1,0],camF:[0,0,-1],dRef:5,lead:new Float32Array(12),cruise:1.1,cloud:[1.3,.9,.6],gmin:[-2,-1.5,-.8],gcell:[.1,.1,.16],gdim:[32,24,10],rho:8,ptr:new Float32Array([0,0,0,60]),burst:new Float32Array(4),psize:1.5,targets:new Float32Array(jt*E*Pt*4),info:{gauges:new Float32Array(6),togTravel:0,map:new Float32Array(4),objC:new Float32Array(3),bar:new Float32Array(2)},colors:na(e)},R={fps:0,n:a.n,nMax:M,tier:A,perf:l,mode:z?"webgl2":"2d",phase:"chaos",grid:!1,dropped:0};e.__pf=R,i&&(e.__pfCount=r=>{const w={},N=r*a.rows*jt*4;for(let L=0;L<a.n;L++){const J=a.targets[N+L*4+3]|0,O=`c${J&7} a${J>>3&3} g${J>>5&31}`;w[O]=(w[O]||0)+1}return w});let m=null,f={x:0,y:0,w:1,h:1},g="full";if(_(),m=z?ga(t,z,a):null,z&&!m)return z.getExtension("WEBGL_lose_context")?.loseContext(),t.replaceWith(t.cloneNode()),e.dataset.pfForce2d="1",ye(e);if(m||(m=ba(t,a)),!m)return()=>{};n.hidden=!i;function _(){a.W=Math.max(1,e.clientWidth),a.H=Math.max(1,e.clientHeight),a.dpr=Math.min(window.devicePixelRatio||1,2);const r=o.offsetTop+o.offsetHeight+6,w=u.offsetTop-6,N=Math.max(10,a.W*.03);f={x:N,y:r,w:Math.max(40,a.W-N*2),h:Math.max(40,w-r)};const L=xt(f.w/f.h,.8,2),J=a.PW/a.PH;Math.abs(L/J-1)<=.04&&L>=1.45==J>=1.45||(a.PW=2,a.PH=2/L),a.cloud=[a.PW*.62,a.PH*.62,.55];const O=[a.PW*.8,a.PH*.8,.8],ot=j()?200:300,et=Math.round(Math.sqrt(ot*O[0]/O[1])),ut=Math.round(ot/et),ft=j()?5:7;a.gdim=[et,ut,ft],a.gmin=[-O[0],-O[1],-.8],a.gcell=[2*O[0]/et,2*O[1]/ut,2*O[2]/ft],a.cruise=a.PW*.55,g=j()?"mid":"full"}function v(){const r=f.w*f.h,w=Math.round(r*(A==="phone"?.16:A==="2d"?.03:.42));a.n=xt(w,Math.min(k(),V()),V()),b()}function b(){const r=a.n/(f.w*f.h*a.dpr*a.dpr);a.psize=xt(.26/Math.sqrt(r),1.4,2);const w=a.gdim[0]*a.gdim[1]*a.gdim[2];a.rho=Math.max(2,a.n/w*8),R.n=a.n}const D=new Float32Array(Pt).fill(-1),U=new Array(Pt).fill(null),H=new Float32Array(Pt);let G="monospace",P=0;const K=()=>a.PW/a.PH,Z=r=>r!==1,lt=r=>D[r]!==-1&&(!Z(r)||D[r]===K());function Y(r){if(D[r]=H[r],U[r]=null,r===0){for(let w=0;w<3;w++)a.gauge[w*4]=a.info.gauges[w*2],a.gauge[w*4+1]=a.info.gauges[w*2+1];a.bar[0]=a.info.bar[0],a.bar[1]=a.info.bar[1]}m.upload(r)}function _t(r){return(!U[r]||H[r]!==K())&&(H[r]=K(),U[r]=ha(r,a.PW,a.PH,M,E,c,G,a.targets,a.info)),U[r]}function st(r){if(lt(r))return;const w=_t(r);for(;!w.next().done;);Y(r)}function dt(){for(let r=1;r<=Pt;r++){const w=(a.shape+r)%Pt;if(!lt(w))return _t(w).next().done&&Y(w),!0}return!1}const it=window.requestIdleCallback,ht=window.cancelIdleCallback;function vt(){if(P||!Ft)return;const r=w=>{if(P=0,!Ft)return;const N=performance.now()+8;let L=dt();for(;L&&(w&&!w.didTimeout?w.timeRemaining()>2:performance.now()<N);)L=dt();L&&vt()};P=it?it(r,{timeout:1500}):window.setTimeout(r,50)}function yt(){P&&(it&&ht?ht(P):clearTimeout(P)),P=0}function wt(){_(),v(),Bt(),m.resize(),R.grid=m.grid}function gt(){wt(),st(a.shape),vt()}function qt(r){wt();const w=a.shape,N=_t(w),L=()=>{if(!Ft)return;const J=performance.now()+8;let O=!1;for(;!(O=!!N.next().done)&&performance.now()<J;);if(!O){setTimeout(L,0);return}Y(w),r(),vt()};L()}const Tt=[{yaw:-.3,pitch:.24,spin:0},{yaw:.52,pitch:.64,spin:.09},{yaw:-.3,pitch:.24,spin:0}],Et=.5,F={yaw:Tt[le].yaw,pitch:Tt[le].pitch,dist:5,spin:0,dragYaw:0,dragPitch:0,parX:0,parY:0,lastDrag:-1e9},Lt=new Float32Array(Pt);function Bt(){const r=Math.tan(Et/2),w=a.W/a.H,N=f.h/a.H,L=f.w/a.W,J=(ut,ft)=>Math.max(ft/(N*r),ut/(L*r*w));Lt[0]=Lt[2]=J(a.PW/2,a.PH/2)*1.18+.2;const O=Math.hypot(mt.W/2,mt.D/2)*.95,ot=Tt[1].pitch,et=O*Math.sin(ot)+(mt.peak+.03+mt.base)*.5*Math.cos(ot);Lt[1]=J(O*.92,et)*1.02+O*Math.cos(ot)*.7}const St=r=>r-q*Math.round(r/q);function Yt(){const r=Tt[a.shape];F.spin=0,F.yaw=r.yaw,F.pitch=r.pitch,F.dist=Lt[a.shape]}function $t(r){const w=Tt[a.shape];!Dt&&a.t-F.lastDrag>1.5&&(F.spin+=w.spin*r);const N=1-Math.exp(-r*1.6);F.yaw+=(w.yaw+F.spin-F.yaw)*N,F.pitch+=(w.pitch-F.pitch)*N,F.dist+=(Lt[a.shape]-F.dist)*N}function W(r){const w=a.t,N=F.yaw+F.dragYaw+(r?0:Math.sin(w*.23)*.06+F.parX*.12),L=xt(F.pitch+F.dragPitch+(r?0:Math.sin(w*.17+1)*.035+F.parY*.08),-.15,1.2),J=a.W/a.H,O=F.dist,ot=[O*Math.sin(N)*Math.cos(L),O*Math.sin(L),O*Math.cos(N)*Math.cos(L)],et=re(ot),ut=re(ce([0,1,0],et)),ft=ce(et,ut),nt=new Float32Array([ut[0],ft[0],et[0],0,ut[1],ft[1],et[1],0,ut[2],ft[2],et[2],0,-de(ut,ot),-de(ft,ot),-de(et,ot),1]),fe=ra(Et,J,.1,40);fe[8]=-((f.x+f.w/2)/a.W*2-1),fe[9]=(f.y+f.h/2)/a.H*2-1,a.vp=ca(fe,nt),a.camR=ut,a.camU=ft,a.camF=[-et[0],-et[1],-et[2]],a.dRef=O}const at=[1,0,1,0,0];let Q=0,B=1;function tt(r,w){a.rot[0]=w*.35,a.rot[1]=-w*.22,a.rot[2]=w*.5,a.rot[3]=-w*.6;for(let nt=0;nt<3;nt++)a.gauge[nt*4+2]=1.2+nt*1.9+Math.sin(w*.4+nt)*.5,a.gauge[nt*4+3]=q*(.12+.5*(.5+.5*Math.sin(w*(.45+.17*nt)+nt*2)));Q+=r,Q>2.8&&(Q=0,at[B]=1-at[B],B=(B*3+2)%5);const N=1-Math.exp(-r*9);for(let nt=0;nt<5;nt++)a.tog[nt]+=(at[nt]-a.tog[nt])*N;a.bar[2]=.55+.3*Math.sin(w*.5)+.1*Math.sin(w*1.7);const L=a.info.map;L[2]>0&&(a.pan[0]=w*.014*L[2]%L[2],a.pan[1]=w*.006*L[3]%L[3]);const J=w*.5,O=.5+Math.sin(w*.3)*.3,ot=Math.cos(J),et=Math.sin(J),ut=Math.cos(O),ft=Math.sin(O);a.objR.set([ot,ft*et,-ut*et,0,ut,ft,et,-ft*ot,ut*ot])}function rt(r){a.arc=r,a.arcT=0}const $=()=>a.arc.C+a.arc.Sw+a.arc.A+.4;let At=-1e9;function Ht(){const{C:r,Sw:w}=a.arc,N=Qt(r+w*.4,r+w,a.arcT),L=1-.6*N,J=a.t;for(let O=0;O<4;O++){const ot=O*1.7,et=(O&1?1:-1)*.5,ut=(O&2?1:-1)*.45,ft=1.3+.21*O,nt=O%3?1:-1;a.lead[O*3]=(et+Math.sin(J*ft*nt+ot)*.38)*a.PW*.5*L,a.lead[O*3+1]=(ut+Math.cos(J*ft*1.13*nt+ot)*.38)*a.PH*.48*L,a.lead[O*3+2]=Math.sin(J*.8+ot*2)*.4*L+.1}}function te(){const{C:r,Sw:w}=a.arc,N=a.arcT;return N<r?"chaos":N<r+w?"swarm":N<$()?"assembly":"hold"}function Wt(r){a.t+=r,a.arcT+=r,tt(r,a.t),Ht();const w=a.arcT>=$();a.flockOn=!w||a.t-At<6?1:0,a.jitter+=((w?.9:0)-a.jitter)*(1-Math.exp(-r*2)),a.detach=w?1:0,a.ptr[2]+=((kt?1:0)-a.ptr[2])*(1-Math.exp(-r*8));const N=1-Math.exp(-r*3);if(F.parX+=((kt?ae:0)-F.parX)*N,F.parY+=((kt?Ut:0)-F.parY)*N,!Dt&&a.t-F.lastDrag>3){const L=1-Math.exp(-r*.6);F.dragYaw-=F.dragYaw*L,F.dragPitch-=F.dragPitch*L}$t(r),W(!1)}let ct=0,Mt=0,Nt=!1,Ft=!0,Ot=!1,Xt=0,Rt=0,Kt=0;function Zt(r){if(ct=0,!Ft)return;if(Mt&&r-Mt<10){Nt&&!document.hidden&&(ct=requestAnimationFrame(Zt));return}let w=Mt?(r-Mt)/1e3:1/60;Mt=r,w=xt(w,1/240,1/30),Wt(w),m.frame(w,!1),a.burst[2]=0,Xt++,r-Rt>=500&&(R.fps=Math.round(Xt*1e3/(r-Rt)),Xt=0,Rt=r,++Kt>2&&R.fps<50&&a.n>k()&&(a.n=Math.max(k(),Math.floor(a.n*.75)),R.dropped++,b()),R.phase=te(),i&&(n.textContent=`${R.fps} fps · ${a.n.toLocaleString("en")} particles · ${R.mode}${R.grid?"":" (no grid)"} · ${R.phase} · ${l}`)),Nt&&!document.hidden&&(ct=requestAnimationFrame(Zt))}function Jt(){!Ot||ct||y()||!Nt||document.hidden||!Ft||(Mt=0,Xt=0,Rt=performance.now(),Kt=0,Ke(),ct=requestAnimationFrame(Zt))}function bt(){ct&&cancelAnimationFrame(ct),ct=0}function Vt(){Ot&&(a.t=1.5,a.arcT=1e3,a.jitter=0,a.detach=0,a.ptr[2]=0,tt(0,a.t),a.tog.set(at),F.dragYaw=F.dragPitch=F.parX=F.parY=0,Yt(),W(!0),m.frame(1/60,!0),R.phase="still",i&&(n.textContent=`still · ${a.n.toLocaleString("en")} particles · ${R.mode} · ${l}`))}function It(){d.hidden=y(),y()?(bt(),Vt()):Jt()}function ee(){for(const r of s)r.setAttribute("aria-pressed",String(Number(r.dataset.shape)===a.shape))}function se(r){if(r!==a.shape){if(st(r),a.shape=r,ee(),F.yaw+=F.dragYaw,F.dragYaw=0,F.spin=0,F.yaw=Tt[r].yaw+St(F.yaw-Tt[r].yaw),y()){Vt();return}rt(Ze)}}let kt=!1,ae=0,Ut=0,pt=null,Dt=!1;const qe=r=>{const w=r.offsetX,N=r.offsetY;if((r.pointerType==="mouse"||pt)&&(a.ptr[0]=w,a.ptr[1]=N,kt=!0),ae=w/a.W*2-1,Ut=N/a.H*2-1,pt&&r.pointerId===pt.id){const L=w-pt.x,J=N-pt.y;pt.moved=Math.max(pt.moved,Math.hypot(L,J)),!Dt&&Math.abs(L)>8&&Math.abs(L)>Math.abs(J)&&!y()&&(Dt=!0,t.setPointerCapture(r.pointerId),t.classList.add("is-dragging")),Dt&&(F.dragYaw=xt(F.dragYaw-L*.006,-.75,.75),F.dragPitch=xt(F.dragPitch+J*.004,-.35,.4),pt.x=w,pt.y=N,F.lastDrag=a.t)}},Xe=r=>{r.button>0||(pt={id:r.pointerId,x:r.offsetX,y:r.offsetY,moved:0})},Ve=r=>{pt&&r.pointerId===pt.id&&!Dt&&pt.moved<10&&!y()&&(a.burst[0]=r.offsetX,a.burst[1]=r.offsetY,a.burst[2]=4.5,a.burst[3]=Math.min(a.W,a.H)*.34,At=a.t),ge(r)},ge=r=>{Dt&&(F.lastDrag=a.t,t.classList.remove("is-dragging"),Tt[a.shape].spin&&(F.spin+=F.dragYaw,F.yaw+=F.dragYaw,F.dragYaw=0)),pt=null,Dt=!1,r.pointerType!=="mouse"&&(kt=!1)};t.addEventListener("pointermove",qe),t.addEventListener("pointerdown",Xe),t.addEventListener("pointerup",Ve),t.addEventListener("pointercancel",ge),t.addEventListener("pointerleave",r=>{Dt||(kt=!1,r.pointerType==="mouse"&&(pt=null))}),s.forEach(r=>r.addEventListener("click",()=>{se(Number(r.dataset.shape)),Me("particle-shape")})),d.addEventListener("click",()=>{rt(Re),Me("particle-scatter")});const Me=r=>{const w=t.getBoundingClientRect();document.dispatchEvent(new CustomEvent("cat:attention",{detail:{x:w.left+w.width/2,y:w.top+w.height/2,reason:r==="particle-scatter"?"scatter":"swarm"}})),document.dispatchEvent(new CustomEvent("cat:event",{detail:{name:r}}))};let be=0;e.addEventListener("cat:paw",r=>{const w=r.detail,N=t.getBoundingClientRect();a.ptr[0]=w.x-N.left,a.ptr[1]=w.y-N.top,kt=!0,clearTimeout(be),be=window.setTimeout(()=>{pt||(kt=!1)},300)});let Te=0,ie=0,ue=0;const Ee=new ResizeObserver(()=>{const r=e.clientWidth,w=e.clientHeight;!Ot||r===ie&&w===ue||(clearTimeout(Te),Te=window.setTimeout(()=>{ie=r,ue=w,gt(),W(y()),y()&&Vt()},140))}),Ae=new IntersectionObserver(([r])=>{Nt=r.isIntersecting,Nt?Jt():bt()}),Fe=()=>document.hidden?bt():Jt();document.addEventListener("visibilitychange",Fe),h.addEventListener("change",It);const Ge=He(r=>{if(l=R.perf=r,!!Ot){if(r!=="low"&&(j()?"mid":"full")!==g){const w=a.n;_(),m.resize(),R.grid=m.grid,r==="mid"?(a.n=Math.min(w,V()),b()):v(),st(a.shape),vt()}It()}});Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(r=>setTimeout(r,1200))]).then(()=>{Ft&&(ie=e.clientWidth,ue=e.clientHeight,G=getComputedStyle(e).getPropertyValue("--font-label").trim()||"monospace",qt(Ye))});function Ye(){Yt(),W(!1),Ot=!0,e.classList.add("is-live"),ee(),Ee.observe(e),Ae.observe(e),It()}return()=>{Ft=!1,bt(),yt(),Ee.disconnect(),Ae.disconnect(),document.removeEventListener("visibilitychange",Fe),h.removeEventListener("change",It),Ge(),m?.destroy(),m=null}}const we=[...document.querySelectorAll("[data-pf]")];let xe=we.map(ye);const je=()=>{xe.forEach(e=>e()),xe=[]};window.addEventListener("pagehide",je);document.addEventListener("astro:before-swap",je);window.addEventListener("pageshow",e=>{e.persisted&&(we.forEach(t=>{const o=t.querySelector("canvas");o.replaceWith(o.cloneNode()),t.classList.remove("is-live")}),xe=we.map(ye))});
