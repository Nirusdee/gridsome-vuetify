(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2p6p":function(t,a,e){"use strict";var s={props:{timeline:Array}},n=e("KHd+"),i=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.timeline,(function(a){return e("v-timeline-item",{key:a.event,attrs:{icon:"fa-star"}},[e("span",[t._v(t._s(a.event))]),e("v-card",{staticClass:"elevation-2"},[e("v-card-title",{staticClass:"headline primary white--text"},[t._v(t._s(a.caption))]),e("v-card-text",{staticClass:"p-4 m-4"},[t._v("\n          "+t._s(a.desc)+"\n        ")])],1)],1)})),1)}),[],!1,null,null,null);a.a=i.exports},"7OWm":function(t,a){t.exports={aboutMe:{name:"Nirusdee Nikaji",long_summary_title:"ประวัติส่วนตัว",long_summary:"ชื่อ นายนิรุศดี นิกะจิ  ชื่อเล่น ดี  อายุ 22 ปี  ที่อยู่ 51/1 ม.2 ต.เกาะจัน อ.มายอ จ.ปัตตานี 94140  เบอร์โทร 0980137043 ปัจจุบันเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์",timeline:[{event:"2549-2555",caption:"ประถมศึกษา",desc:"โรงเรียนมายอ (สถิตย์ภูพา)"},{event:"2555-2561",caption:"มัธยมศึกษา",desc:"โรงเรียนดรุณศาสน์วิทยา"},{event:"2561-ปัจจุบัน",caption:"อุดมศึกษา",desc:"คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์"}]}}},odGf:function(t,a,e){"use strict";e.r(a);var s=e("2p6p"),n=e("7OWm"),i=e.n(n),c={components:{Timeline:s.a},data:function(){return{aboutData:i.a}}},l=e("KHd+"),r=Object(l.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("v-container",[e("v-row",{attrs:{align:"stretch","align-content":"stretch"}},[e("v-col",{attrs:{md:"4",cols:"12"}},[e("v-card",{staticClass:"pa-5"},[e("div",{staticClass:"text-center"},[e("v-avatar",{attrs:{size:"256",color:"primary"}},[e("img",{attrs:{src:"https://scontent.fhdy1-1.fna.fbcdn.net/v/t1.6435-9/68810737_1803862106425803_2354814393826410496_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHgn4h01z1zFdrDIE0dqOAVwMOtZMGM1jjAw61kwYzWOJW1AuzULXFLS8jGtVGlVtXBQ78UafRy4N10PmB_2NJt&_nc_ohc=ttOsKPqwWMEAX_lZ-lW&tn=JR4Rf6kTr4yNQxYu&_nc_ht=scontent.fhdy1-1.fna&oh=5c7b564956691b44b901027d4256b33c&oe=60FECF55"}})])],1),e("v-card-title",{staticClass:"align-end fill-height"},[t._v(t._s(t.aboutData.aboutMe.name))]),e("v-card-text",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.aboutData.aboutMe.title))]),e("br"),t._v("\n            "+t._s(t.aboutData.aboutMe.bio)+"\n          ")]),e("div",{staticClass:"text-center"},t._l(t.aboutData.aboutMe.hashtags,(function(a,s){return e("v-chip",{key:s,staticClass:"ma-1",attrs:{color:"primary"}},[t._v(t._s(a))])})),1)],1)],1),e("v-col",{attrs:{md:"8",cols:"12"}},[e("v-card",{attrs:{color:"accent lighten-2"}},[e("v-card-title",{staticClass:"display-2 align-end fill-height"},[t._v(t._s(t.aboutData.aboutMe.long_summary_title))]),e("v-card-text",{staticClass:"headline"},[t._v(t._s(t.aboutData.aboutMe.long_summary))])],1)],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("Chart",{attrs:{skillsData:t.aboutData.aboutMe.skills}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"display-2 text-center my-5"},[t._v("ประวัติการศึกษา")]),e("Timeline",{attrs:{timeline:t.aboutData.aboutMe.timeline}})],1)],1)],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);