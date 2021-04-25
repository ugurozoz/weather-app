(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{30:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"fetchWeatherStart",(function(){return W})),n.d(c,"fetchWeatherFail",(function(){return H})),n.d(c,"fetchWeatherComplete",(function(){return L})),n.d(c,"fetchWeather",(function(){return G})),n.d(c,"setCity",(function(){return U})),n.d(c,"getCityWoeidStart",(function(){return Y})),n.d(c,"getCityWoeidFail",(function(){return k})),n.d(c,"getCityWoeidComplete",(function(){return B})),n.d(c,"getCityWoeid",(function(){return J})),n.d(c,"toggleTemperatureUnit",(function(){return V}));var a,r=n(1),i=n.n(r),s=n(9),o=n.n(s),l=(n(30),n(7)),u=n(4),d=n(24),j=n(2);!function(e){e.DUMMY_ACTION_0="DUMMY_ACTION_0",e.DUMMY_ACTION_1="DUMMY_ACTION_1",e.FETCH_WEATHER_START="FETCH_WEATHER_START",e.FETCH_WEATHER_COMPLETE="FETCH_WEATHER_COMPLETE",e.FETCH_WEATHER_FAIL="FETCH_WEATHER_FAIL",e.CHANGE_SETTINGS_START="CHANGE_SETTINGS_START",e.CHANGE_SETTINGS_COMPLETE="CHANGE_SETTINGS_COMPLETE",e.CHANGE_SETTINGS_FAIL="CHANGE_SETTINGS_FAIL",e.GET_CITY_WOEID_START="GET_CITY_WOEID_START",e.GET_CITY_WOEID_COMPLETE="GET_CITY_WOEID_COMPLETE",e.GET_CITY_WOEID_FAIL="GET_CITY_WOEID_FAIL",e.SET_CITY="SET_CITY",e.TOGGLE_TEMPERATURE_UNIT="TOGGLE_TEMPERATURE_UNIT"}(a||(a={}));var h={temperature:0,situation:"",nextFiveDays:[],windSpeed:0,windDirection:0,windDirectionCompass:"",humidity:0,visibility:0,airPressure:0,loading:!0,weatherDate:"",abbr:""},m=function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})},b=function(e,t){return Object(j.a)(Object(j.a)({},t),{},{loading:!1})},O=function(e,t){var n=Object(j.a)({},t),c=e.payload[0];return n.temperature=c.the_temp,n.situation=c.weather_state_name,n.nextFiveDays=e.payload.slice(1),n.windSpeed=c.wind_speed,n.windDirection=c.wind_direction,n.windDirectionCompass=c.wind_direction_compass,n.humidity=c.humidity,n.visibility=c.visibility,n.airPressure=c.air_pressure,n.abbr=c.weather_state_abbr,n.loading=!1,Object(j.a)({},n)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.FETCH_WEATHER_START:return m(e);case a.FETCH_WEATHER_COMPLETE:return O(t,e);case a.FETCH_WEATHER_FAIL:return b(0,e);default:return e}},f={weatherUnit:"C",distanceUnit:"miles",speedUnit:"mph"},T=function(e){var t=Object(j.a)({},e);return t.weatherUnit="C"===t.weatherUnit?"F":"C",t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.TOGGLE_TEMPERATURE_UNIT:return T(e);default:return e}},_={latt_long:"",location_type:"",title:"",woeid:0,loading:!1},v=function(e){return Object(j.a)(Object(j.a)({},e),{},{loading:!0})},x=function(e,t){return Object(j.a)(Object(j.a)({},t),{},{loading:!1})},g=function(e,t){var n=Object(j.a)({},t),c=e.payload;return n.latt_long=c.latt_long,n.loading=!1,n.location_type=c.location_type,n.title=c.title,n.woeid=c.woeid,Object(j.a)({},n)},N=function(e,t){var n=Object(j.a)({},t),c=e.payload;return n.latt_long=c.latt_long,n.loading=!1,n.location_type=c.location_type,n.title=c.title,n.woeid=c.woeid,Object(j.a)({},n)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_CITY_WOEID_START:return v(e);case a.GET_CITY_WOEID_COMPLETE:return g(t,e);case a.GET_CITY_WOEID_FAIL:return x(0,e);case a.SET_CITY:return N(t,e);default:return e}},w=Object(u.c)({weather:p,settings:E,location:y}),C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,I=Object(u.e)(w,{},C(Object(u.a)(d.a))),S=n(6),A=n.n(S),D=n(8),F=n(25),M=n.n(F),P=function(){var e=Object(D.a)(A.a.mark((function e(t,n,c){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M.a.get("".concat(n).concat(t).concat(c)).then((function(e){return e.data})).catch((function(e){return console.log("AXIOS ERROR",e),e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),R="https://www.metaweather.com/api/location/",W=function(){return{type:a.FETCH_WEATHER_START}},H=function(e){return{type:a.FETCH_WEATHER_FAIL,payload:e}},L=function(e){return{type:a.FETCH_WEATHER_COMPLETE,payload:e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:44418;return function(){var t=Object(D.a)(A.a.mark((function t(n){var c,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:a.FETCH_WEATHER_START}),c="".concat(R).concat(e,"/"),t.prev=2,t.next=5,P(c,"https://weather-cors.trmov.com/","");case 5:r=t.sent,n({type:a.FETCH_WEATHER_COMPLETE,payload:r.consolidated_weather}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:a.FETCH_WEATHER_FAIL,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:a.SET_CITY,payload:e}},Y=function(){return{type:a.GET_CITY_WOEID_START}},k=function(e){return{type:a.GET_CITY_WOEID_FAIL,payload:e}},B=function(e){return{type:a.GET_CITY_WOEID_COMPLETE,payload:e}},J=function(e){return function(){var t=Object(D.a)(A.a.mark((function t(n){var c,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:a.GET_CITY_WOEID_START}),c="".concat(R,"search/?query=").concat(e),t.prev=2,t.next=5,P(c,"https://weather-cors.trmov.com/","");case 5:r=t.sent,n({type:a.GET_CITY_WOEID_COMPLETE,payload:r[0]}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:a.GET_CITY_WOEID_FAIL,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},V=function(){return{type:a.TOGGLE_TEMPERATURE_UNIT}},X=n(5),q=(n(58),n(0)),z=function(e){var t=e.onClickHandler;return Object(q.jsx)("button",{className:"searchPlacesButton",onClick:function(){return t()},children:Object(q.jsx)("span",{children:"Seach for places"})})},K=(n(60),function(){var e=Object(l.b)();return Object(r.useMemo)((function(){return Object(u.b)(c,e)}),[e])}),Q=function(e){return new Promise((function(t,n){return navigator.geolocation.getCurrentPosition(t,n,e)}))},Z=function(){var e=K().getCityWoeid;return Object(q.jsx)("button",{className:"currentLocationButton",onClick:function(){Q().then((function(t){console.log("POSITION DATA",t);var n="https://www.metaweather.com/api/location/search/?lattlong=".concat(t.coords.latitude,",").concat(t.coords.longitude);P(n,"https://weather-cors.trmov.com/","").then((function(t){console.log("DATA >>",t[0].title,t),t?"Frankfurt am Main"===t[0].title?(localStorage.setItem("location","Frankfurt"),e("Frankfurt")):(localStorage.setItem("location",t[0].title),e(t[0].title)):console.log("ERROR","Location could not be fetched")}))})).catch((function(e){console.error(e.message)}))},children:Object(q.jsx)("span",{})})},$=n(10),ee=function(e){var t=e.src,n=e.placeholderImg,c=Object($.a)(e,["src","placeholderImg"]),a=Object(r.useState)(n||t),i=Object(X.a)(a,2),s=i[0],o=i[1],l=Object(r.useCallback)((function(){o(t)}),[t]);return Object(r.useEffect)((function(){var e=new Image;return e.src=t,e.addEventListener("load",l),function(){e.removeEventListener("load",l)}}),[t,l]),Object(q.jsx)("img",Object(j.a)(Object(j.a)({},c),{},{alt:s,src:s}))},te=(n(61),function(e){var t=e.image,n=e.temperature,c=e.situationName,a="/assets/".concat(t);return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:"currentSitutation",children:[Object(q.jsx)("div",{className:"currentWeatherImage",children:Object(q.jsx)(ee,{src:a,height:"160"})}),Object(q.jsxs)("div",{className:"currentCondition",children:[Object(q.jsxs)("div",{className:"currentTemperature",children:[Object(q.jsx)("span",{className:"temperatureValue",children:n.val}),Object(q.jsx)("span",{className:"temperatureUnit",children:n.unit})]}),Object(q.jsx)("div",{className:"currentSituationName",children:Object(q.jsx)("span",{children:c})})]})]})})}),ne=(n(62),function(e){var t=e.weatherDay,n=e.weatherDate,c=e.location;return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)("div",{className:"DateAndLocation",children:[Object(q.jsxs)("div",{className:"dateContainer",children:[Object(q.jsx)("span",{className:"daySpan",children:t}),Object(q.jsx)("span",{className:"dotSpan",children:"\u2022"}),Object(q.jsx)("span",{className:"dateSpan",children:n})]}),Object(q.jsx)("div",{className:"locationContainer",children:Object(q.jsx)("span",{children:c})})]})})}),ce=(n(63),function(e){var t=e.formVisible,n=e.hideForm,c=Object(r.useState)([]),a=Object(X.a)(c,2),i=a[0],s=a[1],o=Object(r.useState)({searching:!1,found:null}),l=Object(X.a)(o,2),u=l[0],d=l[1],j=K().setCity,h=Object(r.useRef)(null),m=i.map((function(e,t){return Object(q.jsx)("button",{onClick:function(){return function(e){var t=i[e];j(t),n()}(t)},children:Object(q.jsx)("span",{children:e.title})},e.woeid)}));return t?Object(q.jsxs)("div",{className:"searchPlacesForm",children:[Object(q.jsxs)("div",{className:"search-location",children:[Object(q.jsx)("input",{ref:h,type:"text",className:"search-location-input",placeholder:"Search location"}),Object(q.jsx)("input",{type:"button",value:"Search",className:"search-location-bt",onClick:function(){var e;s([]),d({searching:!0,found:null});var t="query=".concat(null===(e=h.current)||void 0===e?void 0:e.value);P("https://www.metaweather.com/api/location/search/?","https://weather-cors.trmov.com/",t).then((function(e){e.length>0?(s(e),d({searching:!1,found:!0})):(s([]),d({searching:!1,found:!1}))}))}})]}),Object(q.jsx)("div",{className:"cities-near",children:u.searching?Object(q.jsx)("div",{className:"Search-in-progress",children:" Search in progress"}):!u.searching&&u.found?m:u.searching||!1!==u.found?void 0:Object(q.jsx)("div",{className:"not-found",children:"Not found"})}),Object(q.jsx)("button",{className:"close-form",onClick:n,children:Object(q.jsx)("span",{})})]}):Object(q.jsx)("div",{})}),ae=l.c,re=function(e){var t=new Date(e);return"".concat(["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][t.getDay()],", ").concat(t.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()])},ie=function(e,t){return{val:"C"===t?Math.floor(e):Math.floor(1.8*e+32),unit:"\xb0".concat(t)}},se=(n(64),function(e){var t=e.currentParams,n=ae((function(e){return e.location.title})),c=ae((function(e){return e.settings.weatherUnit}));console.log(c);var a=Object(r.useState)(!1),i=Object(X.a)(a,2),s=i[0],o=i[1];Object(r.useEffect)((function(){}),[s]);var l="".concat(t.abbr.toString(),".png"),u=new Date(Date.now()),d=re(u);return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:"current__top",children:[Object(q.jsx)(z,{onClickHandler:function(){o(!0)}}),Object(q.jsx)(Z,{})]}),Object(q.jsx)("div",{className:"current__mid",children:Object(q.jsx)(te,{image:l,situationName:t.situation,temperature:ie(t.temperature,c)})}),Object(q.jsx)("div",{className:"current__bottom",children:Object(q.jsx)(ne,{weatherDay:"Today",weatherDate:d,location:n})}),s&&Object(q.jsx)(ce,{formVisible:s,hideForm:function(){o(!1)}})]})}),oe=(n(65),function(){var e=ae((function(e){return e.settings.weatherUnit})),t=K().toggleTemperatureUnit,n=["F","C"].map((function(n,c){return n===e?Object(q.jsxs)("button",{className:"active-unit",children:["\xb0",n]},"unitButton".concat(c)):Object(q.jsxs)("button",{onClick:t,children:["\xb0",n]},"unitButton".concat(c))}));return Object(q.jsx)("div",{className:"unitSelect",children:n})}),le=(n(66),function(e){var t=e.day,n=e.image,c=e.temperatureMax,a=e.temperatureMin,r=ae((function(e){return e.settings.weatherUnit})),i=ie(c,r),s=ie(a,r),o="/assets/".concat(n);return Object(q.jsxs)("div",{className:"dayCard",children:[Object(q.jsx)("div",{className:"dateText",children:Object(q.jsx)("span",{children:t})}),Object(q.jsx)(ee,{src:o,height:"62"}),Object(q.jsxs)("div",{className:"temperatureMinMax",children:[Object(q.jsxs)("span",{className:"temperatureMax",children:[i.val,i.unit]}),Object(q.jsxs)("span",{className:"temperatureMin",children:[s.val,s.unit]})]})]})}),ue=(n(67),function(e){var t=e.forecasts.map((function(e,t){return Object(q.jsx)(le,{day:e.day,image:e.image,temperatureMax:e.temperatureMax,temperatureMin:e.temperatureMin},"day".concat(t))}));return Object(q.jsx)("div",{className:"foreCasts",children:t})}),de=(n(68),n(69),function(e){var t=e.children,n=e.cardName,c=e.cardTitle,a="hightlight-item hightlight-".concat(n,"-item");return Object(q.jsxs)("div",{className:a,children:[Object(q.jsx)("div",{className:"hightlight-item-heading",children:c}),t]})}),je=(n(70),function(e){var t=e.angle;return Object(q.jsx)("span",{className:"wd-compass",children:Object(q.jsx)("em",{style:{transform:"rotate(".concat(t,"deg)")}})})}),he=(n(71),function(e){var t=e.windSpeed,n=e.windDirection,c=e.windDirectionCompass,a=e.speedUnit,r=t.toFixed(1);return Object(q.jsxs)(de,{cardTitle:"Wind status",cardName:"wind",children:[Object(q.jsxs)("div",{className:"windSpeed",children:[Object(q.jsx)("span",{className:"windSpeedNumber",children:r}),Object(q.jsx)("span",{className:"windSpeedUnit",children:a})]}),Object(q.jsxs)("div",{className:"windDirection",children:[Object(q.jsx)(je,{angle:n}),Object(q.jsx)("span",{className:"wd-text",children:c})]})]})}),me=(n(72),function(e){var t=e.value;e.colors;return Object(q.jsxs)("div",{className:"percentBar",children:[Object(q.jsxs)("div",{className:"barIndicators",children:[Object(q.jsx)("span",{children:"0"}),Object(q.jsx)("span",{children:"50"}),Object(q.jsx)("span",{children:"100"})]}),Object(q.jsx)("div",{className:"barItself",children:Object(q.jsx)("span",{className:"valueBar",style:{width:"calc( 100% * (".concat(t," / 100))")}})}),Object(q.jsx)("div",{className:"percent-symbol",children:"%"})]})}),be=(n(73),function(e){var t=e.humidityPercent;return Object(q.jsxs)(de,{cardTitle:"Humidity",cardName:"humidity",children:[Object(q.jsxs)("div",{className:"humidityPercent",children:[Object(q.jsx)("span",{className:"humidityPercentNumber",children:t}),Object(q.jsx)("span",{className:"humidityPercentSymbol",children:"%"})]}),Object(q.jsx)("div",{className:"humidityBar",children:Object(q.jsx)(me,{value:t,colors:["#E7E7EB","#FFEC65"]})})]})}),Oe=(n(74),function(e){var t=e.visibilityDistance,n=e.distanceUnit,c=t.toFixed(1);return Object(q.jsx)(de,{cardTitle:"Visibility",cardName:"visibility",children:Object(q.jsxs)("div",{className:"visibilityDistance",children:[Object(q.jsx)("span",{className:"visibilityDistanceNumber",children:c}),Object(q.jsx)("span",{className:"visibilityDistanceUnit",children:n})]})})}),pe=(n(75),function(e){var t=e.pressureAmountNumber,n=e.pressureUnit;return Object(q.jsx)(de,{cardTitle:"Air Pressure",cardName:"pressure",children:Object(q.jsxs)("div",{className:"pressureAmount",children:[Object(q.jsx)("span",{className:"pressureAmountNumber",children:t}),Object(q.jsx)("span",{className:"pressureUnit",children:n})]})})}),fe=function(e){return Object(q.jsxs)("div",{className:"highlights",children:[Object(q.jsx)("h1",{children:"Today\u2019s Hightlights "}),Object(q.jsxs)("div",{className:"highlights-items",children:[Object(q.jsx)(he,{windSpeed:e.windSpeed,windDirectionCompass:e.windDirectionCompass,windDirection:e.windDirection,speedUnit:"mph"}),Object(q.jsx)(be,{humidityPercent:e.humidity}),Object(q.jsx)(Oe,{visibilityDistance:e.visibility,distanceUnit:"miles"}),Object(q.jsx)(pe,{pressureAmountNumber:Math.floor(e.airPressure),pressureUnit:"mb"})]})]})},Te=function(e){var t=e.forecastsParams,n=t.nextFiveDays.map((function(e,t){return{day:0===t?"Tomorrow":re(new Date(e.applicable_date)),image:"".concat(e.weather_state_abbr,".png"),temperatureMax:e.max_temp,temperatureMin:e.min_temp}})),c=(t.nextFiveDays,Object($.a)(t,["nextFiveDays"]));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(oe,{}),Object(q.jsx)(ue,{forecasts:n}),Object(q.jsx)(fe,Object(j.a)({},c))]})};n(76);var Ee=function(){var e=Object(r.useState)(""),t=Object(X.a)(e,2),n=t[0],c=t[1],a=K(),i=a.fetchWeather,s=a.getCityWoeid,o=ae((function(e){return e.location.woeid})),l=ae((function(e){var t=e.weather,n=t.temperature,c=t.situation,a=t.nextFiveDays,r=t.windSpeed,i=t.windDirection,s=t.windDirectionCompass,o=t.humidity,l=t.visibility,u=t.airPressure;return{currentParams:{temperature:n,situation:c,abbr:t.abbr},forecastsParams:{nextFiveDays:a,windSpeed:r,windDirection:i,windDirectionCompass:s,humidity:o,visibility:l,airPressure:u},loadingParam:{loading:t.loading}}})),u=function(){var e=localStorage.getItem("location");null===e?Q().then((function(e){console.log("POSITION DATA",e);var t="https://www.metaweather.com/api/location/search/?lattlong=".concat(e.coords.latitude,",").concat(e.coords.longitude);P(t,"https://weather-cors.trmov.com/","").then((function(e){console.log("DATA >>",e[0].title,e),e?"Frankfurt am Main"===e[0].title?(localStorage.setItem("location","Frankfurt"),c("Frankfurt")):(localStorage.setItem("location",e[0].title),c(e[0].title)):console.log("ERROR","Location could not be fetched")}))})).catch((function(e){console.error(e.message)})):c(e)};Object(r.useEffect)((function(){u()}),[]),Object(r.useEffect)((function(){0!==o&&i(o)}),[o]),Object(r.useEffect)((function(){console.log(n),""!==n&&s(n)}),[n]);var d=l.loadingParam.loading;return Object(q.jsx)("div",{className:"App",children:Object(q.jsxs)("main",{children:[Object(q.jsxs)("section",{className:"current",children:[d?Object(q.jsx)("div",{className:"loading-placeholder",children:Object(q.jsx)("span",{children:"Loading..."})}):null,Object(q.jsx)(se,{currentParams:l.currentParams})]}),Object(q.jsxs)("section",{className:"forecasts-highlights",children:[d?Object(q.jsx)("div",{className:"loading-placeholder",children:Object(q.jsx)("span",{children:"Loading..."})}):null,Object(q.jsx)(Te,{forecastsParams:l.forecastsParams})]})]})})},_e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(l.a,{store:I,children:Object(q.jsx)(Ee,{})})}),document.getElementById("root")),_e()}},[[77,1,2]]]);
//# sourceMappingURL=main.663b86e5.chunk.js.map