(function(e){function t(t){for(var n,r,l=t[0],c=t[1],i=t[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Arweave-Vector-Dataset-Uploader-Plugin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=c;s.push([2,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t,a){e.exports=a("56d7")},20:function(e,t){},3:function(e,t){},"39b5":function(e,t,a){"use strict";a("e97a")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=a("5c96"),s=a.n(o),r=(a("0fae"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("ConnectWallet"),t("Upload"),t("router-view")],1)}),l=[],c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"upload-img-root"},[t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:8,offset:8}},[t("el-select",{directives:[{name:"show",rawName:"v-show",value:e.connected,expression:"connected"}],staticClass:"m-2",attrs:{placeholder:"Select",size:"large"},model:{value:e.selectedSymbol,callback:function(t){e.selectedSymbol=t},expression:"selectedSymbol"}},e._l(e.symbols,(function(a){return t("el-option",{key:a,attrs:{label:`${a} ${e.balanceStack[a]}`,value:a}})})),1)],1)],1),t("el-row",{staticClass:"row"},[e.connected?t("span",[e._v("Balance: "+e._s(e.balance))]):e._e()]),t("el-row",{staticClass:"row"},[t("a",{attrs:{href:"https://app.everpay.io/deposit"}},[e._v("Go to deposit by EverPay")])]),t("hr"),t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:4,offset:10}},[t("el-input",{attrs:{placeholder:"Input Vector Dataset Name"},model:{value:e.datasetName,callback:function(t){e.datasetName=t},expression:"datasetName"}})],1)],1),t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:4,offset:10}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.datasetContent,expression:"datasetContent"}],staticStyle:{height:"500px",width:"500px"},attrs:{placeholder:"Input Vector Dataset Content"},domProps:{value:e.datasetContent},on:{input:function(t){t.target.composing||(e.datasetContent=t.target.value)}}})])],1),t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:4,offset:10}},[t("el-input",{attrs:{placeholder:"Input the catalog"},model:{value:e.catalog,callback:function(t){e.catalog=t},expression:"catalog"}})],1)],1),t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:4,offset:10}},[t("el-input",{attrs:{placeholder:"Input the file source link"},model:{value:e.fileSource,callback:function(t){e.fileSource=t},expression:"fileSource"}})],1)],1),t("el-row",{staticClass:"row"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.upload_payload()}}},[e._v("Click to Upload the Vector Datset Item")])],1),t("el-row",{staticClass:"row"},[t("el-col",{attrs:{span:8,offset:10}},e._l(e.orders,(function(a,n){return t("div",{key:n,staticClass:"order"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.copyTextToClipboard(`${e.arseedUrl}/${a.itemId}`)}}},[e._v("Copy Link of Gateway Link")]),t("el-button",{staticClass:"view",attrs:{type:"success",plain:""},on:{click:function(t){return e.viewItem("https://ai.movedid.build/?tx_id="+a.itemId)}}},[e._v("View by KNN3")])],1)})),0)],1)],1)},i=[],d=a("911a"),u=a.n(d),p=a("e287"),f=a("141c"),h=a("901e"),m=a.n(h);function b(){let e="https://arseed.web3infra.dev";const t=window.location.hostname;return-1===t.split(".")[0].indexOf("dev")&&"localhost"!==t||(e="https://arseed-dev.web3infra.dev"),e}var v={name:"Upload",data(){return{submitResp:"",selectedSymbol:"",symbols:[],connected:!1,instance:{},everpay:{},balance:"",orders:[],balanceStack:{},arseedUrl:b(),payload:{},url:"",datasetName:"",datasetContent:"",fileSource:"",catalog:""}},watch:{selectedSymbol(){this.everpay.balance&&this.selectedSymbol&&window.ethereum.selectedAddress&&this.everpay.balance({symbol:this.selectedSymbol,account:window.ethereum.selectedAddress}).then(e=>{this.balance=e})}},methods:{async upload_payload(){const e=await Object(f["getBundleFee"])(this.arseedUrl,JSON.stringify(this.payload).length,this.selectedSymbol),t=new m.a(e.finalFee).dividedBy(new m.a(10).pow(e.decimals)).toString();if(+this.balance>=+t){let e=this.datasetContent;const t={tags:[{name:"app_name",value:"vector_dataset"},{name:"uploader",value:window.ethereum.selectedAddress},{name:"uploader_type",value:"ethereum"},{name:"origin_dataset_name",value:this.datasetName},{name:"catalog",value:this.catalog},{name:"file_source",value:this.fileSource}]},a=await this.instance.sendAndPay(this.arseedUrl,e,this.selectedSymbol,t);console.log(a)}else alert(`need ${t} ${this.selectedSymbol} to upload`)},async getOrders(){Object(f["getOrders"])(this.arseedUrl,window.ethereum.selectedAddress).then(e=>{this.orders=e})},intervalUpdateOrders(){setTimeout(()=>{this.getOrders(),this.intervalUpdateOrders()},1e4)},async getBalances(){this.everpay.balances({account:window.ethereum.selectedAddress}).then(e=>{const t={};e.forEach(e=>{t[e.symbol]=e.balance}),this.balanceStack=t})},viewItem(e){window.open(e,"_blank").focus()},copyTextToClipboard(e){navigator.clipboard.writeText(e).then(()=>{this.$message({message:"Link copied",type:"success"})},()=>{})}},mounted(){this.everpay=new p["a"],this.everpay.info().then(e=>{this.symbols=e.tokenList.map(e=>e.symbol),this.selectedSymbol=this.symbols[0]}),this.pubId=u.a.subscribe("connected",async(e,t)=>{this.connected=!0,this.instance=t,this.getOrders(),this.intervalUpdateOrders(),this.getBalances()})},beforeDestroy(){u.a.unsubscribe(this.pubId)}},w=v,y=(a("39b5"),a("2877")),g=Object(y["a"])(w,c,i,!1,null,"45a5ab32",null),_=g.exports,C=function(){var e=this,t=e._self._c;return t("el-row",[t("h1",[e._v(e._s(e.signerAddr))]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.connected,expression:"!connected"}],attrs:{type:"primary"},on:{click:e.connectWallet}},[e._v("Connect Wallet")])],1)},S=[],O={name:"ConnectWallet",data(){return{connected:!1,signerAddr:""}},methods:{async connectWallet(){await window.ethereum.enable();const e=await Object(f["genAPI"])(window.ethereum);this.signerAddr=window.ethereum.selectedAddress,this.connected=!0,u.a.publish("connected",e)}}},x=O,k=Object(y["a"])(x,C,S,!1,null,"5273c780",null),j=k.exports,A={name:"App",components:{Upload:_,ConnectWallet:j}},U=A,I=(a("eadb"),Object(y["a"])(U,r,l,!1,null,null,null)),N=I.exports,P=a("8c4f");n["default"].use(P["a"]);let T=new P["a"]({mode:"hash",routes:[]});var $=T;n["default"].use(s.a),n["default"].config.productionTip=!1,new n["default"]({router:$,render:e=>e(N)}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},e97a:function(e,t,a){},eadb:function(e,t,a){"use strict";a("f446")},f446:function(e,t,a){}});
//# sourceMappingURL=app.5ab609d4.js.map