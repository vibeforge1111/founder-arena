(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xr="170",ii={ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},El=0,_a=1,yl=2,Uo=1,No=2,tn=3,Mn=0,Se=1,en=2,vn=0,si=1,ga=2,va=3,xa=4,Tl=5,Pn=100,bl=101,Al=102,wl=103,Rl=104,Cl=200,Pl=201,Ll=202,Dl=203,ir=204,sr=205,Il=206,Ul=207,Nl=208,Fl=209,Ol=210,Bl=211,zl=212,Hl=213,kl=214,rr=0,ar=1,or=2,li=3,lr=4,cr=5,hr=6,ur=7,Fo=0,Gl=1,Vl=2,xn=0,Wl=1,Xl=2,ql=3,Oo=4,Yl=5,$l=6,jl=7,Bo=300,ci=301,hi=302,dr=303,fr=304,vs=306,pr=1e3,Dn=1001,mr=1002,He=1003,Kl=1004,Oi=1005,We=1006,Ts=1007,In=1008,an=1009,zo=1010,Ho=1011,Pi=1012,qr=1013,Un=1014,nn=1015,Li=1016,Yr=1017,$r=1018,ui=1020,ko=35902,Go=1021,Vo=1022,Be=1023,Wo=1024,Xo=1025,ri=1026,di=1027,qo=1028,jr=1029,Yo=1030,Kr=1031,Zr=1033,os=33776,ls=33777,cs=33778,hs=33779,_r=35840,gr=35841,vr=35842,xr=35843,Mr=36196,Sr=37492,Er=37496,yr=37808,Tr=37809,br=37810,Ar=37811,wr=37812,Rr=37813,Cr=37814,Pr=37815,Lr=37816,Dr=37817,Ir=37818,Ur=37819,Nr=37820,Fr=37821,us=36492,Or=36494,Br=36495,$o=36283,zr=36284,Hr=36285,kr=36286,Zl=3200,Jl=3201,jo=0,Ql=1,_n="",Pe="srgb",pi="srgb-linear",xs="linear",qt="srgb",zn=7680,Ma=519,tc=512,ec=513,nc=514,Ko=515,ic=516,sc=517,rc=518,ac=519,Sa=35044,Ea="300 es",sn=2e3,ps=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ds=Math.PI/180,Gr=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function bs(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lc={DEG2RAD:ds};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],g=s[0],p=s[3],h=s[6],b=s[1],T=s[4],S=s[7],F=s[2],R=s[5],A=s[8];return r[0]=a*g+o*b+l*F,r[3]=a*p+o*T+l*R,r[6]=a*h+o*S+l*A,r[1]=c*g+u*b+f*F,r[4]=c*p+u*T+f*R,r[7]=c*h+u*S+f*A,r[2]=d*g+m*b+_*F,r[5]=d*p+m*T+_*R,r[8]=d*h+m*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=e*f+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-u*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(As.makeScale(t,e)),this}rotate(t){return this.premultiply(As.makeRotation(-t)),this}translate(t,e){return this.premultiply(As.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const As=new Pt;function Zo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cc(){const i=ms("canvas");return i.style.display="block",i}const ya={};function wi(i){i in ya||(ya[i]=!0,console.warn(i))}function hc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function uc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===qt&&(i.r=rn(i.r),i.g=rn(i.g),i.b=rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===qt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_n?xs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ta=[.64,.33,.3,.6,.15,.06],ba=[.2126,.7152,.0722],Aa=[.3127,.329],wa=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[pi]:{primaries:Ta,whitePoint:Aa,transfer:xs,toXYZ:wa,fromXYZ:Ra,luminanceCoefficients:ba,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Ta,whitePoint:Aa,transfer:qt,toXYZ:wa,fromXYZ:Ra,luminanceCoefficients:ba,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Hn;class fc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=ms("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rn(e[n]/255)*255):e[n]=rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pc=0;class Jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ws(s[a].image)):r.push(ws(s[a]))}else r=ws(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mc=0;class Ee extends On{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Dn,s=Dn,r=We,a=In,o=Be,l=an,c=Ee.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Di(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Bo;Ee.DEFAULT_ANISOTROPY=1;class $t{constructor(t=0,e=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(m+1)/2,F=(h+1)/2,R=(u+d)/4,A=(f+g)/4,U=(_+p)/4;return T>S&&T>F?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=A/n):S>F?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=U/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=A/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qo extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gc extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-o;const h=l*d+c*m+u*_+f*g,b=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const F=Math.sqrt(T),R=Math.atan2(F,h*b);p=Math.sin(p*R)/F,o=Math.sin(o*R)/F}const S=o*b;if(l=l*p+d*S,c=c*p+m*S,u=u*p+_*S,f=f*p+g*S,p===1-o){const F=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=F,c*=F,u*=F,f*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*m-c*d,t[e+1]=l*_+u*d+c*f-o*m,t[e+2]=c*_+u*m+o*d-l*f,t[e+3]=u*_-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ca.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ca.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rs.copy(this).projectOnVector(t),this.sub(Rs)}reflect(t){return this.sub(Rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new P,Ca=new Fn;class Ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ue):Ue.fromBufferAttribute(r,a),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(t.matrixWorld),this.union(Bi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),zi.subVectors(this.max,Si),kn.subVectors(t.a,Si),Gn.subVectors(t.b,Si),Vn.subVectors(t.c,Si),cn.subVectors(Gn,kn),hn.subVectors(Vn,Gn),yn.subVectors(kn,Vn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-yn.z,yn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,yn.z,0,-yn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-yn.y,yn.x,0];return!Cs(e,kn,Gn,Vn,zi)||(e=[1,0,0,0,1,0,0,0,1],!Cs(e,kn,Gn,Vn,zi))?!1:(Hi.crossVectors(cn,hn),e=[Hi.x,Hi.y,Hi.z],Cs(e,kn,Gn,Vn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new P,new P,new P,new P,new P,new P,new P,new P],Ue=new P,Bi=new Ii,kn=new P,Gn=new P,Vn=new P,cn=new P,hn=new P,yn=new P,Si=new P,zi=new P,Hi=new P,Tn=new P;function Cs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Tn.fromArray(i,r);const o=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),u=n.dot(Tn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vc=new Ii,Ei=new P,Ps=new P;class Ms{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ei,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Ps)),this.expandByPoint(Ei.copy(t.center).sub(Ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ke=new P,Ls=new P,ki=new P,un=new P,Ds=new P,Gi=new P,Is=new P;class Ss{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.origin).addScaledVector(this.direction,e),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ls.copy(t).add(e).multiplyScalar(.5),ki.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Ls);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ki),o=un.dot(this.direction),l=-un.dot(ki),c=un.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ls).addScaledVector(ki,d),m}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);const n=Ke.dot(this.direction),s=Ke.dot(Ke)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,n,s,r){Ds.subVectors(e,t),Gi.subVectors(n,t),Is.crossVectors(Ds,Gi);let a=this.direction.dot(Is),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(Gi.crossVectors(un,Gi));if(l<0)return null;const c=o*this.direction.dot(Ds.cross(un));if(c<0||l+c>a)return null;const u=-o*un.dot(Is);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,a,o,l,c,u,f,d,m,_,g,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,d,m,_,g,p)}set(t,e,n,s,r,a,o,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wn.setFromMatrixColumn(t,0).length(),r=1/Wn.setFromMatrixColumn(t,1).length(),a=1/Wn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*f,e[8]=_*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+g,e[5]=a*u,e[9]=m*f-_,e[2]=_*f-m,e[6]=o*u,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xc,t,Mc)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),dn.crossVectors(n,Te),dn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),dn.crossVectors(n,Te)),dn.normalize(),Vi.crossVectors(Te,dn),s[0]=dn.x,s[4]=Vi.x,s[8]=Te.x,s[1]=dn.y,s[5]=Vi.y,s[9]=Te.y,s[2]=dn.z,s[6]=Vi.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],h=n[14],b=n[3],T=n[7],S=n[11],F=n[15],R=s[0],A=s[4],U=s[8],E=s[12],M=s[1],w=s[5],H=s[9],z=s[13],W=s[2],j=s[6],V=s[10],Z=s[14],G=s[3],it=s[7],ct=s[11],xt=s[15];return r[0]=a*R+o*M+l*W+c*G,r[4]=a*A+o*w+l*j+c*it,r[8]=a*U+o*H+l*V+c*ct,r[12]=a*E+o*z+l*Z+c*xt,r[1]=u*R+f*M+d*W+m*G,r[5]=u*A+f*w+d*j+m*it,r[9]=u*U+f*H+d*V+m*ct,r[13]=u*E+f*z+d*Z+m*xt,r[2]=_*R+g*M+p*W+h*G,r[6]=_*A+g*w+p*j+h*it,r[10]=_*U+g*H+p*V+h*ct,r[14]=_*E+g*z+p*Z+h*xt,r[3]=b*R+T*M+S*W+F*G,r[7]=b*A+T*w+S*j+F*it,r[11]=b*U+T*H+S*V+F*ct,r[15]=b*E+T*z+S*Z+F*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],h=t[15];return _*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*m-n*l*m)+g*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*u-r*l*u)+p*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-e*l*f+e*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],h=t[15],b=f*p*c-g*d*c+g*l*m-o*p*m-f*l*h+o*d*h,T=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,S=u*g*c-_*f*c+_*o*m-a*g*m-u*o*h+a*f*h,F=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,R=e*b+n*T+s*S+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(g*d*r-f*p*r-g*s*m+n*p*m+f*s*h-n*d*h)*A,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*h+n*l*h)*A,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*m-n*l*m)*A,t[4]=T*A,t[5]=(u*p*r-_*d*r+_*s*m-e*p*m-u*s*h+e*d*h)*A,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*h-e*l*h)*A,t[7]=(a*d*r-u*l*r+u*s*c-e*d*c-a*s*m+e*l*m)*A,t[8]=S*A,t[9]=(_*f*r-u*g*r-_*n*m+e*g*m+u*n*h-e*f*h)*A,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*h+e*o*h)*A,t[11]=(u*o*r-a*f*r-u*n*c+e*f*c+a*n*m-e*o*m)*A,t[12]=F*A,t[13]=(u*g*s-_*f*s+_*n*d-e*g*d-u*n*p+e*f*p)*A,t[14]=(_*o*s-a*g*s-_*n*l+e*g*l+a*n*p-e*o*p)*A,t[15]=(a*f*s-u*o*s+u*n*l-e*f*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,_=r*f,g=a*u,p=a*f,h=o*f,b=l*c,T=l*u,S=l*f,F=n.x,R=n.y,A=n.z;return s[0]=(1-(g+h))*F,s[1]=(m+S)*F,s[2]=(_-T)*F,s[3]=0,s[4]=(m-S)*R,s[5]=(1-(d+h))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(_+T)*A,s[9]=(p-b)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Wn.set(s[0],s[1],s[2]).length();const a=Wn.set(s[4],s[5],s[6]).length(),o=Wn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ne.copy(this);const c=1/r,u=1/a,f=1/o;return Ne.elements[0]*=c,Ne.elements[1]*=c,Ne.elements[2]*=c,Ne.elements[4]*=u,Ne.elements[5]*=u,Ne.elements[6]*=u,Ne.elements[8]*=f,Ne.elements[9]*=f,Ne.elements[10]*=f,e.setFromRotationMatrix(Ne),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=sn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(o===sn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ps)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=sn){const l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(a-r),d=(e+t)*c,m=(n+s)*u;let _,g;if(o===sn)_=(a+r)*f,g=-2*f;else if(o===ps)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wn=new P,Ne=new Kt,xc=new P(0,0,0),Mc=new P(1,1,1),dn=new P,Vi=new P,Te=new P,Pa=new Kt,La=new Fn;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Jr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sc=0;const Da=new P,Xn=new Fn,Ze=new Kt,Wi=new P,yi=new P,Ec=new P,yc=new Fn,Ia=new P(1,0,0),Ua=new P(0,1,0),Na=new P(0,0,1),Fa={type:"added"},Tc={type:"removed"},qn={type:"childadded",child:null},Us={type:"childremoved",child:null};class ue extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new P,e=new qe,n=new Fn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(Ia,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Na,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ia,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Na,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wi.copy(t):Wi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(yi,Wi,this.up):Ze.lookAt(Wi,yi,this.up),this.quaternion.setFromRotationMatrix(Ze),s&&(Ze.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fa),qn.child=t,this.dispatchEvent(qn),qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tc),Us.child=t,this.dispatchEvent(Us),Us.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fa),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,Ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,yc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new P(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new P,Je=new P,Ns=new P,Qe=new P,Yn=new P,$n=new P,Oa=new P,Fs=new P,Os=new P,Bs=new P,zs=new $t,Hs=new $t,ks=new $t;class Oe{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fe.subVectors(t,e),s.cross(Fe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fe.subVectors(s,e),Je.subVectors(n,e),Ns.subVectors(t,e);const a=Fe.dot(Fe),o=Fe.dot(Je),l=Fe.dot(Ns),c=Je.dot(Je),u=Je.dot(Ns),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qe)===null?!1:Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qe.x),l.addScaledVector(a,Qe.y),l.addScaledVector(o,Qe.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return zs.setScalar(0),Hs.setScalar(0),ks.setScalar(0),zs.fromBufferAttribute(t,e),Hs.fromBufferAttribute(t,n),ks.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zs,r.x),a.addScaledVector(Hs,r.y),a.addScaledVector(ks,r.z),a}static isFrontFacing(t,e,n,s){return Fe.subVectors(n,e),Je.subVectors(t,e),Fe.cross(Je).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Fe.cross(Je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Yn.subVectors(s,n),$n.subVectors(r,n),Fs.subVectors(t,n);const l=Yn.dot(Fs),c=$n.dot(Fs);if(l<=0&&c<=0)return e.copy(n);Os.subVectors(t,s);const u=Yn.dot(Os),f=$n.dot(Os);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Yn,a);Bs.subVectors(t,r);const m=Yn.dot(Bs),_=$n.dot(Bs);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector($n,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return Oa.subVectors(r,s),o=(f-u)/(f-u+(m-_)),e.copy(s).addScaledVector(Oa,o);const h=1/(p+g+d);return a=g*h,o=d*h,e.copy(n).addScaledVector(Yn,a).addScaledVector($n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Gs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=oc(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gs(a,r,t+1/3),this.g=Gs(a,r,t),this.b=Gs(a,r,t-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return kt.fromWorkingColorSpace(me.copy(this),t),Math.round(ge(me.r*255,0,255))*65536+Math.round(ge(me.g*255,0,255))*256+Math.round(ge(me.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,s=me.g,r=me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Pe){kt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,s=me.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Xi);const n=bs(fn.h,Xi.h,e),s=bs(fn.s,Xi.s,e),r=bs(fn.l,Xi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new It;It.NAMES=tl;let bc=0;class mi extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Di(),this.name="",this.blending=si,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ir,this.blendDst=sr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ir&&(n.blendSrc=this.blendSrc),this.blendDst!==sr&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class el extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new P,qi=new bt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qi.fromBufferAttribute(this,e),qi.applyMatrix3(t),this.setXY(e,qi.x,qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}class nl extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class il extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ac=0;const Ce=new Kt,Vs=new ue,jn=new P,be=new Ii,Ti=new Ii,he=new P;class ke extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?il:nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return Vs.lookAt(t),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];be.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(be.min,Ti.min),be.expandByPoint(he),he.addVectors(be.max,Ti.max),be.expandByPoint(he)):(be.expandByPoint(Ti.min),be.expandByPoint(Ti.max))}be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)he.fromBufferAttribute(o,c),l&&(jn.fromBufferAttribute(t,c),he.add(jn)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new P,l[U]=new P;const c=new P,u=new P,f=new P,d=new bt,m=new bt,_=new bt,g=new P,p=new P;function h(U,E,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),m.sub(d),_.sub(d);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),o[U].add(g),o[E].add(g),o[M].add(g),l[U].add(p),l[E].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,E=b.length;U<E;++U){const M=b[U],w=M.start,H=M.count;for(let z=w,W=w+H;z<W;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new P,S=new P,F=new P,R=new P;function A(U){F.fromBufferAttribute(s,U),R.copy(F);const E=o[U];T.copy(E),T.sub(F.multiplyScalar(F.dot(E))).normalize(),S.crossVectors(R,E);const w=S.dot(l[U])<0?-1:1;a.setXYZW(U,T.x,T.y,T.z,w)}for(let U=0,E=b.length;U<E;++U){const M=b[U],w=M.start,H=M.count;for(let z=w,W=w+H;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,f=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new Xe(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new Kt,bn=new Ss,Yi=new Ms,za=new P,$i=new P,ji=new P,Ki=new P,Ws=new P,Zi=new P,Ha=new P,Ji=new P;class se extends ue{constructor(t=new ke,e=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ws.fromBufferAttribute(f,t),a?Zi.addScaledVector(Ws,u):Zi.addScaledVector(Ws.sub(e),u))}e.add(Zi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(r),bn.copy(t.ray).recast(t.near),!(Yi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Yi,za)===null||bn.origin.distanceToSquared(za)>(t.far-t.near)**2))&&(Ba.copy(r).invert(),bn.copy(t.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,F=T;S<F;S+=3){const R=o.getX(S),A=o.getX(S+1),U=o.getX(S+2);s=Qi(this,h,t,n,c,u,f,R,A,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);s=Qi(this,a,t,n,c,u,f,b,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=b,F=T;S<F;S+=3){const R=S,A=S+1,U=S+2;s=Qi(this,h,t,n,c,u,f,R,A,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const b=p,T=p+1,S=p+2;s=Qi(this,a,t,n,c,u,f,b,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function wc(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Mn,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ji);return c<e.near||c>e.far?null:{distance:c,point:Ji.clone(),object:i}}function Qi(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$i),i.getVertexPosition(l,ji),i.getVertexPosition(c,Ki);const u=wc(i,t,e,n,$i,ji,Ki,Ha);if(u){const f=new P;Oe.getBarycoord(Ha,$i,ji,Ki,f),s&&(u.uv=Oe.getInterpolatedAttribute(s,o,l,c,f,new bt)),r&&(u.uv1=Oe.getInterpolatedAttribute(r,o,l,c,f,new bt)),a&&(u.normal=Oe.getInterpolatedAttribute(a,o,l,c,f,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Oe.getNormal($i,ji,Ki,d.normal),u.face=d,u.barycoord=f}return u}class ze extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function _(g,p,h,b,T,S,F,R,A,U,E){const M=S/A,w=F/U,H=S/2,z=F/2,W=R/2,j=A+1,V=U+1;let Z=0,G=0;const it=new P;for(let ct=0;ct<V;ct++){const xt=ct*w-z;for(let Ut=0;Ut<j;Ut++){const jt=Ut*M-H;it[g]=jt*b,it[p]=xt*T,it[h]=W,c.push(it.x,it.y,it.z),it[g]=0,it[p]=0,it[h]=R>0?1:-1,u.push(it.x,it.y,it.z),f.push(Ut/A),f.push(1-ct/U),Z+=1}}for(let ct=0;ct<U;ct++)for(let xt=0;xt<A;xt++){const Ut=d+xt+j*ct,jt=d+xt+j*(ct+1),q=d+(xt+1)+j*(ct+1),tt=d+(xt+1)+j*ct;l.push(Ut,jt,tt),l.push(jt,q,tt),G+=6}o.addGroup(m,G,E),m+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function _e(i){const t={};for(let e=0;e<i.length;e++){const n=fi(i[e]);for(const s in n)t[s]=n[s]}return t}function Rc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const Cc={clone:fi,merge:_e};var Pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pc,this.fragmentShader=Lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=Rc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rl extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new P,ka=new bt,Ga=new bt;class Ae extends rl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,ka,Ga),e.subVectors(Ga,ka)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,Zn=1;class Dc extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ae(Kn,Zn,t,e);s.layers=this.layers,this.add(s);const r=new Ae(Kn,Zn,t,e);r.layers=this.layers,this.add(r);const a=new Ae(Kn,Zn,t,e);a.layers=this.layers,this.add(a);const o=new Ae(Kn,Zn,t,e);o.layers=this.layers,this.add(o);const l=new Ae(Kn,Zn,t,e);l.layers=this.layers,this.add(l);const c=new Ae(Kn,Zn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class al extends Ee{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ic extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new al(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:vn});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===In&&(e.minFilter=We),new Dc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Xs=new P,Uc=new P,Nc=new Pt;class mn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xs.subVectors(n,e).cross(Uc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nc.getNormalMatrix(t),s=this.coplanarPoint(Xs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Ms,ts=new P;class Qr{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],h=s[12],b=s[13],T=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,p-m,S-h).normalize(),n[1].setComponents(l+r,d+c,p+m,S+h).normalize(),n[2].setComponents(l+a,d+u,p+_,S+b).normalize(),n[3].setComponents(l-a,d-u,p-_,S-b).normalize(),n[4].setComponents(l-o,d-f,p-g,S-T).normalize(),e===sn)n[5].setComponents(l+o,d+f,p+g,S+T).normalize();else if(e===ps)n[5].setComponents(o,f,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ts.x=s.normal.x>0?t.max.x:t.min.x,ts.y=s.normal.y>0?t.max.y:t.min.y,ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fc(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class _i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let T=0;T<c;T++){const S=T*f-r;_.push(S,-b,0),g.push(0,0,1),p.push(T/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const T=b+c*h,S=b+c*(h+1),F=b+1+c*(h+1),R=b+1+c*h;m.push(T,S,R),m.push(S,F,R)}this.setIndex(m),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.widthSegments,t.heightSegments)}}var Oc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bc=`#ifdef USE_ALPHAHASH
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
#endif`,zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vc=`#ifdef USE_AOMAP
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
#endif`,Wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xc=`#ifdef USE_BATCHING
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
#endif`,qc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$c=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kc=`#ifdef USE_IRIDESCENCE
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
#endif`,Zc=`#ifdef USE_BUMPMAP
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
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
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
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
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
#endif`,Nh=`struct PhysicalMaterial {
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
}`,Fh=`
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ru=`#ifdef USE_NORMALMAP
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
#endif`,au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Su=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
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
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`#include <common>
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
}`,Vu=`#if DEPTH_PACKING == 3200
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`#define DISTANCE
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`uniform float scale;
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
}`,ju=`uniform vec3 diffuse;
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
}`,Ku=`#include <common>
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
}`,Zu=`uniform vec3 diffuse;
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
}`,Ju=`#define LAMBERT
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
}`,Qu=`#define LAMBERT
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
}`,td=`#define MATCAP
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
}`,ed=`#define MATCAP
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
}`,nd=`#define NORMAL
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
}`,id=`#define NORMAL
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
}`,sd=`#define PHONG
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
}`,rd=`#define PHONG
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
}`,ad=`#define STANDARD
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
}`,od=`#define STANDARD
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
}`,ld=`#define TOON
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
}`,cd=`#define TOON
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
}`,hd=`uniform float size;
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
}`,ud=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,fd=`uniform vec3 color;
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
}`,pd=`uniform float rotation;
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
}`,md=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:Oc,alphahash_pars_fragment:Bc,alphamap_fragment:zc,alphamap_pars_fragment:Hc,alphatest_fragment:kc,alphatest_pars_fragment:Gc,aomap_fragment:Vc,aomap_pars_fragment:Wc,batching_pars_vertex:Xc,batching_vertex:qc,begin_vertex:Yc,beginnormal_vertex:$c,bsdfs:jc,iridescence_fragment:Kc,bumpmap_pars_fragment:Zc,clipping_planes_fragment:Jc,clipping_planes_pars_fragment:Qc,clipping_planes_pars_vertex:th,clipping_planes_vertex:eh,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:sh,color_vertex:rh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:hh,emissivemap_fragment:uh,emissivemap_pars_fragment:dh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:_h,envmap_pars_fragment:gh,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Ch,envmap_vertex:xh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:yh,gradientmap_pars_fragment:Th,lightmap_pars_fragment:bh,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:wh,lights_pars_begin:Rh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Lh,lights_phong_fragment:Dh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Fh,lights_fragment_maps:Oh,lights_fragment_end:Bh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Gh,map_fragment:Vh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:$h,morphinstance_vertex:jh,morphcolor_vertex:Kh,morphnormal_vertex:Zh,morphtarget_pars_vertex:Jh,morphtarget_vertex:Qh,normal_fragment_begin:tu,normal_fragment_maps:eu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:su,normalmap_pars_fragment:ru,clearcoat_normal_fragment_begin:au,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:uu,premultiplied_alpha_fragment:du,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:gu,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:xu,shadowmap_vertex:Mu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:yu,skinning_vertex:Tu,skinnormal_vertex:bu,specularmap_fragment:Au,specularmap_pars_fragment:wu,tonemapping_fragment:Ru,tonemapping_pars_fragment:Cu,transmission_fragment:Pu,transmission_pars_fragment:Lu,uv_pars_fragment:Du,uv_pars_vertex:Iu,uv_vertex:Uu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Ou,backgroundCube_vert:Bu,backgroundCube_frag:zu,cube_vert:Hu,cube_frag:ku,depth_vert:Gu,depth_frag:Vu,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:qu,equirect_frag:Yu,linedashed_vert:$u,linedashed_frag:ju,meshbasic_vert:Ku,meshbasic_frag:Zu,meshlambert_vert:Ju,meshlambert_frag:Qu,meshmatcap_vert:td,meshmatcap_frag:ed,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:sd,meshphong_frag:rd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},et={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Ve={basic:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:_e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:_e([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:_e([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new It(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:_e([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:_e([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:_e([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:_e([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:_e([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:_e([et.common,et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:_e([et.lights,et.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ve.physical={uniforms:_e([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const es={r:0,b:0,g:0},wn=new qe,_d=new Kt;function gd(i,t,e,n,s,r,a){const o=new It(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function g(b){let T=!1;const S=_(b);S===null?h(o,l):S&&S.isColor&&(h(S,1),T=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,T){const S=_(T);S&&(S.isCubeTexture||S.mapping===vs)?(u===void 0&&(u=new se(new ze(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:fi(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),wn.copy(T.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_d.makeRotationFromEuler(wn)),u.material.toneMapped=kt.getTransfer(S.colorSpace)!==qt,(f!==S||d!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new se(new _i(2,2),new Sn({name:"BackgroundMaterial",uniforms:fi(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=kt.getTransfer(S.colorSpace)!==qt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,T){b.getRGB(es,sl(i)),n.buffers.color.setClear(es.r,es.g,es.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:g,addToRenderList:p}}function vd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,w,H,z,W){let j=!1;const V=f(z,H,w);r!==V&&(r=V,c(r.object)),j=m(M,z,H,W),j&&_(M,z,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(M,w,H,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,w,H){const z=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[w.id];j===void 0&&(j={},W[w.id]=j);let V=j[z];return V===void 0&&(V=d(l()),j[z]=V),V}function d(M){const w=[],H=[],z=[];for(let W=0;W<e;W++)w[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,w,H,z){const W=r.attributes,j=w.attributes;let V=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){const ct=W[G];let xt=j[G];if(xt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),ct===void 0||ct.attribute!==xt||xt&&ct.data!==xt.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function _(M,w,H,z){const W={},j=w.attributes;let V=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){let ct=j[G];ct===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const xt={};xt.attribute=ct,ct&&ct.data&&(xt.data=ct.data),W[G]=xt,V++}r.attributes=W,r.attributesNum=V,r.index=z}function g(){const M=r.newAttributes;for(let w=0,H=M.length;w<H;w++)M[w]=0}function p(M){h(M,0)}function h(M,w){const H=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==w&&(i.vertexAttribDivisor(M,w),W[M]=w)}function b(){const M=r.newAttributes,w=r.enabledAttributes;for(let H=0,z=w.length;H<z;H++)w[H]!==M[H]&&(i.disableVertexAttribArray(H),w[H]=0)}function T(M,w,H,z,W,j,V){V===!0?i.vertexAttribIPointer(M,w,H,W,j):i.vertexAttribPointer(M,w,H,z,W,j)}function S(M,w,H,z){g();const W=z.attributes,j=H.getAttributes(),V=w.defaultAttributeValues;for(const Z in j){const G=j[Z];if(G.location>=0){let it=W[Z];if(it===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ct=it.normalized,xt=it.itemSize,Ut=t.get(it);if(Ut===void 0)continue;const jt=Ut.buffer,q=Ut.type,tt=Ut.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===qr;if(it.isInterleavedBufferAttribute){const st=it.data,yt=st.stride,wt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)h(G.location+Nt,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)p(G.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Nt=0;Nt<G.locationSize;Nt++)T(G.location+Nt,xt/G.locationSize,q,ct,yt*tt,(wt+xt/G.locationSize*Nt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)h(G.location+st,it.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)p(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let st=0;st<G.locationSize;st++)T(G.location+st,xt/G.locationSize,q,ct,xt*tt,xt/G.locationSize*st*tt,_t)}}else if(V!==void 0){const ct=V[Z];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}b()}function F(){U();for(const M in n){const w=n[M];for(const H in w){const z=w[H];for(const W in z)u(z[W].object),delete z[W];delete w[H]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const H in w){const z=w[H];for(const W in z)u(z[W].object),delete z[W];delete w[H]}delete n[M.id]}function A(M){for(const w in n){const H=n[w];if(H[M.id]===void 0)continue;const z=H[M.id];for(const W in z)u(z[W].object),delete z[W];delete H[M.id]}}function U(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function xd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];e.update(m,n,1)}function l(c,u,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Md(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Be&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==nn&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:R}}function Sd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new mn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,T=b*4;let S=h.clippingState||null;l.value=S,S=u(_,d,T,m);for(let F=0;F!==T;++F)S[F]=e[F];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,S=m;T!==g;++T,S+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Ed(i){let t=new WeakMap;function e(a,o){return o===dr?a.mapping=ci:o===fr&&(a.mapping=hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dr||o===fr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ic(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ll extends rl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ei=4,Va=[.125,.215,.35,.446,.526,.582],Ln=20,qs=new ll,Wa=new It;let Ys=null,$s=0,js=0,Ks=!1;const Cn=(1+Math.sqrt(5))/2,Jn=1/Cn,Xa=[new P(-Cn,Jn,0),new P(Cn,Jn,0),new P(-Jn,0,Cn),new P(Jn,0,Cn),new P(0,Cn,-Jn),new P(0,Cn,Jn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ys,$s,js),this._renderer.xr.enabled=Ks,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ys=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Li,format:Be,colorSpace:pi,depthBuffer:!1},s=Ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yd(r)),this._blurMaterial=Td(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,s){const o=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wa),u.toneMapping=xn,u.autoClear=!1;const m=new el({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),_=new se(new ze,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Wa),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const T=this._cubeSize;ns(s,b*T,h>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ci||t.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xa[(s-r-1)%Xa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new se(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Ln;p>Ln&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const h=[];let b=0;for(let A=0;A<Ln;++A){const U=A/g,E=Math.exp(-U*U/2);h.push(E),A===0?b+=E:A<p&&(b+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const S=this._sizeLods[s],F=3*S*(s>T-ei?s-T+ei:0),R=4*(this._cubeSize-S);ns(e,F,R,3*S,2*S),l.setRenderTarget(e),l.render(f,qs)}}function yd(i){const t=[],e=[],n=[];let s=i;const r=i-ei+1+Va.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ei?l=Va[a-i+ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,b=new Float32Array(g*_*m),T=new Float32Array(p*_*m),S=new Float32Array(h*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,U=R>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(E,g*_*R),T.set(d,p*_*R);const M=[R,R,R,R,R,R];S.set(M,h*_*R)}const F=new ke;F.setAttribute("position",new Xe(b,g)),F.setAttribute("uv",new Xe(T,p)),F.setAttribute("faceIndex",new Xe(S,h)),t.push(F),s>ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ya(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Td(i,t,e){const n=new Float32Array(Ln),s=new P(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ta(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function $a(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ja(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function bd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===dr||l===fr,u=l===ci||l===hi;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new qa(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new qa(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ad(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wd(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,h=g.length;p<h;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let T=0,S=b.length;T<S;T+=3){const F=b[T+0],R=b[T+1],A=b[T+2];d.push(F,R,R,A,A,F)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const F=T+0,R=T+1,A=T+2;d.push(F,R,R,A,A,F)}}else return;const p=new(Zo(d)?il:nl)(d,1);p.version=g;const h=r.get(f);h&&t.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Rd(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*a,_),e.update(m,n,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];e.update(p,n,1)}function f(d,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,_);let h=0;for(let b=0;b<_;b++)h+=m[b]*g[b];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Cd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pd(i,t,e){const n=new WeakMap,s=new $t;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let F=o.attributes.position.count*S,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const A=new Float32Array(F*R*4*f),U=new Qo(A,F,R,f);U.type=nn,U.needsUpdate=!0;const E=S*4;for(let w=0;w<f;w++){const H=h[w],z=b[w],W=T[w],j=F*R*4*w;for(let V=0;V<H.count;V++){const Z=V*E;_===!0&&(s.fromBufferAttribute(H,V),A[j+Z+0]=s.x,A[j+Z+1]=s.y,A[j+Z+2]=s.z,A[j+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,V),A[j+Z+4]=s.x,A[j+Z+5]=s.y,A[j+Z+6]=s.z,A[j+Z+7]=0),p===!0&&(s.fromBufferAttribute(W,V),A[j+Z+8]=s.x,A[j+Z+9]=s.y,A[j+Z+10]=s.z,A[j+Z+11]=W.itemSize===4?s.w:1)}}d={count:f,texture:U,size:new bt(F,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ld(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class cl extends Ee{constructor(t,e,n,s,r,a,o,l,c,u=ri){if(u!==ri&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=Un),n===void 0&&u===di&&(n=ui),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hl=new Ee,Ka=new cl(1,1),ul=new Qo,dl=new gc,fl=new al,Za=[],Ja=[],Qa=new Float32Array(16),to=new Float32Array(9),eo=new Float32Array(4);function gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Za[s];if(r===void 0&&(r=new Float32Array(s),Za[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Es(i,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Id(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Ud(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Nd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Fd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;eo.set(n),i.uniformMatrix2fv(this.addr,!1,eo),ce(e,n)}}function Od(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;to.set(n),i.uniformMatrix3fv(this.addr,!1,to),ce(e,n)}}function Bd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Qa.set(n),i.uniformMatrix4fv(this.addr,!1,Qa),ce(e,n)}}function zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Xd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Yd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ka.compareFunction=Ko,r=Ka):r=hl,e.setTexture2D(t||r,s)}function $d(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dl,s)}function jd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fl,s)}function Kd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ul,s)}function Zd(i){switch(i){case 5126:return Dd;case 35664:return Id;case 35665:return Ud;case 35666:return Nd;case 35674:return Fd;case 35675:return Od;case 35676:return Bd;case 5124:case 35670:return zd;case 35667:case 35671:return Hd;case 35668:case 35672:return kd;case 35669:case 35673:return Gd;case 5125:return Vd;case 36294:return Wd;case 36295:return Xd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return jd;case 36289:case 36303:case 36311:case 36292:return Kd}}function Jd(i,t){i.uniform1fv(this.addr,t)}function Qd(i,t){const e=gi(t,this.size,2);i.uniform2fv(this.addr,e)}function tf(i,t){const e=gi(t,this.size,3);i.uniform3fv(this.addr,e)}function ef(i,t){const e=gi(t,this.size,4);i.uniform4fv(this.addr,e)}function nf(i,t){const e=gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sf(i,t){const e=gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rf(i,t){const e=gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function af(i,t){i.uniform1iv(this.addr,t)}function of(i,t){i.uniform2iv(this.addr,t)}function lf(i,t){i.uniform3iv(this.addr,t)}function cf(i,t){i.uniform4iv(this.addr,t)}function hf(i,t){i.uniform1uiv(this.addr,t)}function uf(i,t){i.uniform2uiv(this.addr,t)}function df(i,t){i.uniform3uiv(this.addr,t)}function ff(i,t){i.uniform4uiv(this.addr,t)}function pf(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||hl,r[a])}function mf(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dl,r[a])}function _f(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fl,r[a])}function gf(i,t,e){const n=this.cache,s=t.length,r=Es(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ul,r[a])}function vf(i){switch(i){case 5126:return Jd;case 35664:return Qd;case 35665:return tf;case 35666:return ef;case 35674:return nf;case 35675:return sf;case 35676:return rf;case 5124:case 35670:return af;case 35667:case 35671:return of;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return hf;case 36294:return uf;case 36295:return df;case 36296:return ff;case 35678:case 36198:case 36298:case 36306:case 35682:return pf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return gf}}class xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zd(e.type)}}class Mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vf(e.type)}}class Sf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function no(i,t){i.seq.push(t),i.map[t.id]=t}function Ef(i,t,e){const n=i.name,s=n.length;for(Zs.lastIndex=0;;){const r=Zs.exec(n),a=Zs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){no(e,c===void 0?new xf(o,i,t):new Mf(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Sf(o),no(e,f)),e=f}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ef(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function io(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yf=37297;let Tf=0;function bf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const so=new Pt;function Af(i){kt._getMatrix(so,kt.workingColorSpace,i);const t=`mat3( ${so.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case xs:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ro(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bf(i.getShaderSource(t),a)}else return s}function wf(i,t){const e=Af(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rf(i,t){let e;switch(t){case Wl:e="Linear";break;case Xl:e="Reinhard";break;case ql:e="Cineon";break;case Oo:e="ACESFilmic";break;case $l:e="AgX";break;case jl:e="Neutral";break;case Yl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const is=new P;function Cf(){kt.getLuminanceCoefficients(is);const i=is.x.toFixed(4),t=is.y.toFixed(4),e=is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Lf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Df(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function ao(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const If=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(i){return i.replace(If,Nf)}const Uf=new Map;function Nf(i,t){let e=Dt[t];if(e===void 0){const n=Uf.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vr(e)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lo(i){return i.replace(Ff,Of)}function Of(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function co(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function zf(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case hi:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function kf(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function Gf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bf(e),c=zf(e),u=Hf(e),f=kf(e),d=Gf(e),m=Pf(e),_=Lf(r),g=s.createProgram();let p,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ri).join(`
`),h.length>0&&(h+=`
`)):(p=[co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),h=[co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==xn?Rf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,wf("linearToOutputTexel",e.outputColorSpace),Cf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Vr(a),a=ao(a,e),a=oo(a,e),o=Vr(o),o=ao(o,e),o=oo(o,e),a=lo(a),o=lo(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=b+p+a,S=b+h+o,F=io(s,s.VERTEX_SHADER,T),R=io(s,s.FRAGMENT_SHADER,S);s.attachShader(g,F),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(w){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(F).trim(),W=s.getShaderInfoLog(R).trim();let j=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,F,R);else{const Z=ro(s,F,"vertex"),G=ro(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(V=!1);V&&(w.diagnostics={runnable:j,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:h}})}s.deleteShader(F),s.deleteShader(R),U=new fs(s,g),E=Df(s,g)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,yf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=R,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qf(t),e.set(t,n)),n}}class qf{constructor(t){this.id=Wf++,this.code=t,this.usedTimes=0}}function Yf(i,t,e,n,s,r,a){const o=new Jr,l=new Xf,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,w,H,z){const W=H.fog,j=z.geometry,V=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=Z&&Z.mapping===vs?Z.image.height:null,it=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ct=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=ct!==void 0?ct.length:0;let Ut=0;j.morphAttributes.position!==void 0&&(Ut=1),j.morphAttributes.normal!==void 0&&(Ut=2),j.morphAttributes.color!==void 0&&(Ut=3);let jt,q,tt,_t;if(it){const Xt=Ve[it];jt=Xt.vertexShader,q=Xt.fragmentShader}else jt=E.vertexShader,q=E.fragmentShader,l.update(E),tt=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const st=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),wt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,ne=!!E.map,zt=!!E.matcap,re=!!Z,I=!!E.aoMap,we=!!E.lightMap,Ft=!!E.bumpMap,Ot=!!E.normalMap,St=!!E.displacementMap,Qt=!!E.emissiveMap,Mt=!!E.metalnessMap,y=!!E.roughnessMap,v=E.anisotropy>0,N=E.clearcoat>0,Y=E.dispersion>0,K=E.iridescence>0,X=E.sheen>0,gt=E.transmission>0,rt=v&&!!E.anisotropyMap,ht=N&&!!E.clearcoatMap,Ht=N&&!!E.clearcoatNormalMap,J=N&&!!E.clearcoatRoughnessMap,ut=K&&!!E.iridescenceMap,Et=K&&!!E.iridescenceThicknessMap,Tt=X&&!!E.sheenColorMap,dt=X&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Lt=!!E.specularColorMap,Zt=!!E.specularIntensityMap,C=gt&&!!E.transmissionMap,nt=gt&&!!E.thicknessMap,k=!!E.gradientMap,$=!!E.alphaMap,lt=E.alphaTest>0,at=!!E.alphaHash,Rt=!!E.extensions;let ie=xn;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ie=i.toneMapping);const fe={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:q,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:wt,instancingColor:wt&&z.instanceColor!==null,instancingMorph:wt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pi,alphaToCoverage:!!E.alphaToCoverage,map:ne,matcap:zt,envMap:re,envMapMode:re&&Z.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:we,bumpMap:Ft,normalMap:Ot,displacementMap:d&&St,emissiveMap:Qt,normalMapObjectSpace:Ot&&E.normalMapType===Ql,normalMapTangentSpace:Ot&&E.normalMapType===jo,metalnessMap:Mt,roughnessMap:y,anisotropy:v,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:Ht,clearcoatRoughnessMap:J,dispersion:Y,iridescence:K,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:Tt,sheenRoughnessMap:dt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:Zt,transmission:gt,transmissionMap:C,thicknessMap:nt,gradientMap:k,opaque:E.transparent===!1&&E.blending===si&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:at,combine:E.combine,mapUv:ne&&g(E.map.channel),aoMapUv:I&&g(E.aoMap.channel),lightMapUv:we&&g(E.lightMap.channel),bumpMapUv:Ft&&g(E.bumpMap.channel),normalMapUv:Ot&&g(E.normalMap.channel),displacementMapUv:St&&g(E.displacementMap.channel),emissiveMapUv:Qt&&g(E.emissiveMap.channel),metalnessMapUv:Mt&&g(E.metalnessMap.channel),roughnessMapUv:y&&g(E.roughnessMap.channel),anisotropyMapUv:rt&&g(E.anisotropyMap.channel),clearcoatMapUv:ht&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(E.sheenRoughnessMap.channel),specularMapUv:Bt&&g(E.specularMap.channel),specularColorMapUv:Lt&&g(E.specularColorMap.channel),specularIntensityMapUv:Zt&&g(E.specularIntensityMap.channel),transmissionMapUv:C&&g(E.transmissionMap.channel),thicknessMapUv:nt&&g(E.thicknessMap.channel),alphaMapUv:$&&g(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ot||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ne||$),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:Qt&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===Se,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Rt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&E.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)M.push(w),M.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(b(M,E),T(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function T(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=_[E.type];let w;if(M){const H=Ve[M];w=Cc.clone(H.uniforms)}else w=E.uniforms;return w}function F(E,M){let w;for(let H=0,z=u.length;H<z;H++){const W=u[H];if(W.cacheKey===M){w=W,++w.usedTimes;break}}return w===void 0&&(w=new Vf(i,M,E,r),u.push(w)),w}function R(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:U}}function $f(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ho(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,_,g,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),t++,h}function o(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):e.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||jf),n.length>1&&n.sort(d||ho),s.length>1&&s.sort(d||ho)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Kf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new uo,i.set(n,[a])):s>=r.length?(a=new uo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new It};break;case"SpotLight":e={position:new P,direction:new P,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Jf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qf=0;function tp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ep(i){const t=new Zf,e=Jf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Kt,a=new Kt;function o(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,b=0,T=0,S=0,F=0,R=0,A=0;c.sort(tp);for(let E=0,M=c.length;E<M;E++){const w=c[E],H=w.color,z=w.intensity,W=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*z,f+=H.g*z,d+=H.b*z;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],z);A++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,G=e.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(H).multiplyScalar(z),V.distance=W,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[g]=V;const Z=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,Z.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[g]=Z.matrix,w.castShadow){const G=e.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=j,S++}g++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(H).multiplyScalar(z),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Z=w.shadow,G=e.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=w.shadow.matrix,T++}n.point[_]=V,_++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(z),V.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[h]=V,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==g||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==F||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,U.directionalLength=m,U.pointLength=_,U.spotLength=g,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=F,U.numLightProbes=A,n.version=Qf++)}function l(c,u){let f=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const T=c[h];if(T.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function fo(i){const t=new ep(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function np(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new fo(i),t.set(s,[o])):r>=a.length?(o=new fo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ip extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sp extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
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
}`;function op(i,t,e){let n=new Qr;const s=new bt,r=new bt,a=new $t,o=new ip({depthPacking:Jl}),l=new sp,c={},u=e.maxTextureSize,f={[Mn]:Se,[Se]:Mn,[en]:en},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:rp,fragmentShader:ap}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new se(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let h=this.type;this.render=function(R,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),H=i.state;H.setBlending(vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=h!==tn&&this.type===tn,W=h===tn&&this.type!==tn;for(let j=0,V=R.length;j<V;j++){const Z=R[j],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){const xt=this.type!==tn?{minFilter:He,magFilter:He}:{};G.map!==null&&G.map.dispose(),G.map=new Nn(s.x,s.y,xt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let xt=0;xt<ct;xt++){const Ut=G.getViewport(xt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),H.viewport(a),G.updateMatrices(Z,xt),n=G.getFrustum(),S(A,U,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===tn&&b(G,U),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(E,M,w)};function b(R,A){const U=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,U,m,g,null)}function T(R,A,U,E){let M=null;const w=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,z=A.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let j=W[z];j===void 0&&(j=M.clone(),W[z]=j,A.addEventListener("dispose",F)),M=j}if(M.visible=A.visible,M.wireframe=A.wireframe,E===tn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=U}return M}function S(R,A,U,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===tn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const z=t.update(R),W=R.material;if(Array.isArray(W)){const j=z.groups;for(let V=0,Z=j.length;V<Z;V++){const G=j[V],it=W[G.materialIndex];if(it&&it.visible){const ct=T(R,it,E,M);R.onBeforeShadow(i,R,A,U,z,ct,G),i.renderBufferDirect(U,null,z,ct,R,G),R.onAfterShadow(i,R,A,U,z,ct,G)}}}else if(W.visible){const j=T(R,W,E,M);R.onBeforeShadow(i,R,A,U,z,j,null),i.renderBufferDirect(U,null,z,j,R,null),R.onAfterShadow(i,R,A,U,z,j,null)}}const H=R.children;for(let z=0,W=H.length;z<W;z++)S(H[z],A,U,E,M)}function F(R){R.target.removeEventListener("dispose",F);for(const U in c){const E=c[U],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const lp={[rr]:ar,[or]:hr,[lr]:ur,[li]:cr,[ar]:rr,[hr]:or,[ur]:lr,[cr]:li};function cp(i,t){function e(){let C=!1;const nt=new $t;let k=null;const $=new $t(0,0,0,0);return{setMask:function(lt){k!==lt&&!C&&(i.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){C=lt},setClear:function(lt,at,Rt,ie,fe){fe===!0&&(lt*=ie,at*=ie,Rt*=ie),nt.set(lt,at,Rt,ie),$.equals(nt)===!1&&(i.clearColor(lt,at,Rt,ie),$.copy(nt))},reset:function(){C=!1,k=null,$.set(-1,0,0,0)}}}function n(){let C=!1,nt=!1,k=null,$=null,lt=null;return{setReversed:function(at){if(nt!==at){const Rt=t.get("EXT_clip_control");nt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const ie=lt;lt=null,this.setClear(ie)}nt=at},getReversed:function(){return nt},setTest:function(at){at?st(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(at){k!==at&&!C&&(i.depthMask(at),k=at)},setFunc:function(at){if(nt&&(at=lp[at]),$!==at){switch(at){case rr:i.depthFunc(i.NEVER);break;case ar:i.depthFunc(i.ALWAYS);break;case or:i.depthFunc(i.LESS);break;case li:i.depthFunc(i.LEQUAL);break;case lr:i.depthFunc(i.EQUAL);break;case cr:i.depthFunc(i.GEQUAL);break;case hr:i.depthFunc(i.GREATER);break;case ur:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){C=at},setClear:function(at){lt!==at&&(nt&&(at=1-at),i.clearDepth(at),lt=at)},reset:function(){C=!1,k=null,$=null,lt=null,nt=!1}}}function s(){let C=!1,nt=null,k=null,$=null,lt=null,at=null,Rt=null,ie=null,fe=null;return{setTest:function(Xt){C||(Xt?st(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Xt){nt!==Xt&&!C&&(i.stencilMask(Xt),nt=Xt)},setFunc:function(Xt,De,Ye){(k!==Xt||$!==De||lt!==Ye)&&(i.stencilFunc(Xt,De,Ye),k=Xt,$=De,lt=Ye)},setOp:function(Xt,De,Ye){(at!==Xt||Rt!==De||ie!==Ye)&&(i.stencilOp(Xt,De,Ye),at=Xt,Rt=De,ie=Ye)},setLocked:function(Xt){C=Xt},setClear:function(Xt){fe!==Xt&&(i.clearStencil(Xt),fe=Xt)},reset:function(){C=!1,nt=null,k=null,$=null,lt=null,at=null,Rt=null,ie=null,fe=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,b=null,T=null,S=null,F=null,R=null,A=new It(0,0,0),U=0,E=!1,M=null,w=null,H=null,z=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Z>=2);let it=null,ct={};const xt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),jt=new $t().fromArray(xt),q=new $t().fromArray(Ut);function tt(C,nt,k,$){const lt=new Uint8Array(4),at=i.createTexture();i.bindTexture(C,at),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<k;Rt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return at}const _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(li),Ft(!1),Ot(_a),st(i.CULL_FACE),I(vn);function st(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function yt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function wt(C,nt){return f[C]!==nt?(i.bindFramebuffer(C,nt),f[C]=nt,C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=nt),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Nt(C,nt){let k=m,$=!1;if(C){k=d.get(nt),k===void 0&&(k=[],d.set(nt,k));const lt=C.textures;if(k.length!==lt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Rt=lt.length;at<Rt;at++)k[at]=i.COLOR_ATTACHMENT0+at;k.length=lt.length,$=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,$=!0);$&&i.drawBuffers(k)}function ne(C){return _!==C?(i.useProgram(C),_=C,!0):!1}const zt={[Pn]:i.FUNC_ADD,[bl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};zt[wl]=i.MIN,zt[Rl]=i.MAX;const re={[Cl]:i.ZERO,[Pl]:i.ONE,[Ll]:i.SRC_COLOR,[ir]:i.SRC_ALPHA,[Ol]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[sr]:i.ONE_MINUS_SRC_ALPHA,[Fl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[Bl]:i.CONSTANT_COLOR,[zl]:i.ONE_MINUS_CONSTANT_COLOR,[Hl]:i.CONSTANT_ALPHA,[kl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(C,nt,k,$,lt,at,Rt,ie,fe,Xt){if(C===vn){g===!0&&(yt(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),C!==Tl){if(C!==p||Xt!==E){if((h!==Pn||S!==Pn)&&(i.blendEquation(i.FUNC_ADD),h=Pn,S=Pn),Xt)switch(C){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,T=null,F=null,R=null,A.set(0,0,0),U=0,p=C,E=Xt}return}lt=lt||nt,at=at||k,Rt=Rt||$,(nt!==h||lt!==S)&&(i.blendEquationSeparate(zt[nt],zt[lt]),h=nt,S=lt),(k!==b||$!==T||at!==F||Rt!==R)&&(i.blendFuncSeparate(re[k],re[$],re[at],re[Rt]),b=k,T=$,F=at,R=Rt),(ie.equals(A)===!1||fe!==U)&&(i.blendColor(ie.r,ie.g,ie.b,fe),A.copy(ie),U=fe),p=C,E=!1}function we(C,nt){C.side===en?yt(i.CULL_FACE):st(i.CULL_FACE);let k=C.side===Se;nt&&(k=!k),Ft(k),C.blending===si&&C.transparent===!1?I(vn):I(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const $=C.stencilWrite;o.setTest($),$&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Qt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function Ot(C){C!==El?(st(i.CULL_FACE),C!==w&&(C===_a?i.cullFace(i.BACK):C===yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),w=C}function St(C){C!==H&&(V&&i.lineWidth(C),H=C)}function Qt(C,nt,k){C?(st(i.POLYGON_OFFSET_FILL),(z!==nt||W!==k)&&(i.polygonOffset(nt,k),z=nt,W=k)):yt(i.POLYGON_OFFSET_FILL)}function Mt(C){C?st(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function y(C){C===void 0&&(C=i.TEXTURE0+j-1),it!==C&&(i.activeTexture(C),it=C)}function v(C,nt,k){k===void 0&&(it===null?k=i.TEXTURE0+j-1:k=it);let $=ct[k];$===void 0&&($={type:void 0,texture:void 0},ct[k]=$),($.type!==C||$.texture!==nt)&&(it!==k&&(i.activeTexture(k),it=k),i.bindTexture(C,nt||_t[C]),$.type=C,$.texture=nt)}function N(){const C=ct[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(C){jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function dt(C){q.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),q.copy(C))}function Bt(C,nt){let k=c.get(nt);k===void 0&&(k=new WeakMap,c.set(nt,k));let $=k.get(C);$===void 0&&($=i.getUniformBlockIndex(nt,C.name),k.set(C,$))}function Lt(C,nt){const $=c.get(nt).get(C);l.get(nt)!==$&&(i.uniformBlockBinding(nt,$,C.__bindingPointIndex),l.set(nt,$))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,ct={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,h=null,b=null,T=null,S=null,F=null,R=null,A=new It(0,0,0),U=0,E=!1,M=null,w=null,H=null,z=null,W=null,jt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:yt,bindFramebuffer:wt,drawBuffers:Nt,useProgram:ne,setBlending:I,setMaterial:we,setFlipSided:Ft,setCullFace:Ot,setLineWidth:St,setPolygonOffset:Qt,setScissorTest:Mt,activeTexture:y,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ut,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Ht,texStorage3D:J,texSubImage2D:X,texSubImage3D:gt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Tt,viewport:dt,reset:Zt}}function po(i,t,e,n){const s=hp(n);switch(e){case Go:return i*t;case Wo:return i*t;case Xo:return i*t*2;case qo:return i*t/s.components*s.byteLength;case jr:return i*t/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case Kr:return i*t*2/s.components*s.byteLength;case Vo:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case Zr:return i*t*4/s.components*s.byteLength;case os:case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cs:case hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gr:case xr:return Math.max(i,16)*Math.max(t,8)/4;case _r:case vr:return Math.max(i,8)*Math.max(t,8)/2;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case br:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ar:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case us:case Or:case Br:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case zr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case kr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hp(i){switch(i){case an:case zo:return{byteLength:1,components:1};case Pi:case Ho:case Li:return{byteLength:2,components:1};case Yr:case $r:return{byteLength:2,components:4};case Un:case qr:case nn:return{byteLength:4,components:1};case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function up(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):ms("canvas")}function g(y,v,N){let Y=1;const K=Mt(y);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(Y*K.width),gt=Math.floor(Y*K.height);f===void 0&&(f=_(X,gt));const rt=v?_(X,gt):f;return rt.width=X,rt.height=gt,rt.getContext("2d").drawImage(y,0,0,X,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+gt+")."),rt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,v,N,Y,K=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=v;if(v===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),v===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){const gt=K?xs:kt.getTransfer(Y);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=gt===qt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(y,v){let N;return y?v===null||v===Un||v===ui?N=i.DEPTH24_STENCIL8:v===nn?N=i.DEPTH32F_STENCIL8:v===Pi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===ui?N=i.DEPTH_COMPONENT24:v===nn?N=i.DEPTH_COMPONENT32F:v===Pi&&(N=i.DEPTH_COMPONENT16),N}function F(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==He&&y.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){const v=y.target;v.removeEventListener("dispose",R),U(v),v.isVideoTexture&&u.delete(v)}function A(y){const v=y.target;v.removeEventListener("dispose",A),M(v)}function U(y){const v=n.get(y);if(v.__webglInit===void 0)return;const N=y.source,Y=d.get(N);if(Y){const K=Y[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(y),Object.keys(Y).length===0&&d.delete(N)}n.remove(y)}function E(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const N=y.source,Y=d.get(N);delete Y[v.__cacheKey],a.memory.textures--}function M(y){const v=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let K=0;K<v.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=y.textures;for(let Y=0,K=N.length;Y<K;Y++){const X=n.get(N[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(y)}let w=0;function H(){w=0}function z(){const y=w;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),w+=1,y}function W(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function j(y,v){const N=n.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const Y=y.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,y,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function V(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){q(N,y,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function Z(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){q(N,y,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function G(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){tt(N,y,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const it={[pr]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},ct={[He]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[Oi]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[Ts]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},xt={[tc]:i.NEVER,[ac]:i.ALWAYS,[ec]:i.LESS,[Ko]:i.LEQUAL,[nc]:i.EQUAL,[rc]:i.GEQUAL,[ic]:i.GREATER,[sc]:i.NOTEQUAL};function Ut(y,v){if(v.type===nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===Ts||v.magFilter===Oi||v.magFilter===In||v.minFilter===We||v.minFilter===Ts||v.minFilter===Oi||v.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,it[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==Oi&&v.minFilter!==In||v.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function jt(y,v){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const Y=v.source;let K=d.get(Y);K===void 0&&(K={},d.set(Y,K));const X=W(v);if(X!==y.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[X].usedTimes++;const gt=K[y.__cacheKey];gt!==void 0&&(K[y.__cacheKey].usedTimes--,gt.usedTimes===0&&E(v)),y.__cacheKey=X,y.__webglTexture=K[X].texture}return N}function q(y,v,N){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const K=jt(y,v),X=v.source;e.bindTexture(Y,y.__webglTexture,i.TEXTURE0+N);const gt=n.get(X);if(X.version!==gt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);const rt=kt.getPrimaries(kt.workingColorSpace),ht=v.colorSpace===_n?null:kt.getPrimaries(v.colorSpace),Ht=v.colorSpace===_n||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let J=g(v.image,!1,s.maxTextureSize);J=Qt(v,J);const ut=r.convert(v.format,v.colorSpace),Et=r.convert(v.type);let Tt=T(v.internalFormat,ut,Et,v.colorSpace,v.isVideoTexture);Ut(Y,v);let dt;const Bt=v.mipmaps,Lt=v.isVideoTexture!==!0,Zt=gt.__version===void 0||K===!0,C=X.dataReady,nt=F(v,J);if(v.isDepthTexture)Tt=S(v.format===di,v.type),Zt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Tt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,ut,Et,null));else if(v.isDataTexture)if(Bt.length>0){Lt&&Zt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Bt[0].width,Bt[0].height);for(let k=0,$=Bt.length;k<$;k++)dt=Bt[k],Lt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,k,Tt,dt.width,dt.height,0,ut,Et,dt.data);v.generateMipmaps=!1}else Lt?(Zt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,J.width,J.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,Tt,J.width,J.height,0,ut,Et,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,Bt[0].width,Bt[0].height,J.depth);for(let k=0,$=Bt.length;k<$;k++)if(dt=Bt[k],v.format!==Be)if(ut!==null)if(Lt){if(C)if(v.layerUpdates.size>0){const lt=po(dt.width,dt.height,v.format,v.type);for(const at of v.layerUpdates){const Rt=dt.data.subarray(at*lt/dt.data.BYTES_PER_ELEMENT,(at+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,at,dt.width,dt.height,1,ut,Rt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,J.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Tt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,J.depth,ut,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Tt,dt.width,dt.height,J.depth,0,ut,Et,dt.data)}else{Lt&&Zt&&e.texStorage2D(i.TEXTURE_2D,nt,Tt,Bt[0].width,Bt[0].height);for(let k=0,$=Bt.length;k<$;k++)dt=Bt[k],v.format!==Be?ut!==null?Lt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Tt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,k,Tt,dt.width,dt.height,0,ut,Et,dt.data)}else if(v.isDataArrayTexture)if(Lt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Tt,J.width,J.height,J.depth),C)if(v.layerUpdates.size>0){const k=po(J.width,J.height,v.format,v.type);for(const $ of v.layerUpdates){const lt=J.data.subarray($*k/J.data.BYTES_PER_ELEMENT,($+1)*k/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ut,Et,lt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(v.isData3DTexture)Lt?(Zt&&e.texStorage3D(i.TEXTURE_3D,nt,Tt,J.width,J.height,J.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(v.isFramebufferTexture){if(Zt)if(Lt)e.texStorage2D(i.TEXTURE_2D,nt,Tt,J.width,J.height);else{let k=J.width,$=J.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Tt,k,$,0,ut,Et,null),k>>=1,$>>=1}}else if(Bt.length>0){if(Lt&&Zt){const k=Mt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Tt,k.width,k.height)}for(let k=0,$=Bt.length;k<$;k++)dt=Bt[k],Lt?C&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ut,Et,dt):e.texImage2D(i.TEXTURE_2D,k,Tt,ut,Et,dt);v.generateMipmaps=!1}else if(Lt){if(Zt){const k=Mt(J);e.texStorage2D(i.TEXTURE_2D,nt,Tt,k.width,k.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ut,Et,J);p(v)&&h(Y),gt.__version=X.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function tt(y,v,N){if(v.image.length!==6)return;const Y=jt(y,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const X=n.get(K);if(K.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const gt=kt.getPrimaries(kt.workingColorSpace),rt=v.colorSpace===_n?null:kt.getPrimaries(v.colorSpace),ht=v.colorSpace===_n||gt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let $=0;$<6;$++)!Ht&&!J?ut[$]=g(v.image[$],!0,s.maxCubemapSize):ut[$]=J?v.image[$].image:v.image[$],ut[$]=Qt(v,ut[$]);const Et=ut[0],Tt=r.convert(v.format,v.colorSpace),dt=r.convert(v.type),Bt=T(v.internalFormat,Tt,dt,v.colorSpace),Lt=v.isVideoTexture!==!0,Zt=X.__version===void 0||Y===!0,C=K.dataReady;let nt=F(v,Et);Ut(i.TEXTURE_CUBE_MAP,v);let k;if(Ht){Lt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Bt,Et.width,Et.height);for(let $=0;$<6;$++){k=ut[$].mipmaps;for(let lt=0;lt<k.length;lt++){const at=k[lt];v.format!==Be?Tt!==null?Lt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,at.width,at.height,Tt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Bt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,at.width,at.height,Tt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Bt,at.width,at.height,0,Tt,dt,at.data)}}}else{if(k=v.mipmaps,Lt&&Zt){k.length>0&&nt++;const $=Mt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(J){Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ut[$].width,ut[$].height,Tt,dt,ut[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,ut[$].width,ut[$].height,0,Tt,dt,ut[$].data);for(let lt=0;lt<k.length;lt++){const Rt=k[lt].image[$].image;Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Rt.width,Rt.height,Tt,dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Bt,Rt.width,Rt.height,0,Tt,dt,Rt.data)}}else{Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Tt,dt,ut[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,Tt,dt,ut[$]);for(let lt=0;lt<k.length;lt++){const at=k[lt];Lt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Tt,dt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Bt,Tt,dt,at.image[$])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),X.__version=K.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _t(y,v,N,Y,K,X){const gt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=T(N.internalFormat,gt,rt,N.colorSpace),Ht=n.get(v),J=n.get(N);if(J.__renderTarget=v,!Ht.__hasExternalTextures){const ut=Math.max(1,v.width>>X),Et=Math.max(1,v.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,X,ht,ut,Et,v.depth,0,gt,rt,null):e.texImage2D(K,X,ht,ut,Et,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,Ft(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(y,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer){const Y=v.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,X=S(v.stencilBuffer,K),gt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ft(v);Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,y)}else{const Y=v.textures;for(let K=0;K<Y.length;K++){const X=Y[K],gt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ht=T(X.internalFormat,gt,rt,X.colorSpace),Ht=Ft(v);N&&Ot(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,ht,v.width,v.height):Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const K=Y.__webglTexture,X=Ft(v);if(v.depthTexture.format===ri)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===di)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(y){const v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const Y=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=Y}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");yt(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(v.__webglDepthbuffer[Y],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(y,v,N){const Y=n.get(y);v!==void 0&&_t(Y.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&wt(y)}function ne(y){const v=y.texture,N=n.get(y),Y=n.get(v);y.addEventListener("dispose",A);const K=y.textures,X=y.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(gt)for(let rt=0,ht=K.length;rt<ht;rt++){const Ht=n.get(K[rt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Ot(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<K.length;rt++){const ht=K[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);const Ht=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),ut=T(ht.internalFormat,Ht,J,ht.colorSpace,y.isXRRenderTarget===!0),Et=Ft(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ut,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)_t(N.__webglFramebuffer[rt][ht],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else _t(N.__webglFramebuffer[rt],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let rt=0,ht=K.length;rt<ht;rt++){const Ht=K[rt],J=n.get(Ht);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ut(i.TEXTURE_2D,Ht),_t(N.__webglFramebuffer,y,Ht,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Ht)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ut(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)_t(N.__webglFramebuffer[ht],y,v,i.COLOR_ATTACHMENT0,rt,ht);else _t(N.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,rt,0);p(v)&&h(rt),e.unbindTexture()}y.depthBuffer&&wt(y)}function zt(y){const v=y.textures;for(let N=0,Y=v.length;N<Y;N++){const K=v[N];if(p(K)){const X=b(y),gt=n.get(K).__webglTexture;e.bindTexture(X,gt),h(X),e.unbindTexture()}}}const re=[],I=[];function we(y){if(y.samples>0){if(Ot(y)===!1){const v=y.textures,N=y.width,Y=y.height;let K=i.COLOR_BUFFER_BIT;const X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(y),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const Ht=n.get(v[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(i.COLOR_ATTACHMENT0+ht),y.depthBuffer&&y.resolveDepthBuffer===!1&&(re.push(X),I.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);const Ht=n.get(v[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ft(y){return Math.min(s.maxSamples,y.samples)}function Ot(y){const v=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function Qt(y,v){const N=y.colorSpace,Y=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==pi&&N!==_n&&(kt.getTransfer(N)===qt?(Y!==Be||K!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Mt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ot}function dp(i,t){function e(n,s=_n){let r;const a=kt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Yr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.BYTE;if(n===Ho)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===qr)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===Go)return i.ALPHA;if(n===Vo)return i.RGB;if(n===Be)return i.RGBA;if(n===Wo)return i.LUMINANCE;if(n===Xo)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===jr)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===Zr)return i.RGBA_INTEGER;if(n===os||n===ls||n===cs||n===hs)if(a===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===gr||n===vr||n===xr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mr||n===Sr||n===Er)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mr||n===Sr)return a===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Er)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yr||n===Tr||n===br||n===Ar||n===wr||n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ir||n===Ur||n===Nr||n===Fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===br)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ar)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ir)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ur)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fr)return a===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===us||n===Or||n===Br)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===us)return a===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Or)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Br)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===zr||n===Hr||n===kr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class fp extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gn extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_p=`
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

}`;class gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:mp,fragmentShader:_p,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vp extends On{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=new gp,p=e.getContextAttributes();let h=null,b=null;const T=[],S=[],F=new bt;let R=null;const A=new Ae;A.viewport=new $t;const U=new Ae;U.viewport=new $t;const E=[A,U],M=new fp;let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=T[q];return tt===void 0&&(tt=new Js,T[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=T[q];return tt===void 0&&(tt=new Js,T[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=T[q];return tt===void 0&&(tt=new Js,T[q]=tt),tt.getHandSpace()};function z(q){const tt=S.indexOf(q.inputSource);if(tt===-1)return;const _t=T[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let q=0;q<T.length;q++){const tt=S[q];tt!==null&&(S[q]=null,T[q].disconnect(tt))}w=null,H=null,g.reset(),t.setRenderTarget(h),m=null,d=null,f=null,s=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Be,type:an,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,_t=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?di:ri,_t=p.stencil?ui:Un);const yt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Nn(d.textureWidth,d.textureHeight,{format:Be,type:an,depthTexture:new cl(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(q){for(let tt=0;tt<q.removed.length;tt++){const _t=q.removed[tt],st=S.indexOf(_t);st>=0&&(S[st]=null,T[st].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){const _t=q.added[tt];let st=S.indexOf(_t);if(st===-1){for(let wt=0;wt<T.length;wt++)if(wt>=S.length){S.push(_t),st=wt;break}else if(S[wt]===null){S[wt]=_t,st=wt;break}if(st===-1)break}const yt=T[st];yt&&yt.connect(_t)}}const V=new P,Z=new P;function G(q,tt,_t){V.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);const st=V.distanceTo(Z),yt=tt.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Nt=yt[14]/(yt[10]-1),ne=yt[14]/(yt[10]+1),zt=(yt[9]+1)/yt[5],re=(yt[9]-1)/yt[5],I=(yt[8]-1)/yt[0],we=(wt[8]+1)/wt[0],Ft=Nt*I,Ot=Nt*we,St=st/(-I+we),Qt=St*-I;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Qt),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),yt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Mt=Nt+St,y=ne+St,v=Ft-Qt,N=Ot+(st-Qt),Y=zt*ne/y*Mt,K=re*ne/y*Mt;q.projectionMatrix.makePerspective(v,N,Y,K,Mt,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),M.near=U.near=A.near=tt,M.far=U.far=A.far=_t,(w!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,H=M.far),A.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|U.layers.mask;const st=q.parent,yt=M.cameras;it(M,st);for(let wt=0;wt<yt.length;wt++)it(yt[wt],st);yt.length===2?G(M,A,U):M.projectionMatrix.copy(A.projectionMatrix),ct(q,M,st)};function ct(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let xt=null;function Ut(q,tt){if(u=tt.getViewerPose(c||a),_=tt,u!==null){const _t=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let st=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let wt=0;wt<_t.length;wt++){const Nt=_t[wt];let ne=null;if(m!==null)ne=m.getViewport(Nt);else{const re=f.getViewSubImage(d,Nt);ne=re.viewport,wt===0&&(t.setRenderTargetTextures(b,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(b))}let zt=E[wt];zt===void 0&&(zt=new Ae,zt.layers.enable(wt),zt.viewport=new $t,E[wt]=zt),zt.matrix.fromArray(Nt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Nt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ne.x,ne.y,ne.width,ne.height),wt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(zt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const wt=f.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,s.renderState)}}for(let _t=0;_t<T.length;_t++){const st=S[_t],yt=T[_t];st!==null&&yt!==void 0&&yt.update(st,tt,c||a)}xt&&xt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const jt=new ol;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}}const Rn=new qe,xp=new Kt;function Mp(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,sl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,b,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,T):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Se&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Se&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=t.get(h),T=b.envMap,S=b.envMapRotation;T&&(p.envMap.value=T,Rn.copy(S),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),p.envMapRotation.value.setFromMatrix4(xp.makeRotationFromEuler(Rn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=T*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Se&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const b=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function c(b,T){let S=s[b.id];S===void 0&&(_(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",p));const F=T.program;n.updateUBOMapping(b,F);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){const T=f();b.__bindingPointIndex=T;const S=i.createBuffer(),F=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],S=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,A=S.length;R<A;R++){const U=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,M=U.length;E<M;E++){const w=U[E];if(m(w,R,E,F)===!0){const H=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let j=0;j<z.length;j++){const V=z[j],Z=g(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+W,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,S,F){const R=b.value,A=T+"_"+S;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{const U=F[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(b){const T=b.uniforms;let S=0;const F=16;for(let A=0,U=T.length;A<U;A++){const E=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,w=E.length;M<w;M++){const H=E[M],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,j=z.length;W<j;W++){const V=z[W],Z=g(V),G=S%F,it=G%Z.boundary,ct=G+it;S+=it,ct!==0&&F-ct<Z.storage&&(S+=F-ct),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Z.storage}}}const R=S%F;return R>0&&(S+=F-R),b.__size=S,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Ep{constructor(t={}){const{canvas:e=cc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=xn,this.toneMappingExposure=1;const S=this;let F=!1,R=0,A=0,U=null,E=-1,M=null;const w=new $t,H=new $t;let z=null;const W=new It(0);let j=0,V=e.width,Z=e.height,G=1,it=null,ct=null;const xt=new $t(0,0,V,Z),Ut=new $t(0,0,V,Z);let jt=!1;const q=new Qr;let tt=!1,_t=!1;const st=new Kt,yt=new Kt,wt=new P,Nt=new $t,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function re(){return U===null?G:1}let I=n;function we(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xr}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const L="webgl2";if(I=we(L,x),I===null)throw we(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ft,Ot,St,Qt,Mt,y,v,N,Y,K,X,gt,rt,ht,Ht,J,ut,Et,Tt,dt,Bt,Lt,Zt,C;function nt(){Ft=new Ad(I),Ft.init(),Lt=new dp(I,Ft),Ot=new Md(I,Ft,t,Lt),St=new cp(I,Ft),Ot.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),Qt=new Cd(I),Mt=new $f,y=new up(I,Ft,St,Mt,Ot,Lt,Qt),v=new Ed(S),N=new bd(S),Y=new Fc(I),Zt=new vd(I,Y),K=new wd(I,Y,Qt,Zt),X=new Ld(I,K,Y,Qt),Tt=new Pd(I,Ot,y),J=new Sd(Mt),gt=new Yf(S,v,N,Ft,Ot,Zt,J),rt=new Mp(S,Mt),ht=new Kf,Ht=new np(Ft),Et=new gd(S,v,N,St,X,m,l),ut=new op(S,X,Ot),C=new Sp(I,Qt,Ot,St),dt=new xd(I,Ft,Qt),Bt=new Rd(I,Ft,Qt),Qt.programs=gt.programs,S.capabilities=Ot,S.extensions=Ft,S.properties=Mt,S.renderLists=ht,S.shadowMap=ut,S.state=St,S.info=Qt}nt();const k=new vp(S,I);this.xr=k,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=Ft.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ft.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(V,Z,!1))},this.getSize=function(x){return x.set(V,Z)},this.setSize=function(x,L,O=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,Z=L,e.width=Math.floor(x*G),e.height=Math.floor(L*G),O===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(V*G,Z*G).floor()},this.setDrawingBufferSize=function(x,L,O){V=x,Z=L,G=O,e.width=Math.floor(x*O),e.height=Math.floor(L*O),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(xt)},this.setViewport=function(x,L,O,B){x.isVector4?xt.set(x.x,x.y,x.z,x.w):xt.set(x,L,O,B),St.viewport(w.copy(xt).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Ut)},this.setScissor=function(x,L,O,B){x.isVector4?Ut.set(x.x,x.y,x.z,x.w):Ut.set(x,L,O,B),St.scissor(H.copy(Ut).multiplyScalar(G).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(x){St.setScissorTest(jt=x)},this.setOpaqueSort=function(x){it=x},this.setTransparentSort=function(x){ct=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,L=!0,O=!0){let B=0;if(x){let D=!1;if(U!==null){const Q=U.texture.format;D=Q===Zr||Q===Kr||Q===jr}if(D){const Q=U.texture.type,ot=Q===an||Q===Un||Q===Pi||Q===ui||Q===Yr||Q===$r,ft=Et.getClearColor(),pt=Et.getClearAlpha(),At=ft.r,Ct=ft.g,mt=ft.b;ot?(_[0]=At,_[1]=Ct,_[2]=mt,_[3]=pt,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=At,g[1]=Ct,g[2]=mt,g[3]=pt,I.clearBufferiv(I.COLOR,0,g))}else B|=I.COLOR_BUFFER_BIT}L&&(B|=I.DEPTH_BUFFER_BIT),O&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),Ht.dispose(),Mt.dispose(),v.dispose(),N.dispose(),X.dispose(),Zt.dispose(),C.dispose(),gt.dispose(),k.dispose(),k.removeEventListener("sessionstart",la),k.removeEventListener("sessionend",ca),En.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const x=Qt.autoReset,L=ut.enabled,O=ut.autoUpdate,B=ut.needsUpdate,D=ut.type;nt(),Qt.autoReset=x,ut.enabled=L,ut.autoUpdate=O,ut.needsUpdate=B,ut.type=D}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Rt(x){const L=x.target;L.removeEventListener("dispose",Rt),ie(L)}function ie(x){fe(x),Mt.remove(x)}function fe(x){const L=Mt.get(x).programs;L!==void 0&&(L.forEach(function(O){gt.releaseProgram(O)}),x.isShaderMaterial&&gt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,O,B,D,Q){L===null&&(L=ne);const ot=D.isMesh&&D.matrixWorld.determinant()<0,ft=xl(x,L,O,B,D);St.setMaterial(B,ot);let pt=O.index,At=1;if(B.wireframe===!0){if(pt=K.getWireframeAttribute(O),pt===void 0)return;At=2}const Ct=O.drawRange,mt=O.attributes.position;let Gt=Ct.start*At,Jt=(Ct.start+Ct.count)*At;Q!==null&&(Gt=Math.max(Gt,Q.start*At),Jt=Math.min(Jt,(Q.start+Q.count)*At)),pt!==null?(Gt=Math.max(Gt,0),Jt=Math.min(Jt,pt.count)):mt!=null&&(Gt=Math.max(Gt,0),Jt=Math.min(Jt,mt.count));const te=Jt-Gt;if(te<0||te===1/0)return;Zt.setup(D,B,ft,O,pt);let ve,Vt=dt;if(pt!==null&&(ve=Y.get(pt),Vt=Bt,Vt.setIndex(ve)),D.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*re()),Vt.setMode(I.LINES)):Vt.setMode(I.TRIANGLES);else if(D.isLine){let vt=B.linewidth;vt===void 0&&(vt=1),St.setLineWidth(vt*re()),D.isLineSegments?Vt.setMode(I.LINES):D.isLineLoop?Vt.setMode(I.LINE_LOOP):Vt.setMode(I.LINE_STRIP)}else D.isPoints?Vt.setMode(I.POINTS):D.isSprite&&Vt.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Vt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Vt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const vt=D._multiDrawStarts,$e=D._multiDrawCounts,Wt=D._multiDrawCount,Ie=pt?Y.get(pt).bytesPerElement:1,Bn=Mt.get(B).currentProgram.getUniforms();for(let ye=0;ye<Wt;ye++)Bn.setValue(I,"_gl_DrawID",ye),Vt.render(vt[ye]/Ie,$e[ye])}else if(D.isInstancedMesh)Vt.renderInstances(Gt,te,D.count);else if(O.isInstancedBufferGeometry){const vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,$e=Math.min(O.instanceCount,vt);Vt.renderInstances(Gt,te,$e)}else Vt.render(Gt,te)};function Xt(x,L,O){x.transparent===!0&&x.side===en&&x.forceSinglePass===!1?(x.side=Se,x.needsUpdate=!0,Fi(x,L,O),x.side=Mn,x.needsUpdate=!0,Fi(x,L,O),x.side=en):Fi(x,L,O)}this.compile=function(x,L,O=null){O===null&&(O=x),h=Ht.get(O),h.init(L),T.push(h),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),x!==O&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(h.pushLight(D),D.castShadow&&h.pushShadow(D))}),h.setupLights();const B=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];Xt(ft,O,D),B.add(ft)}else Xt(Q,O,D),B.add(Q)}),T.pop(),h=null,B},this.compileAsync=function(x,L,O=null){const B=this.compile(x,L,O);return new Promise(D=>{function Q(){if(B.forEach(function(ot){Mt.get(ot).currentProgram.isReady()&&B.delete(ot)}),B.size===0){D(x);return}setTimeout(Q,10)}Ft.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let De=null;function Ye(x){De&&De(x)}function la(){En.stop()}function ca(){En.start()}const En=new ol;En.setAnimationLoop(Ye),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(x){De=x,k.setAnimationLoop(x),x===null?En.stop():En.start()},k.addEventListener("sessionstart",la),k.addEventListener("sessionend",ca),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(L),L=k.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,U),h=Ht.get(x,T.length),h.init(L),T.push(h),yt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(yt),_t=this.localClippingEnabled,tt=J.init(this.clippingPlanes,_t),p=ht.get(x,b.length),p.init(),b.push(p),k.enabled===!0&&k.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&ys(Q,L,-1/0,S.sortObjects)}ys(x,L,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(it,ct),zt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,zt&&Et.addToRenderList(p,x),this.info.render.frame++,tt===!0&&J.beginShadows();const O=h.state.shadowsArray;ut.render(O,x,L),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,D=p.transmissive;if(h.setupLights(),L.isArrayCamera){const Q=L.cameras;if(D.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];ua(B,D,x,pt)}zt&&Et.render(x);for(let ot=0,ft=Q.length;ot<ft;ot++){const pt=Q[ot];ha(p,x,pt,pt.viewport)}}else D.length>0&&ua(B,D,x,L),zt&&Et.render(x),ha(p,x,L);U!==null&&(y.updateMultisampleRenderTarget(U),y.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,L),Zt.resetDefaultState(),E=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],tt===!0&&J.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function ys(x,L,O,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){B&&Nt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(yt);const ot=X.update(x),ft=x.material;ft.visible&&p.push(x,ot,ft,O,Nt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const ot=X.update(x),ft=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Nt.copy(x.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Nt.copy(ot.boundingSphere.center)),Nt.applyMatrix4(x.matrixWorld).applyMatrix4(yt)),Array.isArray(ft)){const pt=ot.groups;for(let At=0,Ct=pt.length;At<Ct;At++){const mt=pt[At],Gt=ft[mt.materialIndex];Gt&&Gt.visible&&p.push(x,ot,Gt,O,Nt.z,mt)}}else ft.visible&&p.push(x,ot,ft,O,Nt.z,null)}}const Q=x.children;for(let ot=0,ft=Q.length;ot<ft;ot++)ys(Q[ot],L,O,B)}function ha(x,L,O,B){const D=x.opaque,Q=x.transmissive,ot=x.transparent;h.setupLightsView(O),tt===!0&&J.setGlobalState(S.clippingPlanes,O),B&&St.viewport(w.copy(B)),D.length>0&&Ni(D,L,O),Q.length>0&&Ni(Q,L,O),ot.length>0&&Ni(ot,L,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ua(x,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Nn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Li:an,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[B.id],ot=B.viewport||w;Q.setSize(ot.z,ot.w);const ft=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(W),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),zt&&Et.render(O);const pt=S.toneMapping;S.toneMapping=xn;const At=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),tt===!0&&J.setGlobalState(S.clippingPlanes,B),Ni(x,O,B),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let mt=0,Gt=L.length;mt<Gt;mt++){const Jt=L[mt],te=Jt.object,ve=Jt.geometry,Vt=Jt.material,vt=Jt.group;if(Vt.side===en&&te.layers.test(B.layers)){const $e=Vt.side;Vt.side=Se,Vt.needsUpdate=!0,da(te,O,B,ve,Vt,vt),Vt.side=$e,Vt.needsUpdate=!0,Ct=!0}}Ct===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}S.setRenderTarget(ft),S.setClearColor(W,j),At!==void 0&&(B.viewport=At),S.toneMapping=pt}function Ni(x,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,Q=x.length;D<Q;D++){const ot=x[D],ft=ot.object,pt=ot.geometry,At=B===null?ot.material:B,Ct=ot.group;ft.layers.test(O.layers)&&da(ft,L,O,pt,At,Ct)}}function da(x,L,O,B,D,Q){x.onBeforeRender(S,L,O,B,D,Q),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(S,L,O,B,x,Q),D.transparent===!0&&D.side===en&&D.forceSinglePass===!1?(D.side=Se,D.needsUpdate=!0,S.renderBufferDirect(O,L,B,D,x,Q),D.side=Mn,D.needsUpdate=!0,S.renderBufferDirect(O,L,B,D,x,Q),D.side=en):S.renderBufferDirect(O,L,B,D,x,Q),x.onAfterRender(S,L,O,B,D,Q)}function Fi(x,L,O){L.isScene!==!0&&(L=ne);const B=Mt.get(x),D=h.state.lights,Q=h.state.shadowsArray,ot=D.state.version,ft=gt.getParameters(x,D.state,Q,L,O),pt=gt.getProgramCacheKey(ft);let At=B.programs;B.environment=x.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(x.isMeshStandardMaterial?N:v).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",Rt),At=new Map,B.programs=At);let Ct=At.get(pt);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===ot)return pa(x,ft),Ct}else ft.uniforms=gt.getUniforms(x),x.onBeforeCompile(ft,S),Ct=gt.acquireProgram(ft,pt),At.set(pt,Ct),B.uniforms=ft.uniforms;const mt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(mt.clippingPlanes=J.uniform),pa(x,ft),B.needsLights=Sl(x),B.lightsStateVersion=ot,B.needsLights&&(mt.ambientLightColor.value=D.state.ambient,mt.lightProbe.value=D.state.probe,mt.directionalLights.value=D.state.directional,mt.directionalLightShadows.value=D.state.directionalShadow,mt.spotLights.value=D.state.spot,mt.spotLightShadows.value=D.state.spotShadow,mt.rectAreaLights.value=D.state.rectArea,mt.ltc_1.value=D.state.rectAreaLTC1,mt.ltc_2.value=D.state.rectAreaLTC2,mt.pointLights.value=D.state.point,mt.pointLightShadows.value=D.state.pointShadow,mt.hemisphereLights.value=D.state.hemi,mt.directionalShadowMap.value=D.state.directionalShadowMap,mt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,mt.spotShadowMap.value=D.state.spotShadowMap,mt.spotLightMatrix.value=D.state.spotLightMatrix,mt.spotLightMap.value=D.state.spotLightMap,mt.pointShadowMap.value=D.state.pointShadowMap,mt.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function fa(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=fs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function pa(x,L){const O=Mt.get(x);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function xl(x,L,O,B,D){L.isScene!==!0&&(L=ne),y.resetTextureUnits();const Q=L.fog,ot=B.isMeshStandardMaterial?L.environment:null,ft=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pi,pt=(B.isMeshStandardMaterial?N:v).get(B.envMap||ot),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),mt=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,Jt=!!O.morphAttributes.color;let te=xn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(te=S.toneMapping);const ve=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Vt=ve!==void 0?ve.length:0,vt=Mt.get(B),$e=h.state.lights;if(tt===!0&&(_t===!0||x!==M)){const Re=x===M&&B.id===E;J.setState(B,x,Re)}let Wt=!1;B.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==$e.state.version||vt.outputColorSpace!==ft||D.isBatchedMesh&&vt.batching===!1||!D.isBatchedMesh&&vt.batching===!0||D.isBatchedMesh&&vt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&vt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&vt.instancing===!1||!D.isInstancedMesh&&vt.instancing===!0||D.isSkinnedMesh&&vt.skinning===!1||!D.isSkinnedMesh&&vt.skinning===!0||D.isInstancedMesh&&vt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&vt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&vt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&vt.instancingMorph===!1&&D.morphTexture!==null||vt.envMap!==pt||B.fog===!0&&vt.fog!==Q||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==J.numPlanes||vt.numIntersection!==J.numIntersection)||vt.vertexAlphas!==At||vt.vertexTangents!==Ct||vt.morphTargets!==mt||vt.morphNormals!==Gt||vt.morphColors!==Jt||vt.toneMapping!==te||vt.morphTargetsCount!==Vt)&&(Wt=!0):(Wt=!0,vt.__version=B.version);let Ie=vt.currentProgram;Wt===!0&&(Ie=Fi(B,L,D));let Bn=!1,ye=!1,vi=!1;const ee=Ie.getUniforms(),Ge=vt.uniforms;if(St.useProgram(Ie.program)&&(Bn=!0,ye=!0,vi=!0),B.id!==E&&(E=B.id,ye=!0),Bn||M!==x){St.buffers.depth.getReversed()?(st.copy(x.projectionMatrix),uc(st),dc(st),ee.setValue(I,"projectionMatrix",st)):ee.setValue(I,"projectionMatrix",x.projectionMatrix),ee.setValue(I,"viewMatrix",x.matrixWorldInverse);const on=ee.map.cameraPosition;on!==void 0&&on.setValue(I,wt.setFromMatrixPosition(x.matrixWorld)),Ot.logarithmicDepthBuffer&&ee.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ee.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,ye=!0,vi=!0)}if(D.isSkinnedMesh){ee.setOptional(I,D,"bindMatrix"),ee.setOptional(I,D,"bindMatrixInverse");const Re=D.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ee.setValue(I,"boneTexture",Re.boneTexture,y))}D.isBatchedMesh&&(ee.setOptional(I,D,"batchingTexture"),ee.setValue(I,"batchingTexture",D._matricesTexture,y),ee.setOptional(I,D,"batchingIdTexture"),ee.setValue(I,"batchingIdTexture",D._indirectTexture,y),ee.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&ee.setValue(I,"batchingColorTexture",D._colorsTexture,y));const xi=O.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Tt.update(D,O,Ie),(ye||vt.receiveShadow!==D.receiveShadow)&&(vt.receiveShadow=D.receiveShadow,ee.setValue(I,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ge.envMap.value=pt,Ge.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Ge.envMapIntensity.value=L.environmentIntensity),ye&&(ee.setValue(I,"toneMappingExposure",S.toneMappingExposure),vt.needsLights&&Ml(Ge,vi),Q&&B.fog===!0&&rt.refreshFogUniforms(Ge,Q),rt.refreshMaterialUniforms(Ge,B,G,Z,h.state.transmissionRenderTarget[x.id]),fs.upload(I,fa(vt),Ge,y)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fs.upload(I,fa(vt),Ge,y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ee.setValue(I,"center",D.center),ee.setValue(I,"modelViewMatrix",D.modelViewMatrix),ee.setValue(I,"normalMatrix",D.normalMatrix),ee.setValue(I,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Re=B.uniformsGroups;for(let on=0,ln=Re.length;on<ln;on++){const ma=Re[on];C.update(ma,Ie),C.bind(ma,Ie)}}return Ie}function Ml(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Sl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,L,O){Mt.get(x.texture).__webglTexture=L,Mt.get(x.depthTexture).__webglTexture=O;const B=Mt.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const O=Mt.get(x);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,O=0){U=x,R=L,A=O;let B=!0,D=null,Q=!1,ot=!1;if(x){const pt=Mt.get(x);if(pt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(pt.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(pt.__hasExternalTextures)y.rebindTextures(x,Mt.get(x.texture).__webglTexture,Mt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const mt=x.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&Mt.has(mt)&&(x.width!==mt.image.width||x.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const At=x.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ot=!0);const Ct=Mt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?D=Ct[L][O]:D=Ct[L],Q=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?D=Mt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[O]:D=Ct,w.copy(x.viewport),H.copy(x.scissor),z=x.scissorTest}else w.copy(xt).multiplyScalar(G).floor(),H.copy(Ut).multiplyScalar(G).floor(),z=jt;if(St.bindFramebuffer(I.FRAMEBUFFER,D)&&B&&St.drawBuffers(x,D),St.viewport(w),St.scissor(H),St.setScissorTest(z),Q){const pt=Mt.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,pt.__webglTexture,O)}else if(ot){const pt=Mt.get(x.texture),At=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,At)}E=-1},this.readRenderTargetPixels=function(x,L,O,B,D,Q,ot){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){St.bindFramebuffer(I.FRAMEBUFFER,ft);try{const pt=x.texture,At=pt.format,Ct=pt.type;if(!Ot.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-B&&O>=0&&O<=x.height-D&&I.readPixels(L,O,B,D,Lt.convert(At),Lt.convert(Ct),Q)}finally{const pt=U!==null?Mt.get(U).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(x,L,O,B,D,Q,ot){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ot!==void 0&&(ft=ft[ot]),ft){const pt=x.texture,At=pt.format,Ct=pt.type;if(!Ot.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-B&&O>=0&&O<=x.height-D){St.bindFramebuffer(I.FRAMEBUFFER,ft);const mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(L,O,B,D,Lt.convert(At),Lt.convert(Ct),0);const Gt=U!==null?Mt.get(U).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,Gt);const Jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hc(I,Jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(mt),I.deleteSync(Jt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,O=0){x.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(x.image.width*B),Q=Math.floor(x.image.height*B),ot=L!==null?L.x:0,ft=L!==null?L.y:0;y.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,ot,ft,D,Q),St.unbindTexture()},this.copyTextureToTexture=function(x,L,O=null,B=null,D=0){x.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let Q,ot,ft,pt,At,Ct,mt,Gt,Jt;const te=x.isCompressedTexture?x.mipmaps[D]:x.image;O!==null?(Q=O.max.x-O.min.x,ot=O.max.y-O.min.y,ft=O.isBox3?O.max.z-O.min.z:1,pt=O.min.x,At=O.min.y,Ct=O.isBox3?O.min.z:0):(Q=te.width,ot=te.height,ft=te.depth||1,pt=0,At=0,Ct=0),B!==null?(mt=B.x,Gt=B.y,Jt=B.z):(mt=0,Gt=0,Jt=0);const ve=Lt.convert(L.format),Vt=Lt.convert(L.type);let vt;L.isData3DTexture?(y.setTexture3D(L,0),vt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(y.setTexture2DArray(L,0),vt=I.TEXTURE_2D_ARRAY):(y.setTexture2D(L,0),vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ie=I.getParameter(I.UNPACK_SKIP_PIXELS),Bn=I.getParameter(I.UNPACK_SKIP_ROWS),ye=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct);const vi=x.isDataArrayTexture||x.isData3DTexture,ee=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Ge=Mt.get(x),xi=Mt.get(L),Re=Mt.get(Ge.__renderTarget),on=Mt.get(xi.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,Re.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let ln=0;ln<ft;ln++)vi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(x).__webglTexture,D,Ct+ln),x.isDepthTexture?(ee&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(L).__webglTexture,D,Jt+ln),I.blitFramebuffer(pt,At,Q,ot,mt,Gt,Q,ot,I.DEPTH_BUFFER_BIT,I.NEAREST)):ee?I.copyTexSubImage3D(vt,D,mt,Gt,Jt+ln,pt,At,Q,ot):I.copyTexSubImage2D(vt,D,mt,Gt,Jt+ln,pt,At,Q,ot);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ee?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(vt,D,mt,Gt,Jt,Q,ot,ft,ve,Vt,te.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(vt,D,mt,Gt,Jt,Q,ot,ft,ve,te.data):I.texSubImage3D(vt,D,mt,Gt,Jt,Q,ot,ft,ve,Vt,te):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,mt,Gt,Q,ot,ve,Vt,te.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,mt,Gt,te.width,te.height,ve,te.data):I.texSubImage2D(I.TEXTURE_2D,D,mt,Gt,Q,ot,ve,Vt,te);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ye),D===0&&L.generateMipmaps&&I.generateMipmap(vt),St.unbindTexture()},this.copyTextureToTexture3D=function(x,L,O=null,B=null,D=0){return x.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,O,B,D)},this.initRenderTarget=function(x){Mt.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){R=0,A=0,U=null,St.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pl extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _s=new P,gs=new P,mo=new Kt,bi=new Ss,ss=new Ms,Qs=new P,_o=new P;class Tp extends ue{constructor(t=new ke,e=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_s.fromBufferAttribute(e,s-1),gs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_s.distanceTo(gs);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),ss.radius+=r,t.ray.intersectsSphere(ss)===!1)return;mo.copy(s).invert(),bi.copy(t.ray).applyMatrix4(mo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=u.getX(g),b=u.getX(g+1),T=rs(this,t,bi,l,h,b);T&&e.push(T)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),h=rs(this,t,bi,l,g,p);h&&e.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=rs(this,t,bi,l,g,g+1);h&&e.push(h)}if(this.isLineLoop){const g=rs(this,t,bi,l,_-1,m);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(_s.fromBufferAttribute(a,s),gs.fromBufferAttribute(a,r),e.distanceSqToSegment(_s,gs,Qs,_o)>n)return;Qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qs);if(!(l<t.near||l>t.far))return{distance:l,point:_o.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const go=new P,vo=new P;class bp extends Tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)go.fromBufferAttribute(e,s),vo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+go.distanceTo(vo);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oi extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],m=[];let _=0;const g=[],p=n/2;let h=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function b(){const S=new P,F=new P;let R=0;const A=(e-t)/n;for(let U=0;U<=r;U++){const E=[],M=U/r,w=M*(e-t)+t;for(let H=0;H<=s;H++){const z=H/s,W=z*l+o,j=Math.sin(W),V=Math.cos(W);F.x=w*j,F.y=-M*n+p,F.z=w*V,f.push(F.x,F.y,F.z),S.set(j,A,V).normalize(),d.push(S.x,S.y,S.z),m.push(z,1-M),E.push(_++)}g.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const M=g[E][U],w=g[E+1][U],H=g[E+1][U+1],z=g[E][U+1];(t>0||E!==0)&&(u.push(M,w,z),R+=3),(e>0||E!==r-1)&&(u.push(w,H,z),R+=3)}c.addGroup(h,R,0),h+=R}function T(S){const F=_,R=new bt,A=new P;let U=0;const E=S===!0?t:e,M=S===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),_++;const w=_;for(let H=0;H<=s;H++){const W=H/s*l+o,j=Math.cos(W),V=Math.sin(W);A.x=E*V,A.y=p*M,A.z=E*j,f.push(A.x,A.y,A.z),d.push(0,M,0),R.x=j*.5+.5,R.y=V*.5*M+.5,m.push(R.x,R.y),_++}for(let H=0;H<s;H++){const z=F+H,W=w+H;S===!0?u.push(W,W+1,z):u.push(W+1,W,z),U+=3}c.addGroup(h,U,S===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new P,d=new P,m=[],_=[],g=[],p=[];for(let h=0;h<=n;h++){const b=[],T=h/n;let S=0;h===0&&a===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const R=F/e;f.x=-t*Math.cos(s+R*r)*Math.sin(a+T*o),f.y=t*Math.cos(a+T*o),f.z=t*Math.sin(s+R*r)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(R+S,1-T),b.push(c++)}u.push(b)}for(let h=0;h<n;h++)for(let b=0;b<e;b++){const T=u[h][b+1],S=u[h][b],F=u[h+1][b],R=u[h+1][b+1];(h!==0||a>0)&&m.push(T,S,R),(h!==n-1||l<Math.PI)&&m.push(S,F,R)}this.setIndex(m),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Le extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ia extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const tr=new Kt,xo=new P,Mo=new P;class ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(xo),Mo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mo),e.updateMatrixWorld(),tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const So=new Kt,Ai=new P,er=new P;class Ap extends ml{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ai.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ai),er.copy(n.position),er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(er),n.updateMatrixWorld(),s.makeTranslation(-Ai.x,-Ai.y,-Ai.z),So.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So)}}class sa extends ia{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wp extends ml{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rp extends ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yo(){return performance.now()}const To=new Kt;class Pp{constructor(t,e,n=0,s=1/0){this.ray=new Ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return To.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(To),this}intersectObject(t,e=!0,n=[]){return Wr(t,this,n,e),n.sort(bo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wr(t[s],this,n,e);return n.sort(bo),n}}function bo(i,t){return i.distance-t.distance}function Wr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Wr(r[a],t,e,!0)}}class Ao{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lp extends bp{constructor(t=10,e=10,n=4473924,s=8947848){n=new It(n),s=new It(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,m=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===r?n:s;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const u=new ke;u.setAttribute("position",new de(l,3)),u.setAttribute("color",new de(c,3));const f=new pl({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Dp extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xr);const wo={type:"change"},ra={type:"start"},_l={type:"end"},as=new Ss,Ro=new mn,Ip=Math.cos(70*lc.DEG2RAD),oe=new P,Me=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nr=1e-6;class Up extends Dp{constructor(t,e=null){super(t,e),this.state=Yt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Fn,this._lastTargetPosition=new P,this._quat=new Fn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ao,this._sphericalDelta=new Ao,this._scale=1,this._panOffset=new P,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new P,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fp.bind(this),this._onPointerDown=Np.bind(this),this._onPointerUp=Op.bind(this),this._onContextMenu=Wp.bind(this),this._onMouseWheel=Hp.bind(this),this._onKeyDown=kp.bind(this),this._onTouchStart=Gp.bind(this),this._onTouchMove=Vp.bind(this),this._onMouseDown=Bp.bind(this),this._onMouseMove=zp.bind(this),this._interceptControlDown=Xp.bind(this),this._interceptControlUp=qp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wo),this.update(),this.state=Yt.NONE}update(t=null){const e=this.object.position;oe.copy(e).sub(this.target),oe.applyQuaternion(this._quat),this._spherical.setFromVector3(oe),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Me:n>Math.PI&&(n-=Me),s<-Math.PI?s+=Me:s>Math.PI&&(s-=Me),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(oe.setFromSpherical(this._spherical),oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(as.origin.copy(this.object.position),as.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(as.direction))<Ip?this.object.lookAt(this.target):(Ro.setFromNormalAndCoplanarPoint(this.object.up,this.target),as.intersectPlane(Ro,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nr||this._lastTargetPosition.distanceToSquared(this.target)>nr?(this.dispatchEvent(wo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Me/60*this.autoRotateSpeed*t:Me/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){oe.setFromMatrixColumn(e,0),oe.multiplyScalar(-t),this._panOffset.add(oe)}_panUp(t,e){this.screenSpacePanning===!0?oe.setFromMatrixColumn(e,1):(oe.setFromMatrixColumn(e,0),oe.crossVectors(this.object.up,oe)),oe.multiplyScalar(t),this._panOffset.add(oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;oe.copy(s).sub(this.target);let r=oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Me*this._rotateDelta.x/e.clientHeight),this._rotateUp(Me*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Me*this._rotateDelta.x/e.clientHeight),this._rotateUp(Me*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Np(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Fp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Op(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_l),this.state=Yt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Yt.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Yt.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(ra)}function zp(i){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hp(i){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(i.preventDefault(),this.dispatchEvent(ra),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_l))}function kp(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Gp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Yt.TOUCH_ROTATE;break;case ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Yt.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(ra)}function Vp(i){switch(this._trackPointer(i),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Yt.NONE}}function Wp(i){this.enabled!==!1&&i.preventDefault()}function Xp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gl extends ue{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new bt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Qn=new P,Co=new Kt,Po=new Kt,Lo=new P,Do=new P;class Yp{constructor(t={}){const e=this;let n,s,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Co.copy(g.matrixWorldInverse),Po.multiplyMatrices(g.projectionMatrix,Co),u(_,_,g),m(_)},this.setSize=function(_,g){n=_,s=g,r=n/2,a=s/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,p=_.children.length;g<p;g++)c(_.children[g])}function u(_,g,p){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){Qn.setFromMatrixPosition(_.matrixWorld),Qn.applyMatrix4(Po);const h=Qn.z>=-1&&Qn.z<=1&&_.layers.test(p.layers)===!0,b=_.element;b.style.display=h===!0?"":"none",h===!0&&(_.onBeforeRender(e,g,p),b.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(Qn.x*r+r)+"px,"+(-Qn.y*a+a)+"px)",b.parentNode!==l&&l.appendChild(b),_.onAfterRender(e,g,p));const T={distanceToCameraSquared:f(p,_)};o.objects.set(_,T)}for(let h=0,b=_.children.length;h<b;h++)u(_.children[h],g,p)}function f(_,g){return Lo.setFromMatrixPosition(_.matrixWorld),Do.setFromMatrixPosition(g.matrixWorld),Lo.distanceToSquared(Do)}function d(_){const g=[];return _.traverseVisible(function(p){p.isCSS2DObject&&g.push(p)}),g}function m(_){const g=d(_).sort(function(h,b){if(h.renderOrder!==b.renderOrder)return b.renderOrder-h.renderOrder;const T=o.objects.get(h).distanceToCameraSquared,S=o.objects.get(b).distanceToCameraSquared;return T-S}),p=g.length;for(let h=0,b=g.length;h<b;h++)g[h].element.style.zIndex=p-h}}}class $p{constructor(){this.group=new gn,this._buildFloor(),this._buildGrid(),this._buildWalls()}_buildFloor(){const t=new _i(60,60),e=new Le({color:1710628,roughness:.85,metalness:.1}),n=new se(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.group.add(n)}_buildGrid(){const t=new Lp(60,30,2236979,1381664);t.position.y=.01,t.material.opacity=.4,t.material.transparent=!0,this.group.add(t)}_buildWalls(){const t=new Le({color:1973806,roughness:.9,metalness:.05,transparent:!0,opacity:.5}),e=[{x:0,z:-30,rotY:0},{x:0,z:30,rotY:0},{x:-30,z:0,rotY:Math.PI/2},{x:30,z:0,rotY:Math.PI/2}];for(const n of e){const s=new ze(60,.3,.1),r=new se(s,t);r.position.set(n.x,.15,n.z),r.rotation.y=n.rotY,this.group.add(r)}}}function ni(i){if(i==null)return"$0";const t=Number(i);return t>=1e6?`$${(t/1e6).toFixed(1)}M`:t>=1e3?`$${(t/1e3).toFixed(0)}K`:`$${t.toFixed(0)}`}function jp(i){if(i==null)return"0";const t=Number(i);return t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toFixed(0)}function Kp(i){if(i==null)return"?";const t=Number(i);return t>24?"24+mo":`${t.toFixed(1)}mo`}const Zp=4863784,Jp=2763317,Qp=1714746;class tm{constructor(t,e){this.startupId=t,this.accentHex=e,this.accent=new It(e),this.group=new gn,this.clickTargets=[],this._highlighted=!1,this._alive=!0,this._bobOffset=Math.random()*Math.PI*2,this._buildDesk(),this._buildChair(),this._buildCharacter(),this._buildMonitor(),this._buildAccentLight(),this._buildLabel(),this._buildMetricBars()}_buildDesk(){const t=new ze(2.4,.08,1.2),e=new Le({color:Zp,roughness:.6,metalness:.05});this.deskTop=new se(t,e),this.deskTop.position.set(0,.75,0),this.deskTop.castShadow=!0,this.deskTop.receiveShadow=!0,this.deskTop.userData.startupId=this.startupId,this.clickTargets.push(this.deskTop),this.group.add(this.deskTop);const n=new oi(.04,.04,.75,6),s=new Le({color:3355456,metalness:.6,roughness:.3}),r=[[-1,.375,-.45],[1,.375,-.45],[-1,.375,.45],[1,.375,.45]];for(const[a,o,l]of r){const c=new se(n,s);c.position.set(a,o,l),c.castShadow=!0,this.group.add(c)}}_buildChair(){const t=new ze(.6,.06,.6),e=new Le({color:Jp,roughness:.7});this.chair=new se(t,e),this.chair.position.set(0,.5,1),this.chair.castShadow=!0,this.group.add(this.chair);const n=new ze(.6,.5,.06),s=new se(n,e);s.position.set(0,.78,1.28),s.castShadow=!0,this.group.add(s)}_buildCharacter(){this.characterGroup=new gn,this.characterGroup.position.set(0,0,1);const t=new oi(.2,.22,.6,8),e=new Le({color:this.accent,roughness:.5,metalness:.1});this.body=new se(t,e),this.body.position.y=1.05,this.body.castShadow=!0,this.body.userData.startupId=this.startupId,this.clickTargets.push(this.body),this.characterGroup.add(this.body);const n=new na(.16,12,8),s=new Le({color:15782064,roughness:.6});this.head=new se(n,s),this.head.position.y=1.52,this.head.castShadow=!0,this.characterGroup.add(this.head),this.group.add(this.characterGroup)}_buildMonitor(){const t=new ze(.7,.5,.04),e=new Le({color:Qp,emissive:new It(1122884),emissiveIntensity:.5,roughness:.2,metalness:.3});this.screen=new se(t,e),this.screen.position.set(0,1.15,-.2),this.screen.castShadow=!0,this.group.add(this.screen);const n=new oi(.03,.05,.35,6),s=new Le({color:3355456,metalness:.6}),r=new se(n,s);r.position.set(0,.93,-.2),this.group.add(r)}_buildAccentLight(){this.accentLight=new sa(this.accent,.6,5),this.accentLight.position.set(0,2,.5),this.group.add(this.accentLight)}_buildLabel(){const t=document.createElement("div");t.style.cssText=`
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(8px);
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.08);
      font-family: 'Inter', sans-serif;
      text-align: center;
      pointer-events: none;
      min-width: 100px;
    `,this._labelName=document.createElement("div"),this._labelName.style.cssText="font-size:10px;font-weight:700;color:#eee;letter-spacing:0.5px;",t.appendChild(this._labelName),this._labelMeta=document.createElement("div"),this._labelMeta.style.cssText="font-size:9px;color:#888;margin-top:2px;",t.appendChild(this._labelMeta),this._labelVal=document.createElement("div"),this._labelVal.style.cssText="font-size:11px;font-weight:700;color:#F0B429;margin-top:3px;",t.appendChild(this._labelVal),this.label=new gl(t),this.label.position.set(0,2.8,.5),this.group.add(this.label)}_buildMetricBars(){const t=document.createElement("div");t.style.cssText=`
      display: flex; gap: 2px; width: 80px; margin-top: 4px;
    `,this._bars={};const e=[{key:"product_quality",color:"#3B82F6"},{key:"morale",color:"#22C55E"},{key:"brand",color:"#F0B429"}];for(const n of e){const s=document.createElement("div");s.style.cssText=`
        flex: 1; height: 3px; background: rgba(255,255,255,0.08);
        border-radius: 2px; overflow: hidden;
      `;const r=document.createElement("div");r.style.cssText=`
        height: 100%; border-radius: 2px;
        background: ${n.color}; width: 0%;
        transition: width 0.4s ease;
      `,s.appendChild(r),t.appendChild(s),this._bars[n.key]=r}this.label.element.appendChild(t)}update(t,e){if(t){if(this._alive=t.alive!==!1,this._labelName.textContent=t.startup_name||"Unknown",this._labelMeta.textContent=`${t.agent_name||""} | ${t.sector||""}`,this._labelVal.textContent=ni(t.valuation),this._bars.product_quality&&(this._bars.product_quality.style.width=`${t.product_quality||0}%`),this._bars.morale&&(this._bars.morale.style.width=`${t.morale||0}%`),this._bars.brand&&(this._bars.brand.style.width=`${t.brand||0}%`),this._alive?(this.body.material.color.copy(this.accent),this.accentLight.intensity=e?1.2:.6,this.screen.material.emissive.setHex(1122884)):(this.body.material.color.setHex(4473924),this.body.material.emissive.setHex(0),this.accentLight.intensity=.1,this.screen.material.emissive.setHex(1114112)),this._alive){const n=t.runway||0;n<3?this.screen.material.emissive.setHex(4460817):n<6?this.screen.material.emissive.setHex(4469521):this.screen.material.emissive.setHex(1122884)}this.setHighlight(e)}}setHighlight(t){this._highlighted=t,t?(this.deskTop.material.emissive=this.accent.clone().multiplyScalar(.15),this.accentLight.intensity=1.2):(this.deskTop.material.emissive=new It(0),this._alive&&(this.accentLight.intensity=.6))}animate(t,e){if(!this._alive)return;const n=Math.sin(t*1.5+this._bobOffset)*.02;if(this.characterGroup.position.y=n,this._highlighted){const s=.8+Math.sin(t*3)*.4;this.accentLight.intensity=s}}dispose(){this.label&&this.label.element&&this.label.element.parentNode&&this.label.element.parentNode.removeChild(this.label.element)}}class em{constructor(){this.group=new gn,this.group.position.set(0,0,-8),this._build()}_build(){const t=new ze(5,3,.15),e=new Le({color:1710638,roughness:.3,metalness:.7}),n=new se(t,e);n.position.y=2.5,n.castShadow=!0,this.group.add(n);const s=new _i(4.6,2.6),r=new Le({color:657946,emissive:new It(659493),emissiveIntensity:.8,roughness:.1,metalness:.2}),a=new se(s,r);a.position.set(0,2.5,.08),this.group.add(a);const o=new oi(.06,.08,1,8),l=new Le({color:3355461,metalness:.8}),c=new se(o,l);c.position.y=.5,this.group.add(c);const u=new sa(4482815,.5,8);u.position.set(0,4.5,1),this.group.add(u);const f=document.createElement("div");f.style.cssText=`
      text-align: center;
      pointer-events: none;
      width: 200px;
    `,this._titleEl=document.createElement("div"),this._titleEl.style.cssText="font-size:12px;font-weight:800;color:#4488ff;letter-spacing:3px;",this._titleEl.textContent="FOUNDER ARENA",f.appendChild(this._titleEl),this._turnEl=document.createElement("div"),this._turnEl.style.cssText="font-size:18px;font-weight:700;color:#eee;margin-top:4px;",this._turnEl.textContent="WEEK 0",f.appendChild(this._turnEl),this._phaseEl=document.createElement("div"),this._phaseEl.style.cssText="font-size:9px;color:#666;letter-spacing:1.5px;margin-top:3px;text-transform:uppercase;",this._phaseEl.textContent="WAITING",f.appendChild(this._phaseEl),this._eventEl=document.createElement("div"),this._eventEl.style.cssText="font-size:9px;color:#888;margin-top:6px;max-width:180px;",f.appendChild(this._eventEl);const d=new gl(f);d.position.set(0,2.5,.2),this.group.add(d)}update(t){if(!t)return;const e=t.turn||0,n=t.max_turns||32,s=t.phase||"unknown";if(this._turnEl.textContent=`WEEK ${e}`,s==="lobby")this._phaseEl.textContent="LOBBY - WAITING FOR PLAYERS",this._phaseEl.style.color="#F0B429";else if(s==="playing"){const a=e<=10?"EARLY STAGE":e<=25?"GROWTH":e<=40?"SCALE":"ENDGAME";this._phaseEl.textContent=`${a} (${e}/${n})`,this._phaseEl.style.color="#22C55E"}else s==="finished"&&(this._phaseEl.textContent="GAME OVER",this._phaseEl.style.color="#EF4444");const r=t.event_log||[];if(r.length>0){const a=r[r.length-1],o=typeof a=="string"?a:a.text||a.headline||"";this._eventEl.textContent=o.slice(0,60)}}}const Io=["#3B82F6","#22C55E","#F0B429","#EF4444","#A78BFA","#22D3EE","#FB923C","#F472B6"];function aa(i){return Io[i%Io.length]}class nm{constructor(t){this.canvas=t,this.pods=new Map,this.clock=new Cp,this._startupOrder=[],this.renderer=new Ep({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Oo,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=No,this.labelRenderer=new Yp,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="fixed",this.labelRenderer.domElement.style.top="0",this.labelRenderer.domElement.style.left="0",this.labelRenderer.domElement.style.pointerEvents="none",this.labelRenderer.domElement.style.zIndex="5",document.body.appendChild(this.labelRenderer.domElement),this.scene=new yp,this.scene.background=new It(657935),this.scene.fog=new ea(657935,.012),this.camera=new Ae(45,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(20,18,20),this.camera.lookAt(0,0,0),this.controls=new Up(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI/2.3,this.controls.minPolarAngle=Math.PI/8,this.controls.minDistance=8,this.controls.maxDistance=50,this.controls.target.set(0,0,0),this._setupLights(),this.floor=new $p,this.scene.add(this.floor.group),this.marketBoard=new em,this.scene.add(this.marketBoard.group),this.raycaster=new Pp,this._mouse=new bt,this._onClickCallback=null,t.addEventListener("click",e=>this._handleClick(e)),window.addEventListener("resize",()=>this._onResize())}_setupLights(){const t=new Rp(4210784,.6);this.scene.add(t);const e=new Eo(16772829,1.2);e.position.set(15,20,10),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=60,e.shadow.camera.left=-25,e.shadow.camera.right=25,e.shadow.camera.top=25,e.shadow.camera.bottom=-25,e.shadow.bias=-.001,this.scene.add(e);const n=new Eo(4491519,.3);n.position.set(-10,8,-10),this.scene.add(n);const s=new sa(16737860,.4,40);s.position.set(-8,12,8),this.scene.add(s)}onPodClick(t){this._onClickCallback=t}_handleClick(t){const e=this.canvas.getBoundingClientRect();this._mouse.x=(t.clientX-e.left)/e.width*2-1,this._mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this._mouse,this.camera);const n=[];for(const r of this.pods.values())n.push(...r.clickTargets);const s=this.raycaster.intersectObjects(n,!1);if(s.length>0){const a=s[0].object.userData.startupId;a&&this._onClickCallback&&this._onClickCallback(a)}}focusOnPod(t){const e=this.pods.get(t);if(!e)return;const n=e.group.position,s=new P(n.x,0,n.z),r=this.controls.target.clone(),a=600,o=performance.now(),l=()=>{const c=performance.now()-o,u=Math.min(c/a,1),f=1-Math.pow(1-u,3);this.controls.target.lerpVectors(r,s,f),u<1&&requestAnimationFrame(l)};l()}updatePods(t,e){const n=Object.keys(t);for(const a of n)this._startupOrder.includes(a)||this._startupOrder.push(a);const s=Math.max(2,Math.ceil(Math.sqrt(n.length))),r=7;for(const a of n){const o=this._startupOrder.indexOf(a),l=Math.floor(o/s),u=(o%s-(s-1)/2)*r,f=(l-(Math.ceil(n.length/s)-1)/2)*r;let d=this.pods.get(a);if(!d){const m=this._startupOrder.indexOf(a);d=new tm(a,aa(m)),d.group.position.set(u,0,f),this.scene.add(d.group),this.pods.set(a,d)}d.update(t[a],a===e)}for(const[a,o]of this.pods)n.includes(a)||(this.scene.remove(o.group),o.dispose(),this.pods.delete(a))}updateMarketBoard(t){t&&this.marketBoard.update(t)}highlightPod(t){for(const[e,n]of this.pods)n.setHighlight(e===t)}render(){const t=this.clock.getDelta(),e=this.clock.getElapsedTime();this.controls.update();for(const n of this.pods.values())n.animate(e,t);this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.labelRenderer.setSize(t,e)}}const im="";async function Ui(i,t={}){const e=await fetch(im+i,{headers:{"Content-Type":"application/json",...t.headers},...t});if(!e.ok){const n=await e.text().catch(()=>"");throw new Error(`API ${e.status}: ${n}`)}return e.json()}async function sm(){return Ui("/api/games")}async function rm(i){return Ui(`/api/games/${i}`)}async function am(i,t){return Ui(`/api/games/${i}/spectate`,{headers:{"X-Spectator-Token":t}})}async function om(i={}){return Ui("/api/games",{method:"POST",body:JSON.stringify({name:i.name||"Founder Arena",max_players:i.maxPlayers||8,min_players:i.minPlayers||2,turn_timeout:i.turnTimeout||5,max_turns:i.maxTurns||32,game_mode:i.gameMode||"competitive_mode",queue:i.queue||"showmatch",benchmark_tier:i.benchmarkTier||"baseline"})})}async function lm(i,t,e="baseline"){return Ui(`/api/games/${i}/fill-bots`,{method:"POST",headers:{"X-Admin-Token":t},body:JSON.stringify({benchmark_tier:e})})}class cm{constructor(){this.state={view:"landing",games:[],gameId:null,adminToken:null,spectatorToken:null,agentToken:null,gameData:null,selectedStartupId:null,error:null},this._listeners=new Set,this._pollTimer=null,this._pollInterval=2e3}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}_notify(){for(const t of this._listeners)try{t(this.state)}catch(e){console.error("Store listener error:",e)}}update(t){Object.assign(this.state,t),this._notify()}get startups(){var t;return((t=this.state.gameData)==null?void 0:t.startups)||{}}get startupList(){const t=this.startups;return Object.entries(t).map(([e,n])=>({id:e,...n})).sort((e,n)=>(n.valuation||0)-(e.valuation||0))}get selectedStartup(){return this.state.selectedStartupId&&this.startups[this.state.selectedStartupId]||null}get turn(){var t;return((t=this.state.gameData)==null?void 0:t.turn)||0}get phase(){var t;return((t=this.state.gameData)==null?void 0:t.phase)||"unknown"}get maxTurns(){var t;return((t=this.state.gameData)==null?void 0:t.max_turns)||32}async loadGames(){try{const t=await sm();this.update({games:t})}catch(t){console.error("Failed to load games:",t)}}async createGame(t={}){try{const e=await om(t);return this.update({gameId:e.game_id,adminToken:e.admin_token,spectatorToken:e.spectator_token,view:"lobby",error:null}),this.startPolling(),e}catch(e){throw this.update({error:e.message}),e}}async fillBotsAndStart(t="baseline"){try{await lm(this.state.gameId,this.state.adminToken,t)}catch(e){this.update({error:e.message})}}async watchGame(t,e){this.update({gameId:t,spectatorToken:e,view:"playing",error:null}),this.startPolling()}selectStartup(t){this.update({selectedStartupId:t})}async poll(){if(this.state.gameId)try{let t;this.state.spectatorToken?t=await am(this.state.gameId,this.state.spectatorToken):t=await rm(this.state.gameId);const e=t.phase||"unknown";let n=this.state.view;if(e==="lobby"?n="lobby":e==="playing"?n="playing":e==="finished"&&(n="finished"),this.update({gameData:t,view:n,error:null}),!this.state.selectedStartupId&&t.startups){const s=Object.keys(t.startups);s.length>0&&this.update({selectedStartupId:s[0]})}}catch(t){console.error("Poll error:",t)}}startPolling(){this.stopPolling(),this.poll(),this._pollTimer=setInterval(()=>this.poll(),this._pollInterval)}stopPolling(){this._pollTimer&&(clearInterval(this._pollTimer),this._pollTimer=null)}}class hm{constructor(t,e){this.store=e,this.el=document.createElement("div"),this.el.className="panel-left",this.el.innerHTML='<div class="panel-title">RANKINGS</div><div class="rank-list"></div>',this._list=this.el.querySelector(".rank-list"),t.appendChild(this.el),this._onSelect=null,this._startupOrderMap=new Map}onSelect(t){this._onSelect=t}update(t){var r;const e=(r=t.gameData)==null?void 0:r.startups;if(!e)return;const n=Object.entries(e).map(([a,o])=>({id:a,...o})).sort((a,o)=>(o.valuation||0)-(a.valuation||0));for(const a of n)this._startupOrderMap.has(a.id)||this._startupOrderMap.set(a.id,this._startupOrderMap.size);const s=t.selectedStartupId;this._list.innerHTML=n.map((a,o)=>{const l=this._startupOrderMap.get(a.id)||0,c=aa(l),u=a.alive===!1,f=a.id===s;(a.runway||0)<4||(a.runway||0)<7;const d=a.product_quality||0,m=a.morale||0,_=a.brand||0;return`
        <div class="rank-item ${u?"dead":""} ${f?"selected":""}"
             data-id="${a.id}">
          <div class="rank-pos">${o+1}</div>
          <div class="rank-color" style="background:${c}"></div>
          <div class="rank-info">
            <div class="rank-name">${a.startup_name||"Unknown"}</div>
            <div class="rank-meta">${a.agent_name||""} &middot; ${a.sector||""} ${u?"&middot; DEAD":""}</div>
            <div class="mini-bars">
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${d}%;background:#3B82F6"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${m}%;background:#22C55E"></div></div>
              <div class="mini-bar"><div class="mini-bar-fill" style="width:${_}%;background:#F0B429"></div></div>
            </div>
          </div>
          <div class="rank-val" style="color:${u?"#555":"#F0B429"}">${ni(a.valuation)}</div>
        </div>
      `}).join(""),this._list.querySelectorAll(".rank-item").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.id;this._onSelect&&this._onSelect(o)})})}}class um{constructor(t){this.el=document.createElement("div"),this.el.className="panel-bottom",this.el.innerHTML='<div class="panel-title">TIMELINE</div><div class="timeline-list"></div>',this._list=this.el.querySelector(".timeline-list"),t.appendChild(this.el),this._lastEntryCount=0}update(t){var c,u,f,d;const e=t.gameData;if(!e)return;const n=[],s=e.turn||0,r=e.action_logs||{},a=e.arc_feed||[],o=e.decision_summaries||{},l=Math.max(1,s-8);for(let m=s;m>=l;m--){const _=[];for(const g of a)(g.turn===m||!g.turn&&m===s)&&_.push({type:"arc",text:`${g.startup_name||"Unknown"}: ${g.headline||g.title||"Event"}`,severity:g.severity||0});for(const[g,p]of Object.entries(r)){const h=((u=(c=e.startups)==null?void 0:c[g])==null?void 0:u.startup_name)||g.slice(0,6);for(const b of Array.isArray(p)?p:[])if(b.turn===m){const T=b.success!==!1?"+":"-";_.push({type:"action",text:`${h} ${T} ${b.action_type||b.type||"?"}`})}}for(const[g,p]of Object.entries(o))if(p&&p.turn_index===m){const h=((d=(f=e.startups)==null?void 0:f[g])==null?void 0:d.startup_name)||g.slice(0,6);_.push({type:"decision",text:`${h}: ${p.intent||""}`})}_.length>0&&n.push({turn:m,items:_})}if(n.length===0){const m=e.phase||"unknown";m==="lobby"?this._list.innerHTML='<div class="timeline-entry"><span class="action-text">Waiting for agents to join...</span></div>':m==="finished"?this._list.innerHTML='<div class="timeline-entry"><span class="action-text">Game finished!</span></div>':this._list.innerHTML='<div class="timeline-entry"><span class="action-text">Game in progress - Week '+s+"</span></div>";return}this._list.innerHTML=n.map(m=>{const _=m.items.map(g=>{let p="#999";return g.type==="arc"?p=g.severity>.5?"#EF4444":"#FB923C":g.type==="decision"&&(p="#A78BFA"),`<div style="color:${p};margin-top:2px" class="action-text">${g.text}</div>`}).join("");return`
        <div class="timeline-entry">
          <div class="turn-label">WEEK ${m.turn}</div>
          ${_}
        </div>
      `}).join(""),n.length!==this._lastEntryCount&&(this._list.scrollTop=0,this._lastEntryCount=n.length)}}class dm{constructor(t){this.el=document.createElement("div"),this.el.className="panel-right",t.appendChild(this.el),this._startupOrderMap=new Map}update(t){var f;const e=t.selectedStartupId,n=(f=t.gameData)==null?void 0:f.startups;if(!e||!n||!n[e]){this.el.classList.remove("visible");return}this.el.classList.add("visible");const s=n[e];this._startupOrderMap.has(e)||this._startupOrderMap.set(e,this._startupOrderMap.size);const r=aa(this._startupOrderMap.get(e)||0),a=(s.team||[]).map(d=>`
      <div class="team-member">
        <div style="width:6px;height:6px;border-radius:50%;background:${r};flex-shrink:0"></div>
        <span>${d.name||"Unknown"}</span>
        <span class="team-role">${d.role||""}</span>
        <span style="margin-left:auto;color:#666;font-size:9px">Skill ${d.skill||0}</span>
      </div>
    `).join(""),o=s.seven_dimension_scores||{},l=Object.keys(o).length>0?Object.entries(o).map(([d,m])=>{const _=Math.round((Number(m)||0)*100);return`
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span style="font-size:8px;color:#666;width:70px;text-transform:capitalize">${d.replace(/_/g," ")}</span>
              <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
                <div style="height:100%;width:${_}%;background:${r};border-radius:2px"></div>
              </div>
              <span style="font-size:9px;color:#888;width:28px;text-align:right">${_}%</span>
            </div>
          `}).join(""):'<div style="font-size:9px;color:#555">Not available yet</div>',c=s.strategy||"balanced",u=s.motto||"";this.el.innerHTML=`
      <div class="detail-header">
        <div class="detail-avatar" style="background:${r}">${(s.startup_name||"?")[0]}</div>
        <div>
          <div class="detail-name">${s.startup_name||"Unknown"}</div>
          <div class="detail-sector">${s.agent_name||""} &middot; ${s.sector||""} &middot; ${c}</div>
          ${u?`<div style="font-size:9px;color:#555;font-style:italic;margin-top:2px">"${u}"</div>`:""}
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat-cell">
          <div class="stat-label">Valuation</div>
          <div class="stat-value" style="color:#F0B429">${ni(s.valuation)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Cash</div>
          <div class="stat-value">${ni(s.cash)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Revenue</div>
          <div class="stat-value" style="color:#22C55E">${ni(s.revenue)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Runway</div>
          <div class="stat-value" style="color:${(s.runway||0)<4?"#EF4444":"#eee"}">${Kp(s.runway)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Users</div>
          <div class="stat-value">${jp(s.users)}</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Product</div>
          <div class="stat-value" style="color:#3B82F6">${s.product_quality||0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Morale</div>
          <div class="stat-value" style="color:#22C55E">${s.morale||0}%</div>
        </div>
        <div class="stat-cell">
          <div class="stat-label">Brand</div>
          <div class="stat-value" style="color:#F0B429">${s.brand||0}%</div>
        </div>
      </div>

      <div class="panel-title" style="margin-top:8px">FUNDING</div>
      <div style="font-size:10px;color:#aaa;margin-bottom:8px">
        Round: <strong>${s.funding_round||"pre-seed"}</strong> &middot;
        Raised: <strong>${ni(s.total_raised)}</strong> &middot;
        Dilution: <strong>${Math.round((s.dilution||0)*100)}%</strong>
      </div>

      <div class="panel-title">TEAM (${(s.team||[]).length})</div>
      <div style="margin-bottom:10px">${a||'<div style="font-size:9px;color:#555">No team members</div>'}</div>

      <div class="panel-title">PERFORMANCE</div>
      <div style="margin-bottom:8px">${l}</div>

      ${s.alive===!1?`
        <div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:8px;padding:10px;margin-top:8px">
          <div style="font-size:10px;font-weight:700;color:#EF4444">ELIMINATED</div>
          <div style="font-size:9px;color:#888;margin-top:4px">${s.death_reason||"Startup failed"}</div>
        </div>
      `:""}
    `}}class fm{constructor(t,e){this.store=e,this.container=t,this._overlay=document.createElement("div"),this._overlay.className="modal-overlay hidden",this._overlay.innerHTML='<div class="modal" id="modal-content"></div>',this._modal=this._overlay.querySelector("#modal-content"),t.appendChild(this._overlay),this._overlay.addEventListener("click",n=>{n.target===this._overlay&&this.close()})}open(){this._overlay.classList.remove("hidden")}close(){this._overlay.classList.add("hidden")}showCreateGame(){this._modal.innerHTML=`
      <h2>Create New Game</h2>
      <label>GAME NAME</label>
      <input type="text" id="cg-name" value="Founder Arena" />

      <label>GAME MODE</label>
      <select id="cg-mode">
        <option value="competitive_mode">Competitive (1v1 Duel)</option>
        <option value="legacy_arena">Legacy Arena (FFA)</option>
      </select>

      <label>MAX TURNS</label>
      <select id="cg-turns">
        <option value="32" selected>32 (Standard)</option>
        <option value="16">16 (Quick)</option>
        <option value="52">52 (Full Year)</option>
      </select>

      <label>BENCHMARK TIER</label>
      <select id="cg-tier">
        <option value="baseline">Baseline (Balanced)</option>
        <option value="pressure">Pressure (Aggressive)</option>
        <option value="discipline">Discipline (Lean)</option>
        <option value="wildcard">Wildcard (Chaos)</option>
        <option value="gauntlet">Gauntlet (All Strategies)</option>
      </select>

      <div class="modal-actions">
        <button class="btn-secondary" id="cg-cancel">Cancel</button>
        <button class="btn-primary" id="cg-create">Create & Launch</button>
      </div>
    `,this.open(),this._modal.querySelector("#cg-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#cg-create").addEventListener("click",async()=>{const t=this._modal.querySelector("#cg-create");t.textContent="Creating...",t.disabled=!0;try{const e=await this.store.createGame({name:this._modal.querySelector("#cg-name").value,gameMode:this._modal.querySelector("#cg-mode").value,maxTurns:parseInt(this._modal.querySelector("#cg-turns").value),benchmarkTier:this._modal.querySelector("#cg-tier").value});this.close(),this.showLobby(e)}catch{t.textContent="Error - Retry",t.disabled=!1}})}showLobby(t){const e=this.store.state.gameId,n=(t==null?void 0:t.benchmark_tier)||"baseline";this._modal.innerHTML=`
      <h2>Game Lobby</h2>
      <div style="font-size:10px;color:#888;margin-bottom:12px">
        Game ID: <strong style="color:#eee">${e}</strong>
      </div>
      <div class="lobby-list" id="lobby-agents">
        <div style="font-size:10px;color:#555;padding:8px">Waiting for agents...</div>
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="lobby-cancel">Close</button>
        <button class="btn-primary" id="lobby-fill" style="background:#22C55E">Fill Bots & Start</button>
      </div>
    `,this.open(),this._modal.querySelector("#lobby-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#lobby-fill").addEventListener("click",async()=>{const s=this._modal.querySelector("#lobby-fill");s.textContent="Starting...",s.disabled=!0;try{await this.store.fillBotsAndStart(n),setTimeout(()=>this.close(),1e3)}catch{s.textContent="Error - Retry",s.disabled=!1}}),this._lobbyUpdateInterval=setInterval(()=>{var l;const s=this.store.state;if(s.view!=="lobby"){clearInterval(this._lobbyUpdateInterval);return}const r=((l=s.gameData)==null?void 0:l.startups)||{},a=this._modal.querySelector("#lobby-agents");if(!a)return;const o=Object.values(r);o.length!==0&&(a.innerHTML=o.map(c=>`
        <div class="lobby-agent">
          <div class="dot" style="background:${c.alive!==!1?"#22C55E":"#EF4444"}"></div>
          <span style="font-weight:600">${c.startup_name||"Unknown"}</span>
          <span style="color:#666;margin-left:auto">${c.sector||""}</span>
        </div>
      `).join(""))},1e3)}showJoinExisting(){this._modal.innerHTML=`
      <h2>Watch Existing Game</h2>
      <label>GAME ID</label>
      <input type="text" id="je-id" placeholder="Enter game ID" />
      <label>SPECTATOR TOKEN</label>
      <input type="text" id="je-token" placeholder="Enter spectator token" />

      <div class="modal-actions">
        <button class="btn-secondary" id="je-cancel">Cancel</button>
        <button class="btn-primary" id="je-watch">Watch Game</button>
      </div>
    `,this.open(),this._modal.querySelector("#je-cancel").addEventListener("click",()=>this.close()),this._modal.querySelector("#je-watch").addEventListener("click",()=>{const t=this._modal.querySelector("#je-id").value.trim(),e=this._modal.querySelector("#je-token").value.trim();t&&(this.store.watchGame(t,e||null),this.close())})}showPostGame(){const t=this.store.state.gameData;if(!t)return;const e=t.startups||{},n=Object.entries(e).map(([a,o])=>({id:a,...o})).sort((a,o)=>(o.valuation||0)-(a.valuation||0)),s=n[0],r=n.slice(0,3);this._modal.innerHTML=`
      <h2 style="text-align:center">Game Over</h2>
      <div style="text-align:center;margin:16px 0">
        <div style="font-size:24px;font-weight:800;color:#F0B429">${(s==null?void 0:s.startup_name)||"Unknown"}</div>
        <div style="font-size:11px;color:#888;margin-top:4px">Winner - ${(s==null?void 0:s.agent_name)||""}</div>
      </div>

      <div style="margin:16px 0">
        ${r.map((a,o)=>{const l=["#F0B429","#94A3B8","#CD7F32"],c=["1st","2nd","3rd"];return`
            <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;margin-bottom:4px;
                        background:rgba(255,255,255,0.03);border-radius:8px">
              <div style="font-size:14px;font-weight:800;color:${l[o]};width:30px">${c[o]}</div>
              <div style="flex:1">
                <div style="font-size:11px;font-weight:600">${a.startup_name}</div>
                <div style="font-size:9px;color:#666">${a.agent_name} &middot; ${a.sector}</div>
              </div>
              <div style="font-size:12px;font-weight:700;color:#F0B429">${pm(a.valuation)}</div>
            </div>
          `}).join("")}
      </div>

      <div class="modal-actions">
        <button class="btn-secondary" id="pg-close">Close</button>
        <button class="btn-primary" id="pg-new">New Game</button>
      </div>
    `,this.open(),this._modal.querySelector("#pg-close").addEventListener("click",()=>this.close()),this._modal.querySelector("#pg-new").addEventListener("click",()=>{this.close(),this.showCreateGame()})}}function pm(i){if(i==null)return"$0";const t=Number(i);return t>=1e6?`$${(t/1e6).toFixed(1)}M`:t>=1e3?`$${(t/1e3).toFixed(0)}K`:`$${t.toFixed(0)}`}class mm{constructor(t,e,n){this.store=e,this.scene=n,this.container=t,this._postGameShown=!1,this._buildHeader(),this.rankings=new hm(t,e),this.timeline=new um(t),this.detail=new dm(t),this.controls=new fm(t,e),this.rankings.onSelect(s=>{e.selectStartup(s),n&&n.focusOnPod(s)}),n&&n.onPodClick(s=>{e.selectStartup(s),n.focusOnPod(s)})}_buildHeader(){this._header=document.createElement("div"),this._header.className="header",this._header.innerHTML=`
      <div class="logo">FOUNDER ARENA <span>THREE.JS</span></div>
      <div class="header-status" id="header-status">
        <span class="dot"></span>READY
      </div>
      <button class="header-btn" id="btn-new-game">NEW GAME</button>
      <button class="header-btn" id="btn-watch" style="background:rgba(255,255,255,0.08);color:#999">WATCH</button>
    `,this.container.appendChild(this._header),this._statusEl=this._header.querySelector("#header-status"),this._header.querySelector("#btn-new-game").addEventListener("click",()=>{this.controls.showCreateGame()}),this._header.querySelector("#btn-watch").addEventListener("click",()=>{this.controls.showJoinExisting()})}update(t){var r,a,o,l;const e=(r=t.gameData)==null?void 0:r.phase,n=((a=t.gameData)==null?void 0:a.turn)||0,s=((o=t.gameData)==null?void 0:o.max_turns)||32;if(e==="playing")this._statusEl.innerHTML=`<span class="dot" style="background:#22C55E"></span>LIVE &middot; Week ${n}/${s}`;else if(e==="lobby"){const c=Object.keys(((l=t.gameData)==null?void 0:l.startups)||{}).length;this._statusEl.innerHTML=`<span class="dot" style="background:#F0B429"></span>LOBBY &middot; ${c} agents`}else e==="finished"?this._statusEl.innerHTML='<span class="dot" style="background:#EF4444"></span>FINISHED':t.gameId?this._statusEl.innerHTML='<span class="dot" style="background:#3B82F6"></span>CONNECTING...':this._statusEl.innerHTML='<span class="dot"></span>READY';this.rankings.update(t),this.timeline.update(t),this.detail.update(t),e==="finished"&&!this._postGameShown&&(this._postGameShown=!0,setTimeout(()=>this.controls.showPostGame(),1500)),e!=="finished"&&(this._postGameShown=!1)}}const _m=document.getElementById("three-canvas"),gm=document.getElementById("hud-root"),oa=new cm,Ci=new nm(_m),vm=new mm(gm,oa,Ci);oa.subscribe(i=>{var t;(t=i.gameData)!=null&&t.startups&&(Ci.updatePods(i.gameData.startups,i.selectedStartupId),Ci.highlightPod(i.selectedStartupId)),Ci.updateMarketBoard(i.gameData),vm.update(i)});function vl(){requestAnimationFrame(vl),Ci.render()}vl();oa.loadGames();console.log("[Founder Arena] Three.js frontend initialized");
