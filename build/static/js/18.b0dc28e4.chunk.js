(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{2055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var i=n(1572),r=n(2),o=n(224),c=n.n(o),a=n(1609),s=n.n(a),d=n(54);function l(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],a=n[1];Object(r.useEffect)((function(){c.a.get("/form/list").then((function(e){console.log(e.data),a(e.data)}))}),[]);var l=Object(r.useMemo)((function(){return[{name:"Title",selector:"form.title",sortable:!0},{name:"Actions",grow:2,center:!0,compact:!0,wrap:!0,style:{},cell:function(t,n,i,r){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{style:{marginRight:"10px",padding:"15px 26px",border:"none",background:"gray",color:"white",borderRadius:"50em",fontSize:"14px"},onClick:function(){return n=t,void e.history.push("/form/".concat(n._id,"/submissions"));var n},children:"Submissions"})})}}]}));return Object(d.jsx)("div",{children:Object(d.jsx)(s.a,{title:"Forms",columns:l,data:o,defaultSortFieldId:1,pagination:!0,highlightOnHover:!0,striped:!0,pointerOnHover:!0,customStyles:{rows:{style:{minHeight:"80px",fontSize:"17px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px"}}}})})}}}]);
//# sourceMappingURL=18.b0dc28e4.chunk.js.map