(this.webpackJsonpdmxchancalc=this.webpackJsonpdmxchancalc||[]).push([[0],{25:function(e,a,n){},30:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(14),j=n(12),s=n(36),l=n(33),b=n(37),h=n(34),i=n(17),x=n(35),u=(n(25),n(3));function o(){var e=Object(t.useState)(0),a=Object(j.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)(0),o=Object(j.a)(r,2),O=o[0],p=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{variant:"dark",bg:"dark",children:Object(u.jsx)(s.a.Brand,{children:"DMX Channel Calculator"})}),Object(u.jsx)(l.a,{as:"main",children:Object(u.jsxs)(b.a,{children:[Object(u.jsxs)(b.a.Group,{as:h.a,children:[Object(u.jsx)(b.a.Label,{column:!0,sm:1,htmlFor:"chan-a",children:"Chan A"}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(x.a.Prepend,{children:Object(u.jsx)(x.a.Text,{children:"DMX"})}),Object(u.jsx)(b.a.Control,{type:"number",name:"chan-a",value:n,min:"0",max:"255",onChange:function(e){return m(e.target.value,255,c)}})]})}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(b.a.Control,{type:"number",name:"chan-a-pct",value:Math.round(n/255*100),min:"0",max:"100",onChange:function(e){return d(e.target.value,255,c)}}),Object(u.jsx)(x.a.Append,{children:Object(u.jsx)(x.a.Text,{children:"%"})})]})})]}),Object(u.jsxs)(b.a.Group,{as:h.a,children:[Object(u.jsx)(b.a.Label,{column:!0,sm:1,htmlFor:"chan-b",children:"Chan B"}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(x.a.Prepend,{children:Object(u.jsx)(x.a.Text,{children:"DMX"})}),Object(u.jsx)(b.a.Control,{type:"number",name:"chan-b",value:O,min:"0",max:"255",onChange:function(e){return m(e.target.value,255,p)}})]})}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(b.a.Control,{type:"number",name:"chan-b-pct",value:Math.round(O/255*100),min:"0",max:"100",onChange:function(e){return d(e.target.value,255,p)}}),Object(u.jsx)(x.a.Append,{children:Object(u.jsx)(x.a.Text,{children:"%"})})]})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)(b.a.Group,{as:h.a,children:[Object(u.jsx)(b.a.Label,{column:!0,sm:1,htmlFor:"absolute",children:"16-Bit"}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(x.a.Prepend,{children:Object(u.jsx)(x.a.Text,{children:"DMX"})}),Object(u.jsx)(b.a.Control,{type:"number",name:"value",value:(n<<8)+O,min:"0",max:"65535",onChange:function(e){m(parseInt(e.target.value),65535,(function(e){c((65280&e)>>8),p(255&e)}))}})]})}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(x.a,{className:"mb-2",children:[Object(u.jsx)(b.a.Control,{type:"number",name:"value-pct",value:Math.round(((n<<8)+O)/65535*100),min:"0",max:"100",onChange:function(e){d(parseInt(e.target.value),65535,(function(e){c((65280&e)>>8),p(255&e)}))}}),Object(u.jsx)(x.a.Append,{children:Object(u.jsx)(x.a.Text,{children:"%"})})]})})]})]})})]})}function d(e,a,n){var t=e;"number"!==typeof t&&(t=parseInt(t)),isNaN(t)||t<0||t>a||m(Math.floor(t/100*a),a,n)}function m(e,a,n){var t=e;"number"!==typeof t&&(t=parseInt(t)),isNaN(t)||t<0||t>a||n(t)}Object(r.render)(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.59e3c5d7.chunk.js.map