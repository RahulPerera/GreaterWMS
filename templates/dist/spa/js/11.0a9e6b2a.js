(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"7c2e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{directives:[{name:"show",rawName:"v-show",value:!e.fab,expression:"!fab"}],staticClass:"flex flex-center"},[a("div",{staticStyle:{"margin-top":"-7%"}},[a("div",{staticStyle:{color:"#4C5875","text-align":"center"},attrs:{className:"q-mb-xl"}},[a("div",{staticStyle:{"font-weight":"bold","font-size":"50px","letter-spacing":"10px"}},[e._v("WELCOME")]),a("div",{staticStyle:{"font-size":"18px","letter-spacing":"2px"}},[e._v("\n        GreaterWMS\n        "),e.isEnglish?a("span",[e._v(" ")]):e._e(),e._v("\n        "+e._s(e.$t("index.index_title"))+"\n      ")])]),a("div",{staticClass:"flex flex-center"},[a("lottie-web-cimo",{ref:"lottie_web",staticStyle:{width:"60%","max-width":"80%"}})],1)]),a("div",{staticStyle:{position:"absolute",right:"2%",bottom:"8%","font-family":"SourceHanSansCN","font-size":"16px",color:"#4C5875"}},[e._v("——\n       Easy Come   Easy Go    ——\n  ")])])},i=[],s=a("3c55"),o=a("a0ba"),l=a("0967"),c=a("18d6"),r={name:"PageIndexMobile",components:{LottieWebCimo:s["a"]},data(){return{isEnglish:!1,cleardata:[],height:"",width:"100%"}},methods:{},beforeCreate:function(){l["b"].is.cordova&&navigator.splashscreen.show()},computed:{fab:{get(){return this.$store.state.fabchange.fab}}},created:function(){c["a"].set("menulink",""),"en-us"===this.$q.localStorage.getItem("lang")?this.isEnglish=!0:this.isEnglish=!1},beforeMount:function(){l["b"].is.cordova&&window.setTimeout((function(){navigator.splashscreen.hide()}),-1e3)},mounted:function(){var e=this,t=o["a"].getInstance().get().test;t.toArray().then((a=>{a.length>0?(e.cleardata=[],t.each((t=>{e.cleardata.push(t.id)})),t.bulkDelete(this.cleardata),e.cleardata=[]):t.add({id:1,test:"next"})}))}},d=r,h=a("42e1"),f=a("9989"),u=a("eebe"),g=a.n(u),p=Object(h["a"])(d,n,i,!1,null,null,null);t["default"]=p.exports;g()(p,"components",{QPage:f["a"]})}}]);