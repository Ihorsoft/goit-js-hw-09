import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""},t=document.querySelector(".feedback-form");t.addEventListener("input",r);t.addEventListener("submit",o);l();function r(e){const m=e.target.name;a[m]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))}function l(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:m,message:s}=t.elements;m.value=e.email||"",s.value=e.message||"",a.email=e.email,a.message=e.message}function o(e){if(e.preventDefault(),a.email.trim()==""||a.message.trim()==""){alert("All form fields and message fields be filled in");return}console.log("formData.email",a.email,"formData.message",a.message),a.email="",a.message="",t.reset(),localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=commonHelpers2.js.map