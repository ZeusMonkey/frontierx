(this.webpackJsonpfrontierx_frontend=this.webpackJsonpfrontierx_frontend||[]).push([[2],{137:function(e){e.exports=JSON.parse('{"mainnet":{"fnft":"0x0","ftoken":"0x0"},"testnet":{"fnft":"0x83EBbBD6227650B8b2b174093c99A6BF73a2013A","ftoken":"0x6dA3274e3ec79053E9C0D77E3616C7477559920b"}}')},281:function(e){e.exports=JSON.parse('{"mainnet":{"chainId":1,"rpc":"https://mainnet.infura.io/v3/ab8e13055fc9443c9fd6f7e94cb01ea1"},"testnet":{"chainId":3,"rpc":"https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"}}')},306:function(e,t,n){},422:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenUri","type":"string"}],"name":"setBaseTokenUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},423:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},473:function(e,t,n){},486:function(e,t){},490:function(e,t){},492:function(e,t){},496:function(e,t){},518:function(e,t){},520:function(e,t){},529:function(e,t){},531:function(e,t){},541:function(e,t){},543:function(e,t){},670:function(e,t){},707:function(e,t){},709:function(e,t){},716:function(e,t){},717:function(e,t){},741:function(e,t){},748:function(e,t){},809:function(e,t){},883:function(e,t,n){"use strict";n.r(t),n.d(t,"apolloClient",(function(){return fe}));var a=n(1),r=n.n(a),i=n(418),s=n.n(i),c=(n(473),n(306),n(23)),u=n(419),o=n(962),p=n(961),d=n(102),l=n(967),y=n(51),f=n(5),b=n(55),m=n(8),j=n(7),h=n(420),O=n.n(h),v=n(422),x=n(423),T=n(137),w=function(){function e(t,n){Object(m.a)(this,e),this.web3=null,this.fnftContract=null,this.ftokenContract=null,this.contracts=T.testnet;var a=n;this.web3=new O.a(a),this.fnftContract=new this.web3.eth.Contract(v,this.contracts.fnft),this.fnftContract.setProvider(a),this.ftokenContract=new this.web3.eth.Contract(x,this.contracts.ftoken),this.ftokenContract.setProvider(a),this.account=t}return Object(j.a)(e,[{key:"mint",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.quantity,e.next=4,this.fnftContract.methods.mint(n).send({from:this.account});case 4:return a=e.sent,e.abrupt("return",{hash:a.blockHash,status:a.status});case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{status:!1});case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getTokenUri",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.tokenID,e.next=4,this.fnftContract.methods.tokenURI(n).call();case 4:if(!(a=e.sent)){e.next=15;break}return e.next=8,fetch(a);case 8:return r=e.sent,e.next=11,r.json();case 11:return r=e.sent,e.abrupt("return",{status:!0,data:r.image});case 15:return e.abrupt("return",{status:!1});case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",{status:!1});case 21:case"end":return e.stop()}}),e,this,[[0,18]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=w,k=n(6),S=Object(p.a)((function(e){return{buttonWrapper:{padding:20},headerButton:{margin:"0 20px 0 20px !important"}}}));var I=Object(y.g)((function(){var e=S(),t=Object(u.a)(!0),n=Object(c.a)(t,2),r=n[0],i=n[1],s=Object(d.b)(),p=s.account,y=s.connect,f=s.reset,b=s.ethereum,m=Object(a.useState)(!1),j=Object(c.a)(m,2),h=j[0],O=j[1],v=Object(a.useState)(null),x=Object(c.a)(v,2),T=x[0],w=x[1];return Object(a.useEffect)((function(){if(p||r||y(),p&&b){var e=new g(p,b);w(e)}}),[p,r]),Object(k.jsx)(l.a,{container:!0,className:e.buttonWrapper,justifyContent:"flex-end",children:Object(k.jsxs)(l.a,{item:!0,children:[null!==p?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(o.a,{variant:"contained",color:"primary",className:e.headerButton,onClick:function(){T&&!h&&(O(!0),T.mint({quantity:1}).then((function(e){e.hash;var t=e.status;O(!1),t?alert("minted"):alert("mint failed")})))},children:"Mint NFT"})}):"",Object(k.jsx)(o.a,{variant:"contained",color:"primary",className:e.headerButton,onClick:function(){p?(i(!0),f()):(i(!1),y("injected"))},children:null===p?"Connect":"Disconnect"})]})})})),N=n(65),C=n(32),M=n(138),A=(n.p,n(970)),F=n(973),B=n(971),W=n(972),U=n(954),P=n(141),E=n.n(P),R=function(){function e(){Object(m.a)(this,e),this.baseUrl="http://127.0.0.1:8000/order"}return Object(j.a)(e,[{key:"makeSellOrder",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a,r,i,s,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.maker,a=t.price,r=t.img,i=t.tokenId,s=t.makerSignature,e.next=3,fetch("".concat(this.baseUrl,"/makeSellOrder?maker=").concat(n,"&img=").concat(r,"&price=").concat(this.toBigNum(a,18),"&tokenId=").concat(i,"&makerSignature=").concat(s));case 3:return c=e.sent,e.next=6,c.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findSellOrders",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.account,e.next=3,fetch("".concat(this.baseUrl,"/findAvailableSellOrders?address=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getOrders",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ids,e.next=3,fetch("".concat(this.baseUrl,"/getMySellRequests?ids=").concat(n.toString()));case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeOrder",value:function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tokenId,e.next=3,fetch("".concat(this.baseUrl,"/removeOrder?tokenId=").concat(n.toString()));case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toHuman",value:function(e,t){return new E.a(e).div(new E.a(10).pow(new E.a(t)))}},{key:"toBigNum",value:function(e,t){return new E.a(e).times(new E.a(10).pow(new E.a(t)))}}]),e}(),H=R,J=n(216),q=n(217),D=n(211),L=n.n(D),_=Object(p.a)((function(e){return{cardWrapper:{width:200,height:200},imageWrapper:{height:150,textAlign:"center"},button:{width:100},buttonWrapper:{padding:10,textAlign:"center"},cardImg:{height:"100%"}}}));var Q=function(e){var t=e.nftImg,n=e.nftId,i=e.order,s=e.nprice,u=e.orderHandler,p=_(),y=new H,m=r.a.useState(!1),j=Object(c.a)(m,2),h=j[0],O=j[1],v=Object(a.useState)(!1),x=Object(c.a)(v,2),w=x[0],g=x[1],S=Object(a.useState)(null),I=Object(c.a)(S,2),N=I[0],C=I[1],M=Object(d.b)(),P=M.account,E=(M.connect,M.reset,M.ethereum),R={tokenAddress:T.testnet.ftoken,amount:y.toBigNum(s,18).toString(),type:"ERC20"},D=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){var t,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,N.loadApprovalStatus(R,P);case 3:if(e.sent.contractApproved){e.next=11;break}return e.next=7,N.approveTokenOrNftByAsset(R,P);case 7:return t=e.sent,e.next=10,t.wait();case 10:e.sent;case 11:return e.next=13,N.fillSignedOrder(i);case 13:return a=e.sent,e.next=16,N.awaitTransactionHash(a.hash);case 16:return e.sent,e.next=19,y.removeOrder({tokenId:n});case 19:e.sent,u(),g(!1),alert("order completed!"),O(!1);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(P&&E){var e=new q.a.providers.Web3Provider(E),t=e.getSigner(),n=new J.a(e,t,Number(E.chainId));C(n)}}),[P,E]),Object(k.jsxs)(l.a,{container:!0,className:p.cardWrapper,children:[Object(k.jsx)(l.a,{item:!0,md:12,className:p.imageWrapper,justifyContent:"center",children:Object(k.jsx)("img",{className:p.cardImg,alt:"nft",src:t})}),Object(k.jsx)(l.a,{item:!0,md:12,className:p.buttonWrapper,justifyContent:"center",children:Object(k.jsx)(o.a,{variant:"contained",color:"secondary",className:p.button,onClick:function(){O(!0)},children:"BUY"})}),Object(k.jsx)(A.a,{open:h,children:Object(k.jsxs)(L.a,{active:w,spinner:!0,text:"Please wait...",children:[Object(k.jsx)(U.a,{children:"Buying NFT"}),Object(k.jsx)(B.a,{children:Object(k.jsxs)(W.a,{children:["The price for this NFT is ",s,"."]})}),Object(k.jsxs)(F.a,{children:[Object(k.jsx)(o.a,{onClick:D,children:"Buy"}),Object(k.jsx)(o.a,{onClick:function(){O(!1)},children:"Close"})]})]})})]})},Z=n(959),V=Object(p.a)((function(e){return{cardWrapper:{width:200,height:200},imageWrapper:{height:150,textAlign:"center"},button:{width:100},buttonWrapper:{padding:10,textAlign:"center"},cardImg:{height:"100%"}}}));var Y,$=function(e){var t=e.nftImg,n=e.nftId,i=e.nprice,s=e.updatePrice,u=V(),p=new H,y=Object(d.b)(),m=y.account,j=(y.connect,y.reset,y.ethereum),h=r.a.useState(!1),O=Object(c.a)(h,2),v=O[0],x=O[1],w=r.a.useState(0),g=Object(c.a)(w,2),S=g[0],I=g[1],N=Object(a.useState)(null),C=Object(c.a)(N,2),M=C[0],P=C[1],E=Object(a.useState)(!1),R=Object(c.a)(E,2),D=R[0],_=R[1],Q=Object(a.useState)({tokenAddress:T.testnet.fnft,tokenId:"".concat(n),type:"ERC721"}),Y=Object(c.a)(Q,2),$=Y[0],X=(Y[1],Object(a.useState)({tokenAddress:T.testnet.ftoken,amount:0,type:"ERC20"})),z=Object(c.a)(X,2),G=z[0],K=z[1],ee=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){var a,r,i,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(S<0)){e.next=3;break}return alert("Price must be a positive value."),e.abrupt("return");case 3:return _(!0),e.next=6,M.loadApprovalStatus($,m);case 6:if(e.sent.contractApproved){e.next=14;break}return e.next=10,M.approveTokenOrNftByAsset($,m);case 10:return a=e.sent,e.next=13,a.wait();case 13:e.sent;case 14:return(r=G).amount=p.toBigNum(S,18).toString(),K(r),i=M.buildOrder($,r,m),e.next=20,M.signOrder(i);case 20:return c=e.sent,console.log(c),e.next=24,p.makeSellOrder({maker:m,price:S,img:t,tokenId:n,makerSignature:JSON.stringify(c)});case 24:e.sent,s(n,S),_(!1),alert("order created!"),x(!1);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(m&&j){var e=new q.a.providers.Web3Provider(j),t=e.getSigner(),n=new J.a(e,t,Number(j.chainId));P(n)}}),[m,j]),Object(k.jsxs)(l.a,{container:!0,className:u.cardWrapper,children:[Object(k.jsx)(l.a,{item:!0,md:12,className:u.imageWrapper,children:Object(k.jsx)("img",{className:u.cardImg,alt:"nft",src:t})}),Object(k.jsx)(l.a,{item:!0,md:12,className:u.buttonWrapper,children:0==i?Object(k.jsx)(o.a,{variant:"contained",color:"secondary",className:u.button,onClick:ee,children:"SELL"}):Object(k.jsxs)("span",{children:["Sell for ",i]})}),Object(k.jsx)(A.a,{open:v,children:Object(k.jsxs)(L.a,{active:D,spinner:!0,text:"Please wait...",children:[Object(k.jsx)(U.a,{children:"Selling NFT"}),Object(k.jsxs)(B.a,{children:[Object(k.jsx)(W.a,{children:"Please enter the price you wannt to sell for."}),Object(k.jsx)(Z.a,{autoFocus:!0,margin:"dense",id:"name",value:S,onChange:function(e){I(Number(e.target.value).toFixed(0))},label:"Price",type:"number",fullWidth:!0,variant:"standard"})]}),Object(k.jsxs)(F.a,{children:[Object(k.jsx)(o.a,{onClick:te,children:"Make order"}),Object(k.jsx)(o.a,{onClick:function(){x(!1)},children:"Close"})]})]})})]})},X=n(963),z=Object(p.a)((function(e){return{rootContainer:{margin:50}}}));var G=Object(y.g)((function(){var e=z(),t=Object(d.b)(),n=t.account,r=(t.connect,t.reset,t.ethereum),i=Object(a.useState)(!1),s=Object(c.a)(i,2),u=(s[0],s[1],Object(a.useState)(null)),o=Object(c.a)(u,2),p=o[0],y=o[1],m=Object(a.useState)([]),j=Object(c.a)(m,2),h=j[0],O=j[1],v=Object(a.useState)([]),x=Object(c.a)(v,2),T=x[0],w=x[1],S=new H,I=Object(X.a)(Y||(Y=Object(M.a)(["\n    query Accounts($account: String!) {\n      accounts(where: {id: $account}) {\n        id\n        nfts {\n          id\n        }\n      }\n    }\n  "]))),A=function(e,t){var n,a=Object(C.a)(h),r=Object(N.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.id===e&&(i.price=S.toHuman(S.toBigNum(t,18),18).toFixed(0))}}catch(s){r.e(s)}finally{r.f()}O(a)},F=function(e,t){if(t&&t.length>0){var n,a=Object(N.a)(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(e==r.id)return S.toHuman(r.price,18).toFixed(0)}}catch(i){a.e(i)}finally{a.f()}return 0}return 0},B=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){var t,a,r,i,s;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.findSellOrders({account:n});case 2:if((t=e.sent)&&t.data.length>0){a=[],r=Object(N.a)(t.data);try{for(r.s();!(i=r.n()).done;)s=i.value,a.push({img:s.img,id:s.tokenId,price:S.toHuman(s.price,18).toFixed(0),order:JSON.parse(s.makerSignature)})}catch(c){r.e(c)}finally{r.f()}w(a)}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){var t,a,r,i,s,c;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.query({query:I,variables:{account:n.toLowerCase()}});case 2:if(t=e.sent,!((a=t.data)&&a.accounts&&a.accounts.length>0)){e.next=10;break}r=[],i=Object(N.a)(a.accounts[0].nfts);try{for(i.s();!(s=i.n()).done;)c=s.value,r.push(c.id)}catch(u){i.e(u)}finally{i.f()}return e.next=10,P(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(),B();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(Object(f.a)().mark((function e(t){var n,a,r,i,s,c,u;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=28;break}return n=[],e.next=4,S.getOrders({ids:t});case 4:a=e.sent,r=Object(N.a)(t),e.prev=6,r.s();case 8:if((i=r.n()).done){e.next=18;break}return s=i.value,e.next=12,p.getTokenUri({tokenID:s});case 12:c=e.sent,u=c.data,c.status,n.push({img:u,id:s,price:F(s,a.data)});case 16:e.next=8;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),r.e(e.t0);case 23:return e.prev=23,r.f(),e.finish(23);case 26:console.log("mynfts: ",n),O(n);case 28:case"end":return e.stop()}}),e,null,[[6,20,23,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(n&&r){var e=new g(n,r);y(e)}}),[n]),Object(a.useEffect)((function(){p&&(W(),B())}),[p]),n?Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(l.a,{container:!0,className:e.rootContainer,children:[Object(k.jsx)(l.a,{item:!0,children:Object(k.jsx)("h1",{children:"Sell Orders"})}),Object(k.jsx)(l.a,{container:!0,item:!0,children:T.map((function(e,t){return Object(k.jsx)(l.a,{item:!0,children:Object(k.jsx)(Q,{nftImg:e.img,order:e.order,nftId:e.id,orderHandler:U,nprice:e.price})})}))}),Object(k.jsx)(l.a,{item:!0,children:Object(k.jsx)("h1",{children:"My Nfts"})}),Object(k.jsx)(l.a,{container:!0,item:!0,children:h.map((function(e,t){return Object(k.jsx)(l.a,{item:!0,children:Object(k.jsx)($,{nftImg:e.img,nftId:e.id,nprice:e.price,updatePrice:A})})}))})]})}):""})),K=n(201);var ee=function(){return Object(k.jsx)(r.a.Fragment,{children:Object(k.jsxs)(K.a,{children:[Object(k.jsx)(I,{}),Object(k.jsxs)(y.d,{children:[Object(k.jsx)(y.b,{exact:!0,path:"/home",component:G}),Object(k.jsx)(y.b,{path:"*",children:Object(k.jsx)(y.a,{to:"/home"})})]})]})})},te=n(956),ne=n(955),ae=n(437),re=n(439),ie={connected:!1},se=n(436),ce=n(281),ue=Object(re.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;return t.type,e}));var oe=function(){return Object(k.jsx)(se.a,{store:ue,children:Object(k.jsx)(ne.a,{theme:Object(ae.a)({palette:{type:"light",background:{default:"#ffffff"}}}),children:Object(k.jsxs)(d.a,{connectors:{walletconnect:{rpcUrl:ce.testnet.rpc},injected:{chainId:[ce.testnet.chainId]}},children:[Object(k.jsx)(te.a,{}),Object(k.jsx)(ee,{})]})})})},pe=function(e){e&&e instanceof Function&&n.e(20).then(n.bind(null,1699)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},de=n(960),le=n(964),ye=n(969),fe=new de.a({uri:"https://api.thegraph.com/subgraphs/name/markdev07/frontier-nft-graph",cache:new le.a});s.a.createRoot(document.getElementById("root")).render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(ye.a,{client:fe,children:Object(k.jsx)(oe,{})})})),pe()}},[[883,3,4]]]);
//# sourceMappingURL=main.784e3f82.chunk.js.map