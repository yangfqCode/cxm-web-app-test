(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{lR0b:function(e,t,a){"use strict";var n=a("TqRt"),l=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=n(a("wCAj"));a("IzEo");var i=n(a("bx4M")),u=n(a("lwsE")),o=n(a("W8MJ")),c=n(a("a1gu")),d=n(a("Nsbk")),s=n(a("7W2i"));a("y8nQ");var f,p,v,m,h=n(a("Vl3Y")),g=l(a("q1tI")),y=(n(a("wd/R")),a("MuoO")),b=(a("+n12"),n(a("xLbA"))),x=a("RO9D"),E=(a("7cBs"),n(a("WaTI")),n(a("XDRB")),f=(0,y.connect)(function(e){var t=e.finance,a=e.revenue,n=e.loading;return{finance:t,revenue:a,loading:n.models.list}}),p=h.default.create(),f(v=p((m=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,c.default)(this,(0,d.default)(t).call(this,e)),a.back=function(){window.history.back()},a.state={loading:!0},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=(0,x.isEmptyObject)(this.props.location)?0:this.props.location.query.batchId,t=(0,x.isEmptyObject)(this.props.location)?"":this.props.location.query.dateTime;this.revenueDetail({batchId:e,dateTime:t})}},{key:"revenueDetail",value:function(e){var t=this;this.props.dispatch({type:"revenue/fetchRevenueDetail",payload:e}).then(function(e){t.setState({loading:!1})})}},{key:"render",value:function(){var e=this.props.revenue.revenueDeatil,t=e.supplierCar,a=e.dateTime,n=e.status,l=e.totalRevenue,u=(e.packKind,e.saleType),o=(e.stockNumber,e.stockWeight,e.purchaseUnitPrice,e.batchRevenueList),c=e&&Array.isArray(o)?o:[],d=e&&Array.isArray(e.columnsList)?e.columnsList:[],s=[{title:"\u8d27\u54c1",dataIndex:"goodsName",align:"center"},{title:"\u603b\u9500\u91cf",dataIndex:"totalSaleNumber",align:"center",render:function(e,t,a){var n=t.totalSaleNumber;return g.default.createElement("span",null,n,"\u4ef6")}},{title:"\u603b\u91cd\u91cf",dataIndex:"totalSaleWeight",align:"center",render:function(e,t,a){var n=t.totalSaleWeight;return g.default.createElement("span",null,n,"\u516c\u65a4")}}];if(0==u)for(var f=0;f<d.length;f++){var p=d[f];s.push(p)}else 1==u&&(s.push({title:"\u5269\u4f59\u5e93\u5b58",align:"center",render:function(e){var t=e.stockNumber,a=e.stockWeight,n=e.packKind;return g.default.createElement("span",null,1==n?t:a,1==n?"\u4ef6":"\u516c\u65a4")}}),s.push({title:"\u603b\u9500\u552e\u8d27\u6b3e",dataIndex:"totalGoodsAmount",align:"center"}),s.push({title:"\u8fdb\u8d27\u5355\u4ef7",align:"center",render:function(e){var t=e.purchaseUnitPrice,a=e.packKind;return g.default.createElement("span",null,t,1==a?"\u5143/\u4ef6":"\u5143/\u516c\u65a4")}}),s.push({title:"\u5747\u4ef7",align:"center",render:function(e){var t=e.avgUnitPrice,a=e.packKind;return g.default.createElement("span",null,t,1==a?"\u5143/\u4ef6":"\u5143/\u516c\u65a4")}}));var v={title:"\u603b\u6536\u76ca",dataIndex:"totalRevenue",align:"center",render:function(e,t){var a=t.totalRevenue;return g.default.createElement("span",null,0==a?"--":a)}};return s.push(v),g.default.createElement("div",{className:b.default.billDetails,id:"billDetails"},g.default.createElement(i.default,{bordered:!1,title:""},g.default.createElement("div",{className:b.default.paymentbill},g.default.createElement("div",{style:{display:"flex"}},g.default.createElement("span",{style:{flex:1,textAlign:"left",color:"#323232",fontSize:"24px"}},"".concat(void 0!==t?t:"")),g.default.createElement("span",{style:{flex:1,textAlign:"left",color:"#323232",fontSize:"24px"}},a),g.default.createElement("span",{style:{flex:1,textAlign:"left",color:"#323232",fontSize:"24px"}},0==u?"\u4ee3\u5356":"\u81ea\u8425"),g.default.createElement("span",{style:{flex:1,textAlign:"left",color:"#323232",fontSize:"24px"}},7===n?"\u552e\u7f44":"\u5728\u552e"),g.default.createElement("span",{style:{flex:1,textAlign:"left",color:"#323232",fontSize:"24px"}},"\u5408\u8ba1\uff1a",l)))),g.default.createElement(i.default,{bordered:!1,title:"",bodyStyle:{padding:"0 16px"}},g.default.createElement(r.default,{dataSource:c,columns:s,bordered:!0,pagination:!1,loading:this.state.loading})))}}]),t}(g.PureComponent),v=m))||v)||v);t.default=E}}]);