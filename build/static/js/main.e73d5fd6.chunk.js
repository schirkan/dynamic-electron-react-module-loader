(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var o,r,i,a,s=n(0),c=n.n(s),u=n(20),p=n(38),l=n(39),f=n(28);window.require&&(o=window.require("electron"),r=o.remote.require("./dist/server/BackendService").BackendService.instance,i=r.topics,a=o.remote.require("electron-store"));var m,d={},h={},y=function(){return function(e){var t=this;this.moduleName=e,this.electron=o,this.backendService=r,this.topics=i;var n="module."+e;a&&!d[n]&&(d[n]=new a({name:"module."+e})),this.moduleStorage=d[n];var s=e.replace("/","@");this.moduleApiPath="/api/modules/"+s,this.getService=function(n,o){if(t.backendService){var r=(o||e)+"."+n;return h[r]||(h[r]=t.backendService.serviceManager.get(o||e,n)),h[r]}console.log("Method getService() is not supported in browser environment.")}}}(),b=new y("reactron"),v=function(){return function(e,t){this.path=e,this.method=t}}(),w={getServices:new v("/service/","get"),getServiceOptions:new v("/service/:moduleName/:serviceName","get"),setServiceOptions:new v("/service/:moduleName/:serviceName","post"),getModules:new v("/modules/","get"),addModule:new v("/modules/","post"),deleteModule:new v("/modules/:moduleName","delete"),rebuildModule:new v("/modules/:moduleName/rebuild","post"),updateModule:new v("/modules/:moduleName/update","post"),checkUpdates:new v("/modules/checkUpdates/update","get"),getWebPages:new v("/pages/","get"),setWebPage:new v("/pages/","post"),deleteWebPage:new v("/pages/:id","delete"),getServerInfo:new v("/app/","get"),exitApplication:new v("/app/exitApplication","post"),restartApplication:new v("/app/restartApplication","post"),shutdownSystem:new v("/app/shutdownSystem","post"),rebootSystem:new v("/app/restartSystem","post"),resetApplication:new v("/app/resetApplication","post"),getSettings:new v("/settings/","get"),setSettings:new v("/settings/","post"),getWebComponentOptions:new v("/components/","get"),setWebComponentOptions:new v("/components/","post"),deleteWebComponentOptions:new v("/components/:id","delete")},g=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},_=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},O=function(){function e(){this.getAllServices=C(w.getServices,!0),this.getServiceOptions=C(w.getServiceOptions),this.setServiceOptions=C(w.setServiceOptions),this.getModules=C(w.getModules,!0),this.addModule=C(w.addModule),this.checkUpdates=C(w.checkUpdates),this.deleteModule=C(w.deleteModule),this.rebuildModule=C(w.rebuildModule),this.updateModule=C(w.updateModule),this.getWebPages=C(w.getWebPages,!0),this.setWebPage=C(w.setWebPage),this.deleteWebPage=C(w.deleteWebPage),this.getServerInfo=C(w.getServerInfo),this.exitApplication=C(w.exitApplication),this.restartApplication=C(w.restartApplication),this.shutdownSystem=C(w.shutdownSystem),this.rebootSystem=C(w.rebootSystem),this.resetApplication=C(w.resetApplication),this.getSettings=C(w.getSettings,!0),this.setSettings=C(w.setSettings),this.getWebComponentOptions=C(w.getWebComponentOptions,!0),this.setWebComponentOptions=C(w.setWebComponentOptions),this.deleteWebComponentOptions=C(w.deleteWebComponentOptions)}return e.prototype.clearCache=function(){var e=this;Object.keys(this).forEach(function(t){e[t]&&e[t].clearCache&&e[t].clearCache()})},e}(),C=function(e,t){var n;void 0===t&&(t=!1);var o=e.method.toLocaleLowerCase(),r=function(r,i){if(t&&n)return Promise.resolve(n);var a=e.path;return r&&Object.keys(r).forEach(function(e){a=a.replace(":"+e,r[e])}),fetch(b.moduleApiPath+a,{method:o,body:i&&JSON.stringify(i),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return g(void 0,void 0,void 0,function(){var t;return _(this,function(n){switch(n.label){case 0:return[4,e.text()];case 1:if(t=n.sent(),e.status.toString().startsWith("2"))return t?[2,JSON.parse(t)]:[2,void 0];throw console.log(t),Error(t)}})})}).then(function(e){return t&&(n=e),e})};return r.clearCache=function(){n=void 0},r},N=new O,S=n(6),E=n(7),P=n(40),x=(n(55),m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.render=function(){return s.createElement("section",{className:P("Loading",{center:this.props.center})},s.createElement(E.FontAwesomeIcon,{icon:S.faSpinner,size:this.props.iconSize,spin:!0}),this.props.text&&s.createElement("div",{className:"text"},this.props.text))},t.defaultProps={iconSize:"4x"},t}(s.Component),j=n(14),k=(n(57),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return k(t,e),t.prototype.render=function(){return s.createElement(j.a,{className:"RoundButton",to:this.props.to,role:"button"},this.props.children)},t}(s.Component),L=(n(59),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return L(t,e),t.prototype.render=function(){return s.createElement("div",{className:"PageNotFound"},s.createElement("h1",null,s.createElement(E.FontAwesomeIcon,{icon:S.faQuestionCircle})," 404"),s.createElement("h2",null,"No page defined for path: ",this.props.location.pathname),s.createElement(T,{to:"/admin"},s.createElement(E.FontAwesomeIcon,{icon:S.faCog})," Admin"),s.createElement(T,{to:"/"},s.createElement(E.FontAwesomeIcon,{icon:S.faHome})," Home"))},t}(s.Component),W=n(17),I=n(41),F=n(42),R=n(18),D=n.n(R),G=n(43),z=n.n(G),V=n(19),U=(n(64),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),B={component:function(e){function t(t){return e.call(this,t)||this}return U(t,e),t.prototype.render=function(){return s.createElement("section",{className:"CarouselLayout"},"CarouselLayout")},t}(s.Component),description:"Carousel Layout",displayName:"Carousel Layout",name:"CarouselLayout",type:"layout",fields:[]},q=(n(66),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),J=function(){return(J=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},H={component:function(e){function t(t){var n=e.call(this,t)||this;return n.renderTile=n.renderTile.bind(n),n}return q(t,e),t.prototype.renderTile=function(e,t){var n=J({},this.props.tileStyle,e.style);return n.gridColumn=e.col.toString(),e.colspan>1&&(n.gridColumn+=" / span "+e.colspan),n.gridRow=e.row.toString(),e.rowspan>1&&(n.gridRow+=" / span "+e.rowspan),s.createElement("div",{className:"GridTile",key:t,style:n},this.context.renderComponent({id:e.content}))},t.prototype.render=function(){return s.createElement("section",{className:"GridLayout",style:this.props.gridStyle},this.props.tiles.map(this.renderTile))},t}(s.Component),description:"Grid Layout",displayName:"Grid Layout",name:"GridLayout",type:"layout",fields:[{displayName:"Grid Style",name:"gridStyle",valueType:"style"},{displayName:"Tile Style",name:"tileStyle",valueType:"style"},{displayName:"Grid tiles",name:"tiles",valueType:"object",isArray:!0,fields:[{displayName:"Row",name:"row",valueType:"number",minValue:1,defaultValue:1},{displayName:"Column",name:"col",valueType:"number",minValue:1,defaultValue:1},{displayName:"Row span",name:"rowspan",valueType:"number",minValue:1,defaultValue:1},{displayName:"Column span",name:"colspan",valueType:"number",minValue:1,defaultValue:1},{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}]}]},Q=(n(68),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),K={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Q(t,e),t.prototype.render=function(){return s.createElement("iframe",{className:"ui-iframe",src:this.props.url})},t}(s.Component),description:"IFrame Component",displayName:"IFrame",name:"IFrame",fields:[{displayName:"URL",name:"url",valueType:"string"}]},X=(n(70),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Z={component:function(e){function t(t){var n=e.call(this,t)||this;return n.renderListItem=n.renderListItem.bind(n),n}return X(t,e),t.prototype.renderListItem=function(e,t){var n=Y({},this.props.itemStyle,e.style);return s.createElement("div",{className:"ListItem",key:t,style:n},this.context.renderComponent({id:e.content}))},t.prototype.render=function(){return s.createElement("section",{className:"ListLayout"},this.props.items.map(this.renderListItem))},t}(s.Component),description:"List Layout",displayName:"List Layout",name:"ListLayout",type:"layout",fields:[{displayName:"List Style",name:"listStyle",valueType:"style"},{displayName:"Item Style",name:"itemStyle",valueType:"style"},{displayName:"List items",name:"items",valueType:"object",isArray:!0,fields:[{displayName:"Content",name:"content",valueType:"webComponent"},{displayName:"Style",name:"style",valueType:"style"}]}]},$=n(44),ee=(n(151),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),te={component:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ee(t,e),t.prototype.render=function(){return s.createElement("section",{className:"MarkDown"},s.createElement($,{source:this.props.text}))},t}(s.Component),description:"MarkDown Component",displayName:"MarkDown",name:"MarkDown",fields:[{displayName:"Text",name:"text",valueType:"string",textRows:10}]},ne=(n(153),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),oe={component:function(e){function t(t){return e.call(this,t)||this}return ne(t,e),t.prototype.render=function(){return s.createElement("section",{className:"Notifications"},"Notifications")},t}(s.Component),description:"Notifications",displayName:"Notifications",name:"Notifications",fields:[]},re=n(45),ie=n.n(re),ae=(n(155),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),se=[Z,B,H,{component:function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return ae(t,e),t.prototype.componentDidMount=function(){var e=this;N.getServerInfo().then(function(t){e.setState({info:t})})},t.prototype.render=function(){var e;return this.state.info&&(e=s.createElement("div",{className:"info"},"To edit this page click Admin-Button or visit",s.createElement("br",null),s.createElement("br",null),s.createElement("i",null,"http://",this.state.info.ip,":3000/admin"))),s.createElement("section",{className:"Welcome"},s.createElement(T,{to:"/admin"},s.createElement(E.FontAwesomeIcon,{icon:S.faCog}),"Admin"),s.createElement("img",{src:ie.a,className:"logo",alt:"logo"}),s.createElement("div",{className:"title"},"Welcome to Reactron"),e)},t}(s.Component),description:"Welcome Component",displayName:"Welcome",name:"Welcome",fields:[]},te,oe,K],ce=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},ue=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},pe=window.System,le={};le.react=s,le["react-dom"]=u,le["react-router-dom"]=V,le.moment={default:D.a},le["moment-timezone"]={default:z.a},le["@fortawesome/fontawesome-svg-core"]=W,le["@fortawesome/free-solid-svg-icons"]=S,le["@fortawesome/free-regular-svg-icons"]=F,le["@fortawesome/free-brands-svg-icons"]=I,le["@fortawesome/react-fontawesome"]=E,b.electron&&(le.electron=b.electron),Object.keys(le).forEach(function(e){var t=le[e];pe.register(e,[],function(e){return{execute:function(){return e(t)}}})});var fe=new(function(){function e(){this.allComponentsLoaded=!1,this.moduleComponents={reactron:se}}return e.prototype.getModuleComponents=function(e){return ce(this,void 0,Promise,function(){var t,n;return ue(this,function(o){switch(o.label){case 0:return this.moduleComponents[e]?[3,3]:[4,N.getModules()];case 1:return t=o.sent(),(n=t.find(function(t){return t.name===e}))?[4,this.registerModuleComponents(n)]:(console.error("Module not found: "+e),[2]);case 2:o.sent(),o.label=3;case 3:return[2,this.moduleComponents[e]]}})})},e.prototype.registerModuleComponents=function(e){return ce(this,void 0,Promise,function(){var t,n,o;return ue(this,function(r){switch(r.label){case 0:if(!e.browserFile)return console.log("Module has no browserFile: "+e.name),[2];if(this.moduleComponents[e.name])return[2];r.label=1;case 1:return r.trys.push([1,3,,4]),console.log(e.browserFile),[4,pe.import("\\"+e.browserFile)];case 2:return t=r.sent(),(n=t.components)&&"object"===typeof n&&Array.isArray(n)&&(this.moduleComponents[e.name]=n),console.log("Components loaded for module: "+e.name),[3,4];case 3:return o=r.sent(),console.error("Error loading components for module: "+e.name,o),[3,4];case 4:return[2]}})})},e.prototype.getAllComponents=function(){return ce(this,void 0,Promise,function(){var e,t,n,o;return ue(this,function(r){switch(r.label){case 0:return this.allComponentsLoaded?[2,this.moduleComponents]:[4,N.getModules()];case 1:e=r.sent(),t=0,n=e,r.label=2;case 2:return t<n.length?(o=n[t],[4,this.registerModuleComponents(o)]):[3,5];case 3:r.sent(),r.label=4;case 4:return t++,[3,2];case 5:return this.allComponentsLoaded=!0,[2,this.moduleComponents]}})})},e}()),me=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),de=function(){return(de=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},he=function(e){function t(t,n){var o=e.call(this,t)||this;return o.componentName=n,o.componentLoader=fe,o.renderComponent=function(e){return c.a.createElement(Se,de({},e))},o.renderLoading=function(e,t){return c.a.createElement(A,{text:e,iconSize:t})},o}return me(t,e),t}(y),ye=c.a.createContext(new he("","")),be=(n(158),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),ve=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return be(t,e),t.prototype.render=function(){var e=[];return this.props.id&&e.push("Id: "+this.props.id),this.props.componentName&&e.push("Component: "+this.props.componentName),this.props.moduleName&&e.push("Module: "+this.props.moduleName),s.createElement("section",{className:"ComponentNotFound"},s.createElement(E.FontAwesomeIcon,{icon:S.faExclamationTriangle,size:this.props.iconSize}),s.createElement("div",{className:"text"},"Component not found: ",e.join(" | ")),s.createElement(T,{to:"/admin"},s.createElement(E.FontAwesomeIcon,{icon:S.faCog})," Admin"))},t.defaultProps={iconSize:"4x"},t}(s.Component),we=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ge=function(e){function t(t){var n=e.call(this,t)||this;return n.state={error:null},n}return we(t,e),t.prototype.componentDidCatch=function(e,t){console.log(e),console.log(t),this.setState({error:e})},t.prototype.render=function(){return this.state.error?s.createElement("h1",null,"Something went wrong."):this.props.children},t}(s.Component),_e=(n(160),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Oe=function(){return(Oe=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Ce=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},Ne=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},Se=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return _e(t,e),t.prototype.componentDidUpdate=function(e,t){this.props.id===e.id&&this.props.moduleName===e.moduleName&&this.props.componentName===e.componentName&&this.props.options===e.options||this.loadComponent()},t.prototype.componentDidMount=function(){this.loadComponent()},t.prototype.loadComponent=function(){return Ce(this,void 0,void 0,function(){var e,t,n,o,r,i,a=this;return Ne(this,function(s){switch(s.label){case 0:return s.trys.push([0,5,,6]),e=void 0,this.props.id?[4,N.getWebComponentOptions()]:[3,2];case 1:return t=s.sent(),e=t.find(function(e){return e.id===a.props.id}),[3,3];case 2:this.props.moduleName&&this.props.componentName&&(e={id:"",moduleName:this.props.moduleName,componentName:this.props.componentName,options:this.props.options}),s.label=3;case 3:return e?[4,fe.getModuleComponents(e.moduleName)]:(this.setState({componentFound:!1}),[2]);case 4:return(n=s.sent())?(o=e.componentName,(r=n.find(function(e){return e.name===o}))&&r.component?(this.setState({componentContext:new he(e.moduleName,e.componentName),componentDefinition:r,componentOptions:e,componentFound:!0}),[3,6]):(this.setState({componentFound:!1}),[2])):(this.setState({componentFound:!1}),[2]);case 5:return i=s.sent(),console.log(i),this.setState({componentFound:!1}),[3,6];case 6:return[2]}})})},t.prototype.render=function(){var e=s.createElement(A,{center:!0});if(!1===this.state.componentFound&&(e=s.createElement(ve,Oe({},this.props))),this.state.componentDefinition&&this.state.componentDefinition.component&&this.state.componentContext){var t=this.state.componentDefinition.component;t.contextType||(t.contextType=ye);var n=this.state.componentOptions&&this.state.componentOptions.options||{};e=s.createElement(ye.Provider,{value:this.state.componentContext},s.createElement(t,Oe({},n)))}return s.createElement("section",{className:"WebComponent"},s.createElement(ge,null,e))},t}(s.Component),Ee=(n(162),function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),Pe=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})},xe=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},Ae=function(e){function t(t){var n=e.call(this,t)||this;return n.reloadWait=2e3,n.state={},n.reload=n.reload.bind(n),n.triggerReload=n.triggerReload.bind(n),n}return Ee(t,e),t.prototype.componentDidMount=function(){this.loadPages(),b.topics&&(b.topics.subscribe("pages-updated",this.triggerReload),b.topics.subscribe("components-updated",this.triggerReload),b.topics.subscribe("system-settings-updated",this.triggerReload))},t.prototype.loadPages=function(){return Pe(this,void 0,void 0,function(){var e;return xe(this,function(t){switch(t.label){case 0:return[4,N.getWebPages()];case 1:return e=t.sent(),[2,this.setState({pages:e})]}})})},t.prototype.triggerReload=function(){console.log("triggerReload",arguments),window.clearTimeout(this.reloadTimer),this.reloadTimer=window.setTimeout(this.reload,this.reloadWait)},t.prototype.reload=function(){N.getWebPages.clearCache(),N.getWebComponentOptions.clearCache(),this.loadPages()},t.prototype.renderPage=function(e,t){return function(){return s.createElement("section",{className:"WebPage",style:t},s.createElement(Se,{id:e}))}},t.prototype.render=function(){var e=this,t=s.createElement(A,{text:"Loading Reactron...",center:!0});return this.state.pages&&(t=s.createElement(p.a,null,s.createElement(l.a,null,this.state.pages.map(function(t){return s.createElement(f.a,{key:t.path,path:t.path,exact:"/"===t.path,component:e.renderPage(t.webComponentId,t.style)})}),s.createElement(f.a,{component:M})))),s.createElement("section",{className:"App"},t)},t}(s.Component);n(164);u.render(s.createElement(ge,null,s.createElement(Ae,null)),document.getElementById("root"))},45:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},47:function(e,t,n){e.exports=n(166)},55:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){}},[[47,2,1]]]);
//# sourceMappingURL=main.e73d5fd6.chunk.js.map