import"./assets/modulepreload-polyfill-3cfb730f.js";const l={email:"",message:""},a=document.querySelector(".feedback-form");a.addEventListener("input",s);a.addEventListener("submit",m);r();function s(e){const t=e.target.name;l[t]=e.target.value,console.log(l),localStorage.setItem("feedback-form-state",JSON.stringify(l))}function r(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(console.log("Local Storage prewie ",e),!e){console.log("in local Storage clear. Latest input has submit");return}const{email:t,message:o}=a.elements;t.value=e.email,o.value=e.message}function m(e){if(e.preventDefault(),e.target.elements.email.value.trim()==""||e.target.elements.message.value.trim()==""){alert("All form fields and message fields be filled in");return}const t={email:e.target.elements.email.value.trim(),message:e.target.elements.message.value.trim()};console.log("Submit sucsess",t),a.reset(),localStorage.removeItem("feedback-form-state"),console.log("local Storage clear")}
//# sourceMappingURL=commonHelpers2.js.map