(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{2054:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var i=n(1572),r=n(2),o=n(225),c=n.n(o),s=n(1609),a=n.n(s),d=n(54);function u(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],s=n[1];Object(r.useEffect)((function(){c.a.get("/form/submissions").then((function(e){s(e.data)}))}),[]);var u=Object(r.useMemo)((function(){return[{name:"id",selector:"report_title",sortable:!0},{name:"Actions",grow:2,center:!0,compact:!0,wrap:!0,style:{},cell:function(t,n,i,r){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{style:{marginRight:"10px",padding:"15px 26px",border:"none",background:"gray",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return n=t,void e.history.push("/submission/".concat(n._id));var n},children:"Show"})})}}]}));return Object(d.jsx)("div",{children:Object(d.jsx)(a.a,{title:"Users' Reports",columns:u,data:o,defaultSortFieldId:1,pagination:!0,highlightOnHover:!0,striped:!0,pointerOnHover:!0,customStyles:{rows:{style:{minHeight:"80px",fontSize:"17px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}}})})}}}]);
//# sourceMappingURL=19.71c77efd.chunk.js.map