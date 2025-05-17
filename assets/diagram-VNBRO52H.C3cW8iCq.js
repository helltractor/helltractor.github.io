import{p as w}from"./chunk-4BMEZGHF.BID2qSwP.js";import{_ as i,s as B,g as S,t as F,q as z,a as P,b as W,F as v,K as T,e as D,z as _,G as A,H as E,l as x}from"./mermaid.core.BXb9f187.js";import{p as N}from"./radar-MK3ICKWK.xtTQEA9N.js";import"./framework.BKlXavfA.js";import"./chunks/dayjs.BeL6d4wv.js";import"./memoize.ZhIyPiLK.js";import"./isArray.CVnqMxe5.js";import"./marked.esm.D3VogUXu.js";import"./_baseUniq.CzemtK3J.js";import"./toString.BS--fxLY.js";import"./_arrayReduce.CrxnWFSq.js";import"./get.DUr0ZkAG.js";import"./_basePickBy.COjLZWyf.js";import"./toNumber.COTyaoZx.js";import"./clone.C-NMQ-k8.js";var C={packet:[]},h=structuredClone(C),L=E.packet,Y=i(()=>{const t=v({...L,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=i(()=>h.packet,"getPacket"),H=i(t=>{t.length>0&&h.packet.push(t)},"pushWord"),I=i(()=>{_(),h=structuredClone(C)},"clear"),u={pushWord:H,getPacket:G,getConfig:Y,clear:I,setAccTitle:W,getAccTitle:P,setDiagramTitle:z,getDiagramTitle:F,getAccDescription:S,setAccDescription:B},K=1e4,M=i(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<K;){const[m,c]=O({start:a,end:r,label:p},n,s);if(o.push(m),m.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),O=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),q={parse:i(async t=>{const e=await N("packet",t);x.debug(e),M(e)},"parse")},R=i((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:c}=a,b=s.getPacket(),l=s.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(l?0:r),k=m*c+2,f=T(e);f.attr("viewbox",`0 0 ${k} ${d}`),D(f,d,k,a.useMaxWidth);for(const[$,y]of b.entries())U(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=i((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{const c=t.append("g"),b=o*(n+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!m)continue;const k=l.end===l.start,f=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=i(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),gt={parser:q,db:u,renderer:X,styles:J};export{gt as diagram};
