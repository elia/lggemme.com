// GX - Full-Featured Javascript Animations Framework v1.2 - by Riccardo Degni (RD) - Copyright (c) 2009 Riccardo Degni (http://www.riccardodegni.net/) - MIT-Style License
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a l={2n:8(1b){a 1b=1b||{};a M=8(){k(6.1s)?6.1s.Z(6,21):6};J(a 1Z L 1b)M.2i[1Z]=1b[1Z];k M},1i:8(M,27,29){k 8(){M.Z(27,29||[])}},1j:8(C,w){J(a i=0;i<C.U;i++)j(C[i]==w)k 1u;k Y},1m:8(1G){1G=1G.24(/-\\D/g,8(28){k 28.1E(1).2X()});k 1G},1g:8(){k 2A 2W().2T()},1r:8(W,1U,25){j(A W!=\'P\'&&A W!=\'8\')W={};J(a p L 1U)j(!W[p]||25)W[p]=1U[p];k W},13:8(C,M){J(a i=0;i<C.U;i++)M.Z(C,[C[i],i,C])}};a f=l.2n({G:{q:1N,2k:38,2a:\'1n\',19:\'19\',F:\'2p\',1c:Y},1s:8(y,1q){6.y=y;6.G=l.1r(1q,f.2i.G);k 6},1w:8(n,q,F,B){j(!6.18){6.18=1u;6.n=n;6.q=(q)?((A q==\'1x\')?f.2r[l.1m(q)]:q):6.G.q;6.F=F||6.G.F;6.B=((A B==\'P\')?B.3a:((A B==\'8\')?B:Y));6.1Q=(A B==\'P\')?B.37:Y;j(!6.R)6.R=[];6.1K=2m.2h(1N/6.G.2k);6.H={};6.1l={};6.O={};6.V={};6.1e={};J(a 9 L 6.n){a v=l.1m(9),v=(f.1O.36(v))?f.1O[v]:v,o=6.n[9],1F=6.G.2a||\'1n\',1W=Y;a 1D=6.y.X(v),I=T((1D==\'34\')?0:1D);j((l.1j(f.1T,9))&&6.y.X(\'2l\')==\'35\')6.y.X(\'2l\',\'1d\');j(f.E.1A(9)){I=f.E.1L(6.y.X(v));o=f.E.1L(6.n[9]);1W=[o[0]-I[0],o[1]-I[1],o[2]-I[2]]}Q j(A o==\'1x\'){j(l.1j(f.2s,o)){j(!6.y.S(\'1R\'+v))6.y.S(\'1R\'+v,1D);a 1P=T(6.y.S(\'1R\'+v))||1;2D(o){1H\'2x\':6.n[9]=o=1P;1B;1H\'2F\':6.n[9]=o=0;1B;1H\'2z\':6.n[9]=o=(T(2m.2h(I))!=0)?0:1P;1B}}Q{a z=f.2j.9(o,1F);j(A z==\'P\'){6.n[9]=o=T(z[0]);1F=z[1]||\'1n\';j(z[2])6.n[9]=o=(z[2]==\'+=\')?(o+I):(I-o)}Q j(A z==\'1x\'){6.n[9]=o=T(z)}}}6.H[9]=I;6.1l[9]=o;6.O[9]=1W||6.1l[9]-6.H[9];6.1e[9]=1F}j(6.1Q)6.1Q.Z(6,[6.y,6]);6.1X=l.1g();6.1f=2f(l.1i(6.1S,6),6.1K)}Q{j(6.G.19==\'19\'){a 2c=l.1i(6.1w,6,21);6.R.14(2c)}Q j(6.G.19==\'2N\'){6.1k();6.1w.Z(6,21)}}k 6},1S:8(){a N=6.N=l.1g()-6.1X;j(N<6.q){J(a 9 L 6.n){a F=6.F.2o(\':\'),2d=(F[1])?F[1]:\'2E\',17=f.2t[F[0]][2d];a H=6.H[9],O=6.O[9];j(A H!=\'P\'){6.V[9]=17(N,H,O,6.q);j(6.V[9]<0&&!l.1j(f.1T,9))6.V[9]=0}Q{6.V[9]=[17(N,H[0],O[0],6.q),17(N,H[1],O[1],6.q),17(N,H[2],O[2],6.q)]}}}Q{6.1k();J(a 9 L 6.n){6.V[9]=(f.E.1A(9))?6.1l[9]:6.n[9]}}6.2e()},2b:8(9,11){a v=l.1m(9);(f.E.1A(v))?6.y.X(v,\'2y(\'+15(11[0])+\',\'+15(11[1])+\',\'+15(11[2])+\')\'):(6.y.X(v,(v==\'3r\')?11:11+6.1e[9]))},1k:8(){6.18=Y;6.1f=3u(6.1f)},3t:8(){6.1k()},3m:8(){6.18=1u;6.1X=l.1g()-6.N;6.1f=2f(l.1i(6.1S,6),6.1K)},2e:8(){J(a 9 L 6.n){6.2b(9,6.V[9])}j(!6.18){j(6.B&&A 6.B==\'8\')6.B.Z(6,[6.y,6]);a 1c=6.G.1c,R=6.R,1J=8(){R.3f()()};j(R.U!=0)(!1c)?1J():3l(1J,1c)}}});f.2j={9:8(s,26){a z=[],1a,10,1d,22=[\'+=\',\'-=\'];l.13(22,8(1p,i){j(s.1h(1p)!=-1){1d=1p;s=s.24(1p,\'\')}});l.13(f.1e,8(u,i){j(s.1h(u)!=-1){1a=T(s);10=u;z.14(1a,10)}});j(!10){1a=T(s);10=26;z.14(1a,10)}j(1d)z.14(1d);k(z.U>0)?z:s}};f.E={2B:8(23){k 23.3o(16)},2C:8(2g){k 15(2g,16)},3s:8(r,g,b){a 1y=f.E.2B;k[1y(r),1y(g),1y(b)]},2q:8(h,e,x){a 1t=f.E.2C;k[1t(h),1t(e),1t(x)]},1L:8(m){j(f.E.1I[m])k f.E.1I[m];j(A m==\'P\'&&m.U==3)k m;j(m.1h(\'2y\')<=-1){a m=(m.U>4)?m:f.E.2u(m);k f.E.2q(m.1C(1,3),m.1C(3,5),m.1C(5,7))}a 2v=m.1C(4,m.U-1).2o(\',\'),1M=[];l.13(2v,8(c){1M.14(15(c))});k 1M},2u:8(m){a r=m.1E(1),g=m.1E(2),b=m.1E(3);k\'#\'+r+r+g+g+b+b},1A:8(9){k(9.3i().1h(\'m\')!=-1)},1I:{3k:[12,0,0],3h:[0,12,0],3g:[0,0,12],3d:[12,12,12],3e:[0,0,0]}};f.1o=8(t,b,c,d){k c*t/d+b};l.1r(f,{2t:{2p:{\'3n\':f.1o,\'3c\':f.1o,\'2E\':f.1o}},1e:[\'1n\',\'3p\',\'%\',\'L\',\'3q\',\'3j\'],2r:{\'2M\':2L,\'2K\':2O,\'2J\':1N,\'2P\':2R,\'2I\':2H},2s:[\'2x\',\'2F\',\'2z\'],1O:{\'2G\':\'2Q\',\'3b\':\'33\',\'2S\':\'39\',\'32\':\'31\'},1T:[\'2V\',\'2U\'],1Y:8(C){a 1V={};2D(A C){1H\'P\':J(a p L C)1V[p]=f.1Y(C[p]);1B;30:k C}k 1V}});(8($){2w.M.2Z({20:8(w){j(!w.S(\'K\'))w.S(\'K\',2A f().1s(w,{}));k w},2Y:8(1q){a 1v=$(6),1z=6;l.13(1v,8(w){a w=1z.20($(w));l.1r(w.S(\'K\').G,1q,1u)});k 6},K:8(n,q,F,B){a 1v=$(6),1z=6;l.13(1v,8(w){a w=1z.20($(w)),K=w.S(\'K\');(A n==\'1x\')?K[n]():K.1w(f.1Y(n),q,F,B)});k 6}})})(2w);',62,217,'||||||this||function|style|var|||||GX||||if|return|Fns|color|styles|jStyle||duration|||||camelStyle|el||element|fullStyle|typeof|callback|obj||Color|easing|options|starts|startStyle|for|gx|in|fn|elapsedTime|changes|object|else|chain|data|parseFloat|length|sizes|base|css|false|apply|unit|sz|255|Each|push|parseInt||ease|isRunning|queue|value|props|delay|relative|units|timer|Now|indexOf|Bind|Contains|clearTimer|ends|Camelize|px|linear|rel|opts|Extend|init|htd|true|set|anime|string|dth|jq|isColor|break|substring|cssStyle|charAt|jUnit|str|case|customColors|ring|interval|cssToRgb|nCol|1000|complex|to|startFn|gxSave_|increase|axis|more|end|jChanges|time|unlink|prop|setGX|arguments|relatives|dec|replace|merge|un|bind|match|args|defaultUnit|parseStyle|boundAnime|easingType|setStyles|setInterval|hex|round|prototype|Parse|fps|position|Math|Create|split|Linear|hexToRgb|durations|specialValues|Transitions|shortToFull|col|jQuery|show|rgb|toggle|new|decToHex|hexToDec|switch|InOut|hide|borderWidth|250|veryFast|normal|slow|4000|verySlow|cancel|2000|fast|borderTopWidth|500|margin|getTime|left|top|Date|toUpperCase|gxInit|extend|default|paddingTop|padding|borderTopColor|auto|static|hasOwnProperty|start|50|marginTop|complete|borderColor|Out|white|black|shift|blue|green|toLowerCase|ex|red|setTimeout|resume|In|toString|em|pt|opacity|rgbToHex|pause|clearInterval'.split('|')))
;
// GX - Full-Featured Javascript Animations Framework - Transitions - Copyright (c) 2009 Riccardo Degni (http://www.riccardodegni.net/) - MIT-Style License 
// Easing Equations by Robert Penner (http://www.robertpenner.com/easing/ - BSD License), adapted for dealing with GX 
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('H.K(q.o,{G:{\'f\':8(t,b,c,d){6-c*9.x(t/d*(9.k/2))+c+b},\'e\':8(t,b,c,d){6 c*9.n(t/d*(9.k/2))+b},\'g\':8(t,b,c,d){6-c/2*(9.x(9.k*t/d)-1)+b}},z:{\'f\':8(t,b,c,d){6 c*(t/=d)*t*t*t*t+b},\'e\':8(t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},\'g\':8(t,b,c,d){6((t/=d/2)<1)?c/2*t*t*t*t*t+b:c/2*((t-=2)*t*t*t*t+2)+b}},B:{\'f\':8(t,b,c,d){6 c*(t/=d)*t*t*t+b},\'e\':8(t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},\'g\':8(t,b,c,d){6((t/=d/2)<1)?c/2*t*t*t*t+b:-c/2*((t-=2)*t*t*t-2)+b}},C:{\'f\':8(t,b,c,d){6 c*(t/=d)*t+b},\'e\':8(t,b,c,d){6-c*(t/=d)*(t-2)+b},\'g\':8(t,b,c,d){6((t/=d/2)<1)?c/2*t*t+b:-c/2*((--t)*(t-2)-1)+b}},D:{\'f\':8(t,b,c,d){6(t==0)?b:c*9.h(2,i*(t/d-1))+b},\'e\':8(t,b,c,d){6(t==d)?b+c:c*(-9.h(2,-i*t/d)+1)+b},\'g\':8(t,b,c,d){6(t==0)?b:((t==d)?b+c:((t/=d/2)<1)?c/2*9.h(2,i*(t-1))+b:c/2*(-9.h(2,-i*--t)+2)+b)}},M:{\'f\':8(t,b,c,d){l(t==0)6 b;l((t/=d)==1)6 b+c;m p=d*.3,a=c,s=p/4;6-(a*9.h(2,i*(t-=1))*9.n((t*d-s)*(2*9.k)/p))+b},\'e\':8(t,b,c,d,a,p){l(t==0)6 b;l((t/=d)==1)6 b+c;m p=d*.3,a=c,s=p/4;6(a*9.h(2,-i*t)*9.n((t*d-s)*(2*9.k)/p)+c+b)},\'g\':8(t,b,c,d,a,p){l(t==0)6 b;l((t/=d/2)==2)6 b+c;m p=d*(.3*1.5),a=c,s=p/4;6(t<1)?-.5*(a*9.h(2,i*(t-=1))*9.n((t*d-s)*(2*9.k)/p))+b:a*9.h(2,-i*(t-=1))*9.n((t*d-s)*(2*9.k)/p)*.5+c+b}},A:{\'f\':8(t,b,c,d){6 c*(t/=d)*t*t+b},\'e\':8(t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},\'g\':8(t,b,c,d){6((t/=d/2)<1)?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b}},F:{\'f\':8(t,b,c,d){6-c*(9.u(1-(t/=d)*t)-1)+b},\'e\':8(t,b,c,d){6 c*9.u(1-(t=t/d-1)*t)+b},\'g\':8(t,b,c,d){6((t/=d/2)<1)?-c/2*(9.u(1-t*t)-1)+b:c/2*(9.u(1-(t-=2)*t)+1)+b}},r:{\'f\':8(t,b,c,d){6 c-q.o.r.e(d-t,0,c,d)+b},\'e\':8(t,b,c,d){6((t/=d)<(1/2.j))?c*(7.v*t*t)+b:((t<(2/2.j))?c*(7.v*(t-=(1.5/2.j))*t+.j)+b:(t<(2.5/2.j)?c*(7.v*(t-=(2.N/2.j))*t+.L)+b:c*(7.v*(t-=(2.I/2.j))*t+.E)+b))},\'g\':8(t,b,c,d){6(t<d/2)?(q.o.r.f(t*2,0,c,d)*.5+b):(q.o.r.e(t*2-d,0,c,d)*.5+c*.5+b)}},J:{\'f\':8(t,b,c,d){m s=1.w;6 c*(t/=d)*t*((s+1)*t-s)+b},\'e\':8(t,b,c,d){m s=1.w;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},\'g\':8(t,b,c,d){m s=1.w;6((t/=d/2)<1)?c/2*(t*t*(((s*=(1.y))+1)*t-s))+b:c/2*((t-=2)*t*(((s*=(1.y))+1)*t+s)+2)+b}}});',50,50,'||||||return||function|Math|||||Out|In|InOut|pow|10|75|PI|if|var|sin|Transitions||GX|Bounce|||sqrt|5625|70158|cos|525|Quint|Cubic|Quart|Quad|Expo|984375|Circ|Sine|Fns|625|Back|Extend|9375|Elastic|25'.split('|')))
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
}

);

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
 (function ($) {
  var hideEffect = { opacity: 0 };
  var showEffect = { opacity: 1 };
  
  if (!$.support.opacity) {
  hideEffect = { };
  showEffect = { };
  }
  
  var Orbiter = function ($sourceElement, options) {
  this.$sourceElement = $sourceElement;
  this.options = options;
  
  this.$sourceElement
  .css({ cursor: this.options.loadTrigger === 'click' ? 'pointer' : undefined })
  .disableSelection();
  
  this.$container = $(document.createElement('div'))
  .addClass('orbiter')
  .css({
       display: 'inline-block',
       position: 'relative'
       })
  .disableSelection()
  .data('orbiter', this);
  
  this.$featureBoxContainer = $(document.createElement('div'))
  .css({
       display: 'block',
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0
       })
  .hide()
  .css(hideEffect)
  .gxInit({ queue: 'cancel' })
  .appendTo(this.$container);
  
  this.rotationCount = options.rotationCount;
  this.rotationsPerFrame = options.rotationsPerFrame;
  this.pixelsPerRotation = options.pixelsPerRotation;
  this.features = this.options.features;
  
  this.frameImages = [ ];
  this.featureBoxes = { };
  
  this.isLoaded = false;
  
  this.bind();
  };
  
  Orbiter.prototype = {
  updateViewer: function () {
  throw 'Implement updateViewer in a subclass';
  },
  
  getViewer$: function () {
  throw 'Implement getViewer$ i na subclass';
  },
  
  bind: function () {
  var orbiter = this;
  
  function isLeftMouseButton(e) {
  if ($.browser.msie) {
  return e.button === 1;
  }
  
  return e.button === 0;
  }
  
  function onDown(e) {
  if (isLeftMouseButton(e)) {
  orbiter.down(e.screenX, e.screenY);
  $(document).one('mouseup', onUp);
  $(document).bind('mousemove', onMove);
  }
  }
  
  function onMove(e) {
  if (isLeftMouseButton(e)) {
  orbiter.move(e.screenX, e.screenY);
  }
  }
  
  function onUp(e) {
  if (isLeftMouseButton(e)) {
  orbiter.up(e.screenX, e.screenY);
  $(document).unbind('mousemove', onMove);
  }
  }
  
  function onTouchDown(e) {
  // No, this isn't American football
  e.preventDefault();
  
  orbiter.down(e.targetTouches[0].screenX, e.targetTouches[0].screenY);
  
  return true;
  }
  
  function onTouchMove(e) {
  e.preventDefault();
  
  orbiter.move(e.targetTouches[0].screenX, e.targetTouches[0].screenY);
  
  return true;
  }
  
  function onTouchUp(e) {
  // FIXME what if they're still touching?
  e.preventDefault();
  
  orbiter.up(e.changedTouches[0].screenX, e.changedTouches[0].screenY);
  
  return true;
  }
  
  this.$container.bind('mousedown', onDown);
  
  // jQuery binding doesn't work for some reason
  // TODO Submit a bug report...
  this.$container[0].ontouchstart = onTouchDown;
  this.$container[0].ontouchmove  = onTouchMove;
  this.$container[0].ontouchend   = onTouchUp;
  
  // This is required for some reason...
  if (document.addEventListener != undefined && document.addEventListener != null) {
    document.addEventListener('touchstart', function() {}, false);
  }
  
  this.$container.bind('mouseenter', function () {
                       orbiter.$featureBoxContainer
                       .show()
                       .gx(showEffect, orbiter.options.featureMouseInTime, orbiter.options.featureMouseInEasing);
                       });
  
  this.$container.bind('mouseleave', function () {
                       orbiter.$featureBoxContainer
                       .gx(hideEffect, orbiter.options.featureMouseOutTime, orbiter.options.featureMouseOutEasing, function () {
                           orbiter.$featureBoxContainer.hide();
                           });
                       });
  },
  
  load: function () {
  if (this.isLoaded) {
  return;
  }
  
  this.showLoading();
  
  var orbiter = this;
  
  this.loadAllFrames(function () {
                     orbiter.isLoaded = true;
                     
                     orbiter.setRotation(0);
                     
                     var $viewer = orbiter.getViewer$()
                     .appendTo(orbiter.$container);
                     
                     orbiter.$container.css({
                                            width: orbiter.$sourceElement.width(),
                                            height: orbiter.$sourceElement.height()
                                            });
                     
                     orbiter.hideLoading(function () {
                                         orbiter.$sourceElement.replaceWith(orbiter.$container);
                                         });
                     });
  },
  
  showLoading: function () {
  // TODO Maybe split this into its own class or something
  
  if (!this.options.showLoading) {
  return;
  }
  
  var orbiter = this;
  
  this.$sourceElement.css({ cursor: 'wait' });
  
  this.loadingTimeout = window.setTimeout(function () {
                                          var region = orbiter.$sourceElement.offset();
                                          region.width = orbiter.$sourceElement.width();
                                          region.height = orbiter.$sourceElement.height();
                                          
                                          var loaderImageSize = {
                                          width: 32,
                                          height: 32
                                          };
                                          
                                          orbiter.$sourceElement.animate({
                                                                         opacity: 0.5
                                                                         }, 500);
                                          
                                          orbiter.$loading = $(document.createElement('img'))
                                          .attr('src', 'images/loader.gif')
                                          .css({
                                               position: 'absolute',
                                               left: region.left + (region.width  - loaderImageSize.width ) / 2,
                                               top:  region.top  + (region.height - loaderImageSize.height) / 2
                                               })
                                          .appendTo(document.body);
                                          }, 0);
  },
  
  hideLoading: function (callback) {
  if (!this.options.showLoading) {
  callback();
  
  return;
  }
  
  if (this.loadingTimeout) {
  window.clearTimeout(this.loadingTimeout);
  }
  
  this.$sourceElement
  .css({ cursor: '' })
  .animate({
           opacity: 1
           }, 200, callback);
  
  if (this.$loading) {
  this.$loading.remove();
  
  this.$loading = null;
  }
  },
  
  loadAllFrames: function (callback) {
  var totalFrames = Math.ceil(this.rotationCount / this.rotationsPerFrame);
  var framesRemaining = totalFrames;
  
  function frameLoaded() {
  --framesRemaining;
  
  if (framesRemaining <= 0) {
  callback();
  }
  }
  
  var frame;
  
  for (frame = 0; frame < totalFrames; ++frame) {
  this.loadFrameImage(frame, frameLoaded);
  }
  },
  
  wrapRotation: function (rotation) {
  var rotationCount = this.rotationCount;
  
  if (rotationCount === 0) {
  // We could be here a while...
  return 0;
  }
  
  while (rotation >= rotationCount) {
  rotation -= rotationCount;
  }
  
  while (rotation < 0) {
  rotation += rotationCount;
  }
  
  return rotation;
  },
  
  setRotation: function (rotation) {
  if (parseInt(rotation, 10) != rotation) {
  // (Loose comparison intentional)
  alert ("rotation: " + rotation);
  throw 'Rotation number must be an integer';
  }
  
  rotation = parseInt(rotation, 10);
  
  if (rotation < 0 || rotation >= this.rotationCount) {
  throw 'Rotation number out of range';
  }
  
  if (rotation === this.currentRotation) {
  return;
  }
  
  this.currentRotation = rotation;
  
  this.updateViewer();
  this.updateFeatureBoxes();
  },
  
  updateFeatureBoxes: function (rotation) {
  var orbiter = this;
  var currentFeatures = this.getFeatures(this.currentRotation);
  
  var currentFeatureNames = $(currentFeatureNames).map(function () {
                                                       return this.name;
                                                       }).get();
  
  // Hide inactive boxes
  $.each(this.featureBoxes, function (text, $element) {
         if ($(currentFeatureNames).index(text) < 0) {
         if ($element.isFadingOut) {
         return;
         }
         
         $element.gx(hideEffect, orbiter.options.featureFadeOutTime, orbiter.options.featureFadeOutEasing, function () {
                     delete orbiter.featureBoxes[text];
                     
                     $element.hide();
                     });
         
         $element.isFadingOut = true;
         }
         });
  
  $(currentFeatures).each(function () {
                          var $element = orbiter.featureBoxes[this.name];
                          
                          if ($element) {
                          $element.isFadingOut = false;
                          
                          $element.show();
                          
                          $element.gx($.extend({ }, showEffect, this.position), orbiter.options.featureFadeInTime, orbiter.options.featureFadeInEasing);
                          } else {
                          $element = $(document.createElement('div'))
                          .addClass('orbiter-feature')
                          .css(this.position)
                          .css({ position: 'absolute' })
                          .css(hideEffect)
                          .attr('title', this.name)
                          .gxInit({ queue: 'cancel' })
                          .gx(showEffect, orbiter.options.featureFadeInTime, orbiter.options.featureFadeInEasing)
                          .appendTo(orbiter.$featureBoxContainer);
                          
                          toolTipIt$($element)
                          .addClass('feature-tool-tip');
                          }
                          
                          orbiter.featureBoxes[this.name] = $element;
                          });
  },
  
  getFeatures: function (rotation) {
  // jQuery is retarded and won't let us filter on an object.  =|
  var features = [ ];
  
  $.each(this.features, function (key, value) {
         if (value[rotation]) {
         features.push({
                       name: key,
                       position: value[rotation]
                       });
         }
         });
  
  return features;
  },
  
  loadFrameImage: function (frame, callback) {
  var img = this.frameImages[frame];
  
  if (img) {
  if (img.data('callbacks')) {
  img.data('callbacks').push(callback);
  } else {
  callback(img);
  }
  
  return;
  }
  
  var img = this.options.frameImage;
  var imgSrc;
  
  if (typeof img === 'function') {
  img = img(this.$sourceElement, frame);
  }
  
  if (typeof img === 'string') {
  imgSrc = img;
  img = new Image();
  }
  
  if (img.tagName && img.tagName === 'IMG') {
  img = $(img);
  }
  
  if (!(img instanceof $)) {
  throw 'image should be a jQuery object';
  }
  
  this.frameImages[frame] = img;
  
  img.data('callbacks', [ callback ]);
  
  img.load(function () {
           $(img.data('callbacks')).each(function () {
                                         this(img);
                                         });
           });
  
  // IE needs src to be set after the load handler is attached
  // else cached images do not fire the load event.
  if (imgSrc) {
  img.attr('src', imgSrc);
  }
  },
  
  down: function (x, y) {
  this.isDown = true;
  
  this.startX = x;
  this.startY = y;
  this.startTick = this.getTimeTick();
  this.startRotation = this.currentRotation;
  
  this.endMomentum();
  },
  
  move: function (x, y) {
  if (!this.isDown) {
  return;
  }
  
  var dx = this.startX - x;
  var rotations = Math.round(dx / this.pixelsPerRotation);
  
  this.setRotation(this.wrapRotation(this.startRotation + rotations));
  },
  
  up: function (x, y) {
  if (!this.isDown) {
  return;
  }
  
  this.isDown = false;
  
  this.startMomentum((this.startX - x) / (this.getTimeTick() - this.startTick));
  },
  
  getTimeTick: function () {
  return (new Date()).getTime();
  },
  
  startMomentum: function (force) {
  if (force === 0) {
  return;
  }
  
  var rotation = this.currentRotation;
  var speed = Math.min(2.5, Math.abs(force));
  var direction = Math.abs(force) / force;
  
  if (speed < 1) {
  return;
  }
  
  var orbiter = this;
  
  function nextTick() {
  speed -= 0.05;
  
  if (speed < 0) {
  orbiter.endMomentum();
  
  return;
  }
  
  rotation += direction;
  
  orbiter.setRotation(orbiter.wrapRotation(rotation));
  
  var time = 20 / speed;
  
  if (time > 400) {
  return;
  }
  
  orbiter.momentumTimer = window.setTimeout(nextTick, time);
  }
  
  nextTick();
  },
  
  endMomentum: function () {
  window.clearTimeout(this.momentumTimer);
  }
  };
  
  function CssOrbiter($sourceElement, options) {
  var orbiter = new Orbiter($sourceElement, options);
  
  var $div = null;
  
  orbiter.getViewer$ = function () {
  if ($div) {
  return $div;
  }
  
  $div = $(document.createElement('div'))
  .width(this.$sourceElement.width())
  .height(this.$sourceElement.height());
  
  return $div;
  };
  
  orbiter.updateViewer = function () {
  var $div = this.getViewer$();
  
  var rotation = this.currentRotation;
  var frame = Math.floor(rotation / this.rotationsPerFrame);
  var rotationInFrame = rotation % this.rotationsPerFrame;
  
  var x = 0;
  var y = rotationInFrame * $div.height();
  
  var $frameImage = this.frameImages[frame];
  
  $div.css({
           backgroundImage: 'url(' + escape($frameImage.attr('src')) + ')',
           backgroundPosition: '0 ' + y + 'px'
           });
  };
  
  return orbiter;
  }
  
  function CanvasOrbiter($sourceElement, options) {
  var orbiter = new Orbiter($sourceElement, options);
  
  var $canvas = null;
  
  orbiter.getViewer$ = function () {
  if ($canvas) {
  return $canvas;
  }
  
  var canvas = document.createElement('canvas');
  
  canvas.width = this.$sourceElement.width();
  canvas.height = this.$sourceElement.height();
  
  $canvas = $(canvas);
  
  return $canvas;
  };
  
  orbiter.updateViewer = function () {
  var rotation = this.currentRotation;
  var frame = Math.floor(rotation / this.rotationsPerFrame);
  var rotationInFrame = rotation % this.rotationsPerFrame;
  
  var context = this.getViewer$()[0].getContext('2d');
  var width = context.canvas.width;
  var height = context.canvas.height;
  var x = 0;
  var y = rotationInFrame * height;
  
  var $frameImage = this.frameImages[frame];
  
  context.drawImage(
                    $frameImage[0],         // image
                    x, y, width, height,    // source
                    0, 0, width, height     // destination
                    );
  };
  
  return orbiter;
  }
  
  function toolTipIt$($element) {
  var $toolTip = $(document.createElement('div'))
  .gxInit({ queue: 'cancel' })
  .css({ position: 'absolute' })
  .css(hideEffect)
  .hide();
  
  $element
  .data('toolTipIt', {
        title: $element.attr('title'),
        $toolTip: $toolTip,
        hideTimer: null
        })
  .attr('title', '')
  .bind('mouseenter', toolTipIt$.enter)
  .bind('mouseleave', toolTipIt$.leave);
  
  return $toolTip;
  }
  
  toolTipIt$.enter = function () {
  var $element = $(this);
  var data = $element.data('toolTipIt');
  
  var offset = $element.offset();
  
  if (data.hideTimer) {
  window.clearTimeout(data.hideTimer);
  data.hideTimer = null;
  }
  
  data.$toolTip
  .text(data.title)
  .show()
  .gx(showEffect, 300, 'Quad:Out');
  
  // Append before applying CSS because
  // outerHeight doesn't exist until the
  // element is added to the DOM
  data.$toolTip
  .appendTo($element)
  .css({
       top: -data.$toolTip.outerHeight() - 1   // Fix off-by-one pixel error
       })
  };
  
  toolTipIt$.leave = function () {
  var $element = $(this);
  var data = $element.data('toolTipIt');
  
  if (data.hideTimer) {
  window.clearTimeout(data.hideTimer);
  data.hideTimer = null;
  }
  
  data.hideTimer = window.setTimeout(function () {
                                     data.hideTimer = null;
                                     
                                     data.$toolTip
                                     .gx(hideEffect, 300, 'Sine', function () {
                                         data.$toolTip
                                         .css({
                                              top: 0
                                              })
                                         .remove();
                                         });
                                     }, 500);
  };
  
  function getOrbiterClass() {
  // Prefer canvas; fall back to plain CSS
  
  try {
  if (document.createElement('canvas').getContext) {
  return CanvasOrbiter;
  }
  } catch (e) {
  return CssOrbiter;
  }
  
  return CssOrbiter;
  }
  
  var orbit = function (options) {
  options = $.extend({ }, orbit.defaultOptions, options);
  
  this.each(function () {
            var $orbitee = $(this);
            
            try {
            var OrbiterClass = getOrbiterClass();
            var orbiter = new OrbiterClass($orbitee, options);
            
            switch (options.loadTrigger) {
            case 'now':
            default:
            orbiter.load();
            
            break;
            
            case 'click':
            $orbitee.one('mousedown', function () {
                         orbiter.load();
                         });
            
            break;
            
            case 'hover':
            $orbitee.one('mouseenter', function () {
                         orbiter.load();
                         });
            
            break;
            }
            
            $orbitee.data('orbiter', orbiter);
            } catch (e) {
            console.log('Exception in $.fn.orbit: ');
            console.log(e);
            }
            });
  };
  
  orbit.defaultOptions = {
  rotationCount: 32,
  
  frameImage: function ($sourceElement, frame) {
  var url = $sourceElement.attr('src');
  url = url.replace('-thumb', '-' + frame);
  url = url.replace(/#.*$/, '');
  
  return url;
  },
  
  features: { },
  
  featureFadeInTime: 300,
  featureFadeOutTime: 600,
  
  featureFadeInEasing: 'Sine:Out',
  featureFadeOutEasing: 'Sine:Out',
  
  featureMouseInTime: 500,
  featureMouseOutTime: 1000,
  
  featureMouseInEasing: 'Expo',
  featureMouseOutEasing: 'Expo',
  
  rotationsPerFrame: 1,
  pixelsPerRotation: 10,
  
  showLoading: false,
  loadTrigger: 'now'  // now, hover, click
  };
  
  $.fn.orbit = orbit;
  
  $.fn.disableSelection = function () {
  return this
  .bind('selectstart.disableSelection mousedown.disableSelection', function (e) {
        e.preventDefault();
        })
  .attr('unselectable', 'unselectable'); // IE
  };
  
  $(function () {
    $('img.auto-orbit').each(function () {
                             var $image = $(this);
                             var json = $image.attr('src').replace(/^[^#]*#/, '');
                             var options = $.parseJSON(json);
                             
                             $image.orbit(options);
                             });
    });
  }(jQuery));
(function(d){function l(a,b){var c=new j(a,b),e=null;c.getViewer$=function(){return e?e:e=d(document.createElement("div")).width(this.$sourceElement.width()).height(this.$sourceElement.height())};c.updateViewer=function(){var a=this.getViewer$(),b=this.currentRotation,c=Math.floor(b/this.rotationsPerFrame),b=b%this.rotationsPerFrame*a.height();a.css({backgroundImage:"url("+escape(this.frameImages[c].attr("src"))+")",backgroundPosition:"0 "+b+"px"})};return c}function m(a,b){var c=new j(a,b),e=null;
c.getViewer$=function(){if(e)return e;var a=document.createElement("canvas");a.width=this.$sourceElement.width();a.height=this.$sourceElement.height();return e=d(a)};c.updateViewer=function(){var a=this.currentRotation,b=Math.floor(a/this.rotationsPerFrame),a=a%this.rotationsPerFrame,c=this.getViewer$()[0].getContext("2d"),e=c.canvas.width,d=c.canvas.height;c.drawImage(this.frameImages[b][0],0,a*d,e,d,0,0,e,d)};return c}function h(a){var b=d(document.createElement("div")).gxInit({queue:"cancel"}).css({position:"absolute"}).css(f).hide();
a.data("toolTipIt",{title:a.attr("title"),$toolTip:b,hideTimer:null}).attr("title","").bind("mouseenter",h.enter).bind("mouseleave",h.leave);return b}var f={opacity:0},i={opacity:1};d.support.opacity||(f={},i={});var j=function(a,b){this.$sourceElement=a;this.options=b;this.$sourceElement.css({cursor:"click"===this.options.loadTrigger?"pointer":void 0}).disableSelection();this.$container=d(document.createElement("div")).addClass("orbiter").css({display:"inline-block",position:"relative"}).disableSelection().data("orbiter",
this);this.$featureBoxContainer=d(document.createElement("div")).css({display:"block",position:"absolute",left:0,right:0,top:0,bottom:0}).hide().css(f).gxInit({queue:"cancel"}).appendTo(this.$container);this.rotationCount=b.rotationCount;this.rotationsPerFrame=b.rotationsPerFrame;this.pixelsPerRotation=b.pixelsPerRotation;this.features=this.options.features;this.frameImages=[];this.featureBoxes={};this.isLoaded=!1;this.bind()};j.prototype={updateViewer:function(){throw"Implement updateViewer in a subclass";
},getViewer$:function(){throw"Implement getViewer$ i na subclass";},bind:function(){function a(a){return d.browser.msie?1===a.button:0===a.button}function b(b){a(b)&&e.move(b.screenX,b.screenY)}function c(c){a(c)&&(e.up(c.screenX,c.screenY),d(document).unbind("mousemove",b))}var e=this;this.$container.bind("mousedown",function(g){a(g)&&(e.down(g.screenX,g.screenY),d(document).one("mouseup",c),d(document).bind("mousemove",b))});this.$container[0].ontouchstart=function(a){a.preventDefault();e.down(a.targetTouches[0].screenX,
a.targetTouches[0].screenY);return!0};this.$container[0].ontouchmove=function(a){a.preventDefault();e.move(a.targetTouches[0].screenX,a.targetTouches[0].screenY);return!0};this.$container[0].ontouchend=function(a){a.preventDefault();e.up(a.changedTouches[0].screenX,a.changedTouches[0].screenY);return!0};void 0!=document.addEventListener&&null!=document.addEventListener&&document.addEventListener("touchstart",function(){},!1);this.$container.bind("mouseenter",function(){e.$featureBoxContainer.show().gx(i,
e.options.featureMouseInTime,e.options.featureMouseInEasing)});this.$container.bind("mouseleave",function(){e.$featureBoxContainer.gx(f,e.options.featureMouseOutTime,e.options.featureMouseOutEasing,function(){e.$featureBoxContainer.hide()})})},load:function(){if(!this.isLoaded){this.showLoading();var a=this;this.loadAllFrames(function(){a.isLoaded=!0;a.setRotation(0);a.getViewer$().appendTo(a.$container);a.$container.css({width:a.$sourceElement.width(),height:a.$sourceElement.height()});a.hideLoading(function(){a.$sourceElement.replaceWith(a.$container)})})}},
showLoading:function(){if(this.options.showLoading){var a=this;this.$sourceElement.css({cursor:"wait"});this.loadingTimeout=window.setTimeout(function(){var b=a.$sourceElement.offset();b.width=a.$sourceElement.width();b.height=a.$sourceElement.height();a.$sourceElement.animate({opacity:0.5},500);a.$loading=d(document.createElement("img")).attr("src","images/loader.gif").css({position:"absolute",left:b.left+(b.width-32)/2,top:b.top+(b.height-32)/2}).appendTo(document.body)},0)}},hideLoading:function(a){this.options.showLoading?
(this.loadingTimeout&&window.clearTimeout(this.loadingTimeout),this.$sourceElement.css({cursor:""}).animate({opacity:1},200,a),this.$loading&&(this.$loading.remove(),this.$loading=null)):a()},loadAllFrames:function(a){function b(){--e;0>=e&&a()}var c=Math.ceil(this.rotationCount/this.rotationsPerFrame),e=c,d;for(d=0;d<c;++d)this.loadFrameImage(d,b)},wrapRotation:function(a){var b=this.rotationCount;if(0===b)return 0;for(;a>=b;)a-=b;for(;0>a;)a+=b;return a},setRotation:function(a){if(parseInt(a,10)!=
a)throw alert("rotation: "+a),"Rotation number must be an integer";a=parseInt(a,10);if(0>a||a>=this.rotationCount)throw"Rotation number out of range";a!==this.currentRotation&&(this.currentRotation=a,this.updateViewer(),this.updateFeatureBoxes())},updateFeatureBoxes:function(){var a=this,b=this.getFeatures(this.currentRotation),c=d(c).map(function(){return this.name}).get();d.each(this.featureBoxes,function(b,g){0>d(c).index(b)&&!g.isFadingOut&&(g.gx(f,a.options.featureFadeOutTime,a.options.featureFadeOutEasing,
function(){delete a.featureBoxes[b];g.hide()}),g.isFadingOut=!0)});d(b).each(function(){var b=a.featureBoxes[this.name];b?(b.isFadingOut=!1,b.show(),b.gx(d.extend({},i,this.position),a.options.featureFadeInTime,a.options.featureFadeInEasing)):(b=d(document.createElement("div")).addClass("orbiter-feature").css(this.position).css({position:"absolute"}).css(f).attr("title",this.name).gxInit({queue:"cancel"}).gx(i,a.options.featureFadeInTime,a.options.featureFadeInEasing).appendTo(a.$featureBoxContainer),
h(b).addClass("feature-tool-tip"));a.featureBoxes[this.name]=b})},getFeatures:function(a){var b=[];d.each(this.features,function(c,e){e[a]&&b.push({name:c,position:e[a]})});return b},loadFrameImage:function(a,b){var c=this.frameImages[a];if(c)c.data("callbacks")?c.data("callbacks").push(b):b(c);else{var c=this.options.frameImage,e;"function"===typeof c&&(c=c(this.$sourceElement,a));"string"===typeof c&&(e=c,c=new Image);c.tagName&&"IMG"===c.tagName&&(c=d(c));if(!(c instanceof d))throw"image should be a jQuery object";
this.frameImages[a]=c;c.data("callbacks",[b]);c.load(function(){d(c.data("callbacks")).each(function(){this(c)})});e&&c.attr("src",e)}},down:function(a,b){this.isDown=!0;this.startX=a;this.startY=b;this.startTick=this.getTimeTick();this.startRotation=this.currentRotation;this.endMomentum()},move:function(a){this.isDown&&(a=Math.round((this.startX-a)/this.pixelsPerRotation),this.setRotation(this.wrapRotation(this.startRotation+a)))},up:function(a){this.isDown&&(this.isDown=!1,this.startMomentum((this.startX-
a)/(this.getTimeTick()-this.startTick)))},getTimeTick:function(){return(new Date).getTime()},startMomentum:function(a){function b(){e-=0.05;if(0>e)f.endMomentum();else{c+=d;f.setRotation(f.wrapRotation(c));var a=20/e;400<a||(f.momentumTimer=window.setTimeout(b,a))}}if(0!==a){var c=this.currentRotation,e=Math.min(2.5,Math.abs(a)),d=Math.abs(a)/a;if(!(1>e)){var f=this;b()}}},endMomentum:function(){window.clearTimeout(this.momentumTimer)}};h.enter=function(){var a=d(this),b=a.data("toolTipIt");a.offset();
b.hideTimer&&(window.clearTimeout(b.hideTimer),b.hideTimer=null);b.$toolTip.text(b.title).show().gx(i,300,"Quad:Out");b.$toolTip.appendTo(a).css({top:-b.$toolTip.outerHeight()-1})};h.leave=function(){var a=d(this).data("toolTipIt");a.hideTimer&&(window.clearTimeout(a.hideTimer),a.hideTimer=null);a.hideTimer=window.setTimeout(function(){a.hideTimer=null;a.$toolTip.gx(f,300,"Sine",function(){a.$toolTip.css({top:0}).remove()})},500)};var k=function(a){a=d.extend({},k.defaultOptions,a);this.each(function(){var b=
d(this);try{var c;a:{try{if(document.createElement("canvas").getContext){c=m;break a}}catch(e){}c=l}var g=new c(b,a);switch(a.loadTrigger){default:g.load();break;case "click":b.one("mousedown",function(){g.load()});break;case "hover":b.one("mouseenter",function(){g.load()})}b.data("orbiter",g)}catch(f){console.log("Exception in $.fn.orbit: "),console.log(f)}})};k.defaultOptions={rotationCount:32,frameImage:function(a,b){var c=a.attr("src"),c=c.replace("-thumb","-"+b);return c=c.replace(/#.*$/,"")},
features:{},featureFadeInTime:300,featureFadeOutTime:600,featureFadeInEasing:"Sine:Out",featureFadeOutEasing:"Sine:Out",featureMouseInTime:500,featureMouseOutTime:1E3,featureMouseInEasing:"Expo",featureMouseOutEasing:"Expo",rotationsPerFrame:1,pixelsPerRotation:10,showLoading:!1,loadTrigger:"now"};d.fn.orbit=k;d.fn.disableSelection=function(){return this.bind("selectstart.disableSelection mousedown.disableSelection",function(a){a.preventDefault()}).attr("unselectable","unselectable")};d(function(){d("img.auto-orbit").each(function(){var a=
d(this),b=a.attr("src").replace(/^[^#]*#/,""),b=d.parseJSON(b);a.orbit(b)})})})(jQuery);
/**
*	swffit v2.3.3 (11/23/2009) <http://swffit.millermedeiros.com/>
*	Copyright (c) 2009 Miller Medeiros <http://www.millermedeiros.com/>
*	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

var swffit=function(){var win=window,doc=document,html=doc.getElementsByTagName("html")[0],AGENT=navigator.userAgent.toLowerCase(),WK=/webkit/.test(AGENT),IE=/msie/.test(AGENT)&&!win.opera,FF=/firefox/.test(AGENT)&&!win.opera,UNDEF="undefined",_ft,_re,_t,_mw,_mh,_xw,_xh,_hc,_vc,_ow,_oh;swfobject.createCSS("object","position:absolute; outline:none");function fit(t,mw,mh,xw,xh,hc,vc){mw=mw||_ow;mh=mh||_oh;xw=xw||null;xh=xh||null;hc=(hc||hc==null);vc=(vc||vc==null);configure({target:t,minWid:mw,minHei:mh,maxWid:xw,maxHei:xh,hCenter:hc,vCenter:vc});}function configure(o){var evalNum=function(v,p){return(typeof o[p]!=UNDEF)?o[p]:v;},evalBool=function(v,p){return(o[p]||(v&&typeof o[p]==UNDEF));};_mw=evalNum(_mw,"minWid");_mh=evalNum(_mh,"minHei");_xw=evalNum(_xw,"maxWid");_xh=evalNum(_xh,"maxHei");_hc=evalBool(_hc,"hCenter");_vc=evalBool(_vc,"vCenter");if(o.target&&(o.target!=_t)){_t=o.target;swfobject.addDomLoadEvent(initFit);if(IE){swfobject.addLoadEvent(initFit);}}else{startFit();}}function initFit(){if(!html.style.overflowX){controlScroll(0,0);}if(!html.style.overflowY){controlScroll(0,1);}html.style.height=doc.body.style.height="100%";doc.body.style.margin=doc.body.style.padding=0;var st="width:100%; height:100%";st+=(IE)?"; overflow:hidden":"";swfobject.createCSS("#"+_t,st);_ft=doc.getElementById(_t);_ft=(_ft!=UNDEF&&FF&&/object/.test(_ft.innerHTML))?doc.getElementById(_t).getElementsByTagName("object")[0]:_ft;_ow=_ft.width;_oh=_ft.height;_mw=_mw||_ow;_mh=_mh||_oh;startFit();}function startFit(){setSize();if(!_re){swffit.addResizeEvent(setSize);_re=1;}}function stopFit(w,h){if(_re){swffit.removeResizeEvent(setSize);_re=0;setStyle("top","auto");setStyle("left","auto");setStyle("marginTop",0);setStyle("marginLeft",0);w=w||"100%";h=h||"100%";setWidth(w);setHeight(h);forceRedraw();}}function forceRedraw(){if(WK){html.focus();}}function controlResizeEvent(a,fn){var p=(a)?["addEventListener","attachEvent"]:["removeEventListener","detachEvent"];if(win[p[0]]){win[p[0]]("resize",fn,false);}else{if(win[p[1]]){win[p[1]]("onresize",fn);}}}function setWidth(w){var v=(isNaN(w))?w:w+"px";setStyle("width",v);}function setHeight(h){var v=(isNaN(h))?h:h+"px";setStyle("height",v);}function setStyle(p,v){_ft.style[p]=v;}function setSize(){var iw=(win.innerWidth)?win.innerWidth:((doc.documentElement.clientWidth)?doc.documentElement.clientWidth:doc.body.clientWidth),ih=(win.innerHeight)?win.innerHeight:((doc.documentElement.clientHeight)?doc.documentElement.clientHeight:doc.body.clientHeight);iw-=(!IE&&ih<=_mh)?18:0;ih-=(!IE&&iw<=_mw)?18:0;if(_xw&&iw>=_xw){setWidth(_xw);setPosition(0,1);}else{if(iw>_mw&&(iw<_xw||!_xw)){setWidth("100%");}else{setWidth(_mw);}setPosition(0,0);}if(_xh&&ih>=_xh){setHeight(_xh);setPosition(1,1);}else{if(ih>_mh&&(ih<_xh||!_xh)){setHeight("100%");}else{setHeight(_mh);}setPosition(1,0);}forceRedraw();}function setPosition(t,x){var p,m;if(t){p=(x&&_vc)?"50%":"auto";m=(x&&_vc)?-(_xh*0.5)+"px":0;setStyle("top",p);setStyle("marginTop",m);}else{p=(x&&_hc)?"50%":"auto";m=(x&&_hc)?-(_xw*0.5)+"px":0;setStyle("left",p);setStyle("marginLeft",m);}}function controlScroll(s,v){var p=(v)?"overflowY":"overflowX";html.style[p]=(s)?"scroll":"auto";}function getValueOf(p){var o={target:_t,minWid:_mw,minHei:_mh,maxWid:_xw,maxHei:_xh,hCenter:_hc,vCenter:_vc};return o[p];}return{fit:fit,configure:configure,startFit:startFit,stopFit:stopFit,getValueOf:getValueOf,addResizeEvent:function(fn){controlResizeEvent(1,fn);},removeResizeEvent:function(fn){controlResizeEvent(0,fn);},showScrollH:function(){controlScroll(1,0);},showScrollV:function(){controlScroll(1,1);}};}();
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
