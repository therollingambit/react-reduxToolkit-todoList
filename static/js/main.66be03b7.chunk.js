(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(6),d=n.n(i),a=(n(19),n(20),n(13)),s=(n(21),n(7)),r=n(10),u=Object(r.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.push(t.payload)},setCheck:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(e.done?e.done=!1:e.done=!0)}))}}}),j=u.actions,b=j.saveTodo,l=j.setCheck,p=function(e){return e.todos.todoList},O=u.reducer,h=n(2),m=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(s.b)();return Object(h.jsxs)("div",{className:"input",children:[Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("button",{onClick:function(){console.log("adding ".concat(n)),i(b({item:n,done:!1,id:Date.now()})),c("")},children:"Add"})]})},x=(n(26),n(43)),f=function(e){var t=e.name,n=e.done,o=e.id,c=Object(s.b)();return Object(h.jsxs)("div",{className:"todoItem",children:[Object(h.jsx)(x.a,{checked:n,color:"primary",onClick:function(){c(l(o))},inputProps:{"aria-label":"secondary checkbox"}}),Object(h.jsx)("p",{className:n&&"todoItem--done",children:t})]})},v=function(){var e=Object(s.c)(p);return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)("div",{className:"app-todoContainer",children:e.map((function(e){return Object(h.jsx)(f,{name:e.item,done:e.done,id:e.id})}))}),Object(h.jsx)(m,{})]})})},k=Object(r.a)({reducer:{todos:O}});d.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:k,children:Object(h.jsx)(v,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.66be03b7.chunk.js.map