(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="170",Di={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ld=0,za=1,Id=2,Cc=1,Rc=2,Tn=3,Nn=0,kt=1,It=2,Pn=0,Ni=1,fo=2,Ha=3,Ga=4,Dd=5,ai=100,Nd=101,Fd=102,Ud=103,Od=104,kd=200,Bd=201,zd=202,Hd=203,mo=204,go=205,Gd=206,Vd=207,$d=208,Wd=209,Xd=210,qd=211,jd=212,Yd=213,Kd=214,_o=0,vo=1,xo=2,Bi=3,yo=4,bo=5,Mo=6,So=7,Pc=0,Zd=1,Jd=2,Kn=0,Lc=1,Ic=2,Dc=3,ca=4,Qd=5,Nc=6,Fc=7,Va="attached",eh="detached",Uc=300,zi=301,Hi=302,wo=303,Eo=304,yr=306,Gi=1e3,jn=1001,fr=1002,Bt=1003,Oc=1004,fs=1005,Wt=1006,ar=1007,Cn=1008,Fn=1009,kc=1010,Bc=1011,ys=1012,da=1013,ci=1014,rn=1015,Ln=1016,ha=1017,ua=1018,Vi=1020,zc=35902,Hc=1021,Gc=1022,Kt=1023,Vc=1024,$c=1025,Fi=1026,$i=1027,pa=1028,fa=1029,Wc=1030,ma=1031,ga=1033,lr=33776,cr=33777,dr=33778,hr=33779,To=35840,Ao=35841,Co=35842,Ro=35843,Po=36196,Lo=37492,Io=37496,Do=37808,No=37809,Fo=37810,Uo=37811,Oo=37812,ko=37813,Bo=37814,zo=37815,Ho=37816,Go=37817,Vo=37818,$o=37819,Wo=37820,Xo=37821,ur=36492,qo=36494,jo=36495,Xc=36283,Yo=36284,Ko=36285,Zo=36286,bs=2300,Ms=2301,Tr=2302,$a=2400,Wa=2401,Xa=2402,th=2500,nh=0,qc=1,Jo=2,ih=3200,sh=3201,jc=0,rh=1,qn="",xt="srgb",Nt="srgb-linear",br="linear",et="srgb",fi=7680,qa=519,oh=512,ah=513,lh=514,Yc=515,ch=516,dh=517,hh=518,uh=519,Qo=35044,ja="300 es",Rn=2e3,mr=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const _s=Math.PI/180,Wi=180/Math.PI;function an(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function _a(r,e){return(r%e+e)%e}function ph(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function fh(r,e,t){return r!==e?(t-r)/(e-r):0}function vs(r,e,t){return(1-t)*r+t*e}function mh(r,e,t,n){return vs(r,e,1-Math.exp(-t*n))}function gh(r,e=1){return e-Math.abs(_a(r,e*2)-e)}function _h(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yh(r,e){return r+Math.random()*(e-r)}function bh(r){return r*(.5-Math.random())}function Mh(r){r!==void 0&&(Ya=r);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sh(r){return r*_s}function wh(r){return r*Wi}function Eh(r){return(r&r-1)===0&&r!==0}function Th(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ah(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ch(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),h=s((e-n)/2),u=o((e-n)/2),p=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*d,l*h,l*u,a*c);break;case"YZY":r.set(l*u,a*d,l*h,a*c);break;case"ZXZ":r.set(l*h,l*u,a*d,a*c);break;case"XZX":r.set(a*d,l*m,l*p,a*c);break;case"YXY":r.set(l*p,a*d,l*m,a*c);break;case"ZYZ":r.set(l*m,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kc={DEG2RAD:_s,RAD2DEG:Wi,generateUUID:an,clamp:At,euclideanModulo:_a,mapLinear:ph,inverseLerp:fh,lerp:vs,damp:mh,pingpong:gh,smoothstep:_h,smootherstep:vh,randInt:xh,randFloat:yh,randFloatSpread:bh,seededRandom:Mh,degToRad:Sh,radToDeg:wh,isPowerOfTwo:Eh,ceilPowerOfTwo:Th,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Ch,normalize:tt,denormalize:nn};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],m=n[8],_=i[0],g=i[3],f=i[6],y=i[1],x=i[4],v=i[7],C=i[2],E=i[5],T=i[8];return s[0]=o*_+a*y+l*C,s[3]=o*g+a*x+l*E,s[6]=o*f+a*v+l*T,s[1]=c*_+d*y+h*C,s[4]=c*g+d*x+h*E,s[7]=c*f+d*v+h*T,s[2]=u*_+p*y+m*C,s[5]=u*g+p*x+m*E,s[8]=u*f+p*v+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,p=c*s-o*l,m=t*h+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-d*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Fe;function Zc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ss(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rh(){const r=Ss("canvas");return r.style.display="block",r}const Ka={};function ms(r){r in Ka||(Ka[r]=!0,console.warn(r))}function Ph(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Lh(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ih(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ze={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qn?br:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function In(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ui(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Za=[.64,.33,.3,.6,.15,.06],Ja=[.2126,.7152,.0722],Qa=[.3127,.329],el=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[Nt]:{primaries:Za,whitePoint:Qa,transfer:br,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Ja,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:Za,whitePoint:Qa,transfer:et,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Ja,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});let mi;class Dh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Ss("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=In(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nh=0;class Jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cr(i[o].image)):s.push(Cr(i[o]))}else s=Cr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fh=0;class Tt extends hi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=jn,i=jn,s=Wt,o=Cn,a=Kt,l=Fn,c=Tt.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=an(),this.name="",this.source=new Jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Uc;Tt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],m=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,C=(f+1)/2,E=(d+u)/4,T=(h+_)/4,R=(m+g)/4;return x>v&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=T/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=R/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-_)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Uh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qc extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=s[o+0],p=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==u||c!==p||d!==m){let g=1-a;const f=l*u+c*p+d*m+h*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),E=Math.atan2(C,f*y);g=Math.sin(g*E)/C,a=Math.sin(a*E)/C}const v=a*y;if(l=l*g+u*v,c=c*g+p*v,d=d*g+m*v,h=h*g+_*v,g===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+d*h+l*p-c*u,e[t+1]=l*m+d*u+c*h-a*p,e[t+2]=c*m+d*p+a*u-l*h,e[t+3]=d*m-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(s/2),u=l(n/2),p=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"YXZ":this._x=u*d*h+c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"ZXY":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h-u*p*m;break;case"ZYX":this._x=u*d*h-c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h+u*p*m;break;case"YZX":this._x=u*d*h+c*p*m,this._y=c*p*h+u*d*m,this._z=c*d*m-u*p*h,this._w=c*d*h-u*p*m;break;case"XZY":this._x=u*d*h-c*p*m,this._y=c*p*h-u*d*m,this._z=c*d*m+u*p*h,this._w=c*d*h+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=i+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new L,nl=new pn;class Un{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(s,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Ns.subVectors(this.max,rs),gi.subVectors(e.a,rs),_i.subVectors(e.b,rs),vi.subVectors(e.c,rs),Bn.subVectors(_i,gi),zn.subVectors(vi,_i),Qn.subVectors(gi,vi);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!Pr(t,gi,_i,vi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,gi,_i,vi,Ns))?!1:(Fs.crossVectors(Bn,zn),t=[Fs.x,Fs.y,Fs.z],Pr(t,gi,_i,vi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new L,new L,new L,new L,new L,new L,new L,new L],Qt=new L,Ds=new Un,gi=new L,_i=new L,vi=new L,Bn=new L,zn=new L,Qn=new L,rs=new L,Ns=new L,Fs=new L,ei=new L;function Pr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ei.fromArray(r,s);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),d=n.dot(ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const kh=new Un,os=new L,Lr=new L;class mn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(Lr)),this.expandByPoint(os.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new L,Ir=new L,Us=new L,Hn=new L,Dr=new L,Os=new L,Nr=new L;class Ji{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ir.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Ir);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=Hn.dot(this.direction),l=-Hn.dot(Us),c=Hn.lengthSq(),d=Math.abs(1-o*o);let h,u,p,m;if(d>0)if(h=o*l-a,u=o*a-l,m=s*d,h>=0)if(u>=-m)if(u<=m){const _=1/d;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ir).addScaledVector(Us,u),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){Dr.subVectors(t,e),Os.subVectors(n,e),Nr.crossVectors(Dr,Os);let o=this.direction.dot(Nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const l=a*this.direction.dot(Os.crossVectors(Hn,Os));if(l<0)return null;const c=a*this.direction.dot(Dr.cross(Hn));if(c<0||l+c>o)return null;const d=-a*Hn.dot(Nr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,s,o,a,l,c,d,h,u,p,m,_,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,d,h,u,p,m,_,g)}set(e,t,n,i,s,o,a,l,c,d,h,u,p,m,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*h,m=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,m=c*d,_=c*h;t[0]=u+_*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-m,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,m=c*d,_=c*h;t[0]=u-_*a,t[4]=-o*h,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,m=a*d,_=a*h;t[0]=l*d,t[4]=m*c-p,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*d,t[4]=_-u*h,t[8]=m*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*h+m,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*l,p=o*c,m=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=o*d,t[9]=p*h-m,t[2]=m*h-p,t[6]=a*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,zh)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Gn.crossVectors(n,Vt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Gn.crossVectors(n,Vt)),Gn.normalize(),ks.crossVectors(Vt,Gn),i[0]=Gn.x,i[4]=ks.x,i[8]=Vt.x,i[1]=Gn.y,i[5]=ks.y,i[9]=Vt.y,i[2]=Gn.z,i[6]=ks.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],m=n[2],_=n[6],g=n[10],f=n[14],y=n[3],x=n[7],v=n[11],C=n[15],E=i[0],T=i[4],R=i[8],S=i[12],b=i[1],P=i[5],O=i[9],U=i[13],G=i[2],X=i[6],W=i[10],Z=i[14],V=i[3],se=i[7],de=i[11],me=i[15];return s[0]=o*E+a*b+l*G+c*V,s[4]=o*T+a*P+l*X+c*se,s[8]=o*R+a*O+l*W+c*de,s[12]=o*S+a*U+l*Z+c*me,s[1]=d*E+h*b+u*G+p*V,s[5]=d*T+h*P+u*X+p*se,s[9]=d*R+h*O+u*W+p*de,s[13]=d*S+h*U+u*Z+p*me,s[2]=m*E+_*b+g*G+f*V,s[6]=m*T+_*P+g*X+f*se,s[10]=m*R+_*O+g*W+f*de,s[14]=m*S+_*U+g*Z+f*me,s[3]=y*E+x*b+v*G+C*V,s[7]=y*T+x*P+v*X+C*se,s[11]=y*R+x*O+v*W+C*de,s[15]=y*S+x*U+v*Z+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],m=e[3],_=e[7],g=e[11],f=e[15];return m*(+s*l*h-i*c*h-s*a*u+n*c*u+i*a*p-n*l*p)+_*(+t*l*p-t*c*u+s*o*u-i*o*p+i*c*d-s*l*d)+g*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*d-n*c*d)+f*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],m=e[12],_=e[13],g=e[14],f=e[15],y=h*g*c-_*u*c+_*l*p-a*g*p-h*l*f+a*u*f,x=m*u*c-d*g*c-m*l*p+o*g*p+d*l*f-o*u*f,v=d*_*c-m*h*c+m*a*p-o*_*p-d*a*f+o*h*f,C=m*h*l-d*_*l-m*a*u+o*_*u+d*a*g-o*h*g,E=t*y+n*x+i*v+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*u*s-h*g*s-_*i*p+n*g*p+h*i*f-n*u*f)*T,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*f+n*l*f)*T,e[3]=(h*l*s-a*u*s-h*i*c+n*u*c+a*i*p-n*l*p)*T,e[4]=x*T,e[5]=(d*g*s-m*u*s+m*i*p-t*g*p-d*i*f+t*u*f)*T,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*f-t*l*f)*T,e[7]=(o*u*s-d*l*s+d*i*c-t*u*c-o*i*p+t*l*p)*T,e[8]=v*T,e[9]=(m*h*s-d*_*s-m*n*p+t*_*p+d*n*f-t*h*f)*T,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*f+t*a*f)*T,e[11]=(d*a*s-o*h*s-d*n*c+t*h*c+o*n*p-t*a*p)*T,e[12]=C*T,e[13]=(d*_*i-m*h*i+m*n*u-t*_*u-d*n*g+t*h*g)*T,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*T,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,u=s*c,p=s*d,m=s*h,_=o*d,g=o*h,f=a*h,y=l*c,x=l*d,v=l*h,C=n.x,E=n.y,T=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+v)*C,i[2]=(m-x)*C,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(u+f))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(m+x)*T,i[9]=(g-y)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xi.set(i[0],i[1],i[2]).length();const o=xi.set(i[4],i[5],i[6]).length(),a=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/s,d=1/o,h=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Rn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,m;if(a===Rn)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===mr)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Rn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-s),u=(t+e)*c,p=(n+i)*d;let m,_;if(a===Rn)m=(o+s)*h,_=-2*h;else if(a===mr)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new L,en=new Ie,Bh=new L(0,0,0),zh=new L(1,1,1),Gn=new L,ks=new L,Vt=new L,il=new Ie,sl=new pn;class fn{constructor(e=0,t=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hh=0;const rl=new L,yi=new pn,Mn=new Ie,Bs=new L,as=new L,Gh=new L,Vh=new pn,ol=new L(1,0,0),al=new L(0,1,0),ll=new L(0,0,1),cl={type:"added"},$h={type:"removed"},bi={type:"childadded",child:null},Fr={type:"childremoved",child:null};class dt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new fn,n=new pn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(al,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(al,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(as,Bs,this.up):Mn.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(Mn),i&&(Mn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($h),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new L,Sn=new L,Ur=new L,wn=new L,Mi=new L,Si=new L,dl=new L,Or=new L,kr=new L,Br=new L,zr=new je,Hr=new je,Gr=new je;class sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Sn.subVectors(n,t),Ur.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(Sn),l=tn.dot(Ur),c=Sn.dot(Sn),d=Sn.dot(Ur),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,m=(o*d-a*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return zr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),zr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,n),Gr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zr,s.x),o.addScaledVector(Hr,s.y),o.addScaledVector(Gr,s.z),o}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Sn.subVectors(e,t),tn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),tn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Mi.subVectors(i,n),Si.subVectors(s,n),Or.subVectors(e,n);const l=Mi.dot(Or),c=Si.dot(Or);if(l<=0&&c<=0)return t.copy(n);kr.subVectors(e,i);const d=Mi.dot(kr),h=Si.dot(kr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Mi,o);Br.subVectors(e,s);const p=Mi.dot(Br),m=Si.dot(Br);if(m>=0&&p<=m)return t.copy(s);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Si,a);const g=d*m-p*h;if(g<=0&&h-d>=0&&p-m>=0)return dl.subVectors(s,i),a=(h-d)/(h-d+(p-m)),t.copy(i).addScaledVector(dl,a);const f=1/(g+_+u);return o=_*f,a=u*f,t.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Vr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Q{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=_a(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Vr(o,s,e+1/3),this.g=Vr(o,s,e),this.b=Vr(o,s,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(At(Pt.r*255,0,255))*65536+Math.round(At(Pt.g*255,0,255))*256+Math.round(At(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){ze.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(zs);const n=vs(Vn.h,zs.h,t),i=vs(Vn.s,zs.s,t),s=vs(Vn.l,zs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Q;Q.NAMES=ed;let Wh=0;class un extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=an(),this.name="",this.blending=Ni,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,Hs=new ve;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}}class td extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nd extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const jt=new Ie,$r=new dt,wi=new L,$t=new Un,ls=new Un,Et=new L;class _t extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?nd:td)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors($t.min,ls.min),$t.expandByPoint(Et),Et.addVectors($t.max,ls.max),$t.expandByPoint(Et)):($t.expandByPoint(ls.min),$t.expandByPoint(ls.max))}$t.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Et.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(e,c),Et.add(wi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,d=new L,h=new L,u=new ve,p=new ve,m=new ve,_=new L,g=new L;function f(R,S,b){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),u.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),m.fromBufferAttribute(s,b),d.sub(c),h.sub(c),p.sub(u),m.sub(u);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(P),a[R].add(_),a[S].add(_),a[b].add(_),l[R].add(g),l[S].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const b=y[R],P=b.start,O=b.count;for(let U=P,G=P+O;U<G;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new L,v=new L,C=new L,E=new L;function T(R){C.fromBufferAttribute(i,R),E.copy(C);const S=a[R];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=y.length;R<S;++R){const b=y[R],P=b.start,O=b.count;for(let U=P,G=P+O;U<G;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let f=0;f<d;f++)u[m++]=c[p++]}return new pt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new Ie,ti=new Ji,Gs=new mn,ul=new L,Vs=new L,$s=new L,Ws=new L,Wr=new L,Xs=new L,pl=new L,qs=new L;class H extends dt{constructor(e=new _t,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Wr.fromBufferAttribute(h,e),o?Xs.addScaledVector(Wr,d):Xs.addScaledVector(Wr.sub(t),d))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Gs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Gs,ul)===null||ti.origin.distanceToSquared(ul)>(e.far-e.near)**2))&&(hl.copy(s).invert(),ti.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],f=o[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=y,C=x;v<C;v+=3){const E=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=js(this,f,e,n,c,d,h,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const y=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);i=js(this,o,e,n,c,d,h,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],f=o[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=y,C=x;v<C;v+=3){const E=v,T=v+1,R=v+2;i=js(this,f,e,n,c,d,h,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const y=g,x=g+1,v=g+2;i=js(this,o,e,n,c,d,h,y,x,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function qh(r,e,t,n,i,s,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Nn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:r}}function js(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Vs),r.getVertexPosition(l,$s),r.getVertexPosition(c,Ws);const d=qh(r,e,t,n,Vs,$s,Ws,pl);if(d){const h=new L;sn.getBarycoord(pl,Vs,$s,Ws,h),i&&(d.uv=sn.getInterpolatedAttribute(i,a,l,c,h,new ve)),s&&(d.uv1=sn.getInterpolatedAttribute(s,a,l,c,h,new ve)),o&&(d.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};sn.getNormal(Vs,$s,Ws,u.normal),d.face=u,d.barycoord=h}return d}class Te extends _t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(h,2));function m(_,g,f,y,x,v,C,E,T,R,S){const b=v/T,P=C/R,O=v/2,U=C/2,G=E/2,X=T+1,W=R+1;let Z=0,V=0;const se=new L;for(let de=0;de<W;de++){const me=de*P-U;for(let Ue=0;Ue<X;Ue++){const Ye=Ue*b-O;se[_]=Ye*y,se[g]=me*x,se[f]=G,c.push(se.x,se.y,se.z),se[_]=0,se[g]=0,se[f]=E>0?1:-1,d.push(se.x,se.y,se.z),h.push(Ue/T),h.push(1-de/R),Z+=1}}for(let de=0;de<R;de++)for(let me=0;me<T;me++){const Ue=u+me+X*de,Ye=u+me+X*(de+1),q=u+(me+1)+X*(de+1),ee=u+(me+1)+X*de;l.push(Ue,Ye,ee),l.push(Ye,q,ee),V+=6}a.addGroup(p,V,S),p+=V,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Te(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=Xi(r[t]);for(const i in n)e[i]=n[i]}return e}function jh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const ws={clone:Xi,merge:Ut};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,fl=new ve,ml=new ve;class Ot extends rd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,fl,ml),t.subVectors(ml,fl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class Zh extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Ei,Ti,e,t);i.layers=this.layers,this.add(i);const s=new Ot(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const o=new Ot(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Ei,Ti,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Ei,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class od extends Tt{constructor(e,t,n,i,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:zi,super(e,t,n,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jh extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new od(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Te(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Pn});s.uniforms.tEquirect.value=t;const o=new H(i,s),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Wt),new Zh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Xr=new L,Qh=new L,eu=new Fe;class Xn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xr.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),i=this.coplanarPoint(Xr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new mn,Ys=new L;class xa{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,s=new Xn,o=new Xn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],m=i[9],_=i[10],g=i[11],f=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,g-p,v-f).normalize(),n[1].setComponents(l+s,u+c,g+p,v+f).normalize(),n[2].setComponents(l+o,u+d,g+m,v+y).normalize(),n[3].setComponents(l-o,u-d,g-m,v-y).normalize(),n[4].setComponents(l-a,u-h,g-_,v-x).normalize(),t===Rn)n[5].setComponents(l+a,u+h,g+_,v+x).normalize();else if(t===mr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ys.x=i.normal.x>0?e.max.x:e.min.x,Ys.y=i.normal.y>0?e.max.y:e.min.y,Ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tu(r){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,d);else{h.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<h.length;p++){const m=h[u],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,m=h.length;p<m;p++){const _=h[p];r.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Mt extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,p=[],m=[],_=[],g=[];for(let f=0;f<d;f++){const y=f*u-o;for(let x=0;x<c;x++){const v=x*h-s;m.push(v,-y,0),_.push(0,0,1),g.push(x/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const x=y+c*f,v=y+c*(f+1),C=y+1+c*(f+1),E=y+1+c*f;p.push(x,v,E),p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Af=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:ru,alphatest_fragment:ou,alphatest_pars_fragment:au,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:du,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:pu,bsdfs:fu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:yu,color_fragment:bu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:wu,common:Eu,cube_uv_reflection_fragment:Tu,defaultnormal_vertex:Au,displacementmap_pars_vertex:Cu,displacementmap_vertex:Ru,emissivemap_fragment:Pu,emissivemap_pars_fragment:Lu,colorspace_fragment:Iu,colorspace_pars_fragment:Du,envmap_fragment:Nu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Uu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:ju,envmap_vertex:ku,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:Hu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:$u,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Ku,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:dp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:pp,morphinstance_vertex:fp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:xp,normal_fragment_maps:yp,normal_pars_fragment:bp,normal_pars_vertex:Mp,normal_vertex:Sp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Ip,dithering_fragment:Dp,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:kp,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:$p,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:jp,transmission_fragment:Yp,transmission_pars_fragment:Kp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:ef,background_vert:tf,background_frag:nf,backgroundCube_vert:sf,backgroundCube_frag:rf,cube_vert:of,cube_frag:af,depth_vert:lf,depth_frag:cf,distanceRGBA_vert:df,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:pf,linedashed_vert:ff,linedashed_frag:mf,meshbasic_vert:gf,meshbasic_frag:_f,meshlambert_vert:vf,meshlambert_frag:xf,meshmatcap_vert:yf,meshmatcap_frag:bf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:wf,meshphong_frag:Ef,meshphysical_vert:Tf,meshphysical_frag:Af,meshtoon_vert:Cf,meshtoon_frag:Rf,points_vert:Pf,points_frag:Lf,shadow_vert:If,shadow_frag:Df,sprite_vert:Nf,sprite_frag:Ff},oe={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},dn={basic:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Q(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Q(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ut([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ut([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ut([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ut([oe.common,oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ut([oe.lights,oe.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};dn.physical={uniforms:Ut([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ks={r:0,b:0,g:0},ii=new fn,Uf=new Ie;function Of(r,e,t,n,i,s,o){const a=new Q(0);let l=s===!0?0:1,c,d,h=null,u=0,p=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const v=m(y);v===null?f(a,l):v&&v.isColor&&(f(v,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,x){const v=m(x);v&&(v.isCubeTexture||v.mapping===yr)?(d===void 0&&(d=new H(new Te(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Xi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),ii.copy(x.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(ii)),d.material.toneMapped=ze.getTransfer(v.colorSpace)!==et,(h!==v||u!==v.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,h=v,u=v.version,p=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new H(new Mt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Xi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ze.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(Ks,sd(r)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:g}}function kf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(b,P,O,U,G){let X=!1;const W=h(U,O,P);s!==W&&(s=W,c(s.object)),X=p(b,U,O,G),X&&m(b,U,O,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(b,P,O,U),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function d(b){return r.deleteVertexArray(b)}function h(b,P,O){const U=O.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let W=X[U];return W===void 0&&(W=u(l()),X[U]=W),W}function u(b){const P=[],O=[],U=[];for(let G=0;G<t;G++)P[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,P,O,U){const G=s.attributes,X=P.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){const de=G[V];let me=X[V];if(me===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),de===void 0||de.attribute!==me||me&&de.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function m(b,P,O,U){const G={},X=P.attributes;let W=0;const Z=O.getAttributes();for(const V in Z)if(Z[V].location>=0){let de=X[V];de===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const me={};me.attribute=de,de&&de.data&&(me.data=de.data),G[V]=me,W++}s.attributes=G,s.attributesNum=W,s.index=U}function _(){const b=s.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function g(b){f(b,0)}function f(b,P){const O=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;O[b]=1,U[b]===0&&(r.enableVertexAttribArray(b),U[b]=1),G[b]!==P&&(r.vertexAttribDivisor(b,P),G[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==b[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function x(b,P,O,U,G,X,W){W===!0?r.vertexAttribIPointer(b,P,O,G,X):r.vertexAttribPointer(b,P,O,U,G,X)}function v(b,P,O,U){_();const G=U.attributes,X=O.getAttributes(),W=P.defaultAttributeValues;for(const Z in X){const V=X[Z];if(V.location>=0){let se=G[Z];if(se===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const de=se.normalized,me=se.itemSize,Ue=e.get(se);if(Ue===void 0)continue;const Ye=Ue.buffer,q=Ue.type,ee=Ue.bytesPerElement,re=q===r.INT||q===r.UNSIGNED_INT||se.gpuType===da;if(se.isInterleavedBufferAttribute){const ae=se.data,we=ae.stride,Pe=se.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)f(V.location+Oe,ae.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)g(V.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let Oe=0;Oe<V.locationSize;Oe++)x(V.location+Oe,me/V.locationSize,q,de,we*ee,(Pe+me/V.locationSize*Oe)*ee,re)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,se.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ae=0;ae<V.locationSize;ae++)x(V.location+ae,me/V.locationSize,q,de,me*ee,me/V.locationSize*ae*ee,re)}}else if(W!==void 0){const de=W[Z];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(V.location,de);break;case 3:r.vertexAttrib3fv(V.location,de);break;case 4:r.vertexAttrib4fv(V.location,de);break;default:r.vertexAttrib1fv(V.location,de)}}}}y()}function C(){R();for(const b in n){const P=n[b];for(const O in P){const U=P[O];for(const G in U)d(U[G].object),delete U[G];delete P[O]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const O in P){const U=P[O];for(const G in U)d(U[G].object),delete U[G];delete P[O]}delete n[b.id]}function T(b){for(const P in n){const O=n[P];if(O[b.id]===void 0)continue;const U=O[b.id];for(const G in U)d(U[G].object),delete U[G];delete O[b.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Bf(r,e,t){let n;function i(c){n=c}function s(c,d){r.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(r.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let m=0;m<h;m++)p+=d[m];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],d[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_]*u[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zf(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Kt&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==rn&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:E}}function Hf(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Xn,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,f=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?d(null):c();else{const y=s?0:n,x=y*4;let v=f.clippingState||null;l.value=v,v=d(m,u,x,p);for(let C=0;C!==x;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const f=p+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Gf(r){let e=new WeakMap;function t(o,a){return a===wo?o.mapping=zi:a===Eo&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wo||a===Eo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jh(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mr extends rd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,gl=[.125,.215,.35,.446,.526,.582],li=20,qr=new Mr,_l=new Q;let jr=null,Yr=0,Kr=0,Zr=!1;const oi=(1+Math.sqrt(5))/2,Ai=1/oi,vl=[new L(-oi,Ai,0),new L(oi,Ai,0),new L(-Ai,0,oi),new L(Ai,0,oi),new L(0,oi,-Ai),new L(0,oi,Ai),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jr,Yr,Kr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ln,format:Kt,colorSpace:Nt,depthBuffer:!1},i=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vf(s)),this._blurMaterial=$f(s,e,t)}return i}_compileMaterial(e){const t=new H(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(_l),d.toneMapping=Kn,d.autoClear=!1;const p=new on({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new H(new Te,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(_l),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Zs(i,y*x,f>2?x:0,x,x),d.setRenderTarget(i),_&&d.render(m,a),d.render(e,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zi||e.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vl[(i-s-1)%vl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new H(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):li;g>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${li}`);const f=[];let y=0;for(let T=0;T<li;++T){const R=T/_,S=Math.exp(-R*R/2);f.push(S),T===0?y+=S:T<g&&(y+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const v=this._sizeLods[i],C=3*v*(i>x-Li?i-x+Li:0),E=4*(this._cubeSize-v);Zs(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(h,qr)}}function Vf(r){const e=[],t=[],n=[];let i=r;const s=r-Li+1+gl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Li?l=gl[o-r+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,m=6,_=3,g=2,f=1,y=new Float32Array(_*m*p),x=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,_*m*E),x.set(u,g*m*E);const b=[E,E,E,E,E,E];v.set(b,f*m*E)}const C=new _t;C.setAttribute("position",new pt(y,_)),C.setAttribute("uv",new pt(x,g)),C.setAttribute("faceIndex",new pt(v,f)),e.push(C),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(r,e,t){const n=new ln(r,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $f(r,e,t){const n=new Float32Array(li),i=new L(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yl(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function bl(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wf(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wo||l===Eo,d=l===zi||l===Hi;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ea(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new ea(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qf(r,e,t,n){const i={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,f=_.length;g<f;g++)e.remove(_[g])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const _=p[m];for(let g=0,f=_.length;g<f;g++)e.update(_[g],r.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,m=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){const C=y[x+0],E=y[x+1],T=y[x+2];u.push(C,E,E,T,T,C)}}else if(m!==void 0){const y=m.array;_=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const C=x+0,E=x+1,T=x+2;u.push(C,E,E,T,T,C)}}else return;const g=new(Zc(u)?nd:td)(u,1);g.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function jf(r,e,t){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){r.drawElements(n,p,s,u*o),t.update(p,n,1)}function c(u,p,m){m!==0&&(r.drawElementsInstanced(n,p,s,u*o,m),t.update(p,n,m))}function d(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function h(u,p,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,_,0,m);let f=0;for(let y=0;y<m;y++)f+=p[y]*_[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Yf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kf(r,e,t){const n=new WeakMap,i=new je;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let C=a.attributes.position.count*v,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*E*4*h),R=new Qc(T,C,E,h);R.type=rn,R.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const O=f[P],U=y[P],G=x[P],X=C*E*4*P;for(let W=0;W<O.count;W++){const Z=W*S;m===!0&&(i.fromBufferAttribute(O,W),T[X+Z+0]=i.x,T[X+Z+1]=i.y,T[X+Z+2]=i.z,T[X+Z+3]=0),_===!0&&(i.fromBufferAttribute(U,W),T[X+Z+4]=i.x,T[X+Z+5]=i.y,T[X+Z+6]=i.z,T[X+Z+7]=0),g===!0&&(i.fromBufferAttribute(G,W),T[X+Z+8]=i.x,T[X+Z+9]=i.y,T[X+Z+10]=i.z,T[X+Z+11]=G.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new ve(C,E)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Zf(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ld extends Tt{constructor(e,t,n,i,s,o,a,l,c,d=Fi){if(d!==Fi&&d!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Fi&&(n=ci),n===void 0&&d===$i&&(n=Vi),super(null,i,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cd=new Tt,Ml=new ld(1,1),dd=new Qc,hd=new Oh,ud=new od,Sl=[],wl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function Qi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sl[i];if(s===void 0&&(s=new Float32Array(i),Sl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sr(r,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function nm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Al.set(n),r.uniformMatrix2fv(this.addr,!1,Al),wt(t,n)}}function im(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;Tl.set(n),r.uniformMatrix3fv(this.addr,!1,Tl),wt(t,n)}}function sm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(St(t,n))return;El.set(n),r.uniformMatrix4fv(this.addr,!1,El),wt(t,n)}}function rm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function cm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function um(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ml.compareFunction=Yc,s=Ml):s=cd,t.setTexture2D(e||s,i)}function fm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hd,i)}function mm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ud,i)}function gm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dd,i)}function _m(r){switch(r){case 5126:return Jf;case 35664:return Qf;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return dm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(r,e){r.uniform1fv(this.addr,e)}function xm(r,e){const t=Qi(e,this.size,2);r.uniform2fv(this.addr,t)}function ym(r,e){const t=Qi(e,this.size,3);r.uniform3fv(this.addr,t)}function bm(r,e){const t=Qi(e,this.size,4);r.uniform4fv(this.addr,t)}function Mm(r,e){const t=Qi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sm(r,e){const t=Qi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wm(r,e){const t=Qi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Em(r,e){r.uniform1iv(this.addr,e)}function Tm(r,e){r.uniform2iv(this.addr,e)}function Am(r,e){r.uniform3iv(this.addr,e)}function Cm(r,e){r.uniform4iv(this.addr,e)}function Rm(r,e){r.uniform1uiv(this.addr,e)}function Pm(r,e){r.uniform2uiv(this.addr,e)}function Lm(r,e){r.uniform3uiv(this.addr,e)}function Im(r,e){r.uniform4uiv(this.addr,e)}function Dm(r,e,t){const n=this.cache,i=e.length,s=Sr(t,i);St(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||cd,s[o])}function Nm(r,e,t){const n=this.cache,i=e.length,s=Sr(t,i);St(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hd,s[o])}function Fm(r,e,t){const n=this.cache,i=e.length,s=Sr(t,i);St(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ud,s[o])}function Um(r,e,t){const n=this.cache,i=e.length,s=Sr(t,i);St(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dd,s[o])}function Om(r){switch(r){case 5126:return vm;case 35664:return xm;case 35665:return ym;case 35666:return bm;case 35674:return Mm;case 35675:return Sm;case 35676:return wm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Um}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}}class Bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Om(t.type)}}class zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function Cl(r,e){r.seq.push(e),r.map[e.id]=e}function Hm(r,e,t){const n=r.name,i=n.length;for(Jr.lastIndex=0;;){const s=Jr.exec(n),o=Jr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Cl(t,c===void 0?new km(a,r,e):new Bm(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new zm(a),Cl(t,h)),t=h}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Gm=37297;let Vm=0;function $m(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Pl=new Fe;function Wm(r){ze._getMatrix(Pl,ze.workingColorSpace,r);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(r)){case br:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ll(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$m(r.getShaderSource(e),o)}else return i}function Xm(r,e){const t=Wm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qm(r,e){let t;switch(e){case Lc:t="Linear";break;case Ic:t="Reinhard";break;case Dc:t="Cineon";break;case ca:t="ACESFilmic";break;case Nc:t="AgX";break;case Fc:t="Neutral";break;case Qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new L;function jm(){ze.getLuminanceCoefficients(Js);const r=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Km(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gs(r){return r!==""}function Il(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(r){return r.replace(Jm,eg)}const Qm=new Map;function eg(r,e){let t=Be[e];if(t===void 0){const n=Qm.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(r){return r.replace(tg,ng)}function ng(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ig(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zi:case Hi:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function og(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function ag(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ig(t),c=sg(t),d=rg(t),h=og(t),u=ag(t),p=Ym(t),m=Km(s),_=i.createProgram();let g,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(g=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Kn?qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=ta(o),o=Il(o,t),o=Dl(o,t),a=ta(a),a=Il(a,t),a=Dl(a,t),o=Nl(o),a=Nl(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+g+o,v=y+f+a,C=Rl(i,i.VERTEX_SHADER,x),E=Rl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(E).trim();let X=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,E);else{const Z=Ll(i,C,"vertex"),V=Ll(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:f}})}i.deleteShader(C),i.deleteShader(E),R=new pr(i,_),S=Zm(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Gm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let cg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hg(e),t.set(e,n)),n}}class hg{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}}function ug(r,e,t,n,i,s,o){const a=new va,l=new dg,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,O,U){const G=O.fog,X=U.geometry,W=S.isMeshStandardMaterial?O.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=Z&&Z.mapping===yr?Z.image.height:null,se=m[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=de!==void 0?de.length:0;let Ue=0;X.morphAttributes.position!==void 0&&(Ue=1),X.morphAttributes.normal!==void 0&&(Ue=2),X.morphAttributes.color!==void 0&&(Ue=3);let Ye,q,ee,re;if(se){const Qe=dn[se];Ye=Qe.vertexShader,q=Qe.fragmentShader}else Ye=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const ae=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Pe=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,ut=!!S.map,We=!!S.matcap,gt=!!Z,F=!!S.aoMap,Xt=!!S.lightMap,Ge=!!S.bumpMap,Ve=!!S.normalMap,Ae=!!S.displacementMap,at=!!S.emissiveMap,Ee=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,Y=S.dispersion>0,J=S.iridescence>0,j=S.sheen>0,Me=S.transmission>0,ce=M&&!!S.anisotropyMap,fe=k&&!!S.clearcoatMap,Xe=k&&!!S.clearcoatNormalMap,te=k&&!!S.clearcoatRoughnessMap,ge=J&&!!S.iridescenceMap,Ce=J&&!!S.iridescenceThicknessMap,Re=j&&!!S.sheenColorMap,_e=j&&!!S.sheenRoughnessMap,$e=!!S.specularMap,ke=!!S.specularColorMap,rt=!!S.specularIntensityMap,I=Me&&!!S.transmissionMap,le=Me&&!!S.thicknessMap,$=!!S.gradientMap,K=!!S.alphaMap,pe=S.alphaTest>0,he=!!S.alphaHash,De=!!S.extensions;let ft=Kn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Ct={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Nt,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:We,envMap:gt,envMapMode:gt&&Z.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Xt,bumpMap:Ge,normalMap:Ve,displacementMap:u&&Ae,emissiveMap:at,normalMapObjectSpace:Ve&&S.normalMapType===rh,normalMapTangentSpace:Ve&&S.normalMapType===jc,metalnessMap:Ee,roughnessMap:A,anisotropy:M,anisotropyMap:ce,clearcoat:k,clearcoatMap:fe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:te,dispersion:Y,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:$e,specularColorMap:ke,specularIntensityMap:rt,transmission:Me,transmissionMap:I,thicknessMap:le,gradientMap:$,opaque:S.transparent===!1&&S.blending===Ni&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:pe,alphaHash:he,combine:S.combine,mapUv:ut&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Xt&&_(S.lightMap.channel),bumpMapUv:Ge&&_(S.bumpMap.channel),normalMapUv:Ve&&_(S.normalMap.channel),displacementMapUv:Ae&&_(S.displacementMap.channel),emissiveMapUv:at&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:$e&&_(S.specularMap.channel),specularColorMapUv:ke&&_(S.specularColorMap.channel),specularIntensityMapUv:rt&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(ut||K),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&ze.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&ze.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===It,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=m[S.type];let P;if(b){const O=dn[b];P=ws.clone(O.uniforms)}else P=S.uniforms;return P}function C(S,b){let P;for(let O=0,U=d.length;O<U;O++){const G=d[O];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new lg(r,b,S,s),d.push(P)),P}function E(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:R}}function pg(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ul(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ol(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,p,m,_,g){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=_,f.group=g),e++,f}function a(h,u,p,m,_,g){const f=o(h,u,p,m,_,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,m,_,g){const f=o(h,u,p,m,_,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||fg),n.length>1&&n.sort(u||Ul),i.length>1&&i.sort(u||Ul)}function d(){for(let h=e,u=r.length;h<u;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function mg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ol,r.set(n,[o])):i>=s.length?(o=new Ol,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Q};break;case"SpotLight":t={position:new L,direction:new L,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":t={color:new Q,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function _g(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vg=0;function xg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yg(r){const e=new gg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new Ie,o=new Ie;function a(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,y=0,x=0,v=0,C=0,E=0,T=0;c.sort(xg);for(let S=0,b=c.length;S<b;S++){const P=c[S],O=P.color,U=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*U,h+=O.g*U,u+=O.b*U;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],U);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(U),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(O).multiplyScalar(U),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,V=t.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,x++}n.point[m]=W,m++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(U),W.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[f]=W,f++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=T,n.version=vg++)}function l(c,d){let h=0,u=0,p=0,m=0,_=0;const g=d.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function kl(r){const e=new yg(r),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bg(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new kl(r),e.set(i,[a])):s>=o.length?(a=new kl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Mg extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sg extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(r,e,t){let n=new xa;const i=new ve,s=new ve,o=new je,a=new Mg({depthPacking:sh}),l=new Sg,c={},d=t.maxTextureSize,h={[Nn]:kt,[kt]:Nn,[It]:It},u=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new _t;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new H(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(E,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Pn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=f!==Tn&&this.type===Tn,G=f===Tn&&this.type!==Tn;for(let X=0,W=E.length;X<W;X++){const Z=E[X],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const se=V.getFrameExtents();if(i.multiply(se),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/se.x),i.x=s.x*se.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/se.y),i.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||U===!0||G===!0){const me=this.type!==Tn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new ln(i.x,i.y,me),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const de=V.getViewportCount();for(let me=0;me<de;me++){const Ue=V.getViewport(me);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),O.viewport(o),V.updateMatrices(Z,me),n=V.getFrustum(),v(T,R,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&y(V,R),V.needsUpdate=!1}f=this.type,g.needsUpdate=!1,r.setRenderTarget(S,b,P)};function y(E,T){const R=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ln(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,p,_,null)}function x(E,T,R,S){let b=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=b.uuid,U=T.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let X=G[U];X===void 0&&(X=b.clone(),G[U]=X,T.addEventListener("dispose",C)),b=X}if(b.visible=T.visible,b.wireframe=T.wireframe,S===Tn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=r.properties.get(b);O.light=R}return b}function v(E,T,R,S,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),G=E.material;if(Array.isArray(G)){const X=U.groups;for(let W=0,Z=X.length;W<Z;W++){const V=X[W],se=G[V.materialIndex];if(se&&se.visible){const de=x(E,se,S,b);E.onBeforeShadow(r,E,T,R,U,de,V),r.renderBufferDirect(R,null,U,de,E,V),E.onAfterShadow(r,E,T,R,U,de,V)}}}else if(G.visible){const X=x(E,G,S,b);E.onBeforeShadow(r,E,T,R,U,X,null),r.renderBufferDirect(R,null,U,X,E,null),E.onAfterShadow(r,E,T,R,U,X,null)}}const O=E.children;for(let U=0,G=O.length;U<G;U++)v(O[U],T,R,S,b)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const Ag={[_o]:vo,[xo]:Mo,[yo]:So,[Bi]:bo,[vo]:_o,[Mo]:xo,[So]:yo,[bo]:Bi};function Cg(r,e){function t(){let I=!1;const le=new je;let $=null;const K=new je(0,0,0,0);return{setMask:function(pe){$!==pe&&!I&&(r.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){I=pe},setClear:function(pe,he,De,ft,Ct){Ct===!0&&(pe*=ft,he*=ft,De*=ft),le.set(pe,he,De,ft),K.equals(le)===!1&&(r.clearColor(pe,he,De,ft),K.copy(le))},reset:function(){I=!1,$=null,K.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,$=null,K=null,pe=null;return{setReversed:function(he){if(le!==he){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ft=pe;pe=null,this.setClear(ft)}le=he},getReversed:function(){return le},setTest:function(he){he?ae(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(he){$!==he&&!I&&(r.depthMask(he),$=he)},setFunc:function(he){if(le&&(he=Ag[he]),K!==he){switch(he){case _o:r.depthFunc(r.NEVER);break;case vo:r.depthFunc(r.ALWAYS);break;case xo:r.depthFunc(r.LESS);break;case Bi:r.depthFunc(r.LEQUAL);break;case yo:r.depthFunc(r.EQUAL);break;case bo:r.depthFunc(r.GEQUAL);break;case Mo:r.depthFunc(r.GREATER);break;case So:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=he}},setLocked:function(he){I=he},setClear:function(he){pe!==he&&(le&&(he=1-he),r.clearDepth(he),pe=he)},reset:function(){I=!1,$=null,K=null,pe=null,le=!1}}}function i(){let I=!1,le=null,$=null,K=null,pe=null,he=null,De=null,ft=null,Ct=null;return{setTest:function(Qe){I||(Qe?ae(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!I&&(r.stencilMask(Qe),le=Qe)},setFunc:function(Qe,Zt,vn){($!==Qe||K!==Zt||pe!==vn)&&(r.stencilFunc(Qe,Zt,vn),$=Qe,K=Zt,pe=vn)},setOp:function(Qe,Zt,vn){(he!==Qe||De!==Zt||ft!==vn)&&(r.stencilOp(Qe,Zt,vn),he=Qe,De=Zt,ft=vn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Ct!==Qe&&(r.clearStencil(Qe),Ct=Qe)},reset:function(){I=!1,le=null,$=null,K=null,pe=null,he=null,De=null,ft=null,Ct=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],m=null,_=!1,g=null,f=null,y=null,x=null,v=null,C=null,E=null,T=new Q(0,0,0),R=0,S=!1,b=null,P=null,O=null,U=null,G=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let se=null,de={};const me=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Ye=new je().fromArray(me),q=new je().fromArray(Ue);function ee(I,le,$,K){const pe=new Uint8Array(4),he=r.createTexture();r.bindTexture(I,he),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<$;De++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(le+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return he}const re={};re[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(Bi),Ge(!1),Ve(za),ae(r.CULL_FACE),F(Pn);function ae(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function we(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function Pe(I,le){return h[I]!==le?(r.bindFramebuffer(I,le),h[I]=le,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(I,le){let $=p,K=!1;if(I){$=u.get(le),$===void 0&&($=[],u.set(le,$));const pe=I.textures;if($.length!==pe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let he=0,De=pe.length;he<De;he++)$[he]=r.COLOR_ATTACHMENT0+he;$.length=pe.length,K=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,K=!0);K&&r.drawBuffers($)}function ut(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const We={[ai]:r.FUNC_ADD,[Nd]:r.FUNC_SUBTRACT,[Fd]:r.FUNC_REVERSE_SUBTRACT};We[Ud]=r.MIN,We[Od]=r.MAX;const gt={[kd]:r.ZERO,[Bd]:r.ONE,[zd]:r.SRC_COLOR,[mo]:r.SRC_ALPHA,[Xd]:r.SRC_ALPHA_SATURATE,[$d]:r.DST_COLOR,[Gd]:r.DST_ALPHA,[Hd]:r.ONE_MINUS_SRC_COLOR,[go]:r.ONE_MINUS_SRC_ALPHA,[Wd]:r.ONE_MINUS_DST_COLOR,[Vd]:r.ONE_MINUS_DST_ALPHA,[qd]:r.CONSTANT_COLOR,[jd]:r.ONE_MINUS_CONSTANT_COLOR,[Yd]:r.CONSTANT_ALPHA,[Kd]:r.ONE_MINUS_CONSTANT_ALPHA};function F(I,le,$,K,pe,he,De,ft,Ct,Qe){if(I===Pn){_===!0&&(we(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),I!==Dd){if(I!==g||Qe!==S){if((f!==ai||v!==ai)&&(r.blendEquation(r.FUNC_ADD),f=ai,v=ai),Qe)switch(I){case Ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fo:r.blendFunc(r.ONE,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ga:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ga:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,x=null,C=null,E=null,T.set(0,0,0),R=0,g=I,S=Qe}return}pe=pe||le,he=he||$,De=De||K,(le!==f||pe!==v)&&(r.blendEquationSeparate(We[le],We[pe]),f=le,v=pe),($!==y||K!==x||he!==C||De!==E)&&(r.blendFuncSeparate(gt[$],gt[K],gt[he],gt[De]),y=$,x=K,C=he,E=De),(ft.equals(T)===!1||Ct!==R)&&(r.blendColor(ft.r,ft.g,ft.b,Ct),T.copy(ft),R=Ct),g=I,S=!1}function Xt(I,le){I.side===It?we(r.CULL_FACE):ae(r.CULL_FACE);let $=I.side===kt;le&&($=!$),Ge($),I.blending===Ni&&I.transparent===!1?F(Pn):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){b!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),b=I)}function Ve(I){I!==Ld?(ae(r.CULL_FACE),I!==P&&(I===za?r.cullFace(r.BACK):I===Id?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=I}function Ae(I){I!==O&&(W&&r.lineWidth(I),O=I)}function at(I,le,$){I?(ae(r.POLYGON_OFFSET_FILL),(U!==le||G!==$)&&(r.polygonOffset(le,$),U=le,G=$)):we(r.POLYGON_OFFSET_FILL)}function Ee(I){I?ae(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function A(I){I===void 0&&(I=r.TEXTURE0+X-1),se!==I&&(r.activeTexture(I),se=I)}function M(I,le,$){$===void 0&&(se===null?$=r.TEXTURE0+X-1:$=se);let K=de[$];K===void 0&&(K={type:void 0,texture:void 0},de[$]=K),(K.type!==I||K.texture!==le)&&(se!==$&&(r.activeTexture($),se=$),r.bindTexture(I,le||re[I]),K.type=I,K.texture=le)}function k(){const I=de[se];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Ye.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ye.copy(I))}function _e(I){q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function $e(I,le){let $=c.get(le);$===void 0&&($=new WeakMap,c.set(le,$));let K=$.get(I);K===void 0&&(K=r.getUniformBlockIndex(le,I.name),$.set(I,K))}function ke(I,le){const K=c.get(le).get(I);l.get(le)!==K&&(r.uniformBlockBinding(le,K,I.__bindingPointIndex),l.set(le,K))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},se=null,de={},h={},u=new WeakMap,p=[],m=null,_=!1,g=null,f=null,y=null,x=null,v=null,C=null,E=null,T=new Q(0,0,0),R=0,S=!1,b=null,P=null,O=null,U=null,G=null,Ye.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:we,bindFramebuffer:Pe,drawBuffers:Oe,useProgram:ut,setBlending:F,setMaterial:Xt,setFlipSided:Ge,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:at,setScissorTest:Ee,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ge,texImage3D:Ce,updateUBOMapping:$e,uniformBlockBinding:ke,texStorage2D:Xe,texStorage3D:te,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Re,viewport:_e,reset:rt}}function Bl(r,e,t,n){const i=Rg(n);switch(t){case Hc:return r*e;case Vc:return r*e;case $c:return r*e*2;case pa:return r*e/i.components*i.byteLength;case fa:return r*e/i.components*i.byteLength;case Wc:return r*e*2/i.components*i.byteLength;case ma:return r*e*2/i.components*i.byteLength;case Gc:return r*e*3/i.components*i.byteLength;case Kt:return r*e*4/i.components*i.byteLength;case ga:return r*e*4/i.components*i.byteLength;case lr:case cr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dr:case hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Ro:return Math.max(r,16)*Math.max(e,8)/4;case To:case Co:return Math.max(r,8)*Math.max(e,8)/2;case Po:case Lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ur:case qo:case jo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xc:case Yo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ko:case Zo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rg(r){switch(r){case Fn:case kc:return{byteLength:1,components:1};case ys:case Bc:case Ln:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case ci:case da:case rn:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Pg(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return p?new OffscreenCanvas(A,M):Ss("canvas")}function _(A,M,k){let Y=1;const J=Ee(A);if((J.width>k||J.height>k)&&(Y=k/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*J.width),Me=Math.floor(Y*J.height);h===void 0&&(h=m(j,Me));const ce=M?m(j,Me):h;return ce.width=j,ce.height=Me,ce.getContext("2d").drawImage(A,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Me+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(A,M,k,Y,J=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===r.RED&&(k===r.FLOAT&&(j=r.R32F),k===r.HALF_FLOAT&&(j=r.R16F),k===r.UNSIGNED_BYTE&&(j=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.R8UI),k===r.UNSIGNED_SHORT&&(j=r.R16UI),k===r.UNSIGNED_INT&&(j=r.R32UI),k===r.BYTE&&(j=r.R8I),k===r.SHORT&&(j=r.R16I),k===r.INT&&(j=r.R32I)),M===r.RG&&(k===r.FLOAT&&(j=r.RG32F),k===r.HALF_FLOAT&&(j=r.RG16F),k===r.UNSIGNED_BYTE&&(j=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RG8UI),k===r.UNSIGNED_SHORT&&(j=r.RG16UI),k===r.UNSIGNED_INT&&(j=r.RG32UI),k===r.BYTE&&(j=r.RG8I),k===r.SHORT&&(j=r.RG16I),k===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGB8UI),k===r.UNSIGNED_SHORT&&(j=r.RGB16UI),k===r.UNSIGNED_INT&&(j=r.RGB32UI),k===r.BYTE&&(j=r.RGB8I),k===r.SHORT&&(j=r.RGB16I),k===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),k===r.UNSIGNED_INT&&(j=r.RGBA32UI),k===r.BYTE&&(j=r.RGBA8I),k===r.SHORT&&(j=r.RGBA16I),k===r.INT&&(j=r.RGBA32I)),M===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),M===r.RGBA){const Me=J?br:ze.getTransfer(Y);k===r.FLOAT&&(j=r.RGBA32F),k===r.HALF_FLOAT&&(j=r.RGBA16F),k===r.UNSIGNED_BYTE&&(j=Me===et?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(A,M){let k;return A?M===null||M===ci||M===Vi?k=r.DEPTH24_STENCIL8:M===rn?k=r.DEPTH32F_STENCIL8:M===ys&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ci||M===Vi?k=r.DEPTH_COMPONENT24:M===rn?k=r.DEPTH_COMPONENT32F:M===ys&&(k=r.DEPTH_COMPONENT16),k}function C(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Wt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){const M=A.target;M.removeEventListener("dispose",E),R(M),M.isVideoTexture&&d.delete(M)}function T(A){const M=A.target;M.removeEventListener("dispose",T),b(M)}function R(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,Y=u.get(k);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(A),Object.keys(Y).length===0&&u.delete(k)}n.remove(A)}function S(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const k=A.source,Y=u.get(k);delete Y[M.__cacheKey],o.memory.textures--}function b(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let Y=0,J=k.length;Y<J;Y++){const j=n.get(k[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(A)}let P=0;function O(){P=0}function U(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function G(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const k=n.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,A,M);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function W(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){q(k,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function Z(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){q(k,A,M);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function V(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ee(k,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const se={[Gi]:r.REPEAT,[jn]:r.CLAMP_TO_EDGE,[fr]:r.MIRRORED_REPEAT},de={[Bt]:r.NEAREST,[Oc]:r.NEAREST_MIPMAP_NEAREST,[fs]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[ar]:r.LINEAR_MIPMAP_NEAREST,[Cn]:r.LINEAR_MIPMAP_LINEAR},me={[oh]:r.NEVER,[uh]:r.ALWAYS,[ah]:r.LESS,[Yc]:r.LEQUAL,[lh]:r.EQUAL,[hh]:r.GEQUAL,[ch]:r.GREATER,[dh]:r.NOTEQUAL};function Ue(A,M){if(M.type===rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wt||M.magFilter===ar||M.magFilter===fs||M.magFilter===Cn||M.minFilter===Wt||M.minFilter===ar||M.minFilter===fs||M.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,se[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,se[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,se[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,de[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==fs&&M.minFilter!==Cn||M.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ye(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));const Y=M.source;let J=u.get(Y);J===void 0&&(J={},u.set(Y,J));const j=G(M);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[j].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&S(M)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return k}function q(A,M,k){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const J=Ye(A,M),j=M.source;t.bindTexture(Y,A.__webglTexture,r.TEXTURE0+k);const Me=n.get(j);if(j.version!==Me.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const ce=ze.getPrimaries(ze.workingColorSpace),fe=M.colorSpace===qn?null:ze.getPrimaries(M.colorSpace),Xe=M.colorSpace===qn||ce===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let te=_(M.image,!1,i.maxTextureSize);te=at(M,te);const ge=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let Re=x(M.internalFormat,ge,Ce,M.colorSpace,M.isVideoTexture);Ue(Y,M);let _e;const $e=M.mipmaps,ke=M.isVideoTexture!==!0,rt=Me.__version===void 0||J===!0,I=j.dataReady,le=C(M,te);if(M.isDepthTexture)Re=v(M.format===$i,M.type),rt&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Re,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Ce,null));else if(M.isDataTexture)if($e.length>0){ke&&rt&&t.texStorage2D(r.TEXTURE_2D,le,Re,$e[0].width,$e[0].height);for(let $=0,K=$e.length;$<K;$++)_e=$e[$],ke?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,Ce,_e.data):t.texImage2D(r.TEXTURE_2D,$,Re,_e.width,_e.height,0,ge,Ce,_e.data);M.generateMipmaps=!1}else ke?(rt&&t.texStorage2D(r.TEXTURE_2D,le,Re,te.width,te.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ce,te.data)):t.texImage2D(r.TEXTURE_2D,0,Re,te.width,te.height,0,ge,Ce,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Re,$e[0].width,$e[0].height,te.depth);for(let $=0,K=$e.length;$<K;$++)if(_e=$e[$],M.format!==Kt)if(ge!==null)if(ke){if(I)if(M.layerUpdates.size>0){const pe=Bl(_e.width,_e.height,M.format,M.type);for(const he of M.layerUpdates){const De=_e.data.subarray(he*pe/_e.data.BYTES_PER_ELEMENT,(he+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,he,_e.width,_e.height,1,ge,De)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,te.depth,ge,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Re,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,te.depth,ge,Ce,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Re,_e.width,_e.height,te.depth,0,ge,Ce,_e.data)}else{ke&&rt&&t.texStorage2D(r.TEXTURE_2D,le,Re,$e[0].width,$e[0].height);for(let $=0,K=$e.length;$<K;$++)_e=$e[$],M.format!==Kt?ge!==null?ke?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,_e.width,_e.height,ge,Ce,_e.data):t.texImage2D(r.TEXTURE_2D,$,Re,_e.width,_e.height,0,ge,Ce,_e.data)}else if(M.isDataArrayTexture)if(ke){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Re,te.width,te.height,te.depth),I)if(M.layerUpdates.size>0){const $=Bl(te.width,te.height,M.format,M.type);for(const K of M.layerUpdates){const pe=te.data.subarray(K*$/te.data.BYTES_PER_ELEMENT,(K+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ge,Ce,pe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ce,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,ge,Ce,te.data);else if(M.isData3DTexture)ke?(rt&&t.texStorage3D(r.TEXTURE_3D,le,Re,te.width,te.height,te.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ce,te.data)):t.texImage3D(r.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,ge,Ce,te.data);else if(M.isFramebufferTexture){if(rt)if(ke)t.texStorage2D(r.TEXTURE_2D,le,Re,te.width,te.height);else{let $=te.width,K=te.height;for(let pe=0;pe<le;pe++)t.texImage2D(r.TEXTURE_2D,pe,Re,$,K,0,ge,Ce,null),$>>=1,K>>=1}}else if($e.length>0){if(ke&&rt){const $=Ee($e[0]);t.texStorage2D(r.TEXTURE_2D,le,Re,$.width,$.height)}for(let $=0,K=$e.length;$<K;$++)_e=$e[$],ke?I&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ge,Ce,_e):t.texImage2D(r.TEXTURE_2D,$,Re,ge,Ce,_e);M.generateMipmaps=!1}else if(ke){if(rt){const $=Ee(te);t.texStorage2D(r.TEXTURE_2D,le,Re,$.width,$.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ge,Ce,te)}else t.texImage2D(r.TEXTURE_2D,0,Re,ge,Ce,te);g(M)&&f(Y),Me.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ee(A,M,k){if(M.image.length!==6)return;const Y=Ye(A,M),J=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const j=n.get(J);if(J.version!==j.__version||Y===!0){t.activeTexture(r.TEXTURE0+k);const Me=ze.getPrimaries(ze.workingColorSpace),ce=M.colorSpace===qn?null:ze.getPrimaries(M.colorSpace),fe=M.colorSpace===qn||Me===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!Xe&&!te?ge[K]=_(M.image[K],!0,i.maxCubemapSize):ge[K]=te?M.image[K].image:M.image[K],ge[K]=at(M,ge[K]);const Ce=ge[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),$e=x(M.internalFormat,Re,_e,M.colorSpace),ke=M.isVideoTexture!==!0,rt=j.__version===void 0||Y===!0,I=J.dataReady;let le=C(M,Ce);Ue(r.TEXTURE_CUBE_MAP,M);let $;if(Xe){ke&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,$e,Ce.width,Ce.height);for(let K=0;K<6;K++){$=ge[K].mipmaps;for(let pe=0;pe<$.length;pe++){const he=$[pe];M.format!==Kt?Re!==null?ke?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,$e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,he.width,he.height,Re,_e,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,$e,he.width,he.height,0,Re,_e,he.data)}}}else{if($=M.mipmaps,ke&&rt){$.length>0&&le++;const K=Ee(ge[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,$e,K.width,K.height)}for(let K=0;K<6;K++)if(te){ke?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,Re,_e,ge[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,ge[K].width,ge[K].height,0,Re,_e,ge[K].data);for(let pe=0;pe<$.length;pe++){const De=$[pe].image[K].image;ke?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,De.width,De.height,Re,_e,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,$e,De.width,De.height,0,Re,_e,De.data)}}else{ke?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,_e,ge[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$e,Re,_e,ge[K]);for(let pe=0;pe<$.length;pe++){const he=$[pe];ke?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,Re,_e,he.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,$e,Re,_e,he.image[K])}}}g(M)&&f(r.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function re(A,M,k,Y,J,j){const Me=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),fe=x(k.internalFormat,Me,ce,k.colorSpace),Xe=n.get(M),te=n.get(k);if(te.__renderTarget=M,!Xe.__hasExternalTextures){const ge=Math.max(1,M.width>>j),Ce=Math.max(1,M.height>>j);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,j,fe,ge,Ce,M.depth,0,Me,ce,null):t.texImage2D(J,j,fe,ge,Ce,0,Me,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,te.__webglTexture,0,Ge(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,te.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(A,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=v(M.stencilBuffer,J),Me=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=Ge(M);Ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,j,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,A)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const j=Y[J],Me=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),fe=x(j.internalFormat,Me,ce,j.colorSpace),Xe=Ge(M);k&&Ve(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,fe,M.width,M.height):Ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,fe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,fe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const J=Y.__webglTexture,j=Ge(M);if(M.depthTexture.format===Fi)Ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===$i)Ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),ae(M.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ae(M.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(A,M,k){const Y=n.get(A);M!==void 0&&re(Y.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Pe(A)}function ut(A){const M=A.texture,k=n.get(A),Y=n.get(M);A.addEventListener("dispose",T);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[ce][fe]=r.createFramebuffer()}else k.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Me)for(let ce=0,fe=J.length;ce<fe;ce++){const Xe=n.get(J[ce]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Ve(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const fe=J[ce];k.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Xe=s.convert(fe.format,fe.colorSpace),te=s.convert(fe.type),ge=x(fe.internalFormat,Xe,te,fe.colorSpace,A.isXRRenderTarget===!0),Ce=Ge(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ge,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)re(k.__webglFramebuffer[ce][fe],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else re(k.__webglFramebuffer[ce],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,fe=J.length;ce<fe;ce++){const Xe=J[ce],te=n.get(Xe);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),Ue(r.TEXTURE_2D,Xe),re(k.__webglFramebuffer,A,Xe,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),g(Xe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Ue(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)re(k.__webglFramebuffer[fe],A,M,r.COLOR_ATTACHMENT0,ce,fe);else re(k.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,ce,0);g(M)&&f(ce),t.unbindTexture()}A.depthBuffer&&Pe(A)}function We(A){const M=A.textures;for(let k=0,Y=M.length;k<Y;k++){const J=M[k];if(g(J)){const j=y(A),Me=n.get(J).__webglTexture;t.bindTexture(j,Me),f(j),t.unbindTexture()}}}const gt=[],F=[];function Xt(A){if(A.samples>0){if(Ve(A)===!1){const M=A.textures,k=A.width,Y=A.height;let J=r.COLOR_BUFFER_BIT;const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(A),ce=M.length>1;if(ce)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Xe=n.get(M[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,k,Y,0,0,k,Y,J,r.NEAREST),l===!0&&(gt.length=0,F.length=0,gt.push(r.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(j),F.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const Xe=n.get(M[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ge(A){return Math.min(i.maxSamples,A.samples)}function Ve(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function at(A,M){const k=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Nt&&k!==qn&&(ze.getTransfer(k)===et?(Y!==Kt||J!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ve}function Lg(r,e){function t(n,i=qn){let s;const o=ze.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===ha)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return r.BYTE;if(n===Bc)return r.SHORT;if(n===ys)return r.UNSIGNED_SHORT;if(n===da)return r.INT;if(n===ci)return r.UNSIGNED_INT;if(n===rn)return r.FLOAT;if(n===Ln)return r.HALF_FLOAT;if(n===Hc)return r.ALPHA;if(n===Gc)return r.RGB;if(n===Kt)return r.RGBA;if(n===Vc)return r.LUMINANCE;if(n===$c)return r.LUMINANCE_ALPHA;if(n===Fi)return r.DEPTH_COMPONENT;if(n===$i)return r.DEPTH_STENCIL;if(n===pa)return r.RED;if(n===fa)return r.RED_INTEGER;if(n===Wc)return r.RG;if(n===ma)return r.RG_INTEGER;if(n===ga)return r.RGBA_INTEGER;if(n===lr||n===cr||n===dr||n===hr)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Co||n===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Po||n===Lo)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Io)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Do||n===No||n===Fo||n===Uo||n===Oo||n===ko||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===$o||n===Wo||n===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Do)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===qo||n===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ur)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===Yo||n===Ko||n===Zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ur)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Ig extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new Mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Og extends hi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,m=null;const _=new Ug,g=t.getContextAttributes();let f=null,y=null;const x=[],v=[],C=new ve;let E=null;const T=new Ot;T.viewport=new je;const R=new Ot;R.viewport=new je;const S=[T,R],b=new Ig;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new Qr,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new Qr,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new Qr,x[q]=ee),ee.getHandSpace()};function U(q){const ee=v.indexOf(q.inputSource);if(ee===-1)return;const re=x[ee];re!==void 0&&(re.update(q.inputSource,q.frame,c||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",X);for(let q=0;q<x.length;q++){const ee=v[q];ee!==null&&(v[q]=null,x[q].disconnect(ee))}P=null,O=null,_.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ln(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,re=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?$i:Fi,re=g.stencil?Vi:ci);const we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(we),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ln(u.textureWidth,u.textureHeight,{format:Kt,type:Fn,depthTexture:new ld(u.textureWidth,u.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let ee=0;ee<q.removed.length;ee++){const re=q.removed[ee],ae=v.indexOf(re);ae>=0&&(v[ae]=null,x[ae].disconnect(re))}for(let ee=0;ee<q.added.length;ee++){const re=q.added[ee];let ae=v.indexOf(re);if(ae===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=v.length){v.push(re),ae=Pe;break}else if(v[Pe]===null){v[Pe]=re,ae=Pe;break}if(ae===-1)break}const we=x[ae];we&&we.connect(re)}}const W=new L,Z=new L;function V(q,ee,re){W.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const ae=W.distanceTo(Z),we=ee.projectionMatrix.elements,Pe=re.projectionMatrix.elements,Oe=we[14]/(we[10]-1),ut=we[14]/(we[10]+1),We=(we[9]+1)/we[5],gt=(we[9]-1)/we[5],F=(we[8]-1)/we[0],Xt=(Pe[8]+1)/Pe[0],Ge=Oe*F,Ve=Oe*Xt,Ae=ae/(-F+Xt),at=Ae*-F;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ee=Oe+Ae,A=ut+Ae,M=Ge-at,k=Ve+(ae-at),Y=We*ut/A*Ee,J=gt*ut/A*Ee;q.projectionMatrix.makePerspective(M,k,Y,J,Ee,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,re=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(re=_.depthFar)),b.near=R.near=T.near=ee,b.far=R.far=T.far=re,(P!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far),T.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;const ae=q.parent,we=b.cameras;se(b,ae);for(let Pe=0;Pe<we.length;Pe++)se(we[Pe],ae);we.length===2?V(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),de(q,b,ae)};function de(q,ee,re){re===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let me=null;function Ue(q,ee){if(d=ee.getViewerPose(c||o),m=ee,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;re.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Pe=0;Pe<re.length;Pe++){const Oe=re[Pe];let ut=null;if(p!==null)ut=p.getViewport(Oe);else{const gt=h.getViewSubImage(u,Oe);ut=gt.viewport,Pe===0&&(e.setRenderTargetTextures(y,gt.colorTexture,u.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(y))}let We=S[Pe];We===void 0&&(We=new Ot,We.layers.enable(Pe),We.viewport=new je,S[Pe]=We),We.matrix.fromArray(Oe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Oe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(b.matrix.copy(We.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(We)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=h.getDepthInformation(re[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,i.renderState)}}for(let re=0;re<x.length;re++){const ae=v[re],we=x[re];ae!==null&&we!==void 0&&we.update(ae,ee,c||o)}me&&me(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ye=new ad;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(q){me=q},this.dispose=function(){}}}const si=new fn,kg=new Ie;function Bg(r,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,sd(r)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,y,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),_(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,y,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===kt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===kt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const y=e.get(f),x=y.envMap,v=y.envMapRotation;x&&(g.envMap.value=x,si.copy(v),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),g.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(si)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,y,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*y,g.scale.value=x*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,y){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const y=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zg(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(m(y),v=d(y),i[y.id]=v,y.addEventListener("dispose",g));const C=x.program;n.updateUBOMapping(y,C);const E=e.render.frame;s[y.id]!==E&&(u(y),s[y.id]=E)}function d(y){const x=h();y.__bindingPointIndex=x;const v=r.createBuffer(),C=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],v=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,T=v.length;E<T;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,b=R.length;S<b;S++){const P=R[S];if(p(P,E,S,C)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let X=0;X<U.length;X++){const W=U[X],Z=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,O+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,x,v,C){const E=y.value,T=x+"_"+v;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const R=C[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function m(y){const x=y.uniforms;let v=0;const C=16;for(let T=0,R=x.length;T<R;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,P=S.length;b<P;b++){const O=S[b],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,X=U.length;G<X;G++){const W=U[G],Z=_(W),V=v%C,se=V%Z.boundary,de=V+se;v+=se,de!==0&&C-de<Z.storage&&(v+=C-de),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Z.storage}}}const E=v%C;return E>0&&(v+=C-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Hg{constructor(e={}){const{canvas:t=Rh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let C=!1,E=0,T=0,R=null,S=-1,b=null;const P=new je,O=new je;let U=null;const G=new Q(0);let X=0,W=t.width,Z=t.height,V=1,se=null,de=null;const me=new je(0,0,W,Z),Ue=new je(0,0,W,Z);let Ye=!1;const q=new xa;let ee=!1,re=!1;const ae=new Ie,we=new Ie,Pe=new L,Oe=new je,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function gt(){return R===null?V:1}let F=n;function Xt(w,D){return t.getContext(w,D)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",he,!1),F===null){const D="webgl2";if(F=Xt(D,w),F===null)throw Xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,Ve,Ae,at,Ee,A,M,k,Y,J,j,Me,ce,fe,Xe,te,ge,Ce,Re,_e,$e,ke,rt,I;function le(){Ge=new Xf(F),Ge.init(),ke=new Lg(F,Ge),Ve=new zf(F,Ge,e,ke),Ae=new Cg(F,Ge),Ve.reverseDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),at=new Yf(F),Ee=new pg,A=new Pg(F,Ge,Ae,Ee,Ve,ke,at),M=new Gf(v),k=new Wf(v),Y=new tu(F),rt=new kf(F,Y),J=new qf(F,Y,at,rt),j=new Zf(F,J,Y,at),Re=new Kf(F,Ve,A),te=new Hf(Ee),Me=new ug(v,M,k,Ge,Ve,rt,te),ce=new Bg(v,Ee),fe=new mg,Xe=new bg(Ge),Ce=new Of(v,M,k,Ae,j,p,l),ge=new Tg(v,j,Ve),I=new zg(F,at,Ve,Ae),_e=new Bf(F,Ge,at),$e=new jf(F,Ge,at),at.programs=Me.programs,v.capabilities=Ve,v.extensions=Ge,v.properties=Ee,v.renderLists=fe,v.shadowMap=ge,v.state=Ae,v.info=at}le();const $=new Og(v,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(W,Z,!1))},this.getSize=function(w){return w.set(W,Z)},this.setSize=function(w,D,B=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Z=D,t.width=Math.floor(w*V),t.height=Math.floor(D*V),B===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(W*V,Z*V).floor()},this.setDrawingBufferSize=function(w,D,B){W=w,Z=D,V=B,t.width=Math.floor(w*B),t.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,D,B,z){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,D,B,z),Ae.viewport(P.copy(me).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,D,B,z){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,D,B,z),Ae.scissor(O.copy(Ue).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){Ae.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){se=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,D=!0,B=!0){let z=0;if(w){let N=!1;if(R!==null){const ie=R.texture.format;N=ie===ga||ie===ma||ie===fa}if(N){const ie=R.texture.type,ue=ie===Fn||ie===ci||ie===ys||ie===Vi||ie===ha||ie===ua,xe=Ce.getClearColor(),ye=Ce.getClearAlpha(),Le=xe.r,Ne=xe.g,be=xe.b;ue?(m[0]=Le,m[1]=Ne,m[2]=be,m[3]=ye,F.clearBufferuiv(F.COLOR,0,m)):(_[0]=Le,_[1]=Ne,_[2]=be,_[3]=ye,F.clearBufferiv(F.COLOR,0,_))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT),B&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),Xe.dispose(),Ee.dispose(),M.dispose(),k.dispose(),j.dispose(),rt.dispose(),I.dispose(),Me.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ia),$.removeEventListener("sessionend",Da),Jn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=at.autoReset,D=ge.enabled,B=ge.autoUpdate,z=ge.needsUpdate,N=ge.type;le(),at.autoReset=w,ge.enabled=D,ge.autoUpdate=B,ge.needsUpdate=z,ge.type=N}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const D=w.target;D.removeEventListener("dispose",De),ft(D)}function ft(w){Ct(w),Ee.remove(w)}function Ct(w){const D=Ee.get(w).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,z,N,ie){D===null&&(D=ut);const ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=Cd(w,D,B,z,N);Ae.setMaterial(z,ue);let ye=B.index,Le=1;if(z.wireframe===!0){if(ye=J.getWireframeAttribute(B),ye===void 0)return;Le=2}const Ne=B.drawRange,be=B.attributes.position;let qe=Ne.start*Le,ot=(Ne.start+Ne.count)*Le;ie!==null&&(qe=Math.max(qe,ie.start*Le),ot=Math.min(ot,(ie.start+ie.count)*Le)),ye!==null?(qe=Math.max(qe,0),ot=Math.min(ot,ye.count)):be!=null&&(qe=Math.max(qe,0),ot=Math.min(ot,be.count));const lt=ot-qe;if(lt<0||lt===1/0)return;rt.setup(N,z,xe,B,ye);let zt,Ke=_e;if(ye!==null&&(zt=Y.get(ye),Ke=$e,Ke.setIndex(zt)),N.isMesh)z.wireframe===!0?(Ae.setLineWidth(z.wireframeLinewidth*gt()),Ke.setMode(F.LINES)):Ke.setMode(F.TRIANGLES);else if(N.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),Ae.setLineWidth(Se*gt()),N.isLineSegments?Ke.setMode(F.LINES):N.isLineLoop?Ke.setMode(F.LINE_LOOP):Ke.setMode(F.LINE_STRIP)}else N.isPoints?Ke.setMode(F.POINTS):N.isSprite&&Ke.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,xn=N._multiDrawCounts,Ze=N._multiDrawCount,Jt=ye?Y.get(ye).bytesPerElement:1,pi=Ee.get(z).currentProgram.getUniforms();for(let Gt=0;Gt<Ze;Gt++)pi.setValue(F,"_gl_DrawID",Gt),Ke.render(Se[Gt]/Jt,xn[Gt])}else if(N.isInstancedMesh)Ke.renderInstances(qe,lt,N.count);else if(B.isInstancedBufferGeometry){const Se=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xn=Math.min(B.instanceCount,Se);Ke.renderInstances(qe,lt,xn)}else Ke.render(qe,lt)};function Qe(w,D,B){w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=kt,w.needsUpdate=!0,Is(w,D,B),w.side=Nn,w.needsUpdate=!0,Is(w,D,B),w.side=It):Is(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),f=Xe.get(B),f.init(D),x.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ie=N.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const xe=ie[ue];Qe(xe,B,N),z.add(xe)}else Qe(ie,B,N),z.add(ie)}),x.pop(),f=null,z},this.compileAsync=function(w,D,B=null){const z=this.compile(w,D,B);return new Promise(N=>{function ie(){if(z.forEach(function(ue){Ee.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){N(w);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Zt=null;function vn(w){Zt&&Zt(w)}function Ia(){Jn.stop()}function Da(){Jn.start()}const Jn=new ad;Jn.setAnimationLoop(vn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Zt=w,$.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},$.addEventListener("sessionstart",Ia),$.addEventListener("sessionend",Da),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(D),D=$.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,R),f=Xe.get(w,x.length),f.init(D),x.push(f),we.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(we),re=this.localClippingEnabled,ee=te.init(this.clippingPlanes,re),g=fe.get(w,y.length),g.init(),y.push(g),$.enabled===!0&&$.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Er(ie,D,-1/0,v.sortObjects)}Er(w,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(se,de),We=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,We&&Ce.addToRenderList(g,w),this.info.render.frame++,ee===!0&&te.beginShadows();const B=f.state.shadowsArray;ge.render(B,w,D),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,N=g.transmissive;if(f.setupLights(),D.isArrayCamera){const ie=D.cameras;if(N.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){const ye=ie[ue];Fa(z,N,w,ye)}We&&Ce.render(w);for(let ue=0,xe=ie.length;ue<xe;ue++){const ye=ie[ue];Na(g,w,ye,ye.viewport)}}else N.length>0&&Fa(z,N,w,D),We&&Ce.render(w),Na(g,w,D);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,D),rt.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(f=x[x.length-1],ee===!0&&te.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Er(w,D,B,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){z&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const ue=j.update(w),xe=w.material;xe.visible&&g.push(w,ue,xe,B,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ue=j.update(w),xe=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(xe)){const ye=ue.groups;for(let Le=0,Ne=ye.length;Le<Ne;Le++){const be=ye[Le],qe=xe[be.materialIndex];qe&&qe.visible&&g.push(w,ue,qe,B,Oe.z,be)}}else xe.visible&&g.push(w,ue,xe,B,Oe.z,null)}}const ie=w.children;for(let ue=0,xe=ie.length;ue<xe;ue++)Er(ie[ue],D,B,z)}function Na(w,D,B,z){const N=w.opaque,ie=w.transmissive,ue=w.transparent;f.setupLightsView(B),ee===!0&&te.setGlobalState(v.clippingPlanes,B),z&&Ae.viewport(P.copy(z)),N.length>0&&Ls(N,D,B),ie.length>0&&Ls(ie,D,B),ue.length>0&&Ls(ue,D,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Fa(w,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ln(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ln:Fn,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const ie=f.state.transmissionRenderTarget[z.id],ue=z.viewport||P;ie.setSize(ue.z,ue.w);const xe=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(G),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),We&&Ce.render(B);const ye=v.toneMapping;v.toneMapping=Kn;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ee===!0&&te.setGlobalState(v.clippingPlanes,z),Ls(w,B,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let be=0,qe=D.length;be<qe;be++){const ot=D[be],lt=ot.object,zt=ot.geometry,Ke=ot.material,Se=ot.group;if(Ke.side===It&&lt.layers.test(z.layers)){const xn=Ke.side;Ke.side=kt,Ke.needsUpdate=!0,Ua(lt,B,z,zt,Ke,Se),Ke.side=xn,Ke.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}v.setRenderTarget(xe),v.setClearColor(G,X),Le!==void 0&&(z.viewport=Le),v.toneMapping=ye}function Ls(w,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ie=w.length;N<ie;N++){const ue=w[N],xe=ue.object,ye=ue.geometry,Le=z===null?ue.material:z,Ne=ue.group;xe.layers.test(B.layers)&&Ua(xe,D,B,ye,Le,Ne)}}function Ua(w,D,B,z,N,ie){w.onBeforeRender(v,D,B,z,N,ie),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,D,B,z,w,ie),N.transparent===!0&&N.side===It&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,w,ie),N.side=Nn,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,w,ie),N.side=It):v.renderBufferDirect(B,D,z,N,w,ie),w.onAfterRender(v,D,B,z,N,ie)}function Is(w,D,B){D.isScene!==!0&&(D=ut);const z=Ee.get(w),N=f.state.lights,ie=f.state.shadowsArray,ue=N.state.version,xe=Me.getParameters(w,N.state,ie,D,B),ye=Me.getProgramCacheKey(xe);let Le=z.programs;z.environment=w.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",De),Le=new Map,z.programs=Le);let Ne=Le.get(ye);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===ue)return ka(w,xe),Ne}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,v),Ne=Me.acquireProgram(xe,ye),Le.set(ye,Ne),z.uniforms=xe.uniforms;const be=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=te.uniform),ka(w,xe),z.needsLights=Pd(w),z.lightsStateVersion=ue,z.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function Oa(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=pr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function ka(w,D){const B=Ee.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Cd(w,D,B,z,N){D.isScene!==!0&&(D=ut),A.resetTextureUnits();const ie=D.fog,ue=z.isMeshStandardMaterial?D.environment:null,xe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Nt,ye=(z.isMeshStandardMaterial?k:M).get(z.envMap||ue),Le=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!B.morphAttributes.position,qe=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let lt=Kn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=v.toneMapping);const zt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=zt!==void 0?zt.length:0,Se=Ee.get(z),xn=f.state.lights;if(ee===!0&&(re===!0||w!==b)){const qt=w===b&&z.id===S;te.setState(z,w,qt)}let Ze=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xn.state.version||Se.outputColorSpace!==xe||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ye||z.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Le||Se.vertexTangents!==Ne||Se.morphTargets!==be||Se.morphNormals!==qe||Se.morphColors!==ot||Se.toneMapping!==lt||Se.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Se.__version=z.version);let Jt=Se.currentProgram;Ze===!0&&(Jt=Is(z,D,N));let pi=!1,Gt=!1,is=!1;const ct=Jt.getUniforms(),cn=Se.uniforms;if(Ae.useProgram(Jt.program)&&(pi=!0,Gt=!0,is=!0),z.id!==S&&(S=z.id,Gt=!0),pi||b!==w){Ae.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),Lh(ae),Ih(ae),ct.setValue(F,"projectionMatrix",ae)):ct.setValue(F,"projectionMatrix",w.projectionMatrix),ct.setValue(F,"viewMatrix",w.matrixWorldInverse);const On=ct.map.cameraPosition;On!==void 0&&On.setValue(F,Pe.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Gt=!0,is=!0)}if(N.isSkinnedMesh){ct.setOptional(F,N,"bindMatrix"),ct.setOptional(F,N,"bindMatrixInverse");const qt=N.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ct.setValue(F,"boneTexture",qt.boneTexture,A))}N.isBatchedMesh&&(ct.setOptional(F,N,"batchingTexture"),ct.setValue(F,"batchingTexture",N._matricesTexture,A),ct.setOptional(F,N,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",N._indirectTexture,A),ct.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",N._colorsTexture,A));const ss=B.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Re.update(N,B,Jt),(Gt||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,ct.setValue(F,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(cn.envMap.value=ye,cn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(cn.envMapIntensity.value=D.environmentIntensity),Gt&&(ct.setValue(F,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&Rd(cn,is),ie&&z.fog===!0&&ce.refreshFogUniforms(cn,ie),ce.refreshMaterialUniforms(cn,z,V,Z,f.state.transmissionRenderTarget[w.id]),pr.upload(F,Oa(Se),cn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pr.upload(F,Oa(Se),cn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(F,"center",N.center),ct.setValue(F,"modelViewMatrix",N.modelViewMatrix),ct.setValue(F,"normalMatrix",N.normalMatrix),ct.setValue(F,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const qt=z.uniformsGroups;for(let On=0,kn=qt.length;On<kn;On++){const Ba=qt[On];I.update(Ba,Jt),I.bind(Ba,Jt)}}return Jt}function Rd(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Pd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,B){Ee.get(w.texture).__webglTexture=D,Ee.get(w.depthTexture).__webglTexture=B;const z=Ee.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const B=Ee.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){R=w,E=D,T=B;let z=!0,N=null,ie=!1,ue=!1;if(w){const ye=Ee.get(w);if(ye.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(ye.__hasExternalTextures)A.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&Ee.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const Ne=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?N=Ne[D][B]:N=Ne[D],ie=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[B]:N=Ne,P.copy(w.viewport),O.copy(w.scissor),U=w.scissorTest}else P.copy(me).multiplyScalar(V).floor(),O.copy(Ue).multiplyScalar(V).floor(),U=Ye;if(Ae.bindFramebuffer(F.FRAMEBUFFER,N)&&z&&Ae.drawBuffers(w,N),Ae.viewport(P),Ae.scissor(O),Ae.setScissorTest(U),ie){const ye=Ee.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,B)}else if(ue){const ye=Ee.get(w.texture),Le=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Le)}S=-1},this.readRenderTargetPixels=function(w,D,B,z,N,ie,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Ae.bindFramebuffer(F.FRAMEBUFFER,xe);try{const ye=w.texture,Le=ye.format,Ne=ye.type;if(!Ve.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&B>=0&&B<=w.height-N&&F.readPixels(D,B,z,N,ke.convert(Le),ke.convert(Ne),ie)}finally{const ye=R!==null?Ee.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,D,B,z,N,ie,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){const ye=w.texture,Le=ye.format,Ne=ye.type;if(!Ve.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-z&&B>=0&&B<=w.height-N){Ae.bindFramebuffer(F.FRAMEBUFFER,xe);const be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),F.readPixels(D,B,z,N,ke.convert(Le),ke.convert(Ne),0);const qe=R!==null?Ee.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,qe);const ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ph(F,ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(be),F.deleteSync(ot),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,B=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(w.image.width*z),ie=Math.floor(w.image.height*z),ue=D!==null?D.x:0,xe=D!==null?D.y:0;A.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,ue,xe,N,ie),Ae.unbindTexture()},this.copyTextureToTexture=function(w,D,B=null,z=null,N=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ie,ue,xe,ye,Le,Ne,be,qe,ot;const lt=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(ie=B.max.x-B.min.x,ue=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,ye=B.min.x,Le=B.min.y,Ne=B.isBox3?B.min.z:0):(ie=lt.width,ue=lt.height,xe=lt.depth||1,ye=0,Le=0,Ne=0),z!==null?(be=z.x,qe=z.y,ot=z.z):(be=0,qe=0,ot=0);const zt=ke.convert(D.format),Ke=ke.convert(D.type);let Se;D.isData3DTexture?(A.setTexture3D(D,0),Se=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Se=F.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Se=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const xn=F.getParameter(F.UNPACK_ROW_LENGTH),Ze=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Jt=F.getParameter(F.UNPACK_SKIP_PIXELS),pi=F.getParameter(F.UNPACK_SKIP_ROWS),Gt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ye),F.pixelStorei(F.UNPACK_SKIP_ROWS,Le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne);const is=w.isDataArrayTexture||w.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const cn=Ee.get(w),ss=Ee.get(D),qt=Ee.get(cn.__renderTarget),On=Ee.get(ss.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let kn=0;kn<xe;kn++)is&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,N,Ne+kn),w.isDepthTexture?(ct&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,N,ot+kn),F.blitFramebuffer(ye,Le,ie,ue,be,qe,ie,ue,F.DEPTH_BUFFER_BIT,F.NEAREST)):ct?F.copyTexSubImage3D(Se,N,be,qe,ot+kn,ye,Le,ie,ue):F.copyTexSubImage2D(Se,N,be,qe,ot+kn,ye,Le,ie,ue);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Se,N,be,qe,ot,ie,ue,xe,zt,Ke,lt.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Se,N,be,qe,ot,ie,ue,xe,zt,lt.data):F.texSubImage3D(Se,N,be,qe,ot,ie,ue,xe,zt,Ke,lt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,be,qe,ie,ue,zt,Ke,lt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,be,qe,lt.width,lt.height,zt,lt.data):F.texSubImage2D(F.TEXTURE_2D,N,be,qe,ie,ue,zt,Ke,lt);F.pixelStorei(F.UNPACK_ROW_LENGTH,xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt),N===0&&D.generateMipmaps&&F.generateMipmap(Se),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B=null,z=null,N=0){return w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],D=arguments[3],N=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,B,z,N)},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(e),this.density=t}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zl extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new L;class Ma{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ma(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hl=new L,Gl=new je,Vl=new je,Vg=new L,$l=new Ie,Qs=new L,eo=new mn,Wl=new Ie,to=new Ji;class $g extends H{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Va,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingBox.expandByPoint(Qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingSphere.expandByPoint(Qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1&&(Wl.copy(i).invert(),to.copy(e.ray).applyMatrix4(Wl),!(this.boundingBox!==null&&to.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Va?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Gl.fromBufferAttribute(i.attributes.skinIndex,e),Vl.fromBufferAttribute(i.attributes.skinWeight,e),Hl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Vl.getComponent(s);if(o!==0){const a=Gl.getComponent(s);$l.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vg.copy(Hl).applyMatrix4($l),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pd extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fd extends Tt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Bt,d=Bt,h,u){super(null,o,a,l,c,d,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new Ie,Wg=new Ie;class Sa{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Wg;Xl.multiplyMatrices(a,t[s]),Xl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Sa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fd(t,e,e,Kt,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new pd),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class na extends pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new Ie,ql=new Ie,er=[],jl=new Un,Xg=new Ie,cs=new H,ds=new mn;class qg extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),jl.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),ds.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ci),ql.multiplyMatrices(n,Ci),cs.matrixWorld=ql,cs.raycast(e,er);for(let o=0,a=er.length;o<a;o++){const l=er[o];l.instanceId=s,l.object=this,t.push(l)}er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fd(new Float32Array(i*this.count),i,this.count,pa,rn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wa extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gr=new L,_r=new L,Yl=new Ie,hs=new Ji,tr=new mn,no=new L,Kl=new L;class Ea extends dt{constructor(e=new _t,t=new wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gr.fromBufferAttribute(t,i-1),_r.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gr.distanceTo(_r);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;Yl.copy(i).invert(),hs.copy(e.ray).applyMatrix4(Yl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){const f=d.getX(_),y=d.getX(_+1),x=nr(this,e,hs,l,f,y);x&&t.push(x)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(p),f=nr(this,e,hs,l,_,g);f&&t.push(f)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=c){const f=nr(this,e,hs,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=nr(this,e,hs,l,m-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(gr.fromBufferAttribute(o,i),_r.fromBufferAttribute(o,s),t.distanceSqToSegment(gr,_r,no,Kl)>n)return;no.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(no);if(!(l<e.near||l>e.far))return{distance:l,point:Kl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Zl=new L,Jl=new L;class md extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zl.fromBufferAttribute(t,i),Jl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zl.distanceTo(Jl);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jg extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Es extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ql=new Ie,ia=new Ji,ir=new mn,sr=new L;class vr extends dt{constructor(e=new _t,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=s,e.ray.intersectsSphere(ir)===!1)return;Ql.copy(i).invert(),ia.copy(e.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,_=p;m<_;m++){const g=c.getX(m);sr.fromBufferAttribute(h,g),ec(sr,g,l,i,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=u,_=p;m<_;m++)sr.fromBufferAttribute(h,m),ec(sr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(r,e,t,n,i,s,o){const a=ia.distanceSqToPoint(r);if(a<t){const l=new L;ia.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ts extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,d=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ht extends _t{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],h=[],u=[],p=[];let m=0;const _=[],g=n/2;let f=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function y(){const v=new L,C=new L;let E=0;const T=(t-e)/n;for(let R=0;R<=s;R++){const S=[],b=R/s,P=b*(t-e)+e;for(let O=0;O<=i;O++){const U=O/i,G=U*l+a,X=Math.sin(G),W=Math.cos(G);C.x=P*X,C.y=-b*n+g,C.z=P*W,h.push(C.x,C.y,C.z),v.set(X,T,W).normalize(),u.push(v.x,v.y,v.z),p.push(U,1-b),S.push(m++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const b=_[S][R],P=_[S+1][R],O=_[S+1][R+1],U=_[S][R+1];(e>0||S!==0)&&(d.push(b,P,U),E+=3),(t>0||S!==s-1)&&(d.push(P,O,U),E+=3)}c.addGroup(f,E,0),f+=E}function x(v){const C=m,E=new ve,T=new L;let R=0;const S=v===!0?e:t,b=v===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,g*b,0),u.push(0,b,0),p.push(.5,.5),m++;const P=m;for(let O=0;O<=i;O++){const G=O/i*l+a,X=Math.cos(G),W=Math.sin(G);T.x=S*W,T.y=g*b,T.z=S*X,h.push(T.x,T.y,T.z),u.push(0,b,0),E.x=X*.5+.5,E.y=W*.5*b+.5,p.push(E.x,E.y),m++}for(let O=0;O<i;O++){const U=C+O,G=P+O;v===!0?d.push(G,G+1,U):d.push(G+1,G,U),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qi extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=e;const u=(t-e)/i,p=new L,m=new ve;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const f=s+g/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,d.push(m.x,m.y)}h+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let f=0;f<n;f++){const y=f+g,x=y,v=y+n+1,C=y+n+2,E=y+1;a.push(x,v,E),a.push(v,C,E)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Je extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],m=[],_=[],g=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(E+v,1-x),y.push(c++)}d.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const x=d[f][y+1],v=d[f][y],C=d[f+1][y],E=d[f+1][y+1];(f!==0||o>0)&&p.push(x,v,E),(f!==n-1||l<Math.PI)&&p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new st(m,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oi extends _t{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new L,h=new L,u=new L;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){const _=m/i*s,g=p/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){const _=(i+1)*p+m-1,g=(i+1)*(p-1)+m-1,f=(i+1)*(p-1)+m,y=(i+1)*p+m;o.push(_,g,y),o.push(g,f,y)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yg extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ne extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends ne{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function rr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Kg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Zg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function gd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class As{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jg extends As{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$a,endingEnd:$a}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wa:s=e,a=2*t-n;break;case Xa:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wa:o=e,l=2*n-t;break;case Xa:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,f=-u*g+2*u*_-u*m,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,x=(-1-p)*g+(1.5+p)*_+.5*m,v=p*g-p*_;for(let C=0;C!==a;++C)s[C]=f*o[d+C]+y*o[c+C]+x*o[l+C]+v*o[h+C];return s}}class Qg extends As{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*d;return s}}class e0 extends As{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rr(t,this.TimeBufferType),this.values=rr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rr(e.times,Array),values:rr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new e0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case Tr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return Tr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Kg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Tr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,p=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[u+m]||_!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ms;class es extends _n{constructor(e,t,n){super(e,t,n)}}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=bs;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class _d extends _n{}_d.prototype.ValueTypeName="color";class ji extends _n{}ji.prototype.ValueTypeName="number";class t0 extends As{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)pn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Yi extends _n{InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}}Yi.prototype.ValueTypeName="quaternion";Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends _n{constructor(e,t,n){super(e,t,n)}}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=bs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends _n{}Ki.prototype.ValueTypeName="vector";class n0{constructor(e="",t=-1,n=[],i=th){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(s0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=Zg(l);l=tc(l,1,d),c=tc(c,1,d),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,m,_){if(p.length!==0){const g=[],f=[];gd(p,g,f,m),g.length!==0&&_.push(new h(u,g,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)p[u[m].morphTargets[_]]=-1;for(const _ in p){const g=[],f=[];for(let y=0;y!==u[m].morphTargets.length;++y){const x=u[m];g.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new ji(".morphTargetInfluence["+_+"]",g,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Ki,p+".position",u,"pos",i),n(Yi,p+".quaternion",u,"rot",i),n(Ki,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function i0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Ki;case"color":return _d;case"quaternion":return Yi;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function s0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i0(r.type);if(r.times===void 0){const t=[],n=[];gd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Yn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return m}return null}}}const r0=new vd;class ui{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const En={};class o0 extends Error{constructor(e,t){super(e),this.response=t}}class xr extends ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:i});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=En[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){y();function y(){h.read().then(({done:x,value:v})=>{if(x)f.close();else{_+=v.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let E=0,T=d.length;E<T;E++){const R=d[E];R.onProgress&&R.onProgress(C)}f.enqueue(v),y()}},x=>{f.error(x)})}}});return new Response(g)}else throw new o0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{Yn.add(e,c);const d=En[e];delete En[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=En[e];if(d===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class a0 extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ss("img");function l(){d(),Yn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){d(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xd extends ui{constructor(e){super(e)}load(e,t,n,i){const s=new Tt,o=new a0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Cs extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Q(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class l0 extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const io=new Ie,nc=new L,ic=new L;class Ta{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c0 extends Ta{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Wi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class d0 extends Cs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new c0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const sc=new Ie,us=new L,so=new L;class h0 extends Ta{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),us.setFromMatrixPosition(e.matrixWorld),n.position.copy(us),so.copy(n.position),so.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(so),n.updateMatrixWorld(),i.makeTranslation(-us.x,-us.y,-us.z),sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc)}}class bt extends Cs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u0 extends Ta{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sa extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new u0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class p0 extends Cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class f0 extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Yn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Yn.add(e,l),s.manager.itemStart(e)}}class yd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(){return performance.now()}const Aa="\\[\\]\\.:\\/",m0=new RegExp("["+Aa+"]","g"),Ca="[^"+Aa+"]",g0="[^"+Aa.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Ca),v0=/(WCOD+)?/.source.replace("WCOD",g0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ca),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ca),b0=new RegExp("^"+_0+v0+x0+y0+"$"),M0=["material","materials","bones","map"];class S0{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){const t=b0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);M0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=S0;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const oc=new Ie;class w0{constructor(e,t,n=0,i=1/0){this.ray=new Ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(e,t=!0,n=[]){return ra(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ra(e[i],this,n,t);return n.sort(ac),n}}function ac(r,e){return r.distance-e.distance}function ra(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ra(s[o],e,t,!0)}}class lc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E0 extends md{constructor(e=10,t=10,n=4473924,i=8947848){n=new Q(n),i=new Q(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,p=0,m=-a;u<=t;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=u===s?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const d=new _t;d.setAttribute("position",new st(l,3)),d.setAttribute("color",new st(c,3));const h=new wa({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class T0 extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);const cc={type:"change"},Ra={type:"start"},bd={type:"end"},or=new Ji,dc=new Xn,A0=Math.cos(70*Kc.DEG2RAD),yt=new L,Ht=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ro=1e-6;class C0 extends T0{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new pn,this._lastTargetPosition=new L,this._quat=new pn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lc,this._sphericalDelta=new lc,this._scale=1,this._panOffset=new L,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new L,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P0.bind(this),this._onPointerDown=R0.bind(this),this._onPointerUp=L0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=N0.bind(this),this._onKeyDown=F0.bind(this),this._onTouchStart=U0.bind(this),this._onTouchMove=O0.bind(this),this._onMouseDown=I0.bind(this),this._onMouseMove=D0.bind(this),this._interceptControlDown=B0.bind(this),this._interceptControlUp=z0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ht:n>Math.PI&&(n-=Ht),i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<A0?this.object.lookAt(this.target):(dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(dc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ro||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ro||this._lastTargetPosition.distanceToSquared(this.target)>ro?(this.dispatchEvent(cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;yt.copy(i).sub(this.target);let s=yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ht*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function R0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function P0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function L0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bd),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function I0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=it.DOLLY;break;case Di.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}break;case Di.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ra)}function D0(r){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function N0(r){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(r.preventDefault(),this.dispatchEvent(Ra),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(bd))}function F0(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function U0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=it.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=it.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ra)}function O0(r){switch(this._trackPointer(r),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=it.NONE}}function k0(r){this.enabled!==!1&&r.preventDefault()}function B0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Md extends dt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ve(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ri=new L,hc=new Ie,uc=new Ie,pc=new L,fc=new L;class H0{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),hc.copy(_.matrixWorldInverse),uc.multiplyMatrices(_.projectionMatrix,hc),d(m,m,_),p(m)},this.setSize=function(m,_){n=m,i=_,s=n/2,o=i/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function d(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Ri.setFromMatrixPosition(m.matrixWorld),Ri.applyMatrix4(uc);const f=Ri.z>=-1&&Ri.z<=1&&m.layers.test(g.layers)===!0,y=m.element;y.style.display=f===!0?"":"none",f===!0&&(m.onBeforeRender(t,_,g),y.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Ri.x*s+s)+"px,"+(-Ri.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),m.onAfterRender(t,_,g));const x={distanceToCameraSquared:h(g,m)};a.objects.set(m,x)}for(let f=0,y=m.children.length;f<y;f++)d(m.children[f],_,g)}function h(m,_){return pc.setFromMatrixPosition(m.matrixWorld),fc.setFromMatrixPosition(_.matrixWorld),pc.distanceToSquared(fc)}function u(m){const _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function p(m){const _=u(m).sort(function(f,y){if(f.renderOrder!==y.renderOrder)return y.renderOrder-f.renderOrder;const x=a.objects.get(f).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return x-v}),g=_.length;for(let f=0,y=_.length;f<y;f++)_[f].element.style.zIndex=g-f}}}function mc(r,e){if(e===nh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Jo||e===qc){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Jo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class G0 extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new a_(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=xs.extractUrlBase(e);o=xs.resolveURL(c,this.path)}else o=xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new xr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sd){try{o[He.KHR_BINARY_GLTF]=new l_(e)}catch(h){i&&i(h);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new b_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:o[h]=new W0;break;case He.KHR_DRACO_MESH_COMPRESSION:o[h]=new c_(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[h]=new d_;break;case He.KHR_MESH_QUANTIZATION:o[h]=new h_;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function V0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $0{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Q(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Nt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sa(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new bt(d),c.distance=h;break;case"spot":c=new d0(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,An(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class W0{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){const i=[];e.color=new Q(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}}class X0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class q0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(s)}}class j0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Y0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class K0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Q(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,xt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Z0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class J0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Q().setRGB(a[0],a[1],a[2],Nt),Promise.all(s)}}class Q0{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class e_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Q().setRGB(a[0],a[1],a[2],Nt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,xt)),Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class n_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class s_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class o_{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class a_{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Yt.TRIANGLES&&c.mode!==Yt.TRIANGLE_STRIP&&c.mode!==Yt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const m of h){const _=new Ie,g=new L,f=new pn,y=new L(1,1,1),x=new qg(m.geometry,m.material,u);for(let v=0;v<u;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(g,f,y));for(const v in l)if(v==="_COLOR_0"){const C=l[v];x.instanceColor=new na(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);dt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),p.push(x)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const Sd="glTF",ps=12,gc={JSON:1313821514,BIN:5130562};class l_{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ps),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ps,s=new DataView(e,ps);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===gc.JSON){const c=new Uint8Array(e,ps+o,a);this.content=n.decode(c)}else if(l===gc.BIN){const c=ps+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class c_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=oa[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=oa[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],p=ki[u.componentType];c[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const m in p.attributes){const _=p.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(p)},a,c,Nt,u)})})}}class d_{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h_{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class wd extends As{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,m=e*c,_=m-c,g=-2*p+3*u,f=p-u,y=1-g,x=f-u+h;for(let v=0;v!==a;v++){const C=o[_+v+a],E=o[_+v+l]*d,T=o[m+v+a],R=o[m+v]*d;s[v]=y*C+x*E+g*T+f*R}return s}}const u_=new pn;class p_ extends wd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return u_.fromArray(s).normalize().toArray(s),s}}const Yt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ki={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_c={9728:Bt,9729:Wt,9984:Oc,9985:ar,9986:fs,9987:Cn},vc={33071:jn,33648:fr,10497:Gi},oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f_={CUBICSPLINE:void 0,LINEAR:Ms,STEP:bs},ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function m_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),r.DefaultMaterial}function ri(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function An(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function g_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(r.morphAttributes.position=d),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function __(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v_(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lo(t.attributes):e=r.indices+":"+lo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+lo(r.targets[n]);return e}function lo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function aa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const y_=new Ie;class b_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new xd(this.options.manager):this.textureLoader=new f0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ri(s,a,i),An(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(xs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=oo[i.type],a=ki[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new pt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=oo[i.type],c=ki[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(p&&p!==h){const f=Math.floor(u/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(y);x||(_=new c(a,f*p,i.count*p/d),x=new Gg(_,p/d),t.cache.add(y,x)),g=new Ma(x,l,u%p/d,m)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),g=new pt(_,l,m);if(i.sparse!==void 0){const f=oo.SCALAR,y=ki[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new y(o[1],x,i.sparse.count*f),E=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,R=C.length;T<R;T++){const S=C[T];if(g.setX(S,E[T*l]),l>=2&&g.setY(S,E[T*l+1]),l>=3&&g.setZ(S,E[T*l+2]),l>=4&&g.setW(S,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=_c[u.magFilter]||Wt,d.minFilter=_c[u.minFilter]||Cn,d.wrapS=vc[u.wrapS]||Gi,d.wrapT=vc[u.wrapT]||Gi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Bt&&d.minFilter!==Wt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let m=u;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Tt(_);g.needsUpdate=!0,u(g)}),t.load(xs.resolveURL(h,s.path),m,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),An(h,o),h.userData.mimeType=o.mimeType||x_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Es,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wa,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ne}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const h=i[He.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Q(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Nt),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=It);const d=s.alphaMode||ao.OPAQUE;if(d===ao.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===ao.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ve(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==on){const h=s.emissiveFactor;a.emissive=new Q().setRGB(h[0],h[1],h[2],Nt)}return s.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),An(h,s),t.associations.set(h,{materials:e}),s.extensions&&ri(i,h,s),h})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=v_(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=xc(new _t,c,t),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?m_(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let p=0,m=d.length;p<m;p++){const _=d[p],g=o[p];let f;const y=c[p];if(g.mode===Yt.TRIANGLES||g.mode===Yt.TRIANGLE_STRIP||g.mode===Yt.TRIANGLE_FAN||g.mode===void 0)f=s.isSkinnedMesh===!0?new $g(_,y):new H(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Yt.TRIANGLE_STRIP?f.geometry=mc(f.geometry,qc):g.mode===Yt.TRIANGLE_FAN&&(f.geometry=mc(f.geometry,Jo));else if(g.mode===Yt.LINES)f=new md(_,y);else if(g.mode===Yt.LINE_STRIP)f=new Ea(_,y);else if(g.mode===Yt.LINE_LOOP)f=new jg(_,y);else if(g.mode===Yt.POINTS)f=new vr(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&__(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),An(f,s),g.extensions&&ri(i,f,g),t.assignFinalMaterial(f),h.push(f)}for(let p=0,m=h.length;p<m;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&ri(i,h[0],s),h[0];const u=new Lt;s.extensions&&ri(i,u,s),t.associations.set(u,{meshes:e});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Kc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Mr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),An(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new Ie;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],m=i.samplers[p.sampler],_=p.target,g=_.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(m),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],m=h[2],_=h[3],g=h[4],f=[];for(let y=0,x=u.length;y<x;y++){const v=u[y],C=p[y],E=m[y],T=_[y],R=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,C,E,T,R);if(S)for(let b=0;b<S.length;b++)f.push(S[b])}return new n0(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,y_)});for(let p=0,m=h.length;p<m;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new pd:c.length>1?d=new Lt:c.length===1?d=c[0]:d=new dt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(s.name&&(d.userData.name=s.name,d.name=o),An(d,s),s.extensions&&ri(n,d,s),s.matrix!==void 0){const h=new Ie;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Lt;n.name&&(s.name=i.createUniqueName(n.name)),An(s,n),n.extensions&&ri(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const c=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof un||u instanceof Tt)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Wn[s.path]===Wn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Wn[s.path]){case Wn.weights:c=ji;break;case Wn.rotation:c=Yi;break;case Wn.position:case Wn.scale:c=Ki;break;default:switch(n.itemSize){case 1:c=ji;break;case 2:case 3:default:c=Ki;break}break}const d=i.interpolation!==void 0?f_[i.interpolation]:Ms,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const m=new c(l[u]+"."+Wn[s.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=aa(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Yi?p_:wd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M_(r,e,t){const n=e.attributes,i=new Un;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const d=aa(ki[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,m=u.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),u.normalized){const _=aa(ki[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function xc(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=oa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ze.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),An(r,e),M_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?g_(r,e.targets,t):r})}const co=new WeakMap;class S_ extends ui{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new xr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,xt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Nt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(co.has(e)){const l=co.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,d)=>{i._callbacks[s]={resolve:c,reject:d},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),co.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new _t;e.index&&t.setIndex(new pt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new pt(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==xt)return;const n=new Q;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),ze.toWorkingColorSpace(n,xt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new xr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=w_.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function w_(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(d){r.onModuleLoaded=function(h){d({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(d=>{const h=d.draco,u=new h.Decoder;try{const p=t(h,u,new Int8Array(l),c),m=p.attributes.map(_=>_.array.buffer);p.index&&m.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},m)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{h.destroy(u)}});break}};function t(o,a,l,c){const d=c.attributeIDs,h=c.attributeTypes;let u,p;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)u=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,u);else if(m===o.POINT_CLOUD)u=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const g in d){const f=self[h[g]];let y,x;if(c.useUniqueIDs)x=d[g],y=a.GetAttributeByUniqueId(u,x);else{if(x=a.GetAttributeId(u,o[d[g]]),x===-1)continue;y=a.GetAttribute(u,x)}const v=i(o,a,u,g,f,y);g==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return m===o.TRIANGULAR_MESH&&(_.index=n(o,a,u)),o.destroy(u),_}function n(o,a,l){const d=l.num_faces()*3,h=d*4,u=o._malloc(h);a.GetTrianglesUInt32Array(l,h,u);const p=new Uint32Array(o.HEAPF32.buffer,u,d).slice();return o._free(u),{array:p,itemSize:1}}function i(o,a,l,c,d,h){const u=h.num_components(),m=l.num_points()*u,_=m*d.BYTES_PER_ELEMENT,g=s(o,d),f=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,g,_,f);const y=new d(o.HEAPF32.buffer,f,m).slice();return o._free(f),{name:c,array:y,itemSize:u}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class E_{constructor(){this._gltfLoader=new G0,this._textureLoader=new xd,this._modelCache=new Map,this._textureCache=new Map,this._loadingManager=new vd,this._pendingLoads=new Map;const e=new S_;e.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),e.setDecoderConfig({type:"js"}),this._gltfLoader.setDRACOLoader(e),this._gltfLoader.manager=this._loadingManager,this._textureLoader.manager=this._loadingManager,this.ready=!1,this._preloadPromise=null}async loadModel(e){if(this._modelCache.has(e))return this._cloneModel(this._modelCache.get(e));if(this._pendingLoads.has(e))return await this._pendingLoads.get(e),this._cloneModel(this._modelCache.get(e));const t=new Promise((n,i)=>{this._gltfLoader.load(e,s=>{this._modelCache.set(e,s.scene),n(s.scene)},void 0,s=>{console.error(`[AssetLoader] Failed to load model: ${e}`,s),i(s)})});this._pendingLoads.set(e,t);try{await t}finally{this._pendingLoads.delete(e)}return this._cloneModel(this._modelCache.get(e))}async loadTexture(e){return this._textureCache.has(e)?this._textureCache.get(e):new Promise((t,n)=>{this._textureLoader.load(e,i=>{this._textureCache.set(e,i),t(i)},void 0,i=>{console.error(`[AssetLoader] Failed to load texture: ${e}`,i),n(i)})})}async preload(e){const n=(await Promise.allSettled(e.map(i=>this.loadModel(i)))).filter(i=>i.status==="rejected");n.length>0&&console.warn(`[AssetLoader] ${n.length}/${e.length} models failed to preload`),this.ready=!0}_cloneModel(e){const t=e.clone(!0);return t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.castShadow=!0,n.receiveShadow=!0)}),t}dispose(){for(const[,e]of this._modelCache)e.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.map&&t.material.map.dispose(),t.material.dispose())});this._modelCache.clear();for(const[,e]of this._textureCache)e.dispose();this._textureCache.clear()}}const T_=new E_;class A_{constructor(){this.group=new Lt,this._buildFloor(),this._buildGrid(),this._buildCarpetZone(),this._buildAmbientProps(),this._buildCeilingStructure(),this._buildNeonAccents(),this._loadGLBProps()}_buildFloor(){const e=new Mt(80,80,1,1),t=new ne({color:1973802,roughness:.35,metalness:.3}),n=new H(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n);const i=new Mt(80,80,1,1),s=new ne({color:2763322,roughness:.15,metalness:.6,transparent:!0,opacity:.12}),o=new H(i,s);o.rotation.x=-Math.PI/2,o.position.y=.005,this.group.add(o)}_buildGrid(){const e=new E0(60,40,2763332,1710638);e.position.y=.01,e.material.opacity=.15,e.material.transparent=!0,this.group.add(e);const t=new qi(14,14.12,64),n=new ne({color:3364266,emissive:new Q(2245802),emissiveIntensity:.3,transparent:!0,opacity:.35,side:It}),i=new H(t,n);i.rotation.x=-Math.PI/2,i.position.y=.02,this.group.add(i)}_buildCarpetZone(){const e=new Mt(28,28,1,1),t=new ne({color:2236984,roughness:.92,metalness:0}),n=new H(e,t);n.rotation.x=-Math.PI/2,n.position.y=.008,n.receiveShadow=!0,this.group.add(n);const i=new ne({color:4482730,emissive:new Q(2245802),emissiveIntensity:.4,transparent:!0,opacity:.5}),s=14,o=.08,a=[{x:0,z:-s,sx:s*2,sz:o},{x:0,z:s,sx:s*2,sz:o},{x:-s,z:0,sx:o,sz:s*2},{x:s,z:0,sx:o,sz:s*2}];for(const l of a){const c=new Mt(l.sx,l.sz),d=new H(c,i);d.rotation.x=-Math.PI/2,d.position.set(l.x,.015,l.z),this.group.add(d)}}_buildAmbientProps(){const e=new ne({color:5592422,roughness:.2,metalness:.8}),t=12,n=new ht(.18,.22,t,12),i=[[-13,0,-13],[13,0,-13],[-13,0,13],[13,0,13]];for(const[g,,f]of i){const y=new H(n,e);y.position.set(g,t/2,f),y.castShadow=!0,this.group.add(y);const x=new Te(.04,t-.5,.04),v=new ne({color:3368703,emissive:new Q(2250222),emissiveIntensity:.8}),C=new H(x,v);C.position.set(g,t/2,f+.2),this.group.add(C);const E=new bt(4482764,.4,14);E.position.set(g,t+.2,f),this.group.add(E)}const s=new ne({color:2762016,roughness:.8}),o=new ne({color:2976570,roughness:.6,emissive:new Q(662026),emissiveIntensity:.2}),a=[[-16,0,-16],[16,0,16],[-16,0,10],[10,0,-16],[0,0,-18],[-18,0,0]];for(const[g,,f]of a){const y=new ht(.28,.2,.5,8),x=new H(y,s);x.position.set(g,.25,f),x.castShadow=!0,this.group.add(x);const v=new Oi(.28,.025,6,12),C=new H(v,s);C.position.set(g,.5,f),C.rotation.x=Math.PI/2,this.group.add(C);const E=4+Math.floor(Math.random()*3);for(let T=0;T<E;T++){const R=.15+Math.random()*.2,S=new Je(R,8,6),b=new H(S,o);b.position.set(g+(Math.random()-.5)*.3,.55+Math.random()*.45,f+(Math.random()-.5)*.3),b.scale.set(1,.8+Math.random()*.4,1),b.castShadow=!0,this.group.add(b)}}const l=new ne({color:12303308,roughness:.2,metalness:.5}),c=new H(new ht(.2,.2,.8,10),l);c.position.set(18,.9,-5),c.castShadow=!0,this.group.add(c);const d=new ne({color:8965358,roughness:.05,metalness:.1,transparent:!0,opacity:.5}),h=new H(new ht(.18,.2,.4,10),d);h.position.set(18,1.5,-5),this.group.add(h);const u=new ne({color:3355460,roughness:.4,metalness:.4}),p=new H(new Te(3.2,2.2,.1),u);p.position.set(-18,2.2,0),p.rotation.y=Math.PI/2,p.castShadow=!0,this.group.add(p);const m=new H(new Mt(2.9,1.9),new ne({color:15790328,roughness:.95,metalness:0,emissive:new Q(15790328),emissiveIntensity:.05}));m.position.set(-17.94,2.2,0),m.rotation.y=Math.PI/2,this.group.add(m);const _=[16768324,16737928,4513279,8978278];for(let g=0;g<6;g++){const f=new Mt(.3,.25),y=new ne({color:_[Math.floor(Math.random()*_.length)],roughness:.9,side:It}),x=new H(f,y);x.position.set(-17.92,2+(Math.random()-.5)*1.2,(Math.random()-.5)*2),x.rotation.y=Math.PI/2,x.rotation.z=(Math.random()-.5)*.2,this.group.add(x)}this._buildStandingDesk(16,0,5),this._buildStandingDesk(-16,0,-8),this._buildBeanBag(15,0,-12,16737860),this._buildBeanBag(-15,0,12,4491519)}_buildStandingDesk(e,t,n){const i=new ne({color:4473936,metalness:.6,roughness:.25}),s=new ne({color:6967858,roughness:.4,metalness:.05}),o=new H(new Te(1.8,.06,.8),s);o.position.set(e,1.1,n),o.castShadow=!0,this.group.add(o);const a=new ht(.03,.03,1.1,6);for(const[h,u]of[[-.8,-.35],[.8,-.35],[-.8,.35],[.8,.35]]){const p=new H(a,i);p.position.set(e+h,.55,n+u),this.group.add(p)}const l=new H(new Te(.8,.5,.03),new ne({color:2236976,roughness:.3,metalness:.5}));l.position.set(e,1.55,n-.2),this.group.add(l);const c=new H(new Mt(.72,.42),new ne({color:660773,emissive:new Q(1122884),emissiveIntensity:.6,roughness:.1}));c.position.set(e,1.55,n-.183),this.group.add(c);const d=new H(new ht(.02,.02,.3,6),new ne({color:4473936,metalness:.7,roughness:.2}));d.position.set(e,1.28,n-.2),this.group.add(d)}_buildBeanBag(e,t,n,i){const s=new ne({color:i,roughness:.85,metalness:0}),o=new Je(.45,12,10),a=new H(o,s);a.position.set(e,.3,n),a.scale.set(1,.6,1.1),a.castShadow=!0,this.group.add(a);const l=new Je(.3,10,8),c=new H(l,s);c.position.set(e,.45,n+.25),c.scale.set(.9,.8,.6),this.group.add(c)}_buildCeilingStructure(){const t=new ne({color:2763317,roughness:.5,metalness:.4}),n=new Te(34,.2,.35);for(const l of[-10,0,10]){const c=new H(n,t);c.position.set(0,12,l),this.group.add(c)}const i=new Te(.35,.2,34);for(const l of[-10,0,10]){const c=new H(i,t);c.position.set(l,12,0),this.group.add(c)}const s=5,o=12-s,a=[[-7,0,-7],[7,0,-7],[-7,0,7],[7,0,7],[0,0,0]];for(const[l,,c]of a){const d=new H(new ht(.005,.005,s,4),t);d.position.set(l,12-s/2,c),this.group.add(d);const h=new ne({color:2236976,roughness:.3,metalness:.5,side:It}),u=new H(new ht(.05,.45,.3,12,1,!0),h);u.position.set(l,o-.15,c),this.group.add(u);const p=new H(new Je(.07,8,6),new ne({color:16772812,emissive:new Q(16768426),emissiveIntensity:1.5}));p.position.set(l,o-.05,c),this.group.add(p);const m=new bt(16772829,.5,16);m.position.set(l,o,c),this.group.add(m)}}_buildNeonAccents(){const e=new ne({color:3368703,emissive:new Q(2250239),emissiveIntensity:1.2,transparent:!0,opacity:.8}),t=3,n=14,i=[{x:-n,z:-n,dx:t,dz:0},{x:-n,z:-n,dx:0,dz:t},{x:n,z:-n,dx:-t,dz:0},{x:n,z:-n,dx:0,dz:t},{x:-n,z:n,dx:t,dz:0},{x:-n,z:n,dx:0,dz:-t},{x:n,z:n,dx:-t,dz:0},{x:n,z:n,dx:0,dz:-t}];for(const h of i){const u=Math.abs(h.dx||h.dz),p=h.dx!==0,m=new Te(p?u:.04,.03,p?.04:u),_=new H(m,e);_.position.set(h.x+h.dx/2,.02,h.z+h.dz/2),this.group.add(_)}const s=new qi(1,1.1,32),o=new ne({color:4491519,emissive:new Q(3368703),emissiveIntensity:.8,transparent:!0,opacity:.6,side:It}),a=new H(s,o);a.rotation.x=-Math.PI/2,a.position.set(0,.02,-8),this.group.add(a);const l=new Ts(1,32),c=new ne({color:1118498,emissive:new Q(1122884),emissiveIntensity:.3,transparent:!0,opacity:.4}),d=new H(l,c);d.rotation.x=-Math.PI/2,d.position.set(0,.018,-8),this.group.add(d)}async _loadGLBProps(){const e=[{model:"models/bookcaseOpen.glb",pos:[-17,0,-6],rot:Math.PI/2,scale:2},{model:"models/bookcaseOpen.glb",pos:[-17,0,6],rot:Math.PI/2,scale:2},{model:"models/tableCoffeeGlass.glb",pos:[17,0,0],rot:0,scale:2},{model:"models/loungeDesignChair.glb",pos:[17,0,-2],rot:Math.PI,scale:2},{model:"models/loungeDesignChair.glb",pos:[17,0,2],rot:0,scale:2},{model:"models/pottedPlant.glb",pos:[14,0,-14],rot:0,scale:2.5},{model:"models/pottedPlant.glb",pos:[-14,0,14],rot:1.2,scale:2.5},{model:"models/plantSmall1.glb",pos:[18,0,8],rot:.5,scale:2},{model:"models/plantSmall1.glb",pos:[-18,0,-12],rot:2.1,scale:2},{model:"models/lampRoundTable.glb",pos:[16.5,1.12,5.2],rot:0,scale:1.5},{model:"models/lampRoundTable.glb",pos:[-15.5,1.12,-7.8],rot:0,scale:1.5},{model:"models/books.glb",pos:[-17,2.2,-6],rot:.3,scale:1.8},{model:"models/books.glb",pos:[-17,1.2,6],rot:-.4,scale:1.8},{model:"models/rugRound.glb",pos:[17,.01,0],rot:0,scale:3},{model:"models/coffeeMachine.glb",pos:[18,.5,-3],rot:Math.PI,scale:2}];for(const t of e)this._placeModel(t.model,t.pos,t.rot,t.scale)}async _placeModel(e,[t,n,i],s,o){try{const a=await T_.loadModel(e);a.position.set(t,n,i),a.rotation.y=s,a.scale.setScalar(o),a.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),this.group.add(a)}catch{}}}function hn(r){if(r==null)return"$0";const e=Number(r);return e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(0)}K`:`$${e.toFixed(0)}`}function C_(r){if(r==null)return"0";const e=Number(r);return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toFixed(0)}function mt(r){return r==null?"0.0":Number(r).toFixed(1)}function R_(r){if(r==null)return"?";const e=Number(r);return e>24?"24+mo":`${e.toFixed(1)}mo`}const P_=5915182,L_=1973806,I_=396826,yc=[16109737,15251594,13931883,13010498,9262372,1578e4],bc=[1710618,3809296,7029286,9136404,12883018,2759178,4860442,9116186,1714746],Mc=["tshirt","hoodie","blazer","polo"],Sc=["short","medium","buzz","pompadour","bun","sidePart"];class D_{constructor(e,t){this.startupId=e,this.accentHex=t,this.accent=new Q(t),this.group=new Lt,this.clickTargets=[],this._highlighted=!1,this._alive=!0,this._bobOffset=Math.random()*Math.PI*2,this._seed=this._hashCode(e),this._rng=this._makeRng(this._seed),this._skinTone=yc[this._rngInt(yc.length)],this._hairColor=bc[this._rngInt(bc.length)],this._hairStyle=Sc[this._rngInt(Sc.length)],this._shirtStyle=Mc[this._rngInt(Mc.length)],this._hasGlasses=this._rng()>.65,this._hasHeadphones=!this._hasGlasses&&this._rng()>.75,this._hasBeard=this._rng()>.7,this._bodyScale=.9+this._rng()*.2,this._buildDeskSetup(),this._buildChair(),this._buildCharacter(),this._buildLaptop(),this._buildDeskProps(),this._buildAccentLight(),this._buildFloorMat(),this._buildLabel(),this._buildMetricBars()}_buildDeskSetup(){const e=new Te(2.6,.1,1.3),t=new ne({color:P_,roughness:.35,metalness:.08});this.deskTop=new H(e,t),this.deskTop.position.set(0,.75,0),this.deskTop.castShadow=!0,this.deskTop.receiveShadow=!0,this.deskTop.userData.startupId=this.startupId,this.clickTargets.push(this.deskTop),this.group.add(this.deskTop);const n=new ne({color:4473936,metalness:.7,roughness:.25}),i=new Te(.06,.7,1.2),s=new H(i,n);s.position.set(-1.2,.35,0),s.castShadow=!0,this.group.add(s);const o=new H(i,n);o.position.set(1.2,.35,0),o.castShadow=!0,this.group.add(o);const a=new Te(2.34,.04,.04),l=new H(a,n);l.position.set(0,.08,0),this.group.add(l)}_buildChair(){const e=new ne({color:L_,roughness:.7,metalness:0}),t=new ne({color:this.accent,roughness:.6,metalness:.1}),n=new Lt;n.position.set(0,0,1.1);const i=new Te(.55,.08,.55),s=new H(i,e);s.position.y=.48,s.castShadow=!0,n.add(s);const o=new Te(.55,.65,.06),a=new H(o,e);a.position.set(0,.83,.26),a.castShadow=!0,n.add(a);const l=new Te(.08,.5,.005),c=new H(l,t);c.position.set(0,.85,.228),n.add(c);const d=new Te(.06,.04,.35),h=new ne({color:2763320,roughness:.4,metalness:.3}),u=new ne({color:3355458,roughness:.8});for(const _ of[-1,1]){const g=new H(d,h);g.position.set(_*.28,.62,.08),n.add(g);const f=new H(new Te(.065,.015,.15),u);f.position.set(_*.28,.645,0),n.add(f)}const p=new ne({color:6710896,metalness:.8,roughness:.15}),m=new H(new ht(.035,.04,.35,8),p);m.position.y=.28,n.add(m);for(let _=0;_<5;_++){const g=_/5*Math.PI*2,f=new Te(.025,.025,.25),y=new H(f,p);y.position.set(Math.cos(g)*.12,.08,Math.sin(g)*.12),y.rotation.y=g,n.add(y);const x=new H(new Je(.035,8,6),new ne({color:2236968,roughness:.9}));x.position.set(Math.cos(g)*.22,.035,Math.sin(g)*.22),n.add(x)}this.group.add(n)}_buildCharacter(){this.characterGroup=new Lt,this.characterGroup.position.set(0,0,1.1);const e=this._bodyScale;this.characterGroup.scale.setScalar(e);const t=new ne({color:this._skinTone,roughness:.55,metalness:0}),n=new ne({color:this.accent,roughness:.4,metalness:.05});this._clothesMat=n;const i=new ne({color:new Q(this.accent).clone().multiplyScalar(.3).offsetHSL(0,-.2,0),roughness:.6}),s=new Te(.4,.5,.25,2,2,2);if(this._roundifyGeometry(s,.06),this.body=new H(s,n),this.body.position.y=1,this.body.castShadow=!0,this.body.userData.startupId=this.startupId,this.clickTargets.push(this.body),this.characterGroup.add(this.body),this._shirtStyle==="hoodie"){const x=new Je(.14,8,6,0,Math.PI*2,0,Math.PI*.45),v=new H(x,n);v.position.set(0,1.28,.06),v.rotation.x=.4,this.characterGroup.add(v)}else if(this._shirtStyle==="blazer"){const x=new ne({color:new Q(this.accent).clone().multiplyScalar(.65),roughness:.4});for(const v of[-1,1]){const C=new H(new Te(.05,.16,.01),x);C.position.set(v*.07,1.13,-.13),C.rotation.z=v*.15,this.characterGroup.add(C)}}const o=new H(new ht(.06,.08,.1,8),t);o.position.y=1.29,this.characterGroup.add(o),this.head=new Lt,this.head.position.y=1.55,this.characterGroup.add(this.head);const a=new Je(.24,20,16),l=new H(a,t);l.scale.set(1,1.12,.95),l.castShadow=!0,this.head.add(l);const c=new Je(.1,10,8),d=new H(c,t);d.position.set(0,-.18,-.08),d.scale.set(1.2,.6,.7),this.head.add(d);for(const x of[-1,1]){const v=new H(new Je(.04,8,6),t);v.position.set(x*.235,-.02,.02),v.scale.set(.5,.8,.7),this.head.add(v)}const h=new ne({color:16777215,roughness:.1,metalness:0}),u=[3832394,3824267,8018474,2783866,5913210],p=u[this._rngInt(u.length)];for(const x of[-1,1]){const v=new H(new Je(.065,14,12),h);v.position.set(x*.09,.02,-.2),v.scale.set(.85,.9,.4),this.head.add(v);const C=new ne({color:p,roughness:.15}),E=new H(new Je(.042,12,10),C);E.position.set(x*.09,.01,-.225),E.scale.set(.8,.85,.35),this.head.add(E);const T=new ne({color:328976,roughness:.05}),R=new H(new Je(.022,10,8),T);R.position.set(x*.09,.008,-.235),R.scale.set(.7,.8,.3),this.head.add(R),x===-1?this._leftPupil=R:this._rightPupil=R;const S=new on({color:16777215}),b=new H(new Je(.01,6,5),S);b.position.set(x*.075,.035,-.238),this.head.add(b);const P=new H(new Je(.006,5,4),S);P.position.set(x*.1,.005,-.238),this.head.add(P);const O=new ne({color:new Q(this._skinTone).clone().multiplyScalar(.88),roughness:.5}),U=new H(new Te(.075,.012,.025),O);U.position.set(x*.09,.065,-.215),this.head.add(U)}const m=new ne({color:this._hairColor,roughness:.7});for(const x of[-1,1]){const v=new Te(.07,.02,.025,1,1,1);this._roundifyGeometry(v,.005);const C=new H(v,m);C.position.set(x*.09,.09,-.2),C.rotation.z=x*.12,this.head.add(C)}const _=new H(new Je(.025,8,6),t);_.position.set(0,-.04,-.23),_.scale.set(.8,.65,.6),this.head.add(_);const g=new ne({color:new Q(this._skinTone).clone().multiplyScalar(.5),roughness:.5}),f=new H(new Te(.06,.008,.01),g);f.position.set(0,-.1,-.22),this.head.add(f);for(const x of[-1,1]){const v=new H(new Je(.005,4,3),g);v.position.set(x*.032,-.096,-.22),this.head.add(v)}if(this._buildHairStyled(),this._hasGlasses){const x=new ne({color:2236979,roughness:.2,metalness:.6}),v=new ne({color:11193582,roughness:.05,metalness:.2,transparent:!0,opacity:.25});for(const E of[-1,1]){const T=new H(new Oi(.05,.006,6,16),x);T.position.set(E*.085,.01,-.24),this.head.add(T);const R=new H(new Ts(.044,12),v);R.position.set(E*.085,.01,-.242),this.head.add(R)}const C=new H(new Te(.05,.006,.006),x);C.position.set(0,.015,-.24),this.head.add(C);for(const E of[-1,1]){const T=new H(new Te(.005,.006,.12),x);T.position.set(E*.13,.015,-.18),this.head.add(T)}}if(this._hasHeadphones){const x=new ne({color:2763317,roughness:.25,metalness:.6}),v=new H(new Oi(.26,.016,8,16,Math.PI),x);v.position.set(0,.2,0),v.rotation.z=Math.PI,this.head.add(v);for(const C of[-1,1]){const E=new H(new ht(.065,.065,.04,10),x);E.position.set(C*.26,-.01,0),E.rotation.z=Math.PI/2,this.head.add(E);const T=new ne({color:1710626,roughness:.9}),R=new H(new ht(.055,.055,.015,10),T);R.position.set(C*.24,-.01,0),R.rotation.z=Math.PI/2,this.head.add(R)}}if(this._hasBeard){const x=new ne({color:new Q(this._hairColor).clone().multiplyScalar(.85),roughness:.8}),v=new Te(.2,.1,.15,2,2,2);this._roundifyGeometry(v,.03);const C=new H(v,x);C.position.set(0,-.14,-.1),this.head.add(C);const E=new H(new Te(.08,.015,.015),x);E.position.set(0,-.085,-.22),this.head.add(E)}for(const x of[-1,1]){const v=new Te(.1,.42,.1),C=new H(v,t);v.translate(0,-.21,0),C.position.set(x*.26,1.2,-.02),C.rotation.x=.85,C.rotation.z=x*-.1,C.castShadow=!0,this.characterGroup.add(C),x===-1?this.leftArm=C:this.rightArm=C}this.leftUpperArm=null,this.rightUpperArm=null,this._leftHand=null,this._rightHand=null;const y=new Te(.1,.35,.1,1,1,1);this._roundifyGeometry(y,.02);for(const x of[-1,1]){const v=new H(y,i);v.position.set(x*.1,.55,-.02),v.rotation.x=Math.PI/2.1,this.characterGroup.add(v);const C=new H(y,i);C.position.set(x*.1,.37,-.33),C.rotation.x=.08,this.characterGroup.add(C);const E=new ne({color:16777215,roughness:.5,metalness:.05}),T=new H(new Te(.11,.06,.17),E);T.position.set(x*.1,.2,-.36),this.characterGroup.add(T);const R=new ne({color:this.accent,roughness:.7}),S=new H(new Te(.12,.025,.18),R);S.position.set(x*.1,.185,-.36),this.characterGroup.add(S)}this.group.add(this.characterGroup)}_roundifyGeometry(e,t){const n=e.attributes.position,i=new L;for(let s=0;s<n.count;s++){i.fromBufferAttribute(n,s);const o=i.length();o>0&&(i.normalize().multiplyScalar(o+t),n.setXYZ(s,i.x,i.y,i.z))}n.needsUpdate=!0,e.computeVertexNormals()}_buildHairStyled(){const e=new ne({color:this._hairColor,roughness:.65});switch(this._hairStyle){case"short":{const t=new Je(.25,14,12,0,Math.PI*2,0,Math.PI*.52),n=new H(t,e);n.position.y=1.6,n.scale.set(1,.92,.98),this.characterGroup.add(n);break}case"medium":{const t=new Je(.265,14,12,0,Math.PI*2,0,Math.PI*.58),n=new H(t,e);n.position.y=1.59,n.scale.set(1.04,.98,1.08),this.characterGroup.add(n);for(const i of[-1,1]){const s=new H(new Je(.09,8,6),e);s.position.set(i*.2,1.53,.02),s.scale.set(.6,1.1,.9),this.characterGroup.add(s)}break}case"buzz":{const t=new Je(.248,12,10,0,Math.PI*2,0,Math.PI*.48),n=new H(t,new ne({color:this._hairColor,roughness:.9}));n.position.y=1.6,this.characterGroup.add(n);break}case"pompadour":{const t=new H(new Je(.255,14,12,0,Math.PI*2,0,Math.PI*.52),e);t.position.y=1.6,this.characterGroup.add(t);const n=new H(new Je(.12,10,8),e);n.position.set(0,1.73,-.12),n.scale.set(1.3,.7,.9),this.characterGroup.add(n);break}case"bun":{const t=new H(new Je(.25,12,10,0,Math.PI*2,0,Math.PI*.48),e);t.position.y=1.6,this.characterGroup.add(t);const n=new H(new Je(.09,10,8),e);n.position.set(0,1.77,.06),this.characterGroup.add(n);break}case"sidePart":{const t=new Je(.26,14,12,0,Math.PI*2,0,Math.PI*.55),n=new H(t,e);n.position.y=1.59,n.scale.set(1.02,.94,1.03),this.characterGroup.add(n);const i=new H(new Je(.08,8,6),e);i.position.set(-.15,1.63,-.14),i.scale.set(1.1,.5,.7),this.characterGroup.add(i);break}}}_hashCode(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}_makeRng(e){let t=e;return()=>(t=t*1664525+1013904223&4294967295,(t>>>0)/4294967295)}_rngInt(e){return Math.floor(this._rng()*e)}_buildLaptop(){const e=new Lt;e.position.set(0,.8,-.1);const t=new ne({color:8947858,roughness:.15,metalness:.7}),n=new Te(.5,.015,.35),i=new H(n,t);i.castShadow=!0,e.add(i);const s=new Lt;s.position.set(0,.008,-.17),s.rotation.x=-.25;const o=new Te(.5,.35,.008),a=new H(o,t);a.position.y=.175,s.add(a);const l=new ne({color:1118485,roughness:.3,metalness:.2}),c=new H(new Te(.48,.33,.003),l);c.position.set(0,.175,.006),s.add(c),this.screenFace=new H(new Mt(.44,.29),new ne({color:I_,emissive:new Q(1717094),emissiveIntensity:1.2,roughness:.05})),this.screenFace.position.set(0,.175,.0085),s.add(this.screenFace);const d=new bt(3359880,.3,2);d.position.set(0,.1,-.1),s.add(d),e.add(s);const h=new H(new Mt(.4,.25),new ne({color:657938,emissive:new Q(1118498),emissiveIntensity:.5,roughness:.15}));h.rotation.x=-Math.PI/2,h.position.set(0,.009,.02),e.add(h);const u=new H(new Mt(.14,.1),new ne({color:7829376,roughness:.1,metalness:.6}));u.rotation.x=-Math.PI/2,u.position.set(0,.009,.12),e.add(u),this.group.add(e)}_buildDeskProps(){const e=new ne({color:2236976,roughness:.25,metalness:.5}),t=new H(new Te(.9,.55,.025),e);t.position.set(0,1.2,-.55),t.castShadow=!0,this.group.add(t);const n=new H(new Mt(.82,.47),new ne({color:396824,emissive:new Q(926276),emissiveIntensity:.9,roughness:.05}));n.position.set(0,1.2,-.536),this.group.add(n);const i=new H(new ht(.02,.025,.35,8),e);i.position.set(0,.95,-.55),this.group.add(i);const s=new H(new ht(.12,.12,.015,10),new ne({color:3355456,metalness:.7,roughness:.2}));s.position.set(0,.79,-.55),this.group.add(s);const o=new Q(this.accent).clone().lerp(new Q(16777215),.6),a=new ne({color:o,roughness:.45,metalness:.05}),l=new H(new ht(.045,.04,.09,10),a);l.position.set(.9,.85,.2),l.castShadow=!0,this.group.add(l);const c=new H(new Oi(.025,.006,6,10,Math.PI),a);c.position.set(.945,.85,.2),c.rotation.y=Math.PI/2,this.group.add(c);const d=new H(new Ts(.038,10),new ne({color:3809296,roughness:.9}));d.position.set(.9,.9,.2),d.rotation.x=-Math.PI/2,this.group.add(d);const h=new ne({color:1118488,roughness:.15,metalness:.4}),u=new H(new Te(.08,.008,.16),h);u.position.set(-.85,.81,.15),u.rotation.y=.2,u.castShadow=!0,this.group.add(u);const p=new H(new Mt(.065,.13),new ne({color:657941,emissive:new Q(1118501),emissiveIntensity:.4,roughness:.1}));p.position.set(-.85,.815,.15),p.rotation.x=-Math.PI/2,p.rotation.z=.2,this.group.add(p);const m=new ne({color:13404228,roughness:.7}),_=new H(new ht(.04,.035,.05,6),m);_.position.set(1.05,.83,-.3),this.group.add(_);const g=new ne({color:4500053,roughness:.7});for(let R=0;R<4;R++){const S=new H(new Je(.025,6,5),g);S.position.set(1.05+(Math.random()-.5)*.03,.87+Math.random()*.02,-.3+(Math.random()-.5)*.03),S.scale.set(1,.6,1),this.group.add(S)}const f=new ne({color:this.accent,roughness:.3,metalness:.6}),y=new H(new ht(.025,.025,.1,8),f);y.position.set(-.7,.85,-.35),y.castShadow=!0,this.group.add(y);const x=new H(new ht(.025,.025,.003,8),new ne({color:11184810,metalness:.8,roughness:.2}));x.position.set(-.7,.9,-.35),this.group.add(x);const v=new ne({color:2763314,roughness:.35,metalness:.3}),C=new H(new Te(.5,.018,.18),v);C.position.set(0,.815,.45),C.castShadow=!0,this.group.add(C);const E=new ne({color:3816004,roughness:.5,metalness:.2});for(let R=0;R<3;R++){const S=new H(new Te(.44,.006,.04),E);S.position.set(0,.827,.38+R*.055),this.group.add(S)}const T=new H(new Te(.2,.006,.03),E);T.position.set(0,.827,.55),this.group.add(T)}_buildAccentLight(){this.accentLight=new bt(this.accent,.8,6),this.accentLight.position.set(0,2.2,.5),this.group.add(this.accentLight);const e=new bt(this.accent,.15,3);e.position.set(0,.1,.5),this.group.add(e)}_buildFloorMat(){const e=new Mt(3.2,2.8),t=new ne({color:new Q(this.accent).multiplyScalar(.1),roughness:.95,metalness:0,transparent:!0,opacity:.3}),n=new H(e,t);n.rotation.x=-Math.PI/2,n.position.set(0,.006,.5),n.receiveShadow=!0,this.group.add(n)}_buildLabel(){const e=document.createElement("div");e.style.cssText=`
      background: rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.1);
      font-family: 'Inter', sans-serif;
      text-align: center;
      pointer-events: none;
      min-width: 110px;
    `,this._labelName=document.createElement("div"),this._labelName.style.cssText="font-size:10px;font-weight:700;color:#eee;letter-spacing:0.5px;",e.appendChild(this._labelName),this._labelMeta=document.createElement("div"),this._labelMeta.style.cssText="font-size:9px;color:#888;margin-top:2px;",e.appendChild(this._labelMeta),this._labelVal=document.createElement("div"),this._labelVal.style.cssText="font-size:12px;font-weight:800;color:#F0B429;margin-top:4px;",e.appendChild(this._labelVal),this.label=new Md(e),this.label.position.set(0,2.8,.5),this.group.add(this.label)}_buildMetricBars(){const e=document.createElement("div");e.style.cssText=`
      display: flex; gap: 3px; width: 90px; margin-top: 5px;
    `,this._bars={};const t=[{key:"product_quality",color:"#3B82F6",label:"P"},{key:"morale",color:"#22C55E",label:"M"},{key:"brand",color:"#F0B429",label:"B"}];for(const n of t){const i=document.createElement("div");i.style.cssText=`
        flex: 1; height: 4px; background: rgba(255,255,255,0.1);
        border-radius: 2px; overflow: hidden;
      `;const s=document.createElement("div");s.style.cssText=`
        height: 100%; border-radius: 2px;
        background: ${n.color}; width: 0%;
        transition: width 0.5s ease;
      `,i.appendChild(s),e.appendChild(i),this._bars[n.key]=s}this.label.element.appendChild(e)}update(e,t){if(e){if(this._alive=e.alive!==!1,this._labelName.textContent=e.startup_name||"Unknown",this._labelMeta.textContent=`${e.agent_name||""} | ${e.sector||""}`,this._labelVal.textContent=hn(e.valuation),this._bars.product_quality&&(this._bars.product_quality.style.width=`${e.product_quality||0}%`),this._bars.morale&&(this._bars.morale.style.width=`${e.morale||0}%`),this._bars.brand&&(this._bars.brand.style.width=`${e.brand||0}%`),this._alive?(this.body.material.color.copy(this.accent),this.accentLight.intensity=t?1.4:.8,this.screenFace.material.emissive.setHex(1122884),this.screenFace.material.emissiveIntensity=.8):(this.body.material.color.setHex(4473924),this.body.material.emissive=new Q(0),this.accentLight.intensity=.1,this.screenFace.material.emissive.setHex(1114112),this.screenFace.material.emissiveIntensity=.2),this._alive){const n=e.runway||0;n<3?this.screenFace.material.emissive.setHex(4460817):n<6?this.screenFace.material.emissive.setHex(4469521):this.screenFace.material.emissive.setHex(1122884)}this.setHighlight(t)}}setHighlight(e){this._highlighted=e,e?(this.deskTop.material.emissive=this.accent.clone().multiplyScalar(.2),this.accentLight.intensity=1.4):(this.deskTop.material.emissive=new Q(0),this._alive&&(this.accentLight.intensity=.8))}animate(e,t){if(!this._alive)return;const n=Math.sin(e*1.2+this._bobOffset)*.015;this.characterGroup.position.y=n;const i=Math.sin(e*.3+this._bobOffset)*.1,s=Math.sin(e*.5+this._bobOffset*2)*.03;if(this.head.rotation.y=i,this.head.rotation.x=s,this._leftPupil&&this._rightPupil){const l=Math.sin(e*.3+this._bobOffset)*.005;this._leftPupil.position.x=-.09+l,this._rightPupil.position.x=.09+l}const o=Math.sin(e*6+this._bobOffset),a=Math.sin(e*6+this._bobOffset+Math.PI*.7);if(this.leftArm&&(this.leftArm.rotation.x=.85+o*.04),this.rightArm&&(this.rightArm.rotation.x=.85+a*.04),this._highlighted){const l=.9+Math.sin(e*3)*.5;this.accentLight.intensity=l}}dispose(){this.label&&this.label.element&&this.label.element.parentNode&&this.label.element.parentNode.removeChild(this.label.element)}}class N_{constructor(){this.group=new Lt,this.group.position.set(0,0,-8),this._build()}_build(){const e=new Te(5.2,3.2,.1),t=new ne({color:1118496,roughness:.2,metalness:.8}),n=new H(e,t);n.position.y=2.5,n.castShadow=!0,this.group.add(n);const i=new Mt(4.8,2.8),s=new ne({color:395800,emissive:new Q(792627),emissiveIntensity:1.2,roughness:.05,metalness:.1}),o=new H(i,s);o.position.set(0,2.5,.052),this.group.add(o);const a=new ne({color:3368703,emissive:new Q(2250239),emissiveIntensity:1}),l=new H(new Te(5,.03,.02),a);l.position.set(0,.92,.06),this.group.add(l);const c=new H(new Te(5,.03,.02),a);c.position.set(0,4.08,.06),this.group.add(c);const d=new ne({color:3355461,metalness:.8,roughness:.2});for(const g of[-1.2,1.2]){const f=new H(new ht(.04,.05,1,8),d);f.position.set(g,.5,0),this.group.add(f)}const h=new H(new Te(3,.04,.6),d);h.position.y=.02,this.group.add(h);const u=new bt(4482815,.6,10);u.position.set(0,4.5,1.5),this.group.add(u);const p=new bt(2241416,.3,6);p.position.set(0,.5,-.5),this.group.add(p);const m=document.createElement("div");m.style.cssText=`
      text-align: center;
      pointer-events: none;
      width: 200px;
    `,this._titleEl=document.createElement("div"),this._titleEl.style.cssText="font-size:12px;font-weight:800;color:#4488ff;letter-spacing:3px;",this._titleEl.textContent="FOUNDER ARENA",m.appendChild(this._titleEl),this._turnEl=document.createElement("div"),this._turnEl.style.cssText="font-size:18px;font-weight:700;color:#eee;margin-top:4px;",this._turnEl.textContent="WEEK 0",m.appendChild(this._turnEl),this._phaseEl=document.createElement("div"),this._phaseEl.style.cssText="font-size:9px;color:#666;letter-spacing:1.5px;margin-top:3px;text-transform:uppercase;",this._phaseEl.textContent="WAITING",m.appendChild(this._phaseEl),this._eventEl=document.createElement("div"),this._eventEl.style.cssText="font-size:9px;color:#888;margin-top:6px;max-width:180px;",m.appendChild(this._eventEl);const _=new Md(m);_.position.set(0,2.5,.2),this.group.add(_)}update(e){if(!e)return;const t=e.turn||0,n=e.max_turns||32,i=e.phase||"unknown";if(this._turnEl.textContent=`WEEK ${t}`,i==="lobby")this._phaseEl.textContent="LOBBY - WAITING FOR PLAYERS",this._phaseEl.style.color="#F0B429";else if(i==="playing"){const o=t<=10?"EARLY STAGE":t<=25?"GROWTH":t<=40?"SCALE":"ENDGAME";this._phaseEl.textContent=`${o} (${t}/${n})`,this._phaseEl.style.color="#22C55E"}else i==="finished"&&(this._phaseEl.textContent="GAME OVER",this._phaseEl.style.color="#EF4444");const s=e.event_log||[];if(s.length>0){const o=s[s.length-1],a=typeof o=="string"?o:o.text||o.headline||"";this._eventEl.textContent=a.slice(0,60)}}}class F_{constructor(){this.group=new Lt,this._buildSkyDome(),this._buildSkyline(),this._buildStars(),this._buildGroundFog(),this._buildStreetLights()}_buildSkyDome(){const e=new Je(90,32,16),t=new Dt({side:kt,uniforms:{topColor:{value:new Q(328976)},bottomColor:{value:new Q(1708085)},offset:{value:10},exponent:{value:.5}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `}),n=new H(e,t);this.group.add(n)}_buildSkyline(){this._buildBuildingRing(32,30,.75),this._buildBuildingRing(44,22,.35)}_buildBuildingRing(e,t,n){const i=(s,o)=>s+Math.random()*(o-s);for(let s=0;s<t;s++){const o=s/t*Math.PI*2+i(-.1,.1),a=e+i(-4,4),l=Math.cos(o)*a,c=Math.sin(o)*a,d=i(2.5,6.5),h=i(2,5),u=i(6,28),p=i(.58,.68),m=new ne({color:new Q().setHSL(p,.1,i(.03,.07)),roughness:.7,metalness:.4,transparent:!0,opacity:n}),_=new Te(d,u,h),g=new H(_,m);if(g.position.set(l,u/2,c),g.rotation.y=o+i(-.3,.3),this.group.add(g),Math.random()>.35){const x=new Te(d*.35,i(.5,2.5),h*.35),v=new ne({color:526354,roughness:.5,metalness:.5,transparent:!0,opacity:n}),C=new H(x,v);C.position.set(l,u+i(.3,1.2),c),this.group.add(C)}if(u>20&&Math.random()>.4){const x=new ht(.025,.025,i(2.5,5),4),v=new ne({color:5592422,metalness:.8}),C=new H(x,v);C.position.set(l,u+i(1.2,2.5),c),this.group.add(C);const E=new bt(16720418,.4,10);E.position.set(l,u+i(2.5,5),c),this.group.add(E)}const f=[1122884,1716309,1583176,2241365,2759216,1714240],y=Math.floor(u/1.8);for(let x=0;x<y;x++){if(Math.random()>.6)continue;const v=f[Math.floor(Math.random()*f.length)],C=Math.random()>.25,E=new ne({color:v,emissive:new Q(C?v:263176),emissiveIntensity:C?i(.3,.8):.02,roughness:.1,transparent:!0,opacity:n+.15}),T=Math.floor(d/1.1);for(let R=0;R<T;R++){if(Math.random()>.65)continue;const S=new Mt(.45,.55),b=new H(S,E),P=(x+.5)*1.8,O=(R-(T-1)/2)*1.05;b.position.set(l+Math.cos(o)*(h/2+.02)+Math.sin(o)*O*.3,P,c+Math.sin(o)*(h/2+.02)-Math.cos(o)*O*.3),b.lookAt(0,P,0),this.group.add(b)}}if(u>16&&Math.random()>.6){const x=[3368703,16724838,3407786,16746547][Math.floor(Math.random()*4)],v=new ne({color:x,emissive:new Q(x),emissiveIntensity:.5,transparent:!0,opacity:n*.7}),C=new Te(d+.05,.06,.06),E=new H(C,v);E.position.set(l,u,c-h/2),E.rotation.y=o,this.group.add(E)}}}_buildStars(){const t=new Float32Array(1500),n=new Float32Array(500*3);for(let a=0;a<500;a++){const l=Math.random()*Math.PI*2,c=Math.random()*Math.PI*.4,d=80+Math.random()*15;t[a*3]=d*Math.sin(c)*Math.cos(l),t[a*3+1]=d*Math.cos(c)+12,t[a*3+2]=d*Math.sin(c)*Math.sin(l);const h=Math.random();h>.8?(n[a*3]=.7,n[a*3+1]=.8,n[a*3+2]=1):h>.6?(n[a*3]=1,n[a*3+1]=.95,n[a*3+2]=.8):(n[a*3]=.9,n[a*3+1]=.9,n[a*3+2]=.95)}const i=new _t;i.setAttribute("position",new pt(t,3)),i.setAttribute("color",new pt(n,3));const s=new Es({size:.18,transparent:!0,opacity:.7,sizeAttenuation:!0,vertexColors:!0}),o=new vr(i,s);this.group.add(o)}_buildGroundFog(){const e=new qi(18,55,64,1),t=new on({color:855322,transparent:!0,opacity:.4,side:It}),n=new H(e,t);n.rotation.x=-Math.PI/2,n.position.y=.03,this.group.add(n);const i=new qi(15,24,48,1),s=new on({color:1381672,transparent:!0,opacity:.2,side:It}),o=new H(i,s);o.rotation.x=-Math.PI/2,o.position.y=.5,this.group.add(o)}_buildStreetLights(){const e=new ne({color:4473941,metalness:.7,roughness:.25}),t=14,n=22;for(let i=0;i<t;i++){const s=i/t*Math.PI*2,o=Math.cos(s)*n,a=Math.sin(s)*n,l=new H(new ht(.035,.045,3.5,6),e);l.position.set(o,1.75,a),this.group.add(l);const c=new H(new Te(.7,.025,.025),e);c.position.set(o-Math.cos(s)*.35,3.5,a-Math.sin(s)*.35),this.group.add(c);const d=new ne({color:16772812,emissive:new Q(16768426),emissiveIntensity:.9}),h=new H(new ht(.07,.11,.05,8),d);h.position.set(o-Math.cos(s)*.65,3.48,a-Math.sin(s)*.65),this.group.add(h);const u=new bt(16768426,.35,10);u.position.set(o-Math.cos(s)*.65,3.4,a-Math.sin(s)*.65),this.group.add(u)}}}class U_{constructor(e){this.scene=e,this._systems=[]}spawnFundraiseEffect(e){const n=new _t,i=new Float32Array(120),s=new Float32Array(120),o=[],a=[new Q(15774761),new Q(16766720),new Q(16753920),new Q(16769126)];for(let d=0;d<40;d++){i[d*3]=e.x+(Math.random()-.5)*2,i[d*3+1]=e.y+3+Math.random()*2.5,i[d*3+2]=e.z+(Math.random()-.5)*2;const h=a[Math.floor(Math.random()*a.length)];s[d*3]=h.r,s[d*3+1]=h.g,s[d*3+2]=h.b,o.push({x:(Math.random()-.5)*.03,y:-.015-Math.random()*.025,z:(Math.random()-.5)*.03})}n.setAttribute("position",new pt(i,3)),n.setAttribute("color",new pt(s,3));const l=new Es({size:.18,transparent:!0,opacity:1,vertexColors:!0,sizeAttenuation:!0}),c=new vr(n,l);this.scene.add(c),this._systems.push({points:c,velocities:o,life:2.5,maxLife:2.5})}spawnGrowthEffect(e){const n=new _t,i=new Float32Array(75),s=new Float32Array(75),o=[],a=[new Q(2278750),new Q(4906624),new Q(1096065),new Q(8843180)];for(let d=0;d<25;d++){i[d*3]=e.x+(Math.random()-.5)*.5,i[d*3+1]=e.y+1,i[d*3+2]=e.z+(Math.random()-.5)*.5;const h=a[Math.floor(Math.random()*a.length)];s[d*3]=h.r,s[d*3+1]=h.g,s[d*3+2]=h.b,o.push({x:(Math.random()-.5)*.05,y:.04+Math.random()*.04,z:(Math.random()-.5)*.05})}n.setAttribute("position",new pt(i,3)),n.setAttribute("color",new pt(s,3));const l=new Es({color:2278750,size:.12,transparent:!0,opacity:1,vertexColors:!0,sizeAttenuation:!0}),c=new vr(n,l);this.scene.add(c),this._systems.push({points:c,velocities:o,life:2,maxLife:2})}update(e){for(let t=this._systems.length-1;t>=0;t--){const n=this._systems[t];if(n.life-=e,n.life<=0){this.scene.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this._systems.splice(t,1);continue}const i=n.points.geometry.getAttribute("position");for(let o=0;o<n.velocities.length;o++)i.array[o*3]+=n.velocities[o].x,i.array[o*3+1]+=n.velocities[o].y,i.array[o*3+2]+=n.velocities[o].z,n.velocities[o].y*=.995;i.needsUpdate=!0;const s=n.life/n.maxLife;n.points.material.opacity=s*s,n.points.material.size=.1+s*.1}}}const Ed={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ns{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const O_=new Mr(-1,1,1,-1,0,1);class k_ extends _t{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const B_=new k_;class Pa{constructor(e){this._mesh=new H(B_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,O_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Td extends ns{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ws.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wc extends ns{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class z_ extends ns{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class H_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Td(Ed),this.copyPass.material.blending=Pn,this.clock=new yd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wc!==void 0&&(o instanceof wc?n=!0:o instanceof z_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class G_ extends ns{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Q}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const V_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zi extends ns{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(s,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new ln(s,o,{type:Ln});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new ln(s,o,{type:Ln});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=V_;this.highPassUniforms=ws.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Ed;this.copyUniforms=ws.clone(d.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:fo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Q,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new Pa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zi.BlurDirectionX=new ve(1,0);Zi.BlurDirectionY=new ve(0,1);const $_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class W_ extends ns{constructor(){super();const e=$_;this.uniforms=ws.clone(e.uniforms),this.material=new Yg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class X_{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n;const i=new ve;e.getSize(i),this.composer=new H_(e);const s=new G_(t,n);this.composer.addPass(s),this.bloomPass=new Zi(new ve(i.x,i.y),.4,.6,.85),this.composer.addPass(this.bloomPass);const o={uniforms:{tDiffuse:{value:null},darkness:{value:.3},offset:{value:1.4},tintColor:{value:new L(1.01,.99,.97)},contrast:{value:1.05},brightness:{value:.02}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float darkness;
        uniform float offset;
        uniform vec3 tintColor;
        uniform float contrast;
        uniform float brightness;
        varying vec2 vUv;

        void main() {
          vec4 texel = texture2D(tDiffuse, vUv);

          // Vignette
          vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
          float vig = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
          texel.rgb *= mix(1.0 - darkness, 1.0, vig);

          // Color grading
          texel.rgb = (texel.rgb - 0.5) * contrast + 0.5 + brightness;
          texel.rgb *= tintColor;

          gl_FragColor = texel;
        }
      `};this.vignettePass=new Td(o),this.composer.addPass(this.vignettePass);const a=new W_;this.composer.addPass(a)}render(){this.composer.render()}setSize(e,t){this.composer.setSize(e,t)}dispose(){this.composer.dispose()}}const Ec=["#3B82F6","#22C55E","#F0B429","#EF4444","#A78BFA","#22D3EE","#FB923C","#F472B6"],q_={ai:"#3B82F6",fintech:"#22C55E",healthtech:"#EF4444",edtech:"#FB923C",saas:"#A78BFA",crypto:"#F0B429",gaming:"#22D3EE",greentech:"#4ADE80"};function La(r){return Ec[r%Ec.length]}class j_{constructor(e){this.canvas=e,this.pods=new Map,this.clock=new yd,this._startupOrder=[],this.renderer=new Hg({canvas:e,antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=ca,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rc,this.labelRenderer=new H0,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="fixed",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.left="0",this.labelRenderer.domElement.style.pointerEvents="none",this.labelRenderer.domElement.style.zIndex="5",document.body.appendChild(this.labelRenderer.domElement),this.scene=new zl,this.scene.background=new Q(1052704),this.scene.fog=new ba(1052704,.006),this.camera=new Ot(45,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(20,18,20),this.camera.lookAt(0,0,0),this.controls=new C0(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2.3,this.controls.minPolarAngle=Math.PI/8,this.controls.minDistance=8,this.controls.maxDistance=50,this.controls.target.set(0,0,0),this._setupLights(),this.floor=new A_,this.scene.add(this.floor.group),this.marketBoard=new N_,this.scene.add(this.marketBoard.group),this.skyline=new F_,this.scene.add(this.skyline.group),this.particles=new U_(this.scene),this._lastTurn=0,this.postProcessing=new X_(this.renderer,this.scene,this.camera),this._buildEnvMap(),this.raycaster=new w0,this._mouse=new ve,this._onClickCallback=null,e.addEventListener("click",t=>this._handleClick(t)),window.addEventListener("resize",()=>this._onResize())}_setupLights(){const e=new p0(6715272,.8);this.scene.add(e);const t=new l0(10070715,5588019,.6);this.scene.add(t);const n=new sa(16774630,2);n.position.set(15,20,10),n.castShadow=!0,n.shadow.mapSize.width=4096,n.shadow.mapSize.height=4096,n.shadow.camera.near=.5,n.shadow.camera.far=60,n.shadow.camera.left=-25,n.shadow.camera.right=25,n.shadow.camera.top=25,n.shadow.camera.bottom=-25,n.shadow.bias=-5e-4,n.shadow.normalBias=.02,this.scene.add(n);const i=new sa(16764040,.6);i.position.set(-12,8,-8),this.scene.add(i);const s=new bt(6719692,.5,50);s.position.set(-10,14,10),this.scene.add(s);const o=new bt(16772829,.6,35);o.position.set(8,6,15),this.scene.add(o);const a=new bt(16774638,1.2,30);a.position.set(0,10,0),this.scene.add(a);const l=new bt(3364351,.15,18);l.position.set(-8,.3,-8),this.scene.add(l);const c=new bt(7812078,.12,18);c.position.set(8,.3,8),this.scene.add(c);const d=new bt(14540272,.35,45);d.position.set(18,10,18),this.scene.add(d)}onPodClick(e){this._onClickCallback=e}_handleClick(e){const t=this.canvas.getBoundingClientRect();this._mouse.x=(e.clientX-t.left)/t.width*2-1,this._mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this._mouse,this.camera);const n=[];for(const s of this.pods.values())n.push(...s.clickTargets);const i=this.raycaster.intersectObjects(n,!1);if(i.length>0){const o=i[0].object.userData.startupId;o&&this._onClickCallback&&this._onClickCallback(o)}}focusOnPod(e){const t=this.pods.get(e);if(!t)return;const n=t.group.position,i=new L(n.x,0,n.z),s=this.controls.target.clone(),o=600,a=performance.now(),l=()=>{const c=performance.now()-a,d=Math.min(c/o,1),h=1-Math.pow(1-d,3);this.controls.target.lerpVectors(s,i,h),d<1&&requestAnimationFrame(l)};l()}updatePods(e,t){const n=Object.keys(e);for(const o of n)this._startupOrder.includes(o)||this._startupOrder.push(o);const i=Math.max(2,Math.ceil(Math.sqrt(n.length))),s=7;for(const o of n){const a=this._startupOrder.indexOf(o),l=Math.floor(a/i),d=(a%i-(i-1)/2)*s,h=(l-(Math.ceil(n.length/i)-1)/2)*s;let u=this.pods.get(o);if(!u){const p=this._startupOrder.indexOf(o);u=new D_(o,La(p)),u.group.position.set(d,0,h),this.scene.add(u.group),this.pods.set(o,u)}u.update(e[o],o===t)}for(const[o,a]of this.pods)n.includes(o)||(this.scene.remove(a.group),a.dispose(),this.pods.delete(o))}updateMarketBoard(e){e&&this.marketBoard.update(e)}highlightPod(e){for(const[t,n]of this.pods)n.setHighlight(t===e)}render(){const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.controls.update();for(const n of this.pods.values())n.animate(t,e);this.particles.update(e),this.postProcessing.render(),this.labelRenderer.render(this.scene,this.camera)}spawnEffectAtPod(e,t){const n=this.pods.get(e);if(!n)return;const i=n.group.position;t==="fundraise"?this.particles.spawnFundraiseEffect(i):t==="growth"&&this.particles.spawnGrowthEffect(i)}checkTurnEvents(e){if(!e||!e.turn)return;const t=e.turn;if(t<=this._lastTurn)return;this._lastTurn=t;const n=e.action_log||e.event_log||[];for(const i of n){const s=typeof i=="string"?i:i.text||i.action||"",o=typeof i=="object"?i.startup_id:null;o&&(/fundraise|raised|funding/i.test(s)?this.spawnEffectAtPod(o,"fundraise"):/users|growth|viral|acquire/i.test(s)&&this.spawnEffectAtPod(o,"growth"))}}_onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.labelRenderer.setSize(e,t),this.postProcessing.setSize(e,t)}_buildEnvMap(){const e=new ea(this.renderer);e.compileEquirectangularShader();const t=new zl;t.background=new Q(1052709);const n=new bt(16755302,2,100);n.position.set(10,10,10),t.add(n);const i=new bt(4482815,2,100);i.position.set(-10,8,-10),t.add(i);const s=new bt(16777215,1,100);s.position.set(0,15,0),t.add(s);const o=e.fromScene(t,.04).texture;this.scene.environment=o,e.dispose(),t.clear()}}const Y_="";async function Zn(r,e={}){const{headers:t,...n}=e,i=await fetch(Y_+r,{...n,headers:{"Content-Type":"application/json",...t}});if(!i.ok){const s=await i.text().catch(()=>"");throw console.error(`[API] ${n.method||"GET"} ${r} -> ${i.status}: ${s}`),new Error(`API ${i.status}: ${s}`)}return i.json()}async function K_(){return Zn("/api/games")}async function Z_(r){return Zn(`/api/games/${r}`)}async function J_(r,e){return Zn(`/api/games/${r}/spectate`,{headers:{"X-Spectator-Token":e}})}async function Q_(r={}){return Zn("/api/games",{method:"POST",body:JSON.stringify({name:r.name||"Founder Arena",max_players:r.maxPlayers||8,min_players:r.minPlayers||2,turn_timeout:r.turnTimeout||5,max_turns:r.maxTurns||32,game_mode:r.gameMode||"competitive_mode",queue:r.queue||"showmatch",benchmark_tier:r.benchmarkTier||"baseline"})})}async function ev(r,e){return Zn(`/api/games/${r}/join`,{method:"POST",body:JSON.stringify(e)})}async function tv(r,e,t="baseline"){return Zn(`/api/games/${r}/fill-bots`,{method:"POST",headers:{"X-Admin-Token":e},body:JSON.stringify({benchmark_tier:t})})}async function nv(){return Zn("/api/leaderboard")}async function iv(){return Zn("/api/featured")}function wr(r){return(r==null?void 0:r.game_mode)==="competitive_mode"}function Dn(r){var e;return r?r.score!=null?Number(r.score)||0:Number((e=r.seven_dimension_scores)==null?void 0:e.total_score)||0:0}function Rs(r){const e=(r==null?void 0:r.startups)||{},t=Object.entries(e).map(([s,o])=>({id:s,...o})),n=(r==null?void 0:r.rankings)||[],i=new Map(n.map(s=>[s.startup_id,s.rank]));return i.size>0?t.sort((s,o)=>{const a=i.get(s.id)??Number.MAX_SAFE_INTEGER,l=i.get(o.id)??Number.MAX_SAFE_INTEGER;return a-l}):wr(r)?t.sort((s,o)=>{const a=Dn(o)-Dn(s);return a!==0?a:(o.valuation||0)-(s.valuation||0)}):t.sort((s,o)=>(o.valuation||0)-(s.valuation||0))}class sv{constructor(){this.state={view:"landing",games:[],leaderboardData:{leaderboard:[],agent_rankings:[]},featuredFeed:{daily_featured_duel:null,weekly_upset_recap:null,benchmark_challenge:null,featured_replays:[],live_now:[]},gameId:null,adminToken:null,spectatorToken:null,joinCode:null,agentToken:null,myStartupId:null,gameData:null,selectedStartupId:null,entryContext:{viaSharedLink:!1,requestedPhase:null,layout:null,slot:null},error:null},this._listeners=new Set,this._pollTimer=null,this._pollInterval=2e3}_syncUrl(){var t,n,i;if(typeof window>"u"||!((t=window.history)!=null&&t.replaceState))return;const e=new URL(window.location.href);this.state.gameId?e.searchParams.set("game",this.state.gameId):e.searchParams.delete("game"),this.state.spectatorToken?e.searchParams.set("spectator",this.state.spectatorToken):e.searchParams.delete("spectator"),this.state.view==="finished"?e.searchParams.set("phase","replay"):e.searchParams.delete("phase"),(n=this.state.entryContext)!=null&&n.layout?e.searchParams.set("layout",this.state.entryContext.layout):e.searchParams.delete("layout"),(i=this.state.entryContext)!=null&&i.slot?e.searchParams.set("slot",this.state.entryContext.slot):e.searchParams.delete("slot"),window.history.replaceState({},"",`${e.pathname}${e.search}`)}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_notify(){for(const e of this._listeners)try{e(this.state)}catch(t){console.error("Store listener error:",t)}}update(e){Object.assign(this.state,e),this._syncUrl(),this._notify()}get startups(){var e;return((e=this.state.gameData)==null?void 0:e.startups)||{}}get startupList(){return Rs(this.state.gameData)}get selectedStartup(){return this.state.selectedStartupId&&this.startups[this.state.selectedStartupId]||null}get turn(){var e;return((e=this.state.gameData)==null?void 0:e.turn)||0}get phase(){var e;return((e=this.state.gameData)==null?void 0:e.phase)||"unknown"}get maxTurns(){var e;return((e=this.state.gameData)==null?void 0:e.max_turns)||32}getShareUrl(e={}){var n,i;if(typeof window>"u")return"";const t=new URL(window.location.href);return this.state.gameId&&t.searchParams.set("game",this.state.gameId),this.state.spectatorToken&&t.searchParams.set("spectator",this.state.spectatorToken),(e.phase||this.phase)==="finished"&&t.searchParams.set("phase","replay"),e.layout?t.searchParams.set("layout",e.layout):e.layout===null?t.searchParams.delete("layout"):(n=this.state.entryContext)!=null&&n.layout&&t.searchParams.set("layout",this.state.entryContext.layout),e.slot?t.searchParams.set("slot",e.slot):e.slot===null?t.searchParams.delete("slot"):(i=this.state.entryContext)!=null&&i.slot&&t.searchParams.set("slot",this.state.entryContext.slot),t.toString()}getFeaturedSlotUrl(e,t={}){if(typeof window>"u")return"";const n=new URL(window.location.href);return n.searchParams.delete("game"),n.searchParams.delete("spectator"),n.searchParams.delete("phase"),n.searchParams.delete("layout"),e?n.searchParams.set("slot",e):n.searchParams.delete("slot"),t.layout&&n.searchParams.set("layout",t.layout),n.toString()}async loadGames(){try{const e=await K_();this.update({games:e.games||[]})}catch(e){console.error("Failed to load games:",e)}}async loadLeaderboard(){try{const e=await nv();this.update({leaderboardData:{leaderboard:e.leaderboard||[],agent_rankings:e.agent_rankings||[]}})}catch(e){console.error("Failed to load leaderboard:",e)}}async loadFeaturedFeed(){try{const e=await iv();this.update({featuredFeed:{daily_featured_duel:e.daily_featured_duel||null,weekly_upset_recap:e.weekly_upset_recap||null,benchmark_challenge:e.benchmark_challenge||null,featured_replays:e.featured_replays||[],live_now:e.live_now||[]}})}catch(e){console.error("Failed to load featured feed:",e)}}async createGame(e={}){try{const t=await Q_(e);return this.update({gameId:t.game_id,adminToken:t.admin_token,spectatorToken:t.spectator_token,joinCode:t.join_code,view:"lobby",error:null}),this.startPolling(),t}catch(t){throw this.update({error:t.message}),t}}async joinAsPlayer(e){try{const t=await ev(this.state.gameId,{agent_name:e.agentName,startup_name:e.startupName,sector:e.sector,motto:e.motto||"",strategy_description:e.strategyDescription||"",join_code:this.state.joinCode});return this.update({agentToken:t.agent_token,myStartupId:t.startup_id,selectedStartupId:t.startup_id,error:null}),t}catch(t){throw this.update({error:t.message}),t}}async fillBotsAndStart(e="baseline"){try{console.log(`[Store] fillBotsAndStart: gameId=${this.state.gameId} tier=${e}`);const t=await tv(this.state.gameId,this.state.adminToken,e);return console.log("[Store] fillBotsAndStart result:",t),t}catch(t){throw console.error("[Store] fillBotsAndStart error:",t),this.update({error:t.message}),t}}async watchGame(e,t,n={}){this.update({gameId:e,spectatorToken:t,view:"playing",entryContext:{viaSharedLink:!!n.viaSharedLink,requestedPhase:n.requestedPhase||null,layout:n.layout||null,slot:n.slot||null},error:null}),this.startPolling()}openFeaturedSlot(e,t={}){this.stopPolling(),this.update({gameId:null,spectatorToken:null,gameData:null,selectedStartupId:null,view:"landing",entryContext:{viaSharedLink:!!(t.viaSharedLink??!0),requestedPhase:null,layout:t.layout||null,slot:e||null},error:null})}selectStartup(e){this.update({selectedStartupId:e})}async poll(){var e,t,n,i;if(this.state.gameId)try{const s=((e=this.state.gameData)==null?void 0:e.phase)||null;let o;this.state.spectatorToken?o=await J_(this.state.gameId,this.state.spectatorToken):o=await Z_(this.state.gameId);const a=o.phase||"unknown",l=o.startups?Object.keys(o.startups).length:0;console.log(`[Poll] phase=${a} turn=${o.turn||0} startups=${l}`);let c=this.state.view;a==="lobby"?c="lobby":a==="playing"?c="playing":a==="finished"&&(c="finished");let d=this.state.selectedStartupId;const h=((t=this.state.entryContext)==null?void 0:t.viaSharedLink)&&((n=this.state.entryContext)==null?void 0:n.requestedPhase)==="replay";if((!d||!((i=o.startups)!=null&&i[d]))&&o.startups)if(h&&o.winner&&o.startups[o.winner])d=o.winner;else{const u=Object.keys(o.startups);u.length>0&&(d=u[0])}this.update({gameData:o,view:c,selectedStartupId:d,error:null}),a==="finished"&&s!=="finished"&&(this.loadGames(),this.loadLeaderboard(),this.loadFeaturedFeed())}catch(s){console.error("[Poll] Error:",s)}}startPolling(){this.stopPolling(),this.poll(),this._pollTimer=setInterval(()=>this.poll(),this._pollInterval)}stopPolling(){this._pollTimer&&(clearInterval(this._pollTimer),this._pollTimer=null)}}class rv{constructor(e,t){this.store=t,this.el=document.createElement("div"),this.el.className="panel-left",this.el.innerHTML='<div class="panel-title">RANKINGS</div><div class="rank-list"></div>',this._list=this.el.querySelector(".rank-list"),e.appendChild(this.el),this._onSelect=null,this._startupOrderMap=new Map}onSelect(e){this._onSelect=e}_formatDelta(e){const t=Number(e||0);return Math.abs(t)<.05?"Flat":`${t>0?"+":""}${mt(t)}`}_renderRiskTags(e,t){return(e.risk_tags||(t==null?void 0:t.risk_tags)||[]).slice(0,2).map(i=>{const s=(i==null?void 0:i.tone)||"neutral",o=(i==null?void 0:i.label)||i;return`<span class="signal-pill signal-pill-${s}">${o}</span>`}).join("")}_isSharedReplay(e,t){var n,i;return!!((n=e.entryContext)!=null&&n.viaSharedLink&&((i=e.entryContext)==null?void 0:i.requestedPhase)==="replay"&&(t==null?void 0:t.phase)==="finished"&&(t!=null&&t.summary))}_replaySpotlights(e,t){var l,c;const n=(e==null?void 0:e.summary)||{},i=(e==null?void 0:e.winner)||((l=t[0])==null?void 0:l.id)||null,s=((c=t[1])==null?void 0:c.id)||null,o=(n.turning_points||[])[0]||null,a=new Set;if(o){const d=t.find(u=>u.startup_name===o.leader_startup),h=t.find(u=>u.startup_name===o.challenger_startup);d!=null&&d.id&&a.add(d.id),h!=null&&h.id&&a.add(h.id)}return{winnerId:i,runnerUpId:s,topTurningPoint:o,turningPointIds:a}}_renderReplayGuide(e,t,n,i){if(!this._isSharedReplay(e,t))return"";const s=(t==null?void 0:t.summary)||{},o=n.find(c=>c.id===i.winnerId)||n[0]||null,a=n.find(c=>c.id===i.runnerUpId)||null,l=i.topTurningPoint;return`
      <div style="margin-bottom:12px;padding:12px;border-radius:12px;background:rgba(255,184,0,0.06);border:1px solid rgba(255,184,0,0.14)">
        <div style="font-size:8px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Replay Guide</div>
        <div style="font-size:10px;color:var(--text);font-weight:800;line-height:1.45;margin-top:8px">${s.winner_summary||"Replay summary is loading."}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
          ${o?`<button class="btn-clean replay-jump" data-id="${o.id}" style="flex:1 1 120px;border-color:rgba(255,184,0,0.24);color:#FFB800">Winner: ${o.startup_name}</button>`:""}
          ${a?`<button class="btn-clean replay-jump" data-id="${a.id}" style="flex:1 1 120px;border-color:rgba(148,163,184,0.24);color:#CBD5E1">Runner-up: ${a.startup_name}</button>`:""}
        </div>
        ${l?`
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:10px">${l.headline}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
            ${n.filter(c=>i.turningPointIds.has(c.id)).map(c=>`<button class="btn-clean replay-jump" data-id="${c.id}" style="flex:1 1 120px;border-color:rgba(34,211,238,0.24);color:#22D3EE">Turning Point: ${c.startup_name}</button>`).join("")}
          </div>
        `:""}
      </div>
    `}update(e){const t=e.gameData;if(!(t==null?void 0:t.startups))return;const i=wr(t),s=Rs(t),o=new Map(((t==null?void 0:t.rankings)||[]).map(d=>[d.startup_id,d]));for(const d of s)this._startupOrderMap.has(d.id)||this._startupOrderMap.set(d.id,this._startupOrderMap.size);const a=e.selectedStartupId,l=this._isSharedReplay(e,t),c=this._replaySpotlights(t,s);this._list.innerHTML=`
      ${this._renderReplayGuide(e,t,s,c)}
      ${s.map((d,h)=>{const u=this._startupOrderMap.get(d.id)||0,p=La(u),m=d.alive===!1,_=d.id===a,g=d.product_quality||0,f=d.morale||0,y=d.brand||0,x=(d.startup_name||"?")[0].toUpperCase(),v=h===0?"&#128081;":h+1,C=o.get(d.id),E=i?`${mt(Dn(d))} score`:hn(d.valuation),T=i?`${hn(d.valuation)} val`:"",R=i?d.score_delta??(C==null?void 0:C.score_delta)??0:0,S=d.pressure_level||(C==null?void 0:C.pressure_level)||"neutral",b=this._renderRiskTags(d,C),P=[];l&&(d.id===c.winnerId&&P.push({label:"Winner",tone:"positive"}),d.id===c.runnerUpId&&P.push({label:"Runner-up",tone:"neutral"}),c.turningPointIds.has(d.id)&&P.push({label:"Turning Point",tone:"warning"}));const O=P.map(U=>`<span class="signal-pill signal-pill-${U.tone}">${U.label}</span>`).join("");return`
        <div class="rank-item rank-item-${S} ${m?"dead":""} ${_?"selected":""}"
             style="${l&&d.id===c.winnerId?"box-shadow:inset 0 0 0 1px rgba(255,184,0,0.18), 0 0 20px rgba(255,184,0,0.08);":""}"
             data-id="${d.id}">
          <div class="rank-pos">${v}</div>
          <div class="rank-avatar" style="background:${p}">${x}</div>
          <div class="rank-info">
            <div class="rank-topline">
              <div class="rank-name">${d.startup_name||"Unknown"}</div>
              ${i?`<div class="metric-delta ${R>0?"up":R<0?"down":""}">${this._formatDelta(R)}</div>`:""}
            </div>
            <div class="rank-meta">${d.agent_name||""} &middot; ${d.sector||""} ${m?"&middot; &#9760; DEAD":""}${T?` &middot; ${T}`:""}</div>
            ${b||O?`<div class="signal-pills" style="margin-top:5px">${O}${b}</div>`:""}
            <div class="mini-bars">
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${g}%;background:#4A9EFF"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${f}%;background:#34D058"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${y}%;background:#FFB800"></div></div>
            </div>
          </div>
          <div class="rank-val" style="color:${m?"#444":"#FFB800"}">${E}</div>
        </div>
      `}).join("")}
    `,this._list.querySelectorAll(".rank-item").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.id;this._onSelect&&this._onSelect(h)})}),this._list.querySelectorAll(".replay-jump").forEach(d=>{d.addEventListener("click",()=>{const h=d.dataset.id;h&&this._onSelect&&this._onSelect(h)})})}}const ov={build_feature:{icon:"🔧",color:"#3B82F6",label:"BUILD"},acquire_users:{icon:"👥",color:"#22C55E",label:"GROWTH"},fundraise:{icon:"💰",color:"#F0B429",label:"FUND"},hire:{icon:"🧑",color:"#A78BFA",label:"HIRE"},launch_pr:{icon:"📣",color:"#FB923C",label:"PR"},pivot:{icon:"🔄",color:"#EF4444",label:"PIVOT"},research:{icon:"🔬",color:"#22D3EE",label:"R&D"},optimize:{icon:"⚡",color:"#FACC15",label:"OPT"},expand:{icon:"🌍",color:"#4ADE80",label:"EXPAND"},defend:{icon:"🛡️",color:"#94A3B8",label:"DEFEND"},sabotage:{icon:"💣",color:"#EF4444",label:"ATTACK"}},ho=["Build smart, not fast!","Watch your burn rate...","Hot sectors = big wins!","Hire before you scale!","Morale wins games!","Pivot early or die late.","Brand is everything.","Ship it! 🚀","The market rewards patience.","Focus beats chaos."];class av{constructor(e){this._wrapper=document.createElement("div"),this._wrapper.className="bottom-dashboard-wrapper",e.appendChild(this._wrapper),this._mascotEl=document.createElement("div"),this._mascotEl.className="mascot-container",this._mascotEl.innerHTML='<img src="/mascot.png" alt="Arena Mascot" />',this._wrapper.appendChild(this._mascotEl),this._speechEl=document.createElement("div"),this._speechEl.className="mascot-speech",this._speechEl.textContent=ho[0],this._wrapper.appendChild(this._speechEl),this.el=document.createElement("div"),this.el.className="panel-bottom",this.el.style.position="relative",this.el.style.left="0",this.el.style.right="0",this.el.style.bottom="0",this._wrapper.appendChild(this.el),this._lastTurn=-1,this._tipIndex=0,this._tipInterval=setInterval(()=>{this._tipIndex=(this._tipIndex+1)%ho.length,this._speechEl.textContent=ho[this._tipIndex]},8e3)}update(e){const t=e.gameData;if(!t)return;const n=t.turn||0,i=t.phase||"unknown",s=t.startups||{},o=Object.keys(s).length,a=Object.values(s).filter(R=>R.alive!==!1).length;if(n===this._lastTurn&&i!=="lobby")return;this._lastTurn=n;const l=t.hot_sectors||[],c=(t.arc_feed||[]).slice(-6).reverse(),d=t.action_logs||{},h=this._getRecentActions(d,s,n),u=Object.values(s),p=wr(t),m=Rs(t),_=m[0],g=this._buildStoryFeed(t,m,n),f=u.reduce((R,S)=>R+(S.total_raised||0),0),y=u.length>0?Math.round(u.reduce((R,S)=>R+(S.morale||0),0)/u.length):0,x=u.filter(R=>R.alive===!1).length,v=t.max_turns||32,C=Math.round(n/v*100),E=i==="playing"?"#34D058":i==="lobby"?"#FFB800":"#EF4444",T=i==="playing"?"LIVE":i==="lobby"?"LOBBY":"ENDED";this.el.innerHTML=`
      <div class="bottom-dash-cards">
        ${this._renderRoundCard(n,v,C,i,E,T,a,o)}
        ${this._renderLeaderCard(_,p)}
        ${this._renderMarketCard(f,y,x,l)}
        ${this._renderFeedCard(g,h,c)}
      </div>
    `}_renderRoundCard(e,t,n,i,s,o,a,l){const c=e<=10?"EARLY":e<=25?"GROWTH":e<=40?"SCALE":"ENDGAME";return`
      <div class="bottom-dash-card card-green" style="flex:0 0 170px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:${s}33;color:${s}">W</div>
          ROUND
          <span class="dash-badge" style="margin-left:auto;background:${s}22;color:${s};border:1px solid ${s}33;${i==="playing"?"animation:badgePulse 2s ease-in-out infinite":""}">${o}</span>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <div style="position:relative;width:56px;height:56px;flex-shrink:0">
            <svg width="56" height="56" viewBox="0 0 56 56" style="transform:rotate(-90deg)">
              <circle cx="28" cy="28" r="23" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
              <circle cx="28" cy="28" r="23" fill="none" stroke="${s}" stroke-width="4"
                stroke-dasharray="${2*Math.PI*23}" stroke-dashoffset="${2*Math.PI*23*(1-n/100)}"
                stroke-linecap="round" style="filter:drop-shadow(0 0 4px ${s}66);transition:stroke-dashoffset 0.6s ease"/>
            </svg>
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column">
              <div style="font-size:18px;font-weight:900;color:var(--text);line-height:1">${e}</div>
              <div style="font-size:7px;color:var(--text-muted);letter-spacing:0.5px">/${t}</div>
            </div>
          </div>
          <div>
            <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">${c}</div>
            <div style="font-size:12px;font-weight:700;color:var(--text);margin-top:2px">${a}<span style="color:var(--text-muted);font-weight:500">/${l}</span></div>
            <div style="font-size:8px;color:var(--text-muted)">alive</div>
          </div>
        </div>
      </div>
    `}_renderLeaderCard(e,t){return e?`
      <div class="bottom-dash-card card-gold" style="flex:0 0 180px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(255,184,0,0.2);color:#FFB800">👑</div>
          LEADER
        </div>
        <div class="bottom-dash-card-value" style="color:#FFB800;text-shadow:0 0 16px rgba(255,184,0,0.25)">${t?`${Dn(e).toFixed(1)} score`:hn(e.valuation)}</div>
        <div style="font-size:12px;font-weight:800;color:var(--text);margin-top:4px">${e.startup_name||"?"}</div>
        <div class="bottom-dash-card-sub">${e.agent_name||""} · ${e.sector||""}${t?` · ${hn(e.valuation)} val`:""}</div>
        <div class="bottom-dash-card-mini">
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Product</span>
            <span class="mini-val" style="color:#4A9EFF">${e.product_quality||0}%</span>
          </div>
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Morale</span>
            <span class="mini-val" style="color:#34D058">${e.morale||0}%</span>
          </div>
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Brand</span>
            <span class="mini-val" style="color:#FFB800">${e.brand||0}%</span>
          </div>
        </div>
      </div>
    `:`
        <div class="bottom-dash-card card-gold" style="flex:0 0 180px">
          <div class="bottom-dash-card-title">
            <div class="card-icon" style="background:rgba(255,184,0,0.2);color:#FFB800">👑</div>
            LEADER
          </div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:16px">Waiting for game...</div>
        </div>
      `}_renderMarketCard(e,t,n,i){const s=i.slice(0,3).map(o=>{const a=q_[o]||"#888";return`<div class="tag-pill" style="padding:3px 8px;font-size:8px"><div class="tag-dot" style="background:${a};box-shadow:0 0 4px ${a}"></div>${o}</div>`}).join("");return`
      <div class="bottom-dash-card card-blue" style="flex:0 0 180px">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(74,158,255,0.2);color:#4A9EFF">M</div>
          MARKET
        </div>
        <div class="bottom-dash-card-value" style="color:#4A9EFF;text-shadow:0 0 16px rgba(74,158,255,0.2)">${hn(e)}</div>
        <div class="bottom-dash-card-sub">Total Raised</div>
        <div class="bottom-dash-card-mini">
          <div class="bottom-dash-mini-stat">
            <span class="mini-label">Morale</span>
            <span class="mini-val" style="color:${t>60?"#34D058":t>40?"#FB923C":"#EF4444"}">${t}%</span>
          </div>
          ${n>0?`
            <div class="bottom-dash-mini-stat">
              <span class="mini-label">Dead</span>
              <span class="mini-val" style="color:#EF4444">${n}</span>
            </div>
          `:""}
        </div>
        ${i.length>0?`<div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:8px">${s}</div>`:""}
      </div>
    `}_renderFeedCard(e,t,n){const i=e.slice(0,5).map(a=>{const l=a.tone==="danger"?"#EF4444":a.tone==="warning"?"#FB923C":a.tone==="positive"?"#34D058":a.tone==="leader"?"#A78BFA":"#22D3EE";return`
        <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
          <div style="display:flex;align-items:center;gap:8px">
            <div style="width:7px;height:7px;border-radius:999px;background:${l};box-shadow:0 0 8px ${l}66;flex-shrink:0"></div>
            <div style="font-size:9px;font-weight:800;color:${l};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.headline}</div>
          </div>
          <div style="font-size:8px;color:var(--text-dim);line-height:1.5;margin-top:4px">${a.detail}</div>
          <div style="font-size:7px;color:var(--text-muted);margin-top:4px">W${a.turn||"?"}</div>
        </div>
      `}).join(""),s=t.slice(0,4).map(a=>{var d;const l=ov[a.type]||{icon:"▸",color:"#888",label:((d=a.type)==null?void 0:d.toUpperCase())||"?"},c=a.success!==!1;return`
        <div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
          <div style="width:20px;height:20px;border-radius:5px;background:${l.color}22;color:${l.color};display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0">${l.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:9px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
            <div style="font-size:7px;color:var(--text-muted)">W${a.turn} · ${l.label}</div>
          </div>
          <div style="font-size:8px;font-weight:700;color:${c?"#34D058":"#EF4444"}">${c?"✓":"✗"}</div>
        </div>
      `}).join(""),o=n.slice(0,2).map(a=>`
        <div style="padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.03)">
          <div style="font-size:9px;font-weight:700;color:${(a.severity||0)>.6?"#EF4444":(a.severity||0)>.3?"#FB923C":"#22D3EE"};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.headline||a.title||"Event"}</div>
          <div style="font-size:7px;color:var(--text-muted)">W${a.turn||"?"}</div>
        </div>
      `).join("");return`
      <div class="bottom-dash-card card-purple" style="flex:1">
        <div class="bottom-dash-card-title">
          <div class="card-icon" style="background:rgba(167,139,250,0.2);color:#A78BFA">⚡</div>
          LIVE FEED
          ${e.length>0?`<span class="dash-badge" style="margin-left:auto;background:rgba(52,208,88,0.12);color:#34D058;border:1px solid rgba(52,208,88,0.15)">${e.length}</span>`:""}
        </div>
        <div style="display:flex;gap:10px;height:calc(100% - 28px);overflow:hidden">
          <div style="flex:1;overflow-y:auto">
            ${i||'<div style="font-size:9px;color:var(--text-muted);padding:4px 0">No turning points yet...</div>'}
          </div>
          ${s||o?`
            <div style="flex:0 0 150px;overflow-y:auto;border-left:1px solid rgba(255,255,255,0.04);padding-left:8px">
              ${s?`
                <div style="font-size:7px;color:var(--text-muted);letter-spacing:0.8px;font-weight:600;margin-bottom:4px">ACTIONS</div>
                ${s}
              `:""}
              ${o?`
                <div style="font-size:7px;color:var(--text-muted);letter-spacing:0.8px;font-weight:600;margin:8px 0 4px">ARCS</div>
                ${o}
              `:""}
            </div>
          `:""}
        </div>
      </div>
    `}_buildStoryFeed(e,t,n){var l,c,d,h,u,p,m,_;const i=e.live_summary||null,s=[];i&&i.margin!=null&&(s.push({tone:"leader",turn:n,headline:`${i.leader_startup_name} leads by ${mt(i.margin)} score`,detail:i.why_ahead||"No edge summary available."}),i.flip_watch&&s.push({tone:((l=i.leader_pressure)==null?void 0:l.pressure_level)==="danger"?"danger":"warning",turn:n,headline:"Flip watch",detail:i.flip_watch}),(c=i.runner_alert)!=null&&c.headline&&s.push({tone:i.runner_alert.severity==="error"?"danger":"warning",turn:n,headline:`${i.runner_alert.startup_name} runner issue`,detail:i.runner_alert.message||i.runner_alert.headline}));for(const g of t.slice(0,3)){const f=Number(g.score_delta||0);Math.abs(f)>=.35&&s.push({tone:f>0?"positive":"danger",turn:n,headline:`${g.startup_name} ${f>0?"gained":"lost"} ${mt(Math.abs(f))} score`,detail:g.watch_text||`${g.startup_name} is swinging the board this turn.`}),(d=g.current_arc)!=null&&d.headline&&(((h=g.current_arc)==null?void 0:h.severity)||0)>=.35&&s.push({tone:(((u=g.current_arc)==null?void 0:u.severity)||0)>=.6?"danger":"warning",turn:n,headline:`${g.startup_name} faces ${((p=g.current_arc)==null?void 0:p.packet_kind_label)||((m=g.current_arc)==null?void 0:m.title)||"pressure"}`,detail:g.current_arc.headline}),(_=g.latest_decision)!=null&&_.intent&&s.push({tone:"neutral",turn:g.latest_decision.turn_index||n,headline:`${g.startup_name}: ${g.latest_decision.intent}`,detail:g.latest_decision.primary_risk?`Risk: ${g.latest_decision.primary_risk}`:g.latest_decision.expected_outcome||"No public outcome note recorded."})}const o=[],a=new Set;for(const g of s){const f=`${g.headline}|${g.detail}`;a.has(f)||(a.add(f),o.push(g))}return o.slice(0,6)}_getRecentActions(e,t,n){var o;const i=[],s=Math.max(1,n-3);for(const[a,l]of Object.entries(e)){const c=((o=t[a])==null?void 0:o.startup_name)||a.slice(0,6);for(const d of Array.isArray(l)?l:[])d.turn>=s&&d.turn<=n&&i.push({turn:d.turn,name:c,type:d.action_type||d.type||"unknown",success:d.success,detail:d.detail||d.outcome||""})}return i.sort((a,l)=>l.turn-a.turn),i}}class lv{constructor(e){this.el=document.createElement("div"),this.el.className="panel-right",e.appendChild(this.el),this._startupOrderMap=new Map}_renderRiskPills(e=[]){return e.slice(0,3).map(t=>{const n=(t==null?void 0:t.tone)||"neutral",i=(t==null?void 0:t.label)||t;return`<span class="signal-pill signal-pill-${n}">${i}</span>`}).join("")}_scoreEdgeSummary(e,t){var l,c;const n=((l=e==null?void 0:e.seven_dimension_scores)==null?void 0:l.dimensions)||{},i=((c=t==null?void 0:t.seven_dimension_scores)==null?void 0:c.dimensions)||{},s=Object.keys(n).map(d=>{const h=Number(n[d]||0),u=Number(i[d]||0);return{key:d,label:d.replace(/_/g," "),delta:Number((h-u).toFixed(1))}}),o=s.filter(d=>d.delta>0).sort((d,h)=>h.delta-d.delta).slice(0,2),a=s.filter(d=>d.delta<0).sort((d,h)=>d.delta-h.delta).slice(0,2);return{strengths:o,gaps:a}}update(e){var se,de,me,Ue,Ye,q,ee;const t=e.selectedStartupId,n=(se=e.gameData)==null?void 0:se.startups;if(!t||!n||!n[t]){this.el.classList.remove("visible");return}this.el.classList.add("visible");const i=n[t],s=Rs(e.gameData),o=s[0]||null,a=(o==null?void 0:o.id)||((me=(de=e.gameData)==null?void 0:de.live_summary)==null?void 0:me.leader_startup_id)||null,l=s.findIndex(re=>re.id===t)+1,c=a&&s.find(re=>re.id===a)||null,d=c&&c.id!==t?c:s.find(re=>re.id!==t)||null,h=i.latest_decision||((Ye=(Ue=e.gameData)==null?void 0:Ue.decision_summaries)==null?void 0:Ye[t])||null,u=i.current_arc||null,p=i.runner_presence||null,m=i.runner_failure||null,_=i.pressure_level||"neutral",g=this._renderRiskPills(i.risk_tags||[]),f=Number(i.score_delta||0),y=Number((q=i.seven_dimension_scores)==null?void 0:q.total_score)||Number(i.score)||0,x=d?this._scoreEdgeSummary(i,d):{strengths:[],gaps:[]},v=c?Number((Dn(c)-y).toFixed(1)):0,C=i.alive?_==="danger"?"Critical pressure":_==="warning"?"Watch closely":_==="positive"?"Positive momentum":"Stable position":"Eliminated",E=i.alive?_==="danger"?"#EF4444":_==="warning"?"#FB923C":_==="positive"?"#34D058":"#22D3EE":"#EF4444",T=d?`Against ${d.startup_name}`:"Comparison",R=d?Math.abs(Number((y-Dn(d)).toFixed(1))):0,S=m?m.severity==="error"?"#EF4444":m.severity==="warn"?"#FB923C":"#22D3EE":(p==null?void 0:p.tone)==="positive"?"#34D058":(p==null?void 0:p.tone)==="warning"?"#FB923C":(p==null?void 0:p.tone)==="danger"?"#EF4444":"#22D3EE",b=m?m.label:(p==null?void 0:p.label)||"No runner data",P=(m==null?void 0:m.message)||(p==null?void 0:p.detail)||"No operator state recorded yet.";this._startupOrderMap.has(t)||this._startupOrderMap.set(t,this._startupOrderMap.size);const O=La(this._startupOrderMap.get(t)||0),U=(i.team||[]).map(re=>`
      <div class="team-member">
        <div style="width:6px;height:6px;border-radius:50%;background:${O};flex-shrink:0"></div>
        <span>${re.name||"Unknown"}</span>
        <span class="team-role">${re.role||""}</span>
        <span style="margin-left:auto;color:#666;font-size:9px">Skill ${re.skill||0}</span>
      </div>
    `).join(""),X=(i.seven_dimension_scores||{}).dimensions||{},W=Object.keys(X).length>0?Object.entries(X).map(([re,ae])=>{const we=Math.round(Number(ae)||0),Pe=re.replace(/_/g," "),Oe=we>=70?"#34D058":we>=40?"#FFB800":"#EF4444";return`
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;padding:3px 0">
              <span style="font-size:8px;color:var(--text-muted);width:70px;text-transform:capitalize;font-weight:600">${Pe}</span>
              <div style="flex:1;height:5px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden">
                <div style="height:100%;width:${we}%;background:${Oe};border-radius:3px;box-shadow:0 0 6px ${Oe}44;transition:width 0.4s"></div>
              </div>
              <span style="font-size:9px;color:var(--text-dim);width:30px;text-align:right;font-weight:700">${we}%</span>
            </div>
          `}).join(""):'<div style="font-size:9px;color:var(--text-muted)">Not available yet</div>',Z=i.strategy||"balanced",V=i.motto||"";this.el.innerHTML=`
      <div class="detail-header">
        <div class="detail-avatar" style="background:${O}">${(i.startup_name||"?")[0]}</div>
        <div>
          <div class="detail-name">${i.startup_name||"Unknown"}</div>
          <div class="detail-sector">${i.agent_name||""} &middot; ${i.sector||""} &middot; ${Z}</div>
          ${V?`<div style="font-size:9px;color:#555;font-style:italic;margin-top:2px">"${V}"</div>`:""}
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-cell">
          <div class="stat-label">Rank</div>
          <div class="stat-value" style="color:#F0B429">#${l||"-"}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Score</div>
          <div class="stat-value" style="color:#A78BFA">${mt(y)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Score Delta</div>
          <div class="stat-value" style="color:${f>0?"#34D058":f<0?"#EF4444":"var(--text-dim)"}">${Math.abs(f)<.05?"Flat":`${f>0?"+":""}${mt(f)}`}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Valuation</div>
          <div class="stat-value" style="color:#FFB800">${hn(i.valuation)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Rank Basis</div>
          <div class="stat-value" style="color:#F0B429">${((ee=e.gameData)==null?void 0:ee.rank_basis)==="score"?"Score":"Valuation"}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Cash</div>
          <div class="stat-value">${hn(i.cash)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Revenue</div>
          <div class="stat-value" style="color:#34D058">${hn(i.revenue)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Runway</div>
          <div class="stat-value" style="color:${(i.runway||0)<4?"#EF4444":(i.runway||0)<7?"#FB923C":"#34D058"}">${R_(i.runway)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Users</div>
          <div class="stat-value" style="color:#22D3EE">${C_(i.users)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Product</div>
          <div class="stat-value" style="color:#4A9EFF">${i.product_quality||0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Morale</div>
          <div class="stat-value" style="color:#34D058">${i.morale||0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Brand</div>
          <div class="stat-value" style="color:#FFB800">${i.brand||0}%</div>
        </div>
      </div>

      <div class="panel-title" style="margin-top:8px">DANGER STATE</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <div style="font-size:11px;font-weight:800;color:${E}">${C}</div>
          ${g?`<div class="signal-pills">${g}</div>`:""}
        </div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">${i.watch_text||(u==null?void 0:u.headline)||"No immediate danger signal recorded."}</div>
      </div>

      <div class="panel-title">RUNNER STATUS</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <div style="font-size:11px;font-weight:800;color:${S}">${b}</div>
          ${(p==null?void 0:p.heartbeat_age_seconds)!=null?`<div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);border-radius:999px;padding:3px 8px">Heartbeat ${p.heartbeat_age_seconds}s ago</div>`:""}
        </div>
        <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">${P}</div>
        ${(m==null?void 0:m.turn)!=null?`<div style="font-size:8px;color:${S};margin-top:8px">Issue surfaced on Week ${m.turn}</div>`:""}
      </div>

      <div class="panel-title">${T}</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${d?`
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:11px;font-weight:800;color:var(--text)">${d.startup_name}</div>
            <div style="font-size:8px;color:#A78BFA;border:1px solid rgba(167,139,250,0.22);background:rgba(167,139,250,0.08);border-radius:999px;padding:3px 8px">${v>0&&(c==null?void 0:c.id)!==t?`${mt(v)} behind leader`:`${mt(R)} gap`}</div>
          </div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">
            ${d.id===(c==null?void 0:c.id)&&d.id!==t?`${i.startup_name} needs ${mt(v)} score to catch the leader.`:`${i.startup_name} is being compared against ${d.startup_name}'s current score balance.`}
          </div>
          ${x.strengths.length>0?`<div style="font-size:9px;color:#34D058;margin-top:8px">Ahead on: ${x.strengths.map(re=>`${re.label} (+${mt(re.delta)})`).join(" · ")}</div>`:""}
          ${x.gaps.length>0?`<div style="font-size:9px;color:#EF4444;margin-top:4px">Losing on: ${x.gaps.map(re=>`${re.label} (${mt(re.delta)})`).join(" · ")}</div>`:""}
        `:'<div style="font-size:9px;color:var(--text-muted)">No comparison target available yet.</div>'}
      </div>

      <div class="panel-title" style="margin-top:8px">CURRENT ARC</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${u?`
          <div style="display:flex;align-items:center;gap:8px">
            <div style="font-size:10px;font-weight:800;color:#FB923C;text-transform:uppercase;letter-spacing:0.8px">${u.packet_kind_label||u.theme||u.arc_type||"Arc"}</div>
            ${u.severity!=null?`<div style="margin-left:auto;font-size:9px;color:${u.severity>=.6?"#EF4444":u.severity>=.3?"#FB923C":"#22D3EE"}">Severity ${Math.round(u.severity*100)}%</div>`:""}
          </div>
          <div style="font-size:11px;font-weight:700;color:var(--text);margin-top:6px">${u.title||"Active pressure"}</div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.45;margin-top:4px">${u.headline||"No active headline."}</div>
        `:'<div style="font-size:9px;color:var(--text-muted)">No active pressure arc.</div>'}
      </div>

      <div class="panel-title">LATEST PLAN</div>
      <div style="margin-bottom:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:10px 12px">
        ${h?`
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
            <div style="font-size:8px;color:#A78BFA;border:1px solid rgba(167,139,250,0.22);background:rgba(167,139,250,0.1);border-radius:999px;padding:3px 8px;text-transform:uppercase;letter-spacing:0.7px">${h.confidence||"mid"} confidence</div>
            ${h.watch_metric?`<div style="font-size:8px;color:#22D3EE;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.1);border-radius:999px;padding:3px 8px;text-transform:uppercase;letter-spacing:0.7px">watch ${h.watch_metric}</div>`:""}
          </div>
          <div style="font-size:11px;font-weight:700;color:var(--text)">${h.intent||"No intent recorded."}</div>
          ${h.primary_risk?`<div style="font-size:9px;color:#FB923C;margin-top:5px">Risk: ${h.primary_risk}</div>`:""}
          ${h.reasoning_summary?`<div style="font-size:9px;color:var(--text-dim);line-height:1.45;margin-top:8px">${h.reasoning_summary}</div>`:""}
          ${h.expected_outcome?`<div style="font-size:9px;color:#34D058;margin-top:8px">Expected: ${h.expected_outcome}</div>`:""}
        `:'<div style="font-size:9px;color:var(--text-muted)">No decision summary recorded yet.</div>'}
      </div>

      <div class="panel-title" style="margin-top:8px">FUNDING</div>
      <div style="display:flex;gap:6px;margin-bottom:12px">
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Round</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:#A78BFA;text-transform:capitalize">${i.funding_round||"pre-seed"}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Raised</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:#FFB800">${hn(i.total_raised)}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.04);border-radius:10px;padding:8px 10px;text-align:center">
          <div style="font-size:8px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600">Dilution</div>
          <div style="font-size:11px;font-weight:800;margin-top:2px;color:${(i.dilution||0)>.4?"#EF4444":"var(--text)"}">${Math.round((i.dilution||0)*100)}%</div>
        </div>
      </div>

      <div class="panel-title">TEAM (${(i.team||[]).length})</div>
      <div style="margin-bottom:12px">${U||'<div style="font-size:9px;color:var(--text-muted)">No team members</div>'}</div>

      <div class="panel-title">PERFORMANCE</div>
      <div style="font-size:10px;font-weight:800;color:#A78BFA;margin-bottom:8px">Total Score ${mt(y)}</div>
      <div style="margin-bottom:8px">${W}</div>

      ${i.alive===!1?`
        <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.15);border-radius:12px;padding:12px;margin-top:10px">
          <div style="font-size:11px;font-weight:800;color:#EF4444;display:flex;align-items:center;gap:6px">&#9760; ELIMINATED</div>
          <div style="font-size:9px;color:var(--text-muted);margin-top:4px">${i.death_reason||"Startup failed"}</div>
        </div>
      `:""}
    `}}class cv{constructor(e,t){this.store=t,this.container=e,this._overlay=document.createElement("div"),this._overlay.className="modal-overlay hidden",this._overlay.innerHTML='<div class="modal" id="modal-content"></div>',this._modal=this._overlay.querySelector("#modal-content"),e.appendChild(this._overlay),this._overlay.addEventListener("click",n=>{n.target===this._overlay&&this.close()})}open(){this._overlay.classList.remove("hidden")}close(){this._overlay.classList.add("hidden"),this._lobbyUpdateInterval&&(clearInterval(this._lobbyUpdateInterval),this._lobbyUpdateInterval=null)}_quoteArg(e){return`"${String(e??"").replace(/"/g,'\\"')}"`}_exampleAgentCommand(e){return["python example_agent.py",`--game-id ${this._quoteArg(this.store.state.gameId)}`,`--agent-token ${this._quoteArg(e.agentToken)}`,`--startup-id ${this._quoteArg(e.startupId)}`,`--name ${this._quoteArg(e.agentName)}`,`--startup ${this._quoteArg(e.startupName)}`,`--sector ${this._quoteArg(e.sector)}`,`--motto ${this._quoteArg(e.motto||"")}`,`--strategy ${this._quoteArg(e.strategy||"balanced")}`,`--server ${this._quoteArg(window.location.origin)}`].join(" ")}_showAttachCommand(e){const t=this._modal.querySelector("#da-command-wrap"),n=this._modal.querySelector("#da-command");!t||!n||(t.style.display="block",n.textContent=e)}_runnerToneColor(e){return{positive:"#22C55E",warning:"#F59E0B",danger:"#EF4444",neutral:"#94A3B8",info:"#22D3EE"}[e]||"#94A3B8"}_formatHeartbeatAge(e){return e==null?"No heartbeat yet":e<=1?"Heartbeat just now":e<60?`Heartbeat ${e}s ago`:`Heartbeat ${Math.round(e/60)}m ago`}_fallbackRunnerPresence(){return{status:"reserved",label:"Slot reserved",tone:"neutral",detail:"No local runner has attached to this startup yet.",heartbeat_age_seconds:null}}_renderRunnerPresence(e,{compact:t=!1}={}){const n=e||this._fallbackRunnerPresence(),i=this._runnerToneColor(n.tone),s=this._formatHeartbeatAge(n.heartbeat_age_seconds);return t?`
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
          <span style="display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:999px;background:${i}1A;border:1px solid ${i}33;color:${i};font-size:8px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase">${n.label}</span>
          <span style="font-size:8px;color:var(--text-muted)">${s}</span>
        </div>
      `:`
      <div style="display:flex;flex-direction:column;gap:6px">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <span style="display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:999px;background:${i}1A;border:1px solid ${i}33;color:${i};font-size:8px;font-weight:800;letter-spacing:0.6px;text-transform:uppercase">${n.label}</span>
          <span style="font-size:9px;color:var(--text-muted)">${s}</span>
        </div>
        <div style="font-size:10px;color:var(--text);line-height:1.5">${n.detail||""}</div>
      </div>
    `}_renderRunnerFailure(e,{compact:t=!1}={}){if(!e)return"";const n={error:"danger",warn:"warning",info:"info"}[e.severity]||"neutral",i=this._runnerToneColor(n),s=e.label||"Runner issue",o=e.message||e.headline||"";return t?`
        <div style="font-size:8px;color:${i};line-height:1.45;margin-top:4px">
          <strong style="font-weight:800">${s}:</strong> ${o}
        </div>
      `:`
      <div style="margin-top:8px;padding:10px 12px;border-radius:10px;background:${i}12;border:1px solid ${i}26">
        <div style="font-size:8px;color:${i};font-weight:800;letter-spacing:0.6px;text-transform:uppercase">${s}</div>
        <div style="font-size:10px;color:var(--text);line-height:1.5;margin-top:5px">${o}</div>
      </div>
    `}_renderRunnerIncidents(e){const t=(e==null?void 0:e.runner_incidents)||[];return t.length?`
      <div style="padding:12px 14px;border-radius:12px;background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.14);margin-bottom:10px">
        <div style="font-size:9px;color:#F87171;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:8px">Runner Issues</div>
        ${t.map(n=>`
          <div style="padding:8px 0${n!==t[t.length-1]?";border-bottom:1px solid rgba(255,255,255,0.06)":""}">
            <div style="font-size:10px;color:var(--text);font-weight:700">${n.startup_name}</div>
            <div style="font-size:9px;color:#FCA5A5;line-height:1.5;margin-top:4px">${n.label}: ${n.message}</div>
          </div>
        `).join("")}
      </div>
    `:""}showCreateGame(){this._modal.innerHTML=`
      <h2>Create New Game</h2>

      <div class="game-card">
        <div class="game-card-title" style="color:#4A9EFF">Game Settings</div>
        <label>GAME NAME</label>
        <input type="text" id="cg-name" value="Founder Arena" />

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div>
            <label>GAME MODE</label>
            <select id="cg-mode">
              <option value="competitive_mode">Competitive (1v1 Duel)</option>
              <option value="legacy_arena">Legacy Arena (FFA)</option>
            </select>
          </div>
          <div>
            <label>MAX TURNS</label>
            <select id="cg-turns">
              <option value="32" selected>32 (Standard)</option>
              <option value="16">16 (Quick)</option>
              <option value="52">52 (Full Year)</option>
            </select>
          </div>
        </div>

        <label>BENCHMARK TIER</label>
        <select id="cg-tier">
          <option value="baseline">Baseline (Balanced)</option>
          <option value="pressure">Pressure (Aggressive)</option>
          <option value="discipline">Discipline (Lean)</option>
          <option value="wildcard">Wildcard (Chaos)</option>
          <option value="gauntlet">Gauntlet (All Strategies)</option>
        </select>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="cg-cancel">Cancel</button>
        <button class="btn-game btn-game-blue" id="cg-create" style="flex:2">Create & Launch</button>
      </div>
    `,this.open(),this._modal.querySelector("#cg-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#cg-create").addEventListener("click",async()=>{const e=this._modal.querySelector("#cg-create");e.textContent="Creating...",e.disabled=!0;try{const t=await this.store.createGame({name:this._modal.querySelector("#cg-name").value,gameMode:this._modal.querySelector("#cg-mode").value,maxTurns:parseInt(this._modal.querySelector("#cg-turns").value),benchmarkTier:this._modal.querySelector("#cg-tier").value});this.close(),this.showLobby(t)}catch{e.textContent="Error - Retry",e.disabled=!1}})}showLobby(e,t={},n=null){const i=this.store.state.gameId,s=(e==null?void 0:e.benchmark_tier)||"baseline",o=this.store.state.joinCode||"",a=t.agentName||"MyFounder",l=t.startupName||"NeuralForge",c=t.sector||"ai",d=t.motto||"Intelligence is our product",h=t.strategy||"balanced";if(this._modal.innerHTML=`
      <h2>Game Lobby</h2>
      <div style="display:flex;gap:8px;margin-bottom:14px">
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:8px 12px">
          <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">GAME ID</div>
          <div style="font-size:11px;font-weight:700;margin-top:2px">${i}</div>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:8px 12px">
          <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;font-weight:600">JOIN CODE</div>
          <div style="font-size:11px;font-weight:700;margin-top:2px;color:#FFB800">${o}</div>
        </div>
      </div>

      <div class="game-card">
        <div class="game-card-title" style="color:#A78BFA">Reserve Your Startup Slot</div>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-bottom:10px">
          The browser reserves a startup slot and gives you an attach command. It does not run an autonomous agent loop by itself.
          After reserving your slot, run the command below in a terminal, then click <strong>Fill Bots & Start</strong>.
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">AGENT NAME</label>
            <input type="text" id="da-agent-name" value="${a}" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="da-startup-name" value="${l}" style="font-size:11px" />
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">SECTOR</label>
            <select id="da-sector" style="font-size:11px">
              <option value="ai" ${c==="ai"?"selected":""}>AI</option>
              <option value="fintech" ${c==="fintech"?"selected":""}>Fintech</option>
              <option value="saas" ${c==="saas"?"selected":""}>SaaS</option>
              <option value="crypto" ${c==="crypto"?"selected":""}>Crypto</option>
              <option value="healthtech" ${c==="healthtech"?"selected":""}>HealthTech</option>
              <option value="gaming" ${c==="gaming"?"selected":""}>Gaming</option>
              <option value="edtech" ${c==="edtech"?"selected":""}>EdTech</option>
              <option value="greentech" ${c==="greentech"?"selected":""}>GreenTech</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px">MOTTO</label>
            <input type="text" id="da-motto" value="${d}" style="font-size:11px" />
          </div>
        </div>

        <label style="font-size:9px">LOCAL RUNNER STRATEGY</label>
        <select id="da-strategy" style="font-size:11px">
          <option value="balanced" ${h==="balanced"?"selected":""}>Balanced</option>
          <option value="aggressive" ${h==="aggressive"?"selected":""}>Aggressive</option>
          <option value="lean" ${h==="lean"?"selected":""}>Lean</option>
          <option value="chaos" ${h==="chaos"?"selected":""}>Chaos</option>
        </select>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.45;margin-top:8px">
          For advanced local agents, ignore the example runner and use the same <code>game_id</code> and <code>agent_token</code> with your own `/api/games/{id}/state` + `/api/games/{id}/action` loop.
        </div>

        <div id="da-command-wrap" style="display:${n?"block":"none"};margin-top:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:10px 12px">
          <div style="font-size:9px;color:var(--text-muted);letter-spacing:0.7px;font-weight:700;margin-bottom:6px">TERMINAL ATTACH COMMAND</div>
          <pre id="da-command" style="white-space:pre-wrap;word-break:break-word;font-size:10px;line-height:1.45;color:var(--text);margin:0"></pre>
        </div>

        <div id="da-runner-wrap" style="display:${n?"block":"none"};margin-top:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:10px 12px">
          <div style="font-size:9px;color:var(--text-muted);letter-spacing:0.7px;font-weight:700;margin-bottom:6px">LOCAL RUNNER STATUS</div>
          <div id="da-runner-presence" style="font-size:10px;color:var(--text)">${this._renderRunnerPresence(this._fallbackRunnerPresence())}</div>
          <div id="da-runner-failure"></div>
        </div>

        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn-game btn-game-purple" id="da-deploy" style="flex:1;padding:10px">${n?"Slot Reserved":"Reserve Slot"}</button>
        </div>
        <div id="da-status" style="font-size:9px;margin-top:6px;min-height:14px"></div>
      </div>

      <div class="lobby-list" id="lobby-agents">
        <div style="font-size:10px;color:var(--text-muted);padding:10px;text-align:center">Waiting for agents...</div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="lobby-cancel">Close</button>
        <button class="btn-game btn-game-green" id="lobby-fill" style="flex:2">Fill Bots & Start</button>
      </div>
    `,this.open(),n){const u=this._exampleAgentCommand({agentName:a,startupName:l,sector:c,motto:d,strategy:h,agentToken:n.agent_token,startupId:n.startup_id});this._showAttachCommand(u),this._modal.querySelectorAll("#da-agent-name, #da-startup-name, #da-sector, #da-motto, #da-strategy").forEach(_=>{_.disabled=!0,_.style.opacity="0.5"});const p=this._modal.querySelector("#da-deploy"),m=this._modal.querySelector("#da-status");p&&(p.disabled=!0,p.style.background="#22C55E"),m&&(m.style.color="#22C55E",m.textContent="Slot reserved. Start your local runner before starting the match.")}this._modal.querySelector("#da-deploy").addEventListener("click",async()=>{const u=this._modal.querySelector("#da-deploy"),p=this._modal.querySelector("#da-status");u.textContent="Reserving...",u.disabled=!0,p.style.color="#888",p.textContent="Reserving startup slot...";try{const m={agentName:this._modal.querySelector("#da-agent-name").value.trim()||"MyFounder",startupName:this._modal.querySelector("#da-startup-name").value.trim()||"NeuralForge",sector:this._modal.querySelector("#da-sector").value,motto:this._modal.querySelector("#da-motto").value.trim(),strategyDescription:this._modal.querySelector("#da-strategy").value},_=await this.store.joinAsPlayer(m),g=this._exampleAgentCommand({...m,strategy:this._modal.querySelector("#da-strategy").value,agentToken:_.agent_token,startupId:_.startup_id});p.style.color="#22C55E",p.textContent="Slot reserved. Run the terminal command, then start the match.",u.textContent="Slot Reserved",u.style.background="#22C55E",this._showAttachCommand(g);const f=this._modal.querySelector("#da-runner-wrap"),y=this._modal.querySelector("#da-runner-presence");f&&(f.style.display="block"),y&&(y.innerHTML=this._renderRunnerPresence(this._fallbackRunnerPresence())),this._modal.querySelectorAll("#da-agent-name, #da-startup-name, #da-sector, #da-motto, #da-strategy").forEach(x=>{x.disabled=!0,x.style.opacity="0.5"})}catch(m){p.style.color="#EF4444",p.textContent=`Error: ${m.message}`,u.textContent="Retry Deploy",u.disabled=!1}}),this._modal.querySelector("#lobby-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#lobby-fill").addEventListener("click",async()=>{const u=this._modal.querySelector("#lobby-fill");u.textContent="Starting...",u.disabled=!0;try{await this.store.fillBotsAndStart(s),setTimeout(()=>this.close(),1e3)}catch{u.textContent="Error - Retry",u.disabled=!1}}),this._lobbyUpdateInterval=setInterval(()=>{var v,C;const u=this.store.state;if(u.view!=="lobby"){clearInterval(this._lobbyUpdateInterval),this._lobbyUpdateInterval=null;return}const p=((v=u.gameData)==null?void 0:v.startups)||{},m=this._modal.querySelector("#lobby-agents"),_=this._modal.querySelector("#da-runner-presence"),g=this._modal.querySelector("#da-runner-failure");if(!m)return;const f=Object.values(p),y=(C=this._modal.querySelector("#da-startup-name"))==null?void 0:C.value,x=f.find(E=>E.id===this.store.state.myStartupId||E.startup_name===y);if(_&&(_.innerHTML=this._renderRunnerPresence((x==null?void 0:x.runner_presence)||this._fallbackRunnerPresence())),g&&(g.innerHTML=this._renderRunnerFailure((x==null?void 0:x.runner_failure)||null)),f.length===0){m.innerHTML='<div style="font-size:10px;color:var(--text-muted);padding:10px;text-align:center">Waiting for agents...</div>';return}m.innerHTML=f.map(E=>{const T=E.id===this.store.state.myStartupId||E.startup_name===y,R=E.runner_presence||this._fallbackRunnerPresence(),S=E.runner_failure||null;return`
          <div class="lobby-agent" style="align-items:flex-start;${T?"border-left:2px solid #A78BFA;padding-left:6px":""}">
            <div style="display:flex;flex-direction:column;gap:4px;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                <span style="font-weight:600">${E.startup_name||"Unknown"}</span>
                ${T?'<span style="color:#A78BFA;font-size:8px">YOU</span>':""}
                <span style="color:#666;font-size:8px;text-transform:uppercase;letter-spacing:0.5px">${E.sector||""}</span>
              </div>
              <div style="font-size:8px;color:var(--text-muted)">${R.detail||""}</div>
              ${this._renderRunnerFailure(S,{compact:!0})}
            </div>
            <div style="margin-left:auto">
              ${this._renderRunnerPresence(R,{compact:!0})}
            </div>
          </div>
        `}).join("")},1e3)}async quickPlayVsBots(){this._modal.innerHTML=`
      <h2 style="text-align:center">Practice Lobby</h2>

      <div class="game-card">
        <div class="game-card-title" style="color:#34D058">Reserve Your Slot</div>
        <div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-bottom:10px">
          This flow creates a local practice duel and reserves your startup slot. It does not auto-run your agent.
          After setup, Founder Arena will give you a terminal attach command.
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">YOUR AGENT NAME</label>
            <input type="text" id="qp-agent" value="MyFounder" style="font-size:11px" />
          </div>
          <div>
            <label style="font-size:9px">STARTUP NAME</label>
            <input type="text" id="qp-startup" value="NeuralForge" style="font-size:11px" />
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px">
          <div>
            <label style="font-size:9px">SECTOR</label>
            <select id="qp-sector" style="font-size:11px">
              <option value="ai">AI</option>
              <option value="fintech">Fintech</option>
              <option value="saas">SaaS</option>
              <option value="crypto">Crypto</option>
              <option value="healthtech">HealthTech</option>
              <option value="gaming">Gaming</option>
              <option value="edtech">EdTech</option>
              <option value="greentech">GreenTech</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px">BOT DIFFICULTY</label>
            <select id="qp-tier" style="font-size:11px">
              <option value="baseline">Baseline (Balanced)</option>
              <option value="pressure">Pressure (Aggressive)</option>
              <option value="discipline">Discipline (Lean)</option>
              <option value="gauntlet">Gauntlet (All Types)</option>
            </select>
          </div>
        </div>
        <label style="font-size:9px">LOCAL RUNNER STRATEGY</label>
        <select id="qp-strategy" style="font-size:11px">
          <option value="balanced">Balanced</option>
          <option value="aggressive">Aggressive</option>
          <option value="lean">Lean</option>
          <option value="chaos">Chaos</option>
        </select>
      </div>

      <div id="qp-progress" style="margin-bottom:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:12px">
        <div id="qp-step" style="font-size:10px;color:var(--text-muted);text-align:center;font-weight:600">Ready to launch</div>
        <div class="progress-bar-track" style="margin-top:8px">
          <div id="qp-bar" class="progress-bar-fill" style="width:0%"></div>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="qp-cancel">Cancel</button>
        <button class="btn-game btn-game-green" id="qp-go" style="flex:2">&#9654; Create Practice Lobby</button>
      </div>
    `,this.open(),this._modal.querySelector("#qp-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#qp-go").addEventListener("click",async()=>{const e=this._modal.querySelector("#qp-go"),t=this._modal.querySelector("#qp-step"),n=this._modal.querySelector("#qp-bar");e.disabled=!0,e.textContent="Launching...";try{t.textContent="Creating practice lobby...",t.style.color="#F0B429",n.style.width="20%";const i=this._modal.querySelector("#qp-tier").value,s=await this.store.createGame({name:"Quick Play",gameMode:"competitive_mode",maxTurns:32,benchmarkTier:i});t.textContent="Reserving your startup slot...",n.style.width="45%";const o={agentName:this._modal.querySelector("#qp-agent").value.trim()||"MyFounder",startupName:this._modal.querySelector("#qp-startup").value.trim()||"NeuralForge",sector:this._modal.querySelector("#qp-sector").value,motto:"Ready to compete",strategy:this._modal.querySelector("#qp-strategy").value},a=await this.store.joinAsPlayer({agentName:o.agentName,startupName:o.startupName,sector:o.sector,motto:o.motto,strategyDescription:o.strategy});t.textContent="Practice lobby ready.",t.style.color="#22C55E",n.style.width="100%",setTimeout(()=>{this.close(),this.showLobby(s,o,a)},500)}catch(i){t.textContent=`Error: ${i.message}`,t.style.color="#EF4444",e.textContent="Retry",e.disabled=!1}})}showJoinExisting(){this._modal.innerHTML=`
      <h2>Watch Existing Game</h2>
      <div class="game-card">
        <div class="game-card-title" style="color:#22D3EE">Spectator Mode</div>
        <label>GAME ID</label>
        <input type="text" id="je-id" placeholder="Enter game ID" />
        <label>SPECTATOR TOKEN</label>
        <input type="text" id="je-token" placeholder="Enter spectator token" />
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="je-cancel">Cancel</button>
        <button class="btn-clean" id="je-watch" style="flex:2;border-color:rgba(34,211,238,0.3);color:#22D3EE">&#128065; Watch Game</button>
      </div>
    `,this.open(),this._modal.querySelector("#je-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#je-watch").addEventListener("click",()=>{const e=this._modal.querySelector("#je-id").value.trim(),t=this._modal.querySelector("#je-token").value.trim();e&&(this.store.watchGame(e,t||null),this.close())})}_renderTurningPoints(e){const t=(e==null?void 0:e.turning_points)||[];return t.length===0?'<div style="font-size:10px;color:var(--text-muted)">No replay turning points were recorded for this match.</div>':t.map((n,i)=>{var l,c,d,h;const s=((l=n.leader_decision)==null?void 0:l.intent)||((c=n.leader_actions)==null?void 0:c.join(", "))||"No public plan recorded.",o=((d=n.challenger_decision)==null?void 0:d.intent)||((h=n.challenger_actions)==null?void 0:h.join(", "))||"No challenger plan recorded.",a=n.leader_changed?"Lead Change":`${n.gap_change>=0?"+":""}${mt(n.gap_change)} gap swing`;return`
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:9px;color:#A78BFA;font-weight:800;text-transform:uppercase;letter-spacing:0.8px">Turning Point ${i+1}</div>
            <div style="font-size:8px;color:#22D3EE;border:1px solid rgba(34,211,238,0.2);background:rgba(34,211,238,0.08);border-radius:999px;padding:3px 8px">${a}</div>
            <div style="margin-left:auto;font-size:9px;color:var(--text-muted)">Week ${n.turn}</div>
          </div>
          <div style="font-size:12px;font-weight:800;color:var(--text);margin-top:8px">${n.headline}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px">
            <div style="background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.14);border-radius:10px;padding:10px">
              <div style="font-size:8px;color:#A78BFA;font-weight:700;letter-spacing:0.7px;text-transform:uppercase">${n.leader_startup}</div>
              <div style="font-size:10px;color:var(--text);line-height:1.45;margin-top:6px">${s}</div>
              <div style="font-size:9px;color:var(--text-muted);margin-top:8px">${mt(n.leader_score)} score</div>
            </div>
            <div style="background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.14);border-radius:10px;padding:10px">
              <div style="font-size:8px;color:#22D3EE;font-weight:700;letter-spacing:0.7px;text-transform:uppercase">${n.challenger_startup}</div>
              <div style="font-size:10px;color:var(--text);line-height:1.45;margin-top:6px">${o}</div>
              <div style="font-size:9px;color:var(--text-muted);margin-top:8px">${mt(n.challenger_score)} score</div>
            </div>
          </div>
        </div>
      `}).join("")}_renderOutcomeCards(e,t){const n=(e==null?void 0:e.startup_outcomes)||{},i=t.slice(1,3).map(s=>({startup:s,outcome:n[s.id]})).filter(({outcome:s})=>s);return i.length===0?"":i.map(({startup:s,outcome:o})=>{const a=o.runner_failure||null,l=(o.strengths||[]).map(d=>d.label).join(" · "),c=(o.gaps||[]).map(d=>d.label).join(" · ");return`
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:10px;font-weight:800;color:var(--text)">${s.startup_name}</div>
            <div style="font-size:8px;color:#FB923C;border:1px solid rgba(251,146,60,0.18);background:rgba(251,146,60,0.08);border-radius:999px;padding:3px 8px">${o.result.replace(/_/g," ")}</div>
          </div>
          <div style="font-size:10px;color:var(--text-dim);line-height:1.5;margin-top:8px">${o.headline}</div>
          ${a?this._renderRunnerFailure(a):""}
          ${l?`<div style="font-size:9px;color:#22C55E;margin-top:8px">Held up on: ${l}</div>`:""}
          ${c?`<div style="font-size:9px;color:#EF4444;margin-top:4px">Lost on: ${c}</div>`:""}
        </div>
      `}).join("")}_buildReplayRecapText(e,t,n){var c;const i=t[0],s=this.store.getShareUrl(),o=((e==null?void 0:e.turning_points)||[]).map((d,h)=>`${h+1}. ${d.headline}`).join(`
`),a=((e==null?void 0:e.runner_incidents)||[]).map(d=>`- ${d.startup_name}: ${d.label} - ${d.message}`).join(`
`),l=t.slice(1,3).map(d=>{var u,p;const h=(u=e==null?void 0:e.startup_outcomes)==null?void 0:u[d.id];return h?`- ${d.startup_name}: ${((p=h.runner_failure)==null?void 0:p.headline)||h.headline}`:null}).filter(Boolean).join(`
`);return[`${(e==null?void 0:e.winner_summary)||`${(i==null?void 0:i.startup_name)||"Unknown"} won the match.`}`,n&&i?`Winner score: ${mt(Dn(i))}`:null,s?`Replay: ${s}`:null,(c=e==null?void 0:e.practice_takeaway)!=null&&c.headline?`Practice takeaway: ${e.practice_takeaway.headline}`:null,a?`Runner issues:
${a}`:null,o?`Turning points:
${o}`:null,l?`Why they lost:
${l}`:null].filter(Boolean).join(`

`)}_formatShowmatchLabel(e,t="Showmatch"){const n=String(e||"").trim();return n?n.replace(/[_-]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,i=>i.toUpperCase()):t}_extractModelLabel(e){var i;const t=`${(e==null?void 0:e.agent_name)||""} ${(e==null?void 0:e.startup_name)||""}`.toLowerCase();return((i=[{token:"gpt",label:"GPT"},{token:"claude",label:"Claude"},{token:"gemini",label:"Gemini"},{token:"llama",label:"Llama"},{token:"mistral",label:"Mistral"},{token:"qwen",label:"Qwen"},{token:"deepseek",label:"DeepSeek"},{token:"grok",label:"Grok"}].find(s=>t.includes(s.token)))==null?void 0:i.label)||null}_buildFeaturedReplay(e,t,n,i){var C,E,T;const s=t[0]||null,o=t[1]||null,a=((e==null?void 0:e.turning_points)||[])[0]||null,l=((e==null?void 0:e.runner_incidents)||[])[0]||null,c=t.slice(1,3).map(R=>{var S;return(S=e==null?void 0:e.startup_outcomes)!=null&&S[R.id]?{startup:R,outcome:e.startup_outcomes[R.id]}:null}).find(Boolean),d=[s,o].map(R=>this._extractModelLabel(R)),h=s!=null&&s.strategy?this._formatShowmatchLabel(s.strategy):null,u=o!=null&&o.strategy?this._formatShowmatchLabel(o.strategy):null,p=Number(e==null?void 0:e.final_margin),m=Number.isFinite(p)&&p<=2.5,_=!!((e==null?void 0:e.turning_points)||[]).some(R=>R==null?void 0:R.leader_changed),g=(e==null?void 0:e.practice_takeaway)||null;let f=i?"Featured Duel":"Featured Replay",y=o?`${(s==null?void 0:s.startup_name)||"Unknown"} vs ${o.startup_name||"Unknown"}`:`${(s==null?void 0:s.startup_name)||(n==null?void 0:n.name)||"Founder Arena"}`,x=o?`${(s==null?void 0:s.agent_name)||"Unknown"} vs ${o.agent_name||"Unknown"}`:`${(s==null?void 0:s.agent_name)||(s==null?void 0:s.startup_name)||"Unknown"} spotlight`;i&&s&&o&&d[0]&&d[1]&&d[0]!==d[1]?(f="Model vs Model",y=`${d[0]} vs ${d[1]}`,x=`${s.startup_name} vs ${o.startup_name}`):i&&s&&o&&h&&u&&h!==u?(f="Doctrine vs Doctrine",y=`${h} vs ${u}`,x=`${s.startup_name} vs ${o.startup_name}`):n!=null&&n.benchmark_tier&&n.benchmark_tier!=="baseline"||g?(f="Benchmark Gauntlet",y=`${(s==null?void 0:s.startup_name)||"Unknown"} vs ${this._formatShowmatchLabel(n==null?void 0:n.benchmark_tier,"Benchmark")}`,x=(g==null?void 0:g.headline)||`${(n==null?void 0:n.queue)||"showmatch"} replay`):i&&(m||_)?(f="Underdog Challenge",y=o?`${(s==null?void 0:s.startup_name)||"Unknown"} vs ${o.startup_name||"Unknown"}`:y,x=m?`Finished within ${p.toFixed(1)} score`:"Lead changed during the replay"):t.length>2&&(f="Benchmark Gauntlet",y=`${(s==null?void 0:s.startup_name)||"Unknown"} vs ${Math.max(t.length-1,1)} challengers`,x=`${(n==null?void 0:n.queue)||"showmatch"} field`);const v=(a==null?void 0:a.headline)||((E=(C=c==null?void 0:c.outcome)==null?void 0:C.runner_failure)==null?void 0:E.headline)||((T=c==null?void 0:c.outcome)==null?void 0:T.headline)||(e==null?void 0:e.winner_summary)||`${(s==null?void 0:s.startup_name)||"Unknown"} won the match.`;return{formatLabel:f,matchupLabel:y,deckLabel:x,storyHook:v,topTurningPoint:a,topRunnerIssue:l,topLoser:c}}_buildSharePackage(e,t,n,i){var m,_,g;const s=n[0],o=n[1],a=this._buildFeaturedReplay(t,n,e,i),l=a.topTurningPoint,c=a.topRunnerIssue,d=a.topLoser,h=this.store.getShareUrl(),u=i?`${(s==null?void 0:s.startup_name)||"Unknown"} beat ${(o==null?void 0:o.startup_name)||"the field"} by ${(t==null?void 0:t.final_margin)!=null?`${mt(t.final_margin)} score`:"a narrow margin"}`:`${(s==null?void 0:s.startup_name)||"Unknown"} won Founder Arena`,p=[`${a.formatLabel}: ${a.matchupLabel}`,(t==null?void 0:t.winner_summary)||u,l!=null&&l.headline?`Turning point: ${l.headline}`:null,c!=null&&c.headline?`Runner issue: ${c.headline}`:null,d!=null&&d.outcome?`Why they lost: ${((m=d.outcome.runner_failure)==null?void 0:m.headline)||d.outcome.headline}`:null,(_=t==null?void 0:t.practice_takeaway)!=null&&_.headline?`Practice takeaway: ${t.practice_takeaway.headline}`:null,h||null].filter(Boolean);return{...a,headline:u,caption:p.join(`
`),featuredCard:[`${a.formatLabel} | ${a.matchupLabel}`,a.deckLabel?`Deck: ${a.deckLabel}`:null,`Headline: ${u}`,`Winner Summary: ${(t==null?void 0:t.winner_summary)||`${(s==null?void 0:s.startup_name)||"Unknown"} won the match.`}`,l!=null&&l.headline?`Turning Point: ${l.headline}`:null,c!=null&&c.headline?`Runner Issue: ${c.headline}`:null,d!=null&&d.outcome?`Why They Lost: ${((g=d.outcome.runner_failure)==null?void 0:g.headline)||d.outcome.headline}`:null,h?`Replay: ${h}`:null,"","Caption:",p.join(`
`)].filter(f=>f!=null).join(`
`)}}showPostGame(e={}){var m;const t=this.store.state.gameData;if(!t)return;const n=wr(t),i=Rs(t),s=t.summary||{},o=this.store.getShareUrl(),a=this._buildSharePackage(t,s,i,n),c=(e.entryMode||null)==="sharedReplay",d=i[0],h=i.slice(0,3),u=n?`${mt(Dn(d))} score`:uo(d==null?void 0:d.valuation),p=n?`${uo(d==null?void 0:d.valuation)} valuation`:`${(d==null?void 0:d.sector)||""}`;this._modal.innerHTML=`
      <h2 style="text-align:center">${c?"Replay Recap":"Game Over"}</h2>

      ${c?`
        <div style="margin:0 0 16px;padding:12px 14px;border-radius:14px;background:rgba(34,211,238,0.08);border:1px solid rgba(34,211,238,0.18)">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;border:1px solid rgba(34,211,238,0.22);background:rgba(34,211,238,0.1);border-radius:999px;padding:4px 8px">Shared Replay</div>
            <div style="font-size:9px;color:var(--text-muted)">${t.name||"Founder Arena"} &middot; ${t.queue||"showmatch"} &middot; ${t.benchmark_tier||"baseline"}</div>
          </div>
          <div style="font-size:11px;color:var(--text);font-weight:800;line-height:1.5;margin-top:8px">${(s==null?void 0:s.winner_summary)||"Replay summary is loading."}</div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">This replay link opens directly into the creator recap with winner, turning points, and copy-ready share assets.</div>
        </div>
      `:""}

      <div style="text-align:center;margin:20px 0;padding:20px;background:linear-gradient(180deg,rgba(255,184,0,0.08) 0%,rgba(255,184,0,0.02) 100%);border:1px solid rgba(255,184,0,0.15);border-radius:16px">
        <div style="font-size:28px;margin-bottom:6px">&#128081;</div>
        <div style="font-size:22px;font-weight:900;color:#FFB800;text-shadow:0 0 20px rgba(255,184,0,0.3)">${(d==null?void 0:d.startup_name)||"Unknown"}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;font-weight:500">Champion &middot; ${(d==null?void 0:d.agent_name)||""}</div>
        <div style="font-size:20px;font-weight:900;color:#FFB800;margin-top:8px">${u}</div>
        <div style="font-size:10px;color:var(--text-muted);margin-top:4px">${p}</div>
        ${s!=null&&s.winner_summary?`<div style="font-size:10px;color:var(--text-dim);line-height:1.5;max-width:520px;margin:10px auto 0">${s.winner_summary}</div>`:""}
      </div>

      <div style="margin:16px 0">
        ${h.map((_,g)=>{const f=["#FFB800","#94A3B8","#CD7F32"];return`
            <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:4px;
                        background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;transition:all 0.15s"
                 onmouseover="this.style.background='rgba(255,255,255,0.07)'" onmouseout="this.style.background='rgba(255,255,255,0.04)'">
              <div style="font-size:18px;width:30px;text-align:center">${["&#129351;","&#129352;","&#129353;"][g]}</div>
              <div style="flex:1">
                <div style="font-size:12px;font-weight:700">${_.startup_name}</div>
                <div style="font-size:9px;color:var(--text-muted)">${_.agent_name} &middot; ${_.sector}</div>
              </div>
              <div style="font-size:14px;font-weight:900;color:${f[g]};text-shadow:0 0 8px ${f[g]}33">${n?`${mt(Dn(_))} score`:uo(_.valuation)}</div>
            </div>
          `}).join("")}
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#A78BFA;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Replay Recap</div>
        <div style="padding:12px 14px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);margin-bottom:10px">
          <div style="display:flex;gap:14px;flex-wrap:wrap">
            ${(s==null?void 0:s.winner_score)!=null?`<div style="font-size:10px;color:var(--text-muted)">Winner: <span style="color:#FFB800;font-weight:800">${mt(s.winner_score)}</span></div>`:""}
            ${(s==null?void 0:s.runner_up_score)!=null?`<div style="font-size:10px;color:var(--text-muted)">Runner-up: <span style="color:#22D3EE;font-weight:800">${mt(s.runner_up_score)}</span></div>`:""}
            ${(s==null?void 0:s.final_margin)!=null?`<div style="font-size:10px;color:var(--text-muted)">Final margin: <span style="color:#A78BFA;font-weight:800">${mt(s.final_margin)}</span></div>`:""}
          </div>
          ${(m=s==null?void 0:s.practice_takeaway)!=null&&m.headline?`<div style="font-size:10px;color:#FB923C;line-height:1.5;margin-top:10px">Practice takeaway: ${s.practice_takeaway.headline}</div>`:""}
        </div>
        ${this._renderRunnerIncidents(s)}
        ${o?`
          <div style="padding:12px 14px;border-radius:12px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14);margin-bottom:10px">
            <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:6px">Replay Link</div>
            <div style="font-size:10px;color:var(--text-dim);line-height:1.5;word-break:break-word">${o}</div>
          </div>
        `:""}
        ${this._renderTurningPoints(s)}
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#22D3EE;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Share Package</div>
        <div style="padding:12px 14px;border-radius:12px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14);margin-bottom:10px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;border:1px solid rgba(34,211,238,0.22);background:rgba(34,211,238,0.1);border-radius:999px;padding:4px 8px">${a.formatLabel}</div>
            <div style="font-size:9px;color:var(--text-muted)">${a.matchupLabel}</div>
          </div>
          ${a.deckLabel?`<div style="font-size:10px;color:var(--text-dim);line-height:1.5;margin-top:8px">${a.deckLabel}</div>`:""}
          <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Headline</div>
          <div style="font-size:12px;color:var(--text);font-weight:800;line-height:1.45;margin-top:6px">${a.headline}</div>
          <div style="font-size:8px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;margin-top:12px">Caption</div>
          <div style="font-size:10px;color:var(--text-dim);line-height:1.55;white-space:pre-wrap;margin-top:6px">${a.caption}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
            <button class="btn-clean" id="pg-headline" style="flex:1;border-color:rgba(34,211,238,0.24);color:#22D3EE">Copy Headline</button>
            <button class="btn-clean" id="pg-caption" style="flex:1;border-color:rgba(34,211,238,0.24);color:#22D3EE">Copy Caption</button>
            <button class="btn-clean" id="pg-package" style="flex:1;border-color:rgba(34,211,238,0.24);color:#22D3EE">Copy Package</button>
          </div>
        </div>
      </div>

      <div style="margin:18px 0 10px">
        <div style="font-size:10px;color:#FB923C;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Why They Lost</div>
        ${this._renderOutcomeCards(s,i)||'<div style="font-size:10px;color:var(--text-muted)">Outcome diagnostics are not available for this match yet.</div>'}
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="pg-close">${c?"Keep Watching":"Close"}</button>
        <button class="btn-clean" id="pg-link" style="border-color:rgba(167,139,250,0.3);color:#A78BFA">Copy Link</button>
        <button class="btn-clean" id="pg-copy" style="border-color:rgba(34,211,238,0.3);color:#22D3EE">Copy Recap</button>
        <button class="btn-game btn-game-blue" id="pg-new" style="flex:2">&#9654; New Game</button>
      </div>
    `,this.open(),this._modal.querySelector("#pg-close").addEventListener("click",()=>this.close()),this._modal.querySelector("#pg-headline").addEventListener("click",async()=>{const _=this._modal.querySelector("#pg-headline");try{await navigator.clipboard.writeText(a.headline),_.textContent="Copied",setTimeout(()=>{_.textContent="Copy Headline"},1500)}catch{_.textContent="Copy Failed"}}),this._modal.querySelector("#pg-caption").addEventListener("click",async()=>{const _=this._modal.querySelector("#pg-caption");try{await navigator.clipboard.writeText(a.caption),_.textContent="Copied",setTimeout(()=>{_.textContent="Copy Caption"},1500)}catch{_.textContent="Copy Failed"}}),this._modal.querySelector("#pg-package").addEventListener("click",async()=>{const _=this._modal.querySelector("#pg-package");try{await navigator.clipboard.writeText(a.featuredCard),_.textContent="Copied",setTimeout(()=>{_.textContent="Copy Package"},1500)}catch{_.textContent="Copy Failed"}}),this._modal.querySelector("#pg-link").addEventListener("click",async()=>{const _=this._modal.querySelector("#pg-link");if(!o){_.textContent="No Link";return}try{await navigator.clipboard.writeText(o),_.textContent="Link Copied",setTimeout(()=>{_.textContent="Copy Link"},1500)}catch{_.textContent="Copy Failed"}}),this._modal.querySelector("#pg-copy").addEventListener("click",async()=>{const _=this._modal.querySelector("#pg-copy"),g=this._buildReplayRecapText(s,i,n);try{await navigator.clipboard.writeText(g),_.textContent="Copied",setTimeout(()=>{_.textContent="Copy Recap"},1500)}catch{_.textContent="Copy Failed"}}),this._modal.querySelector("#pg-new").addEventListener("click",()=>{this.close(),this.showCreateGame()})}}function uo(r){if(r==null)return"$0";const e=Number(r);return e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(0)}K`:`$${e.toFixed(0)}`}class dv{constructor(e,t,n){this.store=t,this.scene=n,this.container=e,this._postGameShown=!1,this._buildHeader(),this.rankings=new rv(e,t),this.timeline=new av(e),this.detail=new lv(e),this.controls=new cv(e,t),this.rankings.onSelect(i=>{t.selectStartup(i),n&&n.focusOnPod(i)}),n&&n.onPodClick(i=>{t.selectStartup(i),n.focusOnPod(i)})}_buildHeader(){this._header=document.createElement("div"),this._header.className="header",this._header.innerHTML=`
      <div class="logo">
        <div class="logo-icon">FA</div>
        <div class="logo-text">FOUNDER ARENA<span>STARTUP SIMULATOR</span></div>
      </div>
      <div class="header-status" id="header-status">
        <span class="dot"></span>READY
      </div>
      <button class="btn-game btn-game-green" id="btn-quick-play">&#9654; PRACTICE LOBBY</button>
      <button class="btn-clean" id="btn-new-game">+ NEW GAME</button>
      <button class="btn-ghost" id="btn-watch">&#128065; WATCH</button>
    `,this.container.appendChild(this._header),this._matchStrip=document.createElement("div"),this._matchStrip.className="match-strip hidden",this.container.appendChild(this._matchStrip),this._spectatorEntry=document.createElement("div"),this._spectatorEntry.className="spectator-entry hidden",this.container.appendChild(this._spectatorEntry),this._featuredReplayPage=document.createElement("div"),this._featuredReplayPage.className="spectator-entry hidden",this.container.appendChild(this._featuredReplayPage),this._featuredSlotPage=document.createElement("div"),this._featuredSlotPage.className="spectator-entry hidden",this.container.appendChild(this._featuredSlotPage),this._discoveryShelf=document.createElement("div"),this._discoveryShelf.className="spectator-entry hidden",this.container.appendChild(this._discoveryShelf),this._statusEl=this._header.querySelector("#header-status"),this._header.querySelector("#btn-quick-play").addEventListener("click",()=>{this.controls.quickPlayVsBots()}),this._header.querySelector("#btn-new-game").addEventListener("click",()=>{this.controls.showCreateGame()}),this._header.querySelector("#btn-watch").addEventListener("click",()=>{this.controls.showJoinExisting()})}_formatDelta(e){const t=Number(e||0);return Math.abs(t)<.05?"Flat":`${t>0?"+":""}${t.toFixed(1)}`}_pressurePills(e){return((e==null?void 0:e.risk_tags)||[]).slice(0,2).map(n=>`<span class="signal-pill signal-pill-${n.tone||"neutral"}">${n.label||n}</span>`).join("")}_runnerAlertTone(e){return{error:"danger",warn:"warning",info:"neutral"}[e==null?void 0:e.severity]||"neutral"}_copyButtonFeedback(e,t,n){e&&(e.textContent=n,clearTimeout(e._copyTimer),e._copyTimer=setTimeout(()=>{e.textContent=t},1500))}_isFeaturedReplayPage(e){var t,n,i,s;return!!((t=e.entryContext)!=null&&t.viaSharedLink&&((n=e.entryContext)==null?void 0:n.requestedPhase)==="replay"&&((i=e.gameData)==null?void 0:i.phase)==="finished"&&((s=e.gameData)!=null&&s.summary))}_isReplayCardLayout(e){var t;return this._isFeaturedReplayPage(e)&&((t=e.entryContext)==null?void 0:t.layout)==="card"}_isReplaySocialLayout(e){var t;return this._isFeaturedReplayPage(e)&&((t=e.entryContext)==null?void 0:t.layout)==="social"}_isFeaturedSlotPage(e){var t;return!!(!e.gameId&&((t=e.entryContext)!=null&&t.slot)&&e.featuredFeed)}_slotTitle(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}_queryUrlFromPayload(e){if(!e||typeof window>"u")return"";const t=new URL(window.location.href);return t.search="",Object.entries(e).forEach(([n,i])=>{i!=null&&i!==""&&t.searchParams.set(n,String(i))}),t.toString()}_artifactUrl(e,t,n=""){var s,o;const i=((s=e==null?void 0:e.artifacts)==null?void 0:s[`${t}_query`])||((o=e==null?void 0:e.default_artifact)==null?void 0:o.query)||null;return this._queryUrlFromPayload(i)||n}_socialCaption(e,t,n){var i,s,o;return[t||null,(e==null?void 0:e.winner_summary)||null,n?`Story hook: ${n}`:null,(s=(i=e==null?void 0:e.turning_points)==null?void 0:i[0])!=null&&s.headline?`Turning point: ${e.turning_points[0].headline}`:null,(o=e==null?void 0:e.practice_takeaway)!=null&&o.headline?`Takeaway: ${e.practice_takeaway.headline}`:null].filter(Boolean).join(`
`)}_buildReplayEmbedSnippet(e,t="Founder Arena Featured Replay"){return e?`<iframe src="${e}" title="${t}" width="720" height="900" style="width:100%;max-width:720px;height:900px;border:0;border-radius:16px;overflow:hidden;" loading="lazy"></iframe>`:""}_syncReplayLayoutChrome(e){var d;const t=this._isFeaturedReplayPage(e),n=this._isReplayCardLayout(e),i=this._isReplaySocialLayout(e)||((d=e.entryContext)==null?void 0:d.layout)==="social",s=this._isFeaturedSlotPage(e),o=t||s;this.rankings.el.style.display=o?"none":"",this.timeline._wrapper.style.display=o?"none":"",this.detail.el.style.display=o?"none":"";const a=this._header.querySelector("#btn-quick-play"),l=this._header.querySelector("#btn-new-game"),c=this._header.querySelector("#btn-watch");[a,l,c].forEach(h=>{h&&(h.style.display=n||i?"none":"")})}_updateDiscoveryShelf(e){if(!!(e.gameId||e.gameData)||this._isFeaturedSlotPage(e)){this._discoveryShelf.classList.add("hidden"),this._discoveryShelf.innerHTML="";return}const n=Array.isArray(e.games)?e.games:[],i=e.leaderboardData||{},s=e.featuredFeed||{},o=(s.live_now||[]).length>0?s.live_now:n.filter(m=>m.phase==="playing").sort((m,_)=>(_.turn||0)-(m.turn||0)).slice(0,3),a=(s.featured_replays||[]).length>0?(s.featured_replays||[]).slice(0,4):[];if(a.length===0){for(const m of i.leaderboard||[])if(!(m.game_mode!=="competitive_mode"||!m.was_winner)&&!a.some(_=>_.game_id===m.game_id)&&(a.push(m),a.length>=4))break}const l=(i.agent_rankings||[]).slice(0,5),c=[{label:"Daily Featured Duel",accent:"#FFB800",item:s.daily_featured_duel,mode:"slot",slot:"daily_featured_duel"},{label:"Weekly Upset Recap",accent:"#A78BFA",item:s.weekly_upset_recap,mode:"slot",slot:"weekly_upset_recap"},{label:"Beat This Benchmark",accent:"#22D3EE",item:s.benchmark_challenge,mode:"slot",slot:"benchmark_challenge"}];if(o.length===0&&a.length===0&&l.length===0&&!c.some(m=>m.item)){this._discoveryShelf.classList.add("hidden"),this._discoveryShelf.innerHTML="";return}const d=o.length>0?o.map(m=>`
          <button class="btn-clean discovery-link" data-mode="watch" data-game="${m.game_id||m.id}" data-spectator="${m.spectator_token||""}" style="text-align:left;padding:10px 12px;border-color:rgba(34,211,238,0.18);background:rgba(34,211,238,0.06)">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <div style="font-size:10px;color:#22D3EE;font-weight:800">${m.game_name||m.name||"Founder Arena"}</div>
              <div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(34,211,238,0.16);border-radius:999px;padding:2px 6px">Week ${m.turn||0}/${m.max_turns||32}</div>
            </div>
            <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">${m.queue||"showmatch"} &middot; ${m.benchmark_tier||"baseline"} &middot; ${m.players||0} founders</div>
            ${m.why_ahead?`<div style="font-size:9px;color:var(--text-muted);line-height:1.45;margin-top:6px">${m.why_ahead}</div>`:""}
          </button>
        `).join(""):'<div style="font-size:10px;color:var(--text-muted)">No live showmatches right now.</div>',h=a.length>0?a.map(m=>`
          <button class="btn-clean discovery-link" data-mode="replay" data-game="${m.game_id}" data-spectator="${m.spectator_token||""}" style="text-align:left;padding:10px 12px;border-color:rgba(255,184,0,0.18);background:rgba(255,184,0,0.06)">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <div style="font-size:10px;color:#FFB800;font-weight:800">${m.winner_startup||m.startup_name}</div>
              <div style="font-size:8px;color:var(--text-muted);border:1px solid rgba(255,184,0,0.16);border-radius:999px;padding:2px 6px">${Number(m.winner_score||m.score||m.official_metric||0).toFixed(1)} score</div>
            </div>
            <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">${m.format_label||"Featured Replay"} &middot; ${m.queue||"showmatch"} &middot; ${m.winner_agent||m.agent_name}</div>
            <div style="font-size:9px;color:var(--text-muted);line-height:1.45;margin-top:6px">${m.story_hook||m.turning_point_headline||"Replay summary is loading."}</div>
          </button>
        `).join(""):'<div style="font-size:10px;color:var(--text-muted)">No finished featured replays yet.</div>',u=l.length>0?l.map((m,_)=>`
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:${_===l.length-1?"none":"1px solid rgba(255,255,255,0.06)"}">
            <div>
              <div style="font-size:10px;color:var(--text);font-weight:800">${_+1}. ${m.agent_name}</div>
              <div style="font-size:9px;color:var(--text-dim);margin-top:4px">${m.competitive_wins||0} comp wins &middot; ${m.games_played||0} games</div>
            </div>
            <div style="font-size:10px;color:#22D3EE;font-weight:800">${Number(m.avg_score||0).toFixed(1)} avg</div>
          </div>
        `).join(""):'<div style="font-size:10px;color:var(--text-muted)">Leaderboard is still warming up.</div>',p=c.map(m=>{var y;if(!m.item)return`
          <div style="padding:12px 14px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:9px;color:${m.accent};font-weight:800;letter-spacing:0.8px;text-transform:uppercase">${m.label}</div>
            <div style="font-size:10px;color:var(--text-muted);line-height:1.5;margin-top:10px">Not enough finished matches yet to publish this slot.</div>
          </div>
        `;const _=m.item.default_artifact||null,g=m.item.artifact_memory||null,f=m.item.editorial_pick||null;return`
        <button class="btn-clean discovery-link" data-mode="${m.mode}" data-slot="${m.slot}" data-game="${m.item.game_id}" data-spectator="${m.item.spectator_token||""}" data-phase="${(_==null?void 0:_.phase)||""}" data-layout="${(_==null?void 0:_.layout)||""}" data-slot-layout="${(_==null?void 0:_.slot_layout)||""}" style="text-align:left;padding:12px 14px;border-color:${m.accent}2e;background:${m.accent}12">
          <div style="font-size:9px;color:${m.accent};font-weight:800;letter-spacing:0.8px;text-transform:uppercase">${m.label}</div>
          <div style="font-size:12px;color:var(--text);font-weight:800;line-height:1.4;margin-top:10px">${m.item.headline||`${m.item.winner_startup} replay`}</div>
          <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:8px">${m.item.matchup_label||m.item.game_name||"Featured replay"}</div>
          ${f!=null&&f.action_label?`<div style="font-size:8px;color:#FCA5A5;font-weight:800;letter-spacing:0.7px;text-transform:uppercase;margin-top:8px">${f.action_label}</div>`:""}
          ${(y=m.item.artifact_focus)!=null&&y.label?`<div style="font-size:8px;color:#FCD34D;font-weight:800;letter-spacing:0.7px;text-transform:uppercase;margin-top:8px">${m.item.artifact_focus.label}</div>`:""}
          ${g!=null&&g.leader_label?`<div style="font-size:8px;color:#93C5FD;line-height:1.45;margin-top:5px">Slot memory: ${g.leader_label}</div>`:""}
          <div style="font-size:8px;color:var(--text-muted);line-height:1.45;margin-top:5px">${(f==null?void 0:f.format_summary)||(_==null?void 0:_.reason)||"Featured packaging is loading."}</div>
          <div style="font-size:9px;color:var(--text-muted);line-height:1.45;margin-top:6px">${(f==null?void 0:f.shelf_kicker)||m.item.story_hook||m.item.winner_summary||"Replay story is loading."}</div>
        </button>
      `}).join("");this._discoveryShelf.classList.remove("hidden"),this._discoveryShelf.innerHTML=`
      <div class="spectator-entry-card">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">Watch Founder Arena</span>
          <span class="spectator-entry-meta">Featured live matches, replays, and the public ladder</span>
        </div>
        <div class="spectator-entry-headline">Spectator mode should start with a story, not an empty shell.</div>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:14px">${p}</div>
        <div class="spectator-entry-summary-grid" style="margin-top:14px">
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Live Now</div>
            <div style="display:grid;gap:8px;margin-top:8px">${d}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Featured Replays</div>
            <div style="display:grid;gap:8px;margin-top:8px">${h}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Top Agents</div>
            <div style="margin-top:8px">${u}</div>
          </div>
        </div>
      </div>
    `,this._discoveryShelf.querySelectorAll(".discovery-link").forEach(m=>{m.addEventListener("click",()=>{const _=m.dataset.game,g=m.dataset.mode,f=m.dataset.spectator||null,y=m.dataset.slot||null,x=m.dataset.phase||null,v=m.dataset.layout||null,C=m.dataset.slotLayout||null;if(g==="slot"&&y){if(_&&(x||v)){this.store.watchGame(_,f,{viaSharedLink:!0,requestedPhase:x||"replay",layout:v||null,slot:y});return}this.store.openFeaturedSlot(y,{viaSharedLink:!0,layout:C||null});return}if(_){if(g==="replay"){this.store.watchGame(_,f,{viaSharedLink:!0,requestedPhase:"replay"});return}this.store.watchGame(_,f)}})})}_updateFeaturedReplayPage(e){var O;if(!this._isFeaturedReplayPage(e)){this._featuredReplayPage.classList.add("hidden"),this._featuredReplayPage.innerHTML="";return}const t=e.gameData||{},n=t.summary||{},i=this.store.startupList||[],s=(t==null?void 0:t.rank_basis)==="score",o=this._isReplayCardLayout(e),a=this._isReplaySocialLayout(e),l=i[0]||null,c=i[1]||null,d=this.store.getShareUrl({layout:null}),h=this.store.getShareUrl({layout:"card"}),u=this.store.getShareUrl({layout:"social"}),p=this.controls._buildSharePackage(t,n,i,s),m=this.controls._buildReplayRecapText(n,i,s),_=this._buildReplayEmbedSnippet(h,`${p.headline||"Founder Arena Featured Replay"}`),g=this._socialCaption(n,p.headline,p.storyHook),f=i.slice(0,3);this._featuredReplayPage.classList.remove("hidden"),this._featuredReplayPage.innerHTML=`
      <div class="spectator-entry-card spectator-entry-card-replay" style="padding:${a?"22px 20px":o?"16px":"18px 20px"};max-width:${a?"760px":o?"780px":"none"};margin:${o||a?"0 auto":"0"};background:
        radial-gradient(circle at top left, rgba(255,184,0,0.12), transparent 32%),
        radial-gradient(circle at top right, rgba(34,211,238,0.12), transparent 28%),
        linear-gradient(180deg, rgba(8,15,24,0.94), rgba(8,12,18,0.98));border-color:rgba(255,255,255,0.08)">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">${a?"Social Card":o?"Replay Card":"Featured Replay Page"}</span>
          <span class="spectator-entry-meta">${p.formatLabel} &middot; ${t.queue||"showmatch"} &middot; ${t.benchmark_tier||"baseline"} &middot; ID ${e.gameId||""}</span>
        </div>
        <div class="spectator-entry-hero" style="align-items:flex-start">
          <div style="flex:1 1 460px;min-width:0">
            <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.9px;text-transform:uppercase">${p.matchupLabel}</div>
            <div class="spectator-entry-headline" style="font-size:${a?"30px":o?"22px":"26px"};line-height:1.15;margin-top:8px">${p.headline}</div>
            <div class="spectator-entry-subline" style="margin-top:10px;max-width:760px;line-height:1.6">${n.winner_summary||p.storyHook}</div>
            ${p.deckLabel?`<div class="spectator-entry-subline" style="margin-top:8px;color:#CBD5E1">${p.deckLabel}</div>`:""}
            ${a?`<div style="margin-top:14px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);font-size:11px;color:var(--text);line-height:1.65;white-space:pre-wrap">${g}</div>`:""}
            <div class="spectator-entry-actions" style="margin-top:14px">
              <button class="btn-clean spectator-entry-action" id="featured-open-recap">Open Recap</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-link">Copy Link</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-card-link">Copy Card Link</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-social-link">Copy Social Link</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-embed">Copy Embed</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-headline">Copy Headline</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-caption">Copy Caption</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-social-caption">Copy Social Caption</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-package">Copy Package</button>
              <button class="btn-clean spectator-entry-action" id="featured-copy-recap">Copy Recap</button>
            </div>
          </div>
          <div class="spectator-entry-scorecard" style="min-width:220px">
            <div style="font-size:8px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Champion</div>
            <div class="spectator-entry-score" style="margin-top:8px">${(l==null?void 0:l.startup_name)||"Unknown"}</div>
            <div class="spectator-entry-score-meta">${(l==null?void 0:l.agent_name)||"Unknown founder"}</div>
            <div class="spectator-entry-score-meta" style="margin-top:10px">${n.final_margin!=null?`${n.final_margin.toFixed(1)} score margin`:"Final replay"}</div>
          </div>
        </div>

        <div class="spectator-entry-summary-grid" style="margin-top:18px;grid-template-columns:${a?"repeat(2,minmax(0,1fr))":""}">
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Format</div>
            <div class="spectator-entry-cell-value">${p.formatLabel}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Winner</div>
            <div class="spectator-entry-cell-value">${(l==null?void 0:l.startup_name)||"Unknown"}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Runner-up</div>
            <div class="spectator-entry-cell-value">${(c==null?void 0:c.startup_name)||"Unknown"}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Margin</div>
            <div class="spectator-entry-cell-value">${n.final_margin!=null?`${n.final_margin.toFixed(1)} score`:"N/A"}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Story Hook</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${p.storyHook||"Replay story is loading."}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Top Turning Point</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${((O=p.topTurningPoint)==null?void 0:O.headline)||"Turning points are loading."}</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:${o||a?"1fr":"minmax(0,1.4fr) minmax(280px,0.9fr)"};gap:16px;margin-top:18px">
          <div style="display:grid;gap:16px">
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#A78BFA;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Replay Narrative</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.65;margin-top:10px;white-space:pre-wrap">${m}</div>
            </div>
            ${a?"":`<div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#A78BFA;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Turning Points</div>
              <div style="margin-top:12px">${this.controls._renderTurningPoints(n)}</div>
            </div>`}
            ${o||a?"":`<div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#FB923C;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Why They Lost</div>
              <div style="margin-top:12px">${this.controls._renderOutcomeCards(n,i)||'<div style="font-size:10px;color:var(--text-muted)">Outcome diagnostics are not available for this match yet.</div>'}</div>
            </div>`}
          </div>
          <div style="display:grid;gap:16px">
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,184,0,0.06);border:1px solid rgba(255,184,0,0.14)">
              <div style="font-size:9px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Podium Path</div>
              <div style="display:grid;gap:8px;margin-top:12px">
                ${f.map((U,G)=>`
                  <button class="btn-clean featured-replay-select" data-id="${U.id}" style="text-align:left;padding:10px 12px;border-color:${G===0?"rgba(255,184,0,0.22)":"rgba(255,255,255,0.08)"};background:${G===0?"rgba(255,184,0,0.08)":"rgba(255,255,255,0.03)"}">
                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
                      <div style="font-size:10px;color:var(--text);font-weight:800">${G+1}. ${U.startup_name}</div>
                      <div style="font-size:8px;color:${G===0?"#FFB800":"#94A3B8"};font-weight:800">${G===0?"Winner":G===1?"Runner-up":"Podium"}</div>
                    </div>
                    <div style="font-size:9px;color:var(--text-dim);line-height:1.5;margin-top:6px">${U.agent_name||""} &middot; ${U.strategy||U.sector||"competitive"}</div>
                  </button>
                `).join("")}
              </div>
            </div>
            <div style="padding:14px 16px;border-radius:14px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14)">
              <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Share Package</div>
              <div style="font-size:12px;color:var(--text);font-weight:800;line-height:1.45;margin-top:10px">${p.headline}</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;white-space:pre-wrap;margin-top:10px">${p.caption}</div>
            </div>
            ${o||a?"":`<div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Runner Issues</div>
              <div style="margin-top:12px">${this.controls._renderRunnerIncidents(n)}</div>
            </div>`}
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#94A3B8;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">${a?"Social Link":o?"Card Link":"Replay Link"}</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${a?u:o?h:d||"No replay link available."}</div>
              ${!o&&!a?`<div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-top:10px">Card export: ${h}</div><div style="font-size:9px;color:var(--text-muted);line-height:1.5;margin-top:6px">Social export: ${u}</div>`:""}
            </div>
          </div>
        </div>
      </div>
    `;const y=this._featuredReplayPage.querySelector("#featured-open-recap"),x=this._featuredReplayPage.querySelector("#featured-copy-link"),v=this._featuredReplayPage.querySelector("#featured-copy-card-link"),C=this._featuredReplayPage.querySelector("#featured-copy-social-link"),E=this._featuredReplayPage.querySelector("#featured-copy-embed"),T=this._featuredReplayPage.querySelector("#featured-copy-headline"),R=this._featuredReplayPage.querySelector("#featured-copy-caption"),S=this._featuredReplayPage.querySelector("#featured-copy-social-caption"),b=this._featuredReplayPage.querySelector("#featured-copy-package"),P=this._featuredReplayPage.querySelector("#featured-copy-recap");y==null||y.addEventListener("click",()=>{this.controls.showPostGame({entryMode:"sharedReplay"})}),x==null||x.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(d||""),this._copyButtonFeedback(x,"Copy Link","Link Copied")}catch{this._copyButtonFeedback(x,"Copy Link","Copy Failed")}}),v==null||v.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(h||""),this._copyButtonFeedback(v,"Copy Card Link","Card Link Copied")}catch{this._copyButtonFeedback(v,"Copy Card Link","Copy Failed")}}),C==null||C.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(u||""),this._copyButtonFeedback(C,"Copy Social Link","Social Link Copied")}catch{this._copyButtonFeedback(C,"Copy Social Link","Copy Failed")}}),E==null||E.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(_||""),this._copyButtonFeedback(E,"Copy Embed","Embed Copied")}catch{this._copyButtonFeedback(E,"Copy Embed","Copy Failed")}}),T==null||T.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p.headline||""),this._copyButtonFeedback(T,"Copy Headline","Headline Copied")}catch{this._copyButtonFeedback(T,"Copy Headline","Copy Failed")}}),R==null||R.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p.caption||""),this._copyButtonFeedback(R,"Copy Caption","Caption Copied")}catch{this._copyButtonFeedback(R,"Copy Caption","Copy Failed")}}),S==null||S.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(g||""),this._copyButtonFeedback(S,"Copy Social Caption","Social Caption Copied")}catch{this._copyButtonFeedback(S,"Copy Social Caption","Copy Failed")}}),b==null||b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(p.featuredCard||""),this._copyButtonFeedback(b,"Copy Package","Package Copied")}catch{this._copyButtonFeedback(b,"Copy Package","Copy Failed")}}),P==null||P.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(m||""),this._copyButtonFeedback(P,"Copy Recap","Recap Copied")}catch{this._copyButtonFeedback(P,"Copy Recap","Copy Failed")}}),this._featuredReplayPage.querySelectorAll(".featured-replay-select").forEach(U=>{U.addEventListener("click",()=>{var X,W;const G=U.dataset.id;G&&(this.store.selectStartup(G),(W=(X=this.scene)==null?void 0:X.focusOnPod)==null||W.call(X,G))})})}_updateFeaturedSlotPage(e){var X,W,Z,V,se,de;if(!this._isFeaturedSlotPage(e)){this._featuredSlotPage.classList.add("hidden"),this._featuredSlotPage.innerHTML="";return}const t=(X=e.entryContext)==null?void 0:X.slot,n=e.featuredFeed||{},i=(n==null?void 0:n[t])||null,s=this._slotTitle(t),o=this.store.getFeaturedSlotUrl(t);if(this._featuredSlotPage.classList.remove("hidden"),!i){this._featuredSlotPage.innerHTML=`
        <div class="spectator-entry-card spectator-entry-card-replay" style="padding:18px 20px;max-width:900px;margin:0 auto">
          <div class="spectator-entry-topline">
            <span class="spectator-entry-badge">${s}</span>
            <span class="spectator-entry-meta">Featured slot page</span>
          </div>
          <div class="spectator-entry-headline">${s} is loading.</div>
          <div class="spectator-entry-subline" style="margin-top:10px">The featured feed has not produced this slot yet. Keep this URL as the canonical destination and it will populate when the feed has enough finished matches.</div>
        </div>
      `;return}const a=`${window.location.origin}${window.location.pathname}?game=${encodeURIComponent(i.game_id)}${i.spectator_token?`&spectator=${encodeURIComponent(i.spectator_token)}`:""}&phase=replay`,l=i.default_artifact||null,c=i.artifact_memory||null,d=i.editorial_pick||null,h=(l==null?void 0:l.label)||"Featured Pick",u=(l==null?void 0:l.reason)||((W=i.artifact_focus)==null?void 0:W.reason)||"",p=(c==null?void 0:c.reason)||((Z=i.artifact_focus)==null?void 0:Z.memory_reason)||"",m=((V=e.entryContext)==null?void 0:V.layout)==="social"||!((se=e.entryContext)!=null&&se.layout)&&(l==null?void 0:l.slot_layout)==="social",_=this._artifactUrl(i,"card",`${a}&layout=card`),g=this._artifactUrl(i,"social",`${a}&layout=social`),f=this._queryUrlFromPayload(l==null?void 0:l.query)||g,y=this._buildReplayEmbedSnippet(_,`${s} | Founder Arena`),x=i.social_caption||[i.headline||`${i.winner_startup} won the match.`,i.winner_summary||null,i.story_hook?`Story hook: ${i.story_hook}`:null,i.turning_point_headline?`Turning point: ${i.turning_point_headline}`:null,i.practice_takeaway?`Takeaway: ${i.practice_takeaway}`:null].filter(Boolean).join(`
`);this._featuredSlotPage.innerHTML=`
      <div class="spectator-entry-card spectator-entry-card-replay" style="padding:${m?"22px 20px":"18px 20px"};max-width:${m?"760px":"960px"};margin:0 auto;background:
        radial-gradient(circle at top left, rgba(255,184,0,0.12), transparent 32%),
        radial-gradient(circle at top right, rgba(34,211,238,0.12), transparent 28%),
        linear-gradient(180deg, rgba(8,15,24,0.94), rgba(8,12,18,0.98));border-color:rgba(255,255,255,0.08)">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">${m?`${s} Social`:s}</span>
          <span class="spectator-entry-meta">Canonical slot page &middot; ${i.format_label||"Featured Replay"} &middot; ${i.queue||"showmatch"}${(de=i.artifact_focus)!=null&&de.label?` &middot; ${i.artifact_focus.label}`:""}</span>
        </div>
        <div class="spectator-entry-hero" style="align-items:flex-start">
          <div style="flex:1 1 520px;min-width:0">
            <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.9px;text-transform:uppercase">${i.matchup_label||i.game_name||s}</div>
            <div class="spectator-entry-headline" style="font-size:${m?"30px":"28px"};line-height:1.15;margin-top:8px">${i.headline||`${i.winner_startup} won the slot`}</div>
            <div class="spectator-entry-subline" style="margin-top:10px;max-width:760px;line-height:1.6">${i.story_hook||i.winner_summary||"Featured story is loading."}</div>
            ${i.deck_label?`<div class="spectator-entry-subline" style="margin-top:8px;color:#CBD5E1">${i.deck_label}</div>`:""}
            ${u?`<div class="spectator-entry-subline" style="margin-top:8px;color:#FCD34D">Promoted surface: ${h}. ${u}.</div>`:""}
            ${p?`<div class="spectator-entry-subline" style="margin-top:8px;color:#93C5FD">Slot memory: ${p}</div>`:""}
            ${d!=null&&d.why_today?`<div style="margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(252,165,165,0.08);border:1px solid rgba(252,165,165,0.16)">
              <div style="font-size:8px;color:#FCA5A5;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Why This Format Today</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;margin-top:8px">${d.why_today}</div>
            </div>`:""}
            ${m?`<div style="margin-top:14px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);font-size:11px;color:var(--text);line-height:1.65;white-space:pre-wrap">${x}</div>`:""}
            <div class="spectator-entry-actions" style="margin-top:14px">
              <button class="btn-clean spectator-entry-action" id="slot-open-featured-pick">${(d==null?void 0:d.action_label)||`Open ${h}`}</button>
              <button class="btn-clean spectator-entry-action" id="slot-open-replay">Open Replay</button>
              <button class="btn-clean spectator-entry-action" id="slot-open-card">Open Card</button>
              <button class="btn-clean spectator-entry-action" id="slot-open-social">Open Social</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-slot-link">Copy Slot Link</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-featured-link">Copy ${(d==null?void 0:d.action_label)||h}</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-replay-link">Copy Replay Link</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-card-link">Copy Card Link</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-social-link">Copy Social Link</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-social-caption">Copy Social Caption</button>
              <button class="btn-clean spectator-entry-action" id="slot-copy-embed">Copy Embed</button>
            </div>
          </div>
          <div class="spectator-entry-scorecard" style="min-width:220px">
            <div style="font-size:8px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Current Pick</div>
            <div class="spectator-entry-score" style="margin-top:8px">${i.winner_startup||"Unknown"}</div>
            <div class="spectator-entry-score-meta">${i.winner_agent||"Unknown founder"}</div>
            <div class="spectator-entry-score-meta" style="margin-top:10px">${i.final_margin!=null?`${Number(i.final_margin).toFixed(1)} score margin`:"Featured replay"}</div>
          </div>
        </div>

        <div class="spectator-entry-summary-grid" style="margin-top:18px;grid-template-columns:${m?"repeat(2,minmax(0,1fr))":""}">
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Slot</div>
            <div class="spectator-entry-cell-value">${s}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Format</div>
            <div class="spectator-entry-cell-value">${i.format_label||"Featured Replay"}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Matchup</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${i.matchup_label||i.game_name||"Featured replay"}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Story Hook</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${i.story_hook||i.winner_summary||"Featured story is loading."}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Promoted Surface</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${(d==null?void 0:d.format_summary)||`${h}${u?` · ${u}`:""}`}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Slot Memory</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${p||"Slot history is still warming up."}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Today&apos;s CTA</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${(d==null?void 0:d.shelf_cta)||(d==null?void 0:d.action_label)||`Open ${h}`}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Turning Point</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${i.turning_point_headline||"Turning points are loading."}</div>
          </div>
          <div class="spectator-entry-summary-cell">
            <div class="spectator-entry-cell-label">Practice Takeaway</div>
            <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${i.practice_takeaway||"No benchmark takeaway recorded."}</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:${m?"1fr":"minmax(0,1fr) minmax(280px,0.9fr)"};gap:16px;margin-top:18px">
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#A78BFA;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Editorial Summary</div>
            <div style="font-size:10px;color:var(--text-dim);line-height:1.7;white-space:pre-wrap;margin-top:12px">${i.caption||[`${i.headline||`${i.winner_startup} won the match.`}`,i.winner_summary||null,i.story_hook?`Why it matters: ${i.story_hook}`:null,i.turning_point_headline?`Turning point: ${i.turning_point_headline}`:null,i.practice_takeaway?`Takeaway: ${i.practice_takeaway}`:null].filter(Boolean).join(`

`)}</div>
          </div>
          <div style="display:grid;gap:16px">
            <div style="padding:14px 16px;border-radius:14px;background:rgba(34,211,238,0.06);border:1px solid rgba(34,211,238,0.14)">
              <div style="font-size:9px;color:#22D3EE;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Replay Link</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${a}</div>
            </div>
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,184,0,0.06);border:1px solid rgba(255,184,0,0.14)">
              <div style="font-size:9px;color:#FFB800;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Card Export</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${_}</div>
            </div>
            ${m?"":`<div style="padding:14px 16px;border-radius:14px;background:rgba(251,146,60,0.06);border:1px solid rgba(251,146,60,0.14)">
              <div style="font-size:9px;color:#FB923C;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Social Export</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${g}</div>
            </div>`}
            <div style="padding:14px 16px;border-radius:14px;background:rgba(252,211,77,0.06);border:1px solid rgba(252,211,77,0.14)">
              <div style="font-size:9px;color:#FCD34D;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">Promoted Artifact</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${f}</div>
            </div>
            <div style="padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06)">
              <div style="font-size:9px;color:#94A3B8;font-weight:800;letter-spacing:0.8px;text-transform:uppercase">${m?"Social Link":"Canonical Slot Link"}</div>
              <div style="font-size:10px;color:var(--text-dim);line-height:1.6;word-break:break-word;margin-top:10px">${m?g:o}</div>
            </div>
          </div>
        </div>
      </div>
    `;const v=this._featuredSlotPage.querySelector("#slot-open-featured-pick"),C=this._featuredSlotPage.querySelector("#slot-open-replay"),E=this._featuredSlotPage.querySelector("#slot-open-card"),T=this._featuredSlotPage.querySelector("#slot-open-social"),R=this._featuredSlotPage.querySelector("#slot-copy-slot-link"),S=this._featuredSlotPage.querySelector("#slot-copy-featured-link"),b=this._featuredSlotPage.querySelector("#slot-copy-replay-link"),P=this._featuredSlotPage.querySelector("#slot-copy-card-link"),O=this._featuredSlotPage.querySelector("#slot-copy-social-link"),U=this._featuredSlotPage.querySelector("#slot-copy-social-caption"),G=this._featuredSlotPage.querySelector("#slot-copy-embed");v==null||v.addEventListener("click",()=>{this.store.watchGame(i.game_id,i.spectator_token||null,{viaSharedLink:!0,requestedPhase:(l==null?void 0:l.phase)||"replay",layout:(l==null?void 0:l.layout)||null,slot:t})}),C==null||C.addEventListener("click",()=>{this.store.watchGame(i.game_id,i.spectator_token||null,{viaSharedLink:!0,requestedPhase:"replay",slot:t})}),E==null||E.addEventListener("click",()=>{this.store.watchGame(i.game_id,i.spectator_token||null,{viaSharedLink:!0,requestedPhase:"replay",layout:"card",slot:t})}),T==null||T.addEventListener("click",()=>{this.store.watchGame(i.game_id,i.spectator_token||null,{viaSharedLink:!0,requestedPhase:"replay",layout:"social",slot:t})}),R==null||R.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(o),this._copyButtonFeedback(R,"Copy Slot Link","Slot Link Copied")}catch{this._copyButtonFeedback(R,"Copy Slot Link","Copy Failed")}}),S==null||S.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(f),this._copyButtonFeedback(S,`Copy ${h}`,"Featured Link Copied")}catch{this._copyButtonFeedback(S,`Copy ${h}`,"Copy Failed")}}),b==null||b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a),this._copyButtonFeedback(b,"Copy Replay Link","Replay Link Copied")}catch{this._copyButtonFeedback(b,"Copy Replay Link","Copy Failed")}}),P==null||P.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(_),this._copyButtonFeedback(P,"Copy Card Link","Card Link Copied")}catch{this._copyButtonFeedback(P,"Copy Card Link","Copy Failed")}}),O==null||O.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(g),this._copyButtonFeedback(O,"Copy Social Link","Social Link Copied")}catch{this._copyButtonFeedback(O,"Copy Social Link","Copy Failed")}}),U==null||U.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(x),this._copyButtonFeedback(U,"Copy Social Caption","Social Caption Copied")}catch{this._copyButtonFeedback(U,"Copy Social Caption","Copy Failed")}}),G==null||G.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(y),this._copyButtonFeedback(G,"Copy Embed","Embed Copied")}catch{this._copyButtonFeedback(G,"Copy Embed","Copy Failed")}})}_updateSpectatorEntry(e){var y,x,v;const t=e.entryContext||{},n=e.gameData;if(!t.viaSharedLink){this._spectatorEntry.classList.add("hidden"),this._matchStrip.classList.remove("match-strip-with-entry"),this._matchStrip.classList.remove("match-strip-with-replay-entry"),this._spectatorEntry.innerHTML="";return}if(this._isFeaturedReplayPage(e)){this._spectatorEntry.classList.add("hidden"),this._matchStrip.classList.remove("match-strip-with-entry"),this._matchStrip.classList.remove("match-strip-with-replay-entry"),this._spectatorEntry.innerHTML="";return}const i=(n==null?void 0:n.phase)||e.view,s=t.requestedPhase==="replay",o=s&&i==="finished"&&(n==null?void 0:n.summary),a=s||i==="finished"?"Replay Link":"Watch Link",l=o?null:i==="finished"?((y=n==null?void 0:n.summary)==null?void 0:y.winner_summary)||"Replay recap is loading.":i==="playing"?((x=n==null?void 0:n.live_summary)==null?void 0:x.why_ahead)||"Live match context is loading.":i==="lobby"?"Shared lobby link opened. Waiting for the match to start.":"Connecting to shared match link.",c=n?`${n.name||"Founder Arena"} · ${n.queue||"showmatch"} · ${n.benchmark_tier||"baseline"}`:`Game ${e.gameId||""}`,d=n?`${i==="finished"?"Final replay":i==="playing"?`Week ${n.turn||0}/${n.max_turns||32}`:"Pre-match"}`:"Connecting",h=this.store.startupList||[],u=(n==null?void 0:n.summary)||{},p=h[0]||null,m=(u.turning_points||[])[0]||null,_=o?this.controls._buildSharePackage(n,u,h,(n==null?void 0:n.rank_basis)==="score"):null,g=o?this.store.getShareUrl():"",f=(_==null?void 0:_.formatLabel)||a;if(this._spectatorEntry.classList.remove("hidden"),this._matchStrip.classList.add("match-strip-with-entry"),this._matchStrip.classList.toggle("match-strip-with-replay-entry",!!o),this._spectatorEntry.innerHTML=`
      <div class="spectator-entry-card">
        <div class="spectator-entry-topline">
          <span class="spectator-entry-badge">${a}</span>
          <span class="spectator-entry-meta">${c}</span>
        </div>
        <div class="spectator-entry-headline">${l}</div>
        <div class="spectator-entry-subline">${d}${e.gameId?` · ID ${e.gameId}`:""}</div>
      </div>
    `,o){this._spectatorEntry.innerHTML=`
        <div class="spectator-entry-card spectator-entry-card-replay">
          <div class="spectator-entry-topline">
            <span class="spectator-entry-badge">Featured Replay</span>
            <span class="spectator-entry-meta">${f} &middot; ${c}</span>
          </div>
          <div class="spectator-entry-hero">
            <div>
              <div class="spectator-entry-headline">${(_==null?void 0:_.headline)||u.winner_summary||"Replay recap is loading."}</div>
              <div class="spectator-entry-subline">${(_==null?void 0:_.matchupLabel)||c}</div>
              <div class="spectator-entry-subline">${d}${e.gameId?` · ID ${e.gameId}`:""}</div>
            </div>
            <div class="spectator-entry-scorecard">
              <div class="spectator-entry-score">${(p==null?void 0:p.startup_name)||"Unknown"}</div>
              <div class="spectator-entry-score-meta">${u.final_margin!=null?`${u.final_margin.toFixed(1)} score margin`:"Final replay"}</div>
            </div>
          </div>
          <div class="spectator-entry-summary-grid">
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Format</div>
              <div class="spectator-entry-cell-value">${(_==null?void 0:_.formatLabel)||"Replay"}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Matchup</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${(_==null?void 0:_.matchupLabel)||(p==null?void 0:p.startup_name)||"Unknown"}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Winner</div>
              <div class="spectator-entry-cell-value">${(p==null?void 0:p.startup_name)||"Unknown"}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Margin</div>
              <div class="spectator-entry-cell-value">${u.final_margin!=null?`${u.final_margin.toFixed(1)} score`:"N/A"}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Story Hook</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${(_==null?void 0:_.storyHook)||u.winner_summary||"Replay story is loading."}</div>
            </div>
            <div class="spectator-entry-summary-cell">
              <div class="spectator-entry-cell-label">Turning Point</div>
              <div class="spectator-entry-cell-value spectator-entry-cell-wrap">${((v=_==null?void 0:_.topTurningPoint)==null?void 0:v.headline)||(m==null?void 0:m.headline)||"Turning points are loading."}</div>
            </div>
          </div>
          <div class="spectator-entry-actions">
            <button class="btn-clean spectator-entry-action" id="spectator-open-recap">Open Recap</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-link">Copy Link</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-headline">Copy Headline</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-caption">Copy Caption</button>
            <button class="btn-clean spectator-entry-action" id="spectator-copy-package">Copy Package</button>
          </div>
        </div>
      `;const C=this._spectatorEntry.querySelector("#spectator-open-recap"),E=this._spectatorEntry.querySelector("#spectator-copy-link"),T=this._spectatorEntry.querySelector("#spectator-copy-headline"),R=this._spectatorEntry.querySelector("#spectator-copy-caption"),S=this._spectatorEntry.querySelector("#spectator-copy-package");C==null||C.addEventListener("click",()=>{this.controls.showPostGame({entryMode:"sharedReplay"})}),E==null||E.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(g),this._copyButtonFeedback(E,"Copy Link","Link Copied")}catch{this._copyButtonFeedback(E,"Copy Link","Copy Failed")}}),T==null||T.addEventListener("click",async()=>{try{await navigator.clipboard.writeText((_==null?void 0:_.headline)||""),this._copyButtonFeedback(T,"Copy Headline","Headline Copied")}catch{this._copyButtonFeedback(T,"Copy Headline","Copy Failed")}}),R==null||R.addEventListener("click",async()=>{try{await navigator.clipboard.writeText((_==null?void 0:_.caption)||""),this._copyButtonFeedback(R,"Copy Caption","Caption Copied")}catch{this._copyButtonFeedback(R,"Copy Caption","Copy Failed")}}),S==null||S.addEventListener("click",async()=>{try{await navigator.clipboard.writeText((_==null?void 0:_.featuredCard)||""),this._copyButtonFeedback(S,"Copy Package","Package Copied")}catch{this._copyButtonFeedback(S,"Copy Package","Copy Failed")}})}}_updateMatchStrip(e){var l,c,d,h;if(this._isFeaturedReplayPage(e)){this._matchStrip.classList.add("hidden"),this._matchStrip.innerHTML="";return}const t=(l=e.gameData)==null?void 0:l.live_summary,n=(c=e.gameData)==null?void 0:c.phase;if(!t||n!=="playing"&&n!=="finished"){this._matchStrip.classList.add("hidden"),this._matchStrip.innerHTML="";return}const i=this._pressurePills(t.leader_pressure),s=this._pressurePills(t.challenger_pressure),o=t.runner_alert||null,a=this._runnerAlertTone(o);this._matchStrip.classList.remove("hidden"),this._matchStrip.innerHTML=`
      <div class="match-strip-card emphasis">
        <div class="match-strip-label">Leader</div>
        <div class="match-strip-score">${t.leader_startup_name}</div>
        <div class="match-strip-sub">${(d=t.leader_score)==null?void 0:d.toFixed(1)} score &middot; ${this._formatDelta(t.leader_delta)} this turn</div>
        ${i?`<div class="signal-pills">${i}</div>`:""}
      </div>
      <div class="match-strip-card">
        <div class="match-strip-label">Why Ahead</div>
        <div class="match-strip-body">${t.why_ahead||"Match edge not available yet."}</div>
        <div class="match-strip-sub">Margin: ${t.margin!=null?`${t.margin.toFixed(1)} score`:"No challenger yet"}</div>
      </div>
      <div class="match-strip-card">
        <div class="match-strip-label">What Could Flip</div>
        <div class="match-strip-body">${t.flip_watch||"No immediate flip signal recorded."}</div>
        ${t.challenger_startup_name?`<div class="match-strip-sub">${t.challenger_startup_name} &middot; ${(h=t.challenger_score)==null?void 0:h.toFixed(1)} score &middot; ${this._formatDelta(t.challenger_delta)} this turn</div>`:""}
        ${s?`<div class="signal-pills">${s}</div>`:""}
      </div>
      ${o?`
        <div class="match-strip-card">
          <div class="match-strip-label">Runner Alert</div>
          <div class="match-strip-body" style="color:${a==="danger"?"#FCA5A5":a==="warning"?"#FCD34D":"var(--text)"}">${o.headline||`${o.startup_name} has a runner issue.`}</div>
          <div class="match-strip-sub">${o.startup_name} &middot; ${o.label}</div>
          <div class="signal-pills"><span class="signal-pill signal-pill-${a}">${o.label}</span></div>
        </div>
      `:""}
    `}update(e){var s,o,a,l,c,d;this._syncReplayLayoutChrome(e);const t=(s=e.gameData)==null?void 0:s.phase,n=((o=e.gameData)==null?void 0:o.turn)||0,i=((a=e.gameData)==null?void 0:a.max_turns)||32;if(t==="playing")this._statusEl.innerHTML=`<span class="dot" style="background:#34D058;box-shadow:0 0 8px rgba(52,208,88,0.6)"></span>LIVE &middot; Week ${n}/${i}`;else if(t==="lobby"){const h=Object.keys(((l=e.gameData)==null?void 0:l.startups)||{}).length;this._statusEl.innerHTML=`<span class="dot" style="background:#FFB800;box-shadow:0 0 8px rgba(255,184,0,0.6)"></span>LOBBY &middot; ${h} agents`}else t==="finished"?this._statusEl.innerHTML='<span class="dot" style="background:#EF4444;box-shadow:0 0 8px rgba(239,68,68,0.6)"></span>FINISHED':e.gameId?this._statusEl.innerHTML='<span class="dot" style="background:#4A9EFF;box-shadow:0 0 8px rgba(74,158,255,0.6)"></span>CONNECTING...':this._statusEl.innerHTML='<span class="dot"></span>READY';if(this._updateMatchStrip(e),this._updateSpectatorEntry(e),this._updateFeaturedReplayPage(e),this._updateFeaturedSlotPage(e),this._updateDiscoveryShelf(e),this.rankings.update(e),this.timeline.update(e),this.detail.update(e),t==="finished"&&!this._postGameShown){this._postGameShown=!0;const h=!!((c=e.entryContext)!=null&&c.viaSharedLink&&((d=e.entryContext)==null?void 0:d.requestedPhase)==="replay"),u=this._isFeaturedReplayPage(e),p=()=>this.controls.showPostGame({entryMode:h?"sharedReplay":"standard"});u||(h?p():setTimeout(p,1500))}t!=="finished"&&(this._postGameShown=!1)}}const hv=document.getElementById("three-canvas"),uv=document.getElementById("hud-root"),di=new sv,Ii=new j_(hv),pv=new dv(uv,di,Ii),Ps=new URLSearchParams(window.location.search),Tc=Ps.get("game"),fv=Ps.get("spectator"),mv=Ps.get("phase"),Ac=Ps.get("layout"),po=Ps.get("slot");function gv(r){var c,d,h,u,p,m;const e=r.gameData;if(!e||!r.gameId){const _=(c=r.entryContext)==null?void 0:c.slot;if(_){const g=_.replace(/[_-]+/g," ").replace(/\b\w/g,f=>f.toUpperCase());document.title=`${g} | Founder Arena`;return}document.title="FOUNDER ARENA";return}const t=e.phase||r.view,n=Object.values(e.startups||{}).sort((_,g)=>{var x,v;const f=Number(_.score??((x=_.seven_dimension_scores)==null?void 0:x.total_score)??_.valuation??0);return Number(g.score??((v=g.seven_dimension_scores)==null?void 0:v.total_score)??g.valuation??0)-f}),i=n[0],s=n[1],o=!!((d=r.entryContext)!=null&&d.viaSharedLink&&((h=r.entryContext)==null?void 0:h.requestedPhase)==="replay"&&t==="finished"),a=((u=r.entryContext)==null?void 0:u.layout)==="card",l=((p=r.entryContext)==null?void 0:p.layout)==="social";if(t==="finished"){const _=((m=e.startups)==null?void 0:m[e.winner])||i,g=l?"Social Card":a?"Replay Card":o?"Featured Replay":"Replay";document.title=`${g}: ${(_==null?void 0:_.startup_name)||e.name} | Founder Arena`;return}if(t==="playing"){const _=i&&s?`${i.startup_name} vs ${s.startup_name}`:(i==null?void 0:i.startup_name)||e.name;document.title=`Live: ${_} | Founder Arena`;return}if(t==="lobby"){document.title=`Lobby: ${e.name||r.gameId} | Founder Arena`;return}document.title=`${e.name||"Founder Arena"} | Founder Arena`}di.subscribe(r=>{var e;(e=r.gameData)!=null&&e.startups&&(Ii.updatePods(r.gameData.startups,r.selectedStartupId),Ii.highlightPod(r.selectedStartupId)),Ii.updateMarketBoard(r.gameData),Ii.checkTurnEvents(r.gameData),pv.update(r),gv(r)});function Ad(){requestAnimationFrame(Ad),Ii.render()}Ad();di.loadGames();di.loadLeaderboard();di.loadFeaturedFeed();Tc?di.watchGame(Tc,fv||null,{viaSharedLink:!0,requestedPhase:mv||null,layout:Ac||null,slot:po||null}):po&&di.openFeaturedSlot(po,{viaSharedLink:!0,layout:Ac||null});console.log("[Founder Arena] Three.js frontend initialized");
