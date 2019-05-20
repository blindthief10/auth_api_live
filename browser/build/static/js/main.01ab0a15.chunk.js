(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),u=n(2),s=n(3),i=n(6),l=n(4),m=n(7),p=n(13),b=n(16),h=n(27),f=new(function(){function e(){Object(u.a)(this,e),this.isAuth=!1}return Object(s.a)(e,[{key:"login",value:function(){this.isAuth=!0}},{key:"logout",value:function(){this.isAuth=!1}},{key:"isAuthenticated",value:function(){return this.isAuth}}]),e}()),g={userNameValue:"",passwordValue:"",loginRedirection:!1,userInfo:null,hasFailed:!1,goHome:!1,tempHobby:"",imageSource:"https://media.istockphoto.com/photos/closeup-of-mixedbreed-monkey-between-chimpanzee-and-bonobo-smiling-picture-id507714936?k=6&m=507714936&s=612x612&w=0&h=X_r4XsnwHNZf3wSzXeTYvC6DelESliAsDus4EiSXXu0="},d=Object(b.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=Object(p.a)({},e);switch(t.type){case"HAS_FAILED":return Object(p.a)({},n,{hasFailed:!0});case"REDIRECT_HOME":return Object(p.a)({},n,{loginRedirection:!1,goHome:!0});case"FETCH_DATA":return Object(p.a)({},n,{userInfo:t.userData});case"REDIRECT_LOGIN":return Object(p.a)({},n,{loginRedirection:!0,goHome:!1});case"CHANGE_TEMP_HOBBY":return Object(p.a)({},n,{tempHobby:t.ev.target.value});case"UPDATE_HOBBIES":return Object(p.a)({},n,{userInfo:{hobbies:t.hobbiesPayload}});case"REFRESH_IMAGE":return Object(p.a)({},n,{imageSource:"../uploadedImages/"+t.imageName});case"CHANGE":return"text"===t.payload.target.getAttribute("type")?n.userNameValue=t.payload.target.value:"password"===t.payload.target.getAttribute("type")&&(n.passwordValue=t.payload.target.value),n;default:return n}},Object(b.a)(h.a)),E=n(9),y=n(14),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),n.props.makeRequest({userName:n.props.userNameValue,password:n.props.passwordValue})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"text-center",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Username")),r.a.createElement("input",{onChange:this.props.handleChange,type:"text",className:"form-control",value:this.props.userNameValue})),r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Password")),r.a.createElement("input",{onChange:this.props.handleChange,type:"password",className:"form-control",value:this.props.passwordValue})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg"},"Log in")),this.props.hasFailed&&r.a.createElement("div",{className:"alert alert-danger my-4"},"Either username or password was incorrect. Try again!"),this.props.loginRedirection&&r.a.createElement(y.a,{to:"/user"}))}}]),t}(a.Component),j=Object(E.b)(function(e){return{userNameValue:e.userNameValue,passwordValue:e.passwordValue,loginRedirection:e.loginRedirection,hasFailed:e.hasFailed}},function(e){return{handleChange:function(t){return e({type:"CHANGE",payload:t})},makeRequest:function(t){return e(function(e){return function(t){fetch("/users/login",{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(400===e.status||404===e.status)throw new Error("Authentication failed");return e.json()}).then(function(e){console.log(e),f.login(),t(function(e){return{type:"FETCH_DATA",userData:e}}(e)),t({type:"REDIRECT_LOGIN"})}).catch(function(e){console.warn(e),t({type:"HAS_FAILED"})})}}(t))}}})(O),v=n(15),N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).pushHobby=function(e){e.preventDefault(),n.props.pushHobby(n.props.tempHobby)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"title my-5 text-dark"},"Your hobbies are: "),r.a.createElement("ul",{className:"nav flex-column mb-5"},this.props.hobbies.map(function(e,t){return r.a.createElement("li",{key:t,className:"nav-item"},t+1,". ",e)})),r.a.createElement("form",{className:"text-center",onSubmit:this.pushHobby},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Create a hobby")),r.a.createElement("input",{onChange:this.props.changeHobby,type:"text",className:"form-control",value:this.props.tempHobby})),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},"Push new hobby")))}}]),t}(a.Component),w=Object(E.b)(function(e){return{hobbies:e.userInfo.hobbies,tempHobby:e.tempHobby}},function(e){return{changeHobby:function(t){return e(function(e){return{type:"CHANGE_TEMP_HOBBY",ev:e}}(t))},pushHobby:function(t){return e(function(e){return function(t){fetch("/users/update/hobbies",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({hobbies:e})}).then(function(e){return e.json()}).then(function(e){console.log(e),t({type:"UPDATE_HOBBIES",hobbiesPayload:e.hobbies})}).catch(function(e){return console.warn(e)})}}(t))}}})(N),H=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getImage()}},{key:"render",value:function(){return r.a.createElement("img",{src:this.props.imageSource,style:{width:"50%",height:"20vw"}})}}]),t}(a.Component),A=Object(E.b)(function(e){return{imageSource:e.imageSource}},function(e){return{getImage:function(){return e(function(e){fetch("/images/profile").then(function(e){if(e.status>=400&&e.status<500)throw new Error("Could not fetch");return e.json()}).then(function(t){console.log(t),e({type:"REFRESH_IMAGE",imageName:t.imageName})}).catch(function(e){return console.warn(e)})})}}})(H),C=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return f.isAuthenticated()?r.a.createElement(y.b,{component:S}):r.a.createElement(y.a,{to:"/"})}}]),t}(a.Component),I=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link",to:"/user"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link",to:"/user/hobbies"},"Hobbies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(v.b,{className:"nav-link",to:"/user/profile"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{onClick:this.props.logout,className:"btn btn-danger btn-sm"},"Logout"))),this.props.goHome&&r.a.createElement(y.a,{to:"/"}))}}]),t}(a.Component),k=Object(E.b)(function(e){return{goHome:e.goHome}},function(e){return{logout:function(){return e(function(e){fetch("/users/logout").then(function(e){if(400===e.status||404===e.status)throw new Error("Log out failed");return e.json()}).then(function(t){console.log(t),e({type:"REDIRECT_HOME"})}).catch(function(e){return console.warn(e)})})}}})(I),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).uploadImage=function(e){e.preventDefault(),n.props.executeImageFromProps(n.refs.fileInput.files[0])},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title text-center mt-5"},"Hello ",this.props.userInfo.userName),r.a.createElement("form",{className:"text-center",onSubmit:this.uploadImage},r.a.createElement("div",{className:"input-group mb-3 input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Select")),r.a.createElement("input",{ref:"fileInput",type:"file",className:"btn btn-warning"})),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},"Upload Image")))}}]),t}(a.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(y.b,{exact:!0,path:"/user",component:F}),r.a.createElement(y.b,{path:"/user/hobbies",component:w}),r.a.createElement(y.b,{path:"/user/profile",component:A}))}}]),t}(a.Component),F=Object(E.b)(function(e){return{userInfo:e.userInfo}},function(e){return{executeImageFromProps:function(t){return e(function(e){return function(t){var n=new FormData;n.append("profile",e),fetch("/images/upload",{method:"post",body:n}).then(function(e){if(400===e.status||404===e.status)throw new Error("An error occured. Uploading failed");return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}}(t))}}})(x),R=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title text-primary text-center my-4"},"Welcome to our starting Page"),r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"jumbotron p-5"},r.a.createElement(v.a,null,r.a.createElement(y.b,{path:"/",exact:!0,component:j}),r.a.createElement(y.b,{path:"/user",component:C})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(44);c.a.render(r.a.createElement(E.a,{store:d},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.01ab0a15.chunk.js.map