(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){},156:function(e,t,n){},158:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){},167:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var o,r,i,a,s=n(0),c=n.n(s),u=n(22),p=n(9),l=n.n(p),f=n(17),m=n.n(f),d=n(42),y=n(43),h=n(15),b=function(){return function(e,t){this.path=e,this.method=t}}(),v={getServices:new b("/service/","get"),getServiceOptions:new b("/service/:moduleName/:serviceName","get"),setServiceOptions:new b("/service/:moduleName/:serviceName","post"),getModules:new b("/modules/","get"),addModule:new b("/modules/","post"),deleteModule:new b("/modules/:moduleName","delete"),rebuildModule:new b("/modules/:moduleName/rebuild","post"),updateModule:new b("/modules/:moduleName/update","post"),checkUpdates:new b("/modules/checkUpdates/update","get"),getWebPages:new b("/pages/","get"),setWebPage:new b("/pages/","post"),deleteWebPage:new b("/pages/:id","delete"),getServerInfo:new b("/app/","get"),exitApplication:new b("/app/exitApplication","post"),restartApplication:new b("/app/restartApplication","post"),shutdownSystem:new b("/app/shutdownSystem","post"),rebootSystem:new b("/app/restartSystem","post"),resetApplication:new b("/app/resetApplication","post"),getSettings:new b("/settings/","get"),setSettings:new b("/settings/","post"),getWebComponentOptions:new b("/components/","get"),setWebComponentOptions:new b("/components/","post"),deleteWebComponentOptions:new b("/components/:id","delete")},w=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},g=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},_=function(){function e(){this.getAllServices=O(v.getServices,!0),this.getServiceOptions=O(v.getServiceOptions),this.setServiceOptions=O(v.setServiceOptions),this.getModules=O(v.getModules,!0),this.addModule=O(v.addModule),this.checkUpdates=O(v.checkUpdates),this.deleteModule=O(v.deleteModule),this.rebuildModule=O(v.rebuildModule),this.updateModule=O(v.updateModule),this.getWebPages=O(v.getWebPages,!0),this.setWebPage=O(v.setWebPage),this.deleteWebPage=O(v.deleteWebPage),this.getServerInfo=O(v.getServerInfo),this.exitApplication=O(v.exitApplication),this.restartApplication=O(v.restartApplication),this.shutdownSystem=O(v.shutdownSystem),this.rebootSystem=O(v.rebootSystem),this.resetApplication=O(v.resetApplication),this.getSettings=O(v.getSettings,!0),this.setSettings=O(v.setSettings),this.getWebComponentOptions=O(v.getWebComponentOptions,!0),this.setWebComponentOptions=O(v.setWebComponentOptions),this.deleteWebComponentOptions=O(v.deleteWebComponentOptions)}return e.prototype.clearCache=function(){var e=this;Object.keys(this).forEach(function(t){e[t]&&e[t].clearCache&&e[t].clearCache()})},e}(),O=function(e,t){var n;void 0===t&&(t=!1);var o=e.method.toLocaleLowerCase(),r=function(r,i){if(t&&n)return Promise.resolve(n);var a=e.path;return r&&Object.keys(r).forEach(function(e){a=a.replace(":"+e,r[e])}),fetch(k.moduleApiPath+a,{method:o,body:i&&JSON.stringify(i),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return w(void 0,void 0,void 0,function(){var t;return g(this,function(n){switch(n.label){case 0:return[4,e.text()];case 1:if(t=n.sent(),e.status.toString().startsWith("2"))return t?[2,JSON.parse(t)]:[2,void 0];throw console.log(t),Error(t)}})})}).then(function(e){return t&&(n=e),e})};return r.clearCache=function(){n=void 0},r},C=new _,S=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},N=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};window.require&&(o=window.require("electron"),r=o.remote.require("./dist/server/BackendService").BackendService.instance,i=r.topics,a=o.remote.require("electron-store"),i.subscribe("system-settings-updated",function(e,t){E=t}));var E,P,x={},j={},A=function(){function e(e){var t=this;this.moduleName=e,this.electron=o,this.backendService=r,this.topics=i;var n="module."+e;a&&!x[n]&&(x[n]=new a({name:"module."+e})),this.moduleStorage=x[n];var s=e.replace("/","@");this.moduleApiPath="/api/modules/"+s,this.getService=function(n,o){if(t.backendService){var r=(o||e)+"."+n;return j[r]||(j[r]=t.backendService.serviceManager.get(o||e,n)),j[r]}console.log("Method getService() is not supported in browser environment.")}}return Object.defineProperty(e.prototype,"settings",{get:function(){return E},enumerable:!0,configurable:!0}),e}(),k=new A("reactron"),L=n(6),T=n(7),M=n(23),W=(n(58),P=function(e,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return W(t,e),t.prototype.render=function(){return s.createElement("section",{className:M("Loading",{center:this.props.center})},s.createElement(T.FontAwesomeIcon,{icon:L.faSpinner,size:this.props.iconSize,spin:!0}),this.props.text&&s.createElement("div",{className:"text"},this.props.text))},t.defaultProps={iconSize:"4x"},t}(s.Component),F=n(13),D=(n(60),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return D(t,e),t.prototype.render=function(){return s.createElement(F.a,{className:"RoundButton",to:this.props.to,role:"button"},this.props.children)},t}(s.Component),G=(n(62),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return G(t,e),t.prototype.render=function(){return s.createElement("div",{className:"PageNotFound"},s.createElement("h1",null,s.createElement(T.FontAwesomeIcon,{icon:L.faQuestionCircle})," 404"),s.createElement("h2",null,"No page defined for path: ",this.props.location.pathname),s.createElement(R,{to:"/admin"},s.createElement(T.FontAwesomeIcon,{icon:L.faCog})," Admin"),s.createElement(R,{to:"/"},s.createElement(T.FontAwesomeIcon,{icon:L.faHome})," Home"))},t}(s.Component),V=n(18),H=n(44),K=n(45),U=n(46),B=n.n(U),q=n(21),J=(n(66),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Q={component:function(e){function t(t){return e.call(this,t)||this}return J(t,e),t.prototype.render=function(){return s.createElement("section",{className:"CarouselLayout"},"CarouselLayout")},t}(s.Component),description:"Carousel Layout",displayName:"Carousel Layout",name:"CarouselLayout",type:"layout",fields:[]},X=(n(68),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Z={component:function(e){function t(t){var n=e.call(this,t)||this;return n.renderTile=n.renderTile.bind(n),n}return X(t,e),t.prototype.renderTile=function(e,t){var n=Y({},this.props.tileStyle,e.style);return n.gridColumn=e.col.toString(),e.colspan>1&&(n.gridColumn+=" / span "+e.colspan),n.gridRow=e.row.toString(),e.rowspan>1&&(n.gridRow+=" / span "+e.rowspan),s.createElement("div",{className:"GridTile",key:t,style:n},this.context.renderComponent({id:e.content}))},t.prototype.render=function(){return s.createElement("section",{className:"GridLayout",style:this.props.gridStyle},this.props.tiles.map(this.renderTile))},t}(s.Component),description:"Grid Layout",displayName:"Grid Layout",name:"GridLayout",type:"layout",fields:[{displayName:"Grid Style",name:"gridStyle",valueType:"style"},{displayName:"Tile Style",name:"tileStyle",valueType:"style"},{displayName:"Grid tiles",name:"tiles",valueType:"object",isArray:!0,fields:[{displayName:"Row",name:"row",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Column",name:"col",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Row span",name:"rowspan",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Column span",name:"colspan",valueType:"number",defaultValue:1,stepSize:1,minValue:1,maxValue:20},{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}],inputControl:{module:"reactron",component:"GridLayoutTileHeader"}}]},$=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ee={width:"100%",textOverflow:"ellipsis",overflow:"hidden"},te={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t.prototype.render=function(){var e=this.props.value||{};return c.a.createElement("div",{style:ee},"[ ",e.row," | ",e.col," | ",e.content," ]")},t}(c.a.Component),displayName:"GridLayoutTileHeader",name:"GridLayoutTileHeader",type:"admin-input"},ne=(n(70),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),oe={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ne(t,e),t.prototype.render=function(){return s.createElement("iframe",{className:"ui-iframe",src:this.props.url})},t}(s.Component),description:"IFrame Component",displayName:"IFrame",name:"IFrame",fields:[{displayName:"URL",name:"url",valueType:"string"}]},re=(n(72),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),ie=function(){return(ie=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ae={component:function(e){function t(t){var n=e.call(this,t)||this;return n.renderListItem=n.renderListItem.bind(n),n}return re(t,e),t.prototype.renderListItem=function(e,t){var n=ie({},this.props.itemStyle,e.style);return s.createElement("div",{className:"ListItem",key:t,style:n},this.context.renderComponent({id:e.content}))},t.prototype.render=function(){return s.createElement("section",{className:"ListLayout"},this.props.items.map(this.renderListItem))},t}(s.Component),description:"List Layout",displayName:"List Layout",name:"ListLayout",type:"layout",fields:[{displayName:"List Style",name:"listStyle",valueType:"style"},{displayName:"Item Style",name:"itemStyle",valueType:"style"},{displayName:"List items",name:"items",valueType:"object",isArray:!0,fields:[{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}],inputControl:{module:"reactron",component:"ListLayoutItemHeader"}}]},se=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ce={width:"100%",textOverflow:"ellipsis",overflow:"hidden"},ue={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return se(t,e),t.prototype.render=function(){var e=this.props.value||{};return c.a.createElement("div",{style:ce},"[ ",e.content," ]")},t}(c.a.Component),displayName:"ListLayoutItemHeader",name:"ListLayoutItemHeader",type:"admin-input"},pe=n(47),le=(n(154),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),fe={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return le(t,e),t.prototype.render=function(){return s.createElement("section",{className:"MarkDown"},s.createElement(pe,{source:this.props.text}))},t}(s.Component),description:"MarkDown Component",displayName:"MarkDown",name:"MarkDown",fields:[{displayName:"Text",name:"text",valueType:"string",textRows:10}]},me=(n(156),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),de={component:function(e){function t(t){return e.call(this,t)||this}return me(t,e),t.prototype.render=function(){return s.createElement("section",{className:"Notifications"},"Notifications")},t}(s.Component),description:"Notifications",displayName:"Notifications",name:"Notifications",fields:[]},ye=n(48),he=n.n(ye),be=(n(158),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),ve=[ae,ue,Q,Z,te,{component:function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return be(t,e),t.prototype.componentDidMount=function(){var e=this;C.getServerInfo().then(function(t){e.setState({info:t})})},t.prototype.render=function(){var e;return this.state.info&&(e=s.createElement("div",{className:"info"},"To edit this page click Admin-Button or visit",s.createElement("br",null),s.createElement("br",null),s.createElement("i",null,"http://",this.state.info.ip,":3000/admin"))),s.createElement("section",{className:"Welcome"},s.createElement(R,{to:"/admin"},s.createElement(T.FontAwesomeIcon,{icon:L.faCog}),"Admin"),s.createElement("img",{src:he.a,className:"logo",alt:"logo"}),s.createElement("div",{className:"title"},"Welcome to Reactron"),e)},t}(s.Component),description:"Welcome Component",displayName:"Welcome",name:"Welcome",fields:[]},fe,de,oe],we=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},ge=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},_e=window.System,Oe={};Oe.react=s,Oe["react-dom"]=u,Oe["react-router-dom"]=q,Oe.numeral={default:m.a},Oe.moment={default:l.a},Oe["moment-timezone"]={default:B.a},Oe["@fortawesome/fontawesome-svg-core"]=V,Oe["@fortawesome/free-solid-svg-icons"]=L,Oe["@fortawesome/free-regular-svg-icons"]=K,Oe["@fortawesome/free-brands-svg-icons"]=H,Oe["@fortawesome/react-fontawesome"]=T,k.electron&&(Oe.electron=k.electron),Object.keys(Oe).forEach(function(e){var t=Oe[e];_e.register(e,[],function(e){return{execute:function(){return e(t)}}})});var Ce=new(function(){function e(){this.allComponentsLoaded=!1,this.moduleComponents={reactron:ve}}return e.prototype.getModuleComponents=function(e){return we(this,void 0,Promise,function(){var t,n;return ge(this,function(o){switch(o.label){case 0:return this.moduleComponents[e]?[3,3]:[4,C.getModules()];case 1:return t=o.sent(),(n=t.find(function(t){return t.name===e}))?[4,this.registerModuleComponents(n)]:(console.error("Module not found: "+e),[2]);case 2:o.sent(),o.label=3;case 3:return[2,this.moduleComponents[e]]}})})},e.prototype.registerModuleComponents=function(e){return we(this,void 0,Promise,function(){var t,n,o;return ge(this,function(r){switch(r.label){case 0:if(!e.browserFile)return console.log("Module has no browserFile: "+e.name),[2];if(this.moduleComponents[e.name])return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),console.log(e.browserFile),[4,_e.import("\\"+e.browserFile)];case 2:return t=r.sent(),(n=t.components)&&"object"===typeof n&&Array.isArray(n)&&(this.moduleComponents[e.name]=n),console.log("Components loaded for module: "+e.name),[3,4];case 3:return o=r.sent(),console.error("Error loading components for module: "+e.name,o),[3,4];case 4:return[2]}})})},e.prototype.getAllComponents=function(){return we(this,void 0,Promise,function(){var e,t,n,o;return ge(this,function(r){switch(r.label){case 0:return this.allComponentsLoaded?[2,this.moduleComponents]:[4,C.getModules()];case 1:e=r.sent(),t=0,n=e,r.label=2;case 2:return t<n.length?(o=n[t],[4,this.registerModuleComponents(o)]):[3,5];case 3:r.sent(),r.label=4;case 4:return t++,[3,2];case 5:return this.allComponentsLoaded=!0,[2,this.moduleComponents]}})})},e}()),Se=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Ne=function(){return(Ne=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Ee=function(e){function t(t,n){var o=e.call(this,t)||this;return o.componentName=n,o.componentLoader=Ce,o.renderComponent=function(e){return c.a.createElement(Ie,Ne({},e))},o.renderLoading=function(e,t){return c.a.createElement(I,{text:e,iconSize:t})},o}return Se(t,e),t}(A),Pe=c.a.createContext(new Ee("","")),xe=(n(161),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),je=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return xe(t,e),t.prototype.render=function(){var e=[];return this.props.id&&e.push("Id: "+this.props.id),this.props.componentName&&e.push("Component: "+this.props.componentName),this.props.moduleName&&e.push("Module: "+this.props.moduleName),s.createElement("section",{className:"ComponentNotFound"},s.createElement(T.FontAwesomeIcon,{icon:L.faExclamationTriangle,size:this.props.iconSize}),s.createElement("div",{className:"text"},"Component not found: ",e.join(" | ")),s.createElement(R,{to:"/admin"},s.createElement(T.FontAwesomeIcon,{icon:L.faCog})," Admin"))},t.defaultProps={iconSize:"4x"},t}(s.Component),Ae=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ke=function(e){function t(t){var n=e.call(this,t)||this;return n.state={error:null},n}return Ae(t,e),t.prototype.componentDidCatch=function(e,t){console.log(e),console.log(t),this.setState({error:e})},t.prototype.render=function(){return this.state.error?s.createElement("h1",null,"Something went wrong."):this.props.children},t}(s.Component),Le=(n(163),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Te=function(){return(Te=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Me=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},We=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},Ie=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return Le(t,e),t.prototype.componentDidUpdate=function(e){this.props.id===e.id&&this.props.moduleName===e.moduleName&&this.props.componentName===e.componentName&&this.props.options===e.options||this.loadComponent()},t.prototype.componentDidMount=function(){this.loadComponent()},t.prototype.loadComponent=function(){return Me(this,void 0,void 0,function(){var e,t,n,o,r,i,a=this;return We(this,function(s){switch(s.label){case 0:return s.trys.push([0,6,,7]),e=void 0,this.props.id?[4,C.getWebComponentOptions()]:[3,2];case 1:return t=s.sent(),e=t.find(function(e){return e.id===a.props.id}),[3,3];case 2:this.props.moduleName&&this.props.componentName&&(e={id:"",parentId:"",moduleName:this.props.moduleName,componentName:this.props.componentName,options:this.props.options}),s.label=3;case 3:return e?[4,Ce.getModuleComponents(e.moduleName)]:(this.setState({componentFound:!1}),[2]);case 4:return(n=s.sent())?(o=e.componentName,(r=n.find(function(e){return e.name===o}))&&r.component?[4,S(void 0,void 0,void 0,function(){return N(this,function(e){switch(e.label){case 0:return E?[3,2]:[4,C.getSettings()];case 1:E=e.sent(),e.label=2;case 2:return[2]}})})]:(this.setState({componentFound:!1}),[2])):(this.setState({componentFound:!1}),[2]);case 5:return s.sent(),this.setState({componentContext:new Ee(e.moduleName,e.componentName),componentDefinition:r,componentOptions:e,componentFound:!0}),[3,7];case 6:return i=s.sent(),console.log(i),this.setState({componentFound:!1}),[3,7];case 7:return[2]}})})},t.prototype.render=function(){var e=s.createElement(I,{center:!0});if(!1===this.state.componentFound&&(e=s.createElement(je,Te({},this.props))),this.state.componentDefinition&&this.state.componentDefinition.component&&this.state.componentContext){var t=this.state.componentDefinition.component;t.contextType||(t.contextType=Pe);var n=this.state.componentOptions&&this.state.componentOptions.options||{};e=s.createElement(Pe.Provider,{value:this.state.componentContext},s.createElement(t,Te({},n)))}var o=M("WebComponent",this.props.className);return s.createElement("section",{className:o,style:this.props.style},s.createElement(ke,null,e))},t}(s.Component),Fe=(n(165),n(166),n(167),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),De=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},Re=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},Ge=function(e){function t(t){var n=e.call(this,t)||this;return n.reloadWait=2e3,n.state={},n.reload=n.reload.bind(n),n.triggerReload=n.triggerReload.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n}return Fe(t,e),t.prototype.componentDidMount=function(){this.init(),this.subscribeTopics(),document.addEventListener("keydown",this.onKeyDown)},t.prototype.componentWillUnmount=function(){this.unsubscribeTopics(),document.removeEventListener("keydown",this.onKeyDown)},t.prototype.onKeyDown=function(e){var t=window.event?window.event:e;65===t.keyCode&&t.ctrlKey&&t.altKey&&(window.location.href="/admin")},t.prototype.subscribeTopics=function(){k.topics&&(k.topics.subscribe("pages-updated",this.triggerReload),k.topics.subscribe("components-updated",this.triggerReload),k.topics.subscribe("system-settings-updated",this.triggerReload))},t.prototype.unsubscribeTopics=function(){k.topics&&(k.topics.unsubscribe("pages-updated",this.triggerReload),k.topics.unsubscribe("components-updated",this.triggerReload),k.topics.unsubscribe("system-settings-updated",this.triggerReload))},t.prototype.init=function(){return De(this,void 0,void 0,function(){var e,t;return Re(this,function(n){switch(n.label){case 0:return[4,C.getSettings()];case 1:return e=n.sent(),l.a.locale(e.lang),m.a.locale(e.lang),[4,C.getWebPages()];case 2:return t=n.sent(),[2,this.setState({pages:t})]}})})},t.prototype.triggerReload=function(){window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(this.reload,this.reloadWait)},t.prototype.reload=function(){console.log("reload"),C.clearCache(),this.init()},t.prototype.renderPage=function(e,t){return function(){return s.createElement("section",{className:"WebPage",style:t},s.createElement(Ie,{id:e}))}},t.prototype.render=function(){var e=this,t=s.createElement(I,{text:"Loading Reactron...",center:!0});return this.state.pages&&(t=s.createElement(d.a,null,s.createElement(y.a,null,this.state.pages.map(function(t){return s.createElement(h.a,{key:t.path,path:t.path,exact:"/"===t.path,component:e.renderPage(t.webComponentId,t.style)})}),s.createElement(h.a,{component:z})))),s.createElement("section",{className:"App"},t)},t}(s.Component);n(169);u.render(s.createElement(ke,null,s.createElement(Ge,null)),document.getElementById("root"))},48:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},50:function(e,t,n){e.exports=n(171)},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){}},[[50,2,1]]]);
//# sourceMappingURL=main.933c618f.chunk.js.map