(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{2049:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var i=n(174),o=n(1572),r=n(2),c=n(338),a=n(225),d=n.n(a),u=n(1609),l=n.n(u),s=n(54);function p(t){var e=Object(r.useState)([]),n=Object(o.a)(e,2),a=n[0],u=n[1],p=Object(c.b)();Object(r.useEffect)((function(){d.a.get("/form/list").then((function(t){u(t.data)}))}),[]);var f=Object(r.useMemo)((function(){return[{name:"Title",selector:"form.title",sortable:!0},{name:"Actions",grow:2,center:!0,compact:!0,wrap:!0,style:{},cell:function(e,n,o,r){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{style:{marginRight:"10px",padding:"10px 16px",border:"none",background:"gray",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return n=e,void t.history.push("/form/display/".concat(n._id));var n},children:"Show"}),Object(s.jsx)("button",{style:{marginRight:"10px",padding:"10px 16px",border:"none",background:"gray",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return t=e,void d.a.put("/form/".concat(t._id,"/publish"),{}).then((function(e){u(a.filter((function(n){return n._id===t._id&&(n.published=e.data.published),!0})))})).catch((function(t){alert("Something Wrong")}));var t},children:e.published?"Un-Publish":"Publish"}),Object(s.jsx)("button",{style:{marginRight:"10px",padding:"10px 16px",border:"none",background:"#007bff",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return n=e,void d.a.get("/form/admin/".concat(n._id)).then((function(e){var o=Object(i.a)(e.data.form.form.components.map((function(t){return t.users=new Set(t.users),t})));o.pop(),p({type:"add-components",val:o}),t.history.push("/form/edit/".concat(n._id),{form:e.data.form})})).catch((function(t){alert("Not Found")}));var n},children:"Edit"}),Object(s.jsx)("button",{style:{padding:"10px 16px",border:"none",background:"#dc3545",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return t=e,void(window.confirm("Are u Sure you want delete it ?")&&d.a.delete("/form/delete/".concat(t._id)).then((function(e){u(a.filter((function(e){return e._id!==t._id})))})).catch((function(t){alert("Something Wrong")})));var t},children:"Delete"})]})}}]}));return Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{title:"Forms",columns:f,data:a,defaultSortFieldId:1,pagination:!0,highlightOnHover:!0,striped:!0,pointerOnHover:!0,customStyles:{rows:{style:{minHeight:"80px",fontSize:"17px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}}})})}}}]);
//# sourceMappingURL=14.0a5fe0c3.chunk.js.map