import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as s}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),n=document.querySelector("button");n.disabled=!0;let t=null;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){t=e[0],console.log(t),t>new Date?(n.disabled=!1,a()):(n.disabled=!0,s.show({title:"Warning",message:"Please choose a date in the future",color:"red"}))}};m(r,h);n.addEventListener("click",y);function y(e){e.preventDefault(),n.disabled=!0,r.disabled=!0;let o=setInterval(function(){t-Date.now()>=0?a():(clearInterval(o),i({days:"00",hours:"00",minutes:"00",seconds:"00"}),r.disabled=!1,s.show({title:"Done",message:"Countdown finished!",color:"green"}))},1e3)}function a(){const e=t-Date.now(),o=S(e);return i(o)}function i(e){document.querySelector("[data-days]").innerHTML=e.days,document.querySelector("[data-hours]").innerHTML=e.hours,document.querySelector("[data-minutes]").innerHTML=e.minutes,document.querySelector("[data-seconds]").innerHTML=e.seconds}function S(e){const u=Math.floor(e/864e5).toString().padStart(2,"0"),d=Math.floor(e%864e5/36e5).toString().padStart(2,"0"),l=Math.floor(e%864e5%36e5/6e4).toString().padStart(2,"0"),f=Math.floor(e%864e5%36e5%6e4/1e3).toString().padStart(2,"0");return{days:u,hours:d,minutes:l,seconds:f}}
//# sourceMappingURL=1-timer.js.map
