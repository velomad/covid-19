(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{114:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(86),a(87),a(10)),o=a(6),l=a(161),m=a(171),d=a(172),u=a(162),p=a(160),f=a(170),h=a(176),b=a(174),g=a(69),E=a.n(g),v=a(51),y=a.n(v),x=a(70),N=a.n(x),j=a(155),C=a(47),O=a.n(C),S=a(64),T=a(65),D=a(27),w=a(28),F=a(31),k=a(30),M=(a(89),a(90),a(158)),W=(a(91),a(159)),A=a(15),z=a.n(A),I=function(e){Object(F.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={dynamicClassname:"extraCls",sliderLog:"",clearhandleautoslide:"",StateWiseData:[],StateTotalCases:[]},n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.fetchStatesDetails()}},{key:"fetchStatesDetails",value:function(){var e=this;fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(t){e.setState({StateWiseData:Object(T.a)({},t)});var a=[{state:"",Districts:{}}],n=0,r=0,s=0,i=0,c=0,o=0,l=0,m=0,d=0,u=0,p=0,f=0,h=0,b=0,g=0,E=0,v=0,y=0,x=0,N=0,j=0,C=0,O=0,S=0,D=0,w=0,F=0,k=0,M=0,W=0,A=0,z=0,I=0;for(var R in t)a.push({state:R,Districts:t[R].districtData});for(var B=1;B<a.length;B++)for(var _ in a[B].Districts)a[B].state==a[B].state&&("Kerala"==a[B].state?n+=a[B].Districts[_].confirmed:"Delhi"==a[B].state?r+=a[B].Districts[_].confirmed:"Telangana"==a[B].state?s+=a[B].Districts[_].confirmed:"Rajasthan"==a[B].state?i+=a[B].Districts[_].confirmed:"Haryana"==a[B].state?c+=a[B].Districts[_].confirmed:"Uttar Pradesh"==a[B].state?o+=a[B].Districts[_].confirmed:"Ladakh"==a[B].state?l+=a[B].Districts[_].confirmed:"Tamil Nadu"==a[B].state?m+=a[B].Districts[_].confirmed:"Jammu and Kashmir"==a[B].state?d+=a[B].Districts[_].confirmed:"Karnataka"==a[B].state?u+=a[B].Districts[_].confirmed:"Maharashtra"==a[B].state?p+=a[B].Districts[_].confirmed:"Punjab"==a[B].state?f+=a[B].Districts[_].confirmed:"Andhra Pradesh"==a[B].state?h+=a[B].Districts[_].confirmed:"Uttarakhand"==a[B].state?b+=a[B].Districts[_].confirmed:"Odisha"==a[B].state?g+=a[B].Districts[_].confirmed:"Puducherry"==a[B].state?E+=a[B].Districts[_].confirmed:"West Bengal"==a[B].state?v+=a[B].Districts[_].confirmed:"Chandigarh"==a[B].state?y+=a[B].Districts[_].confirmed:"Gujarat"==a[B].state?x+=a[B].Districts[_].confirmed:"Himachal Pradesh"==a[B].state?N+=a[B].Districts[_].confirmed:"Madhya Pradesh"==a[B].state?j+=a[B].Districts[_].confirmed:"Bihar"==a[B].state?C+=a[B].Districts[_].confirmed:"Manipur"==a[B].state?O+=a[B].Districts[_].confirmed:"Mizoram"==a[B].state?S+=a[B].Districts[_].confirmed:"Goa"==a[B].state?D+=a[B].Districts[_].confirmed:"Andaman and Nicobar Islands"==a[B].state?w+=a[B].Districts[_].confirmed:"Jharkhand"==a[B].state?F+=a[B].Districts[_].confirmed:"Assam"==a[B].state?k+=a[B].Districts[_].confirmed:"Arunachal Pradesh"==a[B].state?M+=a[B].Districts[_].confirmed:"Dadra and Nagar Haveli"==a[B].state?W+=a[B].Districts[_].confirmed:"Tripura"==a[B].state?A+=a[B].Districts[_].confirmed:"Nagaland"==a[B].state?z+=a[B].Districts[_].confirmed:"Meghalaya"==a[B].state&&(I+=a[B].Districts[_].confirmed));var L=[{state:"Kerala",totalcases:n},{state:"Delhi",totalcases:r},{state:"Telangana",totalcases:s},{state:"Rajasthan",totalcases:i},{state:"Haryana",totalcases:c},{state:"UttarPradesh",totalcases:o},{state:"Ladakh",totalcases:l},{state:"TamilNadu",totalcases:m},{state:"JammuandKashmir",totalcases:d},{state:"Karnataka",totalcases:u},{state:"Maharashtra",totalcases:p},{state:"Punjab",totalcases:f},{state:"AndhraPradesh",totalcases:h},{state:"Uttarakhand",totalcases:b},{state:"Odisha",totalcases:g},{state:"Puducherry",totalcases:E},{state:"WestBengal",totalcases:v},{state:"Chandigarh",totalcases:y},{state:"Gujarat",totalcases:x},{state:"HimachalPradesh",totalcases:N},{state:"MadhyaPradesh",totalcases:j},{state:"Bihar",totalcases:C},{state:"Manipur",totalcases:O},{state:"Mizoram",totalcases:S},{state:"Goa",totalcases:D},{state:"AndamanandNicobarIslands",totalcases:w},{state:"Jharkhand",totalcases:F},{state:"Assam",totalcases:k},{state:"ArunachalPradesh",totalcases:M},{state:"DadraandNagarHaveli",totalcases:W},{state:"Tripura",totalcases:A},{state:"Nagaland",totalcases:z},{state:"Meghalaya",totalcases:I}],P=[{state:"",total:0}];e.setState({StateTotalCases:L}),e.state.StateTotalCases.map((function(e){e.totalcases>1e3&&P.push({state:e.state,total:e.totalcases})}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(j.a,{item:!0,md:11},r.a.createElement(M.a,{variant:"outlined"},r.a.createElement(W.a,null,r.a.createElement(j.a,{container:!0,spacing:2},this.state.StateTotalCases.map((function(e,t){return r.a.createElement(j.a,{item:!0,xs:4,md:2,key:t},r.a.createElement(M.a,{variant:"outlined"},r.a.createElement(W.a,{className:e.totalcases>1e3?"highCases":e.totalcases<100?"safeZone":"avrageCases"},r.a.createElement("div",null,r.a.createElement(p.a,{className:"stateCards"},e.state)),r.a.createElement("div",null,r.a.createElement(p.a,{className:"statetotal"},r.a.createElement(z.a,{end:e.totalcases,duration:3.75,separator:","}))))))}))))))))}}]),a}(n.Component),R=Object(l.a)((function(e){var t,a,n,r;return{root:{flexGrow:1},confirm:{color:"rgba(255,7,58,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},confirmChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(255,7,58,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},confirmChild2:(t={color:"#ff073a",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(t,"fontWeight","900"),Object(o.a)(t,"textTransform","uppercase"),t),active:Object(o.a)({color:"rgba(0,123,255,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},e.breakpoints.up("xs"),{marginLeft:"20px"}),activeChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"#ffffff",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},activeChild2:(a={color:"#007bff",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(a,"fontWeight","900"),Object(o.a)(a,"textTransform","uppercase"),a),recovered:{color:"rgba(40,167,69,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},recoveredChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(40,167,69,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},recoveredChild2:(n={color:"#28a745",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(n,"fontWeight","900"),Object(o.a)(n,"textTransform","uppercase"),n),deceased:{color:"rgba(108,117,125,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},deceasedChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(108,117,125,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},deceasedChild2:(r={color:"#6c757d",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(r,"fontWeight","900"),Object(o.a)(r,"textTransform","uppercase"),r),FirstGridRow:{marginTop:"40px !important"},SecondGridRow:{marginTop:"40px !important"},ThirdGridRow:{marginTop:"70px !important"},FourthGridRow:Object(o.a)({marginTop:"0px"},e.breakpoints.up("xs"),{marginTop:"10px"}),statewisedata:Object(o.a)({marginRight:"40px",textAlign:"center",fontFamily:"archia !important",fontWeight:"900",fontSize:"24px !important",textTransform:"uppercase",color:"#343a40"},e.breakpoints.up("xs"),{marginTop:"20px"}),statechild:{color:"rgba(108,117,125,.6)",fontSize:"12px !important",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",marginLeft:"37px"},statechild2:Object(o.a)({color:"#4c75f2",fontSize:"12px",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",marginLeft:"37px"},e.breakpoints.up("xs"),{marginLeft:"0px",fontSize:"10px"}),covidsymbol:{fontSize:"10px"},highsysmbol:{padding:"0px 6px 0px 6px",background:"#FF9999",marginRight:"6px"},avgsysmbol:{padding:"0px 6px 0px 6px",background:"#FCC88C",marginRight:"6px"},lowsysmbol:{padding:"0px 6px 0px 6px",background:"#B1DC88",marginRight:"6px"},stateTotal:{color:"#46A4D1"}}})),B=function(){var e=R(),t=Object(n.useState)(0),a=Object(c.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(0),l=Object(c.a)(o,2),m=l[0],d=l[1],u=Object(n.useState)(0),f=Object(c.a)(u,2),h=f[0],b=f[1],g=Object(n.useState)(0),E=Object(c.a)(g,2),v=E[0],y=E[1],x=Object(n.useState)(0),N=Object(c.a)(x,2),C=N[0],O=N[1];return Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){i(e.statewise[0]),d(parseInt(e.statewise[0].confirmed)),b(parseInt(e.statewise[0].active)),y(parseInt(e.statewise[0].recovered)),O(parseInt(e.statewise[0].deaths))}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,justify:"space-evenly",alignItems:"center",className:e.FirstGridRow},r.a.createElement(j.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",className:e.confirm,gutterBottom:!0},"Confirmed"),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.confirmChild1,gutterBottom:!0},"[+"+s.deltaconfirmed+"]")),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.confirmChild2,gutterBottom:!0},r.a.createElement(z.a,{end:m,duration:3.75,separator:","})))),r.a.createElement(j.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",className:e.active,gutterBottom:!0},"Active"),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.activeChild1,gutterBottom:!0},"0")),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.activeChild2,gutterBottom:!0},r.a.createElement(z.a,{end:h,duration:3.75,separator:","}))))),r.a.createElement(j.a,{container:!0,justify:"space-evenly",alignItems:"center",className:e.SecondGridRow},r.a.createElement(j.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",className:e.recovered,gutterBottom:!0},"Recovered"),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.recoveredChild1,gutterBottom:!0},"[+"+s.deltarecovered+"]")),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.recoveredChild2,gutterBottom:!0},r.a.createElement(z.a,{end:v,duration:3.75,separator:","})))),r.a.createElement(j.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle1",className:e.deceased,gutterBottom:!0},"Deceased"),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.deceasedChild1,gutterBottom:!0},"[+"+s.deltadeaths+"]")),r.a.createElement("div",null,r.a.createElement(p.a,{variant:"subtitle1",className:e.deceasedChild2,gutterBottom:!0},r.a.createElement(z.a,{end:C,duration:3.75,separator:","}))))),r.a.createElement(j.a,{container:!0,className:e.FourthGridRow},r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:8,lg:12,xl:12},r.a.createElement(p.a,{variant:"subtitle1",className:e.statewisedata,gutterBottom:!0},r.a.createElement("div",null,"State Wise Data"),r.a.createElement("div",{className:e.statechild},"COMPILED FROM STATE GOVT. NUMBERS",r.a.createElement("div",{className:e.statechild2},"CLICK ON ANY BELOW STATE TO KNOW MORE."),r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("span",{style:{width:"101%"},className:e.covidsymbol},r.a.createElement("span",{className:e.highsysmbol}),"States above ",r.a.createElement("big",{className:e.stateTotal},"1000")," covid cases.")),r.a.createElement("div",null,r.a.createElement("span",{className:e.covidsymbol},r.a.createElement("span",{className:e.avgsysmbol}),"States above ",r.a.createElement("big",{className:e.stateTotal},"500")," covid cases.")),r.a.createElement("div",null,r.a.createElement("span",{className:e.covidsymbol},r.a.createElement("span",{className:e.lowsysmbol}),"States below ",r.a.createElement("big",{className:e.stateTotal},"100")," covid cases.")))))),r.a.createElement(j.a,{container:!0,className:e.ThirdGridRow},r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(I,null))))},_=a(66),L=a.n(_),P=a(173),U=(a(48),{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"}),H=function(e){var t=e.slice(0,2),a=e.slice(3,5),n=e.slice(6,10),r=e.slice(11);return"".concat(n,"-").concat(a,"-").concat(t,"T").concat(r,"+05:30")};var G=Object(l.a)((function(e){var t,a,n;return{appUpdateDiv:{alignItems:"center",justifyContent:"center"},appUpdateFont1:Object(o.a)({fontFamily:"archia !important",fontWeight:"900",textTransform:"uppercase",color:"#343a40"},e.breakpoints.up("xs"),{marginTop:"20px"}),appUpdateFont2:{fontFamily:"archia !important",fontWeight:"600",fontSize:"11px!important",textTransform:"uppercase",color:"#6c757d"},appUpdateFont3:(t={fontFamily:"archia !important",color:"rgba(40,167,69,.6) !important",fontWeight:"900",fontSize:"12px !important",textTransform:"uppercase"},Object(o.a)(t,e.breakpoints.up("md"),{marginLeft:"81px !important",marginTop:"40px !important"}),Object(o.a)(t,e.breakpoints.up("xs"),{marginTop:"5px",marginLeft:"25px"}),t),appUpdateFont4:(a={fontFamily:"archia !important",color:"rgb(40, 167, 69)",fontWeight:"900",fontSize:"14px !important",textTransform:"uppercase"},Object(o.a)(a,"fontSize","11px !important"),Object(o.a)(a,e.breakpoints.up("md"),{marginLeft:"74px !important"}),Object(o.a)(a,e.breakpoints.up("xs"),{marginLeft:"-4px",fontSize:"10px"}),a),appUpdateFont5:(n={fontFamily:"archia !important",color:"rgb(40, 167, 69)",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},Object(o.a)(n,e.breakpoints.up("md"),{marginLeft:"68px !important"}),Object(o.a)(n,e.breakpoints.up("xs"),{marginLeft:"10px",fontSize:"10px"}),n)}})),V=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)(!1),i=Object(c.a)(s,2),o=i[0],l=i[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),u=d[0],f=d[1];Object(n.useEffect)((function(){!1===o&&h()}),[o]);var h=function(){var e=Object(S.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([L.a.get("https://api.covid19india.org/data.json")]);case 3:t=e.sent,n=Object(c.a)(t,1),r=n[0],a(r.data.statewise),f(r.data.statewise[0].lastupdatedtime),l(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),b=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,className:b.appUpdateDiv},r.a.createElement(j.a,{item:!0,xs:7,sm:6,md:4,lg:6,xl:6},r.a.createElement(p.a,{variant:"h5",className:b.appUpdateFont1},"India COVID-19 Tracker"),r.a.createElement(p.a,{variant:"h6",className:b.appUpdateFont2},"A Crowdsourced Initiative")),r.a.createElement(j.a,{item:!0,xs:4,sm:6,md:3,lg:6,xl:6},r.a.createElement(p.a,{variant:"h5",className:b.appUpdateFont3},"Last Updated"),r.a.createElement(p.a,{variant:"h6",className:b.appUpdateFont4},isNaN(Date.parse(H(u)))?"":Object(P.a)(new Date(H(u)),new Date)+" Ago"),r.a.createElement(p.a,{variant:"h6",className:b.appUpdateFont5},isNaN(Date.parse(H(u)))?"":function(e){var t=e.slice(0,2),a=e.slice(3,5),n=e.slice(11);return"".concat(t," ").concat(U[a],", ").concat(n.slice(0,5)," IST")}(u)))),r.a.createElement(B,null))},J=Object(l.a)((function(e){return{banner_parent:{background:"rgba(32,26,162,.12549)",height:"auto !important",marginTop:e.spacing(3)},banner:{textAlign:"center",margin:e.spacing(3)},banner_text:{fontFamily:"archia !important",fontSize:".8rem !important",fontWeight:"600",color:"rgba(32,26,162,.866667)"}}})),K=function(e){var t=J(),a=Object(n.useState)("Stay Home, Stay Safe."),s=Object(c.a)(a,2),i=s[0],o=s[1];Object(n.useEffect)((function(){setInterval((function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){var t=Math.abs(Math.floor(Math.random()*(1-e.factoids.length)+1));o(e.factoids[t].banner)}))}),4e3)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,className:t.banner_parent,onClick:function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){var t=Math.abs(Math.floor(Math.random()*(1-e.factoids.length)+1));o(e.factoids[t].banner)}))}},r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,className:t.banner},r.a.createElement(p.a,{className:t.banner_text},i))),r.a.createElement(V,null))},X=a(50),Y=a.n(X),Z=(a(114),a(67)),$=a(165),q=a(169),Q=a(168),ee=a(164),te=a(166),ae=a(167),ne=a(74),re=a(175),se=a(163),ie=a(68),ce=a.n(ie),oe=function(e){Object(F.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={isModelVisible:!1,WorldCountries:[],WorldCountriesCopy:[]},n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.getWorldCountryCases(),this.getCovidNews()}},{key:"componentWillReceiveProps",value:function(e){e.isCountryModalVisible,this.setState({isModelVisible:e.isCountryModalVisible})}},{key:"getWorldCountryCases",value:function(){var e=this;fetch("https://corona.lmao.ninja/v2/countries?sort=country").then((function(e){return e.json()})).then((function(t){e.setState({WorldCountries:t}),e.setState({WorldCountriesCopy:t})})).catch((function(e){console.error("Global Countries Records",e)}))}},{key:"getCovidNews",value:function(){var e=new Headers;e.append("Subscription-Key","3009d4ccc29e4808af1ccc25c69b4d5d"),fetch("https://api.smartable.ai/coronavirus/news/IN",{method:"GET",headers:e,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return console.log("News",e)})).catch((function(e){return console.log("error",e)}))}},{key:"handleCountrySearch",value:function(e){if(""!==e.target.value){var t=this.state.WorldCountries.filter((function(t){return t.country.toLowerCase().includes(e.target.value.toLowerCase())}));this.setState({WorldCountries:t})}else this.setState({WorldCountries:this.state.WorldCountriesCopy})}},{key:"render",value:function(){var e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.isModelVisible?"CountriesModal ShowModal":"CountriesModal HideModal"},r.a.createElement(j.a,{container:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(ne.a,{component:"form",className:"root"},r.a.createElement(re.a,{onChange:this.handleCountrySearch.bind(this),className:"input",placeholder:"Search Countries...",inputProps:{"aria-label":"Search Countries..."}}),r.a.createElement(u.a,{className:"iconButton","aria-label":"search"},r.a.createElement(ce.a,null)),r.a.createElement(se.a,{className:"divider",orientation:"vertical"})),r.a.createElement(j.a,{item:!0,xs:10,md:12},r.a.createElement(ee.a,{component:ne.a},r.a.createElement($.a,{className:"table","aria-label":"simple table"},r.a.createElement(te.a,null,r.a.createElement(ae.a,{xs:12},r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead"},"Sr.No"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead"},"Countries"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead"},"Name"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead countryTodaycases"},"TodayCases"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead countryTodaydeathth"},"TodayDeaths"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead countryConfirmed"},"Confirmed"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead countryActive"},"Active"),r.a.createElement(Q.a,(e={style:{fontFamily:"archia"}},Object(o.a)(e,"style",{fontFamily:"archia"}),Object(o.a)(e,"className","TableHead countryRecovered"),e),"Recovered"),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"TableHead"},"Dead"))),r.a.createElement(q.a,null,this.state.WorldCountries.map((function(e,t){return r.a.createElement(ae.a,{key:t},r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"countryNames"},t+1),r.a.createElement(Q.a,{component:"th",scope:"row"},e.countryInfo.iso2?r.a.createElement(Z.a,{countryCode:e.countryInfo.iso2||"",svg:!0,style:{width:"6em",height:"1.8em"}}):r.a.createElement("span",{className:"Notavailable"},"Not Available")),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"countryNames"},e.country),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"countryTodaycase        textCenter"},e.todayCases),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"countryTodaydeath textCenter"},e.todayDeaths),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"confirmed textCenter"},r.a.createElement(z.a,{end:e.cases,duration:3.75,separator:","})),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"active textCenter"},r.a.createElement(z.a,{end:e.active,duration:3.75,separator:","})),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"recovered textCenter"},r.a.createElement(z.a,{end:e.recovered,duration:3.75,separator:","})),r.a.createElement(Q.a,{style:{fontFamily:"archia"},className:"dead textCenter"},r.a.createElement(z.a,{end:e.deaths,duration:3.75,separator:","})))})))))))))}}]),a}(n.Component),le=a(49),me=a.n(le),de=function(e){Object(F.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).state={isModelVisible:!1},n}return Object(w.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.isMapModalVisible,this.setState({isModelVisible:e.isMapModalVisible})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.isModelVisible?"CountriesModal ShowModal":"CountriesModal HideModal"},r.a.createElement(j.a,{container:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(j.a,{item:!0,xs:12,sm:12,md:11,lg:11,xl:11},r.a.createElement(M.a,{variant:"outlined"},r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(p.a,null,"World Map"))))))))}}]),a}(n.Component),ue=Object(l.a)((function(e){var t;return{navbar:{boxShadow:"1px 0px 1px black !important"},globalstat:{marginTop:"12px",cursor:"pointer"},globalmap:{marginTop:"12px",cursor:"pointer",marginRight:"14px"},grow:{flexGrow:1},title:(t={fontFamily:"archia !important",display:"block"},Object(o.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(o.a)(t,"color",e.palette.text.inherit),t),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),pe=function(){var e=ue(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),s=a[0],i=a[1],o=Object(n.useState)(!1),l=Object(c.a)(o,2),g=l[0],v=l[1],x=r.a.useState(null),j=Object(c.a)(x,2),C=j[0],O=j[1],S=Boolean(C),T=function(){console.log("Mapping..."),v(!g)},D=function(){i(!s)},w=r.a.createElement(b.a,{anchorEl:C,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:function(){O(null)}},r.a.createElement(h.a,null,r.a.createElement(u.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(f.a,{badgeContent:4,color:"secondary"},r.a.createElement(E.a,null))),r.a.createElement("p",null,"Messages")));return r.a.createElement("div",{className:e.grow},r.a.createElement(m.a,{position:"static",color:"inherit",className:e.navbar},r.a.createElement(d.a,null,r.a.createElement(p.a,{className:e.title,variant:"h6",noWrap:!0},"Covid-19"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement("div",{onClick:function(){return T()},className:e.globalmap},r.a.createElement(me.a,null)),r.a.createElement("div",{onClick:function(){return D()},className:e.globalstat},r.a.createElement(Y.a,null)),r.a.createElement(u.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(f.a,{badgeContent:17,color:"secondary"},r.a.createElement(y.a,null)))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement("div",{onClick:function(){return T()},className:e.globalmap},r.a.createElement(me.a,null)),r.a.createElement("div",{onClick:function(){return D()},className:e.globalstat},r.a.createElement(Y.a,null)),r.a.createElement(u.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(f.a,{badgeContent:11,color:"secondary"},r.a.createElement(y.a,null))),r.a.createElement(u.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},color:"inherit"},r.a.createElement(N.a,null))))),r.a.createElement(de,{isMapModalVisible:g}),r.a.createElement(oe,{isCountryModalVisible:s}),r.a.createElement(K,null),w)};var fe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(73),be=a(18),ge=a(72),Ee=Object(be.c)({}),ve=[ge.a],ye=Object(be.e)(Ee,{},Object(be.d)(be.a.apply(void 0,ve),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||be.d));i.a.render(r.a.createElement(he.a,{store:ye},r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(117)},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.be4def0c.chunk.js.map