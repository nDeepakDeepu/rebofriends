(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(3)),s=n(4),i=n(5),h=n(6),u=function(e){var t=e.name,n=e.email,a=e.id,o=(e.contact,e.street),c=e.phone;e.website,e.address;return r.a.createElement("div",{className:"tc bg-light-blue dib br2 pa2 ma2 grow bw4 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?100x120")}),r.a.createElement("div",null,r.a.createElement("h3",null,"Name : ",t),r.a.createElement("p",null," Email : ",n),r.a.createElement("p",null," phone : ",c),r.a.createElement("p",null," street : ",o," ")))},m=function(e){var t=e.robots;return console.log(t),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(u,{key:t,id:e.id,name:e.name,email:e.username,contact:e.contact,phone:e.phone,website:e.website,street:e.address.street})})))},d=function(e){e.searchfeild;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search here",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"600px"}},e.children)},b=(n(13),function(e){Object(h.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSerachChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo friends"),r.a.createElement(d,{searchChange:this.onSerachChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:a}))):r.a.createElement("h1",null,"Loading ...")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.d5280e52.chunk.js.map